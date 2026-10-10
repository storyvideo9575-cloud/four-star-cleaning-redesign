import React, { useState } from 'react';
import { QuoteFormData, FormErrors } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { CheckCircle2, Phone, MapPin, Loader2, RefreshCw, AlertCircle } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    businessEmail: '',
    phone: '',
    companyName: '',
    zipCode: '',
    facilityType: 'Commercial Corporate Office',
    requestedService: initialService || 'Commercial Office Cleaning',
    cleaningFrequency: 'Daily (5–7 days per week)',
    additionalRequirements: '',
    consent: false,
    websiteUrl: '', // honeypot trap
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    demo: boolean;
    reference?: string;
    message?: string;
    error?: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    } else if (formData.fullName.length > 100) {
      newErrors.fullName = 'Full name cannot exceed 100 characters.';
    }

    if (!formData.companyName.trim() || formData.companyName.trim().length < 2) {
      newErrors.companyName = 'Company name is required.';
    } else if (formData.companyName.length > 120) {
      newErrors.companyName = 'Company name cannot exceed 120 characters.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail.trim())) {
      newErrors.businessEmail = 'Please provide a valid corporate email address.';
    } else if (formData.businessEmail.length > 120) {
      newErrors.businessEmail = 'Email cannot exceed 120 characters.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit phone number.';
    } else if (formData.phone.length > 25) {
      newErrors.phone = 'Phone number is too long.';
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'NYC facility ZIP code is required.';
    } else if (!/^\d{5}$/.test(formData.zipCode.trim())) {
      newErrors.zipCode = 'ZIP code must be 5 digits (e.g. 10010).';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the proposal parameters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionResult(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          idempotencyKey: `idemp_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        setSubmissionResult({
          success: false,
          demo: true,
          error: data.error || 'Server validation error. Please check your parameters and try again.',
        });
      } else {
        setSubmissionResult({
          success: true,
          demo: data.demo ?? true,
          reference: data.reference,
          message: data.message,
        });
      }
    } catch {
      // Graceful fallback if server route is offline or during static review
      setSubmissionResult({
        success: true,
        demo: true,
        reference: `FS-DEMO-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-8A3F`,
        message:
          'Demo mode: Your quote request parameters were validated successfully. No real notification has been sent and no personal information was stored. To arrange service directly today, please call (212) 741-9400.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      businessEmail: '',
      phone: '',
      companyName: '',
      zipCode: '',
      facilityType: 'Commercial Corporate Office',
      requestedService: initialService || 'Commercial Office Cleaning',
      cleaningFrequency: 'Daily (5–7 days per week)',
      additionalRequirements: '',
      consent: false,
      websiteUrl: '',
    });
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4.5 sm:p-8 lg:p-10">
      {submissionResult && submissionResult.success ? (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3D8B68] shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#10243A]">
                    Quote Request Parameters Validated
                  </h3>
                  {submissionResult.reference && (
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 bg-slate-200/80 rounded text-slate-800">
                      Ref: {submissionResult.reference}
                    </span>
                  )}
                </div>

                {/* Explicitly Compliant Demo Notice: Never claims notification sent */}
                <div className="p-3.5 bg-white border border-slate-200 rounded-md text-xs text-slate-600 leading-relaxed space-y-1">
                  <p className="font-semibold text-slate-900">Demo Prototype Status:</p>
                  <p>
                    This form is operating in <strong>demonstration mode</strong>. Your proposal specifications were validated, but <strong>no real WhatsApp message or email notification has been dispatched</strong>, and no personal data has been stored in production systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Official Contact Alternative */}
            <div className="pt-2 border-t border-slate-200/80 space-y-2">
              <p className="text-xs font-semibold text-[#10243A] uppercase tracking-wide">
                Direct Contact for Live Inquiries:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#3D8B68] shrink-0" />
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-900 font-semibold hover:text-[#3D8B68]">
                    {BUSINESS_INFO.phone} <span className="font-normal text-slate-500">(Mon–Fri 9 AM–6 PM)</span>
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#3D8B68] shrink-0" />
                  <span>{BUSINESS_INFO.address.street}, Suite 601A, New York</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Submit Another Quote Request</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
          <div className="border-b border-slate-100 pb-3 sm:pb-4">
            <h3 className="text-base sm:text-lg font-bold text-[#10243A] tracking-tight">
              Commercial Proposal Parameters
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Provide your facility details below to structure a recurring cleaning scope.
            </p>
          </div>

          {submissionResult && !submissionResult.success && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-md text-xs text-rose-800 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block">Request Not Processed:</strong>
                <p>{submissionResult.error}</p>
              </div>
            </div>
          )}

          {/* Invisible honeypot field for anti-bot spam protection */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="websiteUrl">Leave blank</label>
            <input
              type="text"
              id="websiteUrl"
              tabIndex={-1}
              autoComplete="off"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            />
          </div>

          {/* Row 1: Full Name & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                maxLength={100}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68] transition-colors ${
                  errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                placeholder="Jane Smith"
              />
              {errors.fullName && <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company / Organization <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                maxLength={120}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68] transition-colors ${
                  errors.companyName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                placeholder="e.g. Apex Corporate Partners"
              />
              {errors.companyName && <p className="mt-1 text-xs text-rose-600">{errors.companyName}</p>}
            </div>
          </div>

          {/* Row 2: Business Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="businessEmail" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Business Email <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="businessEmail"
                value={formData.businessEmail}
                maxLength={120}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68] transition-colors ${
                  errors.businessEmail ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                placeholder="jsmith@company.com"
              />
              {errors.businessEmail && <p className="mt-1 text-xs text-rose-600">{errors.businessEmail}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Phone Number <span className="text-rose-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                maxLength={25}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68] transition-colors ${
                  errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                placeholder="(212) 555-0199"
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
            </div>
          </div>

          {/* Row 3: ZIP Code & Facility Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="zipCode" className="block text-xs font-semibold text-slate-700 mb-1.5">
                NYC Facility ZIP Code <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                maxLength={5}
                value={formData.zipCode}
                onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                className={`w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68] transition-colors ${
                  errors.zipCode ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
                placeholder="10010"
              />
              {errors.zipCode && <p className="mt-1 text-xs text-rose-600">{errors.zipCode}</p>}
            </div>

            <div>
              <label htmlFor="facilityType" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Facility Type
              </label>
              <select
                id="facilityType"
                value={formData.facilityType}
                onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
              >
                <option value="Commercial Corporate Office">Commercial Corporate Office</option>
                <option value="Medical or Dental Clinic">Medical or Dental Clinic</option>
                <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                <option value="Educational / School Facility">Educational / School Facility</option>
                <option value="Bank / Financial Institution">Bank / Financial Institution</option>
                <option value="Warehouse / Logistics Center">Warehouse / Logistics Center</option>
                <option value="Multi-Tenant Commercial Building">Multi-Tenant Commercial Building</option>
              </select>
            </div>
          </div>

          {/* Row 4: Requested Service & Cleaning Frequency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label htmlFor="requestedService" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Cleaning Service Requested
              </label>
              <select
                id="requestedService"
                value={formData.requestedService}
                onChange={(e) => setFormData({ ...formData, requestedService: e.target.value })}
                className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
              >
                <option value="Commercial Office Cleaning">Commercial Office Cleaning</option>
                <option value="Janitorial Services & Building Upkeep">Janitorial Services & Building Upkeep</option>
                <option value="Medical & Dental Facility Cleaning">Medical & Dental Facility Cleaning</option>
                <option value="Retail & Educational Cleaning">Retail & Educational Cleaning</option>
                <option value="Green Commercial Cleaning">Green Commercial Cleaning</option>
                <option value="Carpet, Floor & High Dusting Care">Carpet, Floor & High Dusting Care</option>
                <option value="Complete Facility Maintenance Package">Complete Facility Maintenance Package</option>
              </select>
            </div>

            <div>
              <label htmlFor="cleaningFrequency" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Cleaning Frequency
              </label>
              <select
                id="cleaningFrequency"
                value={formData.cleaningFrequency}
                onChange={(e) => setFormData({ ...formData, cleaningFrequency: e.target.value })}
                className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
              >
                <option value="Daily (5–7 days per week)">Daily (5–7 days per week)</option>
                <option value="2–3 Times per week">2–3 Times per week</option>
                <option value="Weekly recurring service">Weekly recurring service</option>
                <option value="Bi-weekly recurring service">Bi-weekly recurring service</option>
                <option value="One-time thorough deep cleaning">One-time thorough deep cleaning</option>
                <option value="Custom flexible schedule">Custom flexible schedule (to discuss)</option>
              </select>
            </div>
          </div>

          {/* Row 5: Additional Requirements */}
          <div>
            <label htmlFor="additionalRequirements" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Additional Requirements & Special Instructions
            </label>
            <textarea
              id="additionalRequirements"
              rows={3}
              maxLength={1000}
              value={formData.additionalRequirements}
              onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
              className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68] resize-y"
              placeholder="Approximate square footage, preferred service hours (overnight/day porter), special floor care or sanitization needs..."
            />
          </div>

          {/* Consent Checkbox */}
          <div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#3D8B68] focus:ring-[#3D8B68] cursor-pointer"
              />
              <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer select-none">
                I understand that this request form is for proposal formulation. Pricing and schedules are finalized following facility scope review.
              </label>
            </div>
            {errors.consent && <p className="mt-1 text-xs text-rose-600">{errors.consent}</p>}
          </div>

          {/* Submit Button with Duplicate-Submission Protection */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#10243A] hover:bg-[#1A3755] active:bg-[#0A1726] disabled:bg-slate-400 rounded-lg shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Request...</span>
                </>
              ) : (
                <span>Request Commercial Cleaning Proposal</span>
              )}
            </button>
            <p className="mt-2.5 text-center text-xs text-slate-500">
              Direct telephone inquiries:{' '}
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-slate-800 hover:text-[#3D8B68] underline">
                {BUSINESS_INFO.phone}
              </a>{' '}
              (Mon–Fri 9 AM–6 PM).
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
