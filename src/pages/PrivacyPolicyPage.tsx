import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 sm:space-y-16 pb-16 sm:pb-20 overflow-x-hidden">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-8 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Corporate Governance</span>
            <span aria-hidden="true">·</span>
            <span>Proposed Redesign Concept</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy & Concept Disclosures
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed">
            Information handling practices, data retention policies, and demonstration parameters for this proposed corporate redesign.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <Shield className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-base sm:text-lg font-bold">1. Independent Sales Demonstration Prototype</h2>
          </div>
          <p>
            This website is an independent concept demonstration developed for commercial presentation and design evaluation. It is not affiliated with, approved by, or endorsed by <strong>Four Star General Cleaning Service</strong>. It does not replace or modify the company&apos;s active live website at <a href="https://4starcleaning.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#3D8B68]">4starcleaning.com</a>.
          </p>
        </div>

        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <Lock className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-base sm:text-lg font-bold">2. Demonstration Data Handling & Zero Local Storage</h2>
          </div>
          <p>
            Any text entered into the quote request form or inquiry forms on this website operates exclusively in <strong>Demo Prototype Mode</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Form submissions are validated locally within your web browser session and are <strong>never transmitted</strong> to Four Star General Cleaning Service or any live sales endpoint.</li>
            <li>In strict compliance with privacy standards, <strong>no personal data (names, phone numbers, emails, addresses) is stored in browser local storage or persistent cookies</strong>.</li>
            <li>Closing or refreshing the browser window resets all form state immediately.</li>
          </ul>
        </div>

        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <FileText className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-base sm:text-lg font-bold">3. Fact Verification & Promotional Offers</h2>
          </div>
          <p>
            In strict compliance with factual verification standards:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>All expired seasonal coupon offers or unverified promotions from past marketing materials have been completely removed.</li>
            <li>The claim of over 35 years of experience is presented as published corporate history, subject to final client reconfirmation prior to production release.</li>
            <li>Staffing credentials are restricted solely to published facts: cleaning staff are <strong>insured and bonded</strong>. No additional certifications have been invented.</li>
          </ul>
        </div>

        <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <CheckCircle className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-base sm:text-lg font-bold">4. Production Integration Readiness</h2>
          </div>
          <p>
            A production integration interface has been specified for eventual connection to authorized customer relationship management (CRM) software or secure email relays. This integration remains dormant and will not be enabled without formal authorization from Four Star General Cleaning Service.
          </p>
        </div>
      </section>
    </div>
  );
};
