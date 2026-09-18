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

interface HomePageProps {
  onSelectTool: (tool: ActivePage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTool }) => {
  const { t } = useLanguage();

  const tools = [
    {
      id: 'rent-receipt' as ActivePage,
      name: t('tool_rent_receipt_title') || 'Rent Receipt & Slip Generator',
      badge: 'Section 10(13A) Compliant',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
      icon: <Receipt className="w-7 h-7 text-blue-600" />,
      description: t('tool_rent_receipt_desc') || 'Generate print-ready rent receipts with Landlord PAN and revenue stamp block for HRA claims.',
      actionText: t('tool_rent_receipt_btn') || 'Generate Rent Receipts',
      urlHash: '#rent-receipt',
      bulletPoints: ['Instant PDF Download', 'Landlord PAN & Revenue Stamp', 'Section 10(13A) HRA Proof'],
    },
    {
      id: 'salary-slip' as ActivePage,
      name: t('tool_salary_slip_title') || 'Salary Slip Generator',
      badge: 'Indian Payroll Standard',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      icon: <FileText className="w-7 h-7 text-emerald-600" />,
      description: t('tool_salary_slip_desc') || 'Monthly payslips with automatic earnings, PF deductions & net pay.',
      actionText: t('tool_salary_slip_btn') || 'Create Salary Slip',
      urlHash: '#salary-slip',
      bulletPoints: ['Auto Gross & Net Calc', 'EPF, PT & TDS Deductions', 'Company Seal & Sign'],
    },
    {
      id: 'affidavit' as ActivePage,
      name: t('tool_affidavit_title') || 'Affidavit Generator',
      badge: 'Legal Self-Declaration',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-50 border-amber-200 text-amber-700',
      icon: <Scale className="w-7 h-7 text-amber-700" />,
      description: t('tool_affidavit_desc') || 'Self-declaration affidavits for address, tenancy proof, or name verification.',
      actionText: t('tool_affidavit_btn') || 'Draft Affidavit',
      urlHash: '#affidavit',
      bulletPoints: ['Standard Legal Formats', 'e-Stamp Paper Margins', 'Notary Ready Layout'],
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
      title: 'Verify PAN & Stamp Guidelines',
      desc: 'Check automatic rupee-in-words conversion, landlord PAN (if rent > ₹1 Lakh/yr), and ₹1 revenue stamp markers.',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
    },
    {
      number: '4',
      title: 'Download Print-Ready PDF',
      desc: 'Export high-resolution PDFs formatted for standard A4 paper or print directly for physical submission.',
      icon: <Download className="w-5 h-5 text-blue-600" />,
    },
  ];

  const homeFaqs = [
    {
      question: 'Is a revenue stamp compulsory on rent receipts in India?',
      answer:
        'Under the Indian Stamp Act, a ₹1 revenue stamp is mandatory across India when payment exceeds ₹5,000 in cash. For direct bank transfers, UPI, or NEFT/RTGS, a revenue stamp is generally not strictly required by law, though employers often prefer it for internal tax audit compliance.',
    },
    {
      question: 'When is the landlord’s PAN mandatory for HRA exemption?',
      answer:
        'According to Central Board of Direct Taxes (CBDT) circulars, if your annual rent exceeds ₹1,00,000 (i.e. more than ₹8,333 per month), quoting your landlord’s PAN on your rent receipt is mandatory to claim HRA exemption under Section 10(13A).',
    },
    {
      question: 'Can I generate salary slips for previous months?',
      answer:
        'Yes! Our Salary Slip Generator allows you to customize the month, year, salary structure, employee designations, and statutory deductions (PF, PT, TDS) for any past or current payroll period.',
    },
    {
      question: 'Is my personal financial data stored on your servers?',
      answer:
        'No. Our tools run 100% client-side inside your browser. No tenant names, landlord PANs, salary figures, or bank details are ever transmitted to or stored on any server.',
    },
  ];

  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      {/* Hero Section with EXACTLY ONE H1 */}
      <section className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 pt-1" aria-label="Hero Introduction">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>RentReceipt — Fast, Free &amp; Private Document Suite</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Generate Free Rent Receipts &amp; Salary Slips for HRA Tax Exemption
        </h1>

        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Create print-ready rent receipts, monthly salary slips, and rental affidavits in seconds. Designed for Indian salaried employees claiming HRA under Section 10(13A) — 100% free and processed privately in your browser.
        </p>
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

      {/* Section 4: Tax & Payroll SEO Knowledge Guide with H2 and Real Internal Links */}
      <section className="mb-8 bg-slate-50/80 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs space-y-4" aria-label="Tax and Payroll Compliance Overview">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block" />
            <span>Income Tax, HRA Proofs &amp; Payroll Documentation Guide</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Preparing your year-end tax proofs and submitting Form 12BB to your employer requires accurate, standardized documentation. Whether you are claiming House Rent Allowance under Section 10(13A), submitting proof of rent paid to payroll, or preparing records for your annual Income Tax Return (ITR), having error-free receipts with proper Landlord PAN disclosure ensures seamless approval without tax assessment queries.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            RentReceipt.online offers free, dedicated utilities tailored for Indian employees and landlords. Easily create individual or 12-month batch rent receipts with statutory revenue stamp markings, itemized payslips with EPF and professional tax breakdown, or legally drafted tenancy affidavits — all processed 100% locally in your browser for absolute data confidentiality.
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
              onSelectTool('about');
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
              onSelectTool('privacy');
            }}
            className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:text-blue-600 hover:border-blue-300 font-medium transition-colors"
          >
            🔒 Privacy Policy
          </a>
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              onSelectTool('terms');
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

