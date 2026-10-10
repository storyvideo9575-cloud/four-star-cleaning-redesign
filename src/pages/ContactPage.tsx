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
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Direct Communications</span>
            <span aria-hidden="true">·</span>
            <span>Manhattan Headquarters</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact Our NYC Office
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Connect with our commercial account team to schedule a facility walkthrough or review recurring janitorial options.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Location & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-[#10243A] tracking-tight">
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
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-900 font-semibold hover:text-[#3D8B68]">
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
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Service Operation Hours</strong>
                    <span>{BUSINESS_INFO.hours.service}</span>
                    <p className="text-slate-500 text-xs mt-0.5">Cleaning crews deploy on client-tailored shifts 24/7.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md transition-colors"
                >
                  Go to Formal Quote Request Page
                </button>
              </div>
            </div>

            {/* Interactive map visualization card */}
            <div className="bg-[#10243A] text-white rounded-xl p-6 border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white">NYC Dispatch Radius</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our central Flatiron base coordinates route schedules covering Manhattan, Brooklyn, Queens, and The Bronx.
              </p>
              <div className="p-3 bg-white/5 border border-white/10 rounded text-xs text-slate-300">
                <span>Near 23rd St Subway Stations (N, R, W, F, M, 1, 6 trains).</span>
              </div>
            </div>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <h2 className="text-xl font-bold text-[#10243A] tracking-tight mb-1">
              Direct Facility Inquiry
            </h2>
            <p className="text-xs text-slate-500 mb-6">
              Connect directly with our commercial management desk regarding maintenance schedules or walkthroughs.
            </p>

            {inquirySent ? (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 space-y-3">
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
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md transition-colors cursor-pointer"
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
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-2xs focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
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
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-2xs focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
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
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-2xs focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
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
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-md shadow-2xs focus:ring-2 focus:ring-[#3D8B68] focus:border-[#3D8B68]"
                    placeholder="Inquire about facility walk-throughs, floor care schedules, or recurring scope..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md shadow-2xs transition-colors cursor-pointer"
                  >
                    Send Direct Inquiry
                  </button>
                  <p className="mt-2 text-center text-[11px] text-slate-500">
                    Direct office telephone: <strong className="text-slate-700">{BUSINESS_INFO.phone}</strong> (Monday–Friday 9 AM–6 PM).
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
