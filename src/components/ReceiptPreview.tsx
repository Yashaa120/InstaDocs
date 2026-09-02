import React, { useState } from 'react';
import { RentReceiptData, MonthPeriod, ReceiptTemplate } from '../types';
import { numberToIndianWords, formatIndianCurrency } from '../utils/numberToWords';
import { generateReceiptPeriods } from '../utils/dateUtils';
import { HouseLogo } from './HouseLogo';
import {
  ChevronLeft,
  ChevronRight,
  Stamp,
  Eye,
  Layers,
  Palette,
  Check,
  CheckCircle2,
} from 'lucide-react';

interface ReceiptPreviewProps {
  data: RentReceiptData;
  onSelectTemplate?: (template: ReceiptTemplate) => void;
  onOpenValidationPage?: (period: MonthPeriod) => void;
}

export const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({
  data,
  onSelectTemplate,
}) => {
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'stacked'>('single');

  // Normalize template name
  const rawTemplate = data.templateFormat || 'modern';
  const activeTemplate: ReceiptTemplate =
    rawTemplate === 'classic'
      ? 'classic'
      : rawTemplate === 'minimalist'
      ? 'minimalist'
      : rawTemplate === 'simple_paper'
      ? 'simple_paper'
      : 'modern';

  const periods: MonthPeriod[] = generateReceiptPeriods(
    data.isMultiMonth,
    data.singleMonth,
    data.singleYear,
    data.startMonth,
    data.startYear,
    data.endMonth,
    data.endYear,
    data.receiptNoPrefix || 'RR'
  );

  const safeIndex = Math.min(activePreviewIndex, Math.max(0, periods.length - 1));
  const currentPeriod = periods[safeIndex] || periods[0];

  const parsedAmount =
    typeof data.monthlyRent === 'string'
      ? parseFloat(data.monthlyRent.replace(/,/g, '')) || 0
      : data.monthlyRent || 0;

  const amountInWords = numberToIndianWords(parsedAmount);
  const formattedAmount = formatIndianCurrency(parsedAmount);

  const isCashPayment = data.paymentMode === 'Cash';
  const showRevenueStamp = isCashPayment && parsedAmount > 5000;

  // Render signature from active signature mode
  const renderSignatureContent = (isMonochrome = false) => {
    if (data.signatureMode === 'upload' && data.signatureUploadUrl) {
      return (
        <div className="flex items-center justify-end mb-1 max-h-12 overflow-hidden">
          <img
            src={data.signatureUploadUrl}
            alt="Landlord Signature"
            className="max-h-12 max-w-[180px] object-contain"
          />
        </div>
      );
    }

    if (data.signatureMode === 'draw' && data.signatureDrawnDataUrl) {
      return (
        <div className="flex items-center justify-end mb-1 max-h-12 overflow-hidden">
          <img
            src={data.signatureDrawnDataUrl}
            alt="Landlord Signature"
            className="max-h-12 max-w-[180px] object-contain"
          />
        </div>
      );
    }

    if (data.signatureMode === 'type') {
      const textToDisplay =
        data.signatureTypedText?.trim() || data.landlordName?.trim() || 'Landlord Signature';
      const font =
        data.signatureTypedFont === 'Sacramento'
          ? "'Sacramento', cursive"
          : "'Dancing Script', cursive";
      return (
        <div
          className="text-2xl sm:text-3xl leading-tight select-none mb-1 py-0.5 tracking-wide text-right"
          style={{
            fontFamily: font,
            color: isMonochrome ? '#000000' : '#0f172a',
          }}
        >
          {textToDisplay}
        </div>
      );
    }

    // Default / fallback
    return (
      <span
        className="text-xs italic font-mono mb-1"
        style={{ color: isMonochrome ? '#555555' : '#94a3b8' }}
      >
        (Landlord Signature)
      </span>
    );
  };

  // --------------------------------------------------------------------------
  // TEMPLATE 1: MODERN GEOMETRIC (Proptech Vibrant Tangerine & Navy)
  // --------------------------------------------------------------------------
  const renderModernTemplate = (
    period: MonthPeriod,
    index: number,
    isPdfClone = false,
    hasPageBreak = false
  ) => {
    return (
      <div
        key={`modern-${period.year}-${period.monthIndex}-${index}`}
        className={`receipt-print-card bg-white border border-[#e2e8f0] rounded-xl relative text-[#0f172a] overflow-hidden ${
          hasPageBreak ? 'receipt-page-break' : ''
        } ${isPdfClone ? 'mb-8' : 'w-full shadow-lg'}`}
        style={{
          minHeight: '620px',
          backgroundColor: '#ffffff',
          borderColor: '#e2e8f0',
          color: '#0f172a',
          position: 'relative',
          pageBreakInside: 'avoid',
          breakInside: 'avoid',
          pageBreakAfter: hasPageBreak ? 'always' : 'auto',
          breakAfter: hasPageBreak ? 'page' : 'auto',
        }}
      >
        {/* Geometric Accent Graphics */}
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="0,0 100,0 0,65" fill="#f97316" />
            <polygon points="0,65 0,100 45,0" fill="#ea580c" opacity="0.85" />
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-44 h-40 sm:w-56 sm:h-48 pointer-events-none z-0">
          <svg viewBox="0 0 200 150" className="w-full h-full" preserveAspectRatio="none">
            <polygon points="50,0 200,0 200,80" fill="#f59e0b" />
            <polygon points="90,0 200,40 200,150 140,150" fill="#cbd5e1" />
            <polygon points="140,150 200,100 200,150" fill="#ea580c" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 p-5 sm:p-8 md:p-10 space-y-5 text-left">
          {/* Top Document Header Row */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2.5 bg-white/95 backdrop-blur-xs p-1.5 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-9 h-9 border border-slate-300 rounded-lg flex items-center justify-center p-1 bg-amber-50">
                <HouseLogo className="w-6 h-6" />
              </div>
              <div className="flex flex-col pr-1 min-w-0">
                <span className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                  Tenancy Voucher
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Residential Tenancy Record
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-slate-400 font-mono block">Receipt No</span>
              <span className="text-xs sm:text-sm font-bold font-mono text-slate-800">{period.receiptNumber}</span>
            </div>
          </div>

          {/* Centered Document Title */}
          <div className="text-center pt-1 pb-0.5">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight uppercase">
              House Rent Receipt
            </h2>
            <div className="w-14 h-1 bg-[#ea580c] mx-auto mt-1.5 rounded-full" />
            <div className="text-[10px] text-slate-500 font-mono mt-1">
              Issued under Rule 2A Income Tax Rules 1962 &bull; Sec 10(13A) IT Act 1961
            </div>
          </div>

          {/* Date and Receipt No */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm text-[#475569] pb-2 border-b border-[#e2e8f0]">
            <div>
              <span className="text-[#64748b]">Date of Issue: </span>
              <strong className="text-[#0f172a] font-bold">
                {data.customDate || period.receiptDate}
              </strong>
            </div>
            <div>
              <span className="text-[#64748b]">Receipt No: </span>
              <strong className="text-[#0f172a] font-bold font-mono">
                {period.receiptNumber}
              </strong>
            </div>
          </div>

          {/* Acknowledgement Paragraphs */}
          <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-[#1e293b]">
            <p className="break-words">
              Received with thanks from{' '}
              <strong className="text-[#0f172a] font-bold">
                {data.tenantName.trim() || '[TENANT NAME]'}
              </strong>{' '}
              the sum of{' '}
              <strong className="text-[#0f172a] font-bold bg-amber-100/70 px-1.5 py-0.5 rounded border border-amber-200">
                ₹ {formattedAmount}/-
              </strong>{' '}
              (<span className="italic font-medium text-slate-700">{amountInWords}</span>) as payment
              for residential rental premises situated at:{' '}
              <strong className="text-[#0f172a] font-semibold">
                {data.propertyAddress.trim() || '[PROPERTY ADDRESS]'}
              </strong>
              .
            </p>

            <p>
              This payment covers the tenancy period from{' '}
              <strong className="text-[#0f172a] font-bold">{period.startDate}</strong> to{' '}
              <strong className="text-[#0f172a] font-bold">{period.endDate}</strong> ({period.monthName}{' '}
              {period.year}).
            </p>
          </div>

          {/* Payment & Audit Details Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 space-y-2 text-left">
            <h4 className="text-[11px] sm:text-xs font-bold text-[#0f172a] uppercase tracking-wider mb-1">
              Payment & Verification Details:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-[#334155]">
              <div className="flex items-start gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0 mt-1.5" />
                <div className="min-w-0">
                  <span className="text-[#64748b]">Amount:</span>{' '}
                  <strong className="text-[#0f172a] font-mono font-bold break-words">
                    ₹ {formattedAmount}/-
                  </strong>
                </div>
              </div>

              <div className="flex items-start gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0 mt-1.5" />
                <div className="min-w-0">
                  <span className="text-[#64748b]">Payment Mode:</span>{' '}
                  <strong className="text-[#0f172a] font-semibold break-words">
                    {data.paymentMode}
                  </strong>
                </div>
              </div>

              {data.transactionRef && (
                <div className="flex items-start gap-2 min-w-0 sm:col-span-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0 mt-1.5" />
                  <div className="min-w-0">
                    <span className="text-[#64748b]">Bank Txn / UTR / Cheque Ref:</span>{' '}
                    <strong className="text-blue-700 font-mono font-bold break-words">
                      {data.transactionRef.trim()}
                    </strong>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0 mt-1.5" />
                <div className="min-w-0">
                  <span className="text-[#64748b]">Paid On:</span>{' '}
                  <strong className="text-[#0f172a]">{data.customDate || period.receiptDate}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2 min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shrink-0 mt-1.5" />
                <div className="min-w-0">
                  <span className="text-[#64748b]">Landlord PAN:</span>{' '}
                  {data.landlordPan ? (
                    <strong className="text-[#0f172a] font-mono uppercase font-bold tracking-wider bg-white px-1.5 py-0.5 rounded border border-slate-200">
                      {data.landlordPan.trim()}
                    </strong>
                  ) : (
                    <span className="text-slate-400 italic text-xs">Exempt (&le; ₹1 Lakh/yr)</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Issued By + Signature + Revenue Stamp */}
          <div className="pt-2 flex items-end justify-between gap-4">
            {/* Revenue Stamp if Cash > ₹5,000 */}
            {showRevenueStamp ? (
              <div className="flex flex-col items-start max-w-[170px]">
                <div className="w-22 h-26 border-2 border-dashed border-[#94a3b8] rounded bg-[#fafaf9] flex flex-col items-center justify-center p-1.5 relative text-center">
                  <Stamp className="w-4 h-4 text-[#ea580c] mb-1 opacity-85" />
                  <span className="text-[9px] font-bold uppercase text-[#1e293b] leading-tight">
                    Revenue Stamp
                    <br />
                    (₹1)
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-full border-t-2 border-[#0f172a] rotate-45 transform" />
                  </div>
                </div>
                <span className="text-[9px] text-[#64748b] leading-tight mt-1">
                  Affix physical ₹1 revenue stamp for cash &gt; ₹5k.
                </span>
              </div>
            ) : (
              <div className="text-[11px] text-[#64748b] italic flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {isCashPayment ? 'Cash &le; ₹5,000 (Stamp Exempt)' : 'Bank / Digital Audit Trail'}
                </span>
              </div>
            )}

            {/* Issued by & Signature Line */}
            <div className="text-right flex flex-col items-end min-w-[190px] sm:min-w-[230px]">
              <span className="text-xs font-bold text-[#64748b] uppercase tracking-wider mb-1">
                Landlord / Owner:
              </span>
              <div className="min-h-[44px] flex items-end justify-end w-full mb-1">
                {renderSignatureContent(false)}
              </div>
              <div className="w-44 sm:w-56 border-b-2 border-[#0f172a] mb-1.5" />
              <div className="text-sm sm:text-base font-bold text-[#0f172a] text-right break-words">
                {data.landlordName.trim() || '[LANDLORD NAME]'}
              </div>
              <div className="text-[11px] text-[#64748b]">
                Signature (Authorized House Owner)
              </div>
            </div>
          </div>

          {/* Honest Disclaimer */}
          <div className="text-center pt-2 text-[9.5px] sm:text-[10px] text-slate-500 leading-tight border-t border-slate-200">
            This receipt is a formatting tool only and does not constitute legal certification. For tax filing or legal proceedings, ensure payments are made via traceable bank transfer and retain your rental agreement as supporting evidence.
          </div>
        </div>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // TEMPLATE 2: CLASSIC LEGAL (Statutory Indian Bond & Deed Format)
  // --------------------------------------------------------------------------
  const renderClassicTemplate = (
    period: MonthPeriod,
    index: number,
    isPdfClone = false,
    hasPageBreak = false
  ) => {
    return (
      <div
        key={`classic-${period.year}-${period.monthIndex}-${index}`}
        className={`receipt-print-card bg-[#FDFBF7] border-[3px] border-[#1e3a8a] p-5 sm:p-7 md:p-8 rounded-2xl relative text-[#0f172a] ${
          hasPageBreak ? 'receipt-page-break' : ''
        } ${isPdfClone ? 'mb-8' : 'w-full shadow-xl'}`}
        style={{
          minHeight: '620px',
          backgroundColor: '#FDFBF7',
          borderColor: '#1e3a8a',
          color: '#0f172a',
          pageBreakInside: 'avoid',
          breakInside: 'avoid',
          pageBreakAfter: hasPageBreak ? 'always' : 'auto',
          breakAfter: hasPageBreak ? 'page' : 'auto',
        }}
      >
        {/* Vintage Inner Border Frame */}
        <div
          className="border border-[#1e3a8a]/40 p-4 sm:p-6 rounded-xl relative"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Ornate Corner Brackets */}
          <div className="absolute top-2 left-2 text-[#1e3a8a] font-serif text-sm opacity-60">◆</div>
          <div className="absolute top-2 right-2 text-[#1e3a8a] font-serif text-sm opacity-60">◆</div>
          <div className="absolute bottom-2 left-2 text-[#1e3a8a] font-serif text-sm opacity-60">◆</div>
          <div className="absolute bottom-2 right-2 text-[#1e3a8a] font-serif text-sm opacity-60">◆</div>

          {/* Traditional Legal Header */}
          <div className="text-center pb-3 mb-3 border-b-2 border-[#1e3a8a]">
            <div className="flex items-center justify-center gap-3 mb-1.5">
              <div className="w-10 h-10 rounded-full border-2 border-[#1e3a8a] bg-blue-50 flex items-center justify-center p-1 shadow-xs">
                <HouseLogo className="w-7 h-7" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase font-serif tracking-[2px] text-[#1e3a8a] font-bold">
                  Statutory Tenancy Consideration Form
                </div>
                <h3 className="text-lg sm:text-2xl font-serif font-black uppercase tracking-[2px] text-[#0f172a]">
                  HOUSE RENT RECEIPT
                </h3>
              </div>
            </div>

            <div className="inline-block bg-[#1e3a8a] text-[#ffffff] text-[10px] sm:text-xs font-serif uppercase tracking-widest px-3 py-0.5 rounded-xs mb-2">
              Income Tax Act Section 10(13A) & Rule 2A Compliance
            </div>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs bg-[#f8fafc] border border-slate-300 p-2 rounded font-serif text-left">
              <div>
                <span className="text-slate-500">Receipt No: </span>
                <strong className="font-mono text-[#1e3a8a] font-bold">{period.receiptNumber}</strong>
              </div>
              <div>
                <span className="text-slate-500">Issue Date: </span>
                <strong className="text-slate-900 font-bold">
                  {data.customDate || period.receiptDate}
                </strong>
              </div>
              <div className="col-span-2 sm:col-span-1 sm:text-right">
                <span className="text-slate-500">Period: </span>
                <strong className="text-[#065f46] font-bold">
                  {period.monthName} {period.year}
                </strong>
              </div>
            </div>
          </div>

          {/* Amount in Numbers Box */}
          <div className="bg-[#eff6ff] border-2 border-[#1e3a8a] rounded-lg p-3 mb-4 flex flex-wrap items-center justify-between gap-2 text-left">
            <div>
              <span className="text-xs uppercase font-serif font-bold text-[#1e3a8a] tracking-wider block">
                Total Rent Consideration Received:
              </span>
              <div className="text-[11px] font-serif italic text-slate-700">({amountInWords})</div>
            </div>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-black font-mono text-[#1e3a8a]">
                ₹ {formattedAmount}/-
              </span>
            </div>
          </div>

          {/* Formal Legal Deed Body */}
          <div className="space-y-3.5 text-xs sm:text-[13.5px] leading-[1.8] text-[#1e293b] font-serif text-left">
            <p className="break-words">
              RECEIVED with thanks from{' '}
              <strong className="font-sans font-bold text-[#0f172a] underline underline-offset-4 decoration-[#1e3a8a]">
                {data.tenantName.trim() || '[TENANT FULL NAME]'}
              </strong>{' '}
              the sum of <strong className="font-bold text-[#0f172a]">₹ {formattedAmount}/-</strong>{' '}
              (<span className="italic font-medium text-slate-800">{amountInWords}</span>) in full
              and final satisfaction of the monthly rent due for the residential premises situated at:{' '}
              <strong className="font-sans font-semibold text-[#0f172a] underline underline-offset-4 decoration-slate-400">
                {data.propertyAddress.trim() || '[PROPERTY FULL ADDRESS]'}
              </strong>{' '}
              for the rental period commencing from{' '}
              <strong className="font-bold text-[#0f172a]">{period.startDate}</strong> to{' '}
              <strong className="font-bold text-[#0f172a]">{period.endDate}</strong>.
            </p>

            {/* Official PAN & Payment Method Box */}
            <div className="bg-slate-50 border border-slate-300 rounded-lg p-2.5 sm:p-3 text-[11px] sm:text-xs font-sans">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="min-w-0">
                  <span className="text-slate-500 font-serif">Payment Mode: </span>
                  <strong className="text-slate-900 font-semibold break-words">
                    {data.paymentMode}
                  </strong>
                </div>
                <div className="min-w-0 sm:text-right">
                  <span className="text-slate-500 font-serif">Landlord PAN: </span>
                  {data.landlordPan ? (
                    <strong className="font-mono font-bold text-[#1e3a8a] bg-blue-100 px-2 py-0.5 rounded uppercase tracking-wider text-[11px]">
                      {data.landlordPan.trim()}
                    </strong>
                  ) : (
                    <span className="text-slate-400 italic text-[11px]">
                      Not Required (&le; ₹1 Lakh/yr)
                    </span>
                  )}
                </div>
                {data.transactionRef && (
                  <div className="sm:col-span-2 pt-1 border-t border-slate-200 text-left">
                    <span className="text-slate-500 font-serif">Banking Txn / UTR / Cheque Ref: </span>
                    <strong className="font-mono font-bold text-[#1e3a8a] break-words">
                      {data.transactionRef.trim()}
                    </strong>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer with Stamp & Landlord Signature */}
          <div className="mt-5 pt-3 border-t-2 border-[#1e3a8a] flex items-end justify-between gap-4 font-serif">
            {showRevenueStamp ? (
              <div className="flex flex-col items-start max-w-[170px]">
                <div className="w-24 h-28 border-2 border-dashed border-[#be123c] rounded-md bg-[#fff1f2] flex flex-col items-center justify-center p-2 relative text-center">
                  <Stamp className="w-5 h-5 text-[#be123c] mb-1 opacity-90" />
                  <span className="text-[10px] font-bold uppercase text-[#be123c] leading-tight">
                    REVENUE STAMP
                    <br />
                    (₹1.00)
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                    <div className="w-full border-t-2 border-[#be123c] rotate-45 transform" />
                  </div>
                </div>
                <span className="text-[9px] text-slate-500 leading-tight mt-1 font-sans">
                  Affix ₹1 revenue stamp & sign across (Cash &gt; ₹5,000).
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Standard Tenancy Record</span>
              </div>
            )}

            <div className="text-right flex flex-col items-end min-w-[190px] sm:min-w-[230px]">
              <div className="min-h-[44px] flex items-end justify-end w-full mb-1">
                {renderSignatureContent(false)}
              </div>
              <div className="w-48 sm:w-60 border-b-2 border-[#1e3a8a] mb-1" />
              <div className="text-sm sm:text-base font-bold text-[#0f172a] text-right font-sans break-words">
                {data.landlordName.trim() || '[LANDLORD NAME]'}
              </div>
              <div className="text-xs text-slate-500 font-serif italic">
                (Signature of Landlord / House Owner)
              </div>
            </div>
          </div>

          <div className="text-center mt-3 pt-2 border-t border-slate-200 text-[9.5px] sm:text-[10px] text-slate-500 font-sans leading-tight">
            Issued under Rule 2A of Income Tax Rules 1962 &bull; Sec 10(13A) IT Act 1961.<br />
            This receipt is a formatting tool only and does not constitute legal certification. For tax filing or legal proceedings, ensure payments are made via traceable bank transfer and retain your rental agreement as supporting evidence.
          </div>
        </div>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // TEMPLATE 3: MINIMALIST (Swiss Monochrome Executive Ledger)
  // --------------------------------------------------------------------------
  const renderMinimalistTemplate = (
    period: MonthPeriod,
    index: number,
    isPdfClone = false,
    hasPageBreak = false
  ) => {
    return (
      <div
        key={`minimalist-${period.year}-${period.monthIndex}-${index}`}
        className={`receipt-print-card bg-white border border-slate-300 p-6 sm:p-8 md:p-10 rounded-none relative text-slate-900 ${
          hasPageBreak ? 'receipt-page-break' : ''
        } ${isPdfClone ? 'mb-8' : 'w-full shadow-md'}`}
        style={{
          minHeight: '620px',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          pageBreakInside: 'avoid',
          breakInside: 'avoid',
          pageBreakAfter: hasPageBreak ? 'always' : 'auto',
          breakAfter: hasPageBreak ? 'page' : 'auto',
        }}
      >
        {/* Minimalist Top Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-slate-900 text-left">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase text-slate-900">
                Rent Receipt
              </h2>
              <span className="text-[10px] font-mono font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                SEC 10(13A)
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Statutory Tenancy Payment Voucher & Proof
            </p>
          </div>

          <div className="text-right font-mono text-xs">
            <div>
              <span className="text-slate-400">NO: </span>
              <strong className="text-slate-900 font-bold">{period.receiptNumber}</strong>
            </div>
            <div className="mt-0.5">
              <span className="text-slate-400">DATE: </span>
              <strong className="text-slate-900">{data.customDate || period.receiptDate}</strong>
            </div>
          </div>
        </div>

        {/* Minimalist Primary Information Grid */}
        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left border-b border-slate-200">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
              Tenant / Payer
            </span>
            <div className="text-sm sm:text-base font-bold text-slate-900 break-words">
              {data.tenantName.trim() || '[TENANT FULL NAME]'}
            </div>
            <div className="text-xs text-slate-600 leading-relaxed break-words pt-1">
              <span className="font-semibold text-slate-700">Premises: </span>
              {data.propertyAddress.trim() || '[PROPERTY ADDRESS]'}
            </div>
          </div>

          <div className="space-y-1 sm:text-right">
            <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
              Landlord / Payee
            </span>
            <div className="text-sm sm:text-base font-bold text-slate-900 break-words">
              {data.landlordName.trim() || '[LANDLORD FULL NAME]'}
            </div>
            <div className="text-xs font-mono text-slate-700 pt-1">
              <span>PAN: </span>
              {data.landlordPan ? (
                <strong className="text-slate-900 uppercase font-bold">{data.landlordPan.trim()}</strong>
              ) : (
                <span className="text-slate-400 italic">Exempt (&le; ₹1L/yr)</span>
              )}
            </div>
          </div>
        </div>

        {/* Structured Minimal Ledger Table */}
        <div className="py-4 text-left">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-300 text-slate-500 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-2 text-left font-semibold">Description / Period</th>
                <th className="py-2 text-left font-semibold">Payment Trail</th>
                <th className="py-2 text-right font-semibold">Amount (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 text-slate-800 align-top">
                  <strong className="block font-semibold text-slate-900">
                    House Rent: {period.monthName} {period.year}
                  </strong>
                  <span className="text-[11px] text-slate-500">
                    {period.startDate} to {period.endDate}
                  </span>
                </td>
                <td className="py-3 text-slate-700 align-top">
                  <div className="font-medium">{data.paymentMode}</div>
                  {data.transactionRef && (
                    <div className="text-[11px] font-mono text-slate-500">
                      Ref: {data.transactionRef}
                    </div>
                  )}
                </td>
                <td className="py-3 text-right font-mono font-bold text-slate-900 text-sm align-top">
                  ₹ {formattedAmount}/-
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-900 font-bold">
                <td colSpan={2} className="py-2.5 text-xs text-slate-800">
                  Total Amount Received (<span className="font-normal italic">{amountInWords}</span>)
                </td>
                <td className="py-2.5 text-right font-mono text-base text-slate-900">
                  ₹ {formattedAmount}/-
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Signatures and Stamp */}
        <div className="mt-5 pt-3 flex items-end justify-between gap-4">
          {showRevenueStamp ? (
            <div className="flex flex-col items-start max-w-[170px]">
              <div className="w-22 h-26 border border-dashed border-slate-400 rounded bg-slate-50 flex flex-col items-center justify-center p-1.5 relative text-center">
                <Stamp className="w-4 h-4 text-slate-700 mb-1" />
                <span className="text-[9px] font-bold uppercase text-slate-900 leading-tight">
                  Revenue Stamp
                  <br />
                  (₹1.00)
                </span>
              </div>
              <span className="text-[9px] text-slate-500 leading-tight mt-1 text-left">
                Cash payment &gt; ₹5k stamp mandatory.
              </span>
            </div>
          ) : (
            <div className="text-[11px] text-slate-400 italic">
              Digital / Banking Record Verified
            </div>
          )}

          <div className="text-right flex flex-col items-end min-w-[190px] sm:min-w-[230px]">
            <div className="min-h-[44px] flex items-end justify-end w-full mb-1">
              {renderSignatureContent(false)}
            </div>
            <div className="w-44 sm:w-56 border-b border-slate-900 mb-1" />
            <div className="text-sm font-bold text-slate-900 text-right break-words">
              {data.landlordName.trim() || '[LANDLORD NAME]'}
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              Authorized Signatory
            </div>
          </div>
        </div>

        <div className="text-center mt-3 pt-2 border-t border-slate-200 text-[9.5px] sm:text-[10px] text-slate-500 font-sans leading-tight">
          Rule 2A Income Tax Rules 1962 &bull; Sec 10(13A) IT Act 1961.<br />
          This receipt is a formatting tool only and does not constitute legal certification. For tax filing or legal proceedings, ensure payments are made via traceable bank transfer and retain your rental agreement as supporting evidence.
        </div>
      </div>
    );
  };

  // --------------------------------------------------------------------------
  // TEMPLATE 4: SIMPLE PRINTED PAPER (No Extra Color, Pure Monochrome Office Print)
  // --------------------------------------------------------------------------
  const renderSimplePaperTemplate = (
    period: MonthPeriod,
    index: number,
    isPdfClone = false,
    hasPageBreak = false
  ) => {
    return (
      <div
        key={`simple-paper-${period.year}-${period.monthIndex}-${index}`}
        className={`receipt-print-card bg-white border-2 border-black p-5 sm:p-7 md:p-8 rounded-none relative text-black font-serif ${
          hasPageBreak ? 'receipt-page-break' : ''
        } ${isPdfClone ? 'mb-8' : 'w-full shadow-sm'}`}
        style={{
          minHeight: '620px',
          backgroundColor: '#ffffff',
          borderColor: '#000000',
          color: '#000000',
          pageBreakInside: 'avoid',
          breakInside: 'avoid',
          pageBreakAfter: hasPageBreak ? 'always' : 'auto',
          breakAfter: hasPageBreak ? 'page' : 'auto',
        }}
      >
        {/* Simple Document Header */}
        <div className="border-b-2 border-black pb-3 text-center text-black">
          <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider font-serif">
            HOUSE RENT PAYMENT RECEIPT
          </h2>
          <div className="text-xs font-mono mt-0.5">
            [ Under Section 10(13A) of Income Tax Act, 1961 & Rule 2A of IT Rules, 1962 ]
          </div>
        </div>

        {/* Metadata Strip */}
        <div className="flex justify-between items-center py-2.5 border-b border-black text-xs font-mono">
          <div>
            <span>RECEIPT NO: </span>
            <strong className="font-bold">{period.receiptNumber}</strong>
          </div>
          <div>
            <span>DATE: </span>
            <strong className="font-bold">{data.customDate || period.receiptDate}</strong>
          </div>
        </div>

        {/* Simple Body Text */}
        <div className="py-4 space-y-3.5 text-xs sm:text-[13px] leading-relaxed text-black text-left font-serif">
          <p className="break-words">
            Received with thanks from Mr. / Ms.{' '}
            <strong className="font-sans font-bold underline underline-offset-2">
              {data.tenantName.trim() || '[TENANT NAME]'}
            </strong>{' '}
            a sum of{' '}
            <strong className="font-mono font-bold">
              Rs. {formattedAmount}/-
            </strong>{' '}
            (Rupees: <span className="italic font-medium">{amountInWords}</span>) towards rent for the residential premises situated at:
          </p>

          <div className="p-2 border border-black text-xs font-sans">
            <strong className="block text-black break-words">
              {data.propertyAddress.trim() || '[PROPERTY FULL ADDRESS]'}
            </strong>
          </div>

          <p>
            For the tenancy period covering{' '}
            <strong className="font-sans font-bold">{period.startDate}</strong> to{' '}
            <strong className="font-sans font-bold">{period.endDate}</strong> ({period.monthName}{' '}
            {period.year}).
          </p>
        </div>

        {/* Pure Monochrome Particulars Table */}
        <div className="border border-black text-xs font-mono text-left mb-4">
          <div className="grid grid-cols-2 border-b border-black p-2">
            <span className="font-semibold">Payment Mode:</span>
            <strong className="break-words">{data.paymentMode}</strong>
          </div>

          {data.transactionRef && (
            <div className="grid grid-cols-2 border-b border-black p-2">
              <span className="font-semibold">Txn / UTR / Cheque No:</span>
              <strong className="break-words">{data.transactionRef.trim()}</strong>
            </div>
          )}

          <div className="grid grid-cols-2 p-2">
            <span className="font-semibold">Landlord PAN:</span>
            <strong className="uppercase break-words">
              {data.landlordPan ? data.landlordPan.trim() : 'N/A (Exempt under circular)'}
            </strong>
          </div>
        </div>

        {/* Signatures & Stamp Row */}
        <div className="mt-6 pt-2 flex items-end justify-between gap-4 font-serif">
          {showRevenueStamp ? (
            <div className="flex flex-col items-start max-w-[170px]">
              <div className="w-20 h-24 border border-dashed border-black flex flex-col items-center justify-center p-1 text-center font-mono text-[9px]">
                <Stamp className="w-4 h-4 mb-0.5 text-black" />
                <span className="font-bold uppercase">
                  Re. 1/-
                  <br />
                  STAMP
                </span>
              </div>
              <span className="text-[9px] text-gray-600 font-mono mt-1">
                (Sign across stamp)
              </span>
            </div>
          ) : (
            <div className="text-[10px] font-mono text-gray-600">
              * Standard Rent Receipt
            </div>
          )}

          <div className="text-right flex flex-col items-end min-w-[190px] sm:min-w-[220px]">
            <div className="min-h-[40px] flex items-end justify-end w-full mb-1">
              {renderSignatureContent(true)}
            </div>
            <div className="w-44 sm:w-56 border-b border-black mb-1" />
            <div className="text-xs sm:text-sm font-bold text-black font-sans break-words">
              {data.landlordName.trim() || '[LANDLORD NAME]'}
            </div>
            <div className="text-[11px] font-serif italic text-gray-800">
              (Landlord / House Owner Signature)
            </div>
          </div>
        </div>

        <div className="text-center mt-3 pt-2 border-t border-black text-[9.5px] sm:text-[10px] text-black font-sans leading-tight">
          This receipt is a formatting tool only and does not constitute legal certification. For tax filing or legal proceedings, ensure payments are made via traceable bank transfer and retain your rental agreement as supporting evidence.
        </div>
      </div>
    );
  };

  // Master renderer based on activeTemplate
  const renderReceiptCard = (
    period: MonthPeriod,
    index: number,
    isPdfClone = false,
    hasPageBreak = false
  ) => {
    switch (activeTemplate) {
      case 'classic':
        return renderClassicTemplate(period, index, isPdfClone, hasPageBreak);
      case 'minimalist':
        return renderMinimalistTemplate(period, index, isPdfClone, hasPageBreak);
      case 'simple_paper':
        return renderSimplePaperTemplate(period, index, isPdfClone, hasPageBreak);
      case 'modern':
      default:
        return renderModernTemplate(period, index, isPdfClone, hasPageBreak);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Live Preview Bar Header */}
      <div className="w-full bg-[#0f172a] text-white rounded-t-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center space-x-2">
          <Eye className="w-4 h-4 text-[#34d399]" />
          <span className="text-sm font-bold tracking-wide">Live Receipt Preview</span>
          <span className="hidden sm:inline-flex text-[11px] bg-slate-800 text-slate-200 px-2 py-0.5 rounded font-mono font-medium">
            HRA Form 12BB Ready
          </span>
        </div>

        {/* Quick 4-Template Switcher in Preview Header */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs flex-wrap">
          <Palette className="w-3.5 h-3.5 text-amber-400 ml-1 mr-0.5 hidden sm:inline" />
          <button
            type="button"
            id="preview-template-modern"
            onClick={() => onSelectTemplate?.('modern')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 text-xs ${
              activeTemplate === 'modern'
                ? 'bg-amber-500 text-white font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>Modern</span>
            {activeTemplate === 'modern' && <Check className="w-3 h-3" />}
          </button>

          <button
            type="button"
            id="preview-template-classic"
            onClick={() => onSelectTemplate?.('classic')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 text-xs ${
              activeTemplate === 'classic'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>Classic Legal</span>
            {activeTemplate === 'classic' && <Check className="w-3 h-3" />}
          </button>

          <button
            type="button"
            id="preview-template-minimalist"
            onClick={() => onSelectTemplate?.('minimalist')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 text-xs ${
              activeTemplate === 'minimalist'
                ? 'bg-slate-700 text-white font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>Minimalist</span>
            {activeTemplate === 'minimalist' && <Check className="w-3 h-3" />}
          </button>

          <button
            type="button"
            id="preview-template-simple-paper"
            onClick={() => onSelectTemplate?.('simple_paper')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 text-xs ${
              activeTemplate === 'simple_paper'
                ? 'bg-emerald-700 text-white font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>Clean Print</span>
            {activeTemplate === 'simple_paper' && <Check className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Preview Viewport */}
      <div className="w-full bg-[#cbd5e1] p-3 sm:p-6 md:p-8 rounded-b-xl border-x border-b border-slate-300 overflow-x-auto min-h-[500px] flex flex-col items-center justify-start">
        {/* Multi-month pagination controls */}
        {data.isMultiMonth && periods.length > 1 && (
          <div className="w-full max-w-2xl bg-white p-3 rounded-xl shadow-xs border border-slate-300 mb-4 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                id="prev-month-btn"
                onClick={() => setActivePreviewIndex((prev) => Math.max(0, prev - 1))}
                disabled={safeIndex === 0}
                className="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-white cursor-pointer"
                title="Previous Month Receipt"
              >
                <ChevronLeft className="w-4 h-4 text-slate-700" />
              </button>
              <span className="font-bold text-slate-800">
                Receipt {safeIndex + 1} of {periods.length} ({currentPeriod.monthName} {currentPeriod.year})
              </span>
              <button
                type="button"
                id="next-month-btn"
                onClick={() =>
                  setActivePreviewIndex((prev) => Math.min(periods.length - 1, prev + 1))
                }
                disabled={safeIndex === periods.length - 1}
                className="p-1.5 rounded-lg border border-slate-300 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-white cursor-pointer"
                title="Next Month Receipt"
              >
                <ChevronRight className="w-4 h-4 text-slate-700" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="toggle-view-mode-btn"
                onClick={() => setViewMode(viewMode === 'single' ? 'stacked' : 'single')}
                className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg border border-slate-300 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{viewMode === 'single' ? 'View All Stacked' : 'View Single'}</span>
              </button>
            </div>
          </div>
        )}

        {/* Dynamic Receipt Card Preview */}
        <div className="w-full max-w-2xl space-y-6">
          {viewMode === 'single' || !data.isMultiMonth ? (
            renderReceiptCard(currentPeriod, safeIndex)
          ) : (
            periods.map((p, idx) => renderReceiptCard(p, idx))
          )}
        </div>

        {/* Hidden Container exclusively for Full PDF Generation */}
        <div
          id="pdf-render-wrapper"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '794px',
            pointerEvents: 'none',
            opacity: 0,
            zIndex: -9999,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <div
            id="full-pdf-export-container"
            className="p-4 bg-white"
            style={{ backgroundColor: '#ffffff', width: '794px' }}
          >
            {periods.map((p, idx) =>
              renderReceiptCard(p, idx, true, idx < periods.length - 1)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
