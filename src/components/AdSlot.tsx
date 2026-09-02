import React from 'react';

interface AdSlotProps {
  type: 'banner' | 'sidebar' | 'pre-footer';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ type, className = '' }) => {
  const configs = {
    banner: {
      label: 'Responsive Banner Advertisement (728 x 90)',
      containerClass: 'w-full max-w-4xl mx-auto min-h-[60px] my-4',
      slotClass: 'h-[60px] sm:h-[70px] border border-dashed border-[#cbd5e1] rounded bg-[#f1f5f9]',
    },
    sidebar: {
      label: 'Mid-Content / Sidebar Ad (300 x 250)',
      containerClass: 'w-full max-w-[320px] mx-auto min-h-[140px] my-4',
      slotClass: 'min-h-[120px] border border-dashed border-[#cbd5e1] rounded bg-[#f1f5f9]',
    },
    'pre-footer': {
      label: 'Bottom Horizontal Ad Space (728 x 90)',
      containerClass: 'w-full max-w-4xl mx-auto min-h-[50px] my-6',
      slotClass: 'h-[50px] sm:h-[60px] border border-dashed border-[#cbd5e1] rounded bg-[#f1f5f9]',
    },
  };

  const config = configs[type];

  return (
    <aside
      id={`ad-slot-${type}`}
      aria-label="Advertisement Area"
      className={`${config.containerClass} ${className} flex flex-col items-center justify-center`}
    >
      <div
        className={`w-full ${config.slotClass} flex flex-col items-center justify-center p-2 text-center transition-colors`}
      >
        <span className="text-[10px] font-medium tracking-[0.05em] uppercase text-[#94a3b8]">
          ADVERTISEMENT
        </span>
        <span className="text-[11px] text-[#64748b] mt-0.5 font-sans">
          {config.label}
        </span>
      </div>
    </aside>
  );
};
