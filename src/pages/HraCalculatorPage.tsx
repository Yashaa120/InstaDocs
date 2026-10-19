import React, { useState, useId } from 'react';
import {
  Calculator,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  TrendingUp,
  FileCheck,
  HelpCircle,
  Building2,
  DollarSign,
  Percent,
  Info,
} from 'lucide-react';
import { ActivePage } from '../types';
import { formatIndianCurrency } from '../utils/numberToWords';
import { AdSlot } from '../components/AdSlot';

interface HraCalculatorPageProps {
  setActivePage: (page: ActivePage) => void;
  onPreFillRent?: (rentAmount: number) => void;
}

export const HraCalculatorPage: React.FC<HraCalculatorPageProps> = ({
  setActivePage,
  onPreFillRent,
}) => {
  const [basicSalary, setBasicSalary] = useState<number>(60000);
  const [dearnessAllowance, setDearnessAllowance] = useState<number>(0);
  const [hraReceived, setHraReceived] = useState<number>(25000);
  const [rentPaid, setRentPaid] = useState<number>(28000);
  const [isMetro, setIsMetro] = useState<boolean>(true);
  const [isAnnualView, setIsAnnualView] = useState<boolean>(false);
  const [taxSlabRate, setTaxSlabRate] = useState<number>(30); // 10%, 20%, 30%
  const [regime, setRegime] = useState<'old' | 'new'>('old');

  // Multiplier for Monthly vs Annual calculation
  const multiplier = isAnnualView ? 12 : 1;

  // Monthly values for core calculation
  const effectiveSalaryMonthly = basicSalary + dearnessAllowance;

  // 3 Statutory Conditions under Section 10(13A) and Rule 2A:
  // Condition 1: Actual HRA received
  const cond1Monthly = hraReceived;
  // Condition 2: Rent paid minus 10% of salary
  const cond2Monthly = Math.max(0, rentPaid - 0.1 * effectiveSalaryMonthly);
  // Condition 3: 50% (Metro) or 40% (Non-Metro) of salary
  const cond3Monthly = (isMetro ? 0.5 : 0.4) * effectiveSalaryMonthly;

  // The exempt amount is the lowest of the three conditions (under Old Regime)
  const exemptHraMonthly = regime === 'old' ? Math.min(cond1Monthly, cond2Monthly, cond3Monthly) : 0;
  const taxableHraMonthly = regime === 'old' ? Math.max(0, hraReceived - exemptHraMonthly) : hraReceived;

  // Annualized values for display
  const displayExempt = exemptHraMonthly * multiplier;
  const displayTaxable = taxableHraMonthly * multiplier;
  const displayHraReceived = hraReceived * multiplier;
  const displayRentPaid = rentPaid * multiplier;

  // Estimated Tax Saved (with 4% Health & Education Cess)
  const effectiveTaxRate = (taxSlabRate / 100) * 1.04;
  const estimatedTaxSavingsAnnual = exemptHraMonthly * 12 * effectiveTaxRate;

  // Determining which condition was the limiting factor
  const lowestCondition =
    exemptHraMonthly === cond1Monthly
      ? 'Condition 1 (Actual HRA Received)'
      : exemptHraMonthly === cond2Monthly
      ? 'Condition 2 (Rent Paid - 10% Salary)'
      : 'Condition 3 (Metro / Non-Metro Ceiling)';

  // Preset scenarios
  const applyPreset = (preset: 'metro-tech' | 'delhi-senior' | 'non-metro-junior') => {
    if (preset === 'metro-tech') {
      setBasicSalary(75000);
      setDearnessAllowance(0);
      setHraReceived(30000);
      setRentPaid(32000);
      setIsMetro(true);
      setTaxSlabRate(30);
    } else if (preset === 'delhi-senior') {
      setBasicSalary(120000);
      setDearnessAllowance(10000);
      setHraReceived(55000);
      setRentPaid(60000);
      setIsMetro(true);
      setTaxSlabRate(30);
    } else {
      setBasicSalary(35000);
      setDearnessAllowance(0);
      setHraReceived(14000);
      setRentPaid(15000);
      setIsMetro(false);
      setTaxSlabRate(20);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb Navigation */}
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
        <span className="text-slate-900 font-semibold">HRA Exemption Calculator</span>
      </nav>

      {/* Header Container */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Statutory Tax Engine &bull; Section 10(13A)
            </span>
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
              <button
                type="button"
                onClick={() => setIsAnnualView(false)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  !isAnnualView ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Figures
              </button>
              <button
                type="button"
                onClick={() => setIsAnnualView(true)}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  isAnnualView ? 'bg-white text-slate-900 shadow-2xs font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annualized View
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            House Rent Allowance (HRA) Exemption Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Calculate your legally allowable HRA exemption under Section 10(13A) and Rule 2A of the Income Tax Act, 1961. Compare Old vs New Tax Regime savings, analyze the 3 statutory conditions, and prepare compliant rent receipts for employer Form 12BB verification.
          </p>

          {/* Quick Benchmark Presets */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Quick Salary Scenarios:</span>
            <button
              type="button"
              onClick={() => applyPreset('metro-tech')}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              Metro Tech (₹75k Basic, ₹32k Rent)
            </button>
            <button
              type="button"
              onClick={() => applyPreset('delhi-senior')}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              NCR Senior (₹1.2L Basic, ₹60k Rent)
            </button>
            <button
              type="button"
              onClick={() => applyPreset('non-metro-junior')}
              className="text-xs px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              Non-Metro (₹35k Basic, ₹15k Rent)
            </button>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tax Regime Selector */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                1. Select Income Tax Filing Regime
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRegime('old')}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    regime === 'old'
                      ? 'border-blue-600 bg-white ring-2 ring-blue-100 shadow-2xs'
                      : 'border-slate-200 bg-white/60 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Old Tax Regime</span>
                    {regime === 'old' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Allows Section 10(13A) HRA exemption, 80C, 80D &amp; home loan deductions.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setRegime('new')}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    regime === 'new'
                      ? 'border-blue-600 bg-white ring-2 ring-blue-100 shadow-2xs'
                      : 'border-slate-200 bg-white/60 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">New Regime (Sec 115BAC)</span>
                    {regime === 'new' && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Default regime. Offers lower tax slabs, but zero HRA exemption is allowed.
                  </p>
                </button>
              </div>

              {regime === 'new' && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Statutory Note:</strong> Under the New Tax Regime (Section 115BAC), House Rent Allowance is fully taxable. You cannot claim HRA exemption unless you opt for the Old Tax Regime during Form 12BB declaration or ITR filing.
                  </span>
                </div>
              )}
            </div>

            {/* Salary & Rent Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Monthly Basic Salary (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-semibold text-sm">₹</span>
                  <input
                    type="number"
                    value={basicSalary || ''}
                    onChange={(e) => setBasicSalary(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-mono font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 60000"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-0.5 block">
                  As shown in your appointment letter or monthly salary payslip.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Monthly Dearness Allowance (DA) forming part of retirement benefits (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-semibold text-sm">₹</span>
                  <input
                    type="number"
                    value={dearnessAllowance || ''}
                    onChange={(e) => setDearnessAllowance(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-mono font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 0 (leave 0 if not applicable)"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-0.5 block">
                  Only DA recognized for superannuation benefits qualifies under Rule 2A.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Monthly HRA Received from Employer (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-semibold text-sm">₹</span>
                  <input
                    type="number"
                    value={hraReceived || ''}
                    onChange={(e) => setHraReceived(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-mono font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 25000"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-0.5 block">
                  Component specified as House Rent Allowance under earnings.
                </span>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Actual Monthly Rent Paid to Landlord (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-slate-400 font-semibold text-sm">₹</span>
                  <input
                    type="number"
                    value={rentPaid || ''}
                    onChange={(e) => setRentPaid(Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-mono font-medium text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g. 28000"
                  />
                </div>
                <span className="text-[11px] text-slate-500 mt-0.5 block">
                  Amount transferred to landlord via UPI, bank transfer, or cheque.
                </span>
              </div>

              {/* City Classification */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  City Classification for Rental Accommodation
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setIsMetro(true)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isMetro
                        ? 'border-blue-600 bg-blue-50/40 text-blue-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">Metro City (50% Ceiling)</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Delhi NCR, Mumbai, Kolkata, Chennai
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsMetro(false)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      !isMetro
                        ? 'border-blue-600 bg-blue-50/40 text-blue-900 font-semibold'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">Non-Metro (40% Ceiling)</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Bengaluru, Hyderabad, Pune, Ahmedabad, etc.
                    </div>
                  </button>
                </div>
              </div>

              {/* Income Tax Bracket for Savings Projection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Applicable Income Tax Bracket
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[10, 20, 30].map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setTaxSlabRate(rate)}
                      className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        taxSlabRate === rate
                          ? 'border-blue-600 bg-blue-600 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {rate}% Slab
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary & Breakdown Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-6 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                  Calculation Summary
                </span>
                <span className="text-[11px] text-slate-500 font-mono">
                  {isAnnualView ? 'FY 2025-26 Annual' : 'Per Month'}
                </span>
              </div>

              {/* Big Metric: Exempt HRA */}
              <div className="space-y-1">
                <span className="text-xs font-medium text-slate-500">
                  Tax-Exempt HRA (Section 10(13A))
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-emerald-600 font-mono tabular-nums">
                  ₹{formatIndianCurrency(displayExempt)}
                </div>
                <div className="text-[11px] text-slate-500">
                  {regime === 'old' ? (
                    <span>Limiting rule: <strong>{lowestCondition}</strong></span>
                  ) : (
                    <span className="text-amber-700 font-semibold">Zero exemption under New Regime</span>
                  )}
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 block">Taxable HRA</span>
                  <span className="text-base font-bold text-slate-900 font-mono tabular-nums">
                    ₹{formatIndianCurrency(displayTaxable)}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Added to gross salary
                  </span>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <span className="text-[11px] text-slate-500 block">Est. Annual Tax Saved</span>
                  <span className="text-base font-bold text-blue-600 font-mono tabular-nums">
                    ₹{formatIndianCurrency(Math.round(estimatedTaxSavingsAnnual))}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    At {taxSlabRate}% slab + cess
                  </span>
                </div>
              </div>

              {/* The 3 Statutory Conditions Breakdown */}
              <div className="space-y-2.5 pt-3 border-t border-slate-200/80">
                <span className="text-xs font-bold text-slate-800 block">
                  Statutory Rule 2A Formula Breakdown:
                </span>

                {/* Condition 1 */}
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs flex items-center justify-between">
                  <div className="pr-2">
                    <span className="text-slate-700 font-medium block">1. Actual HRA Received</span>
                    <span className="text-[10px] text-slate-400">Employer allocation</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 tabular-nums">
                    ₹{formatIndianCurrency(cond1Monthly * multiplier)}
                  </span>
                </div>

                {/* Condition 2 */}
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs flex items-center justify-between">
                  <div className="pr-2">
                    <span className="text-slate-700 font-medium block">2. Rent Paid &minus; 10% Salary</span>
                    <span className="text-[10px] text-slate-400">₹{formatIndianCurrency(rentPaid)} &minus; ₹{formatIndianCurrency(0.1 * effectiveSalaryMonthly)}</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 tabular-nums">
                    ₹{formatIndianCurrency(cond2Monthly * multiplier)}
                  </span>
                </div>

                {/* Condition 3 */}
                <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs flex items-center justify-between">
                  <div className="pr-2">
                    <span className="text-slate-700 font-medium block">
                      3. {isMetro ? '50%' : '40%'} of (Basic + DA)
                    </span>
                    <span className="text-[10px] text-slate-400">{isMetro ? 'Metro rate' : 'Non-metro rate'}</span>
                  </div>
                  <span className="font-mono font-semibold text-slate-900 tabular-nums">
                    ₹{formatIndianCurrency(cond3Monthly * multiplier)}
                  </span>
                </div>
              </div>

              {/* Action Button: Pre-fill Receipts */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onPreFillRent) onPreFillRent(rentPaid);
                    setActivePage('rent-receipt');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Generate Rent Receipts for ₹{formatIndianCurrency(rentPaid)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[11px] text-slate-500 text-center block mt-1.5">
                  Pre-fills receipt form with your calculated rent figures.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* High Margin In-Article Ad Slot: Separated from buttons with ample whitespace */}
        <div className="my-8 pt-4">
          <AdSlot type="in-article" />
        </div>

        {/* Long-Form Statutory Editorial Content & Explanations */}
        <div className="border-t border-slate-200 pt-8 space-y-6 text-slate-700 text-sm leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            How Section 10(13A) House Rent Allowance Exemption Works
          </h2>

          <p>
            House Rent Allowance (HRA) is one of the most effective tax-saving allowances available to salaried individuals in India under the <strong>Old Tax Regime</strong>. If you reside in rented residential premises and pay monthly rent, the Income Tax Act allows you to deduct an exemption from your taxable salary income under Section 10(13A), read with Rule 2A of the Income Tax Rules, 1962.
          </p>

          <h3 className="text-lg font-bold text-slate-900">
            1. The Three Statutory Limits of Rule 2A
          </h3>
          <p>
            The Indian Income Tax Department does not exempt the entirety of your HRA automatically. Instead, your tax deduction is legally defined as the <strong>least</strong> of the following three parameters:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li><strong>Condition 1:</strong> The actual House Rent Allowance received by the employee from the employer during the financial year.</li>
            <li><strong>Condition 2:</strong> Actual rent paid by the employee for residential accommodation, minus 10% of their statutory salary (Basic + DA).</li>
            <li><strong>Condition 3:</strong> 50% of the statutory salary if the accommodation is situated in Delhi, Mumbai, Kolkata, or Chennai; or 40% of the statutory salary for properties situated in any other city across India.</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-900">
            2. What Counts as &quot;Salary&quot; for HRA Calculation?
          </h3>
          <p>
            Many taxpayers mistakenly use their gross CTC when computing HRA exemption. Under Rule 2A, &quot;Salary&quot; includes strictly:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Basic Salary earned during the period of rented accommodation.</li>
            <li>Dearness Allowance (DA), but only if the terms of employment provide that it forms part of retirement/superannuation benefits.</li>
            <li>Fixed-percentage commission on turnover achieved by the employee (as per the Supreme Court ruling in <em>Gestetner Duplicators Pvt Ltd</em>).</li>
          </ul>
          <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
            <strong>Important Exclusion:</strong> Special allowances, performance bonuses, overtime pay, and medical reimbursements must NOT be added into salary when calculating the 10% or 50%/40% limits.
          </p>

          <h3 className="text-lg font-bold text-slate-900">
            3. Metro vs. Non-Metro Classification Rules
          </h3>
          <p>
            Under the Income Tax Rules, the 50% threshold applies exclusively to the four designated municipal boundaries: <strong>Delhi NCR (within official limits), Mumbai, Kolkata, and Chennai</strong>. Prominent technological and corporate hubs such as Bengaluru, Hyderabad, Pune, Gurugram, and Noida fall legally under the 40% bracket unless specifically gazetted otherwise.
          </p>

          <h3 className="text-lg font-bold text-slate-900">
            4. Can You Claim HRA When Paying Rent to Parents?
          </h3>
          <p>
            Yes. The Income Tax Appellate Tribunal (ITAT) has repeatedly affirmed that salaried individuals living in a residential property owned by their parents can legally claim HRA tax exemption by paying monthly rent to them. To ensure audit-proof compliance:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>The property must be legally registered in the parents&apos; name (not co-owned by you).</li>
            <li>Rent must be transferred through verifiable banking channels (UPI, NEFT, RTGS, or cheque).</li>
            <li>Monthly rent receipts with landlord signatures must be maintained.</li>
            <li>The parents must report this rental income under &quot;Income from House Property&quot; in their annual ITR.</li>
          </ul>

          {/* Editorial Trust & E-E-A-T Box */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-2 my-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
              <span className="font-semibold text-slate-900">
                RentReceipt.online Tax Editorial Desk &bull; Researched &amp; Fact-Checked
              </span>
              <span className="text-slate-500 font-medium">
                Last updated: October 2026 (Applicable for FY 2025-26 &amp; FY 2026-27)
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong>Statutory Disclosure:</strong> This calculator and educational guide are published for informational purposes under the provisions of the Income Tax Act, 1961. Tax computation depends on your individual salary structure and regime choice. For complex situations such as dual-city accommodation or capital gains offsets, please consult a licensed Chartered Accountant (CA).
            </p>
          </div>
        </div>

        {/* Pre-Footer Ad Unit */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>
      </div>
    </div>
  );
};
