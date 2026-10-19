import React from 'react';
import { ExternalLink, Receipt, Calculator, FileText, Scale, Sparkles } from 'lucide-react';
import { ActivePage } from '../types';

interface NewWindowToolCtaProps {
  title?: string;
  description?: string;
  variant?: 'banner' | 'card' | 'inline' | 'floating';
  onNavigateInternal?: (page: ActivePage) => void;
}

/**
 * High-engagement CTA widget designed to open generators and calculators
 * in a NEW WINDOW / NEW TAB to keep the blog article active in the user's
 * browser session, eliminating bounce damage and boosting session dwell time.
 */
export const NewWindowToolCta: React.FC<NewWindowToolCtaProps> = ({
  title = 'Need an Official Rent Receipt for Tax Exemption?',
  description = 'Generate print-ready landlord rent receipts with revenue stamp, QR verification, and custom signatures in seconds. Opens in a new tab so your reading progress stays intact.',
  variant = 'card',
  onNavigateInternal,
}) => {
  const openInNewTab = (hash: string) => {
    const url = `${window.location.origin}/#${hash}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'inline') {
    return (
      <div className="my-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-2.5 text-slate-800 text-sm">
          <Receipt className="w-5 h-5 text-blue-600 shrink-0" />
          <span className="font-semibold text-slate-900">Generate Stamped Rent Receipts:</span>
          <span className="text-slate-600 hidden md:inline">100% free &amp; client-side.</span>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            type="button"
            onClick={() => openInNewTab('rent-receipt')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs hover:shadow-md transition-all cursor-pointer group"
          >
            <span>Open Generator in New Window</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          {onNavigateInternal && (
            <button
              type="button"
              onClick={() => onNavigateInternal('rent-receipt')}
              className="text-xs text-slate-600 hover:text-blue-600 font-medium px-2 py-1 transition-colors cursor-pointer"
            >
              (Open here)
            </button>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className="my-8 p-6 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl shadow-md border border-blue-900/40 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Utilities • Zero Data Tracking</span>
          </div>
          <h3 className="text-xl font-bold tracking-tight text-white mb-2">{title}</h3>
          <p className="text-sm text-slate-300 mb-5 max-w-2xl leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => openInNewTab('rent-receipt')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-xs hover:shadow-lg transition-all cursor-pointer group"
            >
              <Receipt className="w-4 h-4" />
              <span>Generate Rent Receipt (New Window)</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => openInNewTab('hra-calculator')}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-blue-200 border border-slate-700 text-sm font-semibold rounded-xl transition-all cursor-pointer group"
            >
              <Calculator className="w-4 h-4 text-emerald-400" />
              <span>Open HRA Calculator (New Tab)</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
          <p className="text-[11px] text-slate-400 mt-3 flex items-center gap-1.5">
            <span>🛡️</span>
            <span>Your reading session remains uninterrupted in this tab while documents open in a separate window.</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <aside aria-label="Interactive Document Tools" className="my-8 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div className="space-y-1.5 flex-1">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span>Quick Tool Access</span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900">{title}</h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={() => openInNewTab('rent-receipt')}
          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Receipt className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Rent Receipt</p>
              <p className="text-[10px] text-slate-500">PDF Generator</p>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => openInNewTab('hra-calculator')}
          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-600">HRA Calculator</p>
              <p className="text-[10px] text-slate-500">Rule 2A Engine</p>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => openInNewTab('salary-slip')}
          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Salary Slip</p>
              <p className="text-[10px] text-slate-500">Monthly Payslip</p>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 shrink-0" />
        </button>

        <button
          type="button"
          onClick={() => openInNewTab('affidavit')}
          className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/50 transition-all text-left cursor-pointer group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 group-hover:text-amber-600">PAN Affidavit</p>
              <p className="text-[10px] text-slate-500">Address Proof</p>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 shrink-0" />
        </button>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span>⚡ All tools open in a new window to keep your reading progress active.</span>
        <button
          type="button"
          onClick={() => openInNewTab('resources')}
          className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
        >
          <span>View all guides</span>
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
};
