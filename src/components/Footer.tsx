import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { ActivePage } from '../types';
import { HouseLogo } from './HouseLogo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2.5 text-white">
              <HouseLogo className="w-8 h-8 rounded-xl shadow-xs" />
              <span className="text-lg font-bold tracking-tight">
                RentReceipt
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              A free, privacy-first client-side utility built for Indian salaried employees to generate, preview, and download authentic rent receipts for HRA tax exemption claims under Section 10(13A).
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Client-Side • Zero Data Stored • No Login Needed</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Free Document Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  ⚡ All Free Generators
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('rent-receipt')}
                  className="hover:text-white transition-colors text-left"
                >
                  🏠 Rent Receipt Generator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('salary-slip')}
                  className="hover:text-white transition-colors text-left"
                >
                  💼 Salary Slip Generator
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('affidavit')}
                  className="hover:text-white transition-colors text-left"
                >
                  📜 Affidavit &amp; Address Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('verify')}
                  className="hover:text-white transition-colors text-left"
                >
                  🔍 QR Receipt Verification
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policy */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Resources &amp; Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('guide')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  HRA Tax Rules &amp; Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer_about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer_contact')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer_privacy')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer_terms')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> Rent Receipt Generator is an independent document formatting tool created for educational and administrative convenience. It does not provide legal, tax, or financial advisory services. Please verify your tax exemptions with a qualified Chartered Accountant (CA) or tax advisor.
          </p>
        </div>

        {/* Bottom Bar with Clean Minimalist Trust Badges */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1">✅ 100% Free</span>
            <span className="inline-flex items-center gap-1">🔒 Private &amp; Secure</span>
            <span className="inline-flex items-center gap-1">⚡ Instant Download</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} RentReceipt Generator India. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
