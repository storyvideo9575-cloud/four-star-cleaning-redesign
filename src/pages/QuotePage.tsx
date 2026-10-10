import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, WORKFLOW_STEPS } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { Phone, Clock, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const QuotePage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 sm:space-y-16 pb-16 sm:pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Client Inquiries</span>
            <span aria-hidden="true">·</span>
            <span>Commercial Proposal</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Request a Commercial Cleaning Quote
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Provide your facility specifications below to evaluate our structured quote configuration process.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Form column */}
          <div className="lg:col-span-8">
            <QuoteForm />
          </div>

          {/* Right guidance column */}
          <div className="lg:col-span-4 space-y-5 sm:space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4">
              <h2 className="text-xs font-bold text-[#10243A] uppercase tracking-wide">
                Direct Contact Alternatives
              </h2>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Telephone Inquiry</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-900 font-bold hover:text-[#3D8B68]">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Administrative Office</span>
                    <span>{BUSINESS_INFO.hours.office}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Personnel Status</span>
                    <span>{BUSINESS_INFO.staffing}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 sm:p-6 space-y-2.5 text-xs text-slate-600">
              <h3 className="font-bold text-[#10243A]">Proposal Turnaround & Pricing Note</h3>
              <p className="leading-relaxed">
                Commercial proposals are formulated according to square footage, flooring types, trash volume, and service frequency. We do not provide arbitrary automated flat-rate estimates without understanding your facility parameters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
