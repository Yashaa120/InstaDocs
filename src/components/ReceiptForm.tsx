import React, { useState } from 'react';
import { RentReceiptData, ReceiptTemplate } from '../types';
import { MONTH_NAMES } from '../utils/dateUtils';
import { numberToIndianWords, formatIndianCurrency } from '../utils/numberToWords';
import { downloadReceiptsPdf } from '../utils/pdfGenerator';
import { SignatureInput } from './SignatureInput';
import { HouseLogo } from './HouseLogo';
import { DownloadFormatModal } from './DownloadFormatModal';
import { useLanguage } from '../context/LanguageContext';
import {
  Download,
  Printer,
  Share2,
  RotateCcw,
  Sparkles,
  Info,
  Calendar,
  IndianRupee,
  Building,
  User,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Palette,
  Check
} from 'lucide-react';

interface ReceiptFormProps {
  data: RentReceiptData;
  setData: React.Dispatch<React.SetStateAction<RentReceiptData>>;
}

export const ReceiptForm: React.FC<ReceiptFormProps> = ({ data, setData }) => {
  const { t } = useLanguage();
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfProgressStatus, setPdfProgressStatus] = useState<string>('');
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 6 }, (_, i) => currentYear - 2 + i);

  const parsedAmount = typeof data.monthlyRent === 'string'
    ? parseFloat(data.monthlyRent.replace(/,/g, '')) || 0
    : data.monthlyRent || 0;

  const annualRent = parsedAmount * 12;
  const isPanRequired = annualRent > 100000;

  const handleInputChange = (field: keyof RentReceiptData, value: any) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9]/g, '');
    setData((prev) => ({ ...prev, monthlyRent: rawVal }));
  };

  // Quick Preset Handlers
  const applyPresetFY2025_26 = () => {
    setData((prev) => ({
      ...prev,
      isMultiMonth: true,
      startMonth: 3, // April
      startYear: 2025,
      endMonth: 2, // March
      endYear: 2026,
    }));
  };

  const applyPresetFY2024_25 = () => {
    setData((prev) => ({
      ...prev,
      isMultiMonth: true,
      startMonth: 3, // April
      startYear: 2024,
      endMonth: 2, // March
      endYear: 2025,
    }));
  };

  const applyPresetCurrentMonth = () => {
    const now = new Date();
    setData((prev) => ({
      ...prev,
      isMultiMonth: false,
      singleMonth: now.getMonth(),
      singleYear: now.getFullYear(),
    }));
  };

  const loadSampleData = () => {
    setData((prev) => ({
      ...prev,
      tenantName: 'Rahul Sharma',
      landlordName: 'Rameshwar Prasad Gupta',
      monthlyRent: '25000',
      propertyAddress: 'Flat 402, Sunshine Heights, 100 Feet Road, Indiranagar, Bengaluru, Karnataka - 560038',
      landlordPan: 'ABCDE1234F',
      isMultiMonth: true,
      singleMonth: 3,
      singleYear: 2025,
      startMonth: 3, // April
      startYear: 2025,
      endMonth: 2, // March
      endYear: 2026,
      paymentMode: 'Bank Transfer / NEFT / IMPS',
      transactionRef: 'NEFT-AXIS-984210482',
      receiptNoPrefix: 'RR',
      customDate: '',
      templateFormat: prev.templateFormat || 'modern',
      signatureMode: 'type',
      signatureTypedText: 'Rameshwar Prasad Gupta',
      signatureTypedFont: 'Dancing Script',
    }));
  };

  const handleClearForm = () => {
    setData((prev) => ({
      tenantName: '',
      landlordName: '',
      monthlyRent: '',
      propertyAddress: '',
      landlordPan: '',
      isMultiMonth: false,
      singleMonth: new Date().getMonth(),
      singleYear: new Date().getFullYear(),
      startMonth: 3,
      startYear: 2025,
      endMonth: 2,
      endYear: 2026,
      paymentMode: 'Bank Transfer / NEFT / IMPS',
      transactionRef: '',
      receiptNoPrefix: 'RR',
      customDate: '',
      templateFormat: prev.templateFormat || 'modern',
      signatureMode: 'type',
      signatureTypedText: '',
      signatureTypedFont: 'Dancing Script',
      signatureUploadUrl: undefined,
      signatureDrawnDataUrl: undefined,
    }));
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setPdfProgressStatus('Preparing your receipts...');
    setDownloadSuccess(false);

    const safeTenant = (data.tenantName || 'Tenant').replace(/\s+/g, '_');
    const fileName = data.isMultiMonth
      ? `Rent_Receipts_${safeTenant}_${data.startYear}-${data.endYear}.pdf`
      : `Rent_Receipt_${safeTenant}_${MONTH_NAMES[data.singleMonth]}_${data.singleYear}.pdf`;

    try {
      const success = await downloadReceiptsPdf({
        containerElementId: 'full-pdf-export-container',
        fileName,
        onProgress: (_progress, status) => {
          setPdfProgressStatus(status);
        },
      });
      if (success) {
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 6000);
      }
    } catch (err) {
      console.error('PDF Download Error:', err);
    } finally {
      setIsGeneratingPdf(false);
      setPdfProgressStatus('');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareWhatsApp = () => {
    const currentUrl = window.location.origin || 'https://rentreceipt.app';
    const message = `Generate your free rent receipts for HRA exemption instantly: ${currentUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 sm:p-7">
      {/* Form Title & Quick Sample Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>{t('form_title')}</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Fill the fields below to update the live preview instantly
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            id="sample-data-btn"
            onClick={loadSampleData}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200/60 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('form_sample_btn')}</span>
          </button>
          <button
            type="button"
            id="clear-form-btn"
            onClick={handleClearForm}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Reset Form"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('form_reset_btn')}</span>
          </button>
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {/* Template Format Selector */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Palette className="w-4 h-4 text-amber-500" />
              <span>Choose Receipt Design / Template:</span>
            </label>
            <span className="text-[11px] text-slate-500 font-medium">4 Formats Available</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {/* 1. Modern Geometric (Default) */}
            <button
              type="button"
              id="template-modern-btn"
              onClick={() => handleInputChange('templateFormat', 'modern')}
              className={`p-2.5 sm:p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer relative ${
                (data.templateFormat || 'modern') === 'modern'
                  ? 'border-amber-500 bg-amber-50/60 shadow-xs ring-1 ring-amber-500/30'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {(data.templateFormat || 'modern') === 'modern' && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}
              <div className="flex items-center gap-1.5 mb-1">
                <HouseLogo className="w-4 h-4" />
                <span className="text-xs font-bold text-slate-900">Modern</span>
              </div>
              <p className="text-[10.5px] text-slate-500 leading-tight">
                Orange & slate geometric accents with House logo
              </p>
              <span className="inline-block mt-2 text-[9.5px] font-semibold text-amber-700 bg-amber-100/70 px-1.5 py-0.5 rounded w-fit">
                ★ Proptech
              </span>
            </button>

            {/* 2. Classic Legal */}
            <button
              type="button"
              id="template-classic-btn"
              onClick={() => handleInputChange('templateFormat', 'classic')}
              className={`p-2.5 sm:p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer relative ${
                data.templateFormat === 'classic'
                  ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-1 ring-blue-600/30'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {data.templateFormat === 'classic' && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs">🏛️</span>
                <span className="text-xs font-bold text-slate-900">Classic</span>
              </div>
              <p className="text-[10.5px] text-slate-500 leading-tight">
                Traditional CBDT Sec 10(13A) bond & deed
              </p>
              <span className="inline-block mt-2 text-[9.5px] font-semibold text-blue-700 bg-blue-100/70 px-1.5 py-0.5 rounded w-fit">
                Tax Standard
              </span>
            </button>

            {/* 3. Swiss Minimalist */}
            <button
              type="button"
              id="template-minimalist-btn"
              onClick={() => handleInputChange('templateFormat', 'minimalist')}
              className={`p-2.5 sm:p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer relative ${
                data.templateFormat === 'minimalist' || data.templateFormat === 'corporate'
                  ? 'border-slate-900 bg-slate-100 shadow-xs ring-1 ring-slate-900/30'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {(data.templateFormat === 'minimalist' || data.templateFormat === 'corporate') && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs">📑</span>
                <span className="text-xs font-bold text-slate-900">Minimalist</span>
              </div>
              <p className="text-[10.5px] text-slate-500 leading-tight">
                Swiss monochrome precision ledger table
              </p>
              <span className="inline-block mt-2 text-[9.5px] font-semibold text-slate-700 bg-slate-200/80 px-1.5 py-0.5 rounded w-fit">
                Executive
              </span>
            </button>

            {/* 4. Simple Printed Paper (No Extra Color) */}
            <button
              type="button"
              id="template-simple-paper-btn"
              onClick={() => handleInputChange('templateFormat', 'simple_paper')}
              className={`p-2.5 sm:p-3 rounded-xl text-left border-2 transition-all flex flex-col justify-between cursor-pointer relative ${
                data.templateFormat === 'simple_paper'
                  ? 'border-black bg-slate-50 shadow-xs ring-1 ring-black/30'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {data.templateFormat === 'simple_paper' && (
                <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-black text-white flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
              )}
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs">📄</span>
                <span className="text-xs font-bold text-slate-900">Printed Paper</span>
              </div>
              <p className="text-[10.5px] text-slate-500 leading-tight">
                Zero colors, clean black & white standard printout
              </p>
              <span className="inline-block mt-2 text-[9.5px] font-semibold text-black bg-slate-200 px-1.5 py-0.5 rounded w-fit">
                Pure B&W
              </span>
            </button>
          </div>
        </div>

        {/* 1. Tenant & Landlord Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tenantName" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('lbl_tenant_name')} *</span>
            </label>
            <input
              type="text"
              id="tenantName"
              name="tenantName"
              placeholder="e.g. Rahul Sharma"
              value={data.tenantName}
              onChange={(e) => handleInputChange('tenantName', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="landlordName" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('lbl_landlord_name')} *</span>
            </label>
            <input
              type="text"
              id="landlordName"
              name="landlordName"
              placeholder="e.g. Rameshwar Prasad Gupta"
              value={data.landlordName}
              onChange={(e) => handleInputChange('landlordName', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
        </div>

        {/* 2. Monthly Rent Amount */}
        <div>
          <label htmlFor="monthlyRent" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <IndianRupee className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('lbl_monthly_rent')} *</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500 font-bold">
              ₹
            </span>
            <input
              type="text"
              id="monthlyRent"
              name="monthlyRent"
              placeholder="e.g. 25000"
              value={data.monthlyRent ? formatIndianCurrency(data.monthlyRent) : ''}
              onChange={handleAmountChange}
              className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-base font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          {/* Amount in words helper & Annual Rent Alert */}
          <div className="mt-1.5 space-y-1">
            {parsedAmount > 0 && (
              <p className="text-xs text-slate-600 italic">
                {t('lbl_rent_in_words')}: <strong className="font-semibold text-slate-800 font-serif">{numberToIndianWords(parsedAmount)}</strong>
              </p>
            )}

            {parsedAmount > 0 && (
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-0.5">
                <span>
                  Annual Equivalent: <strong className="font-semibold text-slate-700">₹ {formatIndianCurrency(annualRent)}</strong> / year
                </span>
                {isPanRequired ? (
                  <span className="inline-flex items-center text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    PAN Required (&gt; ₹1 Lakh/yr)
                  </span>
                ) : (
                  <span className="inline-flex items-center text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    PAN Optional (≤ ₹1 Lakh/yr)
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* 3. Property Address */}
        <div>
          <label htmlFor="propertyAddress" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Building className="w-3.5 h-3.5 text-blue-600" />
            <span>{t('lbl_property_address')} *</span>
          </label>
          <textarea
            id="propertyAddress"
            name="propertyAddress"
            rows={2}
            placeholder="Flat/House No., Building Name, Street, Locality, City, State - PIN Code"
            value={data.propertyAddress}
            onChange={(e) => handleInputChange('propertyAddress', e.target.value)}
            className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
            required
          />
        </div>

        {/* 4. Receipt Period Options (Single Month vs Multi-Month Range) */}
        <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <label className="block text-xs font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('sec_period_duration')} *</span>
            </label>

            {/* Toggle Single vs Multi */}
            <div className="flex bg-slate-200/70 p-0.5 rounded-lg text-xs font-medium">
              <button
                type="button"
                id="period-single-tab"
                onClick={() => handleInputChange('isMultiMonth', false)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  !data.isMultiMonth
                    ? 'bg-white text-blue-700 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('tab_single_month')}
              </button>
              <button
                type="button"
                id="period-multi-tab"
                onClick={() => handleInputChange('isMultiMonth', true)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  data.isMultiMonth
                    ? 'bg-white text-blue-700 font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t('tab_multi_month')}
              </button>
            </div>
          </div>

          {/* Quick Preset Buttons for Multi-Month */}
          {data.isMultiMonth && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="text-[11px] text-slate-500 self-center mr-1">{t('lbl_quick_presets')}</span>
              <button
                type="button"
                onClick={applyPresetFY2025_26}
                className="text-xs px-2.5 py-1 bg-white hover:bg-blue-50 text-blue-700 border border-slate-300 rounded-md font-medium transition-colors cursor-pointer"
              >
                {t('btn_preset_fy25_26')} (Apr &apos;25 - Mar &apos;26)
              </button>
              <button
                type="button"
                onClick={applyPresetFY2024_25}
                className="text-xs px-2.5 py-1 bg-white hover:bg-blue-50 text-blue-700 border border-slate-300 rounded-md font-medium transition-colors cursor-pointer"
              >
                {t('btn_preset_fy24_25')} (Apr &apos;24 - Mar &apos;25)
              </button>
            </div>
          )}

          {/* Single Month Selectors */}
          {!data.isMultiMonth ? (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] text-slate-600 mb-1 font-medium">Month</label>
                <select
                  id="singleMonth"
                  value={data.singleMonth}
                  onChange={(e) => handleInputChange('singleMonth', parseInt(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {MONTH_NAMES.map((name, idx) => (
                    <option key={name} value={idx}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-slate-600 mb-1 font-medium">Year</label>
                <select
                  id="singleYear"
                  value={data.singleYear}
                  onChange={(e) => handleInputChange('singleYear', parseInt(e.target.value))}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {yearOptions.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            /* Multi-Month Range Selectors */
            <div className="space-y-3">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1 font-medium">From Month</label>
                  <select
                    id="startMonth"
                    value={data.startMonth}
                    onChange={(e) => handleInputChange('startMonth', parseInt(e.target.value))}
                    className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {MONTH_NAMES.map((name, idx) => (
                      <option key={`start-${name}`} value={idx}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-1 font-medium">From Year</label>
                  <select
                    id="startYear"
                    value={data.startYear}
                    onChange={(e) => handleInputChange('startYear', parseInt(e.target.value))}
                    className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {yearOptions.map((y) => (
                      <option key={`start-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-1 font-medium">To Month</label>
                  <select
                    id="endMonth"
                    value={data.endMonth}
                    onChange={(e) => handleInputChange('endMonth', parseInt(e.target.value))}
                    className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {MONTH_NAMES.map((name, idx) => (
                      <option key={`end-${name}`} value={idx}>
                        {name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-1 font-medium">To Year</label>
                  <select
                    id="endYear"
                    value={data.endYear}
                    onChange={(e) => handleInputChange('endYear', parseInt(e.target.value))}
                    className="w-full px-2.5 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {yearOptions.map((y) => (
                      <option key={`end-${y}`} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Receipt Number Prefix Customization */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
            <label htmlFor="receiptNoPrefix" className="text-[11px] text-slate-600 font-medium whitespace-nowrap">
              Receipt No. Prefix / Label:
            </label>
            <input
              type="text"
              id="receiptNoPrefix"
              name="receiptNoPrefix"
              placeholder="e.g. RR, REC, 2025"
              value={data.receiptNoPrefix || 'RR'}
              onChange={(e) => handleInputChange('receiptNoPrefix', e.target.value)}
              className="w-28 px-2.5 py-1.5 bg-white border border-slate-300 rounded text-xs font-mono text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* 5. Landlord PAN Number (Optional with Note) */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label htmlFor="landlordPan" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-blue-600" />
              <span>Landlord PAN Number (Optional)</span>
            </label>
            <span className="text-[11px] text-slate-500">
              10-character alphanumeric
            </span>
          </div>

          <input
            type="text"
            id="landlordPan"
            name="landlordPan"
            maxLength={10}
            placeholder="e.g. ABCDE1234F"
            value={data.landlordPan}
            onChange={(e) => handleInputChange('landlordPan', e.target.value.toUpperCase())}
            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm uppercase font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />

          {/* Statutory Note as required */}
          <div className="mt-1.5 flex items-start gap-1.5 text-xs text-[#b45309] bg-[#fffbeb] p-2.5 rounded-md border border-amber-200/80">
            <Info className="w-4 h-4 text-[#b45309] shrink-0 mt-0.5" />
            <p>
              <strong className="text-amber-950 font-semibold">Income Tax Rule:</strong> Landlord PAN is{' '}
              <span className="font-semibold text-amber-900">required only if annual rent exceeds ₹1,00,000</span> (₹8,333/month) under CBDT circular guidelines for HRA exemption.
            </p>
          </div>
        </div>

        {/* 6. Payment Mode & Bank Reference */}
        <div className="space-y-3">
          <div>
            <label htmlFor="paymentMode" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider mb-1.5 flex items-center gap-1">
              <CreditCard className="w-3.5 h-3.5 text-blue-600" />
              <span>Payment Mode *</span>
            </label>
            <select
              id="paymentMode"
              name="paymentMode"
              value={data.paymentMode}
              onChange={(e) => handleInputChange('paymentMode', e.target.value)}
              className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Bank Transfer / NEFT / IMPS">Direct Bank Transfer / NEFT / IMPS</option>
              <option value="UPI">UPI (GPay / PhonePe / Paytm / BHIM)</option>
              <option value="Cheque">Bank Cheque</option>
              <option value="Cash">Cash Payment</option>
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="transactionRef" className="block text-xs font-semibold text-slate-800 uppercase tracking-wider">
                Bank UTR / UPI Ref / Cheque No (Optional)
              </label>
              <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium">
                Payment Reference
              </span>
            </div>
            <input
              type="text"
              id="transactionRef"
              name="transactionRef"
              placeholder="e.g. UTR1938472910, UPI Ref 4109283719, or Cheque #492810"
              value={data.transactionRef || ''}
              onChange={(e) => handleInputChange('transactionRef', e.target.value)}
              className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Adding your transaction reference helps maintain a clear payment record alongside your rental agreement.
            </p>
          </div>
        </div>

        {/* 7. Signature Options Section (Requirements 3 & 4) */}
        <div className="border-t border-slate-200 pt-4">
          <SignatureInput data={data} setData={setData} />
        </div>

        {/* Action Controls in Clean Minimalism - Requirement 1: type="button" not submit */}
        <div className="pt-4 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              id="generate-download-pdf-btn"
              onClick={() => setIsDownloadModalOpen(true)}
              disabled={isGeneratingPdf}
              className="flex-1 py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-md shadow-xs transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-75 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>
                {data.isMultiMonth
                  ? 'Download All Receipts (Choose PDF or JPG)'
                  : 'Download Receipt (Choose PDF or JPG)'}
              </span>
            </button>

            <button
              type="button"
              id="whatsapp-share-form-btn"
              onClick={handleShareWhatsApp}
              className="py-3 px-4 bg-[#25d366] hover:bg-[#20bd5a] text-white font-semibold rounded-md shadow-xs text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-xs font-semibold flex items-center justify-center gap-1.5 animate-fade-in">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Document downloaded successfully! Ready to submit for HRA claim.</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <button
              type="button"
              id="print-receipt-btn"
              onClick={handlePrint}
              className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-md text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span>Print Preview</span>
            </button>

            <span className="text-[11px] text-slate-400">
              Instant Client-Side Export (No Server / No API Key Needed)
            </span>
          </div>
        </div>
      </div>

      {/* Download Format Modal (PDF / JPG / PNG / Print) */}
      <DownloadFormatModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        documentTitle={data.isMultiMonth ? "Rent Receipts" : "Rent Receipt"}
        defaultFileName={`Rent_Receipt_${(data.tenantName || 'Tenant').replace(/\s+/g, '_')}_${data.startYear || new Date().getFullYear()}`}
        targetElementId="full-pdf-export-container"
      />
    </div>
  );
};
