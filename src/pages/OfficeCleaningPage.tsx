import React from 'react';
import { PageRoute } from '../types';
import { IMAGES, BUSINESS_INFO } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { CheckCircle2, ShieldCheck, Clock, ArrowRight } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const OfficeCleaningPage: React.FC<Props> = ({ onNavigate }) => {
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
            <span>Commercial Office Cleaning</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Commercial Office Cleaning Services
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Tailored office cleaning programs for Manhattan corporate suites, tech offices, creative studios, and multi-tenant commercial workspaces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                Office Maintenance Standards
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10243A] tracking-tight">
                Consistent Cleanliness for Modern Workplaces
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                In fast-paced New York corporate settings, an immaculate office fosters productivity and presents a polished impression for visiting clients and stakeholders. Four Star General Cleaning Service provides scheduled cleaning rotations customized to your office floor plan and lease guidelines.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.office}
                alt="Spotless commercial office interior with desks and computers"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[#10243A]">What Our Office Cleaning Program Covers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Workstation & Desk Care</h4>
                  <p className="text-slate-600 leading-relaxed">Damp wiping of desks, monitor peripheries, sanitized handles, and chair base dusting.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Conference & Meeting Rooms</h4>
                  <p className="text-slate-600 leading-relaxed">Glass partition spot-cleaning, boardroom table sanitization, whiteboard detailing, and carpet vacuuming.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Pantry & Kitchenettes</h4>
                  <p className="text-slate-600 leading-relaxed">Countertop disinfection, exterior appliance wiping, sink scrubbing, and consumable restocking.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Waste & Recycling Sorting</h4>
                  <p className="text-slate-600 leading-relaxed">Emptying of desk bins, centralized recycling compliance, and nightly liner replacement.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Operational Guarantee of Care:</p>
              <p>All cleaning technicians are insured and bonded. Schedules are arranged to prevent disruption to executive meetings and work hours.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-4">
            <QuoteForm initialService="Commercial Office Cleaning" />
          </div>
        </div>
      </section>
    </div>
  );
};
