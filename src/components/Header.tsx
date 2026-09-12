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
} from 'lucide-react';
import { ActivePage } from '../types';
import { HouseLogo } from './HouseLogo';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop primary tool links - strictly 2-3 clean headlines (Salary Slip & Affidavit are featured in the tools section below)
  const desktopNavItems: { id: ActivePage; label: string; href: string }[] = [
    { id: 'rent-receipt', label: 'Rent Receipt', href: '/rent-receipt-generator.html' },
    { id: 'guide', label: 'HRA Guide', href: '/hra-guide.html' },
    { id: 'faq', label: 'FAQ', href: '/faq.html' },
  ];

  // Full list for mobile drawer including legal and informational pages
  const mobileNavItems: { id: ActivePage; label: string; href: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Rent Receipt Generator', href: '/rent-receipt-generator.html', icon: <Home className="w-4 h-4 text-blue-600" /> },
    { id: 'salary-slip', label: 'Salary Slip Generator', href: '/salary-slip-generator.html', icon: <FileText className="w-4 h-4 text-emerald-600" /> },
    { id: 'affidavit', label: 'Affidavit Generator', href: '/affidavit-generator.html', icon: <FileText className="w-4 h-4 text-purple-600" /> },
    { id: 'guide', label: 'HRA Tax Guide & Calculator', href: '/hra-guide.html', icon: <BookOpen className="w-4 h-4 text-amber-600" /> },
    { id: 'faq', label: 'Frequently Asked Questions', href: '/faq.html', icon: <HelpCircle className="w-4 h-4 text-blue-500" /> },
    { id: 'about', label: 'About Us', href: '/about.html', icon: <Info className="w-4 h-4 text-slate-500" /> },
    { id: 'contact', label: 'Contact Support', href: '/contact.html', icon: <Mail className="w-4 h-4 text-slate-500" /> },
    { id: 'privacy', label: 'Privacy Policy', href: '/privacy.html', icon: <ShieldCheck className="w-4 h-4 text-slate-500" /> },
    { id: 'terms', label: 'Terms & Conditions', href: '/terms.html', icon: <Scale className="w-4 h-4 text-slate-500" /> },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    // Normalise 'rent-receipt' click from desktop nav to 'home' when at root
    const target = pageId === 'rent-receipt' ? 'home' : pageId;
    setActivePage(target);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isNavActive = (pageId: ActivePage) => {
    if (pageId === 'rent-receipt' || pageId === 'home') {
      return activePage === 'home' || activePage === 'rent-receipt' || activePage === 'tool';
    }
    return activePage === pageId;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Left: Brand Logo & Desktop Nav Links */}
          <div className="flex items-center gap-6 lg:gap-8 min-w-0">
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

            {/* Desktop Navigation - 2-3 clean headlines */}
            <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
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
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
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

          {/* Right: Contact link + Language Switcher (Desktop) & Menu toggle (Mobile) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href="#contact"
              id="nav-contact-btn"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className={`hidden md:inline-flex whitespace-nowrap px-3 py-1.5 rounded-lg text-sm transition-colors cursor-pointer ${
                activePage === 'contact'
                  ? 'bg-blue-50 text-blue-600 font-semibold'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/70 font-medium'
              }`}
            >
              Contact
            </a>

            <LanguageSwitcher />

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer border border-slate-200/70"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200/80 bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="space-y-1" aria-label="Mobile Navigation">
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
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
