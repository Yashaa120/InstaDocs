import React, { useState } from 'react';
import {
  Menu,
  X,
  FileText,
  BookOpen,
  HelpCircle,
  Info,
  Mail,
  ShieldCheck,
  Scale,
  Home,
  Receipt,
} from 'lucide-react';
import { ActivePage } from '../types';
import { HouseLogo } from './HouseLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { RegionSwitcher } from './RegionSwitcher';
import { CountryFlag } from './CountryFlag';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop primary tool links - focused, clean, and guaranteed zero overlap
  const desktopNavItems: { id: ActivePage; label: string; href: string }[] = [
    { id: 'rent-receipt', label: 'Generator', href: '#rent-receipt' },
    { id: 'guide', label: 'HRA Guide', href: '#guide' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  // Full list for mobile drawer including legal and informational pages
  const mobileNavItems: { id: ActivePage; label: string; href: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Global Generator', href: '/', icon: <Home className="w-4 h-4 text-blue-600" /> },
    {
      id: 'in',
      label: 'India (HRA Section 10(13A))',
      href: '#in',
      icon: <CountryFlag country="in" className="w-4 h-3 shrink-0" />,
    },
    {
      id: 'us',
      label: 'US Receipts (IRS Records)',
      href: '#us',
      icon: <CountryFlag country="us" className="w-4 h-3 shrink-0" />,
    },
    { id: 'rent-receipt', label: 'Rent Receipt Creator', href: '#rent-receipt', icon: <Receipt className="w-4 h-4 text-blue-600" /> },
    { id: 'salary-slip', label: 'Salary Slip Generator', href: '#salary-slip', icon: <FileText className="w-4 h-4 text-emerald-600" /> },
    { id: 'affidavit', label: 'Affidavit Generator', href: '#affidavit', icon: <Scale className="w-4 h-4 text-amber-600" /> },
    { id: 'guide', label: 'HRA Tax Guide & Calculator', href: '#guide', icon: <BookOpen className="w-4 h-4 text-indigo-600" /> },
    { id: 'faq', label: 'Frequently Asked Questions', href: '#faq', icon: <HelpCircle className="w-4 h-4 text-blue-500" /> },
    { id: 'about', label: 'About Us', href: '#about', icon: <Info className="w-4 h-4 text-slate-500" /> },
    { id: 'contact', label: 'Contact Support', href: '#contact', icon: <Mail className="w-4 h-4 text-slate-500" /> },
    { id: 'privacy', label: 'Privacy Policy', href: '#privacy', icon: <ShieldCheck className="w-4 h-4 text-slate-500" /> },
    { id: 'terms', label: 'Terms & Conditions', href: '#terms', icon: <Scale className="w-4 h-4 text-slate-500" /> },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isNavActive = (pageId: ActivePage) => {
    if (pageId === 'rent-receipt') {
      return activePage === 'rent-receipt' || activePage === 'tool';
    }
    return activePage === pageId;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Left: Brand Logo & Desktop Nav Links */}
          <div className="flex items-center gap-4 lg:gap-7 shrink-0">
            <a
              href="/"
              id="brand-logo-btn"
              className="flex items-center gap-2.5 cursor-pointer select-none group text-left shrink-0"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              aria-label="RentReceipt Home"
            >
              <HouseLogo className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform shadow-2xs rounded-xl shrink-0" />
              <span className="text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
                RentReceipt
              </span>
            </a>

            {/* Desktop Navigation - clean, non-wrapping, and properly spaced */}
            <nav className="hidden md:flex items-center gap-1 shrink-0" aria-label="Main Navigation">
              {desktopNavItems.map((item) => {
                const active = isNavActive(item.id);
                return (
                  <a
                    key={item.id}
                    id={`nav-${item.id}`}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer shrink-0 ${
                      active
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right: Region Switcher + Language Switcher + Mobile menu toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Quick Regional Dropdown */}
            <RegionSwitcher activePage={activePage} onSelectRegion={handleNavClick} />

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200/70 shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          {/* Mobile Region Switcher Selector */}
          <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-200/70">
            <RegionSwitcher
              activePage={activePage}
              onSelectRegion={handleNavClick}
              isMobileCompact={true}
            />
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1" aria-label="Mobile Navigation">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
              Tools &amp; Resources
            </div>
            {mobileNavItems.map((item) => {
              const active = isNavActive(item.id);
              return (
                <a
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="shrink-0">{item.icon}</span>
                    <span className="truncate">{item.label}</span>
                  </div>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

