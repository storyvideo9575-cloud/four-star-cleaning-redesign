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
            <span>Green Commercial Cleaning</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Green Commercial Cleaning Solutions
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Eco-conscious commercial janitorial solutions utilizing low-toxicity cleaning formulas and energy-efficient equipment in New York City.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                Eco-Conscious Cleaning Standards
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10243A] tracking-tight">
                Sustainable Care for Modern NYC Workplaces
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                As commercial tenants increasingly prioritize corporate environmental responsibility and employee wellness, green cleaning represents a practical approach. Four Star General Cleaning Service offers eco-conscious programs that utilize low-toxicity, biodegradable cleaning formulas alongside high-efficiency particle capture tools.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.green}
                alt="Sustainable commercial workspace with living green elements"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[#10243A]">Green Cleaning Program Pillars</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#3D8B68]" />
                    <h4 className="font-bold text-slate-900">Low-VOC Formulations</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Biodegradable chemical formulas designed to minimize volatile organic compound emissions in indoor air.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Wind className="w-4 h-4 text-[#3D8B68]" />
                    <h4 className="font-bold text-slate-900">HEPA Particle Capture</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Commercial backpack vacuums fitted with multi-stage HEPA filtration to trap fine dust and airborne allergens.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#3D8B68]" />
                    <h4 className="font-bold text-slate-900">Microfiber Technology</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Reusable electrostatic cloths that lift surface debris mechanically, reducing reliance on harsh surfactants.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#3D8B68]" />
                    <h4 className="font-bold text-slate-900">Responsible Disposal</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed">Disciplined commercial recycling segregation following New York City commercial waste directives.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Custom Program Formulation:</p>
              <p>Clients can request partial or 100% green product specifications across all recurring office cleaning contracts.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-4">
            <QuoteForm initialService="Green Commercial Cleaning" />
          </div>
        </div>
      </section>
    </div>
  );
};
