import React, { useState } from 'react';
import {
  Share2,
  Menu,
  X,
  Home,
  Info,
  Mail,
} from 'lucide-react';
import { ActivePage } from '../types';
import { HouseLogo } from './HouseLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const shareOnWhatsApp = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.origin : 'https://rentreceipt.app';
    const message = `Free online document generators for Rent Receipts, Salary Slips, and Affidavits: ${currentUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const navItems: { id: ActivePage; label: string; icon: React.ReactNode; isHome?: boolean }[] = [
    { id: 'home', label: t('nav_home') || 'Home', icon: <Home className="w-4 h-4" />, isHome: true },
    { id: 'rent-receipt', label: t('tool_rent_receipt_title') || 'Rent Receipt', icon: <span className="text-base">🏠</span> },
    { id: 'salary-slip', label: t('tool_salary_slip_title') || 'Salary Slip', icon: <span className="text-base">💼</span> },
    { id: 'affidavit', label: t('tool_affidavit_title') || 'Affidavit', icon: <span className="text-base">📜</span> },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isNavActive = (item: typeof navItems[0]) => {
    if (item.isHome) {
      return activePage === 'home';
    }
    return activePage === item.id;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5 sm:py-4 min-h-[64px]">
          
          {/* Logo with House Icon - Clicking always returns to Homepage */}
          <button
            type="button"
            id="brand-logo-btn"
            className="flex items-center gap-3 cursor-pointer select-none group text-left bg-transparent border-0 p-0"
            onClick={() => handleNavClick('home')}
            aria-label="Go to homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-all shrink-0 p-1">
              <HouseLogo className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                RentReceipt
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-1 leading-tight hidden xs:block">
                Free Document Generators
              </span>
            </div>
          </button>

          {/* Desktop Navigation - 2-3 Essential Links + Share Button + Language Switcher */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            <nav className="flex items-center gap-5 lg:gap-7" aria-label="Main Navigation">
              {navItems.map((item) => {
                const active = isNavActive(item);
                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm whitespace-nowrap transition-colors relative py-1 cursor-pointer font-medium ${
                      active
                        ? 'text-blue-600 font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* WhatsApp Share Button */}
            <button
              id="whatsapp-share-header"
              type="button"
              onClick={shareOnWhatsApp}
              className="inline-flex items-center gap-2 py-2 px-3.5 rounded-lg text-xs font-semibold bg-[#25d366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white shadow-2xs transition-colors whitespace-nowrap cursor-pointer"
              title="Share on WhatsApp"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="scale-95 origin-right">
              <LanguageSwitcher />
            </div>

            <button
              id="mobile-share-btn"
              type="button"
              onClick={shareOnWhatsApp}
              className="p-2 rounded-lg bg-[#25d366] text-white shadow-2xs hover:bg-[#20bd5a] transition-colors cursor-pointer"
              aria-label="Share on WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fade-in">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const active = isNavActive(item);
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-left text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className={active ? 'text-blue-600' : 'text-slate-400'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
