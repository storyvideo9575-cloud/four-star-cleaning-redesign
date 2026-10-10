import { ServerConfig } from './config';
import { ChannelStatus } from './types';

export interface WhatsAppNotificationResult {
  success: boolean;
  status: ChannelStatus;
  error?: string;
}

/**
 * Meta WhatsApp Cloud API Notification Adapter
 * Dispatches an alert to the verified business owner recipient.
 * Adheres strictly to privacy rules: transmits ONLY the lead reference code and
 * secure dashboard URL, never the customer's raw personal information.
 */
export async function sendWhatsAppNotification(
  leadReference: string,
  config: ServerConfig
): Promise<WhatsAppNotificationResult> {
  // 1. Check Paused, Demo & Disabled Modes
  if (config.integrationsPaused || config.demoMode || !config.notificationsEnabled) {
    return {
      success: true,
      status: 'disabled',
    };
  }

  const { accessToken, phoneNumberId, apiVersion, ownerRecipient, templateName } = config.whatsapp;

  // 2. Validate Required Credentials
  if (!accessToken || !phoneNumberId || !ownerRecipient) {
    return {
      success: false,
      status: 'failed',
      error: 'WHATSAPP_CONFIG_MISSING: Access token, phone number ID, or owner recipient is not configured.',
    };
  }

  const endpoint = `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`;
  const secureDashboardLink = `${config.appBaseUrl}/admin/leads/${encodeURIComponent(leadReference)}`;

  // Meta Cloud API Message Payload (Utility Template format)
  // Complies with WhatsApp Business Platform messaging policies
  const payload = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
    to: ownerRecipient.replace(/\D/g, ''),
    type: 'template',
    template: {
      name: templateName,
      language: {
        code: 'en_US',
      },
      components: [
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: leadReference,
            },
            {
              type: 'text',
              text: secureDashboardLink,
            },
          ],
        },
      ],
    },
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.text().catch(() => 'Unknown error');
      // Sanitize: never log or expose token
      return {
        success: false,
        status: 'failed',
        error: `WHATSAPP_API_HTTP_${response.status}: Message delivery failed`,
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
      error: isTimeout ? 'WHATSAPP_TIMEOUT: Request timed out after 5000ms' : 'WHATSAPP_NETWORK_ERROR',
    };
  }
}
