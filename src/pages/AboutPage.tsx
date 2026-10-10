import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, IMAGES } from '../data/businessData';
import { ShieldCheck, Clock, MapPin, Building2, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const AboutPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-[#10243A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Corporate Background</span>
            <span aria-hidden="true">·</span>
            <span>Commercial Cleaning Experience</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About Four Star General Cleaning Service
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Delivering structured commercial cleaning and recurring janitorial services to New York City businesses, institutions, and facility managers.
          </p>
        </div>
      </section>

      {/* Main Narrative & Verified Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-[#10243A] tracking-tight">
              An Established New York Commercial Cleaning Presence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Four Star General Cleaning Service is a commercial cleaning and janitorial organization operating out of Midtown South in Manhattan. The company specializes in recurring office maintenance, commercial building janitorial upkeep, specialized healthcare facility sanitation, and retail store cleaning across New York City.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              With published operating capabilities available 24 hours a day, 7 days a week, the firm provides both nighttime janitorial crews and daytime porter operations that adapt seamlessly to commercial tenant schedules.
            </p>

            {/* Experience & Reliability Focus */}
            <div className="p-5 bg-white border border-slate-200 rounded-lg shadow-2xs space-y-2">
              <span className="text-xs font-bold text-[#3D8B68] uppercase tracking-wide">
                Established Track Record
              </span>
              <h3 className="text-base font-bold text-[#10243A]">
                {BUSINESS_INFO.experienceClaim}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over decades of dedicated service, Four Star General Cleaning Service has built a reputation for consistency, thoroughness, and responsive management. From routine evening janitorial maintenance to daytime porter service and detailed floor care, our teams ensure commercial environments remain pristine.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base font-bold text-[#10243A]">Verified Operational Standards</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <span><strong>Insured and Bonded Personnel:</strong> Cleaning personnel are verified as insured and bonded to maintain accountability on commercial premises.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <span><strong>Flexible 24/7 Scheduling:</strong> Work can be scheduled before business hours, during regular operational shifts, or overnight to avoid tenant disruption.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Scope of Work:</strong> Programs encompass routine vacuuming, surface wiping, trash disposal, restroom sanitization, high dusting, and hard floor maintenance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Office Card & Image */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 bg-slate-100">
              <img
                src={IMAGES.office}
                alt="Maintained corporate office suite"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#10243A]">
                Company Directory Information
              </h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Headquarters Address</span>
                    <span>{BUSINESS_INFO.address.street}</span>
                    <br />
                    <span>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Administrative Hours</span>
                    <span>{BUSINESS_INFO.hours.office}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Cleaning Crew Availability</span>
                    <span className="text-[#3D8B68] font-medium">{BUSINESS_INFO.hours.service}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md transition-colors"
                >
                  Request a Tailored Cleaning Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
