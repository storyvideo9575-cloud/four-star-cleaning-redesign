import { ServerConfig } from './config';
import { ChannelStatus } from './types';

export interface EmailNotificationResult {
  success: boolean;
  status: ChannelStatus;
  error?: string;
}

/**
 * Server-side Email Backup Adapter
 * Sends an alert to company-approved management recipients when configured.
 * Adheres strictly to privacy rules: transmits ONLY the lead reference code and
 * secure dashboard URL, never the customer's raw personal information.
 */
export async function sendEmailBackup(
  leadReference: string,
  config: ServerConfig
): Promise<EmailNotificationResult> {
  // 1. Check Paused, Demo & Disabled Modes
  if (config.integrationsPaused || config.demoMode || !config.notificationsEnabled) {
    return {
      success: true,
      status: 'disabled',
    };
  }

  const { apiKey, from, to } = config.email;

  // 2. Validate Required Credentials
  if (!apiKey || !from || !to) {
    return {
      success: false,
      status: 'failed',
      error: 'EMAIL_CONFIG_MISSING: Provider API key, sender address, or recipient address is not configured.',
    };
  }

  const secureDashboardLink = `${config.appBaseUrl}/admin/leads/${encodeURIComponent(leadReference)}`;

  const subject = `[Four Star Cleaning Alert] New Commercial Lead Ref: ${leadReference}`;
  const textContent = `New commercial cleaning proposal requested.

Lead Reference: ${leadReference}
Access the secure internal dashboard to view verified parameters:
${secureDashboardLink}

Note: For security and compliance, customer contact details are accessible exclusively via authenticated company portal.`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    // Uses standard Resend / SendGrid compatible HTTP REST API (universal across serverless)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: textContent,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      return {
        success: false,
        status: 'failed',
        error: `EMAIL_PROVIDER_HTTP_${response.status}: Email delivery failed`,
      };
    }

    return {
      success: true,
      status: 'sent',
    };
  } catch (err) {
    clearTimeout(timeoutId);
    const isTimeout = err instanceof Error && err.name === 'AbortError';
    return {
      success: false,
      status: 'failed',
      error: isTimeout ? 'EMAIL_TIMEOUT: Request timed out after 5000ms' : 'EMAIL_NETWORK_ERROR',
    };
  }
}
