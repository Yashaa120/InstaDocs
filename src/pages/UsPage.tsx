import React from 'react';
import {
  Receipt,
  FileText,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Building,
  CheckCircle2,
  DollarSign,
  FileCheck,
  Lock,
  Globe,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { CountryFlag } from '../components/CountryFlag';

interface UsPageProps {
  onSelectTool: (tool: ActivePage) => void;
  onLaunchWithCurrency?: (currency: 'USD') => void;
}

export const UsPage: React.FC<UsPageProps> = ({ onSelectTool, onLaunchWithCurrency }) => {
  const handleLaunchUsd = () => {
    if (onLaunchWithCurrency) {
      onLaunchWithCurrency('USD');
    } else {
      onSelectTool('rent-receipt');
    }
  };

  const usFaqs = [
    {
      q: 'Are rent receipts legally required in the United States?',
      a: 'Requirements vary by state. Several states (such as New York, California, Washington, Maryland, and Massachusetts) legally require landlords to provide a written rent receipt when rent is paid in cash or upon written tenant request. Even where not legally mandated, maintaining official rent receipts protects both parties against payment disputes.',
    },
    {
      q: 'Can rent receipts be used for IRS tax deductions?',
      a: 'Yes. For self-employed individuals and small business owners who deduct home office expenses on IRS Schedule C (Form 1040), or for real estate investors reporting rental income and expenses on Schedule E, clean rent receipts serve as primary substantiating documentation during IRS audits.',
    },
    {
      q: 'Does this rent receipt generator support US Dollar ($) and standard US date formats?',
      a: 'Yes. The tool features native US Dollar ($) currency formatting, international words conversion (millions/thousands), and standard US date conventions. You can also include ACH/wire transaction references and Landlord Tax ID/EIN/SSN.',
    },
    {
      q: 'Can corporate relocation teams use these receipts for expense reimbursement?',
      a: 'Absolutely. Many relocation assistance programs and corporate housing allowances require itemized monthly rent slips with landlord confirmation, tenant name, premises address, and payment method.',
    },
    {
      q: 'Is my personal information stored or tracked?',
      a: 'No. The generator runs 100% in your local browser memory (client-side). No tenant names, rental addresses, financial figures, or taxpayer identification numbers are ever transmitted to or stored on our servers.',
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
          <CountryFlag country="us" className="w-4 h-3 shrink-0" />
          <span>United States (US Landlord &amp; Tenant Receipts)</span>
        </span>
      </nav>

      {/* Hero Section for US Landing Page */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3 shadow-2xs">
          <CountryFlag country="us" className="w-4 h-3 shrink-0" />
          <span>US State Rental Laws &amp; IRS Schedule C/E Compliant</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Free Rent Receipt Generator for US Landlords &amp; Tenants
        </h1>

        <p className="mt-3.5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Create professional, print-ready rent receipts and payment slips in seconds. Built for American landlords, property managers, tenants, and corporate relocations — 100% free and processed privately in your browser.
        </p>

        {/* 3-Step Contextual Guide (Prevents Bot Bounce & Boosts Action Keywords) */}
        <div className="mt-5 mb-5 max-w-xl mx-auto bg-slate-50/90 border border-slate-200/90 rounded-xl p-3.5 text-left text-xs shadow-2xs">
          <p className="font-bold text-slate-900 mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>How to Create Valid US Rent Receipts:</span>
            </span>
            <span className="text-[10px] text-slate-500 font-normal uppercase tracking-wider">Free • No Login</span>
          </p>
          <ul className="space-y-1.5 text-slate-600 font-medium">
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-slate-800 shrink-0">Step 1:</span>
              <span>Enter Landlord / Property Manager Name, Tenant Name &amp; Leased Property Address.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-slate-800 shrink-0">Step 2:</span>
              <span>Specify Monthly Rent in $ USD, Payment Method (ACH, Check, Wire, or Cash), and Payment Date.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="font-bold text-slate-800 shrink-0">Step 3:</span>
              <span>Click Download Official US Rent Receipt PDF for IRS Schedule C/E &amp; State Rental Disclosures.</span>
            </li>
          </ul>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleLaunchUsd}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Receipt className="w-5 h-5" />
            <span>Generate US Rent Receipts ($ USD)</span>
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
            <FileText className="w-4 h-4 text-blue-600" />
            <span>Create Pay Stubs / Salary Slips</span>
          </a>
        </div>
      </header>

      {/* 3 Pillars of US Rental Documentation */}
      <section className="mb-12" aria-label="US Rental Guidelines">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: State Law Compliance */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">State Rent Law Proof</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              States like CA, NY, and WA legally mandate providing written rent receipts upon request or for cash payments. A clear written record prevents eviction misunderstandings and verifies paid tenancy.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-blue-700 flex items-center gap-1">
              <span>Standard written tenancy proof</span>
            </div>
          </div>

          {/* Card 2: IRS Schedule C & E Proof */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">IRS Schedule C &amp; E Records</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For freelancers claiming home office deductions (IRS Form 8829) or landlords reporting income on Schedule E, our receipts document monthly amounts, dates, and ACH/check reference numbers.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <span>Audit-ready payment records</span>
            </div>
          </div>

          {/* Card 3: 100% Client-Side Privacy */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 text-purple-700 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">Private &amp; CCPA Compliant</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Zero storage of SSNs, EINs, tenant names, or banking information. Everything is rendered client-side on your device and saved directly as high-resolution PDF with no cloud retention.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-purple-700 flex items-center gap-1">
              <span>No registration or account needed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Ad Slot */}
      <div className="my-8">
        <AdSlot type="banner" />
      </div>

      {/* US Rental FAQs Section */}
      <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-label="US Rental FAQs">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Frequently Asked Questions for US Landlords &amp; Tenants
          </h2>
        </div>

        <div className="divide-y divide-slate-100">
          {usFaqs.map((faq, idx) => (
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

      {/* Switch to Global or India */}
      <section className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Need Another Region?</div>
          <div className="text-sm font-semibold text-slate-800">
            Looking for Indian HRA Section 10(13A) compliance or global multi-currency tools?
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#in"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('in');
            }}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-lg text-xs font-bold transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>🇮🇳 India (HRA Page)</span>
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
