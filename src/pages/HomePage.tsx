import React from 'react';
import {
  Receipt,
  FileText,
  Scale,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock,
  UserX,
  Sparkles,
  CheckCircle2,
  HelpCircle,
  Printer,
  Download,
  FileCheck,
  ChevronRight,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { useLanguage } from '../context/LanguageContext';
import { CountryFlag } from '../components/CountryFlag';

interface HomePageProps {
  onSelectTool: (tool: ActivePage) => void;
  onLaunchWithCurrency?: (currency: 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'INR') => void;
  onOpenModal?: (type: 'privacy' | 'terms' | 'about') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTool, onOpenModal }) => {
  const { t } = useLanguage();

  const tools = [
    {
      id: 'rent-receipt' as ActivePage,
      name: t('tool_rent_receipt_title') || 'Rent Receipt & Rent Slip Creator',
      badge: 'Multi-Currency & Instant PDF',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
      icon: <Receipt className="w-7 h-7 text-blue-600" />,
      description: 'Generate official, print-ready landlord rent receipts and rental payment records in any currency (USD, EUR, GBP, CAD, AUD, INR).',
      actionText: t('tool_rent_receipt_btn') || 'Generate Rent Receipts',
      urlHash: '#rent-receipt',
      bulletPoints: ['Instant PDF Download', 'Multi-Currency (USD, EUR, GBP, INR)', 'Landlord & Tenant Proof'],
      steps: [
        'Step 1: Enter Tenant & Landlord Name, Address & Rent Amount.',
        'Step 2: Choose Currency ($ USD, € EUR, £ GBP, ₹ INR) & Rental Period.',
        'Step 3: Click Download Print-Ready PDF with Digital Signature & QR Code.',
      ],
    },
    {
      id: 'salary-slip' as ActivePage,
      name: t('tool_salary_slip_title') || 'Salary Slip & Payslip Generator',
      badge: 'Universal Payroll Standard',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      icon: <FileText className="w-7 h-7 text-emerald-600" />,
      description: 'Create monthly payslips with custom earnings, tax deductions, company stamps, and net pay calculations.',
      actionText: t('tool_salary_slip_btn') || 'Create Salary Slip',
      urlHash: '#salary-slip',
      bulletPoints: ['Custom Earnings & Deductions', 'Company Seal & Signature', 'Official PDF Format'],
      steps: [
        'Step 1: Enter Employee Details, Designation & Company Name.',
        'Step 2: Fill Monthly Basic Salary, Allowances & Statutory Deductions.',
        'Step 3: Click Download Official Monthly Payslip PDF with Company Seal.',
      ],
    },
    {
      id: 'affidavit' as ActivePage,
      name: t('tool_affidavit_title') || 'Tenancy & Address Affidavit Generator',
      badge: 'Legal Self-Declaration',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-50 border-amber-200 text-amber-700',
      icon: <Scale className="w-7 h-7 text-amber-700" />,
      description: 'Formal self-declaration affidavits for tenancy confirmation, address verification, or no-lease scenarios.',
      actionText: t('tool_affidavit_btn') || 'Draft Affidavit',
      urlHash: '#affidavit',
      bulletPoints: ['Standard Legal Formats', 'e-Stamp Paper Margins', 'Notary Ready Layout'],
      steps: [
        'Step 1: Enter Declarant Name & Rented Property Details.',
        'Step 2: Select Declaration Purpose (Address Proof, No-Agreement, or HRA).',
        'Step 3: Click Download Notary-Ready Legal Declaration on e-Stamp Paper.',
      ],
    },
  ];

  const trustPoints = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: '100% Free Forever',
      desc: 'No hidden paywalls, no trial limits, and no watermark on your generated documents.',
    },
    {
      icon: <UserX className="w-5 h-5 text-blue-600" />,
      title: 'No Login or Signup Required',
      desc: 'Jump straight to work without creating accounts, saving passwords, or sharing your email.',
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      title: 'Data Stays in Your Browser',
      desc: 'Zero information is uploaded to any server. All calculations and PDF exports run strictly on your device.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Select Document Tool',
      desc: 'Choose between Rent Receipt, Salary Slip, or Tenancy Affidavit based on your tax or verification requirements.',
      icon: <FileCheck className="w-5 h-5 text-blue-600" />,
    },
    {
      number: '2',
      title: 'Fill Details & Preview Live',
      desc: 'Enter tenant, landlord, company, or salary figures. The instant live preview updates character-by-character.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    },
    {
      number: '3',
      title: 'Choose Currency & Security Features',
      desc: 'Select USD, EUR, GBP, CAD, or INR. Includes automatic numbers-to-words conversion, signature options, and QR verification.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    },
    {
      number: '4',
      title: 'Download Print-Ready PDF',
      desc: 'Export high-resolution PDFs formatted for standard A4 or Letter paper with zero watermarks.',
      icon: <Download className="w-5 h-5 text-blue-600" />,
    },
  ];

  const homeFaqs = [
    {
      question: 'Which currencies are supported by the rent receipt generator?',
      answer:
        'Our generator natively supports major world currencies including US Dollar ($ USD), Euro (€ EUR), British Pound (£ GBP), Canadian Dollar ($ CAD), Australian Dollar ($ AUD), and Indian Rupee (₹ INR), complete with proper localized number-to-words formatting.',
    },
    {
      question: 'Are these rent receipts legally valid for landlords and tenants?',
      answer:
        'Yes. The receipts include all standard statutory elements required by tax authorities, property managers, and employers: landlord and tenant names, rental property address, monthly period, payment method, numeric and verbal rent amounts, and signature placeholders.',
    },
    {
      question: 'Can I generate multi-month or annual batch receipts at once?',
      answer:
        'Yes! You can toggle between single-month generation and multi-month financial batches (up to 12 consecutive months) to download all receipts in a single combined PDF document.',
    },
    {
      question: 'Is my personal financial data stored on your servers?',
      answer:
        'No. All our tools run 100% client-side inside your browser. No tenant names, landlord information, salary figures, or addresses are ever transmitted to or stored on any server.',
    },
  ];

  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Exact Global Hero Section Requested for Worldwide SEO */}
      <section id="global-hero" style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          Universal Multi-Currency Rent Receipt &amp; Salary Slip Generator
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#555', lineHeight: '1.6' }} className="max-w-2xl mx-auto">
          Generate and download official, print-ready rent receipts and property rental slips instantly. Supports USD, EUR, GBP, CAD, and INR. 100% free browser-based execution.
        </p>

        {/* Global Currency Formatting Framework Banner */}
        <div className="mt-4 max-w-2xl mx-auto bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-700 flex items-center justify-between flex-wrap gap-2 shadow-2xs font-medium">
          <span>🌍 <strong>International Formatting Framework:</strong> Supports USD ($), EUR (€), GBP (£), CAD (C$), and INR (₹).</span>
          <span className="text-[11px] bg-white text-blue-700 font-semibold px-2 py-0.5 rounded-full border border-blue-200">100% Client-Side</span>
        </div>

        {/* Dedicated Regional Hub Badges */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-xs font-semibold text-slate-500 mr-0.5">Country Specific Guides:</span>
          <a
            href="#in"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('in');
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 shadow-2xs transition-colors cursor-pointer"
          >
            <CountryFlag country="in" className="w-4 h-3 shrink-0" />
            <span>India (HRA Section 10(13A))</span>
          </a>
          <a
            href="#us"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('us');
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-2xs transition-colors cursor-pointer"
          >
            <CountryFlag country="us" className="w-4 h-3 shrink-0" />
            <span>United States (IRS Proof)</span>
          </a>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
            <CountryFlag country="global" className="w-3.5 h-3.5 shrink-0" />
            <span>Currencies: $ USD, € EUR, £ GBP, $ CAD, $ AUD, ₹ INR</span>
          </span>
        </div>
      </section>

      {/* Section 1: Tool Selector with H2 Heading & Crawlable <a> Links */}
      <section className="mb-10 sm:mb-12" aria-label="Tool Selection Grid">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Our Free Tools &amp; Document Generators
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select a tool below to generate print-ready documents in seconds with zero watermarks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {tools.map((tool) => (
            <a
              key={tool.id}
              id={`tool-card-${tool.id}`}
              href={tool.urlHash}
              onClick={(e) => {
                e.preventDefault();
                onSelectTool(tool.id);
              }}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs hover:shadow-lg hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 select-none no-underline text-inherit"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-start justify-between gap-2.5 mb-3.5">
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl border flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform ${tool.iconBg}`}
                  >
                    {tool.icon}
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full border truncate max-w-[140px] sm:max-w-none ${tool.tagColor}`}>
                    {tool.badge}
                  </span>
                </div>

                {/* Tool Name as H3 */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                  {tool.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal min-h-[36px]">
                  {tool.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                  {tool.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </div>
                  ))}
                </div>
                {/* 3-Step Action Guide for Crawlers and Users (Prevent Bot Bounce) */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 bg-slate-50/80 rounded-xl p-2.5 text-[11px] text-slate-700">
                  <div className="font-bold text-slate-900 mb-1.5 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block"></span>
                      <span>How it works in 3 steps:</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal uppercase tracking-wider">No Login</span>
                  </div>
                  <ol className="space-y-1 text-slate-600 font-medium">
                    {tool.steps.map((stepText, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5 leading-snug">
                        <span className="font-bold text-blue-700 shrink-0">{sIdx + 1}.</span>
                        <span>{stepText}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Action Button Indicator */}
              <div className="mt-4 pt-0.5">
                <span className="w-full min-h-[42px] inline-flex items-center justify-between py-2 px-3.5 rounded-xl bg-slate-50 group-hover:bg-blue-600 text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-blue-600 transition-all font-semibold text-xs sm:text-sm shadow-2xs">
                  <span>{tool.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* High-Engagement Mid-Page Ad Slot */}
      <div className="my-6">
        <AdSlot type="banner" hideOnMobile={false} />
      </div>

      {/* Section 2: Trust & Privacy Highlights with H2 */}
      <section className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-label="Trust and Privacy Highlights">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Built With Client-Side Privacy First</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Why Use Our Generator (100% Client-Side &amp; Zero Server Storage)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 font-normal">
            Zero logins. Zero cloud storage. Total peace of mind for your confidential personal and financial data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustPoints.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-white hover:border-slate-200 hover:shadow-xs transition-all flex flex-col items-start"
            >
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 mb-3 shadow-2xs">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: How It Works with H2 */}
      <section className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-label="How It Works Guide">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            How It Works: 4 Simple Steps to Print-Ready Documents
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Follow this quick step-by-step procedure to create ready-to-print PDFs for employer submission or tax audits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st) => (
            <div key={st.number} className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                    {st.number}
                  </span>
                  {st.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Regional Compliance Addendums (India HRA) */}
      <section className="mb-8 bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-4" aria-label="Regional Compliance Addendums (India HRA)">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
            <span>Regional Tax Compliance</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>Regional Compliance Addendums (India HRA)</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            For salaried employees filing under the Indian Income Tax Act, 1961, submitting proof of rent paid under Section 10(13A) via Form 12BB requires meeting specific Central Board of Direct Taxes (CBDT) parameters:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900">📌 Mandatory Landlord PAN:</span>
              <p className="text-slate-600">Required whenever total annual rent exceeds ₹1,00,000 (approx. ₹8,333/month) under CBDT Circular No. 08/2013.</p>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-slate-900">📌 Revenue Stamp &amp; Signature:</span>
              <p className="text-slate-600">Affix ₹1 revenue stamp signed across by landlord for monthly cash rental payments exceeding ₹5,000.</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            HRA exemption is calculated as the lowest of: (1) Actual HRA received, (2) 50% of Basic Salary for metro cities or 40% for non-metro cities, or (3) Rent paid minus 10% of Basic Salary. Our generator automatically applies these parameters with zero watermarks.
          </p>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <h3 className="text-xs font-bold text-slate-900 mb-1">
                <a
                  href="#rent-receipt"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTool('rent-receipt');
                  }}
                  className="text-blue-600 hover:underline text-left inline-flex items-center gap-1 font-bold"
                >
                  <span>🏠 Rent Receipts for HRA</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Generate single-month or full-year receipts with automatic rupee words, landlord PAN fields, and ₹1 revenue stamp placeholders.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <h3 className="text-xs font-bold text-slate-900 mb-1">
                <a
                  href="#salary-slip"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTool('salary-slip');
                  }}
                  className="text-blue-600 hover:underline text-left inline-flex items-center gap-1 font-bold"
                >
                  <span>💼 Salary Slip Generator</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Calculate Basic, HRA, EPF (12%), Professional Tax, and TDS deductions with company logo and signature attestation.
              </p>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <h3 className="text-xs font-bold text-slate-900 mb-1">
                <a
                  href="#affidavit"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectTool('affidavit');
                  }}
                  className="text-blue-600 hover:underline text-left inline-flex items-center gap-1 font-bold"
                >
                  <span>📜 Legal Rent Affidavit</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </h3>
              <p className="text-[11px] text-slate-500 mb-0 leading-relaxed">
                Create self-declaration tenancy agreements and address verification drafts tailored for notarization and e-stamp paper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Frequently Asked Questions with H2 & Direct Internal Link to FAQ Page */}
      <section className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-label="Frequently Asked Questions">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" />
              <span>Frequently Asked Questions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Common questions about rent receipts, salary slips, revenue stamps, and HRA Section 10(13A).
            </p>
          </div>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('faq');
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors shrink-0"
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {homeFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 leading-snug">
                {faq.question}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Comprehensive Internal Link Hub */}
      <section className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200" aria-label="Website Exploration Links">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Explore Our Documentation &amp; Compliance Hub
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          <a
            href="#rent-receipt"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('rent-receipt');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            🏠 Rent Receipt Generator
          </a>
          <a
            href="#salary-slip"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('salary-slip');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            💼 Salary Slip Generator
          </a>
          <a
            href="#affidavit"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('affidavit');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            📜 Tenancy Affidavit
          </a>
          <a
            href="#in"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('in');
            }}
            className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 hover:text-amber-700 hover:border-amber-300 font-medium transition-colors"
          >
            🇮🇳 India (HRA Section 10(13A))
          </a>
          <a
            href="#us"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('us');
            }}
            className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-900 hover:text-emerald-700 hover:border-emerald-300 font-medium transition-colors"
          >
            🇺🇸 United States (IRS Proof)
          </a>
          <a
            href="#guide"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('guide');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            📖 HRA Tax Exemption Guide
          </a>
          <a
            href="#verify"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('verify');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            🔍 QR Receipt Verification
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('faq');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            ❓ Frequently Asked Questions
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenModal) onOpenModal('about');
              else onSelectTool('about');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            ℹ️ About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('contact');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            ✉️ Contact Support
          </a>
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenModal) onOpenModal('privacy');
              else onSelectTool('privacy');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            🔒 Privacy Policy
          </a>
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              if (onOpenModal) onOpenModal('terms');
              else onSelectTool('terms');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            ⚖️ Terms &amp; Conditions
          </a>
        </div>
      </section>

      {/* Pre-Footer Ad Slot */}
      <div className="mb-4">
        <AdSlot type="pre-footer" />
      </div>

    </div>
  );
};

