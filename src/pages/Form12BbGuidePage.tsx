import React from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Calendar,
  Building,
  CreditCard,
  FileCheck,
  Scale,
  Download,
  HelpCircle,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';

interface Form12BbGuidePageProps {
  setActivePage: (page: ActivePage) => void;
}

export const Form12BbGuidePage: React.FC<Form12BbGuidePageProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <span aria-hidden="true">/</span>
        <a
          href="#resources"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('resources');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Resource Hub
        </a>
        <span aria-hidden="true">/</span>
        <span className="text-slate-900 font-semibold">Form 12BB Compliance Guide</span>
      </nav>

      {/* Main Container */}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <header className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Rule 26C of Income Tax Rules, 1962</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Form 12BB Statutory Guide &amp; HRA Tax Proof Submission
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            A comprehensive, legally referenced handbook on how salaried employees in India must submit Form 12BB to their employers for claiming House Rent Allowance (HRA), Leave Travel Concession (LTC), Home Loan Interest, and Chapter VI-A deductions.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">
            <span>By <strong>RentReceipt Tax Editorial Desk</strong></span>
            <span aria-hidden="true">&bull;</span>
            <span>Reviewed by Chartered Accountants</span>
            <span aria-hidden="true">&bull;</span>
            <span>Applicable for FY 2025-26 &amp; FY 2026-27</span>
          </div>
        </header>

        {/* Executive Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
            <Calendar className="w-5 h-5 text-blue-600 mb-2" />
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Critical Timeline
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Employers mandate final physical &amp; digital proof submission between <strong>January 15 and February 10</strong> each year.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
            <Building className="w-5 h-5 text-emerald-600 mb-2" />
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Section 10(13A) HRA
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Requires monthly signed rent receipts, landlord details, and PAN reporting if total annual rent exceeds <strong>₹1,00,000</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
            <Scale className="w-5 h-5 text-purple-600 mb-2" />
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Tax Regime Rule
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Form 12BB HRA exemptions apply only if you elect the <strong>Old Tax Regime</strong>. Under Section 115BAC, HRA is non-exempt.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            1. What is Form 12BB?
          </h2>
          <p>
            Introduced by the Central Board of Direct Taxes (CBDT) under <strong>Rule 26C</strong> of the Income Tax Rules, Form 12BB is a standard statement of claims furnished by a salaried employee to their employer under Section 192 of the Income Tax Act, 1961.
          </p>
          <p>
            Before the introduction of Form 12BB, employers followed disparate declaration formats, causing audit disputes during TDS assessment. Form 12BB provides a standardized, legally binding document wherein employees declare all tax exemptions and statutory deductions before final Tax Deducted at Source (TDS) is deducted from their March salary.
          </p>
        </section>

        {/* Section 2: Form Structure */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            2. The Four Parts of Form 12BB
          </h2>
          <p>
            Form 12BB is organized into four distinct sections. Each section requires specific accompanying evidence:
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">
                Part I: House Rent Allowance (HRA)
              </span>
              <p className="text-xs text-slate-700">
                You must declare the total rent paid during the financial year, the complete physical address of the rented residential property, the landlord&apos;s full name, and the landlord&apos;s Permanent Account Number (PAN) if the annual rent exceeds ₹1,00,000 (or ₹8,333 per month).
              </p>
              <span className="text-[11px] text-slate-500 block font-medium">
                Mandatory Attachments: Official monthly rent receipts with landlord signatures, bank transaction references, and copy of lease contract or tenancy declaration.
              </span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                Part II: Leave Travel Concession / Assistance (LTA)
              </span>
              <p className="text-xs text-slate-700">
                Covers travel fare for the employee and eligible family members on leave to any place in India. Exemption is limited to actual travel expenses (airfare economy class, 1st class rail) and does not cover hotel stays or food.
              </p>
              <span className="text-[11px] text-slate-500 block font-medium">
                Mandatory Attachments: Boarding passes, air/train ticket invoices, and travel agency receipts.
              </span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-purple-700 uppercase tracking-wide">
                Part III: Deduction of Interest on Borrowing for House Property (Section 24(b))
              </span>
              <p className="text-xs text-slate-700">
                Allows deduction up to ₹2,00,000 per financial year for self-occupied property loans. You must declare the lender&apos;s name, address, and PAN (for non-bank private lenders).
              </p>
              <span className="text-[11px] text-slate-500 block font-medium">
                Mandatory Attachments: Annual Home Loan Provisional Interest Certificate issued by the financial institution.
              </span>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                Part IV: Chapter VI-A Deductions (Sections 80C, 80CCC, 80CCD, 80D, 80E, 80G)
              </span>
              <p className="text-xs text-slate-700">
                Itemizes statutory deductions including PPF, EPF, ELSS mutual funds, life insurance premiums, NPS (80CCD(1B)), health insurance premiums (80D), education loan interest (80E), and eligible donations (80G).
              </p>
              <span className="text-[11px] text-slate-500 block font-medium">
                Mandatory Attachments: Premium payment receipts, mutual fund account statements, and 80G donation receipts with 10BE certificates.
              </span>
            </div>
          </div>
        </section>

        {/* High-Margin In-Article Ad Unit */}
        <div className="my-8 pt-2">
          <AdSlot type="in-article" />
        </div>

        {/* Section 3: Documentary Checklist */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            3. Master Document Checklist for HRA Claims in Form 12BB
          </h2>
          <p>
            To guarantee that your HR or internal payroll audit team accepts your HRA declaration without slashing exemptions, assemble the following documentary file:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Monthly Rent Receipts</span>
              </div>
              <p className="text-slate-600 leading-normal">
                Receipts for each month you occupied the rented premises, stamped or signed by the landlord with receipt numbering, date, and tenant name.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Landlord PAN Copy or Form 60</span>
              </div>
              <p className="text-slate-600 leading-normal">
                Mandatory if annual rent exceeds ₹1,00,000 (CBDT Circular No. 8/2013). If the landlord does not possess a PAN, obtain a signed Form 60 declaration.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Banking Payment Evidence</span>
              </div>
              <p className="text-slate-600 leading-normal">
                Bank statements showing NEFT, RTGS, IMPS, or UPI transfers to the landlord. Cash rent above ₹5,000 requires a revenue stamp affixed on receipts.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tenancy Agreement or Affidavit</span>
              </div>
              <p className="text-slate-600 leading-normal">
                Signed lease contract. If living with parents without a formal registered agreement, submit a formal Tenancy Self-Declaration Affidavit.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: What if you missed the employer deadline? */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            4. Missed Your Employer&apos;s Form 12BB Deadline? Here is the Solution
          </h2>
          <p>
            If you failed to submit your rent receipts to your employer before the January/February cut-off date, your employer will compute TDS on your gross salary without granting HRA exemption. <strong>You have not lost your exemption permanently.</strong>
          </p>
          <p>
            You can legally reclaim your HRA exemption directly when filing your annual <strong>Income Tax Return (ITR-1 or ITR-2)</strong> before July 31. Under the Old Tax Regime, you manually deduct the exempt HRA calculated under Section 10(13A) from your gross taxable salary under &quot;Allowances exempt under Section 10&quot;. The excess TDS deducted by your employer will be refunded directly to your verified bank account by the Income Tax Department along with statutory interest.
          </p>
        </section>

        {/* Interactive Tool Links & CTAs */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-slate-900">
            Generate Approved Documents for Your Form 12BB Submission
          </h3>
          <p className="text-xs text-slate-600">
            Use our 100% free, browser-based utilities to create audit-ready compliance documents in seconds:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => {
                setActivePage('rent-receipt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all text-left cursor-pointer group"
            >
              <span className="text-xs font-bold text-blue-600 flex items-center justify-between">
                <span>Rent Receipts</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Single or 12-month PDF with digital signature.
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActivePage('hra-calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all text-left cursor-pointer group"
            >
              <span className="text-xs font-bold text-emerald-600 flex items-center justify-between">
                <span>HRA Calculator</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Calculate exact 3-condition tax exemptions.
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActivePage('affidavit');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all text-left cursor-pointer group"
            >
              <span className="text-xs font-bold text-purple-600 flex items-center justify-between">
                <span>Tenancy Affidavit</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Notary-ready declaration for rent to parents.
              </span>
            </button>
          </div>
        </div>

        {/* Editorial Trust & E-E-A-T Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
            <span className="font-semibold text-slate-900">
              Editorial Quality Standards &bull; Form 12BB Statutory Reference
            </span>
            <span className="text-slate-500 font-medium">
              Verified under Income Tax Notification No. 30/2016
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            <strong>Statutory Disclaimer:</strong> This publication is compiled for informational and taxpayer educational purposes in accordance with Section 192 and Rule 26C of the Income Tax Act, 1961. It does not constitute individual tax or legal counsel. For organization-specific payroll guidelines or complex multi-employer tax transitions, consult your corporate HR payroll desk or a certified Chartered Accountant.
          </p>
        </div>

        {/* Pre-Footer Ad Unit */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>
      </article>
    </div>
  );
};
