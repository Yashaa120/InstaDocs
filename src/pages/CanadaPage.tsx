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

interface CanadaPageProps {
  onSelectTool: (tool: ActivePage) => void;
  onLaunchWithCurrency?: (currency: 'CAD') => void;
}

export const CanadaPage: React.FC<CanadaPageProps> = ({ onSelectTool, onLaunchWithCurrency }) => {
  const handleLaunchCad = () => {
    if (onLaunchWithCurrency) {
      onLaunchWithCurrency('CAD');
    } else {
      onSelectTool('rent-receipt');
    }
  };

  const canadaFaqs = [
    {
      q: 'Are Canadian landlords legally required to provide rent receipts?',
      a: 'Yes. In Ontario, under Section 109 of the Residential Tenancies Act (RTA), 2006, a landlord is legally mandated to provide a receipt for payment of rent, rent deposits, or other charges free of charge upon request. In British Columbia, Section 26(2) of the RTA requires landlords to provide a receipt when rent is paid in cash. Even in provinces where receipts are not automatic for electronic transfers, having written rent receipts is essential for Canadian income tax claims.',
    },
    {
      q: 'How do rent receipts help with Canadian personal income taxes (CRA)?',
      a: 'While rent is not deductible against ordinary employment income on federal T1 returns, rent receipts are vital in several tax scenarios: (1) Self-employed individuals and home-based employees claiming work-from-space business expenses (Form T2125 or Form T777S), (2) Provincial tax credits such as the Ontario Trillium Benefit (Ontario Energy and Property Tax Credit - OEHTC), Manitoba Education Property Tax Credit, and Quebec solidarity tax credit.',
    },
    {
      q: 'What information must be included on an Ontario rent receipt under the RTA?',
      a: 'Under Ontario Regulation 516/06, Section 9, a valid rent receipt must include: The address of the rental unit to which the receipt applies, the name of the tenant or tenants to whom the receipt is given, the amount and date for each payment received, the name of the landlord, and the signature of the landlord or the landlord’s authorized representative.',
    },
    {
      q: 'Does this generator support Canadian Dollars ($ CAD) and bilingual format conventions?',
      a: 'Yes. The generator natively supports Canadian Dollars ($ CAD), formatted in standard decimal currency notation with automated number-to-words conversion (dollars and cents). Receipts can be downloaded in professional PDF format suitable for CRA review.',
    },
    {
      q: 'Can landlords generate annual rent receipts for tax season?',
      a: 'Yes. Landlords and property management firms can generate individual monthly receipts or compile a multi-month batch for the entire calendar year (January through December) with consecutive receipt numbering, making tax-time reconciliation straightforward for tenants.',
    },
    {
      q: 'Is my personal data or financial information stored on your servers?',
      a: 'No. RentReceipt.online operates under a zero-server-storage privacy model compliant with Canada’s Personal Information Protection and Electronic Documents Act (PIPEDA). All receipt calculation, formatting, and PDF downloads happen locally in your web browser memory.',
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
          <CountryFlag country="ca" className="w-4 h-3 shrink-0" />
          <span>Canada (CRA Tax Proof &amp; Provincial Tenancies)</span>
        </span>
      </nav>

      {/* Hero Section */}
      <header className="text-center max-w-4xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-900 border border-red-200 mb-3 shadow-2xs">
          <CountryFlag country="ca" className="w-4 h-3 shrink-0" />
          <span>Canadian Residential Tenancy Documentation Standard</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Free Canada Rent Receipt Generator | Canadian Dollars ($ CAD)
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Generate official, print-ready rent receipts for Canadian residential tenancies. Formatted for the Canada Revenue Agency (CRA), Ontario Trillium Benefit (OEHTC), BC Residential Tenancy Branch compliance, and self-employed home office deduction proof.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={handleLaunchCad}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <Receipt className="w-5 h-5" />
            <span>Generate Canada Rent Receipt ($ CAD)</span>
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
            <span>Canadian Dollars ($ CAD) Number-to-Words</span>
          </span>
          <span className="flex items-center gap-1.5 text-emerald-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>PIPEDA Compliant (Zero Data Retention)</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-700">
            <Building className="w-4 h-4 text-red-600" />
            <span>Ontario RTA &amp; BC Tenancy Standard</span>
          </span>
        </div>
      </header>

      {/* Comprehensive Editorial & Compliance Guide */}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-10 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Canadian Provincial Tenancy Standards &amp; CRA Tax Compliance
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            In Canada, landlord-tenant relations fall under provincial and territorial jurisdiction. Each province has dedicated residential tenancy statutes designed to protect both renters and property owners. Having clear, documented rent receipts is critical for tenant tax filings and landlord accounting across Canada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              <span>1. Ontario (RTA Section 109)</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Under Ontario law, landlords must provide written receipts free of charge upon request. This applies to former tenants as well, provided the request is made within 12 months after the tenancy ends. Landlords who fail to provide receipts face Landlord and Tenant Board (LTB) penalties.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>2. British Columbia (RTA Sec 26)</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In BC, landlords must provide a receipt whenever rent is paid in cash. For electronic payments (Interac e-Transfer or direct deposit), having official landlord-signed receipts provides vital documentation if disputes arise before the Residential Tenancy Branch (RTB).
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              <span>3. CRA Tax Proof (OEHTC &amp; T2125)</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              When claiming the Ontario Trillium Benefit or deducting home office expenses on Form T2125 / Form T777S, the Canada Revenue Agency routinely asks taxpayers to submit written landlord receipts verifying total annual rent paid and property location.
            </p>
          </div>
        </div>

        {/* Essential Elements Table */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            What Must Be Included on an Official Canadian Rent Receipt?
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            To satisfy provincial tenancy boards and CRA review officers, rent receipts generated through our platform contain all required statutory information:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                <tr>
                  <th className="p-3">Required Field</th>
                  <th className="p-3">Statutory Purpose</th>
                  <th className="p-3">Canada Generator Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Tenant Legal Name</td>
                  <td className="p-3">Matches provincial lease agreement and CRA T1 general tax return.</td>
                  <td className="p-3 text-emerald-700 font-medium">Included on all templates</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Landlord Legal Name</td>
                  <td className="p-3">Identifies the property owner or registered corporate landlord.</td>
                  <td className="p-3 text-emerald-700 font-medium">Supports Individual or Corporate Name</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Rental Unit Address</td>
                  <td className="p-3">Complete address including suite/unit number and Canadian Postal Code.</td>
                  <td className="p-3 text-emerald-700 font-medium">Full Canadian Postal Code support</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Payment Period Covered</td>
                  <td className="p-3">Identifies the calendar month or specific dates for which rent was paid.</td>
                  <td className="p-3 text-emerald-700 font-medium">Precise monthly date ranges</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Amount Paid ($ CAD)</td>
                  <td className="p-3">Exact dollar sum and automated Canadian text conversion.</td>
                  <td className="p-3 text-emerald-700 font-medium">Automatic number-to-words in CAD</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Payment Method</td>
                  <td className="p-3">Interac e-Transfer, Cheque, Pre-Authorized Debit (PAD), or Cash.</td>
                  <td className="p-3 text-emerald-700 font-medium">Customizable transaction reference</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Landlord Signature</td>
                  <td className="p-3">Digital signature, typed script, or physical sign-off box.</td>
                  <td className="p-3 text-emerald-700 font-medium">Digital draw, typed, or stamp ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Pet Deposits Note */}
        <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 space-y-2">
          <h3 className="font-bold text-sm sm:text-base flex items-center gap-2">
            <span>🍁 Canadian Security &amp; Key Deposits Note</span>
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-blue-900">
            In Ontario, landlords may only collect a rent deposit (usually last month’s rent) and a refundable key deposit equal to the actual replacement cost. Damage or security deposits are illegal in Ontario. In contrast, British Columbia permits a security deposit of up to half of one month’s rent plus an optional pet deposit. When issuing receipts for deposits, ensure the receipt explicitly specifies the nature of the deposit.
          </p>
        </div>
      </article>

      {/* Frequently Asked Questions */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs mb-10">
        <div className="flex items-center gap-2.5 mb-6">
          <HelpCircle className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions — Canadian Rent Receipts &amp; CRA Rules
          </h2>
        </div>

        <div className="space-y-5">
          {canadaFaqs.map((faq, idx) => (
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
        <h2 className="text-2xl font-bold mb-3">Ready to Generate Official Canadian Rent Receipts?</h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
          100% free, private in-browser generation. No registration required, instant high-resolution PDF download with digital signatures.
        </p>
        <button
          type="button"
          onClick={handleLaunchCad}
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition-all cursor-pointer shadow-sm"
        >
          <Receipt className="w-4 h-4" />
          <span>Launch Free Canada Rent Receipt Generator</span>
        </button>
      </div>
    </div>
  );
};
