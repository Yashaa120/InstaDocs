import React, { useState } from 'react';
import {
  Menu,
  X,
  Home,
  ShieldCheck,
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

  const navItems: { id: ActivePage; label: string; icon: React.ReactNode; isHome?: boolean }[] = [
    { id: 'home', label: t('nav_home') || 'Home', icon: <Home className="w-4 h-4" />, isHome: true },
    { id: 'privacy', label: t('footer_privacy') || 'Privacy Policy', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'contact', label: t('footer_contact') || 'Contact Us', icon: <Mail className="w-4 h-4" /> },
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
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Logo with House Icon */}
          <button
            type="button"
            id="brand-logo-btn"
            className="flex items-center gap-2.5 cursor-pointer select-none group text-left bg-transparent border-0 p-0 shrink-0"
            onClick={() => handleNavClick('home')}
            aria-label="Go to homepage"
          >
            <HouseLogo className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform shadow-2xs rounded-xl" />
            <span className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-none group-hover:text-blue-600 transition-colors">
              RentReceipt
            </span>
          </button>

          {/* Desktop Navigation - Home, Privacy, Contact & Language Selection */}
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            <nav className="flex items-center gap-1.5 lg:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const active = isNavActive(item);
                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all cursor-pointer font-medium flex items-center gap-1.5 ${
                      active
                        ? 'bg-blue-50 text-blue-600 font-semibold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Language Switcher */}
            <div className="pl-3 border-l border-slate-200">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Header: Home + Language Selection + Menu Toggle */}
          <div className="flex items-center gap-1.5 md:hidden">
            {/* Direct Home icon for 1-tap navigation on mobile */}
            <button
              id="mobile-quick-home-btn"
              type="button"
              onClick={() => handleNavClick('home')}
              className={`p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center ${
                activePage === 'home'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              aria-label="Home"
              title="Home"
            >
              <Home className="w-4 h-4" />
            </button>

            {/* Language Switcher Dropdown */}
            <LanguageSwitcher />

            {/* Mobile Menu Toggle for Privacy & Contact */}
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

      {/* Mobile Menu Dropdown - Home, Privacy & Contact */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-3 pt-2.5 pb-4 space-y-1 shadow-lg animate-fade-in">
          <nav className="space-y-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const active = isNavActive(item);
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-sm font-medium transition-colors cursor-pointer ${
                    active
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={active ? 'text-blue-600' : 'text-slate-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
