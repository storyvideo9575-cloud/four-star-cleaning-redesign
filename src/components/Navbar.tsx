import React, { useState } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Menu, X, ChevronDown, Phone, MapPin, Clock } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Utility Bar for Corporate Trust & Quick Contact */}
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
            >
              <Phone className="w-3.5 h-3.5 text-[#3D8B68]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8 border-b border-slate-200/80">
        {/* Zone 1: Text Wordmark in Display Typography */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('/');
          }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#10243A] hover:text-[#3D8B68] transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-[#3D8B68]"
        >
          Four Star General Cleaning
        </a>

        {/* Zone 2: Navigation Links */}
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

        {/* Zone 3: 1 Primary CTA */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('/quote')}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] active:bg-[#0A1726] rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request a Quote
          </button>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="p-2 text-[#10243A] hover:text-[#3D8B68]"
            aria-label="Call Four Star General Cleaning"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => handleLinkClick('/quote')}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#10243A] rounded-md whitespace-nowrap"
          >
            Quote
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => handleLinkClick('/')}
              className={`block w-full text-left py-2 px-3 rounded-md text-sm font-medium ${
                currentPath === '/' ? 'bg-slate-100 text-[#10243A] font-semibold' : 'text-slate-700'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/about')}
              className={`block w-full text-left py-2 px-3 rounded-md text-sm font-medium ${
                currentPath === '/about' ? 'bg-slate-100 text-[#10243A] font-semibold' : 'text-slate-700'
              }`}
            >
              About Us
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/service-areas')}
              className={`block w-full text-left py-2 px-3 rounded-md text-sm font-medium ${
                currentPath === '/service-areas' ? 'bg-slate-100 text-[#10243A] font-semibold' : 'text-slate-700'
              }`}
            >
              NYC Service Areas
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('/contact')}
              className={`block w-full text-left py-2 px-3 rounded-md text-sm font-medium ${
                currentPath === '/contact' ? 'bg-slate-100 text-[#10243A] font-semibold' : 'text-slate-700'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Commercial Cleaning Services
            </p>
            {serviceLinks.map((item) => (
              <button
                key={item.path}
                type="button"
                onClick={() => handleLinkClick(item.path)}
                className={`block w-full text-left py-1.5 px-3 rounded-md text-xs font-medium ${
                  currentPath === item.path ? 'bg-slate-100 text-[#3D8B68] font-semibold' : 'text-slate-600'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => handleLinkClick('/quote')}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#10243A] rounded-md shadow-xs cursor-pointer"
            >
              Request a Cleaning Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
