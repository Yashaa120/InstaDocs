import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Building,
  CreditCard,
  Scale,
  ArrowRight,
  HelpCircle,
  AlertCircle,
  FileCheck,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';

interface LandlordPanGuidePageProps {
  setActivePage: (page: ActivePage) => void;
}

export const LandlordPanGuidePage: React.FC<LandlordPanGuidePageProps> = ({
  setActivePage,
}) => {
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
        <span className="text-slate-900 font-semibold">Landlord PAN &amp; Tenant Rights</span>
      </nav>

      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <header className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>CBDT Circular No. 8/2013 &bull; Section 194-IB</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Landlord PAN Compliance Mandate &amp; Tenant Legal Rights Handbook
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Everything tenants and landlords must know regarding PAN reporting limits for HRA exemption, Form 60 declarations, Section 194-IB TDS deduction on monthly rent exceeding ₹50,000, and statutory rights under the Model Tenancy Act.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-4 pt-4 border-t border-slate-100">
            <span>By <strong>RentReceipt Tax &amp; Legal Desk</strong></span>
            <span aria-hidden="true">&bull;</span>
            <span>Fact-Checked Legal Research</span>
            <span aria-hidden="true">&bull;</span>
            <span>Updated for Assessment Year 2026-27</span>
          </div>
        </header>

        {/* 3 Core Thresholds Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wide block mb-1">
              Threshold 1: PAN Mandate
            </span>
            <div className="text-2xl font-bold text-slate-900 font-mono">
              &gt; ₹1,00,000<span className="text-xs font-normal text-slate-500"> /year</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">
              If rent exceeds ₹8,333/month, employer cannot grant HRA deduction without landlord PAN or Form 60.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wide block mb-1">
              Threshold 2: TDS Mandate
            </span>
            <div className="text-2xl font-bold text-slate-900 font-mono">
              &gt; ₹50,000<span className="text-xs font-normal text-slate-500"> /month</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">
              Tenant must deduct TDS under Section 194-IB and file Form 26QC before paying rent.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wide block mb-1">
              Threshold 3: Revenue Stamp
            </span>
            <div className="text-2xl font-bold text-slate-900 font-mono">
              &gt; ₹5,000<span className="text-xs font-normal text-slate-500"> /cash</span>
            </div>
            <p className="text-xs text-slate-600 mt-1 leading-snug">
              If rent is paid in cash, a ₹1 revenue stamp must be affixed and signed across under the Indian Stamp Act.
            </p>
          </div>
        </div>

        {/* Chapter 1: When is Landlord PAN Mandatory? */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            1. The ₹1,00,000 Annual Rent Rule (CBDT Circular No. 8/2013)
          </h2>
          <p>
            Under circulars issued by the Central Board of Direct Taxes (CBDT), any salaried employee claiming House Rent Allowance exemption whose annual rent paid exceeds <strong>₹1,00,000 per financial year</strong> (equivalent to ₹8,333 per month) is statutorily required to report the <strong>Permanent Account Number (PAN)</strong> of the landlord to the employer in Form 12BB.
          </p>
          <p>
            <strong>Why did the government introduce this rule?</strong> Historically, individuals submitted fabricated rent receipts without landlords ever reporting the rental income in their tax returns. By matching the landlord&apos;s PAN, the Income Tax Department automatically verifies whether the rental receipts declared in Form 12BB correlate with &quot;Income from House Property&quot; reported in the landlord&apos;s Annual Information Statement (AIS) and Form 26AS.
          </p>
        </section>

        {/* Chapter 2: What if Landlord Has No PAN? */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            2. What to Do If Your Landlord Does Not Have a PAN?
          </h2>
          <p>
            If your landlord does not possess a PAN card (for example, a senior citizen or agriculturalist whose total annual income falls below the statutory basic tax exemption limit), the law provides a legal alternative:
          </p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <span className="text-xs font-bold text-slate-900 block">
              The Form 60 Self-Declaration Procedure:
            </span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Rule 114B of the Income Tax Rules, the landlord can provide a signed declaration in <strong>Form 60</strong> stating their identity, permanent residential address, and certifying that their agricultural or total income is below taxable limits. When submitted alongside your rent receipts, employers are legally authorized to process your full HRA claim.
            </p>
          </div>
          <p>
            <strong>What if the landlord simply refuses to share their PAN?</strong> If the landlord possesses a PAN but refuses to disclose it, your employer will restrict your HRA exemption to the ₹1,00,000 annual cap. However, you can still claim your complete Section 10(13A) exemption when filing your annual ITR by reporting the landlord&apos;s full name and rental address. Note that this may trigger automated computational verification from the Centralized Processing Center (CPC).
          </p>
        </section>

        {/* High-Margin In-Article Ad Unit */}
        <div className="my-8 pt-2">
          <AdSlot type="in-article" />
        </div>

        {/* Chapter 3: Section 194-IB TDS on Rent */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            3. Mandatory TDS on Rent Exceeding ₹50,000/Month (Section 194-IB)
          </h2>
          <p>
            If you pay rent exceeding <strong>₹50,000 per month</strong> (or part of a month) for residential or commercial property, you are legally responsible for deducting Tax Deducted at Source (TDS) under <strong>Section 194-IB</strong> of the Income Tax Act.
          </p>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2 text-xs text-slate-700">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Section 194-IB Compliance Checklist for Tenants:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong>TDS Rate:</strong> 5% of total annual rent (temporarily reduced to 2% under recent Finance Act rationalizations).</li>
              <li><strong>When to Deduct:</strong> Once per financial year, deducted from the rent payment of the last month of the financial year (March), or the last month of tenancy if vacating earlier.</li>
              <li><strong>No TAN Required:</strong> You do NOT need a Tax Deduction Account Number (TAN). The deduction is executed using your personal PAN.</li>
              <li><strong>Filing Form 26QC:</strong> Deposit the deducted tax online via the Income Tax portal using Challan-cum-statement <strong>Form 26QC</strong> within 30 days of the end of the month in which deduction was made.</li>
              <li><strong>Issuing Form 16C:</strong> Download certificate Form 16C from TRACES within 15 days of filing Form 26QC and furnish it to your landlord.</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500">
            <strong>Penalties for Non-Compliance:</strong> Failure to deduct TDS incurs interest at 1% per month under Section 201(1A), plus a fee of ₹200 per day under Section 234E for delayed filing of Form 26QC.
          </p>
        </section>

        {/* Chapter 4: Tenant Rights Under Indian Law */}
        <section className="space-y-4 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            4. Statutory Tenant Rights Under the Model Tenancy Act
          </h2>
          <p>
            Under the Model Tenancy Act and regional State Rent Control legislations across India, tenants enjoy defined legal safeguards:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="font-bold text-slate-900 block">
                Right to Written Rent Receipts
              </span>
              <p className="text-slate-600 leading-normal">
                Landlords are legally obligated to issue signed rent receipts for all rent received. Refusal to provide receipts constitutes an actionable statutory breach.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="font-bold text-slate-900 block">
                Security Deposit Cap
              </span>
              <p className="text-slate-600 leading-normal">
                Under the Model Tenancy Act, residential security deposits are capped at a maximum of two months&apos; rent, refundable upon tenancy termination.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="font-bold text-slate-900 block">
                24-Hour Notice for Entry
              </span>
              <p className="text-slate-600 leading-normal">
                Landlords or their agents cannot enter the leased premises without providing at least 24 hours&apos; prior written or electronic notice.
              </p>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <span className="font-bold text-slate-900 block">
                Essential Services Protection
              </span>
              <p className="text-slate-600 leading-normal">
                Landlords cannot sever water supply, electricity, or lift access during rent disputes. Evictions must proceed through designated Rent Courts.
              </p>
            </div>
          </div>
        </section>

        {/* Action CTAs */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-slate-900">
            Generate Compliant Rent Records Now
          </h3>
          <p className="text-xs text-slate-600">
            Create official landlord receipts formatted with PAN declarations and digital signature verification:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setActivePage('rent-receipt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-xs transition-colors cursor-pointer"
            >
              <span>Generate Rent Receipts</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                setActivePage('hra-calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-xs sm:text-sm border border-slate-300 transition-colors cursor-pointer"
            >
              <span>Launch HRA Calculator</span>
            </button>
          </div>
        </div>

        {/* E-E-A-T Editorial Box */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
            <span className="font-semibold text-slate-900">
              RentReceipt.online Legal &amp; Taxation Standards Desk
            </span>
            <span className="text-slate-500 font-medium">
              Statutory references: CBDT Circular 8/2013, Income Tax Act Sec 194-IB
            </span>
          </div>
          <p className="text-slate-600 leading-relaxed">
            <strong>Legal Notice:</strong> This handbook is published for general public informational reference and does not constitute formal legal counsel or advocate representation. Tenancy regulations vary by municipal jurisdiction. For legal disputes or eviction proceedings, consult an enrolled legal advocate.
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
