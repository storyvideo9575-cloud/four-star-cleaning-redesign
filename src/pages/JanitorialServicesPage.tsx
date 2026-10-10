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
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="hover:text-white transition-colors underline"
            >
              Services
            </button>
            <span aria-hidden="true">/</span>
            <span>Janitorial Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Janitorial Services & Facility Upkeep
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Reliable day porter and overnight janitorial programs ensuring immaculate commercial lobbies, restrooms, corridors, and multi-tenant common areas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
                Building Upkeep Programs
              </span>
              <h2 className="text-2xl font-bold text-[#10243A] tracking-tight">
                Dedicated Janitorial Support for Commercial Buildings
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                High-density commercial real estate across Manhattan and the outer boroughs demands systematic janitorial operations. Four Star General Cleaning Service provides structured porter and night-cleaning teams dedicated to maintaining pristine common spaces, spotless glass vestibules, and hygienic multi-stall restrooms.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.janitorial}
                alt="Immaculate commercial building entrance lobby with buffed marble floors"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-[#10243A]">Janitorial Scope of Work</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Lobbies & Entryways</h4>
                  <p className="text-slate-600 leading-relaxed">Continuous floor mopping, high-gloss stone buffing, glass door detailing, and brass/chrome polishing.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Restroom Sanitation Programs</h4>
                  <p className="text-slate-600 leading-relaxed">Deep partition scrub-downs, fixture disinfection, mirror polishing, and stock replenishment.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Corridors & Elevator Banks</h4>
                  <p className="text-slate-600 leading-relaxed">Carpet vacuuming, elevator threshold vacuuming, button panel sanitizing, and wall scuff removal.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Central Waste Handling</h4>
                  <p className="text-slate-600 leading-relaxed">Baling of cardboard, sorting municipal recyclables, and safe transfer to building disposal bays.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F4F7F8] border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">24/7 Service Windows:</p>
              <p>Cleaning schedules are available 24 hours a day, 7 days a week to ensure zero interruption to tenant business operations.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-[#10243A]">Janitorial Proposal Request</h3>
                <p className="text-xs text-slate-500 mt-0.5">Test quote configuration for your facility.</p>
              </div>
              <QuoteForm initialService="Janitorial Services & Building Upkeep" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
