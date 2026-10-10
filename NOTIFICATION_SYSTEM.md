# Four Star General Cleaning Service — Quote Notification Architecture

> **Status Notice: Integrations Temporarily Paused**
> All WhatsApp Cloud API, email notification, and database integrations are currently paused.
> Notifications are disabled (`NOTIFICATIONS_ENABLED=false`) and there are **no mandatory environment variable requirements** blocking deployment or operation.
> All adapter code and schemas remain preserved in the codebase and ready for future activation when authorized.

---

## 1. Safety & Demo Mode Defaults

The system operates with strict safety defaults:

| Variable | Default Value | Purpose |
|---|---|---|
| `DEMO_MODE` | `true` | When `true`, inputs are verified in-memory. Zero real notifications are dispatched, and zero customer PII is persisted. |
| `NOTIFICATIONS_ENABLED` | `false` | When `false`, all external network notifications (WhatsApp Cloud API and Email backup) remain dormant. |

### Demo vs. Production Behavior

| Feature | Demo Mode (`DEMO_MODE=true`) | Production Mode (`DEMO_MODE=false`) |
|---|---|---|
| **Form Validation** | Full client-side & server-side Zod validation | Full client-side & server-side Zod validation |
| **Lead Reference** | Ephemeral code (e.g. `FS-DEMO-20261010-8A3F`) | Permanent unique code (e.g. `FS-20261010-8A3F`) |
| **Database Storage** | Ephemeral; **no PII stored** in DB or browser | Stored in authorized PostgreSQL database (`DATABASE_URL`) |
| **WhatsApp Dispatch** | **Disabled** (no Meta API call) | Meta WhatsApp Cloud API alert to owner recipient |
| **Email Backup** | **Disabled** (no email provider call) | Resend / SendGrid / Postmark fallback alert |
| **User Confirmation** | Clear demo notice; directs to (212) 741-9400 | Formal confirmation with assigned lead reference |

---

## 2. Server-Side Vercel API Architecture

- **Endpoint**: `/api/quote` (Serverless Function on Vercel, mapped to Vite dev server in local testing)
- **Method**: `POST` only (rejects `GET`, `PUT`, etc. with `405 Method Not Allowed`)
- **Payload Limit**: Maximum `64KB` (rejects oversized streams with `400 Bad Request`)
- **Rate Limiting**: In-memory token bucket limiting requests to 5 per 10 minutes per IP (`429 Too Many Requests`)
- **Spam Protection**: Invisible honeypot field (`websiteUrl`). Bots filling this field are silently ignored.
- **Idempotency**: Protects against rapid duplicate button clicks using SHA-256 fingerprinting within a 60-second window.

---

## 3. Meta WhatsApp Cloud API Adapter

- **Provider**: Meta's official WhatsApp Business Platform Cloud API (`https://graph.facebook.com/${version}/${phone_number_id}/messages`)
- **Environment Variables**:
  - `WHATSAPP_ACCESS_TOKEN`: System User Permanent Access Token with `whatsapp_business_messaging` permission.
  - `WHATSAPP_PHONE_NUMBER_ID`: Meta Cloud API Phone Number ID.
  - `WHATSAPP_API_VERSION`: API version (default: `v21.0`).
  - `WHATSAPP_OWNER_RECIPIENT`: Company-authorized owner phone number (E.164 format, digits only, e.g. `12127419400`).
  - `WHATSAPP_TEMPLATE_NAME`: Pre-approved utility message template (e.g., `lead_notification_alert`).
- **Privacy Enforcement**: The notification sends **only** the lead reference and an authenticated internal dashboard URL (`${APP_BASE_URL}/admin/leads/${ref}`). The customer's raw personal information (name, email, phone) is never exposed over third-party chat webhooks.
- **Timeout**: 5,000ms request timeout with fail-safe error handling.

---

## 4. Email Backup Adapter

- **Provider**: Resend, SendGrid, or Postmark compatible REST API.
- **Environment Variables**:
  - `EMAIL_PROVIDER_API_KEY`: Server-side API key.
  - `EMAIL_FROM`: Verified corporate sender (e.g. `notifications@4starcleaning.com`).
  - `EMAIL_TO`: Company dispatch inbox (e.g. `management@4starcleaning.com`).
