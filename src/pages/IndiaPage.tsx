import React from 'react';
import {
  Receipt,
  FileText,
  Scale,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  FileCheck,
  Building2,
  Stamp,
  Calculator,
  ChevronRight,
  Globe,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { CountryFlag } from '../components/CountryFlag';

interface IndiaPageProps {
  onSelectTool: (tool: ActivePage) => void;
  onLaunchWithCurrency?: (currency: 'INR') => void;
}

export const IndiaPage: React.FC<IndiaPageProps> = ({ onSelectTool, onLaunchWithCurrency }) => {
  const handleLaunchInr = () => {
    if (onLaunchWithCurrency) {
      onLaunchWithCurrency('INR');
    } else {
      onSelectTool('rent-receipt');
    }
  };

  const indianFaqs = [
    {
      q: 'Is Landlord PAN mandatory on rent receipts?',
      a: 'As per CBDT Circular No. 08/2013, quoting the Landlord’s Permanent Account Number (PAN) is mandatory if the annual rent exceeds ₹1,00,000 (equivalent to ₹8,333 per month). If the landlord does not possess a PAN, a signed declaration along with Form 60 must be collected.',
    },
    {
      q: 'When is a ₹1 revenue stamp required under the Indian Stamp Act?',
      a: 'Under the Indian Stamp Act, a ₹1 revenue stamp with the landlord’s signature across the stamp is legally mandatory if rent is paid in CASH exceeding ₹5,000 per month. If payment is made via direct Bank Transfer (NEFT/RTGS/IMPS), UPI, or Cheque, a revenue stamp is not strictly mandatory, but an audit transaction reference (UTR) is recommended.',
    },
    {
      q: 'Can I pay rent to my parents and claim HRA exemption under Section 10(13A)?',
      a: 'Yes, legitimate rent paid to parents is eligible for HRA exemption provided your parents own the property, you have a formal rental agreement, genuine bank transfer proof, and your parents declare this rental income in their annual Income Tax Return (ITR). You cannot pay rent to your spouse.',
    },
    {
      q: 'How is HRA exemption calculated under Section 10(13A)?',
      a: 'The exempt amount is the minimum of three amounts: (1) Actual HRA received from employer, (2) 50% of (Basic Salary + DA) for metro cities (Delhi, Mumbai, Kolkata, Chennai) or 40% for non-metro cities, and (3) Actual rent paid minus 10% of (Basic Salary + DA).',
    },
    {
      q: 'Can I generate rent receipts for the full financial year in one batch?',
      a: 'Yes! Our generator lets you choose a multi-month range (e.g. April 2025 to March 2026). It automatically compiles 12 distinct monthly receipts with continuous serial numbers, accurate calendar dates, and batch PDF export.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectTool('home');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <span>/</span>
        <span className="text-slate-900 font-semibold flex items-center gap-1.5">
          <CountryFlag country="in" className="w-4 h-3 shrink-0" />
          <span>India (HRA Exemption / Section 10(13A))</span>
        </span>
      </nav>

      {/* Hero Section for India Landing Page */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 mb-3 shadow-2xs">
          <CountryFlag country="in" className="w-4 h-3 shrink-0" />
          <span>Income Tax Department &amp; CBDT Section 10(13A) Compliant</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Free Rent Receipt Generator for HRA Tax Exemption
        </h1>

        <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Generate official, print-ready rent receipts for your employer&apos;s tax declaration portal. Pre-configured with automatic Rupee-in-words conversion, Landlord PAN validation, and ₹1 revenue stamp markers.
        </p>

        {/* 3-Step Contextual Guide (Prevents Bot Bounce & Boosts Action Keywords) */}
        <div className="mt-5 mb-5 max-w-xl mx-auto bg-slate-50/90 border border-slate-200/90 rounded-xl p-3.5 text-left text-xs shadow-2xs">
          <p className="font-bold text-slate-900 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>How to Generate Compliant HRA Rent Receipts:</span>
            </span>
            <span className="text-[10px] text-slate-500 font-normal uppercase tracking-wider">Free • No Login</span>
          </p>
          <ul className="space-y-1.5 text-slate-600 font-medium">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-slate-800 shrink-0">Step 1:</span>
              <span>Enter Tenant Name, Landlord Name, and Rented House Property Address.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-slate-800 shrink-0">Step 2:</span>
              <span>Select Financial Year (April to March) and Enter Landlord PAN (mandatory if rent exceeds ₹8,333/month or ₹1 Lakh/year).</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-slate-800 shrink-0">Step 3:</span>
              <span>Click Download 12-Month Batch PDF with automatic ₹1 revenue stamp markers and landlord signature placeholders.</span>
            </li>
          </ul>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleLaunchInr}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Receipt className="w-5 h-5" />
            <span>Generate HRA Rent Receipts (₹ INR)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#salary-slip"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('salary-slip');
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 shadow-2xs transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-emerald-600" />
            <span>Create Indian Salary Slip</span>
          </a>
        </div>
      </header>

      {/* Statutory Rules Grid (CBDT, Stamp Act, PAN Rules) */}
      <section className="mb-12" aria-label="Indian Statutory Guidelines">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Section 10(13A) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-4">
              <Calculator className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Section 10(13A) Exemption</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              House Rent Allowance (HRA) is fully or partially exempt under Income Tax Rule 2A. Salaried taxpayers must submit rent receipts to their company HR/Finance payroll team for TDS rebate.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700 flex items-center gap-1">
              <span>Formula: Least of 3 statutory limits</span>
            </div>
          </div>

          {/* Card 2: Landlord PAN Rule */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center mb-4">
              <Building2 className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Landlord PAN Limit (₹1L/yr)</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If your total annual rent exceeds <strong>₹1,00,000</strong> (i.e. ₹8,334+ monthly), entering the landlord&apos;s 10-digit PAN is strictly required by the Income Tax Department to prevent false claims.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center gap-1">
              <span>Automatic PAN threshold notice</span>
            </div>
          </div>

          {/* Card 3: ₹1 Revenue Stamp */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-center justify-center mb-4">
              <Stamp className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">₹1 Revenue Stamp Rule</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under the Indian Stamp Act, any cash payment exceeding <strong>₹5,000</strong> requires a physical ₹1 revenue stamp with the landlord&apos;s signature across it. Direct bank transfers (NEFT/UPI) are exempt.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-rose-700 flex items-center gap-1">
              <span>Smart revenue stamp block included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Ad Slot */}
      <div className="my-8">
        <AdSlot type="banner" />
      </div>

      {/* FAQs Section */}
      <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-label="Indian HRA FAQs">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Frequently Asked Questions on HRA &amp; Rent Receipts in India
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {indianFaqs.map((faq, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 flex items-start gap-2">
                <span className="text-blue-600 font-mono text-sm">Q{idx + 1}.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Switch to Global or US */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Looking for International Formats?</div>
          <div className="text-sm font-semibold text-slate-800">
            Need receipts in USD, EUR, GBP, or CAD for US/UK/Canada tenancy or expat tax records?
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#us"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('us');
            }}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>🇺🇸 US Rental Page</span>
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('home');
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global Generator</span>
          </a>
        </div>
      </section>
    </div>
  );
};
