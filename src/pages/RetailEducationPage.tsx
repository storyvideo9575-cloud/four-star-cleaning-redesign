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
            <span>Retail & Educational Cleaning</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Retail and Educational Facility Cleaning
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            High-traffic maintenance programs for retail showrooms, Manhattan boutiques, private schools, academies, and educational spaces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
                High-Foot-Traffic Environments
              </span>
              <h2 className="text-2xl font-bold text-[#10243A] tracking-tight">
                Flawless Presentation for Customers and Students
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether greeting retail shoppers on Fifth Avenue or maintaining a safe, hygienic environment for students and faculty, public-facing facilities demand high operational consistency. Four Star General Cleaning Service implements rigorous floor care, display polishing, and common area sanitization before doors open.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 aspect-16/10 bg-slate-100">
              <img
                src={IMAGES.office}
                alt="Clean commercial interior floor suitable for retail and education facilities"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-[#10243A] font-bold text-sm">
                  <ShoppingBag className="w-4 h-4 text-[#3D8B68]" />
                  <span>Retail Store Standards</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• Storefront window and entry glass cleaning</li>
                  <li>• Dusting merchandise display shelving and racks</li>
                  <li>• Fitting room mirror cleaning and floor care</li>
                  <li>• Checkout point-of-sale surface wipe downs</li>
                </ul>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-[#10243A] font-bold text-sm">
                  <GraduationCap className="w-4 h-4 text-[#3D8B68]" />
                  <span>Educational Facility Care</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li>• Classroom desk and whiteboard cleaning</li>
                  <li>• Hallway, stairwell, and locker area mopping</li>
                  <li>• School cafeteria table wipedown and trash removal</li>
                  <li>• Faculty lounges and administrative office care</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
              <strong className="text-slate-800">Reliable Scheduling:</strong> Evening and early-morning shifts allow thorough vacuuming, mopping, and restocking without interfering with shoppers or class schedules.
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="text-base font-bold text-[#10243A]">Proposal Request</h3>
                <p className="text-xs text-slate-500 mt-0.5">Test quote configuration for your storefront or academy.</p>
              </div>
              <QuoteForm initialService="Retail & Educational Cleaning" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
