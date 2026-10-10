import React from 'react';
import { PageRoute } from '../types';
import { IMAGES } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { ShoppingBag, GraduationCap, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const RetailEducationPage: React.FC<Props> = ({ onNavigate }) => {
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
            <span>Retail & Education Cleaning</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Retail and Educational Facility Cleaning
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            High-traffic maintenance routines for NYC retail storefronts, showrooms, academic institutions, and training centers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                High-Footfall Facility Care
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#10243A] tracking-tight">
                Spotless First Impressions & Sanitary Classrooms
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Whether greeting retail shoppers on Fifth Avenue or maintaining a safe, hygienic environment for students and faculty, public-facing facilities demand high operational consistency. Four Star General Cleaning Service implements rigorous floor care, display polishing, and common area sanitization before doors open.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.office}
                alt="Contemporary commercial facility layout"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-base sm:text-lg font-bold text-[#10243A]">Retail & Educational Core Tasks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs text-slate-700">
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Retail Sales Floors</h4>
                  <p className="text-slate-600 leading-relaxed">Display case glass buffing, fixture dusting, threshold polishing, and fitting room sanitization.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Classrooms & Desks</h4>
                  <p className="text-slate-600 leading-relaxed">Desk surface disinfecting, whiteboard wiping, trash emptying, and daily hard floor dust-mopping.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">High-Traffic Entryways</h4>
                  <p className="text-slate-600 leading-relaxed">Walk-off mat vacuuming, door glass cleaning, vestibule sweeping, and seasonal salt residue removal.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg space-y-1.5">
                  <h4 className="font-bold text-slate-900">Corridors & Hallways</h4>
                  <p className="text-slate-600 leading-relaxed">High dusting of vents, locker exterior wipedown, drinking fountain sanitization, and burnishing.</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
              <p className="font-semibold text-slate-800">Flexible Operating Hours:</p>
              <p>Cleaning shifts can be completed overnight or early in the morning before retail opening or school bell ringing.</p>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-4">
            <QuoteForm initialService="Retail & Educational Cleaning" />
          </div>
        </div>
      </section>
    </div>
  );
};
