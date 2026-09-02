import React, { useState } from 'react';
import { RentReceiptData, MonthPeriod } from '../types';
import { formatIndianCurrency, numberToIndianWords } from '../utils/numberToWords';
import {
  FileText,
  Copy,
  Check,
  Printer,
  X,
  Building,
  CreditCard,
  User,
  Calendar,
} from 'lucide-react';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: RentReceiptData;
  period: MonthPeriod;
}

export const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  data,
  period,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const parsedAmount =
    typeof data.monthlyRent === 'string'
      ? parseFloat(data.monthlyRent.replace(/,/g, '')) || 0
      : data.monthlyRent || 0;

  const formattedAmount = formatIndianCurrency(parsedAmount);
  const amountWords = numberToIndianWords(parsedAmount);

  const handleCopyReport = () => {
    const reportText = `--- RENT RECEIPT SUMMARY ---
Receipt No: ${period.receiptNumber}
Date of Issue: ${data.customDate || period.receiptDate}
Period: ${period.startDate} to ${period.endDate} (${period.monthName} ${period.year})
Tenant: ${data.tenantName || 'N/A'}
Landlord: ${data.landlordName || 'N/A'}
Landlord PAN: ${data.landlordPan || 'Exempt / Not Provided'}
Property: ${data.propertyAddress || 'N/A'}
Rent Amount: INR ₹${formattedAmount}/- (${amountWords})
Payment Mode: ${data.paymentMode}
Txn / Bank Ref: ${data.transactionRef || 'N/A'}
Legal References: Rule 2A Income Tax Rules 1962, Sec 10(13A) IT Act 1961`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-fade-in">
      <div
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                Rent Receipt Details
              </h3>
              <p className="text-xs text-slate-300">
                Summary for HRA documentation &bull; Rule 2A Income Tax Rules 1962
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 text-left">
          {/* Top Receipt Overview Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Receipt Number
              </span>
              <div className="text-sm sm:text-base font-mono font-bold text-slate-900">
                {period.receiptNumber}
              </div>
            </div>

            <div className="text-left sm:text-right sm:border-l sm:border-slate-200 sm:pl-4">
              <span className="text-[11px] text-slate-500 uppercase font-semibold block">
                Issue Date
              </span>
              <strong className="text-xs sm:text-sm text-slate-800 font-mono">
                {data.customDate || period.receiptDate}
              </strong>
            </div>
          </div>

          {/* Detailed Tenancy & Consideration Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600" />
              Tenancy &amp; Payment Details
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50/70 p-3.5 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-500 block mb-0.5">Tenant:</span>
                <strong className="text-slate-900 font-semibold break-words">
                  {data.tenantName.trim() || '[TENANT NAME]'}
                </strong>
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Landlord:</span>
                <strong className="text-slate-900 font-semibold break-words">
                  {data.landlordName.trim() || '[LANDLORD NAME]'}
                </strong>
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Monthly Rent:</span>
                <strong className="text-blue-700 font-mono font-bold text-sm">
                  ₹ {formattedAmount}/-
                </strong>
                <span className="text-[10px] text-slate-500 italic block mt-0.5">({amountWords})</span>
              </div>

              <div>
                <span className="text-slate-500 block mb-0.5">Rental Period:</span>
                <strong className="text-slate-900 font-semibold">
                  {period.monthName} {period.year}
                </strong>
                <span className="text-[11px] text-slate-500 block">
                  ({period.startDate} to {period.endDate})
                </span>
              </div>

              <div className="sm:col-span-2 pt-1 border-t border-slate-200">
                <span className="text-slate-500 block mb-0.5">Rented Premises Address:</span>
                <strong className="text-slate-800 font-medium break-words leading-relaxed">
                  {data.propertyAddress.trim() || '[PROPERTY ADDRESS]'}
                </strong>
              </div>

              <div className="pt-1 border-t border-slate-200">
                <span className="text-slate-500 block mb-0.5">Payment Method:</span>
                <strong className="text-slate-900 font-semibold">{data.paymentMode}</strong>
                {data.transactionRef && (
                  <div className="text-[11px] text-blue-700 font-mono mt-0.5">
                    Ref/UTR: <strong>{data.transactionRef}</strong>
                  </div>
                )}
              </div>

              <div className="pt-1 border-t border-slate-200">
                <span className="text-slate-500 block mb-0.5">Landlord PAN:</span>
                {data.landlordPan ? (
                  <strong className="font-mono text-indigo-700 uppercase bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200">
                    {data.landlordPan.trim()}
                  </strong>
                ) : (
                  <span className="text-slate-500 italic text-[11px]">
                    Exempt (&le; ₹1,00,000/year)
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Legal Notes */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-500 space-y-1">
            <p>
              <strong>Issued under:</strong> Rule 2A Income Tax Rules 1962, Sec 10(13A) IT Act 1961 for HRA tax exemption claims.
            </p>
            <p>
              <strong>Revenue Stamp:</strong> For cash rent exceeding ₹5,000, a ₹1 revenue stamp should be affixed and signed across.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-4 rounded-b-2xl border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500">
            Receipt #{period.receiptNumber} &bull; Tenancy Record
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyReport}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-600" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
