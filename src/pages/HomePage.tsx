import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, VERIFIED_SERVICES, WORKFLOW_STEPS, IMAGES } from '../data/businessData';
import { QuoteForm } from '../components/QuoteForm';
import { FAQSection } from '../components/FAQSection';
import { Shield, Clock, MapPin, CheckCircle, ArrowRight, Building, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative bg-[#10243A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Primary CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <span className="text-[#3D8B68] font-bold">New York City</span>
                <span aria-hidden="true">·</span>
                <span>Commercial Janitorial & Maintenance</span>
              </div>

              {/* Verified Exact Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white max-w-2xl">
                Professional Commercial Cleaning for New York Businesses
              </h1>

              {/* Supporting copy */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Structured recurring commercial cleaning and dependable janitorial programs tailored to corporate offices, healthcare practices, retail stores, and commercial facilities across all five boroughs.
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/quote')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-[#3D8B68] hover:bg-[#2F6D52] active:bg-[#10243A] rounded-md shadow-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  Request a Cleaning Quote
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/services')}
                  className="px-6 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Verified Trust Strip (Adhering to anti-slop: unboxed, clean typography) */}
              <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <span className="font-semibold text-white block">Insured & Bonded</span>
                  <span className="text-slate-400">Vetted cleaning personnel</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">24/7 Availability</span>
                  <span className="text-slate-400">Day porter or night shifts</span>
                </div>
                <div>
                  <span className="font-semibold text-white block">Flatiron NYC Office</span>
                  <span className="text-slate-400">19 West 21st Street</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Fidelity Hero Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900 aspect-16/10 lg:aspect-4/3">
                <img
                  src={IMAGES.hero}
                  alt="Spotless Manhattan corporate office with polished floors and floor-to-ceiling glass"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10243A]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90 bg-[#10243A]/80 backdrop-blur-sm p-3 rounded-md border border-white/10">
                  <p className="font-semibold">Corporate Workspace Standards</p>
                  <p className="text-[11px] text-slate-300">Custom frequencies designed around tenant workflows and building access rules.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Established NYC Commercial Cleaning Presence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
                Established New York Operations
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] tracking-tight">
                {BUSINESS_INFO.experienceClaim}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating from our central Flatiron office at 19 West 21st Street in Manhattan, Four Star General Cleaning Service delivers structured commercial cleaning and recurring janitorial upkeep. Our insured and bonded cleaning personnel support property managers, commercial tenants, healthcare practices, and educational institutions across New York City.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-700">
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

            <div className="lg:col-span-4 bg-[#F4F7F8] p-6 rounded-lg border border-slate-200 space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#10243A]">
                Published Operating Hours
              </h3>
              <div className="space-y-2 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium">Administrative Office:</span>
                  <span className="font-semibold text-slate-900">Mon–Fri 9 AM – 6 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200">
                  <span className="font-medium">Cleaning Crew Service:</span>
                  <span className="font-semibold text-[#3D8B68]">24 Hours / 7 Days</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium">Staff Coverage:</span>
                  <span className="font-semibold text-slate-900">Insured & Bonded</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Service Categories in Clean Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
              Commercial Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] tracking-tight mt-1">
              Verified Service Categories
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-xl">
              Each service is structured around verified operational standards from the company&apos;s published service catalog.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="text-xs font-semibold text-[#10243A] hover:text-[#3D8B68] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Browse Full Service Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#10243A] tracking-tight">
                    {srv.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onNavigate(srv.slug as PageRoute)}
                    className="text-xs font-semibold text-[#3D8B68] hover:text-[#2F6D52] flex items-center gap-1 transition-colors"
                  >
                    <span>Service Details & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Industries Served */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
              Target Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] tracking-tight mt-1">
              Industries Served Across New York
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From regulated healthcare practices requiring rigorous surface care to multi-level retail boutiques and industrial distribution centers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_INFO.verifiedIndustries.map((ind) => (
              <div
                key={ind.title}
                className="p-5 rounded-lg bg-[#F4F7F8] border border-slate-200 space-y-2"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
            Simple Onboarding
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] tracking-tight">
            How Service Is Arranged
          </h2>
          <p className="text-sm text-slate-600">
            A structured, professional process from first contact to routine scheduled cleanings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((wf) => (
            <div
              key={wf.step}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-3 relative"
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
        <div className="bg-[#10243A] text-white rounded-2xl p-8 sm:p-12 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
                Borough Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Commercial Service Areas Across New York City
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                Centrally located at 19 West 21st Street in Manhattan, our cleaning teams deploy across commercial districts in Manhattan, Brooklyn, Queens, The Bronx, and the wider New York metropolitan area.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                {BUSINESS_INFO.serviceAreas.map((area) => (
                  <div key={area.name} className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#3D8B68] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">{area.name}:</strong>{' '}
                      <span className="text-slate-300">{area.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-xl p-6 text-center space-y-4">
              <h3 className="text-base font-bold text-white">Need a Service Area Walkthrough?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We coordinate site evaluations to assess floor surface areas, high-dusting requirements, and trash removal protocols.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/service-areas')}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#3D8B68] hover:bg-[#2F6D52] rounded-md transition-colors"
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
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
            Interactive Proposal Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] tracking-tight">
            Request a Commercial Cleaning Quote
          </h2>
          <p className="text-sm text-slate-600">
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
