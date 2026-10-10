import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Phone, Clock, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const ContactPage: React.FC<Props> = ({ onNavigate }) => {
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setInquirySent(true);
  };

  return (
    <div className="space-y-10 sm:space-y-16 pb-16 sm:pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Direct Communications</span>
            <span aria-hidden="true">·</span>
            <span>Manhattan Headquarters</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact Our NYC Office
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Connect with our commercial account team to schedule a facility walkthrough or review recurring janitorial options.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Verified Location & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-lg sm:text-xl font-bold text-[#10243A] tracking-tight">
                Verified Office Information
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Office Address</strong>
                    <span>{BUSINESS_INFO.address.street}</span>
                    <br />
                    <span>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</span>
                    <p className="text-slate-500 text-xs mt-1">Conveniently located in the Flatiron / Chelsea commercial corridor.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Direct Telephone</strong>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-900 font-bold hover:text-[#3D8B68] text-sm">
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">Primary dispatch & customer support.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Published Office Hours</strong>
                    <span>{BUSINESS_INFO.hours.office}</span>
                    <p className="text-[#3D8B68] font-semibold text-xs mt-0.5">Commercial cleaning crews: 24/7 service availability.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Personnel Coverage</strong>
                    <span>{BUSINESS_INFO.staffing}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 space-y-1">
                <strong className="text-slate-900 block font-semibold">Commercial Site Visits:</strong>
                <p>
                  We perform physical walk-throughs across Manhattan, Brooklyn, Queens, and the Bronx to calculate accurate, customized proposal schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-8 shadow-xs">
            <div className="mb-6 border-b border-slate-100 pb-4">
              <h2 className="text-lg sm:text-xl font-bold text-[#10243A] tracking-tight">
                Send an Administrative Message
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Reach our NYC dispatch desk with general questions or site coordination requests.
              </p>
            </div>

            {inquirySent ? (
              <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#10243A]">Inquiry Details Validated</h3>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      Thank you for reviewing our communications interface.
                    </p>
                    <div className="p-3 bg-white border border-slate-200 rounded text-xs text-slate-600">
                      <strong>Redesign Concept Note: </strong>
                      This form is currently functioning in preview mode. For live business communications with Four Star General Cleaning Service, please contact our administrative desk directly at <strong>(212) 741-9400</strong> during office hours (Mon–Fri 9 AM–6 PM).
                    </div>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setInquirySent(false)}
                    className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-lg transition-colors cursor-pointer min-h-[44px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contactName" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
                    placeholder="Alex Morgan"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Email <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="contactEmail"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
                      placeholder="amorgan@domain.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
                      placeholder="(212) 555-0100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message / Facility Questions <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-base sm:text-sm bg-white border border-slate-300 rounded-lg shadow-2xs min-h-[44px] focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
                    placeholder="Inquire about facility walk-throughs, floor care schedules, or recurring scope..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-lg shadow-2xs transition-colors cursor-pointer min-h-[48px]"
                  >
                    Send Direct Inquiry
                  </button>
                  <p className="mt-2 text-center text-xs text-slate-500">
                    Immediate assistance:{' '}
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-slate-800 hover:text-[#3D8B68] underline">
                      {BUSINESS_INFO.phone}
                    </a>{' '}
                    (Mon–Fri 9 AM–6 PM).
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
