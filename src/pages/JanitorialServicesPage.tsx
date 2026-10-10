import React from 'react';
import { PageRoute } from '../types';
import { IMAGES, BUSINESS_INFO } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const JanitorialServicesPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 sm:space-y-16 pb-16 sm:pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="hover:text-white transition-colors underline cursor-pointer"
            >
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span>Janitorial Services & Upkeep</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Janitorial Services & Facility Upkeep
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Recurring janitorial programs, daytime porter maintenance, and night cleaning shifts for commercial buildings and facilities across NYC.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                Building Upkeep Programs
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10243A] tracking-tight">
                Dedicated Janitorial Teams for Property Managers
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                High-density commercial real estate across Manhattan and the outer boroughs demands systematic janitorial operations. Four Star General Cleaning Service provides structured porter and night-cleaning teams dedicated to maintaining pristine common spaces, spotless glass vestibules, and hygienic multi-stall restrooms.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.janitorial}
                alt="Maintained marble commercial lobby with buffed floors"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[#10243A]">Janitorial Operational Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Commercial Restrooms</h4>
                  <p className="text-slate-600 leading-relaxed">Hospital-grade sanitization of fixtures, partition wiping, mirror polishing, and stock replenishment.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Lobbies & Entryways</h4>
                  <p className="text-slate-600 leading-relaxed">Turnstile wiping, mat vacuuming, glass door streak-free buffing, and brass/chrome detailing.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Stairwells & Elevators</h4>
                  <p className="text-slate-600 leading-relaxed">Handrail disinfection, threshold track clearing, elevator button polishing, and landing sweeping.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Waste Management</h4>
                  <p className="text-slate-600 leading-relaxed">Bulk trash consolidation, cardboard baling prep, dock sweeping, and NYC sanitation code compliance.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">24/7 Service Windows:</p>
              <p>Cleaning schedules are available 24 hours a day, 7 days a week to ensure zero interruption to tenant business operations.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-4">
            <QuoteForm initialService="Janitorial Services & Building Upkeep" />
          </div>
        </div>
      </section>
    </div>
  );
};
