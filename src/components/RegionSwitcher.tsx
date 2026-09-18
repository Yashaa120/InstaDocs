import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { ActivePage } from '../types';
import { CountryFlag } from './CountryFlag';

interface RegionSwitcherProps {
  activePage: ActivePage;
  onSelectRegion: (page: ActivePage) => void;
  isMobileCompact?: boolean;
}

interface RegionOption {
  id: ActivePage;
  code: 'global' | 'in' | 'us';
  label: string;
  subLabel: string;
  badge: string;
}

const REGIONS: RegionOption[] = [
  {
    id: 'home',
    code: 'global',
    label: 'Global Edition',
    subLabel: 'Multi-Currency ($ USD, € EUR, £ GBP, ₹ INR)',
    badge: 'Universal',
  },
  {
    id: 'in',
    code: 'in',
    label: 'India (HRA)',
    subLabel: 'Section 10(13A) • ₹1 Stamp • Landlord PAN',
    badge: 'CBDT Compliant',
  },
  {
    id: 'us',
    code: 'us',
    label: 'United States',
    subLabel: 'IRS Schedule C/E • State Rental Laws',
    badge: 'IRS Records',
  },
];

export const RegionSwitcher: React.FC<RegionSwitcherProps> = ({
  activePage,
  onSelectRegion,
  isMobileCompact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Determine current active region
  const currentRegion =
    activePage === 'in'
      ? REGIONS[1]
      : activePage === 'us'
      ? REGIONS[2]
      : REGIONS[0];

  const handleSelect = (regionId: ActivePage) => {
    onSelectRegion(regionId);
    setIsOpen(false);
  };

  if (isMobileCompact) {
    return (
      <div className="w-full space-y-1 pt-1 pb-2">
        <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 mb-1">
          Regional Editions & Tax Rules
        </div>
        <div className="grid grid-cols-1 gap-1">
          {REGIONS.map((region) => {
            const isSelected =
              (region.id === 'home' && (activePage === 'home' || activePage === 'rent-receipt' || activePage === 'tool')) ||
              region.id === activePage;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => handleSelect(region.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 text-blue-700 border border-blue-200/80 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <CountryFlag country={region.code} className="w-4 h-3 shrink-0" />
                  <div>
                    <div className="font-semibold leading-tight">{region.label}</div>
                    <div className="text-[10px] text-slate-500">{region.subLabel}</div>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative inline-block text-left shrink-0">
      {/* Trigger Button */}
      <button
        type="button"
        id="region-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100/80 active:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-2xs transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        aria-expanded={isOpen}
        aria-label="Select Country or Region"
        title="Switch region or country tax rules"
      >
        <CountryFlag country={currentRegion.code} className="w-4 h-3 shrink-0" />
        <span className="font-medium text-slate-900 hidden sm:inline">
          {currentRegion.label.split(' ')[0]}
        </span>
        <span className="text-[10px] px-1 py-0.2 bg-blue-100/70 text-blue-800 rounded font-mono hidden md:inline">
          {currentRegion.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-72 rounded-xl bg-white border border-slate-200 shadow-xl py-1.5 z-50 animate-fade-in divide-y divide-slate-100">
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Select Country / Statutory Region
          </div>
          <div className="py-1">
            {REGIONS.map((region) => {
              const isSelected =
                (region.id === 'home' && (activePage === 'home' || activePage === 'rent-receipt' || activePage === 'tool')) ||
                region.id === activePage;
              return (
                <button
                  key={region.id}
                  type="button"
                  onClick={() => handleSelect(region.id)}
                  className={`w-full flex items-start justify-between px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                    isSelected ? 'bg-blue-50/80 text-blue-900 font-medium' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <div className="pt-0.5">
                      <CountryFlag country={region.code} className="w-4 h-3 shrink-0 shadow-2xs" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                        <span>{region.label}</span>
                        <span className="text-[9px] px-1.5 py-0.2 bg-slate-100 text-slate-600 rounded font-normal">
                          {region.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        {region.subLabel}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 ml-2" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
