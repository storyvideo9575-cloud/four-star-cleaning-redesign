export interface ServerConfig {
  demoMode: boolean;
  notificationsEnabled: boolean;
  integrationsPaused: boolean;
  databaseUrl?: string;
  whatsapp: {
    accessToken?: string;
    phoneNumberId?: string;
    apiVersion: string;
    ownerRecipient?: string;
    templateName: string;
  };
  email: {
    apiKey?: string;
    from?: string;
    to?: string;
  };
  appBaseUrl: string;
}

export function getServerConfig(): ServerConfig {
  // Integrations are temporarily paused per instructions.
  // Notifications are disabled and mandatory environment-variable requirements removed.
  // Existing adapter code is preserved and ready to be configured later.
  const integrationsPaused = true;
  const demoMode = true;
  const notificationsEnabled = false;

  return {
    demoMode,
    notificationsEnabled,
    integrationsPaused,
    databaseUrl: process.env.DATABASE_URL || undefined,
    whatsapp: {
      accessToken: process.env.WHATSAPP_ACCESS_TOKEN || undefined,
      phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || undefined,
      apiVersion: process.env.WHATSAPP_API_VERSION || 'v21.0',
      ownerRecipient: process.env.WHATSAPP_OWNER_RECIPIENT || undefined,
      templateName: process.env.WHATSAPP_TEMPLATE_NAME || 'lead_notification_alert',
    },
    email: {
      apiKey: process.env.EMAIL_PROVIDER_API_KEY || undefined,
      from: process.env.EMAIL_FROM || undefined,
      to: process.env.EMAIL_TO || undefined,
    },
    appBaseUrl: process.env.APP_BASE_URL || 'https://4starcleaning.com',
  };
}

export interface ProductionCheckResult {
  ready: boolean;
  missing: string[];
  paused: boolean;
}

export function checkProductionReadiness(config: ServerConfig): ProductionCheckResult {
  // When integrations are paused, no mandatory environment variables are required.
  if (config.integrationsPaused) {
    return {
      ready: true,
      missing: [],
      paused: true,
    };
  }

  const missing: string[] = [];

  if (!config.databaseUrl) {
    missing.push('DATABASE_URL');
  }

  // At least WhatsApp or Email must be configured for notifications
  const hasWhatsApp =
    !!config.whatsapp.accessToken &&
    !!config.whatsapp.phoneNumberId &&
    !!config.whatsapp.ownerRecipient;

  const hasEmail =
    !!config.email.apiKey &&
    !!config.email.from &&
    !!config.email.to;

  if (!hasWhatsApp && !hasEmail) {
    missing.push('WHATSAPP credentials or EMAIL credentials');
  }

  return {
    ready: missing.length === 0,
    missing,
    paused: false,
  };
}
