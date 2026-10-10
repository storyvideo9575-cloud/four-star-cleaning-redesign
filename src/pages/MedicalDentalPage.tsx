import React from 'react';
import { PageRoute } from '../types';
import { IMAGES } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const MedicalDentalPage: React.FC<Props> = ({ onNavigate }) => {
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
            <span>Medical & Dental Cleaning</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Medical and Dental Facility Cleaning
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Rigorous sanitization protocols for New York healthcare clinics, dental practices, outpatient suites, and consultation rooms.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                Healthcare Hygiene Protocol
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10243A] tracking-tight">
                Specialized Disinfection for Clinical Environments
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Healthcare environments require an elevated level of attention to prevent cross-contamination and present patients with an immaculate clinical atmosphere. Four Star General Cleaning Service implements disciplined cleaning routines utilizing hospital-grade disinfectant protocols across waiting lounges, check-in stations, and clinical suites.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.medical}
                alt="Sanitized clinical consultation room with medical equipment"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[#10243A]">Clinical Cleaning Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Patient Waiting Areas</h4>
                  <p className="text-slate-600 leading-relaxed">High-touch point disinfection of seating, check-in glass, door latches, and reading table surfaces.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Exam Rooms & Operatories</h4>
                  <p className="text-slate-600 leading-relaxed">Non-porous cabinetry wipedown, dental chair base sanitization, sink scrubbing, and floor disinfection.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Staff Breakrooms & Labs</h4>
                  <p className="text-slate-600 leading-relaxed">Countertop sterilization, locker exterior wiping, bio-safe trash handling, and appliance cleaning.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Clinical Restroom Care</h4>
                  <p className="text-slate-600 leading-relaxed">Rigorous germicidal scrubbing of touchpoints, touchless sensor maintenance, and floor sanitization.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Compliance & Protection:</p>
              <p>Cleaning personnel follow strict color-coded microfiber systems to ensure restroom cloths are never cross-used in patient care areas.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-4">
            <QuoteForm initialService="Medical & Dental Facility Cleaning" />
          </div>
        </div>
      </section>
    </div>
  );
};
