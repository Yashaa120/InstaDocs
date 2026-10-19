import React from 'react';
import { ShieldCheck, ArrowUp } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3">
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
              A free, privacy-first client-side utility built for salaried employees and self-employed professionals to generate compliant rent receipts and tax documentation under Section 10(13A) and Section 80GG.
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
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('home');
                  }}
                  className="hover:text-white transition-colors block"
                >
                  ⚡ All Free Generators
                </a>
              </li>
              <li>
                <a
                  href="#rent-receipt"
                  rel="nofollow"
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
                  href="#salary-slip"
                  rel="nofollow"
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
                  href="#affidavit"
                  rel="nofollow"
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
                  href="#verify"
                  rel="nofollow"
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

          {/* Tax Guides & Statutory Playbooks */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Tax Guides &amp; Calculators
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#hra-calculator"
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
                  href="#resources"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('resources');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  📚 Tax &amp; Legal Resource Hub
                </a>
              </li>
              <li>
                <a
                  href="#form-12bb"
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
                  href="#landlord-pan"
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
                  href="#guide"
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
                  href="#faq"
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
              Tax Insights &amp; Blog
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog');
                  }}
                  className="hover:text-white text-blue-400 font-semibold transition-colors block cursor-pointer"
                >
                  📰 All Editorial Articles &amp; Insights
                </a>
              </li>
              <li>
                <a
                  href="#blog-rent-to-parents"
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
                  href="#blog-fake-rent-receipts"
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
                  href="#blog-section-80gg"
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
                  href="#blog-rent-agreement-vs-receipt"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('blog-rent-agreement-vs-receipt');
                  }}
                  className="hover:text-white transition-colors block cursor-pointer"
                >
                  ⚖️ Rent Agreement vs Rent Receipt
                </a>
              </li>
              <li className="pt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-slate-500 border-t border-slate-800">
                <button
                  type="button"
                  onClick={(e) => handleLegalClick(e, 'about')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer_about')}
                </button>
                <button
                  type="button"
                  onClick={(e) => handleLegalClick(e, 'privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer_privacy')}
                </button>
                <button
                  type="button"
                  onClick={(e) => handleLegalClick(e, 'terms')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  {t('footer_terms')}
                </button>
                <a
                  href="#contact"
                  rel="nofollow"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('contact');
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('footer_contact')}
                </a>
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
