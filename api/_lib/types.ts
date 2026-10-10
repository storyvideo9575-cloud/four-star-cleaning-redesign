import { z } from 'zod';

export const QuoteSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Full name must be at least 2 characters' })
    .max(100, { message: 'Full name cannot exceed 100 characters' }),
  businessEmail: z
    .string()
    .trim()
    .email({ message: 'A valid business email address is required' })
    .max(120, { message: 'Email cannot exceed 120 characters' })
    .toLowerCase(),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\s.-]{10,25}$/, { message: 'Please provide a valid phone number (at least 10 digits)' })
    .max(25, { message: 'Phone number cannot exceed 25 characters' }),
  companyName: z
    .string()
    .trim()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(120, { message: 'Company name cannot exceed 120 characters' }),
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, { message: 'ZIP code must be 5 digits (e.g. 10010)' }),
  facilityType: z
    .string()
    .trim()
    .min(2, { message: 'Facility type is required' })
    .max(80, { message: 'Facility type cannot exceed 80 characters' }),
  requestedService: z
    .string()
    .trim()
    .min(2, { message: 'Requested service is required' })
    .max(100, { message: 'Requested service cannot exceed 100 characters' }),
  cleaningFrequency: z
    .string()
    .trim()
    .min(2, { message: 'Cleaning frequency is required' })
    .max(80, { message: 'Cleaning frequency cannot exceed 80 characters' }),
  additionalRequirements: z
    .string()
    .trim()
    .max(1000, { message: 'Additional requirements cannot exceed 1,000 characters' })
    .optional()
    .default(''),
  consent: z
    .boolean()
    .refine((val) => val === true, { message: 'You must acknowledge the proposal terms' }),
  // Invisible honeypot field for spam prevention: must be empty
  websiteUrl: z
    .string()
    .max(0, { message: 'Bot detected' })
    .optional()
    .default(''),
  idempotencyKey: z
    .string()
    .trim()
    .max(64)
    .optional(),
});

export type QuoteInput = z.infer<typeof QuoteSchema>;

export type ChannelStatus = 'sent' | 'failed' | 'disabled' | 'skipped';

export interface ChannelDeliverySummary {
  whatsapp: ChannelStatus;
  email: ChannelStatus;
}

export interface LeadRecord {
  id: string;
  reference: string;
  createdAt: string;
  status: 'validated' | 'pending' | 'processed';
  facilityType: string;
  requestedService: string;
  cleaningFrequency: string;
  companyName: string;
  zipCode: string;
  channels: ChannelDeliverySummary;
}

export interface ApiResponse {
  ok: boolean;
  demo: boolean;
  message?: string;
  reference?: string;
  channels?: ChannelDeliverySummary;
  error?: string;
}
