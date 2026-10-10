export type PageRoute =
  | '/'
  | '/about'
  | '/services'
  | '/services/office-cleaning'
  | '/services/janitorial'
  | '/services/medical-dental'
  | '/services/retail-education'
  | '/services/green-cleaning'
  | '/service-areas'
  | '/quote'
  | '/contact'
  | '/privacy-policy';

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  bullets: string[];
  image: string;
  badge?: string;
}

export interface QuoteFormData {
  fullName: string;
  businessEmail: string;
  phone: string;
  companyName: string;
  zipCode: string;
  facilityType: string;
  requestedService: string;
  cleaningFrequency: string;
  additionalRequirements: string;
  consent: boolean;
  websiteUrl?: string; // honeypot
}

export interface FormErrors {
  [key: string]: string | undefined;
}
