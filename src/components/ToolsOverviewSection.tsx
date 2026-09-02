import React from 'react';
import { Receipt, FileText, Scale, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface ToolsOverviewSectionProps {
  onNavigate: (page: ActivePage) => void;
  activeToolPage: ActivePage;
}

export const ToolsOverviewSection: React.FC<ToolsOverviewSectionProps> = ({
  onNavigate,
  activeToolPage,
}) => {
  const tools = [
    {
      id: 'tool' as ActivePage,
      title: 'Rent Receipt Generator',
      subtitle: 'HRA Tax Exemption & Proof',
      badge: 'Section 10(13A)',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: <Receipt className="w-6 h-6 text-blue-600" />,
      description:
        'Generate instant single or multi-month rent receipts with auto-spelled Indian Rupees, revenue stamps, Landlord PAN, and scannable QR verification for your employer or ITR.',
      highlights: ['CBDT Compliant Format', 'Revenue Stamp & QR Code', 'Multi-Page A4 PDF Export'],
      buttonText: 'Generate Rent Receipts',
    },
    {
      id: 'salary-slip' as ActivePage,
      title: 'Salary Slip Generator',
      subtitle: 'Professional Payslip Maker',
      badge: 'Indian Payroll Standard',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: <FileText className="w-6 h-6 text-emerald-600" />,
      description:
        'Create professional monthly payslips for small businesses, contractors, and startups. Live breakdown of Basic, HRA, Conveyance, PF, Professional Tax, TDS, and Net Salary.',
      highlights: ['Live Gross/Net Auto-Calculation', 'Custom Allowances & Deductions', 'Employer Signature Block'],
      buttonText: 'Create Salary Slip',
    },
    {
      id: 'affidavit' as ActivePage,
      title: 'Affidavit & Address Proof',
      subtitle: 'Self-Declaration Formatter',
      badge: 'Legal Reference Template',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      description:
        'Draft structured self-declaration affidavits for residence/address proof, name change, gap in education, or income verification ready for print or notarization.',
      highlights: ['Pre-drafted Legal Clauses', 'e-Stamp Paper Margins', 'Deponent Verification Block'],
      buttonText: 'Draft Affidavit',
    },
  ];

  return (
    <section className="mb-10" aria-label="Our Free Financial and Legal Tools">
      <div className="text-center max-w-3xl mx-auto mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Our Free Financial &amp; Legal Tools</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Select a Free Tool to Get Started
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
          100% private, client-side tools designed for Indian taxpayers, salaried employees, landlords, and businesses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {tools.map((t) => {
          const isCurrent = activeToolPage === t.id;
          return (
            <div
              key={t.id}
              className={`relative bg-white rounded-xl border transition-all flex flex-col justify-between p-5 sm:p-6 shadow-xs hover:shadow-md ${
                isCurrent
                  ? 'border-blue-500 ring-2 ring-blue-500/20 bg-blue-50/10'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {isCurrent && (
                <span className="absolute -top-2.5 right-4 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full shadow-2xs">
                  Active Tool
                </span>
              )}

              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs">
                    {t.icon}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${t.tagColor}`}>
                    {t.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {t.title}
                </h3>
                <p className="text-xs text-blue-600 font-medium -mt-0.5 mb-2">
                  {t.subtitle}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {t.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-100 mb-5">
                  {t.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  id={`home-tool-btn-${t.id}`}
                  onClick={() => {
                    onNavigate(t.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2 px-3.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-2xs ${
                    isCurrent
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
                      : 'bg-slate-900 hover:bg-blue-600 text-white'
                  }`}
                >
                  <span>{isCurrent ? 'Currently Active' : t.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
