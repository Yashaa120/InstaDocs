import React from 'react';
import { Globe } from 'lucide-react';

interface CountryFlagProps {
  country: 'in' | 'us' | 'global';
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

  return <Globe className={`text-blue-600 ${className}`} />;
};
