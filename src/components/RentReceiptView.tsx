import React, { useState } from 'react';
import { ShieldCheck, ArrowLeft, Receipt } from 'lucide-react';
import { RentReceiptData, ActivePage, MonthPeriod } from '../types';
import { ReceiptForm } from './ReceiptForm';
import { ReceiptPreview } from './ReceiptPreview';
import { RelatedTools } from './RelatedTools';
import { TrustSection } from './TrustSection';
import { HomeContentSections } from './HomeContentSections';
import { AdSlot } from './AdSlot';

interface RentReceiptViewProps {
  receiptData: RentReceiptData;
  setReceiptData: React.Dispatch<React.SetStateAction<RentReceiptData>>;
  onOpenLiveValidation: (period: MonthPeriod) => void;
  onNavigate: (page: ActivePage) => void;
}

export const RentReceiptView: React.FC<RentReceiptViewProps> = ({
  receiptData,
  setReceiptData,
  onOpenLiveValidation,
  onNavigate,
}) => {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      
      {/* Top Navigation: Back to Home button */}
      <div className="mb-4">
        <button
          type="button"
          id="back-to-home-rent-receipt"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors py-1.5 px-2.5 -ml-2.5 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero / Tool Header */}
      <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3 border border-blue-200/80 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>CBDT Section 10(13A) Compliant • 100% Client-Side Privacy</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Free Rent Receipt Generator
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Generate, preview, and download authentic monthly or annual rent receipts as PDF for your HRA tax exemption claims. Free forever with instant multi-page export.
        </p>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex items-center justify-center mb-6">
        <div className="bg-slate-200/80 p-1 rounded-xl flex items-center w-full max-w-sm shadow-inner">
          <button
            type="button"
            id="mobile-tab-form-btn"
            onClick={() => setMobileTab('form')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
              mobileTab === 'form'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📝 Fill Details
          </button>
          <button
            type="button"
            id="mobile-tab-preview-btn"
            onClick={() => setMobileTab('preview')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
              mobileTab === 'preview'
                ? 'bg-white text-blue-600 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            👁️ Live Preview
          </button>
        </div>
      </div>

      {/* Generator Form and Live Preview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left Column: Input Form */}
        <div
          id="receipt-form-container"
          className={`lg:col-span-6 space-y-6 ${
            mobileTab === 'preview' ? 'hidden lg:block' : 'block'
          }`}
        >
          <ReceiptForm data={receiptData} setData={setReceiptData} />
        </div>

        {/* Right Column: Sticky Live Preview */}
        <div
          className={`lg:col-span-6 space-y-6 lg:sticky lg:top-24 ${
            mobileTab === 'form' ? 'hidden lg:block' : 'block'
          }`}
        >
          <ReceiptPreview
            data={receiptData}
            onSelectTemplate={(template) =>
              setReceiptData((prev) => ({ ...prev, templateFormat: template }))
            }
            onOpenValidationPage={onOpenLiveValidation}
          />

          {/* Quick Switch to Form button on mobile inside Preview mode */}
          <div className="lg:hidden text-center pt-2">
            <button
              type="button"
              onClick={() => setMobileTab('form')}
              className="w-full min-h-[44px] py-2.5 px-4 bg-white border border-slate-300 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
            >
              ✏️ Edit Receipt Details
            </button>
          </div>
        </div>
      </div>

      {/* Related Tools Section - 2 other tools */}
      <RelatedTools currentTool="rent-receipt" onNavigate={onNavigate} />

      {/* Trust Section */}
      <TrustSection />

      {/* Pre-Footer Banner Ad Slot */}
      <div className="my-8">
        <AdSlot type="pre-footer" />
      </div>

      {/* Comprehensive Home Content & Educational Guides */}
      <div id="home-content-container">
        <HomeContentSections />
      </div>
    </div>
  );
};
