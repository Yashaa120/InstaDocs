import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Calculator,
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
  Coins,
  Percent,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { NewWindowToolCta } from '../components/NewWindowToolCta';

interface BlogSection80ggPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const BlogSection80ggPage: React.FC<BlogSection80ggPageProps> = ({ setActivePage }) => {
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
      q: 'Can a salaried person claim Section 80GG if they do not get HRA?',
      a: 'Yes. If your employer provides a consolidated CTC salary without any specific House Rent Allowance (HRA) component, or if you were not in receipt of HRA at any time during the previous year, you are 100% eligible to claim rent deductions under Section 80GG.',
    },
    {
      q: 'Is Form 10BA mandatory before filing ITR to claim Section 80GG?',
      a: 'Yes, absolutely mandatory. Rule 11B of the Income Tax Rules states that an electronic declaration in Form 10BA must be filed on the income tax portal prior to submitting your ITR. If you claim 80GG without filing Form 10BA, CPC will disallow the deduction under Section 143(1) as an adjustment.',
    },
    {
      q: 'Can I claim Section 80GG if my spouse owns an apartment in another city?',
      a: 'Yes, provided neither you, your spouse, nor your minor child owns residential accommodation at the place where you ordinarily reside or perform duties of your office/business, and you do not claim self-occupied property tax concessions on that other house.',
    },
    {
      q: 'What is "Adjusted Total Income" for the Section 80GG calculation?',
      a: 'Adjusted Total Income means Gross Total Income minus Long-Term Capital Gains (LTCG), Short-Term Capital Gains under Section 111A, and all Chapter VI-A deductions except Section 80GG itself.',
    },
    {
      q: 'Do I still need rent receipts for Section 80GG?',
      a: 'Yes. While Form 10BA is filed electronically, the Assessing Officer can ask for proof of rent payment. Maintaining valid, stamped monthly rent receipts and bank transfer debits is mandatory to defend against scrutiny.',
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
          Section 80GG Rent Deduction Guide
        </span>
      </nav>

      {/* Article Header */}
      <header className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <Coins className="w-3.5 h-3.5 text-emerald-600" />
            <span>Freelancers, Self-Employed &amp; Non-HRA</span>
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
            <Calendar className="w-3 h-3" />
            <span>Updated: FY 2026-27 / AY 2027-28</span>
          </span>
          <span className="text-xs text-slate-500 font-medium ml-auto">
            ⏱️ 6 min read
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Section 80GG Rent Deduction: How Self-Employed &amp; Non-HRA Employees Save Up to ₹60,000
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
          The ultimate playbook for claiming rent paid when your salary lacks an HRA component or when you work as a self-employed professional, consultant, or freelancer in India.
        </p>

        {/* E-E-A-T Author & Reviewer Attribution */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              80G
            </div>
            <div>
              <p className="font-bold text-slate-900">Tax Policy &amp; Deductions Desk</p>
              <p className="text-slate-500">Rule 11B &amp; Form 10BA Electronic Compliance</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-xl border border-emerald-200/60 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Income Tax Act, 1961 § 80GG</span>
          </div>
        </div>
      </header>

      {/* New Window Tool CTA Banner */}
      <NewWindowToolCta
        title="Need Stamped Rent Receipts for Section 80GG Proof?"
        description="Generate official monthly receipts with landlord PAN and revenue stamp placeholders. Opens in a new tab so you can continue reading this guide."
        variant="banner"
      />

      {/* Article Body Content */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-10 text-slate-700 text-base leading-relaxed">
        
        {/* Executive Summary */}
        <section className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
            <BookmarkCheck className="w-5 h-5 text-emerald-600" />
            <span>Section 80GG Fast Overview</span>
          </h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Maximum Annual Deduction:</strong> Up to ₹60,000 per financial year (capped at ₹5,000 per month).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Target Beneficiaries:</strong> Freelancers, consultants, doctors, lawyers, business owners, and salaried staff with no HRA in salary.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Mandatory Electronic Filing:</strong> Form 10BA must be filed on the income tax portal before filing your ITR.</span>
            </li>
          </ul>
        </section>

        {/* Section 1: The 3-Condition Statutory Formula */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            1. The Statutory 3-Rule Deduction Formula
          </h2>
          <p>
            Under Section 80GG of the Income Tax Act, the deduction available is the <strong>LEAST</strong> of the following three calculations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs inline-flex items-center justify-center mb-2">A</span>
              <p className="text-xs uppercase font-bold text-slate-500">Statutory Monthly Ceiling</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">₹5,000 / mo</p>
              <p className="text-xs text-slate-500 mt-1">₹60,000 Per Year</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs inline-flex items-center justify-center mb-2">B</span>
              <p className="text-xs uppercase font-bold text-slate-500">25% of Total Income</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">25%</p>
              <p className="text-xs text-slate-500 mt-1">of Adjusted Total Income</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-xs inline-flex items-center justify-center mb-2">C</span>
              <p className="text-xs uppercase font-bold text-slate-500">Rent Minus 10%</p>
              <p className="text-xl font-extrabold text-slate-900 mt-1">Rent - 10%</p>
              <p className="text-xs text-slate-500 mt-1">of Adjusted Total Income</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-sm text-slate-800">
            <strong>Worked Example:</strong> A freelance developer has an Adjusted Total Income of ₹8,00,000 and pays rent of ₹18,000/month (₹2,16,000/year):
            <ul className="list-disc list-inside mt-2 space-y-1 text-xs sm:text-sm">
              <li>Condition 1: ₹5,000 × 12 = <strong>₹60,000</strong></li>
              <li>Condition 2: 25% of ₹8,00,000 = <strong>₹2,00,000</strong></li>
              <li>Condition 3: ₹2,16,000 - 10% of ₹8,00,000 (₹80,000) = <strong>₹1,36,000</strong></li>
            </ul>
            <p className="mt-2 font-bold text-emerald-800">
              👉 Deduction Allowed: ₹60,000 (The lowest of the three).
            </p>
          </div>
        </section>

        {/* AdSlot Compliant In-Article Placement */}
        <AdSlot type="in-article" />

        {/* Section 2: Section 10(13A) vs Section 80GG Comparison */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            2. Section 10(13A) vs Section 80GG: Key Differences
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-sm border-collapse border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th className="p-3 border border-slate-200">Comparison Feature</th>
                  <th className="p-3 border border-slate-200">Section 10(13A) (HRA)</th>
                  <th className="p-3 border border-slate-200">Section 80GG (Rent Deduction)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Who is Eligible?</td>
                  <td className="p-3 text-slate-800">Salaried receiving HRA component</td>
                  <td className="p-3 text-slate-800">Self-employed &amp; non-HRA salaried</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Maximum Ceiling</td>
                  <td className="p-3 text-emerald-700 font-bold">No statutory upper cap</td>
                  <td className="p-3 text-amber-700 font-bold">Capped at ₹5,000/mo (₹60,000/yr)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Mandatory Portal Form</td>
                  <td className="p-3 text-slate-800">Form 12BB (to employer)</td>
                  <td className="p-3 text-blue-700 font-bold">Form 10BA (on e-filing portal)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">New Tax Regime Availability</td>
                  <td className="p-3 text-slate-500">Old Regime Only</td>
                  <td className="p-3 text-slate-500">Old Regime Only</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Step-by-Step Filing of Form 10BA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            3. How to File Form 10BA Online (Step-by-Step)
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="text-sm font-bold text-slate-900">Log into Income Tax E-Filing Portal</p>
                <p className="text-xs text-slate-600 mt-0.5">Go to <em>eportal.incometax.gov.in</em> with your PAN and password.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="text-sm font-bold text-slate-900">Navigate to e-File &gt; Income Tax Forms</p>
                <p className="text-xs text-slate-600 mt-0.5">Click &ldquo;File Income Tax Forms&rdquo; and select &ldquo;Form 10BA (Declaration for deduction u/s 80GG)&rdquo;.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="text-sm font-bold text-slate-900">Enter Tenancy &amp; Landlord Details</p>
                <p className="text-xs text-slate-600 mt-0.5">Fill in rental premises address, monthly rent paid, payment mode, and landlord name &amp; PAN.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
              <span className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
              <div>
                <p className="text-sm font-bold text-slate-900">E-Verify and Submit Before Filing ITR</p>
                <p className="text-xs text-slate-600 mt-0.5">Verify via Aadhaar OTP. Once acknowledgment is generated, proceed to file your ITR-1, ITR-3, or ITR-4.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Disqualifications */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            4. Disqualifications: When You CANNOT Claim Section 80GG
          </h2>
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 text-sm text-slate-800">
            <p className="font-bold text-amber-950">You are ineligible for Section 80GG if:</p>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700">
              <li>You receive ANY HRA component in your salary from your employer at any point during the fiscal year.</li>
              <li>You, your spouse, your minor child, or your HUF owns any residential accommodation at the location of your employment or business.</li>
              <li>You own residential property in another city and claim self-occupied tax benefits on that property under Section 24.</li>
            </ul>
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

        {/* Related Guides Interlinks */}
        <section className="pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Related Tax Optimization Guides</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="#hra-calculator"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('hra-calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-colors text-left cursor-pointer group"
            >
              <Calculator className="w-4 h-4 text-blue-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600">HRA Calculator</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Compare Old vs New regime</p>
            </a>

            <a
              href="#blog-rent-to-parents"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('blog-rent-to-parents');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/40 transition-colors text-left cursor-pointer group"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-emerald-600">Rent to Parents</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Family tax arbitrage</p>
            </a>

            <a
              href="#blog-rent-agreement-vs-receipt"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('blog-rent-agreement-vs-receipt');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 transition-colors text-left cursor-pointer group"
            >
              <Scale className="w-4 h-4 text-amber-600 mb-1" />
              <p className="text-xs font-bold text-slate-900 group-hover:text-amber-600">Agreement vs Receipt</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Legal differences</p>
            </a>
          </div>
        </section>

      </div>

      {/* Footer CTA Card */}
      <div className="mt-8">
        <NewWindowToolCta
          title="Generate Your Section 80GG Rent Receipts"
          description="Prepare monthly rent receipts with digital signature and revenue stamp placeholders. Opens in a new tab."
          variant="card"
          onNavigateInternal={setActivePage}
        />
      </div>
    </article>
  );
};
