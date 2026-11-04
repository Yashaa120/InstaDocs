import React from 'react';
import {
  Receipt,
  FileText,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Building,
  CheckCircle2,
  Lock,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { ActivePage } from '../types';
import { CountryFlag } from '../components/CountryFlag';

interface UkPageProps {
  onSelectTool: (tool: ActivePage) => void;
  onLaunchWithCurrency?: (currency: 'GBP') => void;
}

export const UkPage: React.FC<UkPageProps> = ({ onSelectTool, onLaunchWithCurrency }) => {
  const handleLaunchGbp = () => {
    if (onLaunchWithCurrency) {
      onLaunchWithCurrency('GBP');
    } else {
      onSelectTool('rent-receipt');
    }
  };

  const ukFaqs = [
    {
      q: 'Are UK private landlords legally required to issue rent receipts?',
      a: 'Under Section 4 of the Landlord and Tenant Act 1985, if rent is paid weekly, a landlord or letting agent is legally obliged to provide a rent book or written rent receipt. For monthly or quarterly tenancies, while electronic bank statements (Standing Orders, BACS, Faster Payments) provide primary proof, tenants have the statutory right to request written receipt vouchers, particularly when cash payments are made or when claiming Universal Credit housing elements.',
    },
    {
      q: 'How do rent receipts support Universal Credit and Council Housing claims?',
      a: 'The Department for Work and Pensions (DWP) and local councils require conclusive proof of continuous tenancy payments before approving the Housing Costs element of Universal Credit or Discretionary Housing Payments (DHP). An itemized monthly rent receipt displaying the property address, landlord contact information, rental period, and signed acknowledgement fulfills local council compliance requirements.',
    },
    {
      q: 'What must be included on an official UK rent slip under the Tenant Fees Act 2019?',
      a: 'The Tenant Fees Act 2019 prohibits unpermitted landlord charges. A compliant rent receipt must strictly delineate the pure contractual rent from permitted utility or council tax payments. Essential elements include: Tenant full name, Landlord/Agent registered name and service address, full property postal address, rental period covered, payment method (e.g. Standing Order / BACS / Cash), amount received in British Pounds (£), and landlord or agent signature.',
    },
    {
      q: 'Does this generator support Assured Shorthold Tenancies (AST) and HMO rentals?',
      a: 'Yes. Whether you are managing a standard single-family Assured Shorthold Tenancy (AST), a student flat share, or a licensed House in Multiple Occupation (HMO), RentReceipt.online generates individual monthly or quarterly tenancy payment proofs tailored for British tenancy governance.',
    },
    {
      q: 'Can letting agents and private landlords generate annual batches?',
      a: 'Yes. Landlords and property managers can generate up to 12 consecutive monthly receipts in a single consolidated PDF document with sequential receipt numbering, saving administrative overhead ahead of UK self-assessment tax return deadlines (31 January).',
    },
    {
      q: 'Is tenant or landlord financial data stored on remote servers?',
      a: 'No. All PDF compiling and signature stamping occurs 100% locally within your client browser session under strict UK GDPR standards. No landlord details, tenant names, addresses, or monetary amounts are ever retained on any cloud database.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onSelectTool('home');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <span>/</span>
        <span className="text-slate-900 font-semibold flex items-center gap-1.5">
          <CountryFlag country="uk" className="w-4 h-3 shrink-0" />
          <span>United Kingdom (UK Tenancy &amp; Rent Receipts)</span>
        </span>
      </nav>

      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200 mb-3 shadow-2xs">
          <CountryFlag country="uk" className="w-4 h-3 shrink-0" />
          <span>UK Residential Landlord &amp; Tenant Documentation Standard</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Free UK Rent Receipt Generator | British Pounds (£)
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Generate official, print-ready tenancy rent receipts for private landlords, letting agents, and British tenants. Formatted for Assured Shorthold Tenancies (AST), HMO rooms, Universal Credit proof, and HMRC Self-Assessment records.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={handleLaunchGbp}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Receipt className="w-5 h-5" />
            <span>Generate UK Rent Receipt (£ GBP)</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>
          <a
            href="/rent-receipt-generator.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base border border-slate-300 rounded-xl transition-all cursor-pointer shadow-2xs"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
        </div>

        {/* Trust Points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5 text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>British Pounds (£) Native Words Formatting</span>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>UK GDPR Compliant (Zero Cloud Storage)</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <Building className="w-4 h-4 text-blue-600" />
            <span>AST &amp; HMO Tenancy Compatible</span>
          </span>
        </div>
      </header>

      {/* Comprehensive Editorial & Compliance Guide */}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            UK Tenancy Law, Rent Receipt Obligations &amp; HMRC Bookkeeping
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            In England, Wales, Scotland, and Northern Ireland, managing residential property tenancies requires accurate, timely record-keeping to prevent legal disputes between landlords and tenants. Whether managing an Assured Shorthold Tenancy (AST) in England, a Private Residential Tenancy (PRT) in Scotland, or an occupation contract in Wales, issuing professional rent receipts provides incontrovertible proof that contractual rent payments were fulfilled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>1. Tenant Fees Act 2019</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strictly prohibits landlords and letting agents from charging administrative fees for standard tenancy paperwork or inventory logs. Official receipts must accurately reflect pure rent payments distinct from refundable holding deposits.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>2. Universal Credit Proof</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When tenants claim the Housing Costs element of Universal Credit through Jobcentre Plus, caseworkers demand documentary proof of monthly liability and payment records. Stamped receipts prevent delays in welfare disbursements.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>3. HMRC Self-Assessment</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Private landlords submitting UK Self-Assessment (SA105 Property Pages) must maintain rent records for at least 5 years after the 31 January submission deadline to substantiate declared gross rental income during HMRC compliance audits.
            </p>
          </div>
        </div>

        {/* Essential Elements Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            What Information Must Appear on a Valid UK Rent Receipt?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To satisfy English county courts, First-tier Tribunals (Property Chamber), and housing benefit officers, every tenancy receipt generated through our system incorporates standard statutory data points:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Required Field</th>
                  <th className="p-3">Legal &amp; Practical Purpose</th>
                  <th className="p-3">UK Generator Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Tenant Full Legal Name</td>
                  <td className="p-3">Matches tenancy agreement (AST) and council tax rolls.</td>
                  <td className="p-3 text-emerald-700 font-medium">Included in all templates</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Landlord / Agent Details</td>
                  <td className="p-3">Satisfies Section 47 &amp; 48 Landlord &amp; Tenant Act 1987 (Service address).</td>
                  <td className="p-3 text-emerald-700 font-medium">Supports Landlord or Agent Name</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Property Postal Address</td>
                  <td className="p-3">Full premises address including postal code (e.g. London NW1 6XE).</td>
                  <td className="p-3 text-emerald-700 font-medium">Full UK Postcode Support</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Rental Period Covered</td>
                  <td className="p-3">Specifies the exact calendar month (e.g., 1 Oct 2026 to 31 Oct 2026).</td>
                  <td className="p-3 text-emerald-700 font-medium">Auto-calculated rental period</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Currency &amp; Amount Received</td>
                  <td className="p-3">Exact numerical sum and British words conversion (£ Pounds &amp; Pence).</td>
                  <td className="p-3 text-emerald-700 font-medium">Automatic words conversion in GBP</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Payment Channel &amp; Reference</td>
                  <td className="p-3">Standing Order, BACS wire reference, Faster Payments, or Cash.</td>
                  <td className="p-3 text-emerald-700 font-medium">Custom transaction reference input</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Signature &amp; Verification</td>
                  <td className="p-3">Digital or written signature plus cryptographic verification QR code.</td>
                  <td className="p-3 text-emerald-700 font-medium">Live drawing, typed font, or stamp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Tenant Deposit Protection Notice */}
        <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
          <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <span>🛡️ Tenancy Deposit Protection (TDP) Notice</span>
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-amber-900">
            Please note: Monthly rent receipts are distinct from tenancy security deposit receipts. Under the Housing Act 2004, security deposits paid under an Assured Shorthold Tenancy in England and Wales must be registered with an authorized Tenancy Deposit Protection scheme (Deposit Protection Service - DPS, MyDeposits, or Tenancy Deposit Scheme - TDS) within 30 days of receipt, accompanied by Prescribed Information.
          </p>
        </div>
      </article>

      {/* Frequently Asked Questions */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-10">
        <div className="flex items-center gap-2.5 mb-6">
          <HelpCircle className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions — UK Rent Receipts &amp; Tenancy Law
          </h2>
        </div>

        <div className="space-y-5">
          {ukFaqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action footer */}
      <div className="text-center p-8 bg-slate-900 text-white rounded-2xl shadow-sm border border-slate-800">
        <h2 className="text-2xl font-bold mb-3">Ready to Create Official UK Rent Receipts?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
          100% free, private in-browser generation. No registration, no downloads required, instant high-resolution PDF with digital signatures.
        </p>
        <button
          type="button"
          onClick={handleLaunchGbp}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all cursor-pointer shadow-sm"
        >
          <Receipt className="w-4 h-4" />
          <span>Launch Free UK Rent Receipt Generator</span>
        </button>
      </div>
    </div>
  );
};
