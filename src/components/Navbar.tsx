import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Menu, X, ChevronDown, Phone, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentPath: PageRoute;
  onNavigate: (path: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleLinkClick = (path: PageRoute) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceLinks: { name: string; path: PageRoute }[] = [
    { name: 'Commercial Cleaning Services Overview', path: '/services' },
    { name: 'Commercial Office Cleaning', path: '/services/office-cleaning' },
    { name: 'Janitorial Services & Facility Care', path: '/services/janitorial' },
    { name: 'Medical & Dental Facility Cleaning', path: '/services/medical-dental' },
    { name: 'Retail & Educational Facility Cleaning', path: '/services/retail-education' },
    { name: 'Green Commercial Cleaning', path: '/services/green-cleaning' },
  ];

  const isServicesActive = currentPath.startsWith('/services');

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80">
      {/* Top Utility Bar for Corporate Trust & Quick Contact - Desktop / Tablet */}
      <div className="bg-[#10243A] text-slate-200 text-xs py-2 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#3D8B68]" />
              <span>{BUSINESS_INFO.address.street}, New York, NY 10010</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#3D8B68]" />
              <span>Service: 24/7 Availability · Office: Mon–Fri 9 AM–6 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-white font-semibold hover:text-[#4A9F78] transition-colors"
              aria-label="Call Four Star General Cleaning Service at (212) 741-9400"
            >
              <Phone className="w-3.5 h-3.5 text-[#3D8B68]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Text Wordmark in Display Typography (Optimized for 360px - 430px and up) */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="flex items-center min-w-0 focus-visible:ring-2 focus-visible:ring-[#3D8B68] rounded-md transition-opacity hover:opacity-90 py-1"
          aria-label="Four Star General Cleaning Service - Home"
        >
          {/* Mobile compact stacked lockup (< 640px) */}
          <div className="flex flex-col sm:hidden min-w-0">
            <span className="text-[15px] font-extrabold tracking-tight text-[#10243A] leading-tight truncate">
              Four Star General
            </span>
            <span className="text-[12px] font-bold text-[#3D8B68] tracking-tight leading-tight flex items-center gap-1">
              <span>Cleaning Service</span>
              <span className="text-[10px] font-semibold text-slate-400">· NYC</span>
            </span>
          </div>

          {/* Tablet & Desktop full single-line lockup (>= 640px) */}
          <span className="hidden sm:inline text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-[#10243A] hover:text-[#3D8B68] transition-colors whitespace-nowrap">
            Four Star General Cleaning Service
          </span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/' ? 'border-[#3D8B68] text-[#10243A] font-semibold' : 'border-transparent hover:text-[#10243A]'
            }`}
          >
            Home
          </a>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => handleLinkClick('/services')}
              className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                isServicesActive ? 'border-[#3D8B68] text-[#10243A] font-semibold' : 'border-transparent hover:text-[#10243A]'
              }`}
              aria-expanded={servicesDropdownOpen}
            >
              <span>Services</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-76 bg-white rounded-lg shadow-xl border border-slate-200 py-2.5 z-50">
                {serviceLinks.map((item) => (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => handleLinkClick(item.path)}
                    className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
                      currentPath === item.path
                        ? 'bg-emerald-50/60 text-[#3D8B68] font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-[#10243A]'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/about');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/about' ? 'border-[#3D8B68] text-[#10243A] font-semibold' : 'border-transparent hover:text-[#10243A]'
            }`}
          >
            About Us
          </a>

          <a
            href="/service-areas"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/service-areas');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/service-areas' ? 'border-[#3D8B68] text-[#10243A] font-semibold' : 'border-transparent hover:text-[#10243A]'
            }`}
          >
            Service Areas
          </a>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('/contact');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              currentPath === '/contact' ? 'border-[#3D8B68] text-[#10243A] font-semibold' : 'border-transparent hover:text-[#10243A]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('/quote')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] active:bg-[#0A1726] rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile controls (Clean, compact, touch-optimized, zero clipping) */}
        <div className="lg:hidden flex items-center gap-2 shrink-0">
          {/* Easy-to-tap Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#3D8B68] hover:bg-[#2F6D52] active:bg-[#10243A] rounded-lg shadow-2xs transition-colors shrink-0 min-h-[40px] focus-visible:ring-2 focus-visible:ring-[#3D8B68]"
            aria-label="Call Four Star General Cleaning Service at (212) 741-9400"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="font-semibold text-xs tracking-wide">Call</span>
          </a>

          {/* Quick Quote Pill for small screens */}
          <button
            type="button"
            onClick={() => handleLinkClick('/quote')}
            className="hidden sm:flex items-center px-3.5 py-2 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-lg shadow-2xs transition-colors min-h-[40px] cursor-pointer"
          >
            Quote
          </button>

          {/* Working Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#10243A]" /> : <Menu className="w-5 h-5 text-[#10243A]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Accessible, touch-friendly, minimum 44px tap targets) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {/* Quick Direct Call & Credential Banner inside Drawer */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3">
            <div className="text-xs">
              <span className="font-bold text-[#10243A] block">Direct NYC Office Line</span>
              <span className="text-slate-500 text-[11px]">Mon–Fri 9 AM–6 PM · 24/7 Cleaning</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#10243A] rounded-md flex items-center gap-1 hover:bg-[#3D8B68] transition-colors shrink-0"
            >
              <Phone className="w-3 h-3 text-[#3D8B68]" />
              <span>(212) 741-9400</span>
            </a>
          </div>

          {/* Main Navigation Items */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => handleLinkClick('/')}
              className={`flex items-center justify-between w-full text-left py-3 px-3.5 rounded-lg text-sm font-semibold min-h-[44px] transition-colors cursor-pointer ${
                currentPath === '/' ? 'bg-emerald-50 text-[#3D8B68]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/about')}
              className={`flex items-center justify-between w-full text-left py-3 px-3.5 rounded-lg text-sm font-semibold min-h-[44px] transition-colors cursor-pointer ${
                currentPath === '/about' ? 'bg-emerald-50 text-[#3D8B68]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/service-areas')}
              className={`flex items-center justify-between w-full text-left py-3 px-3.5 rounded-lg text-sm font-semibold min-h-[44px] transition-colors cursor-pointer ${
                currentPath === '/service-areas' ? 'bg-emerald-50 text-[#3D8B68]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>NYC Service Areas</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/contact')}
              className={`flex items-center justify-between w-full text-left py-3 px-3.5 rounded-lg text-sm font-semibold min-h-[44px] transition-colors cursor-pointer ${
                currentPath === '/contact' ? 'bg-emerald-50 text-[#3D8B68]' : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              <span>Contact NYC Office</span>
              <ArrowRight className="w-4 h-4 opacity-60" />
            </button>
          </div>

          {/* Service Links Accordion / List */}
          <div className="pt-2 border-t border-slate-100">
            <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              Commercial Cleaning Services
            </p>
            <div className="space-y-0.5">
              {serviceLinks.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleLinkClick(item.path)}
                  className={`block w-full text-left py-2.5 px-3 rounded-md text-xs font-medium min-h-[40px] transition-colors cursor-pointer ${
                    currentPath === item.path ? 'bg-emerald-50 text-[#3D8B68] font-semibold' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Full-Width Mobile Request Quote CTA */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleLinkClick('/quote')}
              className="w-full py-3.5 text-center text-sm font-bold text-white bg-[#10243A] hover:bg-[#1A3755] active:bg-[#0A1726] rounded-lg shadow-sm cursor-pointer transition-colors"
            >
              Request a Free Quote
            </button>
          </div>

          {/* Trust Footnote */}
          <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3D8B68]" />
            <span>Staff Insured & Bonded · 19 W 21st St, NYC</span>
          </div>
        </div>
      )}
    </header>
  );
};
