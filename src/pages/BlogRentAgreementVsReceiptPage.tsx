import React, { useState } from 'react';
import {
  Scale,
  ShieldCheck,
  CheckCircle2,
  Receipt,
  FileText,
  Calendar,
  Building,
  CreditCard,
  FileCheck,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  HelpCircle,
  ExternalLink,
  MapPin,
  Stamp,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { NewWindowToolCta } from '../components/NewWindowToolCta';

interface BlogRentAgreementVsReceiptPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const BlogRentAgreementVsReceiptPage: React.FC<BlogRentAgreementVsReceiptPageProps> = ({ setActivePage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const openInNewWindow = (hash: string) => {
    const url = `${window.location.origin}/#${hash}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'Can my employer reject HRA if I only submit rent receipts without an agreement?',
      a: 'If your annual rent is under ₹1,00,000, Income Tax Rule 26C does not strictly mandate a rent agreement if valid stamped receipts are submitted. However, most corporate payroll policies require an agreement if rent exceeds ₹8,333/month or if the employee pays rent to a relative.',
    },
    {
      q: 'Why are rental agreements in India typically executed for 11 months?',
      a: 'Under Section 17 of the Registration Act, 1908, leases of immovable property for any term exceeding one year (12 months or more) must be compulsorily registered with the Sub-Registrar. To avoid cumbersome sub-registrar visits and high registration charges, parties execute 11-month Leave & License agreements.',
    },
    {
      q: 'Does an electronic rent receipt need a physical revenue stamp?',
      a: 'For payments made via electronic banking channels (UPI, IMPS, NEFT), judicial tribunals hold that electronic bank debits constitute primary proof of consideration. However, affixing a ₹1 revenue stamp with the landlord\'s cross-signature provides definitive legal protection under Article 53 of the Indian Stamp Act, 1899.',
    },
    {
      q: 'Can I create both rent receipts and affidavits on RentReceipt.online?',
      a: 'Yes! You can generate monthly/quarterly rent receipts with automated QR verification and also generate standard Landlord PAN affidavits (Form 60) directly in your browser with zero data stored.',
    },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('home');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <span>/</span>
        <a
          href="#resources"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('resources');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Resources
        </a>
        <span>/</span>
        <a
          href="#blog"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('blog');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Blog
        </a>
        <span>/</span>
        <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">
          Rent Agreement vs Rent Receipt
        </span>
      </nav>

      {/* Article Header */}
      <header className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            <Scale className="w-3.5 h-3.5 text-amber-600" />
            <span>Legal Documentation &amp; Tenancy Law</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
            <Calendar className="w-3 h-3" />
            <span>Updated: FY 2026-27 / AY 2027-28</span>
          </span>
          <span className="text-xs text-slate-500 font-medium ml-auto">
            ⏱️ 7 min read
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Rent Agreement vs Rent Receipt: Key Differences, State Stamp Duty &amp; Employer Requirements
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
          Demystifying the legal roles of Tenancy Agreements and Monthly Rent Receipts under the Transfer of Property Act and Income Tax Section 10(13A). Learn which documents HR actually requires.
        </p>

        {/* E-E-A-T Author & Reviewer Attribution */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
              LE
            </div>
            <div>
              <p className="font-bold text-slate-900">Legal &amp; Tenancy Documentation Desk</p>
              <p className="text-slate-500">Indian Stamp Act, 1899 &amp; Registration Act, 1908 Review</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 text-amber-900 px-3 py-1.5 rounded-xl border border-amber-200 font-medium">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Indian Contract Act &amp; Rule 26C Validated</span>
          </div>
        </div>
      </header>

      {/* New Window Tool CTA Banner */}
      <NewWindowToolCta
        title="Need Compliant Rent Receipts Right Now?"
        description="Generate formatted rent receipts with revenue stamps and verification QR codes. Opens in a new tab so you don't lose your spot in this guide."
        variant="banner"
      />

      {/* Article Body Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 text-base leading-relaxed">
        
        {/* Executive Summary */}
        <section className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
            <BookmarkCheck className="w-5 h-5 text-amber-600" />
            <span>The Fundamental Distinction in 30 Seconds</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div className="p-3.5 bg-white rounded-xl border border-amber-200/80">
              <p className="text-xs font-bold text-amber-900 uppercase">Rent Agreement (Contract)</p>
              <p className="text-xs text-slate-600 mt-1">
                Establishes the legal relationship, tenancy conditions, monthly rate, security deposit, and lock-in period. Proves an intent to rent.
              </p>
            </div>
            <div className="p-3.5 bg-white rounded-xl border border-amber-200/80">
              <p className="text-xs font-bold text-blue-900 uppercase">Rent Receipt (Voucher)</p>
              <p className="text-xs text-slate-600 mt-1">
                Acknowledges financial consideration received for a specific calendar month. Proves actual monetary discharge of rent obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Detailed Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            1. Comprehensive Side-by-Side Comparison
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th className="p-3 border border-slate-200">Legal Parameter</th>
                  <th className="p-3 border border-slate-200">Rent Agreement</th>
                  <th className="p-3 border border-slate-200">Rent Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Governing Statute</td>
                  <td className="p-3 text-slate-800">Transfer of Property Act, 1882 &amp; Contract Act</td>
                  <td className="p-3 text-slate-800">Indian Stamp Act, 1899 &amp; IT Act § 10(13A)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Signatories</td>
                  <td className="p-3 text-slate-800">Both Landlord AND Tenant (+ 2 Witnesses)</td>
                  <td className="p-3 text-blue-700 font-bold">Landlord Only (Payee acknowledgement)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Stamp Duty Requirement</td>
                  <td className="p-3 text-slate-800">State non-judicial stamp paper (₹100 to 0.5%)</td>
                  <td className="p-3 text-amber-700 font-bold">₹1 Revenue Stamp (if &gt; ₹5,000 cash)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Frequency of Creation</td>
                  <td className="p-3 text-slate-800">Once per tenancy tenure (usually 11 months)</td>
                  <td className="p-3 text-slate-800">Every month or consolidated quarterly</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">HR / Form 12BB Proof</td>
                  <td className="p-3 text-slate-800">Proves agreed rent &amp; tenancy terms</td>
                  <td className="p-3 text-emerald-700 font-bold">Proves actual payment was executed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* AdSlot Compliant In-Article Placement */}
        <AdSlot type="in-article" />

        {/* Section 2: State-by-State Stamp Duty Breakdown */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            2. State-by-State Stamp Duty Norms in India
          </h2>
          <p>
            Stamp duty rates for rental agreements vary significantly across Indian states:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="text-xs font-bold text-blue-700">Maharashtra</span>
              <h4 className="text-sm font-bold text-slate-900">0.25% of Total Rent + Deposit</h4>
              <p className="text-xs text-slate-600">
                Mandatory biometric e-registration. Flat fee of ₹1,000 for urban municipal areas and ₹500 for rural areas.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="text-xs font-bold text-blue-700">Karnataka (Bengaluru)</span>
              <h4 className="text-sm font-bold text-slate-900">0.5% - 1% or e-Stamp Paper</h4>
              <p className="text-xs text-slate-600">
                11-month agreements are commonly executed on ₹100 or ₹200 e-stamp paper plus notarization.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="text-xs font-bold text-blue-700">Delhi (NCR)</span>
              <h4 className="text-sm font-bold text-slate-900">2% for Men / 1% for Women (Registered)</h4>
              <p className="text-xs text-slate-600">
                For standard 11-month non-registered contracts, execution on ₹100 non-judicial stamp paper is standard.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1">
              <span className="text-xs font-bold text-blue-700">Haryana (Gurugram)</span>
              <h4 className="text-sm font-bold text-slate-900">1.5% to 3% for Leases</h4>
              <p className="text-xs text-slate-600">
                11-month tenancy agreements are typically printed on ₹100 e-stamp paper and notarized.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: When Do Employers Demand Which Document? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            3. What Does Employer HR &amp; Payroll Demand for Form 12BB?
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Rent &lt; ₹3,000 / Month</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Under Rule 26C, self-declaration in Form 12BB is usually accepted by employers without physical rent receipts.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Rent Between ₹3,000 and ₹8,333 / Month</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Monthly or quarterly signed rent receipts are mandatory. Rent agreement is optional but recommended.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Rent &gt; ₹8,333 / Month (Exceeding ₹1,00,000 / Year)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Mandatory Landlord PAN reporting + signed Rent Receipts. Most corporate policies also mandate a signed Rent Agreement copy.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-800 font-bold text-xs flex items-center justify-center shrink-0">4</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Rent &gt; ₹50,000 / Month (Section 194-IB TDS)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Tenant must deduct 5% TDS under Section 194-IB, file Form 26QC, and provide Form 16C certificate to the landlord in addition to receipts and agreement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Revenue Stamp Rules */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            4. The ₹1 Revenue Stamp: When Is It Legally Obligatory?
          </h2>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 leading-relaxed">
            <p>
              Under <strong>Article 53 of Schedule I of the Indian Stamp Act, 1899</strong>:
            </p>
            <blockquote className="my-2 p-3 bg-white rounded-xl border border-slate-200 italic font-medium text-slate-800">
              "Any receipt for any money or other property exceeding five thousand rupees (₹5,000) given for or upon the payment of money... shall be chargeable with a stamp-duty of one rupee."
            </blockquote>
            <p>
              The landlord must sign or cross across the face of the ₹1 revenue stamp so that part of the signature is on the stamp and part on the paper receipt. This invalidates the stamp from reuse and provides evidentiary standing under the Indian Evidence Act.
            </p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white">
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Interlinks */}
        <section className="pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Related Legal &amp; Tax Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="#landlord-pan"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('landlord-pan');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/40 transition-colors text-left cursor-pointer group"
            >
              <ShieldCheck className="w-4 h-4 text-indigo-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Landlord PAN Mandate</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Section 194-IB TDS limits</p>
            </a>

            <a
              href="#blog-rent-to-parents"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('blog-rent-to-parents');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-colors text-left cursor-pointer group"
            >
              <CreditCard className="w-4 h-4 text-blue-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Rent to Parents</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Agreements between family</p>
            </a>

            <a
              href="#form-12bb"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('form-12bb');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors text-left cursor-pointer group"
            >
              <FileCheck className="w-4 h-4 text-emerald-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-600">Form 12BB Playbook</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Employer proof checklist</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA Card */}
      <div className="mt-8">
        <NewWindowToolCta
          title="Create Your Legal Rent Receipts in Seconds"
          description="Generate clean, professionally formatted rent receipts ready for revenue stamp and HR verification. Opens in a new tab."
          variant="card"
          onNavigateInternal={setActivePage}
        />
      </div>
    </article>
  );
};
