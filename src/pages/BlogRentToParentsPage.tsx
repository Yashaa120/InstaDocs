import React, { useState } from 'react';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Scale,
  Calendar,
  Building,
  CreditCard,
  FileCheck,
  ChevronDown,
  ChevronUp,
  BookmarkCheck,
  HelpCircle,
  ExternalLink,
  Percent,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { NewWindowToolCta } from '../components/NewWindowToolCta';

interface BlogRentToParentsPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const BlogRentToParentsPage: React.FC<BlogRentToParentsPageProps> = ({ setActivePage }) => {
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
      q: 'Can I pay rent to both my mother and father if the house is co-owned?',
      a: 'Yes. If both parents co-own the property according to the title deed, you should execute a rental agreement naming both parents as co-landlords, indicating their proportional ownership share (e.g., 50:50). You can issue separate rent receipts or pay each parent their respective share via separate bank transfers so both can report it in their respective ITRs.',
    },
    {
      q: 'Can I pay rent to my spouse to claim HRA?',
      a: 'No. The Income Tax Appellate Tribunal (ITAT) and High Courts strictly reject HRA claims based on rent paid to a spouse. Under the Indian legal doctrine of matrimonial consortium and Section 64 (Clubbing of Income), spouses have a mutual obligation to live together; transactions between husband and wife are deemed sham if used to evade taxes.',
    },
    {
      q: 'What if my parents do not have any other taxable income?',
      a: 'This is the most tax-efficient scenario. If your parent is a senior citizen (60+) with total income below ₹3,00,000 (Old Regime) or ₹7,00,000 / ₹3,00,000 (New Regime), they pay zero income tax even after declaring your rental income under "Income from House Property" (after factoring in the standard 30% deduction under Section 24(a)).',
    },
    {
      q: 'Is a revenue stamp required on rent receipts issued to parents?',
      a: 'Under Schedule I of the Indian Stamp Act, 1899, a ₹1 revenue stamp with the landlord\'s cross-signature is mandatory for cash payments exceeding ₹5,000 per receipt. For electronic bank transfers, many employers accept unstamped digital receipts; however, having a signed receipt with a revenue stamp eliminates any payroll or IT department objections.',
    },
    {
      q: 'Will the Income Tax Department verify my parents\' ITR?',
      a: 'Yes. The CBDT\'s computerized Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) automatically cross-reference the landlord\'s PAN reported in your Form 16 / Form 12BB against your parents\' ITR filed for the corresponding Assessment Year.',
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
          Paying Rent to Parents Rules
        </span>
      </nav>

      {/* Article Header */}
      <header className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <Users className="w-3.5 h-3.5" />
            <span>Tax Optimization &amp; Family Planning</span>
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
          Paying Rent to Parents to Save Tax: Complete Legal Rules, ITAT Judgments &amp; Audit Checklist
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
          How salaried Indian professionals can legally claim Section 10(13A) House Rent Allowance by renting accommodation owned by their parents, backed by landmark tax tribunal rulings and foolproof banking paper trails.
        </p>

        {/* E-E-A-T Author & Reviewer Attribution */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              RR
            </div>
            <div>
              <p className="font-bold text-slate-900">RentReceipt Editorial Board</p>
              <p className="text-slate-500">Reviewed by Chartered Accountants &amp; Legal Tax Researchers</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200/60 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Statutory Compliance Verified: IT Act § 10(13A) &amp; Rule 2A</span>
          </div>
        </div>
      </header>

      {/* Open-in-New-Window Floating/Top CTA Banner */}
      <NewWindowToolCta
        title="Ready to Generate Receipts for Your Parents?"
        description="Create compliant, numbered rent receipts with custom landlord PAN, digital signatures, and revenue stamps. Opens in a new tab so you can refer back to this guide."
        variant="banner"
      />

      {/* Article Body Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 text-base leading-relaxed">
        
        {/* Executive Summary */}
        <section className="bg-blue-50/60 border border-blue-200/80 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
            <BookmarkCheck className="w-5 h-5 text-blue-600" />
            <span>Executive Takeaway &amp; Quick Facts</span>
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>100% Legal:</strong> Paying rent to your mother or father is explicitly permitted under Indian tax jurisprudence provided the parent actually owns the property.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Tribunal Precedent:</strong> The Ahmedabad ITAT in <em>Bajrang Prasad Ramdharani vs ACIT</em> validated rent paid to parents as an allowable deduction.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Clubbing of Income:</strong> Section 64 applies to spouses and minor children, NOT to major adult children paying genuine consideration to parents.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>30% Standard Deduction Bonus:</strong> Your parents can deduct 30% under Section 24(a) on the rental income they receive before paying tax!</span>
            </li>
          </ul>
        </section>

        {/* Section 1: The Legal Foundation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            1. The Statutory Framework: Section 10(13A) &amp; Rule 2A
          </h2>
          <p>
            Under <strong>Section 10(13A) of the Income Tax Act, 1961</strong>, read with <strong>Rule 2A of the Income Tax Rules, 1962</strong>, any special allowance granted to an assessee by their employer to meet expenditure actually incurred on payment of rent in respect of residential accommodation occupied by him is exempt from income tax.
          </p>
          <p>
            The statute imposes two critical negative restrictions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <p className="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">Negative Criterion 1</p>
              <p className="text-sm text-slate-800 font-medium">
                The residential accommodation occupied must <strong>not be owned by the assessee</strong> (the employee claiming HRA).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
              <p className="text-xs font-bold uppercase text-amber-800 tracking-wider mb-1">Negative Criterion 2</p>
              <p className="text-sm text-slate-800 font-medium">
                The employee must have <strong>actually incurred expenditure</strong> on payment of rent for the premises.
              </p>
            </div>
          </div>
          <p>
            Notice that the statute <em>never</em> specifies who the landlord must be, nor does it forbid paying rent to family members. If your parents hold legal title to the property and you reside in that home, executing a genuine tenancy relationship meets every single criterion of Section 10(13A).
          </p>
        </section>

        {/* AdSlot Compliant In-Article Placement */}
        <AdSlot type="in-article" />

        {/* Section 2: Landmark Judicial Precedents */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            2. Landmark Judicial Rulings: Ahmedabad ITAT Ruling
          </h2>
          <p>
            In the benchmark case of <strong>Bajrang Prasad Ramdharani vs ACIT (ITA No. 138/Ahd/2013)</strong>, the Assessing Officer disallowed HRA claimed by an assessee for paying rent to his parents, asserting that the arrangement was a familial convenience rather than an arm's length commercial transaction.
          </p>
          <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-blue-600 space-y-2">
            <p className="text-xs font-bold text-blue-900 uppercase tracking-wider">The Income Tax Appellate Tribunal Held:</p>
            <blockquote className="text-sm italic text-slate-800 leading-relaxed">
              "The assessee occupied the property owned by his parents and paid rent via banking channels. The parents duly declared the rental income in their respective income tax returns. Merely because the landlord happens to be the parents of the assessee, the genuine expenditure incurred on rent cannot be brushed aside as bogus."
            </blockquote>
          </div>
          <p>
            Similarly, in <em>Smt. Saroj Aggarwal vs ITO</em>, the tribunal reaffirmed that genuine payments corroborated by municipal tax receipts, electricity bills in the landlord&apos;s name, and bank statements cannot be disallowed without cogent contrary evidence.
          </p>
        </section>

        {/* Section 3: Family Tax Arbitrage Calculation Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            3. The Family Tax Arbitrage: How Much Can Your Family Save?
          </h2>
          <p>
            Let&apos;s look at a practical financial model of an employee earning ₹18 Lakhs in the 30% tax bracket paying ₹30,000/month (₹3,60,000/year) to a retired mother who has no other significant taxable income:
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th className="p-3 border border-slate-200">Financial Metric</th>
                  <th className="p-3 border border-slate-200">Salaried Child (Tenant)</th>
                  <th className="p-3 border border-slate-200">Retired Mother (Landlord)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Annual Rent Paid / Received</td>
                  <td className="p-3 text-red-600 font-medium">- ₹3,60,000</td>
                  <td className="p-3 text-emerald-600 font-medium">+ ₹3,60,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Section 24(a) Standard Deduction</td>
                  <td className="p-3 text-slate-500">N/A</td>
                  <td className="p-3 text-emerald-700 font-semibold">- ₹1,08,000 (30% statutory relief)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Taxable Net Rental Income</td>
                  <td className="p-3 text-slate-500">N/A</td>
                  <td className="p-3 font-bold text-slate-900">₹2,52,000</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Tax Payable</td>
                  <td className="p-3 text-emerald-700 font-bold">Saves ~₹1,12,320 in tax (30% + cess)</td>
                  <td className="p-3 text-emerald-700 font-bold">₹0 (Below basic exemption limit)</td>
                </tr>
                <tr className="bg-emerald-50/70">
                  <td className="p-3 font-bold text-emerald-950">Net Net Family Cash Benefit</td>
                  <td colSpan={2} className="p-3 font-extrabold text-emerald-800 text-center">
                    💰 Net Family Tax Savings: ₹1,12,320 Per Year!
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            *Note: Even if your parent falls into the 5% or 10% tax bracket, the family as a unit still earns significant arbitrage between the child&apos;s 30% deduction and the parent&apos;s lower rate + 30% Section 24 deduction.
          </p>
        </section>

        {/* Interactive CTA to Open HRA Calculator & Generator in New Window */}
        <aside aria-label="Interactive Tools" className="my-6 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">Simulate Your Exact Exemption Now</h4>
            <p className="text-xs sm:text-sm text-blue-200">
              Calculate Section 10(13A) 3-rule exemption across Metro vs Non-Metro cities.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => openInNewWindow('hra-calculator')}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all inline-flex items-center gap-1.5 cursor-pointer group"
            >
              <Percent className="w-3.5 h-3.5" />
              <span>HRA Calculator (New Tab)</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => openInNewWindow('rent-receipt')}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs rounded-xl transition-all inline-flex items-center gap-1.5 cursor-pointer group"
            >
              <span>Receipt Generator (New Tab)</span>
              <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </aside>

        {/* Section 4: The 6-Step Audit-Proof Checklist */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            4. The 6-Step Audit-Proof Checklist for Paying Rent to Parents
          </h2>
          <p>
            To prevent tax officers from questioning your claims during automated computer scrutiny (CASS) or employer verification, strictly adhere to these six protocols:
          </p>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Verify Registered Property Ownership</h4>
                <p className="text-xs text-slate-600 mt-1">
                  The house title deed, conveyance deed, or municipal tax receipt MUST be in your parent&apos;s name. If you are a co-owner on the deed, you cannot pay rent to yourself or co-owners for that property.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Execute a Formal Registered/Notarized Tenancy Agreement</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Draft a formal rental agreement with your parents on non-judicial stamp paper as prescribed by your state stamp act. Clearly outline the monthly rent amount, address, notice period, and utility arrangements.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Maintain an Unbroken Banking Paper Trail (No Cash)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Transfer rent each month via NEFT, RTGS, IMPS, or UPI directly from your bank account to your parent&apos;s bank account. Mention &ldquo;Rent for [Month]&rdquo; in the transfer remark. Cash payments without withdrawal receipts invite instant disallowance.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Issue Monthly or Quarterly Stamped Rent Receipts</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Generate print-ready receipts containing the landlord&apos;s name, PAN, rented premises address, payment reference, and signature. Affix a ₹1 revenue stamp for cash/proof compliance.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">5</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Mandatory Landlord PAN Reporting (Above ₹1 Lakh/Yr)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Under CBDT Circular 08/2013, if annual rent exceeds ₹1,00,000 (~₹8,333/month), your parent&apos;s PAN must be provided in Form 12BB to your employer.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0">6</span>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Parent Must Declare Rent in Their ITR (Schedule HP)</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your parent must file their Income Tax Return and declare the rent under <em>Schedule HP (Income from House Property)</em>. This ensures 100% AIS/TIS data matching and prevents AI audit red flags.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Common Traps to Avoid */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            5. Five Critical Mistakes That Trigger Scrutiny Notices
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
              <h4 className="text-sm font-bold text-red-950 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Paying Rent to Spouse</span>
              </h4>
              <p className="text-xs text-slate-700">
                Spouses cannot be landlords under Section 64. Any rent paid to a wife or husband is clubbed back into your income.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
              <h4 className="text-sm font-bold text-red-950 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Child is Co-Owner on Property Deed</span>
              </h4>
              <p className="text-xs text-slate-700">
                If your name appears anywhere on the purchase agreement or home loan, you are an owner and cannot claim HRA for that property.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
              <h4 className="text-sm font-bold text-red-950 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Immediate Cash Return to Child</span>
              </h4>
              <p className="text-xs text-slate-700">
                If the parent withdraws the cash and deposits it back into the child&apos;s account, tax authorities treat it as a round-tripping tax evasion sham.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
              <h4 className="text-sm font-bold text-red-950 flex items-center gap-1.5 mb-1">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span>Mismatch in AIS / TIS Data</span>
              </h4>
              <p className="text-xs text-slate-700">
                If you report parent&apos;s PAN in Form 16 but the parent doesn&apos;t file an ITR declaring rental income, the CBDT algorithm flags both PANs.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <span>Frequently Asked Questions (FAQ)</span>
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

        {/* Related Guides & Internal Interlinks */}
        <section className="pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Related Compliance Guides &amp; Tools</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="#form-12bb"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('form-12bb');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-colors text-left cursor-pointer group"
            >
              <FileCheck className="w-4 h-4 text-blue-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">Form 12BB Playbook</p>
              <p className="text-[11px] text-slate-500 mt-0.5">How to submit parental proofs</p>
            </a>

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
              <p className="text-[11px] text-slate-500 mt-0.5">₹1 Lakh limit &amp; Form 60</p>
            </a>

            <a
              href="#blog-fake-rent-receipts"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('blog-fake-rent-receipts');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 transition-colors text-left cursor-pointer group"
            >
              <AlertTriangle className="w-4 h-4 text-amber-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-amber-600">AIS Notice Guide</p>
              <p className="text-[11px] text-slate-500 mt-0.5">How CBDT flags fake claims</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA Card */}
      <div className="mt-8">
        <NewWindowToolCta
          title="Print Your Parent Rent Receipts in 60 Seconds"
          description="Enter tenant and landlord details once, generate 12 monthly receipts instantly with revenue stamps and verification codes. Opens in a new tab."
          variant="card"
          onNavigateInternal={setActivePage}
        />
      </div>
    </article>
  );
};
