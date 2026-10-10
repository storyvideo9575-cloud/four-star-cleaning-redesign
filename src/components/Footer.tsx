import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { MapPin, Phone, Clock, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: PageRoute) => void;
  onOpenSitemap: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenSitemap,
}) => {
  return (
    <footer className="bg-[#10243A] text-slate-300 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">
              {BUSINESS_INFO.name}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Professional commercial cleaning and recurring janitorial solutions for corporate offices, healthcare facilities, schools, and commercial properties throughout New York City.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.staffing}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
                <span>Cleaning Service: {BUSINESS_INFO.hours.service}</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <span className="w-4 text-center font-bold text-slate-500">·</span>
                <span>Office Hours: {BUSINESS_INFO.hours.office}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Commercial Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services/office-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Commercial Office Cleaning
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services/janitorial')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Janitorial Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services/medical-dental')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Medical & Dental Facilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services/retail-education')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Retail & Educational Facilities
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services/green-cleaning')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Green Cleaning Options
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="text-[#3D8B68] hover:text-[#4A9F78] font-medium transition-colors text-left cursor-pointer"
                >
                  View All Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: NYC Service Boroughs */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              NYC Service Areas
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <li key={area.name}>
                  <button
                    type="button"
                    onClick={() => onNavigate('/service-areas')}
                    className="hover:text-white transition-colors text-left block cursor-pointer"
                  >
                    <span className="font-medium text-slate-200">{area.name}</span>
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/service-areas')}
                  className="text-[#3D8B68] hover:text-[#4A9F78] font-medium transition-colors text-left cursor-pointer"
                >
                  Coverage Map Details →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Office Location
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-[#3D8B68] shrink-0 mt-0.5" />
              <span>
                {BUSINESS_INFO.address.street}
                <br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                <br />
                <span className="text-slate-400">({BUSINESS_INFO.address.neighborhood})</span>
              </span>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-slate-300 pt-1">
              <Phone className="w-4 h-4 text-[#3D8B68] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white transition-colors font-medium">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => onNavigate('/quote')}
                className="w-full py-2.5 px-3 text-xs font-semibold text-center text-white bg-[#3D8B68] hover:bg-[#2F6D52] rounded-md transition-colors cursor-pointer"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Utility Strip with Discreet Redesign Note */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/service-areas')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Service Areas
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenSitemap}
              className="flex items-center gap-1 hover:text-white transition-colors text-slate-400 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Sitemap</span>
            </button>
          </div>

          <div className="text-slate-400 text-xs">
            <span>Proposed website redesign concept.</span>
          </div>
        </div>

        <div className="mt-4 text-center sm:text-left text-[11px] text-slate-500">
          © {new Date().getFullYear()} Four Star General Cleaning Service. 19 West 21st Street, Suite 601A, New York, NY 10010. Tel: (212) 741-9400.
        </div>
      </div>
    </footer>
  );
};
