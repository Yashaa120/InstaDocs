import React from 'react';

export type AdSlotType = 'banner' | 'sidebar' | 'pre-footer' | 'high-ctr' | 'in-article';

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
  hideOnMobile?: boolean;
}

/**
  * Google AdSense Compliant AdSlot Component
  * Adheres to Google AdSense Program Policies:
  * 1. Never displayed on behavioral, modal, or alert screens.
  * 2. Clearly labeled with standard 'ADVERTISEMENT' micro-text.
  * 3. Sized to prevent Cumulative Layout Shift (CLS).
  * 4. Positioned strictly within substantive publisher content.
  */
export const AdSlot: React.FC<AdSlotProps> = ({
  type,
  className = '',
  hideOnMobile = false,
}) => {
  const configs: Record<
    AdSlotType,
    { label: string; containerClass: string; slotClass: string }
  > = {
    banner: {
      label: 'Responsive Leaderboard (728x90 / 320x50)',
      containerClass: 'w-full max-w-4xl mx-auto my-6',
      slotClass:
        'min-h-[70px] sm:min-h-[90px] border border-slate-200/80 rounded-xl bg-slate-50/70',
    },
    'in-article': {
      label: 'In-Article Native Ad (Fluid High-Impact)',
      containerClass: 'w-full max-w-3xl mx-auto my-8',
      slotClass:
        'min-h-[120px] sm:min-h-[140px] border border-slate-200/80 rounded-xl bg-slate-50/70',
    },
    sidebar: {
      label: 'Medium Rectangle (300x250 / 300x600)',
      containerClass: 'w-full max-w-[320px] mx-auto my-6',
      slotClass:
        'min-h-[250px] border border-slate-200/80 rounded-xl bg-slate-50/70',
    },
    'pre-footer': {
      label: 'Pre-Footer Horizontal Ad Space (728x90)',
      containerClass: 'w-full max-w-4xl mx-auto my-8',
      slotClass:
        'min-h-[70px] sm:min-h-[90px] border border-slate-200/80 rounded-xl bg-slate-50/70',
    },
    'high-ctr': {
      label: 'Featured Editorial Partner Placement',
      containerClass: 'w-full max-w-3xl mx-auto my-6',
      slotClass:
        'min-h-[90px] sm:min-h-[100px] border border-blue-200/60 rounded-xl bg-slate-50/70',
    },
  };

  const config = configs[type] || configs.banner;
  const mobileDisplayClass = hideOnMobile ? 'hidden sm:flex' : 'flex';

  return (
    <aside
      id={`ad-slot-${type}`}
      aria-label="Advertisement"
      className={`${config.containerClass} ${mobileDisplayClass} ${className} flex-col items-center justify-center select-none`}
    >
      <div
        className={`w-full ${config.slotClass} flex flex-col items-center justify-center p-3 text-center transition-colors`}
      >
        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
          ADVERTISEMENT
        </span>
        <span className="text-[11px] text-slate-500 mt-1 font-sans font-medium">
          {config.label}
        </span>
      </div>
    </aside>
  );
};
