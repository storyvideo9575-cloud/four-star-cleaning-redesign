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
            <span>Medical & Dental Cleaning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Medical and Dental Facility Cleaning
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Targeted sanitization and hygiene-first cleaning solutions for outpatient clinics, dental practices, surgical suites, and specialized medical offices in NYC.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
                Clinical Environment Hygiene
              </span>
              <h2 className="text-2xl font-bold text-[#10243A] tracking-tight">
                Meticulous Sanitization for Patient Care Spaces
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Healthcare environments require an elevated level of attention to prevent cross-contamination and present patients with an immaculate clinical atmosphere. Four Star General Cleaning Service implements disciplined cleaning routines utilizing hospital-grade disinfectant protocols across waiting lounges, check-in stations, and clinical suites.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.medical}
                alt="Pristine modern medical and dental operatory room with clean sanitized equipment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-[#10243A]">Key Healthcare Protocols</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Patient Reception & Lounges</h4>
                  <p className="text-slate-600 leading-relaxed">Wiping down all non-porous armchairs, check-in clipboards, reception counter glass, and door knobs.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Operatories & Exam Suites</h4>
                  <p className="text-slate-600 leading-relaxed">Systematic sanitization of exam room cabinetry surfaces, sinks, light switches, and hard floors.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Clinical Restroom Sanitation</h4>
                  <p className="text-slate-600 leading-relaxed">Deep-cleaning of hands-free sensors, grab bars, sanitary dispensers, and non-porous floor tiles.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Administrative Charting Areas</h4>
                  <p className="text-slate-600 leading-relaxed">Dust-free care for staff computer desks, telephones, breakrooms, and records filing spaces.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Staffing Credential Note:</p>
              <p>Our cleaning technicians are fully insured and bonded, with flexible after-hours cleaning arrangements to allow uninterrupted daytime patient scheduling.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-[#10243A]">Medical Facility Proposal</h3>
                <p className="text-xs text-slate-500 mt-0.5">Customize your clinical sanitation schedule.</p>
              </div>
              <QuoteForm initialService="Medical & Dental Facility Cleaning" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
