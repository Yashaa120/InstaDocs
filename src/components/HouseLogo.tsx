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
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Ground Soft Ambient Shadow */}
          <radialGradient id="baseShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0f172a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>

          {/* Manicured Lawn Grass Gradient */}
          <linearGradient id="lawnGrad" x1="16" y1="92" x2="104" y2="108" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Front Wall (Warm Light Sandstone) */}
          <linearGradient id="frontWallGrad" x1="28" y1="52" x2="92" y2="98" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffedd5" />
            <stop offset="40%" stopColor="#fed7aa" />
            <stop offset="100%" stopColor="#fba759" />
          </linearGradient>

          {/* Left / Shadow Side Wall */}
          <linearGradient id="leftWallGrad" x1="22" y1="54" x2="38" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>

          {/* Roof Main Slope (Vibrant Terracotta / Coral Red 3D Glow) */}
          <linearGradient id="roofMain" x1="60" y1="16" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff6b6b" />
            <stop offset="30%" stopColor="#f97316" />
            <stop offset="75%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>

          {/* Roof Overhang Eaves Gradient */}
          <linearGradient id="roofEaves" x1="14" y1="54" x2="106" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#9a3412" />
          </linearGradient>

          {/* Chimney 3D */}
          <linearGradient id="chimneyFront" x1="32" y1="22" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fdba74" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>

          {/* Window Glass 3D Glowing Azure */}
          <linearGradient id="windowGlass" x1="68" y1="60" x2="88" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e0f2fe" />
            <stop offset="30%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          {/* Door Rich Mahogany / Walnut Wood */}
          <linearGradient id="doorGrad" x1="42" y1="62" x2="58" y2="98" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#854d0e" />
            <stop offset="50%" stopColor="#713f12" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          {/* Golden Knob Glow */}
          <linearGradient id="brassKnob" x1="53" y1="78" x2="57" y2="82" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          {/* Stone Pathway */}
          <linearGradient id="pathGrad" x1="42" y1="96" x2="58" y2="106" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="60" cy="103" rx="46" ry="7" fill="url(#baseShadow)" />

        {/* Manicured Grass Base */}
        <rect x="16" y="94" width="88" height="9" rx="4.5" fill="url(#lawnGrad)" />
        {/* Grass highlight rim */}
        <path d="M19 95H101" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* Front Stone Walkway */}
        <path d="M44 94L42 103H58L56 94H44Z" fill="url(#pathGrad)" />
        <ellipse cx="46" cy="98" rx="2" ry="1" fill="#cbd5e1" />
        <ellipse cx="54" cy="100" rx="2.5" ry="1" fill="#cbd5e1" />

        {/* Chimney Body */}
        <rect x="34" y="24" width="13" height="24" rx="2" fill="url(#chimneyFront)" />
        {/* Chimney Cap */}
        <rect x="32" y="21" width="17" height="4.5" rx="2" fill="#9a3412" />
        <rect x="33.5" y="22" width="14" height="1.5" rx="0.75" fill="#fed7aa" opacity="0.6" />

        {/* Main Wall Structure */}
        <rect x="27" y="52" width="66" height="43" rx="4" fill="url(#frontWallGrad)" />

        {/* Subtle Architectural Horizontal Siding Grooves */}
        <line x1="29" y1="62" x2="91" y2="62" stroke="#ea580c" strokeWidth="0.8" opacity="0.25" />
        <line x1="29" y1="72" x2="91" y2="72" stroke="#ea580c" strokeWidth="0.8" opacity="0.25" />
        <line x1="29" y1="82" x2="91" y2="82" stroke="#ea580c" strokeWidth="0.8" opacity="0.25" />

        {/* Modern Arched Front Door */}
        <path
          d="M40 94V68C40 63.5817 43.5817 60 48 60H52C56.4183 60 60 63.5817 60 68V94H40Z"
          fill="url(#doorGrad)"
        />
        {/* Door Frame Inner Trim */}
        <path
          d="M42 94V69C42 65.6863 44.6863 63 48 63H52C55.3137 63 58 65.6863 58 69V94"
          stroke="#9a3412"
          strokeWidth="1.2"
          opacity="0.6"
        />
        {/* Polished Brass Doorknob */}
        <circle cx="55.5" cy="78" r="2" fill="url(#brassKnob)" />
        <circle cx="55.5" cy="78" r="0.75" fill="#fef9c3" />

        {/* Modern Picture Window with Frame & 3D Glass */}
        <rect x="67" y="62" width="19" height="19" rx="3.5" fill="#ffffff" />
        <rect x="68.5" y="63.5" width="16" height="16" rx="2.5" fill="url(#windowGlass)" />
        {/* Window Cross Mullions */}
        <line x1="68.5" y1="71.5" x2="84.5" y2="71.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        <line x1="76.5" y1="63.5" x2="76.5" y2="79.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
        {/* Window Sun Specular Reflection Glare */}
        <path d="M69.5 64.5L80.5 75.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
        <path d="M74.5 64.5L83.5 73.5" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.4" />

        {/* Mini Attic Window / Vent */}
        <circle cx="60" cy="42" r="4.5" fill="#fed7aa" stroke="#9a3412" strokeWidth="1" />
        <line x1="60" y1="38" x2="60" y2="46" stroke="#9a3412" strokeWidth="0.8" />
        <line x1="56" y1="42" x2="64" y2="42" stroke="#9a3412" strokeWidth="0.8" />

        {/* 3D Terracotta Roof */}
        <path
          d="M17 56L60 17L103 56C103.9 56.9 103.2 58.5 101.9 58.5H18.1C16.8 58.5 16.1 56.9 17 56Z"
          fill="url(#roofMain)"
        />

        {/* Roof Lower Overhang Eaves Trim */}
        <path
          d="M16 57L60 18L104 57C104.8 57.7 104.2 59 103.1 59H16.9C15.8 59 15.2 57.7 16 57Z"
          fill="url(#roofEaves)"
          opacity="0.9"
        />

        {/* Glossy Roof Ridge Highlight */}
        <path
          d="M20 55L60 19L100 55"
          stroke="#ffedd5"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Soft Secondary Ridge Accent */}
        <path
          d="M26 53L60 23L94 53"
          stroke="#fef08a"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    </div>
  );
};
