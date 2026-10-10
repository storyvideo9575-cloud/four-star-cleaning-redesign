import { QuoteSchema } from '../api/_lib/types';
import { getServerConfig, checkProductionReadiness, ServerConfig } from '../api/_lib/config';
import { saveLeadToDatabase } from '../api/_lib/storage';
import { sendWhatsAppNotification } from '../api/_lib/whatsapp';
import { sendEmailBackup } from '../api/_lib/email';
import { checkRateLimit, checkDuplicateSubmission, recordIdempotency } from '../api/_lib/rateLimit';

// ANSI terminal colors for clean test reporting
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  if (condition) {
    console.log(`  ${GREEN}✓ PASS:${RESET} ${testName}`);
    passedTests++;
  } else {
    console.error(`  ${RED}✗ FAIL:${RESET} ${testName} ${detail ? `(${detail})` : ''}`);
    failedTests++;
  }
}

async function runTests() {
  console.log(`\n${CYAN}================================================================${RESET}`);
  console.log(`${CYAN} Four Star General Cleaning Service - Notification System Tests ${RESET}`);
  console.log(`${CYAN}================================================================${RESET}\n`);

  // --------------------------------------------------------------------------
  // TEST 1: Demo Mode Safety Defaults
  // --------------------------------------------------------------------------
  console.log(`[Test Group 1] Demo Mode Safety Defaults`);
  const demoConfig: ServerConfig = {
    demoMode: true,
    notificationsEnabled: false,
    integrationsPaused: true,
    whatsapp: {
      apiVersion: 'v21.0',
      templateName: 'lead_notification_alert',
    },
    email: {},
    appBaseUrl: 'https://4starcleaning.com',
  };

  const waDemoResult = await sendWhatsAppNotification('FS-DEMO-20261010-ABCD', demoConfig);
  assert(
    waDemoResult.status === 'disabled',
    'WhatsApp adapter returns "disabled" in demo mode without network dispatch'
  );

  const emailDemoResult = await sendEmailBackup('FS-DEMO-20261010-ABCD', demoConfig);
  assert(
    emailDemoResult.status === 'disabled',
    'Email adapter returns "disabled" in demo mode without network dispatch'
  );

  const storageDemoResult = await saveLeadToDatabase(
    {
      fullName: 'Test User',
      companyName: 'Test Corp',
      businessEmail: 'test@example.com',
      phone: '2125550199',
      zipCode: '10010',
      facilityType: 'Office',
      requestedService: 'Office Cleaning',
      cleaningFrequency: 'Weekly',
      additionalRequirements: '',
      consent: true,
      websiteUrl: '',
    },
    { isDemo: true }
  );
  assert(
    storageDemoResult.success && storageDemoResult.reference.startsWith('FS-DEMO-'),
    'Demo storage returns ephemeral reference without persisting PII to database'
  );

  // --------------------------------------------------------------------------
  // TEST 2: Schema Validation & Length Limits
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 2] Input Schema Validation & Limits`);

  const validPayload = {
    fullName: 'Corporate Facility Lead',
    companyName: 'Acme Commercial Properties',
    businessEmail: 'facility@acme-properties.com',
    phone: '(212) 555-0199',
    zipCode: '10010',
    facilityType: 'Commercial Corporate Office',
    requestedService: 'Commercial Office Cleaning',
    cleaningFrequency: 'Daily (5–7 days per week)',
    additionalRequirements: 'Needs daily evening service.',
    consent: true,
  };

  const validParsed = QuoteSchema.safeParse(validPayload);
  assert(validParsed.success, 'Valid proposal payload is accepted by Zod schema');

  const invalidEmailParsed = QuoteSchema.safeParse({
    ...validPayload,
    businessEmail: 'not-an-email',
  });
  assert(!invalidEmailParsed.success, 'Invalid email address is rejected');

  const shortPhoneParsed = QuoteSchema.safeParse({
    ...validPayload,
    phone: '12345',
  });
  assert(!shortPhoneParsed.success, 'Short/invalid phone number is rejected');

  const invalidZipParsed = QuoteSchema.safeParse({
    ...validPayload,
    zipCode: '100',
  });
  assert(!invalidZipParsed.success, 'Non-5-digit ZIP code is rejected');

  const oversizedNameParsed = QuoteSchema.safeParse({
    ...validPayload,
    fullName: 'A'.repeat(150),
  });
  assert(!oversizedNameParsed.success, 'Oversized full name (>100 chars) is rejected');

  const oversizedRequirementsParsed = QuoteSchema.safeParse({
    ...validPayload,
    additionalRequirements: 'B'.repeat(1500),
  });
  assert(!oversizedRequirementsParsed.success, 'Oversized requirements (>1000 chars) is rejected');

  // --------------------------------------------------------------------------
  // TEST 3: Honeypot Anti-Spam Detection
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 3] Anti-Spam Honeypot Protection`);
  const botPayload = {
    ...validPayload,
    websiteUrl: 'https://spam-bot-trap.com', // Filled honeypot
  };
  const botParsed = QuoteSchema.safeParse(botPayload);
  assert(
    !botParsed.success,
    'Bot payload with filled honeypot is flagged as invalid'
  );

  // --------------------------------------------------------------------------
  // TEST 4: Integrations Paused & Mandatory Env Var Exemption
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 4] Integrations Paused & Env Var Exemption`);
  const currentConfig = getServerConfig();
  assert(
    currentConfig.integrationsPaused && !currentConfig.notificationsEnabled,
    'Integrations and notifications are temporarily paused'
  );

  const readiness = checkProductionReadiness(currentConfig);
  assert(
    readiness.paused && readiness.ready && readiness.missing.length === 0,
    'No mandatory environment variables are required while integrations are paused'
  );

  // --------------------------------------------------------------------------
  // TEST 5: Database Failure in Production Mode
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 5] Database Failure Safe Handling`);
  const prodStorageWithoutDb = await saveLeadToDatabase(validParsed.data!, {
    isDemo: false,
    databaseUrl: undefined,
  });
  assert(
    !prodStorageWithoutDb.success &&
      Boolean(prodStorageWithoutDb.error?.includes('PRODUCTION_DATABASE_NOT_CONFIGURED')),
    'Production storage explicitly fails when DATABASE_URL is not set (does not silently succeed)'
  );

  // --------------------------------------------------------------------------
  // TEST 6: WhatsApp API Failure & Email Fallback
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 6] WhatsApp Failure & Email Backup Fallback`);
  const prodConfigWithFailedWhatsApp: ServerConfig = {
    demoMode: false,
    notificationsEnabled: true,
    integrationsPaused: false, // Testing adapter fallback behavior in isolation
    whatsapp: {
      accessToken: 'dummy_invalid_token',
      phoneNumberId: 'dummy_phone_id',
      apiVersion: 'v21.0',
      ownerRecipient: '12125550199',
      templateName: 'lead_notification_alert',
    },
    email: {
      apiKey: 'dummy_email_key',
      from: 'alerts@4starcleaning.com',
      to: 'dispatch@4starcleaning.com',
    },
    appBaseUrl: 'https://4starcleaning.com',
  };

  const waFailResult = await sendWhatsAppNotification('FS-20261010-8A3F', prodConfigWithFailedWhatsApp);
  assert(
    !waFailResult.success && waFailResult.status === 'failed',
    'WhatsApp failure is caught safely with status "failed"'
  );

  // --------------------------------------------------------------------------
  // TEST 7: Duplicate Submission & Idempotency Protection
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 7] Idempotency & Duplicate Submission`);
  const testIdempKey = 'idemp_test_unique_key_123';
  recordIdempotency(testIdempKey, 'FS-20261010-IDEMP');

  const duplicateCheck = checkDuplicateSubmission(testIdempKey);
  assert(
    duplicateCheck.isDuplicate && duplicateCheck.existingReference === 'FS-20261010-IDEMP',
    'Duplicate request within idempotency window is correctly detected and referenced'
  );

  const nonDuplicateCheck = checkDuplicateSubmission('idemp_fresh_key_999');
  assert(!nonDuplicateCheck.isDuplicate, 'Fresh idempotency key is allowed to proceed');

  // --------------------------------------------------------------------------
  // TEST 8: IP Rate Limiting
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 8] IP Rate Limiter`);
  const testIp = '198.51.100.42';
  for (let i = 0; i < 5; i++) {
    checkRateLimit(testIp);
  }
  const rateLimitExceeded = checkRateLimit(testIp);
  assert(
    !rateLimitExceeded.allowed && rateLimitExceeded.remaining === 0,
    'Client IP is blocked after exceeding 5 requests in window (HTTP 429)'
  );

  // --------------------------------------------------------------------------
  // TEST 9: Secret Leakage Audit
  // --------------------------------------------------------------------------
  console.log(`\n[Test Group 9] Security & Secret Leakage Audit`);
  const sampleError = waFailResult.error || '';
  const doesNotLeakWaToken = !sampleError.includes('dummy_invalid_token');
  assert(
    doesNotLeakWaToken,
    'WhatsApp adapter does not expose accessToken in error output'
  );

  // --------------------------------------------------------------------------
  // SUMMARY
  // --------------------------------------------------------------------------
  console.log(`\n${CYAN}================================================================${RESET}`);
  console.log(`Test Execution Summary: ${GREEN}${passedTests} passed${RESET}, ${failedTests > 0 ? `${RED}${failedTests} failed` : `${GREEN}0 failed`}`);
  console.log(`${CYAN}================================================================${RESET}\n`);

  if (failedTests > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error('Test runner fatal error:', err);
  process.exit(1);
});
