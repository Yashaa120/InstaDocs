import React from 'react';

export type AdSlotType = 'banner' | 'sidebar' | 'pre-footer' | 'high-ctr' | 'in-article';

interface AdSlotProps {
  type: AdSlotType;
  className?: string;
  hideOnMobile?: boolean;
}

/**
 * Google AdSense Compliant AdSlot Component
 * 
 * NOTE (AdSense Pre-Approval Audit):
 * Google strictly prohibits placeholder ad boxes or active ad scripts
 * prior to formal account site approval ("Google-served ads on screens without publisher-content").
 * This component safely returns null during pre-approval to prevent review rejections.
 * Once approved, ad units can be toggled without changing layout callers.
 */
export const AdSlot: React.FC<AdSlotProps> = () => {
  // Return null pre-approval to prevent "screens without content" / placeholder penalties
  return null;
};
