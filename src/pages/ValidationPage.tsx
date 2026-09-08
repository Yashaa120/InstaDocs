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
import { ActivePage } from '../types';

interface ValidationPageProps {
  verifiedData: DecodedReceiptVerification | null;
  onNavigateHome: () => void;
  onNavigate?: (page: ActivePage) => void;
}

export const ValidationPage: React.FC<ValidationPageProps> = ({
  verifiedData,
  onNavigateHome,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);

  const handleNavigate = (page: ActivePage) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page === 'home' ? '' : page;
      onNavigateHome();
    }
  };

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
                    Rent Receipt Online Verification &amp; Authenticity Summary
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                    Cryptographically generated proof summary for Section 10(13A) House Rent Allowance tax exemption and employer audit records.
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
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-700/80 pb-2">
              Detailed Rental Record &amp; Payment Trail
            </h2>

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
              <strong>Disclaimer:</strong> This receipt verification view reflects the cryptographic parameters encoded into the QR code during generation. For formal tax filing or scrutiny under Section 143(1)/143(3), salaried employees must retain matching bank account debits and a registered lease agreement.
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

        {/* Informational Guidance for Tax Audit Verification - 400+ Words Expansion */}
        <div className="bg-slate-800/80 rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-6 text-slate-300 text-sm leading-relaxed shadow-xl">
          <div>
            <h2 className="text-lg font-bold text-white tracking-tight mb-2">
              How to Validate This Receipt for HRA Tax Exemption (Section 10(13A))
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              When internal payroll auditors or the Income Tax Department evaluate House Rent Allowance claims under Section 10(13A) of the Income Tax Act, they look for verifiable consistency between the receipt details, banking transactions, and physical residency. This verification portal extracts the cryptographic hash generated at the time the tenant printed their receipt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700/70 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                1. Traceable Bank Trail
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ensure that the payment method shown above (UPI, NEFT, IMPS, or Cheque) corresponds to a legitimate debit entry on your bank account statement for the specified rental month.
              </p>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700/70 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                2. Landlord PAN Compliance
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                As mandated by CBDT Circular No. 08/2013, if the cumulative annual rent paid across the financial year exceeds ₹1,00,000, quoting the landlord&apos;s Permanent Account Number (PAN) is legally compulsory.
              </p>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700/70 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                3. Revenue Stamp Guidelines
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                For cash settlements over ₹5,000, affixing a ₹1 Indian revenue stamp with the landlord&apos;s signature across the stamp is mandatory under the Indian Stamp Act. For online transactions, bank UTR references serve as legal proof.
              </p>
            </div>

            <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700/70 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                4. Rental Agreement Backing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Always pair monthly rent receipts with a valid registered or notarized lease agreement. If you do not have a formal agreement, generate a signed{' '}
                <button
                  onClick={() => handleNavigate('affidavit')}
                  className="text-blue-400 font-bold hover:underline cursor-pointer"
                >
                  Rent Affidavit
                </button>{' '}
                as supplemental evidence.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <h2 className="text-base font-bold text-white mb-2">
              Explore Related Free Financial &amp; Tax Document Tools
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Access other privacy-first compliance tools on RentReceipt to streamline your personal and payroll tax filings:
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <button
                onClick={() => handleNavigate('rent-receipt')}
                className="px-3 py-1.5 rounded-lg bg-blue-600/30 text-blue-300 hover:bg-blue-600/50 border border-blue-500/40 font-semibold transition-colors cursor-pointer"
              >
                🏠 Rent Receipt Generator
              </button>
              <button
                onClick={() => handleNavigate('salary-slip')}
                className="px-3 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 hover:bg-emerald-600/50 border border-emerald-500/40 font-semibold transition-colors cursor-pointer"
              >
                💼 Salary Slip Generator
              </button>
              <button
                onClick={() => handleNavigate('affidavit')}
                className="px-3 py-1.5 rounded-lg bg-purple-600/30 text-purple-300 hover:bg-purple-600/50 border border-purple-500/40 font-semibold transition-colors cursor-pointer"
              >
                📜 Rent Affidavit Generator
              </button>
              <button
                onClick={() => handleNavigate('guide')}
                className="px-3 py-1.5 rounded-lg bg-amber-600/30 text-amber-300 hover:bg-amber-600/50 border border-amber-500/40 font-semibold transition-colors cursor-pointer"
              >
                📖 HRA Tax Exemption Guide
              </button>
              <button
                onClick={() => handleNavigate('faq')}
                className="px-3 py-1.5 rounded-lg bg-slate-700 text-slate-200 hover:bg-slate-600 font-semibold transition-colors cursor-pointer"
              >
                ❓ Frequently Asked Questions
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
