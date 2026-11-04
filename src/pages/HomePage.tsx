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
  Calculator,
  BookOpen,
  ExternalLink,
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
      id: 'hra-calculator' as ActivePage,
      name: 'HRA Exemption Calculator & Tax Engine',
      badge: 'Section 10(13A) & Rule 2A',
      tagColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      icon: <Calculator className="w-7 h-7 text-indigo-600" />,
      description: 'Calculate statutory 3-condition HRA exemptions, compare Old vs New Tax Regimes, and project annual tax savings.',
      actionText: 'Calculate HRA Exemption',
      urlHash: '#hra-calculator',
      bulletPoints: ['3 Rule 2A Conditions', 'Old vs New Regime Comparison', 'Instant Receipt Pre-fill'],
      steps: [
        'Step 1: Enter Basic Salary, DA, and HRA Received.',
        'Step 2: Enter Actual Rent Paid & Metro City Status.',
        'Step 3: View Tax-Exempt HRA & Pre-Fill Rent Receipts.',
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
      question: 'Which currencies and regions are supported by the rent receipt generator?',
      answer:
        'Our generator natively supports major world currencies including US Dollar ($ USD), Euro (€ EUR), British Pound (£ GBP), Canadian Dollar ($ CAD), Australian Dollar ($ AUD), and Indian Rupee (₹ INR), complete with proper localized number-to-words formatting, revenue stamp placeholders, and landlord tax ID fields.',
    },
    {
      question: 'Are these rent receipts legally valid for HRA tax exemption under Section 10(13A)?',
      answer:
        'Yes. The receipts include all statutory elements mandated by the Central Board of Direct Taxes (CBDT) and Indian corporate payroll audits: full tenant and landlord names, property address, rental period, payment mode, numeric and verbal currency values, landlord PAN (for rent exceeding ₹1 Lakh/year), and revenue stamp signature blocks.',
    },
    {
      question: 'When is Landlord PAN strictly required on rent receipts?',
      answer:
        'Under CBDT Circular No. 08/2013 and Section 139A(5) of the Income Tax Act, Landlord PAN is strictly mandatory if your total annual rent paid exceeds ₹1,00,000 (approx. ₹8,333 per month). If the landlord does not possess a PAN card, a signed declaration in Form 60 along with government identification proof must be submitted to your employer.',
    },
    {
      question: 'Is a revenue stamp required if I pay rent online via UPI, Google Pay, or NEFT?',
      answer:
        'Under Section 30 of the Indian Stamp Act, 1899, a ₹1 revenue stamp is only legally mandatory for cash payments exceeding ₹5,000. For digital bank transfers, UPI, credit cards, or cheques, the electronic transaction trail serves as legal proof; however, many corporate HR teams request stamped receipts for standardized physical records.',
    },
    {
      question: 'Can I legally claim HRA by paying rent to my parents?',
      answer:
        'Yes! Paying rent to parents is 100% legal under Section 10(13A), as upheld by the Ahmedabad Income Tax Appellate Tribunal (ITAT) in Bajrang Prasad Ramdharani v. ACIT. The residential house must be legally registered in your parents’ name, rent must be transferred through verifiable banking channels, valid receipts issued, and parents must report this rental income in their annual ITR.',
    },
    {
      question: 'Can I generate rent receipts for previous months (backdated)?',
      answer:
        'Yes. You can select any previous month or an entire 12-month financial year (April to March) in our generator to create batch receipts for submission during your company’s annual Form 12BB tax proof declaration window, provided the rental tenure and payments were genuine.',
    },
    {
      question: 'What is Section 194-IB and who must deduct 2% TDS on rent?',
      answer:
        'Under Section 194-IB of the Income Tax Act, individuals or HUF tenants paying monthly rent exceeding ₹50,000 must deduct 2% Tax Deducted at Source (TDS) from the landlord’s rent. The tenant does not need a TAN; the tax is deposited using their PAN via online Challan Form 26QC, and Form 16C is issued to the landlord.',
    },
    {
      question: 'Can I claim both HRA tax exemption and Home Loan deductions simultaneously?',
      answer:
        'Yes, provided legitimate commercial reasons exist. For example, if you own a home in one city (or distant suburb) but live in rented accommodation closer to your workplace, you can claim HRA under Section 10(13A) alongside Home Loan interest deductions up to ₹2 Lakh under Section 24(b) and principal repayments up to ₹1.5 Lakh under Section 80C.',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
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

      {/* Section 4: Comprehensive Master HRA & Tenancy Compliance Guide */}
      <section className="mb-10 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8" aria-label="Master HRA & Tenancy Compliance Guide">
        {/* Header & Category Badge */}
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Master Statutory Playbook &bull; FY 2025-26 &bull; AY 2026-27</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Complete Guide to Rent Receipts, Section 10(13A) HRA Rules &amp; Tenancy Compliance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Everything salaried employees, landlords, and self-employed professionals need to know to generate legally valid rent receipts, claim maximum House Rent Allowance (HRA) exemptions, and satisfy corporate payroll and Income Tax Department audits.
          </p>
        </div>

        {/* 1. The Statutory 3-Condition Formula */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-600" />
            <span>1. The Statutory Rule 2A HRA Exemption Formula</span>
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under Section 10(13A) of the Income Tax Act, 1961, read with Rule 2A of the Income Tax Rules, 1962, the tax-exempt portion of House Rent Allowance is strictly determined as the <strong>MINIMUM</strong> of three statutory calculations:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-blue-100 bg-blue-50/50">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">Condition 1</span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Actual HRA Received</h4>
              <p className="text-xs text-slate-600">
                The total House Rent Allowance designated in your monthly salary slip and Form 16 issued by your employer.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-indigo-100 bg-indigo-50/50">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider block mb-1">Condition 2</span>
              <h4 className="text-base font-bold text-slate-900 mb-1">50% or 40% of Salary</h4>
              <p className="text-xs text-slate-600">
                <strong>50% of Basic Salary + DA</strong> for metro cities (Delhi, Mumbai, Kolkata, Chennai). <strong>40% of Basic Salary + DA</strong> for all other cities (Bengaluru, Hyderabad, Pune, etc.).
              </p>
            </div>
            <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block mb-1">Condition 3</span>
              <h4 className="text-base font-bold text-slate-900 mb-1">Rent Paid &minus; 10% Salary</h4>
              <p className="text-xs text-slate-600">
                Actual annual residential rent paid minus 10% of your statutory Basic Salary + Dearness Allowance (DA).
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <strong>Important Statutory Definition of &ldquo;Salary&rdquo;:</strong> For Rule 2A calculations, salary includes strictly <em>Basic Pay + Dearness Allowance (DA entering into retirement benefits) + turnover-based commission</em>. Variable allowances, bonuses, special allowances, and reimbursements are excluded from this base, which lowers your 10% deduction and increases your eligible exemption!
          </div>
        </div>

        {/* 2. Comprehensive Compliance & Verification Matrix */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            2. Statutory Tenancy Verification Matrix
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Different rent ranges and payment channels trigger specific legal requirements under the Income Tax Act, CBDT circulars, and the Indian Stamp Act:
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-xs sm:text-sm text-left">
              <thead className="bg-slate-50 text-slate-700 font-bold">
                <tr>
                  <th className="py-3 px-4">Tenancy Scenario</th>
                  <th className="py-3 px-4">Landlord PAN Required?</th>
                  <th className="py-3 px-4">Revenue Stamp Needed?</th>
                  <th className="py-3 px-4">Tax Deducted (TDS)?</th>
                  <th className="py-3 px-4">Required Documents</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600 bg-white">
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Rent &le; ₹8,333/mo (₹1L/year) via Bank/UPI</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Optional</td>
                  <td className="py-3 px-4 text-slate-500">Not required for digital transfers</td>
                  <td className="py-3 px-4 text-slate-500">Nil</td>
                  <td className="py-3 px-4">Monthly rent receipts</td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Rent &gt; ₹8,333/mo (Exceeds ₹1 Lakh/year)</td>
                  <td className="py-3 px-4 text-rose-700 font-bold">Mandatory (CBDT 08/2013)</td>
                  <td className="py-3 px-4 text-slate-500">Only if paid in cash &gt; ₹5,000</td>
                  <td className="py-3 px-4 text-slate-500">Nil (unless &gt; ₹50k/mo)</td>
                  <td className="py-3 px-4">Receipts + Landlord PAN / Form 60</td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Cash Payment exceeding ₹5,000/month</td>
                  <td className="py-3 px-4 font-medium text-slate-700">Mandatory if annual &gt; ₹1L</td>
                  <td className="py-3 px-4 text-rose-700 font-bold">Mandatory ₹1 Stamp Signed Across</td>
                  <td className="py-3 px-4 text-slate-500">Nil</td>
                  <td className="py-3 px-4">Stamped receipts signed by landlord</td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">High Rent &gt; ₹50,000/month</td>
                  <td className="py-3 px-4 text-rose-700 font-bold">Mandatory</td>
                  <td className="py-3 px-4 text-slate-500">Optional for digital transfer</td>
                  <td className="py-3 px-4 text-rose-700 font-bold">2% TDS (Section 194-IB)</td>
                  <td className="py-3 px-4">Receipts + Form 26QC + Form 16C certificate</td>
                </tr>
                <tr className="hover:bg-slate-50/70">
                  <td className="py-3 px-4 font-semibold text-slate-900">Paying Rent to Parents</td>
                  <td className="py-3 px-4 font-medium text-slate-700">Required if &gt; ₹1L/year</td>
                  <td className="py-3 px-4 text-slate-500">Follows cash/digital rules</td>
                  <td className="py-3 px-4 text-slate-500">Nil (unless &gt; ₹50k/mo)</td>
                  <td className="py-3 px-4">Tenancy agreement + Bank debits + Parents ITR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Metro vs Non-Metro Classification */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            3. Metro (50%) vs Non-Metro (40%) City Classifications
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Under the Indian Constitution and Income Tax Rules, only four historic cities qualify for the enhanced <strong>50% of Basic Salary</strong> threshold: <strong>New Delhi, Mumbai, Kolkata, and Chennai</strong>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            All other major metropolitan and IT hubs—including <strong>Bengaluru, Hyderabad, Pune, Gurugram, Noida, Ahmedabad, Kochi, and Chandigarh</strong>—fall strictly under the <strong>40% of Basic Salary</strong> ceiling. When calculating your exemption using our generator, selecting your exact city automatically applies the correct statutory ceiling.
          </p>
        </div>

        {/* 4. Family Tenancy: Paying Rent to Parents vs Spouse */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            4. Paying Rent to Family Members: Legal Rules &amp; Judicial Precedents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/40">
              <h4 className="text-sm font-bold text-emerald-900 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Paying Rent to Parents (100% Legal)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Salaried employees can legally claim Section 10(13A) HRA by paying rent to their parents, affirmed by the Ahmedabad ITAT in <em>Bajrang Prasad Ramdharani v. ACIT</em>. Prerequisites: (1) parents must be legal owners of the house, (2) payments must flow through verifiable banking trails (NEFT/UPI), (3) monthly receipts must be issued, and (4) parents must report this rental income in their annual ITR, where they can claim the 30% statutory repair deduction under Section 24(a).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/40">
              <h4 className="text-sm font-bold text-rose-900 mb-1 flex items-center gap-1.5">
                <span className="text-rose-600 font-bold">&times;</span>
                <span>Paying Rent to Spouse (Strictly Disallowed)</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Paying rent to a husband or wife is consistently rejected by tax assessing officers and appellate tribunals. Spouses share a common domestic domicile under marriage law, and income clubbing provisions under Section 64 disallow synthetic rental arrangements between spouses.
              </p>
            </div>
          </div>
        </div>

        {/* 5. Dual Benefits: Simultaneous HRA + Home Loan Claims */}
        <div className="space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            5. Dual Tax Benefit: Claiming HRA and Home Loan Simultaneously
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            You can claim both Section 10(13A) HRA and Home Loan tax deductions under Section 24(b) (interest up to ₹2,00,000) and Section 80C (principal repayment up to ₹1,50,000) when legitimate commercial circumstances exist:
          </p>
          <ul className="text-xs sm:text-sm text-slate-600 space-y-2 pl-5 list-disc">
            <li><strong>Employment Relocation:</strong> You own a residential house in your hometown (e.g., Pune or Jaipur) but live in rented accommodation in your workplace city (e.g., Bengaluru or Gurugram).</li>
            <li><strong>Commute Distance in Same City:</strong> You own a property in a distant suburb (e.g., Greater Noida or Navi Mumbai) but rent a flat near your central office because daily commuting is impractical.</li>
            <li><strong>Under-Construction Property:</strong> You are servicing a home loan EMI on an under-construction apartment while continuing to live in rented quarters until possession is delivered.</li>
          </ul>
        </div>

        {/* 6. Form 12BB Proof Submission Checklist */}
        <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-3">
          <h4 className="text-sm font-bold text-blue-900 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-blue-700" />
            <span>Form 12BB Employer Submission Checklist (Payroll Cutoff Dec &ndash; Feb)</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span>12 printed monthly rent receipts or 1 annual batch PDF document.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span>Landlord PAN photocopy (mandatory if annual rent exceeds ₹1,00,000).</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span>₹1 revenue stamp signed across by landlord for cash rent over ₹5,000.</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span>Bank account debit statements highlighting electronic rent transfers.</span>
            </div>
          </div>
        </div>

        {/* 7. Action Button Shortcuts */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2.5">
            <a
              href="#rent-receipt"
              onClick={(e) => {
                e.preventDefault();
                onSelectTool('rent-receipt');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-all"
            >
              <span>Generate Rent Receipts</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#hra-calculator"
              onClick={(e) => {
                e.preventDefault();
                onSelectTool('hra-calculator');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 transition-all"
            >
              <span>Calculate HRA Exemption</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="/hra-guide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-all"
            >
              <span>Read Full Statutory Guide &nearr;</span>
            </a>
          </div>

          {/* E-E-A-T Editorial Badge */}
          <div className="text-[11px] text-slate-500 font-medium">
            Fact-Checked &bull; Updated FY 2025-26 &bull; CBDT Aligned
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

      {/* Section 5.5: Editorial Tax & Legal Insights Blog */}
      <section className="mb-10 sm:mb-12" aria-label="Editorial Insights & Tax Guides">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Taxpayer Knowledge &amp; Precedents</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Featured Tax &amp; Tenancy Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Citation-backed tax guides with ITAT rulings and open-in-new-window document tools.
            </p>
          </div>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('blog');
            }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                Family Planning
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2 leading-snug">
                Paying Rent to Parents to Save Tax
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                Ahmedabad ITAT Bajrang Prasad judgment, Section 24(a) 30% deductions, and mandatory bank trail checklists.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-1 text-xs">
              <a
                href="#blog-rent-to-parents"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTool('blog-rent-to-parents');
                }}
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Read Guide →
              </a>
              <button
                type="button"
                onClick={() => window.open(`${window.location.origin}/#rent-receipt`, '_blank', 'noopener,noreferrer')}
                className="text-[11px] text-slate-500 hover:text-blue-600 font-medium inline-flex items-center gap-0.5 cursor-pointer"
                title="Opens in new window"
              >
                <span>Tool ↗</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                Audit Defense
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2 leading-snug">
                Fake Rent Receipts &amp; AIS Scrutiny
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                How CBDT Project Insight cross-checks Form 16 against landlord ITRs, and Section 270A 200% penalties.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-1 text-xs">
              <a
                href="#blog-fake-rent-receipts"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTool('blog-fake-rent-receipts');
                }}
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Read Guide →
              </a>
              <button
                type="button"
                onClick={() => window.open(`${window.location.origin}/#form-12bb`, '_blank', 'noopener,noreferrer')}
                className="text-[11px] text-slate-500 hover:text-blue-600 font-medium inline-flex items-center gap-0.5 cursor-pointer"
                title="Opens in new window"
              >
                <span>Proof ↗</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                Non-HRA
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2 leading-snug">
                Section 80GG Rent Deduction
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                How freelancers and non-HRA salaried employees deduct up to ₹60,000 rent + Form 10BA online tutorial.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-1 text-xs">
              <a
                href="#blog-section-80gg"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTool('blog-section-80gg');
                }}
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Read Guide →
              </a>
              <button
                type="button"
                onClick={() => window.open(`${window.location.origin}/#hra-calculator`, '_blank', 'noopener,noreferrer')}
                className="text-[11px] text-slate-500 hover:text-blue-600 font-medium inline-flex items-center gap-0.5 cursor-pointer"
                title="Opens in new window"
              >
                <span>Calc ↗</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                Legal Tenancy
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2 line-clamp-2 leading-snug">
                Rent Agreement vs Rent Receipt
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 line-clamp-3 leading-relaxed">
                State stamp duty rules, ₹1 revenue stamp mandate, and what HR payroll audits require under Rule 26C.
              </p>
            </div>
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-1 text-xs">
              <a
                href="#blog-rent-agreement-vs-receipt"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTool('blog-rent-agreement-vs-receipt');
                }}
                className="font-bold text-blue-600 hover:text-blue-800"
              >
                Read Guide →
              </a>
              <button
                type="button"
                onClick={() => window.open(`${window.location.origin}/#rent-receipt`, '_blank', 'noopener,noreferrer')}
                className="text-[11px] text-slate-500 hover:text-blue-600 font-medium inline-flex items-center gap-0.5 cursor-pointer"
                title="Opens in new window"
              >
                <span>Tool ↗</span>
              </button>
            </div>
          </div>
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
            href="#hra-calculator"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('hra-calculator');
            }}
            className="px-3 py-1.5 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900 hover:text-indigo-700 hover:border-indigo-300 font-medium transition-colors"
          >
            🧮 HRA Exemption Calculator
          </a>
          <a
            href="#resources"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('resources');
            }}
            className="px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900 hover:text-blue-700 hover:border-blue-300 font-medium transition-colors"
          >
            📚 Tax &amp; Legal Resource Hub
          </a>
          <a
            href="#form-12bb"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('form-12bb');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            📋 Form 12BB Guide
          </a>
          <a
            href="#landlord-pan"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('landlord-pan');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            🛡️ Landlord PAN &amp; Tenant Rights
          </a>
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('blog');
            }}
            className="px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-lg text-purple-900 hover:text-purple-700 hover:border-purple-300 font-medium transition-colors"
          >
            📰 Editorial Tax Blog
          </a>
          <a
            href="#blog-rent-to-parents"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('blog-rent-to-parents');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            👨‍👩‍👦 Paying Rent to Parents
          </a>
          <a
            href="#blog-fake-rent-receipts"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('blog-fake-rent-receipts');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            ⚠️ Fake Rent Receipts &amp; AIS
          </a>
          <a
            href="#blog-section-80gg"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('blog-section-80gg');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            💼 Section 80GG Rent Deduction
          </a>
          <a
            href="#blog-rent-agreement-vs-receipt"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('blog-rent-agreement-vs-receipt');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            ⚖️ Rent Agreement vs Receipt
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

