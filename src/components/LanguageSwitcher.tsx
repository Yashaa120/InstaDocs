import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import {
  SUPPORTED_LANGUAGES,
  LanguageOption,
} from '../utils/languageUtils';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  isMobileCompact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  isMobileCompact = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language: currentLang, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLanguageSelect = (lang: LanguageOption) => {
    setLanguage(lang.code);
    setIsOpen(false);
  };

  const activeLanguage =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) ||
    SUPPORTED_LANGUAGES[0];

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block notranslate text-left ${
        isMobileCompact ? 'w-full' : ''
      }`}
    >
      {/* Trigger Button */}
      <button
        type="button"
        id="language-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 transition-colors cursor-pointer rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
          isMobileCompact
            ? 'w-full justify-between px-3.5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200 text-sm font-medium'
            : 'px-2.5 py-1.5 bg-slate-50 hover:bg-slate-100/80 active:bg-slate-200/80 text-slate-700 hover:text-slate-900 border-slate-200 text-xs font-semibold shadow-2xs'
        }`}
        aria-expanded={isOpen}
        aria-label="Select website language"
        title="Change language"
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <Globe className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span className="font-mono uppercase font-bold tracking-wider">
            {activeLanguage.code.split('-')[0]}
          </span>
          <span className="text-slate-500 font-normal text-[11px] truncate max-w-[80px] hidden sm:inline">
            ({activeLanguage.nativeName})
          </span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-1.5 w-60 rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden py-1.5 animate-fade-in ${
            isMobileCompact ? 'left-0 right-0 w-full' : 'right-0'
          }`}
          style={{ maxHeight: '320px' }}
        >
          <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>Select Language</span>
            <span className="font-mono text-[10px] text-blue-600 font-normal">
              {SUPPORTED_LANGUAGES.length} Languages
            </span>
          </div>

          <div className="overflow-y-auto max-h-[260px] py-1 divide-y divide-slate-50">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleLanguageSelect(lang)}
                  className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="font-mono text-[10px] text-slate-400 w-8 shrink-0 uppercase font-semibold">
                      {lang.code.split('-')[0]}
                    </span>
                    <div className="flex flex-col truncate">
                      <span className="text-slate-900 text-xs font-medium">
                        {lang.nativeName}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {lang.name}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
