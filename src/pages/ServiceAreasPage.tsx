import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';
import { MapPin, Phone, Building2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const ServiceAreasPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 sm:space-y-16 pb-16 sm:pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Geographic Coverage</span>
            <span aria-hidden="true">·</span>
            <span>New York City</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            NYC Commercial Service Areas
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Headquartered at 19 West 21st Street in Manhattan, providing insured and bonded commercial cleaning across all major commercial centers in New York City.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-white rounded-xl border border-slate-200 p-5 sm:p-8 shadow-xs">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
              Central Manhattan Dispatch
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#10243A] tracking-tight">
              Rapid Response from our Flatiron Operations Base
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our central office at 19 West 21st Street places cleaning crews within close proximity to major transit arteries, corporate towers, and commercial corridors. We provide flexible schedules (24 hours a day, 7 days a week) tailored to tenant operational requirements.
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#F4F7F8] p-5 rounded-lg border border-slate-200 space-y-2 text-xs">
            <p className="font-semibold text-slate-900">Headquarters Verification:</p>
            <p className="text-slate-600">{BUSINESS_INFO.address.street}</p>
            <p className="text-slate-600">{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</p>
            <p className="text-slate-600 font-medium pt-1">
              Direct Phone:{' '}
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-bold text-[#10243A] hover:text-[#3D8B68]">
                {BUSINESS_INFO.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Borough Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {BUSINESS_INFO.serviceAreas.map((area) => (
            <div
              key={area.name}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#3D8B68] shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-[#10243A] tracking-tight">
                    {area.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {area.detail}
                </p>
                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p>• Commercial corporate offices & tech campuses</p>
                  <p>• Medical suites & dental clinics</p>
                  <p>• Retail storefronts & educational facilities</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="text-xs font-bold text-[#3D8B68] hover:text-[#2F6D52] flex items-center gap-1 transition-colors min-h-[36px] py-1 cursor-pointer"
                >
                  <span>Request Quote for {area.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Operational Commitment Box */}
        <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <h3 className="text-sm font-bold text-[#10243A]">Verified Central NYC Operations</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            All commercial inquiries across Manhattan, Brooklyn, Queens, and The Bronx are dispatched and managed through our verified Flatiron headquarters at 19 West 21st Street, New York, NY 10010.
          </p>
        </div>
      </section>
    </div>
  );
};
