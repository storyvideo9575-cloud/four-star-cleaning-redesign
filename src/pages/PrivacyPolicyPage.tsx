import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/businessData';
import { Shield, Lock, FileText, CheckCircle } from 'lucide-react';

interface Props {
  onNavigate: (path: PageRoute) => void;
}

export const PrivacyPolicyPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#10243A] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <span>Corporate Governance</span>
            <span aria-hidden="true">·</span>
            <span>Proposed Redesign Concept</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Privacy Policy & Concept Disclosures
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Information handling practices, data retention policies, and demonstration parameters for this proposed corporate redesign.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <Shield className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-lg font-bold">1. Independent Sales Demonstration Prototype</h2>
          </div>
          <p>
            This website is an independent concept demonstration developed for commercial presentation and design evaluation. It is not affiliated with, approved by, or endorsed by <strong>Four Star General Cleaning Service</strong>. It does not replace or modify the company&apos;s active live website at <a href="https://4starcleaning.com/" target="_blank" rel="noopener noreferrer" className="underline text-[#3D8B68]">4starcleaning.com</a>.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <Lock className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-lg font-bold">2. Demonstration Data Handling & Zero Local Storage</h2>
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

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <FileText className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-lg font-bold">3. Fact Verification & Promotional Offers</h2>
          </div>
          <p>
            All factual business data—including the listed headquarters address at {BUSINESS_INFO.address.street}, office phone {BUSINESS_INFO.phone}, and published business hours—are faithfully drawn from verified public records.
          </p>
          <p>
            Specific historical claims—such as over 35 years of commercial cleaning experience—are marked for explicit business reconfirmation prior to any commercial deployment. Historical or expired promotional coupons referenced on past websites are deliberately omitted.
          </p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 text-[#10243A]">
            <CheckCircle className="w-5 h-5 text-[#3D8B68]" />
            <h2 className="text-lg font-bold">4. Future Production CRM Integration</h2>
          </div>
          <p>
            A production integration interface has been specified for eventual connection to authorized customer relationship management (CRM) software or secure email relays. This integration remains dormant and will not be enabled without formal authorization from Four Star General Cleaning Service.
          </p>
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#10243A] hover:bg-[#1A3755] rounded-md transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </section>
    </div>
  );
};
