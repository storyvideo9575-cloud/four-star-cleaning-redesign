import React from 'react';
import { PageRoute } from '../types';
import { IMAGES } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { Leaf, Wind, Sparkles, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const GreenCleaningPage: React.FC<Props> = ({ onNavigate }) => {
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
            <span>Green Commercial Cleaning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Green Commercial Cleaning Solutions
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Environmentally responsible cleaning methods and eco-formulated products designed to protect indoor air quality for modern commercial workspaces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
                Sustainable Facility Care
              </span>
              <h2 className="text-2xl font-bold text-[#10243A] tracking-tight">
                Healthier Workplaces with Responsible Practices
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As commercial tenants increasingly prioritize corporate environmental responsibility and employee wellness, green cleaning represents a practical approach. Four Star General Cleaning Service offers eco-conscious programs that utilize low-toxicity, biodegradable cleaning formulas alongside high-efficiency particle capture tools.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.green}
                alt="Sustainable corporate office workspace with lush plant greenery and natural sunlight"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold text-[#10243A]">The Green Cleaning Methodology</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Leaf className="w-4 h-4 text-[#3D8B68]" />
                    <span>Eco-Formulated Agents</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Biodegradable cleaning solutions free of harsh chemical fumes and aggressive solvents.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Wind className="w-4 h-4 text-[#3D8B68]" />
                    <span>HEPA Filtration Vacuums</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Traps fine dust particulates and airborne allergens rather than recirculating them into office air.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Sparkles className="w-4 h-4 text-[#3D8B68]" />
                    <span>Microfiber Dust Containment</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Color-coded microfiber cloths that attract and lock dust without requiring chemical aerosol polishes.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-[#3D8B68]" />
                    <span>Insured & Bonded Staff</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Experienced crews trained in appropriate dilution ratios and eco-friendly waste management.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-[#10243A]">Green Cleaning Proposal</h3>
                <p className="text-xs text-slate-500 mt-0.5">Customize your sustainable commercial cleaning program.</p>
              </div>
              <QuoteForm initialService="Green Commercial Cleaning" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
