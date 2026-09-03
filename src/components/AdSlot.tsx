import React from 'react';

export type AdSlotType = 'banner' | 'sidebar' | 'pre-footer' | 'high-ctr' | 'modal-sponsor';

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
  hideOnMobile?: boolean;
}

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
      label: 'Responsive Display Ad (728 x 90 / 320 x 50)',
      containerClass: 'w-full max-w-4xl mx-auto min-h-[60px] my-4',
      slotClass:
        'h-[60px] sm:h-[70px] border border-dashed border-slate-300 rounded-xl bg-slate-50/80 hover:bg-slate-100/70',
    },
    sidebar: {
      label: 'Medium Rectangle Ad (300 x 250)',
      containerClass: 'w-full max-w-[320px] mx-auto min-h-[140px] my-4',
      slotClass:
        'min-h-[120px] border border-dashed border-slate-300 rounded-xl bg-slate-50/80 hover:bg-slate-100/70',
    },
    'pre-footer': {
      label: 'Horizontal Ad Space (728 x 90)',
      containerClass: 'w-full max-w-4xl mx-auto min-h-[50px] my-6',
      slotClass:
        'h-[50px] sm:h-[60px] border border-dashed border-slate-300 rounded-xl bg-slate-50/80 hover:bg-slate-100/70',
    },
    'high-ctr': {
      label: 'Sponsored Partner Ad (High-Engagement Placement)',
      containerClass: 'w-full max-w-2xl mx-auto my-3.5',
      slotClass:
        'min-h-[80px] sm:min-h-[90px] border border-dashed border-blue-200 rounded-xl bg-gradient-to-r from-blue-50/40 via-slate-50 to-blue-50/40 hover:bg-blue-50/70',
    },
    'modal-sponsor': {
      label: 'Sponsored Partner Recommendation',
      containerClass: 'w-full my-2',
      slotClass:
        'min-h-[54px] border border-dashed border-slate-200 rounded-lg bg-slate-50/90',
    },
  };

  const config = configs[type] || configs.banner;
  const mobileDisplayClass = hideOnMobile ? 'hidden sm:flex' : 'flex';

  return (
    <aside
      id={`ad-slot-${type}`}
      aria-label="Advertisement Area"
      className={`${config.containerClass} ${mobileDisplayClass} ${className} flex-col items-center justify-center`}
    >
      <div
        className={`w-full ${config.slotClass} flex flex-col items-center justify-center p-2.5 text-center transition-colors`}
      >
        <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
          ADVERTISEMENT
        </span>
        <span className="text-[11px] text-slate-500 mt-0.5 font-sans font-medium">
          {config.label}
        </span>
      </div>
    </aside>
  );
};

