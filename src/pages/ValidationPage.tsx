import React, { useState } from 'react';
import { DecodedReceiptVerification } from '../utils/verificationUtils';
import { numberToIndianWords } from '../utils/numberToWords';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Building,
  User,
  CreditCard,
  ArrowLeft,
} from 'lucide-react';
import { AdSlot } from '../components/AdSlot';

interface ValidationPageProps {
  verifiedData: DecodedReceiptVerification | null;
  onNavigateHome: () => void;
}

export const ValidationPage: React.FC<ValidationPageProps> = ({
  verifiedData,
  onNavigateHome,
}) => {
  const [copied, setCopied] = useState(false);

  // Fallback demo data if opened directly without query string
  const data: DecodedReceiptVerification = verifiedData || {
    isValid: true,
    receiptNo: 'RR-2026-04',
    verificationCode: 'RR-2026-04',
    tenantName: 'Rahul Sharma',
    landlordName: 'Rameshwar Prasad Gupta',
    amount: '25,000',
    amountNumber: 25000,
    periodName: 'April 2025',
    startDate: '01/04/2025',
    endDate: '30/04/2025',
    propertyAddress: 'Flat 402, Sunshine Heights, 100 Feet Road, Indiranagar, Bengaluru, Karnataka - 560038',
    paymentMode: 'Bank Transfer / NEFT / IMPS',
    transactionRef: 'NEFT-AXIS-984210482',
    landlordPan: 'ABCDE1234F',
    issuedDate: '30/04/2025',
  };

  const parsedAmountNum = data.amountNumber || parseFloat(data.amount.replace(/,/g, '')) || 0;
  const amountWords = numberToIndianWords(parsedAmountNum);

  const handleCopyReport = () => {
    const reportText = `======================================================
RENT RECEIPT SUMMARY FOR HRA DOCUMENTATION
======================================================
Receipt Number    : ${data.receiptNo}
Date of Issuance  : ${data.issuedDate}
Tenancy Period    : ${data.periodName} (${data.startDate} to ${data.endDate})

PAYER / TENANT    : ${data.tenantName}
PAYEE / LANDLORD  : ${data.landlordName}
LANDLORD PAN      : ${data.landlordPan || 'Exempt / Not Provided'}
RENTED PREMISES   : ${data.propertyAddress}

AMOUNT PAID       : INR ₹${data.amount}/- (${amountWords})
PAYMENT MODE      : ${data.paymentMode}
TRANSACTION REF   : ${data.transactionRef || 'N/A'}

LEGAL REFERENCES:
- Income Tax Act 1961 Sec 10(13A) & Income Tax Rules 1962 Rule 2A (HRA Exemption)
- Indian Stamp Act 1899 (Revenue Stamp applicable for cash > ₹5,000)

NOTE: This receipt is a formatting tool only and does not constitute legal certification.
======================================================`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 sm:px-6 lg:px-8 text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-xl border border-slate-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Receipt Generator</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-400/40">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              RECEIPT SUMMARY
            </span>
          </div>
        </div>

        {/* Primary Receipt Summary Box */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          {/* Top Header Banner */}
          <div className="bg-slate-900 p-6 sm:p-8 text-white border-b border-slate-700">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Rent Receipt Summary
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                    Structured receipt details for Section 10(13A) HRA tax exemption documentation.
                  </p>
                </div>
              </div>

              <div className="text-right font-mono text-xs text-slate-400">
                <div>Receipt No: <strong className="text-white">{data.receiptNo}</strong></div>
                <div className="mt-1">Date: <strong className="text-white">{data.issuedDate}</strong></div>
              </div>
            </div>
          </div>

          {/* Core Body Grid */}
          <div className="p-6 sm:p-8 space-y-6 text-left">
            {/* 1. Consideration Amount Highlight Box */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider block">
                  Total Rent Amount
                </span>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono flex items-baseline gap-2">
                  <span>₹ {data.amount}/-</span>
                  <span className="text-xs sm:text-sm font-sans font-normal text-slate-400">
                    INR
                  </span>
                </div>
                <div className="text-xs text-slate-300 italic">
                  Amount in words: <strong className="text-white font-semibold">{amountWords}</strong>
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-slate-700 sm:pl-6 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Rental Period
                </span>
                <div className="text-sm sm:text-base font-bold text-white">
                  {data.periodName}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {data.startDate} to {data.endDate}
                </div>
              </div>
            </div>

            {/* 2. Parties Involved: Tenant & Landlord Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tenant / Employee Card */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-bold">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <User className="w-3.5 h-3.5" />
                    Tenant Details
                  </span>
                </div>
                <div className="text-base font-bold text-white break-words">
                  {data.tenantName}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800">
                  <span className="text-slate-500 block text-[11px]">Rented Premises:</span>
                  <span className="text-slate-200 break-words font-medium">{data.propertyAddress}</span>
                </div>
              </div>

              {/* Landlord / Owner Card */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-bold">
                  <span className="flex items-center gap-1.5 text-indigo-400">
                    <Building className="w-3.5 h-3.5" />
                    Landlord Details
                  </span>
                </div>
                <div className="text-base font-bold text-white break-words">
                  {data.landlordName}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-slate-800 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Landlord PAN:</span>
                    {data.landlordPan && data.landlordPan !== 'EXEMPT' ? (
                      <span className="text-white font-mono font-bold text-xs uppercase bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        {data.landlordPan}
                      </span>
                    ) : (
                      <span className="text-slate-400 italic text-xs">Exempt (&le; ₹1 Lakh/yr)</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Payment Mode & Banking Trail */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-4 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-400 uppercase tracking-wider font-bold">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CreditCard className="w-3.5 h-3.5" />
                  Payment Details
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-slate-400 block text-[11px]">Payment Method:</span>
                  <strong className="text-white text-sm">{data.paymentMode}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Payment Reference / UTR / Cheque:</span>
                  <strong className="text-blue-400 font-mono text-xs break-words">
                    {data.transactionRef || 'N/A'}
                  </strong>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl text-xs text-slate-400 leading-relaxed">
              <strong>Disclaimer:</strong> This receipt is a formatting tool only and does not constitute legal certification. For tax filing or legal proceedings, ensure payments are made via traceable bank transfer and retain your rental agreement as supporting evidence.
            </div>
          </div>

          {/* Action Bar */}
          <div className="bg-slate-900 p-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-400 font-mono">
              HRA Exemption Documentation Record
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                id="copy-verification-cert-btn"
                onClick={handleCopyReport}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Details Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-300" />
                    <span>Copy Summary</span>
                  </>
                )}
              </button>

              <button
                type="button"
                id="print-verification-cert-btn"
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* High-Visibility Ad Banner for Verification Viewers */}
        <div className="pt-4">
          <AdSlot type="banner" />
        </div>
      </div>
    </div>
  );
};
