import React, { useState } from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  FileX,
  Scale,
  Calendar,
  CreditCard,
  FileCheck,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  HelpCircle,
  ExternalLink,
  Search,
  Eye,
  FileText,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { NewWindowToolCta } from '../components/NewWindowToolCta';

interface BlogFakeRentReceiptsPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const BlogFakeRentReceiptsPage: React.FC<BlogFakeRentReceiptsPageProps> = ({ setActivePage }) => {
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
      q: 'Can the Income Tax Department verify if my landlord actually owns the house?',
      a: 'Yes. The Income Tax Department has integrated its databases with state land registration authorities, municipal property tax registries, and electricity board connections. Through computerized data mining, Assessing Officers can instantly see whether a PAN owns the property listed on your rent receipt.',
    },
    {
      q: 'What is the penalty under Section 270A for claiming fake HRA?',
      a: 'If the tax officer determines that you claimed fake HRA by fabricating receipts without actual tenancy, it is classified as "misreporting of income." Under Section 270A(8) and (9), the penalty is 200% of the tax payable on the under-reported income, in addition to the principal tax and interest under Section 234A/B/C.',
    },
    {
      q: 'Can I file an Updated Return (ITR-U) to rectify an incorrect HRA claim?',
      a: 'Yes. Under Section 139(8A), you can file an Updated Return (ITR-U) within 24 months from the end of the relevant assessment year to declare any disallowed HRA and pay the differential tax along with an additional tax of 25% to 50%, avoiding Section 270A misreporting prosecution.',
    },
    {
      q: 'What if my landlord refused to share their PAN and I used a random PAN?',
      a: 'Using a fictitious or random PAN is a criminal offense under the Indian Penal Code (forgery/fraud) and Section 277 of the Income Tax Act. If your landlord does not have a PAN, obtain a signed Form 60 declaration instead of inputting an invalid PAN.',
    },
    {
      q: 'Does paying rent in cash protect me from scrutiny?',
      a: 'No. Cash payments are subject to heightened scrutiny. If you pay rent in cash, you must maintain matching bank withdrawal statements, and every receipt exceeding ₹5,000 must bear an authenticated ₹1 revenue stamp.',
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
          Fake Rent Receipt Notices &amp; AIS Verification
        </span>
      </nav>

      {/* Article Header */}
      <header className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-200">
            <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
            <span>Income Tax Scrutiny &amp; Compliance</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
            <Calendar className="w-3 h-3" />
            <span>Updated: FY 2026-27 / AY 2027-28</span>
          </span>
          <span className="text-xs text-slate-500 font-medium ml-auto">
            ⏱️ 8 min read
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Income Tax Notice for Fake Rent Receipts: AIS Verification, Section 270A Penalties &amp; How to Respond
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
          How the Central Board of Direct Taxes (CBDT) automated data-mining algorithms cross-reference HRA claims in Form 16 against landlord ITRs, what triggers scrutiny notices, and your legal rights to respond.
        </p>

        {/* E-E-A-T Author & Reviewer Attribution */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-sm">
              IT
            </div>
            <div>
              <p className="font-bold text-slate-900">Tax Scrutiny Research Desk</p>
              <p className="text-slate-500">Grounded in CBDT Circulars &amp; Faceless Assessment Proceedings</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-xl border border-slate-200 font-medium">
            <Scale className="w-4 h-4 text-slate-600" />
            <span>Income Tax Act §§ 143(1), 148 &amp; 270A</span>
          </div>
        </div>
      </header>

      {/* New Window Tool CTA */}
      <NewWindowToolCta
        title="Need 100% Audit-Proof Rent Receipts?"
        description="Generate formatted receipts with genuine verification codes, landlord PAN validation, and proper payment reference numbers. Opens in a new tab."
        variant="banner"
      />

      {/* Article Body Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 text-base leading-relaxed">
        
        {/* Warning Callout Box */}
        <section className="bg-red-50/70 border border-red-200 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-red-950 flex items-center gap-2 mb-2">
            <FileX className="w-5 h-5 text-red-600" />
            <span>CBDT 360-Degree Automated Scrutiny Reality</span>
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            The era of submitting handwritten fake receipts bought from local stationery shops or online PDF templates without real tenancy is officially over. Today, the Income Tax Department uses <strong>Project Insight</strong> and the <strong>Annual Information Statement (AIS)</strong> to cross-match tenant deductions with landlord tax returns automatically.
          </p>
        </section>

        {/* Section 1: How AIS Cross-Checks HRA Claims */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            1. How the AIS &amp; TIS Cross-Check Your HRA Claims
          </h2>
          <p>
            When an employee submits Form 12BB to their employer claiming HRA with rent exceeding ₹1,00,000 annually, the employer files quarterly TDS returns (Form 24Q). In Form 24Q (Annexure II), the employer transmits:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-sm bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800">
            <li><strong>Tenant PAN &amp; Name</strong> (The employee)</li>
            <li><strong>Total Rent Paid</strong> (Exemption claimed under Section 10(13A))</li>
            <li><strong>Landlord PAN &amp; Name</strong></li>
            <li><strong>Rented Property Address</strong></li>
          </ul>
          <p>
            The moment this data hits the Income Tax Central Processing Centre (CPC) in Bengaluru, the automated system runs an instant query on the <strong>Landlord's PAN</strong>:
          </p>
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-blue-950 text-sm">
              <Search className="w-4 h-4 text-blue-600" />
              <span>The Computerized Mismatch Trigger</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              Does the landlord&apos;s ITR show rental income under <em>Schedule HP (Income from House Property)</em> equal to or greater than the rent reported by the tenant? If the landlord reported ₹0 rental income or did not file an ITR at all, an automated red flag is generated under the e-Campaign compliance portal.
            </p>
          </div>
        </section>

        {/* AdSlot Compliant In-Article Placement */}
        <AdSlot type="in-article" />

        {/* Section 2: Top 5 Red Flags That Trigger Scrutiny Notices */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            2. The 5 Red Flags That Trigger CASS Scrutiny Notices
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">!</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Rent Exactly ₹8,333 / Month (₹99,996 / Year)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Tax algorithms specifically target rent figures just below the ₹1 Lakh PAN threshold (e.g., ₹8,300/mo or ₹8,330/mo). CPC software automatically flags these accounts for random sample audits.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">!</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Geographic Impossibility / Different Cities</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Claiming rent in Pune or Bengaluru while the employer&apos;s physical office is in Gurugram, without an explicit work-from-home (WFH) contract or travel logs, is flagged as high-risk.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">!</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Landlord Denies Tenancy in Response to Department Letter</h4>
                <p className="text-xs text-slate-600 mt-1">
                  If the tax department issues an inquiry under Section 133(6) to the landlord whose PAN you provided, and that person replies &ldquo;I never rented my property to this person,&rdquo; criminal forgery penalties apply immediately.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">!</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Zero Bank Withdrawals Matching Cash Receipts</h4>
                <p className="text-xs text-slate-600 mt-1">
                  If you claim to pay ₹25,000 in cash every month, but your bank statement shows no corresponding cash withdrawals around the rent payment date, the assessing officer will reject the claim.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">!</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Spouse Quoted as Landlord</h4>
                <p className="text-xs text-slate-600 mt-1">
                  As established by ITAT judgments, paying rent to a spouse violates Section 64 (Clubbing of Income) and is rejected outright in faceless assessments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Statutory Penalties Breakdown */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            3. The Cost of Fake Claims: Section 270A &amp; Interest Calculations
          </h2>
          <p>
            When fake rent receipts are disallowed during assessment proceedings, the financial impact includes:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th className="p-3 border border-slate-200">Statutory Charge</th>
                  <th className="p-3 border border-slate-200">Legal Section</th>
                  <th className="p-3 border border-slate-200">Financial Consequence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Principal Tax Demand</td>
                  <td className="p-3 text-slate-600 font-mono">§ 143(1) / § 147</td>
                  <td className="p-3 text-slate-800 font-medium">30% slab rate + 4% cess on disallowed rent</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Section 270A Misreporting Penalty</td>
                  <td className="p-3 text-red-600 font-mono font-bold">§ 270A(8)/(9)</td>
                  <td className="p-3 text-red-700 font-bold">200% of the tax payable on misreported income</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Delay &amp; Default Interest</td>
                  <td className="p-3 text-slate-600 font-mono">§ 234A, 234B, 234C</td>
                  <td className="p-3 text-slate-800 font-medium">1% per month simple interest until full recovery</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Employer Disciplinary Action</td>
                  <td className="p-3 text-slate-600">Company Code of Conduct</td>
                  <td className="p-3 text-slate-800 font-medium">Termination or withholding of bonus for tax fraud</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Interactive CTA to Open Form 12BB & HRA Calculator in New Window */}
        <aside aria-label="Interactive Tools" className="my-6 p-6 rounded-2xl bg-gradient-to-r from-red-900 via-slate-900 to-blue-950 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Audit-Proof Your Form 12BB Submission</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Review standard employer proof requirements before submitting declarations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => openInNewWindow('form-12bb')}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all inline-flex items-center gap-1.5 cursor-pointer group"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Form 12BB Guide (New Tab)</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => openInNewWindow('rent-receipt')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Valid Receipts (New Tab)</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </aside>

        {/* Section 4: What to Do If You Received a Notice */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            4. Step-by-Step Action Plan: If You Received an Income Tax Notice
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">Scenario A</span>
              <h4 className="text-base font-bold text-slate-900 mt-2">The Claim is Legitimate</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Log into <em>eportal.incometax.gov.in</em> and submit:
              </p>
              <ul className="text-xs text-slate-700 list-disc list-inside mt-2 space-y-1">
                <li>Copy of Registered or Notarized Rent Agreement</li>
                <li>Numbered Rent Receipts with Revenue Stamps</li>
                <li>Bank Account statement highlighting rent debits</li>
                <li>Confirmation letter from landlord confirming receipt</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">Scenario B</span>
              <h4 className="text-base font-bold text-slate-900 mt-2">The Claim was Inaccurate or Fake</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Do NOT submit forged documents to the Assessing Officer. Instead:
              </p>
              <ul className="text-xs text-slate-700 list-disc list-inside mt-2 space-y-1">
                <li>File an <strong>Updated Return (ITR-U)</strong> under Section 139(8A)</li>
                <li>Withdraw the invalid HRA claim voluntarily</li>
                <li>Pay the differential tax + statutory penalty fee (25-50%)</li>
                <li>Obtain immunity from criminal prosecution</li>
              </ul>
            </div>
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
          <h3 className="text-lg font-bold text-slate-900 mb-4">Explore More Tax Strategy Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Rent to Parents Guide</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Legal ITAT judgments</p>
            </a>

            <a
              href="#blog-rent-agreement-vs-receipt"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('blog-rent-agreement-vs-receipt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/40 transition-colors text-left cursor-pointer group"
            >
              <Scale className="w-4 h-4 text-indigo-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600">Agreement vs Receipt</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Which one does HR need?</p>
            </a>

            <a
              href="#blog-section-80gg"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('blog-section-80gg');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors text-left cursor-pointer group"
            >
              <FileText className="w-4 h-4 text-emerald-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-600">Section 80GG Guide</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Claim rent without HRA</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA Card */}
      <div className="mt-8">
        <NewWindowToolCta
          title="Create Fully Stamped, Verifiable Rent Receipts"
          description="Protect your tax deductions with verified QR receipts, revenue stamps, and exact transaction IDs. Opens in a new tab."
          variant="card"
          onNavigateInternal={setActivePage}
        />
      </div>
    </article>
  );
};
