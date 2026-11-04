import React from 'react';
import { ShieldCheck, ArrowUp, Globe } from 'lucide-react';
import { ActivePage } from '../types';
import { HouseLogo } from './HouseLogo';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onOpenModal?: (type: 'privacy' | 'terms' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenModal }) => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLegalClick = (e: React.MouseEvent, type: 'privacy' | 'terms' | 'about') => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal(type);
    } else {
      handleNav(type);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3 lg:col-span-1">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('home');
              }}
              className="inline-flex items-center space-x-2.5 text-white group cursor-pointer"
            >
              <HouseLogo className="w-8 h-8 rounded-xl shadow-xs group-hover:scale-105 transition-transform" />
              <span className="text-lg font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                RentReceipt
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed">
              Global multi-currency rent receipt generator and tenancy compliance platform. 100% private in-browser document compilation for tenants and landlords in the US, UK, Canada, India, and worldwide.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Client-Side • Zero Data Stored</span>
            </div>
          </div>

          {/* Document Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Free Document Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/rent-receipt-generator.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('rent-receipt');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🏠 Rent Receipt Generator
                </a>
              </li>
              <li>
                <a
                  href="/salary-slip-generator.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('salary-slip');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  💼 Salary Slip Generator
                </a>
              </li>
              <li>
                <a
                  href="/affidavit-generator.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('affidavit');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  📜 Affidavit &amp; Address Proof
                </a>
              </li>
              <li>
                <a
                  href="/rent-receipt-generator.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('verify');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🔍 QR Receipt Verification
                </a>
              </li>
            </ul>
          </div>

          {/* International Country Editions */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Country Editions</span>
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/us-rent-receipt.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('us');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🇺🇸 United States (IRS Proof)
                </a>
              </li>
              <li>
                <a
                  href="/uk-rent-receipt.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('uk');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🇬🇧 United Kingdom (DPS / TDS)
                </a>
              </li>
              <li>
                <a
                  href="/canada-rent-receipt.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('canada');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🇨🇦 Canada (CRA &amp; Provincial)
                </a>
              </li>
              <li>
                <a
                  href="/rent-receipt-generator.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('in');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🇮🇳 India (Section 10(13A) HRA)
                </a>
              </li>
            </ul>
          </div>

          {/* Tax Guides & Statutory Playbooks */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Tax Guides &amp; Engine
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/hra-calculator.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('hra-calculator');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🧮 HRA Exemption Calculator
                </a>
              </li>
              <li>
                <a
                  href="/hra-guide.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('guide');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  📖 Section 10(13A) Master Guide
                </a>
              </li>
              <li>
                <a
                  href="/form-12bb-guide.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('form-12bb');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  📋 Form 12BB Filing Playbook
                </a>
              </li>
              <li>
                <a
                  href="/landlord-pan-handbook.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('landlord-pan');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  🛡️ Landlord PAN &amp; Tenant Rights
                </a>
              </li>
              <li>
                <a
                  href="/faq.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('faq');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  ❓ Taxpayer FAQ Knowledge Base
                </a>
              </li>
            </ul>
          </div>

          {/* Editorial Blog Articles */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Editorial Blog &amp; Insights
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/blog.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog');
                  }}
                  className="hover:text-white text-blue-400 font-semibold transition-colors block cursor-pointer"
                >
                  📰 All Editorial Articles
                </a>
              </li>
              <li>
                <a
                  href="/blog-rent-to-parents.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog-rent-to-parents');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  👨‍👩‍👦 Paying Rent to Parents Rules
                </a>
              </li>
              <li>
                <a
                  href="/blog-fake-rent-receipts.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog-fake-rent-receipts');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  ⚠️ Fake Rent Receipts &amp; AIS Notices
                </a>
              </li>
              <li>
                <a
                  href="/blog-section-80gg.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog-section-80gg');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  💼 Section 80GG Non-HRA Deductions
                </a>
              </li>
              <li>
                <a
                  href="/blog-rent-agreement-vs-receipt.html"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog-rent-agreement-vs-receipt');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  ⚖️ Rent Agreement vs Rent Receipt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Policy Navigation Strip */}
        <div className="pt-6 pb-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="/about.html"
              onClick={(e) => handleLegalClick(e, 'about')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer_about') || 'About Us'}
            </a>
            <a
              href="/privacy.html"
              onClick={(e) => handleLegalClick(e, 'privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer_privacy') || 'Privacy Policy'}
            </a>
            <a
              href="/terms.html"
              onClick={(e) => handleLegalClick(e, 'terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer_terms') || 'Terms & Conditions'}
            </a>
            <a
              href="/contact.html"
              onClick={(e) => {
                e.preventDefault();
                handleNav('contact');
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t('footer_contact') || 'Contact Us'}
            </a>
          </div>

          <div className="text-[11px] text-slate-500">
            Official publisher contact: <a href="mailto:support@rentreceipt.online" className="text-blue-400 hover:underline">support@rentreceipt.online</a>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="pt-4 border-t border-slate-800/60 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Statutory Disclaimer:</strong> RentReceipt.online is an independent document formatting and tax calculation utility created for administrative, educational, and tenancy record-keeping purposes. We do not provide chartered accountancy, legal advisory, or personal financial advice. For complex corporate tax audits, consult a licensed CPA, Enrolled Agent, or Chartered Accountant.
          </p>
        </div>

        {/* Bottom Bar with Global Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1">✅ 100% Free Service</span>
            <span className="inline-flex items-center gap-1">🔒 Zero Server Storage</span>
            <span className="inline-flex items-center gap-1">⚡ Instant In-Browser PDF</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 RentReceipt.online. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
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