- **Fallback Trigger**: If the primary WhatsApp notification fails (network timeout, rate limit, or configuration issue), the system automatically triggers the email backup. Each channel's status (`sent`, `failed`, `disabled`, or `skipped`) is tracked independently.

---

## 5. Secure Database Persistence

- **Requirement**: Production persistence must succeed **before** any notification is sent.
- **Failsafe**: If `DATABASE_URL` is missing when production mode is activated, the API returns a safe `503 Service Unavailable` error and logs the setup requirement. It never silently pretends to succeed.
- **Recommended Database**: PostgreSQL (Supabase, Neon, AWS RDS, or Cloud SQL) with TLS encryption in transit and at rest.

### Recommended PostgreSQL Schema

```sql
CREATE TABLE commercial_quote_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference VARCHAR(32) UNIQUE NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    company_name VARCHAR(120) NOT NULL,
    facility_type VARCHAR(80) NOT NULL,
    requested_service VARCHAR(100) NOT NULL,
    cleaning_frequency VARCHAR(80) NOT NULL,
    zip_code VARCHAR(10) NOT NULL,
    whatsapp_status VARCHAR(20) DEFAULT 'pending',
    email_status VARCHAR(20) DEFAULT 'pending',
    processed BOOLEAN DEFAULT FALSE
);

-- Index for rapid reference retrieval
CREATE INDEX idx_quote_reference ON commercial_quote_leads(reference);
```

---

## 6. Environment Variables Reference

Configure these environment variables in your Vercel Project Settings under **Settings > Environment Variables**:

```bash
# System Modes (Keep DEMO_MODE=true until authorized)
DEMO_MODE=true
NOTIFICATIONS_ENABLED=false

# Database Connection String
DATABASE_URL=postgresql://user:password@host:5432/dbname?sslmode=require

# Meta WhatsApp Cloud API
WHATSAPP_ACCESS_TOKEN=EAAG...
WHATSAPP_PHONE_NUMBER_ID=10987654321
WHATSAPP_API_VERSION=v21.0
WHATSAPP_OWNER_RECIPIENT=12127419400
WHATSAPP_TEMPLATE_NAME=lead_notification_alert

# Email Backup
EMAIL_PROVIDER_API_KEY=re_123456789...
EMAIL_FROM=notifications@4starcleaning.com
EMAIL_TO=dispatch@4starcleaning.com

# Base Domain
APP_BASE_URL=https://4starcleaning.com
```

*Note: None of these variables use the `VITE_` prefix, ensuring they are never exposed to browser bundles.*

---

## 7. Step-by-Step Production Activation Checklist

1. [ ] **Written Authorization**: Receive written sign-off from Four Star General Cleaning Service management.
2. [ ] **Meta Business Verification**: Complete Meta Business Verification for the company WhatsApp account.
3. [ ] **Message Template Approval**: Create and approve the `lead_notification_alert` utility template in Meta Business Manager.
4. [ ] **Database Provisioning**: Provision an encrypted PostgreSQL instance and apply the schema above.
5. [ ] **Vercel Secrets Setup**: Configure all variables in the Vercel dashboard.
6. [ ] **Automated Test Run**: Run `npm run test` to verify all safety rules pass.
7. [ ] **Flip Flags**: In Vercel, set `DEMO_MODE=false` and `NOTIFICATIONS_ENABLED=true`, then redeploy.

---

## 8. Automated Verification Suite

Run the full automated test suite anytime using:

```bash
npm run test
```

This verifies:
1. Demo mode returns `disabled` and never contacts Meta or email providers.
2. Form fields adhere to strict lengths, email formats, and 5-digit NYC ZIP codes.
3. Honeypot anti-spam traps detect automated bots.
4. Production readiness check safely rejects unconfigured deployments.
5. Missing `DATABASE_URL` halts execution without fake success.
6. WhatsApp failure triggers email backup with independent channel statuses.
7. Idempotency window blocks rapid duplicate submissions.
8. IP rate limiting blocks flood requests (HTTP 429).
9. Zero credentials or tokens leak into error messages or API responses.
