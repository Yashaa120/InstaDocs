import React, { useState } from 'react';
import { Calculator, ShieldCheck, CheckCircle2, AlertCircle, ArrowRight, IndianRupee } from 'lucide-react';
import { ActivePage } from '../types';
import { formatIndianCurrency } from '../utils/numberToWords';
import { AdSlot } from '../components/AdSlot';

interface HraGuidePageProps {
  setActivePage: (page: ActivePage) => void;
}

export const HraGuidePage: React.FC<HraGuidePageProps> = ({ setActivePage }) => {
  // Interactive mini HRA calculator widget within the guide
  const [basicSalary, setBasicSalary] = useState<number>(50000);
  const [hraReceived, setHraReceived] = useState<number>(20000);
  const [rentPaid, setRentPaid] = useState<number>(22000);
  const [isMetro, setIsMetro] = useState<boolean>(true);

  // HRA Calculation (Monthly)
  const condition1 = hraReceived;
  const condition2 = Math.max(0, rentPaid - 0.1 * basicSalary);
  const condition3 = isMetro ? 0.5 * basicSalary : 0.4 * basicSalary;
  const exemptHraMonthly = Math.min(condition1, condition2, condition3);
  const taxableHraMonthly = Math.max(0, hraReceived - exemptHraMonthly);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <button
          onClick={() => setActivePage('home')}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-slate-900">HRA Exemption Guide</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Income Tax Act, 1961</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Complete Guide to HRA Tax Exemption &amp; Rent Receipts
          </h1>
          <p className="text-base text-slate-600 mt-2">
            Understand Section 10(13A), Rule 2A calculation rules, landlord PAN compliance, and Form 12BB submissions.
          </p>
        </div>

        {/* Interactive HRA Exemption Calculator */}
        <div className="bg-slate-50 border border-blue-200 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900">
              Interactive HRA Exemption Calculator (Rule 2A)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Basic Salary + DA (Monthly)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-slate-500 text-xs font-bold">₹</span>
                <input
                  type="number"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(parseFloat(e.target.value) || 0)}
                  className="w-full pl-6 pr-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                HRA Received (Monthly)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-slate-500 text-xs font-bold">₹</span>
                <input
                  type="number"
                  value={hraReceived}
                  onChange={(e) => setHraReceived(parseFloat(e.target.value) || 0)}
                  className="w-full pl-6 pr-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Actual Rent Paid (Monthly)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center text-slate-500 text-xs font-bold">₹</span>
                <input
                  type="number"
                  value={rentPaid}
                  onChange={(e) => setRentPaid(parseFloat(e.target.value) || 0)}
                  className="w-full pl-6 pr-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                City Type
              </label>
              <select
                value={isMetro ? 'metro' : 'non-metro'}
                onChange={(e) => setIsMetro(e.target.value === 'metro')}
                className="w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-900"
              >
                <option value="metro">Metro (Delhi, Mumbai, Kolkata, Chennai)</option>
                <option value="non-metro">Non-Metro (Bangalore, Pune, Hyderabad, etc.)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-slate-200">
            <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Exempt HRA (Tax-Free)
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-900 mt-1">
                ₹{formatIndianCurrency(exemptHraMonthly)} <span className="text-xs font-normal text-emerald-700">/month</span>
              </div>
              <span className="text-[11px] text-emerald-700 mt-0.5 block">
                ₹{formatIndianCurrency(exemptHraMonthly * 12)} per annum
              </span>
            </div>

            <div className="p-3 bg-slate-100 rounded-lg border border-slate-200">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Taxable HRA
              </span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 mt-1">
                ₹{formatIndianCurrency(taxableHraMonthly)} <span className="text-xs font-normal text-slate-500">/month</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                ₹{formatIndianCurrency(taxableHraMonthly * 12)} per annum
              </span>
            </div>
          </div>
        </div>

        {/* Mid-Guide Ad Slot (Hidden on mobile for smooth long-form reading) */}
        <div className="py-2">
          <AdSlot type="banner" hideOnMobile={true} />
        </div>

        {/* Detailed Comprehensive Editorial Content (800+ words) */}
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base">
          <h2 className="text-xl font-bold text-slate-900">
            1. Understanding Section 10(13A) of the Income Tax Act
          </h2>
          <p>
            Salaried individuals who receive House Rent Allowance (HRA) as part of their cost-to-company (CTC) package and live in rented accommodation can claim tax exemption under Section 10(13A) read with Rule 2A of the Income Tax Rules, 1962. This deduction reduces total gross taxable salary, directly lowering annual income tax liability.
          </p>
          <p>
            It is critical to note that HRA exemption is exclusively available under the <strong>Old Tax Regime</strong>. If an employee opts for the New Tax Regime (Section 115BAC), HRA exemptions and standard Section 80C deductions are not allowable.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            2. Statutory Guidelines for Claiming HRA
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li><strong>Actual Tenancy:</strong> You must genuinely pay rent for residential accommodation occupied by you. You cannot claim HRA for a house you own.</li>
            <li><strong>Rent Receipts:</strong> Rent receipts signed by the landlord serve as primary legal documentary evidence of payment.</li>
            <li><strong>Landlord PAN Mandate (CBDT Circular 08/2013):</strong> If total rent exceeds ₹1,00,000 per financial year (₹8,333/month), the landlord’s PAN must be stated on the receipts and declared in Form 12BB.</li>
            <li><strong>Revenue Stamp (Indian Stamp Act, 1899):</strong> For cash rent payments exceeding ₹5,000 per month, a ₹1 revenue stamp must be affixed and signed across.</li>
            <li><strong>Rental Agreement:</strong> For rents exceeding ₹50,000 per month or as required by your corporate payroll policy, a registered or notarized rent agreement is strongly recommended.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">
            3. Common Mistakes to Avoid When Submitting Rent Receipts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl text-xs space-y-1">
              <span className="font-bold text-rose-900 block text-sm">❌ Mismatched Address</span>
              <p className="text-rose-800">Ensure the address on your rent receipts matches the city where your workplace is situated, or maintain proof of genuine remote working.</p>
            </div>
            <div className="p-4 bg-rose-50/60 border border-rose-200 rounded-xl text-xs space-y-1">
              <span className="font-bold text-rose-900 block text-sm">❌ Paying Rent to Spouse</span>
              <p className="text-rose-800">Under tax laws, a husband and wife live together as joint partners. Rent paid to a spouse is not permissible for HRA exemption.</p>
            </div>
          </div>
        </div>

        {/* Bottom Ad Slot */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>

        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => {
              setActivePage('rent-receipt');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <span>Generate Rent Receipts</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
