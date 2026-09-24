import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, Info, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

export type LegalModalType = 'privacy' | 'terms' | 'about' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
  onNavigateFullPage: (page: ActivePage) => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  type,
  onClose,
  onNavigateFullPage,
}) => {
  // Handle ESC key press
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80 sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && (
              <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
            )}
            {type === 'terms' && (
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                <Scale className="w-5 h-5" />
              </div>
            )}
            {type === 'about' && (
              <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                <Info className="w-5 h-5" />
              </div>
            )}
            <div>
              <h2
                id="legal-modal-title"
                className="text-lg font-bold text-slate-900"
              >
                {type === 'privacy' && 'Privacy Policy & Data Security'}
                {type === 'terms' && 'Terms of Service & Usage Agreement'}
                {type === 'about' && 'About RentReceipt.online Suite'}
              </h2>
              <p className="text-xs text-slate-500">
                {type === 'privacy' && '100% Client-Side Private In-Browser Execution'}
                {type === 'terms' && 'Clear Legal Terms with Zero Hidden Charges'}
                {type === 'about' && 'Free Multi-Currency Documentation Utility'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <>
              <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-start gap-3 text-emerald-900 text-xs sm:text-sm">
                <Lock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-1">
                    Zero Server Storage Architecture (100% Client-Side)
                  </strong>
                  RentReceipt.online does not transmit, store, or serialize your personal, financial, tenant, or landlord details to any remote backend server. All PDF layout compilation takes place entirely inside your web browser’s local sandbox memory.
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  1. Information We Do NOT Collect
                </h3>
                <p>
                  When you generate rent receipts, salary slips, or tenancy declarations:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>We do not record tenant names, landlord names, or rental addresses.</li>
                  <li>We do not capture PAN card numbers, SSNs, or tax identification codes.</li>
                  <li>We do not retain salary structures, bank transaction reference IDs, or financial figures.</li>
                  <li>We do not retain copies of downloaded PDF documents.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  2. Local Browser Storage &amp; Cookies
                </h3>
                <p>
                  We utilize standard browser local session memory only to preserve your form inputs during active editing so you do not lose your draft if you accidentally refresh. This data never leaves your personal device and can be cleared instantly via browser cache or reset buttons.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  3. Third-Party Analytics &amp; Advertising
                </h3>
                <p>
                  We may serve non-intrusive advertisements via Google AdSense to cover hosting costs. Google may use cookies to serve ads based on prior visits. You may opt out of personalized advertising by visiting Google Ads Settings.
                </p>
              </section>
            </>
          )}

          {type === 'terms' && (
            <>
              <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-xl flex items-start gap-3 text-blue-900 text-xs sm:text-sm">
                <Scale className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-1">
                    Free Utility Terms of Use
                  </strong>
                  By accessing and utilizing RentReceipt.online, you acknowledge that you are using this document formatting utility for legal, lawful, and accurate reporting purposes.
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  1. Accuracy of User-Provided Information
                </h3>
                <p>
                  You agree that all names, addresses, rental sums, and tax identifiers (PAN, SSN, EIN) entered into this tool reflect genuine, bona fide transactions. RentReceipt.online is an automated document generator and assumes no responsibility for fraudulent data or erroneous entries submitted for employer HRA claims or tax filings.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  2. No Financial or Legal Advisory Relationship
                </h3>
                <p>
                  The documents generated through this platform are standardized templates for administrative convenience. This utility does not constitute professional legal, tax, or Chartered Accountancy advisory services. Users are encouraged to verify tax exemptions with qualified tax professionals.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  3. Intellectual Property &amp; Commercial Usage
                </h3>
                <p>
                  You may generate, download, print, and submit unlimited PDF receipts for your personal, business, and payroll documentation at zero cost without watermarks. Reselling or automated scraping of the site software is strictly prohibited.
                </p>
              </section>
            </>
          )}

          {type === 'about' && (
            <>
              <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl flex items-start gap-3 text-indigo-900 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold mb-1">
                    Universal Multi-Currency Document Platform
                  </strong>
                  RentReceipt.online is an independent, high-performance web utility built to make rent proof and salary documentation instant, multi-currency, and 100% private.
                </div>
              </div>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Our Mission &amp; Architectural Focus
                </h3>
                <p>
                  Traditional receipt generators often require accounts, passwords, or send personal financial information to third-party databases. We built RentReceipt.online to eliminate server-side storage entirely:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Instant Browser Compilation:</strong> PDFs are dynamically assembled locally inside your browser canvas in under 0.3 seconds.</li>
                  <li><strong>Multi-Currency Routing:</strong> Native formatting for USD ($), EUR (€), GBP (£), CAD (C$), AUD ($), and INR (₹).</li>
                  <li><strong>Statutory Tax Compliance:</strong> Built-in Section 10(13A) HRA rules, CBDT Landlord PAN disclosures, revenue stamp guidelines, and IRS proof standards.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Free Forever &amp; Open Access
                </h3>
                <p>
                  Our generators are 100% free with no hidden paywalls, no watermark penalties, and no user registration requirements.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              if (type) onNavigateFullPage(type);
            }}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Open Dedicated Full Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            Close Overlay
          </button>
        </div>
      </div>
    </div>
  );
};
