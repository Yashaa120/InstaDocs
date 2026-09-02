import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Building2,
  AlertCircle,
  Scale,
  DollarSign,
  TrendingDown,
  CheckCircle,
  Briefcase,
} from 'lucide-react';

export const SalarySlipContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Is issuing a salary slip mandatory under Indian labor laws?',
      a: 'Yes. Under the Payment of Wages Act, 1936, the Minimum Wages Act, 1948, and the respective State Shops and Establishments Acts, registered employers are legally required to provide a wage slip (salary slip) to all employees on or before pay day. It provides an authentic documentary record of earnings, statutory deductions (such as PF, ESI, Professional Tax, and TDS), and attendance.',
    },
    {
      q: 'Can small businesses, startups, or freelancers issue salary slips with this tool?',
      a: 'Absolutely. Many micro-enterprises, proprietary firms, and remote consultancies do not maintain expensive enterprise ERP or payroll suites. This tool lets small business owners and HR managers generate clean, compliant payslips with proper company letterheads and authorized digital signatures in seconds.',
    },
    {
      q: 'How does a salary slip help an employee in India?',
      a: 'A salary slip is the primary financial document required when applying for home loans, personal loans, vehicle financing, or credit cards. It is also demanded by new employers as proof of past compensation (salary benchmarking) and serves as crucial evidence for claiming tax refunds or verifying TDS deductions against Income Tax Form 26AS/AIS.',
    },
    {
      q: 'What is the difference between Gross Salary, Net Salary, and CTC?',
      a: 'Cost to Company (CTC) is the total amount an employer spends on an employee per annum, including employer PF contributions, gratuity, and health insurance. Gross Salary is the total salary payable before any deductions (Basic + HRA + Allowances). Net Salary (Take-Home Pay) is the actual amount credited to the bank account after subtracting statutory deductions like Employee PF, Professional Tax, and Income Tax (TDS).',
    },
    {
      q: 'Are handwritten or typed signatures on a salary slip valid?',
      a: 'Yes. A salary slip issued on the company letterhead with an authorized signatory’s stamp, physical signature, or verified digital signature is legally valid and widely accepted by banks, consulates for visa processing, and government authorities.',
    },
    {
      q: 'Why should Basic Pay and HRA be separated on the payslip?',
      a: 'Basic pay forms the core base for calculating statutory benefits such as Provident Fund (12% of Basic + DA) and Gratuity. House Rent Allowance (HRA) is separately specified because salaried tenants living in rented accommodation can claim tax exemption under Section 10(13A) of the Income Tax Act based specifically on the HRA component shown on their salary slip.',
    },
  ];

  return (
    <div className="space-y-12 mt-12 pt-8 border-t border-slate-200" id="salary-guide-content">
      {/* 1. In-depth Article Overview */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full w-fit mb-4 border border-emerald-200">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Indian Payroll &amp; Employment Guide</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
          What is a Salary Slip (Payslip) and Why is it Essential?
        </h2>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
          <p>
            A <strong>Salary Slip</strong> (also commonly referred to as a <em>payslip</em> or <em>wage slip</em>) is an official document issued by an employer to an employee every month detailing their total compensation, breakdown of allowances, statutory deductions, and the net take-home pay. It serves as legal, audit-verified proof of employment and wage disbursement.
          </p>

          <p>
            For salaried individuals across India, the salary slip is not just a monthly statement—it is a cornerstone financial instrument. Whether you are submitting tax declarations to claim <strong>HRA exemptions under Section 10(13A)</strong>, filing your annual Income Tax Return (ITR), seeking approval for a mortgage or personal loan, or applying for an international travel visa at a foreign consulate, salary slips are the primary verification document demanded by financial institutions and statutory bodies.
          </p>
        </div>

        {/* 2. Key Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
              <DollarSign className="w-4 h-4" />
              <span>1. Standard Earnings Components</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li>
                <strong>Basic Salary:</strong> Typically represents 40% to 50% of the total compensation and serves as the baseline for PF and gratuity computations.
              </li>
              <li>
                <strong>House Rent Allowance (HRA):</strong> Granted to employees to meet accommodation rental expenses, eligible for tax rebate under Section 10(13A).
              </li>
              <li>
                <strong>Conveyance &amp; Transport Allowance:</strong> Covers daily commuting expenses between the employee&apos;s residence and workplace.
              </li>
              <li>
                <strong>Special &amp; Performance Allowance:</strong> Balance residual component used to balance the total fixed compensation structure.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>2. Statutory Deductions Breakdown</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li>
                <strong>Employees&apos; Provident Fund (EPF):</strong> Statutory retirement savings contribution (usually 12% of Basic + DA) remitted to the EPFO under Section 80C.
              </li>
              <li>
                <strong>Professional Tax (PT):</strong> State-level levy imposed on salaried professionals (e.g., up to ₹200/month or ₹2,500/year under state tax statutes).
              </li>
              <li>
                <strong>Tax Deducted at Source (TDS):</strong> Advance income tax withheld by the employer under Section 192 based on estimated tax liability.
              </li>
              <li>
                <strong>Insurance &amp; Voluntary Deductions:</strong> Group term health insurance premiums or loan repayments.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Why Small Businesses & Freelancers Need to Issue Payslips */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
          Why Small Businesses, Freelancers &amp; Startups Need to Issue Salary Slips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-600 leading-relaxed mt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                1
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Statutory Labor Compliance
              </h3>
              <p>
                Under the Payment of Wages Act and state Shops &amp; Commercial Establishments Acts, issuing itemized salary slips prevents labor dispute penalties and creates legal audit trails during inspections.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 text-emerald-700 font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Avoid Legal Penalties
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-3">
                2
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Employee Trust &amp; Loan Support
              </h3>
              <p>
                Employees working at startups or MSMEs frequently need payslips for credit cards, personal loans, or visa applications. Issuing clean, professional PDF payslips boosts staff morale and financial credibility.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 text-emerald-700 font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Facilitate Bank Approvals
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-3">
                3
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                Smooth Financial Accounting
              </h3>
              <p>
                Having structured salary vouchers simplifies bookkeeping for your Chartered Accountant (CA), ensuring accurate salary expense claims in business Profit &amp; Loss (P&amp;L) accounts during tax filing.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 text-emerald-700 font-medium flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" /> Clean Business Audit Trails
            </div>
          </div>
        </div>
      </section>

      {/* 4. Salary Slip vs Form 16 vs ITR Comparison */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
          Salary Slip vs. Form 16 vs. Income Tax Return (ITR)
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th className="p-3 font-bold">Feature / Attribute</th>
                <th className="p-3 font-bold">Salary Slip (Payslip)</th>
                <th className="p-3 font-bold">Form 16 (TDS Certificate)</th>
                <th className="p-3 font-bold">ITR-V (Acknowledgment)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Frequency of Issue</td>
                <td className="p-3">Monthly (by pay date)</td>
                <td className="p-3">Annually (on or before June 15)</td>
                <td className="p-3">Annually (filed by July 31)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Issuing Authority</td>
                <td className="p-3">Employer / Payroll HR</td>
                <td className="p-3">Employer (via TRACES portal)</td>
                <td className="p-3">Income Tax Department</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Primary Purpose</td>
                <td className="p-3">Monthly wage breakdown &amp; attendance record</td>
                <td className="p-3">Annual summary of taxable salary &amp; TDS paid</td>
                <td className="p-3">Official proof of total annual tax filing</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Key Information</td>
                <td className="p-3">Basic, HRA, Conveyance, PF, PT, Net Pay</td>
                <td className="p-3">Part A (TDS deposited) + Part B (Tax compute)</td>
                <td className="p-3">Total Gross Income, Tax Paid, Refund/Dues</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-emerald-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions (Salary Slips)
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-900 text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/50 border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
