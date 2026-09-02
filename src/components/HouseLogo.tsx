import React from 'react';

interface HouseLogoProps {
  className?: string;
  size?: number | string;
}

export const HouseLogo: React.FC<HouseLogoProps> = ({ className = 'w-9 h-9', size }) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <div className={`inline-flex items-center justify-center shrink-0 select-none ${className}`} style={style}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-xs"
      >
        <defs>
          {/* Roof Gradient - Vibrant Red/Orange terracotta like 🏠 */}
          <linearGradient id="roofEmojiGrad" x1="32" y1="6" x2="32" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f87171" />
            <stop offset="20%" stopColor="#ef4444" />
            <stop offset="70%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* Roof Overhang Trim */}
          <linearGradient id="roofTrimGrad" x1="4" y1="32" x2="60" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

          {/* House Front Wall - Warm Cream/Amber */}
          <linearGradient id="wallEmojiGrad" x1="12" y1="28" x2="52" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#fcd34d" />
          </linearGradient>

          {/* Left Wall Shadow */}
          <linearGradient id="wallShadow" x1="10" y1="28" x2="22" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Chimney */}
          <linearGradient id="chimneyGrad" x1="16" y1="12" x2="24" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>

          {/* Window Glass - Cyan/Blue */}
          <linearGradient id="windowGlassGrad" x1="36" y1="34" x2="48" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Door - Rich Warm Wood */}
          <linearGradient id="doorWoodGrad" x1="20" y1="36" x2="30" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9a3412" />
            <stop offset="50%" stopColor="#7c2d12" />
            <stop offset="100%" stopColor="#431407" />
          </linearGradient>
        </defs>

        {/* Soft Base Ground Shadow */}
        <ellipse cx="32" cy="58" rx="24" ry="3.5" fill="#0f172a" fillOpacity="0.12" />

        {/* Chimney */}
        <rect x="16" y="14" width="7" height="14" rx="1.5" fill="url(#chimneyGrad)" />
        <rect x="15" y="12" width="9" height="3" rx="1" fill="#9a3412" />

        {/* House Main Body Wall */}
        <rect x="12" y="28" width="40" height="28" rx="3" fill="url(#wallEmojiGrad)" />

        {/* Front Door */}
        <path
          d="M20 56V40C20 37.7909 21.7909 36 24 36H28C30.2091 36 32 37.7909 32 40V56H20Z"
          fill="url(#doorWoodGrad)"
        />
        {/* Door Knob */}
        <circle cx="29.5" cy="47" r="1.2" fill="#fde047" />

        {/* Window with White Frame */}
        <rect x="36" y="34" width="13" height="13" rx="2.5" fill="#ffffff" />
        <rect x="37.5" y="35.5" width="10" height="10" rx="1.5" fill="url(#windowGlassGrad)" />
        {/* Window Panes Grid */}
        <line x1="37.5" y1="40.5" x2="47.5" y2="40.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="42.5" y1="35.5" x2="42.5" y2="45.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />

        {/* Iconic Triangular Roof (🏠) */}
        <path
          d="M6 31L32 7L58 31C58.8 31.7 58.3 33 57.2 33H6.8C5.7 33 5.2 31.7 6 31Z"
          fill="url(#roofEmojiGrad)"
        />
        {/* Roof Eaves Trim Bottom Line */}
        <path
          d="M5 32L32 8L59 32"
          stroke="url(#roofTrimGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Little Attic Vent Circle */}
        <circle cx="32" cy="22" r="2.8" fill="#fef08a" opacity="0.9" />
        <circle cx="32" cy="22" r="2.8" stroke="#b91c1c" strokeWidth="0.8" />
      </svg>
    </div>
  );
};
