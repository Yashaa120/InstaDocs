import React, { useState } from 'react';
import {
  FileText,
  Image as ImageIcon,
  FileImage,
  Printer,
  X,
  Download,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Zap,
} from 'lucide-react';
import { downloadDocument, ExportFormat } from '../utils/pdfGenerator';
import { AdSlot } from './AdSlot';

interface DownloadFormatModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle: string;
  defaultFileName: string;
  targetElementId: string;
  onSuccess?: () => void;
}

export const DownloadFormatModal: React.FC<DownloadFormatModalProps> = ({
  isOpen,
  onClose,
  documentTitle,
  defaultFileName,
  targetElementId,
  onSuccess,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<ExportFormat>('pdf');
  const [isExporting, setIsExporting] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [progressStatus, setProgressStatus] = useState('');
  const [exportComplete, setExportComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleStartDownload = async (formatOverride?: ExportFormat) => {
    const formatToUse = formatOverride || selectedFormat;
    setIsExporting(true);
    setExportComplete(false);
    setErrorMessage(null);
    setProgressPercent(10);
    setProgressStatus(`Initializing ${formatToUse.toUpperCase()} generator...`);

    try {
      const success = await downloadDocument({
        containerElementId: targetElementId,
        fileName: defaultFileName,
        format: formatToUse,
        onProgress: (percent, text) => {
          setProgressPercent(percent);
          setProgressStatus(text);
        },
      });

      if (success) {
        setExportComplete(true);
        onSuccess?.();
        setTimeout(() => {
          setIsExporting(false);
          setExportComplete(false);
          onClose();
        }, 1600);
      } else {
        setErrorMessage('Could not generate automatic file. Print dialog was opened as fallback.');
        setIsExporting(false);
      }
    } catch (err) {
      console.error('Download error:', err);
      setErrorMessage('Export failed. Please try again or use direct print.');
      setIsExporting(false);
    }
  };

  const handleDirectPrint = () => {
    window.print();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="download-format-modal-title"
    >
      <div
        className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-md overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3
                id="download-format-modal-title"
                className="text-base sm:text-lg font-bold text-slate-900 leading-tight"
              >
                Download {documentTitle}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-emerald-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Free Client-Side • No API Key Needed</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            disabled={isExporting}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors disabled:opacity-50 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Format Selection Cards */}
          <div className="space-y-2.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Select Download Format
            </label>

            {/* 1. PDF Option */}
            <div
              onClick={() => !isExporting && setSelectedFormat('pdf')}
              className={`p-3 sm:p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                selectedFormat === 'pdf'
                  ? 'border-blue-600 bg-blue-50/50 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedFormat === 'pdf'
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    PDF Document (.pdf)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    Recommended
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
                  Standard A4 multi-page document with crisp vector fonts. Best for official submission &amp; HR print.
                </p>
              </div>
            </div>

            {/* 2. JPG Option */}
            <div
              onClick={() => !isExporting && setSelectedFormat('jpg')}
              className={`p-3 sm:p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                selectedFormat === 'jpg'
                  ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedFormat === 'jpg'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <ImageIcon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    JPEG Image (.jpg)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Mobile Friendly
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
                  High-definition image saved directly to your phone gallery. Ideal for WhatsApp, Telegram &amp; email.
                </p>
              </div>
            </div>

            {/* 3. PNG Option */}
            <div
              onClick={() => !isExporting && setSelectedFormat('png')}
              className={`p-3 sm:p-3.5 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3 select-none ${
                selectedFormat === 'png'
                  ? 'border-purple-600 bg-purple-50/50 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  selectedFormat === 'png'
                    ? 'bg-purple-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                <FileImage className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    PNG Graphic (.png)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                    Lossless
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-snug">
                  High clarity lossless graphic format with transparent/white backgrounds.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar Display when exporting */}
          {isExporting && (
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 animate-fade-in">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <div className="w-3.5 h-3.5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <span>{progressStatus || 'Processing...'}</span>
                </span>
                <span className="font-mono text-blue-600">{progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Export Complete Notification */}
          {exportComplete && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center gap-2 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Download initiated! Check your browser or phone downloads folder.</span>
            </div>
          )}

          {/* Error message */}
          {errorMessage && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-xs font-medium flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Sponsored Ad Area (High Intent & High Dwell-Time Slot) */}
          <div className="pt-1">
            <AdSlot type="modal-sponsor" />
          </div>

          {/* Action Buttons */}
          <div className="pt-1 space-y-2">
            <button
              type="button"
              id="confirm-download-format-btn"
              onClick={() => handleStartDownload()}
              disabled={isExporting}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-70 cursor-pointer"
            >
              {isExporting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Downloading {selectedFormat.toUpperCase()}...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download {selectedFormat.toUpperCase()} Now</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                id="direct-print-btn"
                onClick={handleDirectPrint}
                disabled={isExporting}
                className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <Printer className="w-3.5 h-3.5 text-slate-600" />
                <span>Direct Print / System PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                disabled={isExporting}
                className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold rounded-lg text-xs transition-colors cursor-pointer disabled:opacity-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
