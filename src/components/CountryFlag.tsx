import React from 'react';
import { Globe } from 'lucide-react';

interface CountryFlagProps {
  country: 'in' | 'us' | 'uk' | 'gb' | 'ca' | 'global';
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ country, className = 'w-4 h-3' }) => {
  if (country === 'in') {
    return (
      <svg
        className={`inline-block shrink-0 rounded-xs border border-slate-300/60 shadow-2xs ${className}`}
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="India Flag"
      >
        <path fill="#f93" d="M0 0h640v160H0z" />
        <path fill="#fff" d="M0 160h640v160H0z" />
        <path fill="#128807" d="M0 320h640v160H0z" />
        <g transform="translate(320 240)">
          <circle r="70" fill="none" stroke="#008" strokeWidth="6" />
          <circle r="14" fill="#008" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="0"
              y1="0"
              x2="0"
              y2="-70"
              stroke="#008"
              strokeWidth="3"
              transform={`rotate(${i * 15})`}
            />
          ))}
        </g>
      </svg>
    );
  }

  if (country === 'us') {
    return (
      <svg
        className={`inline-block shrink-0 rounded-xs border border-slate-300/60 shadow-2xs ${className}`}
        viewBox="0 0 640 480"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="United States Flag"
      >
        <path fill="#bd3d44" d="M0 0h640v480H0z" />
        <path
          stroke="#fff"
          strokeWidth="37"
          d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"
        />
        <path fill="#192f5d" d="M0 0h260v260H0z" />
        <g fill="#fff">
          <circle cx="45" cy="45" r="8" />
          <circle cx="105" cy="45" r="8" />
          <circle cx="165" cy="45" r="8" />
          <circle cx="215" cy="45" r="8" />
          <circle cx="75" cy="85" r="8" />
          <circle cx="135" cy="85" r="8" />
          <circle cx="195" cy="85" r="8" />
          <circle cx="45" cy="125" r="8" />
          <circle cx="105" cy="125" r="8" />
          <circle cx="165" cy="125" r="8" />
          <circle cx="215" cy="125" r="8" />
          <circle cx="75" cy="165" r="8" />
          <circle cx="135" cy="165" r="8" />
          <circle cx="195" cy="165" r="8" />
          <circle cx="45" cy="205" r="8" />
          <circle cx="105" cy="205" r="8" />
          <circle cx="165" cy="205" r="8" />
          <circle cx="215" cy="205" r="8" />
        </g>
      </svg>
    );
  }

  if (country === 'uk' || country === 'gb') {
    return (
      <svg
        className={`inline-block shrink-0 rounded-xs border border-slate-300/60 shadow-2xs ${className}`}
        viewBox="0 0 60 30"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="United Kingdom Flag"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
          <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
        </g>
      </svg>
    );
  }

  if (country === 'ca') {
    return (
      <svg
        className={`inline-block shrink-0 rounded-xs border border-slate-300/60 shadow-2xs ${className}`}
        viewBox="0 0 640 320"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Canada Flag"
      >
        <rect width="640" height="320" fill="#f00"/>
        <rect x="160" width="320" height="320" fill="#fff"/>
        <path d="M320 60l14 36 28-10-8 30 26 12-22 18 10 26-28-6-20 30v-40h-2v40l-20-30-28 6 10-26-22-18 26-12-8-30 28 10z" fill="#f00"/>
      </svg>
    );
  }

  return <Globe className={`text-blue-600 ${className}`} />;
};
