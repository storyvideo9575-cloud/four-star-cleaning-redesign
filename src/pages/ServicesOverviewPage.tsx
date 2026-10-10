import React from 'react';
import { PageRoute } from '../types';
import { VERIFIED_SERVICES, BUSINESS_INFO } from '../data/businessData';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const ServicesOverviewPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Capabilities Catalog</span>
            <span aria-hidden="true">·</span>
            <span>Commercial & Janitorial</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Commercial Cleaning & Janitorial Services
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Reliable recurring cleaning services, specialized clinical sanitization, retail maintenance, and floor care for facilities throughout New York City.
          </p>
        </div>
      </section>

      {/* Trust Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#3D8B68] shrink-0" />
            <div>
              <strong className="block text-slate-900 text-sm font-semibold">Insured & Bonded Staff</strong>
              <p className="text-slate-500 mt-0.5">Reliable personnel assigned to your commercial facility.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#3D8B68] shrink-0" />
            <div>
              <strong className="block text-slate-900 text-sm font-semibold">24/7 Service Windows</strong>
              <p className="text-slate-500 mt-0.5">Evening, daytime porter, or weekend cleaning schedules.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#3D8B68] shrink-0" />
            <div>
              <strong className="block text-slate-900 text-sm font-semibold">Tailored Scopes of Work</strong>
              <p className="text-slate-500 mt-0.5">Programs customized to your building requirements and frequency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Catalog List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-12">
          {VERIFIED_SERVICES.map((srv, index) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
            >
              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-lg overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
                  <img
                    src={srv.image}
                    alt={srv.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className={`lg:col-span-7 space-y-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="text-xs font-mono font-bold text-[#3D8B68]">
                    0{index + 1}. Capability Focus
                  </span>
                  <h2 className="text-2xl font-bold text-[#10243A] tracking-tight mt-1">
                    {srv.name}
                  </h2>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block">
                    Core Inclusions:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {srv.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-[#3D8B68] font-bold">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  {srv.slug !== '/services' && (
                    <button
                      type="button"
                      onClick={() => onNavigate(srv.slug as PageRoute)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md transition-colors flex items-center gap-1.5"
                    >
                      <span>Read Detailed Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => onNavigate('/quote')}
                    className="px-4 py-2 text-xs font-semibold text-[#3D8B68] hover:text-[#2F6D52] bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors"
                  >
                    Request Quote for this Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10243A] text-white rounded-xl p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Have a Specific Facility Cleaning Scope?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            From single executive office suites to multi-floor industrial facilities, we structure recurring cleaning programs that meet your exact specifications.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/quote')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#3D8B68] hover:bg-[#2F6D52] rounded-md transition-colors"
            >
              Request a Cleaning Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
