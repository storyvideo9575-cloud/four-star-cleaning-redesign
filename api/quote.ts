import type { IncomingMessage, ServerResponse } from 'http';
import { QuoteSchema, ApiResponse, ChannelDeliverySummary } from './_lib/types';
import { getServerConfig } from './_lib/config';
import { saveLeadToDatabase, updateLeadNotificationStatus } from './_lib/storage';
import { sendWhatsAppNotification } from './_lib/whatsapp';
import { sendEmailBackup } from './_lib/email';
import { checkRateLimit, checkDuplicateSubmission, recordIdempotency } from './_lib/rateLimit';
import crypto from 'crypto';

interface VercelRequest extends IncomingMessage {
  body?: any;
  query?: Record<string, string>;
  headers: Record<string, string | string[] | undefined>;
  method?: string;
}

interface VercelResponse extends ServerResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => VercelResponse;
  setHeader: (name: string, value: string | string[]) => this;
}

// Helper to safely parse JSON body if not pre-parsed by middleware
async function getParsedBody(req: VercelRequest): Promise<{ body: any; error?: string }> {
  if (req.body && typeof req.body === 'object') {
    return { body: req.body };
  }

  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      // Reject oversized requests (> 64KB)
      if (raw.length > 64 * 1024) {
        req.destroy();
        resolve({ body: null, error: 'PAYLOAD_TOO_LARGE: Request exceeds 64KB maximum size limit.' });
      }
    });

    req.on('end', () => {
      if (!raw) {
        return resolve({ body: {} });
      }
      try {
        const parsed = JSON.parse(raw);
        resolve({ body: parsed });
      } catch {
        resolve({ body: null, error: 'INVALID_JSON: Failed to parse JSON request body.' });
      }
    });

    req.on('error', () => {
      resolve({ body: null, error: 'STREAM_ERROR: Failed to read incoming request.' });
    });
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse): Promise<void> {
  // CORS & Security headers
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // 1. Accept POST requests only
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).json({
      ok: false,
      demo: true,
      error: 'Method Not Allowed. This endpoint accepts POST requests only.',
    } satisfies ApiResponse);
    return;
  }

  // 2. Rate limiting check by IP
  const clientIp =
    (typeof req.headers['x-forwarded-for'] === 'string'
      ? req.headers['x-forwarded-for'].split(',')[0].trim()
      : null) ||
    (typeof req.headers['x-real-ip'] === 'string' ? req.headers['x-real-ip'] : null) ||
    '127.0.0.1';

  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.allowed) {
    res.status(429).json({
      ok: false,
      demo: true,
      error: 'Too Many Requests. Rate limit exceeded. Please wait a few minutes before submitting another proposal request.',
    } satisfies ApiResponse);
    return;
  }

  // 3. Read and parse body safely
  const { body, error: bodyError } = await getParsedBody(req);
  if (bodyError || !body) {
    res.status(400).json({
      ok: false,
      demo: true,
      error: bodyError || 'Invalid request payload.',
    } satisfies ApiResponse);
    return;
  }

  // 4. Validate input schema with Zod
  const validation = QuoteSchema.safeParse(body);
  if (!validation.success) {
    const errorDetails = validation.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join(', ');
    res.status(400).json({
      ok: false,
      demo: true,
      error: `Validation failed: ${errorDetails}`,
    } satisfies ApiResponse);
    return;
  }

  const input = validation.data;

  // 5. Spam bot protection (honeypot check)
  if (input.websiteUrl && input.websiteUrl.length > 0) {
    // Silently return success to bot without processing
    res.status(200).json({
      ok: true,
      demo: true,
      message: 'Request processed.',
    } satisfies ApiResponse);
    return;
  }

  // 6. Idempotency & duplicate submission check
  const submissionHash = crypto
    .createHash('sha256')
    .update(`${input.businessEmail}:${input.companyName}:${input.requestedService}`)
    .digest('hex');

  const duplicateCheck = checkDuplicateSubmission(input.idempotencyKey, submissionHash);
  if (duplicateCheck.isDuplicate) {
    res.status(200).json({
      ok: true,
      demo: true,
      message: 'Duplicate request detected. Existing quote proposal parameters are already registered.',
      reference: duplicateCheck.existingReference,
    } satisfies ApiResponse);
    return;
  }

  // 7. Check server configuration (Demo vs Production)
  const config = getServerConfig();

  // 8. PAUSED OR DEMO MODE PATH (Default)
  if (config.integrationsPaused || config.demoMode) {
    // Generate ephemeral reference for preview without database requirement
    const storageResult = await saveLeadToDatabase(input, { isDemo: true });

    recordIdempotency(input.idempotencyKey || submissionHash, storageResult.reference);

    res.status(200).json({
      ok: true,
      demo: true,
      reference: storageResult.reference,
      message:
        'Quote request parameters validated successfully. Notifications and database integrations are temporarily paused. To arrange service directly today, please call (212) 741-9400.',
      channels: {
        whatsapp: 'disabled',
        email: 'disabled',
      },
    } satisfies ApiResponse);
    return;
  }

  // 9. PRODUCTION MODE PATH
  // In production, we require an authorized database connection before notification dispatch
  const storageResult = await saveLeadToDatabase(input, {
    isDemo: false,
    databaseUrl: config.databaseUrl,
  });

  if (!storageResult.success) {
    // Secure generic response without exposing credentials
    res.status(503).json({
      ok: false,
      demo: false,
      error:
        'Storage system error. Production lead persistence is not configured or available. Please contact (212) 741-9400 for immediate assistance.',
    } satisfies ApiResponse);
    return;
  }

  // Track channels independently
  const channels: ChannelDeliverySummary = {
    whatsapp: 'disabled',
    email: 'disabled',
  };

  if (config.notificationsEnabled) {
    // 10. Attempt WhatsApp notification first
    const whatsappResult = await sendWhatsAppNotification(storageResult.reference, config);
    channels.whatsapp = whatsappResult.status;

    // 11. If WhatsApp fails (or if WhatsApp is unconfigured), attempt Email Backup
    if (!whatsappResult.success || channels.whatsapp !== 'sent') {
      const emailResult = await sendEmailBackup(storageResult.reference, config);
      channels.email = emailResult.status;
    } else {
      channels.email = 'skipped';
    }

    // Update database record with notification delivery status
    await updateLeadNotificationStatus(storageResult.reference, channels, config.databaseUrl);
  }

  recordIdempotency(input.idempotencyKey || submissionHash, storageResult.reference);

  res.status(200).json({
    ok: true,
    demo: false,
    reference: storageResult.reference,
    message: 'Proposal request logged. Our commercial accounts team will review your parameters.',
    channels,
  } satisfies ApiResponse);
}
