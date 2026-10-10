import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, VERIFIED_SERVICES, WORKFLOW_STEPS, IMAGES } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { FAQSection } from '../components/FAQSection';
import { Shield, Clock, MapPin, CheckCircle, ArrowRight, Building, Phone, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20 pb-16 sm:pb-20 overflow-x-hidden">
      {/* 1. Mobile-First Hero Section (Optimized for 360px–430px up to 4K) */}
      <section className="relative bg-[#10243A] text-white overflow-hidden">
        {/* Subtle background ambient pattern */}
        <div className="absolute inset-0 bg-radial from-slate-800/40 via-transparent to-transparent pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines, Trust badges & Full-Width CTAs */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              {/* Above-the-fold location & category tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-slate-200">
                <span className="w-2 h-2 rounded-full bg-[#3D8B68]" />
                <span className="font-semibold text-white">New York City</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-300">Commercial Janitorial & Cleaning</span>
              </div>

              {/* Balanced, mobile-friendly headline (No awkward breaks at 360px–430px) */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-2xl">
                Commercial Cleaning & Janitorial Services Across NYC
              </h1>

              {/* Short, readable description */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                Insured and bonded cleaning specialists providing scheduled maintenance and daytime porter service for corporate offices, medical suites, schools, and commercial facilities across all five New York City boroughs.
              </p>

              {/* Mobile-First CTAs: Prominent full-width on mobile, side-by-side on tablet/desktop */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                {/* Primary CTA: Full-width Request a Free Quote */}
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#3D8B68] hover:bg-[#2F6D52] active:bg-[#10243A] rounded-lg shadow-md transition-all text-center min-h-[48px] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Secondary CTA: Call Now with direct dial */}
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/5 border border-white/25 rounded-lg transition-all text-center min-h-[48px] flex items-center justify-center gap-2 cursor-pointer"
                  aria-label="Call Four Star General Cleaning Service at (212) 741-9400"
                >
                  <Phone className="w-4 h-4 text-[#3D8B68] shrink-0" />
                  <span>Call Now: {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Verified Trust Strip (Compact, readable, stacked on xs, 3-col on sm) */}
              <div className="pt-4 sm:pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-300">
                <div className="flex items-center sm:items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#3D8B68] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Insured & Bonded</span>
                    <span className="text-slate-400 text-[11px]">Vetted cleaning personnel</span>
                  </div>
                </div>

                <div className="flex items-center sm:items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#3D8B68] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">24/7 Availability</span>
                    <span className="text-slate-400 text-[11px]">Day porter or night shifts</span>
                  </div>
                </div>

                <div className="flex items-center sm:items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#3D8B68] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Flatiron NYC Office</span>
                    <span className="text-slate-400 text-[11px]">19 West 21st Street</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with crisp commercial photography */}
            <div className="lg:col-span-5 relative mt-2 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-16/10 lg:aspect-4/3">
                <img
                  src={IMAGES.hero}
                  alt="Spotless Manhattan corporate office with polished floors and floor-to-ceiling glass"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white/95 bg-[#10243A]/85 backdrop-blur-sm p-3 rounded-lg border border-white/15">
                  <p className="font-bold text-white text-xs sm:text-sm">Corporate Workspace Standards</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">Custom cleaning frequencies designed around tenant workflows and building access rules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Established NYC Commercial Operations (Mobile-Optimized) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                Established New York Operations
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10243A] tracking-tight">
                {BUSINESS_INFO.experienceClaim}
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                Operating from our central Flatiron office at 19 West 21st Street in Manhattan, Four Star General Cleaning Service delivers structured commercial cleaning and recurring janitorial upkeep. Our insured and bonded cleaning personnel support property managers, commercial tenants, healthcare practices, and educational institutions across New York City.
              </p>
              <div className="pt-2 flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 xs:gap-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-[#3D8B68] font-bold">✓</span>
                  <span>Insured & bonded staff</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3D8B68] font-bold">✓</span>
                  <span>Custom recurring schedules</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#3D8B68] font-bold">✓</span>
                  <span>24/7 service availability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F4F7F8] p-5 sm:p-6 rounded-lg border border-slate-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#10243A]">
                Published Operating Hours
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="font-medium">Administrative Office:</span>
                  <span className="font-semibold text-slate-900">Mon–Fri 9 AM – 6 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="font-medium">Cleaning Crew Service:</span>
                  <span className="font-semibold text-[#3D8B68]">24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="font-medium">Staff Coverage:</span>
                  <span className="font-semibold text-slate-900">Insured & Bonded</span>
                </div>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-3 text-xs font-bold text-center text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md transition-colors flex items-center justify-center gap-2 min-h-[40px]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#3D8B68]" />
                  <span>Call Office: {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Commercial Service Categories (Clean Stacked Cards on Mobile) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
              Commercial Capabilities
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10243A] tracking-tight mt-1">
              Verified Service Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Structured around verified operational standards from Four Star General Cleaning Service&apos;s published service catalog.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="text-xs font-bold text-[#10243A] hover:text-[#3D8B68] flex items-center gap-1.5 transition-colors cursor-pointer py-1 self-start sm:self-auto"
          >
            <span>Browse Full Service Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {VERIFIED_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
            >
              <div className="aspect-16/10 bg-slate-100 overflow-hidden relative">
                <img
                  src={srv.image}
                  alt={srv.name}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#10243A] tracking-tight">
                    {srv.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onNavigate(srv.slug as PageRoute)}
                    className="text-xs font-bold text-[#3D8B68] hover:text-[#2F6D52] flex items-center gap-1 transition-colors min-h-[36px] py-1"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/quote')}
                    className="text-xs font-semibold text-slate-600 hover:text-[#10243A] transition-colors py-1 px-2.5 rounded bg-slate-50 hover:bg-slate-100"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industries Served Across NYC */}
      <section className="bg-white border-y border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
              Target Sectors
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10243A] tracking-tight mt-1">
              Industries Served Across New York
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              From regulated healthcare practices requiring rigorous surface care to multi-level retail boutiques and corporate headquarters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {BUSINESS_INFO.verifiedIndustries.map((ind) => (
              <div
                key={ind.title}
                className="p-5 rounded-lg bg-[#F4F7F8] border border-slate-200 space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#3D8B68] shrink-0" />
                  <h3 className="text-sm font-bold text-[#10243A]">
                    {ind.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Customer Journey: 4-Step Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
            Simple Onboarding
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10243A] tracking-tight">
            How Service Is Arranged
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            A structured, professional process from first contact to routine scheduled cleanings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {WORKFLOW_STEPS.map((wf) => (
            <div
              key={wf.step}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-2.5 relative"
            >
              <div className="text-2xl font-extrabold text-[#3D8B68] font-mono">
                {wf.step}
              </div>
              <h3 className="text-sm font-bold text-[#10243A] tracking-tight">
                {wf.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. NYC Service Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#10243A] text-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
                Borough Coverage
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                Commercial Service Areas Across New York City
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Centrally located at 19 West 21st Street in Manhattan, our cleaning teams deploy across commercial districts in Manhattan, Brooklyn, Queens, The Bronx, and the wider New York metropolitan area.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                {BUSINESS_INFO.serviceAreas.map((area) => (
                  <div key={area.name} className="flex items-start gap-2 bg-white/5 p-2.5 rounded-lg border border-white/10">
                    <MapPin className="w-3.5 h-3.5 text-[#3D8B68] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">{area.name}:</strong>{' '}
                      <span className="text-slate-300">{area.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center space-y-3.5">
              <h3 className="text-base font-bold text-white">Need a Service Area Walkthrough?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We coordinate site evaluations to assess floor surface areas, high-dusting requirements, and trash removal protocols.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/service-areas')}
                className="w-full py-3 px-4 text-xs font-bold text-white bg-[#3D8B68] hover:bg-[#2F6D52] rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                View Detailed Coverage Information
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions Component */}
      <FAQSection />

      {/* 8. Homepage Quote Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#3D8B68]">
            Interactive Proposal Tool
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#10243A] tracking-tight">
            Request a Commercial Cleaning Quote
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Submit your facility parameters below to test the quote evaluation workflow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <QuoteForm initialService="Commercial Office Cleaning" />
        </div>
      </section>
    </div>
  );
};
