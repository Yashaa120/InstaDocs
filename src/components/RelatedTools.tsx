import React from 'react';
import { FileText, Receipt, Scale, ArrowRight, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface RelatedToolsProps {
  currentTool: 'rent-receipt' | 'salary-slip' | 'affidavit';
  onNavigate: (page: ActivePage) => void;
}

export const RelatedTools: React.FC<RelatedToolsProps> = ({ currentTool, onNavigate }) => {
  const tools = [
    {
      id: 'rent-receipt',
      targetPage: 'tool' as ActivePage,
      title: 'Rent Receipt Generator',
      shortTitle: 'Rent Receipt',
      badge: 'Section 10(13A)',
      tagColor: 'bg-blue-50 text-blue-700 border-blue-200',
      btnColor: 'bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border-blue-200 hover:border-blue-600',
      description:
        'Create rent receipts with revenue stamp & QR code for HRA tax exemption claims.',
      icon: <Receipt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />,
      highlight: 'HRA Tax Exemption',
    },
    {
      id: 'salary-slip',
      targetPage: 'salary-slip' as ActivePage,
      title: 'Salary Slip Generator',
      shortTitle: 'Salary Slip',
      badge: 'Payroll & Tax',
      tagColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      btnColor: 'bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border-emerald-200 hover:border-emerald-600',
      description:
        'Automated payslips with Basic, HRA, PF, PT, TDS calculations & employer signatures.',
      icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />,
      highlight: 'PF, PT & TDS Calc',
    },
    {
      id: 'affidavit',
      targetPage: 'affidavit' as ActivePage,
      title: 'Affidavit Generator',
      shortTitle: 'Affidavit Draft',
      badge: 'Self-Declaration',
      tagColor: 'bg-amber-50 text-amber-800 border-amber-200',
      btnColor: 'bg-amber-50 hover:bg-amber-700 text-amber-800 hover:text-white border-amber-200 hover:border-amber-700',
      description:
        'Self-declaration drafts for address proof, name change, or gap in career ready for print.',
      icon: <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />,
      highlight: 'Address Proof & Gap',
    },
  ];

  const filteredTools = tools.filter((t) => t.id !== currentTool);

  return (
    <section className="my-6 sm:my-8 pt-6 border-t border-slate-200" aria-label="Related Free Tools">
      <div className="flex items-center justify-between mb-3.5 sm:mb-4 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-6 h-6 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <div>
            <h2 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 tracking-tight">
              Other Free Document Generators
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500 hidden sm:block">
              100% private, client-side financial &amp; legal utilities
            </p>
          </div>
        </div>
      </div>

      {/* 2-Column Horizontal Grid on Mobile and Desktop */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            id={`related-tool-${tool.id}`}
            role="button"
            tabIndex={0}
            onClick={() => {
              onNavigate(tool.targetPage);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onNavigate(tool.targetPage);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4.5 shadow-2xs hover:shadow-md hover:border-slate-400 transition-all flex flex-col justify-between group cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div>
              <div className="flex items-center justify-between gap-1.5 mb-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                  {tool.icon}
                </div>
                <span
                  className={`text-[9px] sm:text-[11px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border truncate max-w-[95px] sm:max-w-none ${tool.tagColor}`}
                >
                  {tool.badge}
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                <span className="sm:hidden">{tool.shortTitle}</span>
                <span className="hidden sm:inline">{tool.title}</span>
              </h3>

              <p className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                {tool.description}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100">
              <div
                className={`w-full inline-flex items-center justify-between py-1.5 px-2 sm:px-3 rounded-lg text-[10px] sm:text-xs font-semibold border transition-all shadow-2xs ${tool.btnColor}`}
              >
                <span>Open Tool</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
