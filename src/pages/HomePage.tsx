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
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { HouseLogo } from '../components/HouseLogo';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onSelectTool: (tool: ActivePage) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectTool }) => {
  const { t } = useLanguage();

  const tools = [
    {
      id: 'rent-receipt' as ActivePage,
      name: t('tool_rent_receipt_title') || 'Rent Receipt Generator',
      badge: 'Section 10(13A) Compliant',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconBg: 'bg-blue-50 border-blue-200 text-blue-600',
      icon: <Receipt className="w-8 h-8 text-blue-600" />,
      description: t('tool_rent_receipt_desc') || 'Generate authentic monthly or annual rent receipts with revenue stamp & QR verification for HRA tax exemption.',
      actionText: t('tool_rent_receipt_btn') || 'Generate Rent Receipt',
      urlHash: '#rent-receipt',
      bulletPoints: ['Revenue Stamp & QR Code', 'Multi-Month Batch PDF Export', 'CBDT Rule Compliant'],
    },
    {
      id: 'salary-slip' as ActivePage,
      name: t('tool_salary_slip_title') || 'Salary Slip Generator',
      badge: 'Indian Payroll Standard',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      icon: <FileText className="w-8 h-8 text-emerald-600" />,
      description: t('tool_salary_slip_desc') || 'Create professional monthly employee payslips with automatic earnings, deductions, and net salary calculations.',
      actionText: t('tool_salary_slip_btn') || 'Create Salary Slip',
      urlHash: '#salary-slip',
      bulletPoints: ['Live Gross & Net Auto-Calc', 'EPF, PT & TDS Breakdown', 'Digital Employer Signature'],
    },
    {
      id: 'affidavit' as ActivePage,
      name: t('tool_affidavit_title') || 'Affidavit Generator',
      badge: 'Legal Self-Declaration',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-50 border-amber-200 text-amber-700',
      icon: <Scale className="w-8 h-8 text-amber-700" />,
      description: t('tool_affidavit_desc') || 'Draft legal self-declaration affidavits for address proof, name change, or gap certificates with e-stamp margin support.',
      actionText: t('tool_affidavit_btn') || 'Draft Affidavit',
      urlHash: '#affidavit',
      bulletPoints: ['Pre-drafted Legal Clauses', 'e-Stamp Paper Margins', 'Notary Attestation Ready'],
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      
      {/* Top Banner Ad Slot */}
      <div className="mb-6 sm:mb-8">
        <AdSlot type="banner" />
      </div>

      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 pt-1" aria-label="Hero Introduction">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>RentReceipt — Fast, Free &amp; Private Document Suite</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Free Document Generators for Everyday Needs
        </h1>

        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Create legally formatted rent receipts, professional salary slips, and self-declaration affidavits directly in your browser with zero sign-up.
        </p>
      </section>

      {/* Tool Selector Cards Grid - Compact & Balanced 3-Card Fit */}
      <section className="mb-10 sm:mb-12" aria-label="Tool Selection Grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {tools.map((tool) => (
            <div
              key={tool.id}
              id={`tool-card-${tool.id}`}
              role="button"
              tabIndex={0}
              onClick={() => onSelectTool(tool.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectTool(tool.id);
                }
              }}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs hover:shadow-lg hover:border-blue-500 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 select-none"
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

                {/* Tool Name */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                  {tool.name}
                </h2>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
                  {tool.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  {tool.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-normal">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Button Inside Card - min-h-[44px] for mobile accessibility */}
              <div className="mt-5 pt-1">
                <div className="w-full min-h-[44px] inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-blue-600 text-slate-800 group-hover:text-white border border-slate-200 group-hover:border-blue-600 transition-all font-semibold text-sm shadow-2xs">
                  <span>{tool.actionText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Privacy Section */}
      <section className="mb-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs" aria-label="Trust and Privacy Highlights">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Built With Client-Side Privacy First</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Why Professionals &amp; Tenants Choose Our Platform
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

      {/* Tax & Payroll SEO Knowledge Section (50-150 Words with Trending Keywords) */}
      <section className="mb-8 bg-slate-50/80 rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-2xs" aria-label="Tax and Payroll Compliance Overview">
        <div className="max-w-4xl mx-auto space-y-3">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            <span>Income Tax, HRA Proofs &amp; Payroll Documentation Guide</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Need an authentic <strong>salary slip format</strong> or verified <strong>salary slip generator</strong> for your <strong>income tax</strong> declaration before the <strong>ITR filing last date</strong>? Whether you manage employee payroll records on <strong>Salary Box</strong> / <strong>Salarybox</strong>, claim <strong>HRA tax exemption</strong> under <strong>Section 10(13A)</strong>, or prepare tax returns on <strong>ClearTax</strong>, <strong>Tax2Win</strong>, or the official <strong>Income Tax login (ITR login)</strong> portal, submitting accurate <strong>salary slips</strong> and signed rent receipts with valid landlord PAN is essential.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Our platform provides instant, free document generators for compliant <strong>salary slip formats</strong>, batch rent receipts with revenue stamp formatting, and legal self-declarations for official verification, bank loans, and welfare portals like <strong>Annapurna Bhandar portal</strong> (for <strong>Annapurna Bhandar status check</strong> documentation). All documents are generated locally in your browser with zero server storage.
          </p>
        </div>
      </section>

      {/* Pre-Footer Ad Slot */}
      <div className="mb-4">
        <AdSlot type="pre-footer" />
      </div>

    </div>
  );
};
