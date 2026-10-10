import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'schedules' | 'safety' | 'insurance';
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // 1. Service Schedules
  {
    id: 'schedules-availability',
    category: 'schedules',
    question: 'What cleaning shifts and recurring schedules are available for commercial clients?',
    answer:
      'Four Star General Cleaning Service maintains published service availability 24 hours a day, 7 days a week. Commercial clients can arrange early-morning shifts, daytime porter maintenance, evening cleaning after staff departure, or weekend service. Frequencies are fully customizable, including daily service, 2–3 times per week, weekly, bi-weekly, or scheduled deep cleaning rotations.',
  },
  {
    id: 'schedules-flexibility',
    category: 'schedules',
    question: 'Can service schedules be adjusted for building holidays or company events?',
    answer:
      'Yes. Scheduled cleaning programs can be adapted to accommodate corporate holiday closures, seasonal occupancy changes, or supplemental post-event cleanups. Our administrative desk is available Monday–Friday, 9:00 AM – 6:00 PM at (212) 741-9400 to coordinate schedule modifications and logistics.',
  },
  {
    id: 'schedules-turnaround',
    category: 'schedules',
    question: 'How quickly can recurring commercial cleaning service begin?',
    answer:
      'Service commencement begins with a clear scope review and facility discussion to identify high-traffic zones, floor materials, and building access rules. Once scope and access parameters are established, recurring maintenance can typically be scheduled according to tenant onboarding timelines.',
  },

  // 2. Safety Protocols
  {
    id: 'safety-cross-contamination',
    category: 'safety',
    question: 'What hygiene standards and safety protocols do your cleaning personnel follow?',
    answer:
      'Cleaning personnel adhere to structured commercial safety standards, including strict dilution control for cleaning agents, color-coded microfiber cloths to prevent cross-contamination between restrooms and workstations, and commercial HEPA-filtration vacuum systems to minimize airborne dust recirculation in office environments.',
  },
  {
    id: 'safety-green-cleaning',
    category: 'safety',
    question: 'Do you offer low-VOC or green commercial cleaning options?',
    answer:
      'Yes. We provide green cleaning programs that utilize environmentally responsible, biodegradable cleaning agents and low-impact methods. These solutions are formulated to protect indoor air quality for corporate offices, medical suites, and educational facilities while maintaining commercial cleanliness.',
  },
  {
    id: 'safety-facility-access',
    category: 'safety',
    question: 'How are building access keys, security fobs, and after-hours entry managed?',
    answer:
      'Keys, electronic fobs, and security codes are managed under strict chain-of-custody protocols. Cleaning crews adhere to facility security guidelines, log their entry upon arrival, and ensure all internal partitions, offices, and perimeter doors are verified and locked upon shift completion.',
  },

  // 3. Commercial Insurance Coverage
  {
    id: 'insurance-bonded',
    category: 'insurance',
    question: 'Are cleaning technicians insured and bonded?',
    answer:
      'Yes. All cleaning personnel representing Four Star General Cleaning Service are verified as insured and bonded. This provides commercial property owners, property managers, and corporate tenants with essential protection and accountability on premises.',
  },
  {
    id: 'insurance-coi',
    category: 'insurance',
    question: 'Can you provide a Certificate of Insurance (COI) for our building management?',
    answer:
      'Yes. Standard Certificates of Insurance (COI) can be furnished prior to service commencement. Policies can name building owners, property management companies, or landlords as additional insureds to comply with commercial lease and building entry requirements.',
  },
  {
    id: 'insurance-scope-formulation',
    category: 'insurance',
    question: 'How are commercial cleaning proposals and costs formulated?',
    answer:
      'Proposals are determined based on verified facility parameters, including total square footage, flooring types (hard stone, tile, hardwood, or carpet), high-dusting requirements, restroom fixtures, and service frequency. We avoid arbitrary automated flat-rate estimates to ensure an accurate, transparent scope of work.',
  },
];

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'schedules' | 'safety' | 'insurance'>('all');
  const [openIds, setOpenIds] = useState<string[]>(['schedules-availability', 'insurance-bonded']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems =
    activeCategory === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-white border-y border-slate-200 py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#3D8B68]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#10243A] tracking-tight">
            Commercial Service & Operational Standards
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Essential information regarding our service schedules, commercial safety standards, and insurance coverage for New York City facilities.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#10243A] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Questions ({FAQ_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('schedules')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeCategory === 'schedules'
                ? 'bg-[#10243A] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-[#3D8B68]" />
            <span>Service Schedules</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('safety')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeCategory === 'safety'
                ? 'bg-[#10243A] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3D8B68]" />
            <span>Safety Protocols</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveCategory('insurance')}
            className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeCategory === 'insurance'
                ? 'bg-[#10243A] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#3D8B68]" />
            <span>Insurance & Coverage</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-200 border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
          {filteredItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div key={item.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#10243A] tracking-tight leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`p-1.5 rounded-full shrink-0 text-slate-500 bg-slate-100 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#3D8B68]/15 text-[#3D8B68]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Inquiries Note */}
        <div className="p-4 rounded-lg bg-[#F4F7F8] border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <strong className="text-slate-900">Have specific building management requirements?</strong>
            <p className="text-slate-500 mt-0.5">We coordinate walkthroughs to inspect floor compositions, square footage, and security specifications.</p>
          </div>
          <a
            href="tel:2127419400"
            className="inline-flex items-center gap-1.5 font-semibold text-[#10243A] hover:text-[#3D8B68] transition-colors shrink-0"
          >
            <span>Call (212) 741-9400</span>
          </a>
        </div>
      </div>
    </section>
  );
};
