import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, CheckCircle2, ShieldAlert, Calculator, BookOpen } from 'lucide-react';
import { AdSlot } from './AdSlot';

export const HomeContentSections: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is this rent receipt generator 100% free to use?',
      answer:
        'Yes, completely free. You can generate, customize, preview, and download as many monthly or annual rent receipts as you need without any subscription, watermark, or hidden fees.',
    },
    {
      question: 'Do I need to create an account or sign up to generate receipts?',
      answer:
        'No account or registration is required. You can instantly fill in your details and download your PDF receipts in seconds without providing your email address, phone number, or password.',
    },
    {
      question: 'Is my personal or financial data stored on your servers?',
      answer:
        'No. This tool operates entirely client-side inside your web browser using HTML5 and JavaScript. Your tenant name, landlord name, rent amount, property address, and PAN are processed in your local browser memory only and never uploaded or transmitted to any server.',
    },
    {
      question: 'When is Landlord PAN mandatory for claiming HRA tax exemption?',
      answer:
        'Under Central Board of Direct Taxes (CBDT) circulars and Income Tax rules, furnishing the Landlord\'s Permanent Account Number (PAN) is mandatory if your total annual rent paid exceeds ₹1,00,000 (which equals more than ₹8,333 per month). If your annual rent is ₹1,00,000 or below, landlord PAN is optional, though a signed receipt is still required.',
    },
    {
      question: 'When is a ₹1 Revenue Stamp required on a rent receipt?',
      answer:
        'Under the Indian Stamp Act, a ₹1 revenue stamp is legally required if the rent payment is made in cash and the transaction amount exceeds ₹5,000 per month. The landlord must sign across the revenue stamp. If you pay rent via digital modes such as direct bank transfer (NEFT/IMPS/RTGS), UPI, or cheque, the revenue stamp is generally not mandatory, though a signed physical or digital receipt is still essential for HRA proof.',
    },
    {
      question: 'Can I generate rent receipts for the full financial year (all 12 months) at once?',
      answer:
        'Yes! Switch the Rent Period selector from "Single Month" to "Multiple Months (e.g. FY 2025-26)" and select your start month/year and end month/year. When you click "Generate & Download PDF", the tool will generate a single PDF document containing formatted receipts for every individual month on separate pages.',
    },
    {
      question: 'Can I claim HRA if I pay rent to my parents or family members?',
      answer:
        'Yes, you can legally claim HRA exemption by paying rent to your parents, provided you genuinely transfer the rent (preferably via bank transfer or cheque), execute a rent agreement, and collect signed rent receipts from them. Note that your parents must declare this rental income in their annual Income Tax Return (ITR). You cannot pay rent to your spouse and claim HRA.',
    },
    {
      question: 'How is the HRA tax exemption amount calculated by the Income Tax Department?',
      answer:
        'Under Section 10(13A) and Rule 2A of the Income Tax Rules, the exempt HRA is the minimum of three amounts: (1) Actual HRA received from your employer, (2) Actual rent paid minus 10% of your basic salary + dearness allowance, or (3) 50% of basic salary for metro cities (Delhi, Mumbai, Kolkata, Chennai) or 40% of basic salary for non-metro cities.',
    },
  ];

  return (
    <div className="space-y-12 my-12 text-slate-800">
      {/* 1. What is a Rent Receipt? Section */}
      <section id="what-is-rent-receipt" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        <div className="flex items-center space-x-3 text-blue-600 mb-4">
          <div className="p-2.5 bg-blue-50 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Essential Tax Documentation</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          What is a Rent Receipt and Why is it Important?
        </h2>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 text-base">
          <p>
            A <strong>Rent Receipt</strong> is an official legal document and documentary acknowledgment issued by a landlord (property owner) to a tenant confirming that rent for a specific residential property has been received for a defined period. In India, rent receipts serve as primary documentary evidence under <strong>Section 10(13A) of the Income Tax Act, 1961</strong>, allowing salaried employees to claim <strong>House Rent Allowance (HRA) tax exemption</strong> and reduce their annual taxable income.
          </p>
          <p>
            When employers calculate Tax Deducted at Source (TDS) on salaries during the year-end tax declaration window (typically December to February), employees are required to submit valid proof of rent paid. A standard rent receipt includes the tenant’s full name, landlord’s name and signature, monthly rental figure in both numerical digits and words, the exact residential address, the rent cycle (e.g., April 2025), the payment transaction mode, and where applicable, the landlord’s Permanent Account Number (PAN) and a ₹1 revenue stamp.
          </p>
          <p>
            Without timely and properly signed rent receipts, your employer cannot grant you the HRA tax benefit on your monthly Form 16, resulting in significantly higher tax deductions from your salary. Generating clean, pre-filled, standardized receipts eliminates calculation disputes and ensures rapid verification by corporate payroll and internal audit teams.
          </p>
        </div>
      </section>

      {/* 2. Why is it needed for HRA Exemption? (Detailed Tax Rules) */}
      <section id="hra-exemption-rules" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        <div className="flex items-center space-x-3 text-blue-600 mb-4">
          <div className="p-2.5 bg-blue-50 rounded-xl">
            <Calculator className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Income Tax Compliance</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          Why Rent Receipts are Required for HRA Exemption (Income Tax Rules)
        </h2>

        <div className="space-y-6 text-slate-600 leading-relaxed text-base">
          <p>
            House Rent Allowance (HRA) is one of the most substantial salary components provided to salaried individuals in India to meet rental housing costs. However, under the <strong>Income Tax Act</strong>, HRA is not automatically tax-free. To claim exemption under the Old Tax Regime, employees must demonstrate that they actually incur rental expenditure by presenting valid rent receipts and rent agreements.
          </p>

          {/* Key statutory highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-2 font-bold text-slate-900 mb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>CBDT ₹1 Lakh PAN Rule</span>
              </div>
              <p className="text-sm text-slate-600">
                According to Central Board of Direct Taxes Circular No. 08/2013, if the total annual rent paid by an employee exceeds <strong>₹1,00,000 per annum</strong> (approx. ₹8,334/month), it is mandatory to report the landlord’s PAN on the rent receipts and Form 12BB. If the landlord does not have a PAN, a signed declaration (Form 60) must be provided.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center space-x-2 font-bold text-slate-900 mb-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span>₹1 Revenue Stamp Mandate</span>
              </div>
              <p className="text-sm text-slate-600">
                Under the Indian Stamp Act, 1899, if cash payments exceed <strong>₹5,000 per transaction</strong>, a ₹1 revenue stamp must be affixed to the receipt and signed across by the landlord. If paid through banking channels (NEFT, RTGS, IMPS, UPI, or Cheque), the revenue stamp is optional, but retaining the bank transaction reference is recommended.
              </p>
            </div>
          </div>

          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-5">
            <h3 className="text-base font-bold text-blue-950 mb-2">
              The 3-Step Formula for Calculating HRA Exemption:
            </h3>
            <p className="text-sm text-blue-900 mb-3">
              Under Rule 2A of the Income Tax Rules, the tax-exempt portion of HRA is calculated as the <strong>lowest</strong> of the following three parameters:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm text-blue-950 font-medium">
              <li>Actual House Rent Allowance (HRA) received from your employer.</li>
              <li>Actual rent paid minus 10% of your Basic Salary + Dearness Allowance (DA).</li>
              <li>50% of Basic Salary + DA (if living in Delhi, Mumbai, Kolkata, or Chennai) OR 40% of Basic Salary + DA (for all other Indian cities).</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 3. How to Use this Tool Step-by-Step */}
      <section id="how-to-use" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        <div className="flex items-center space-x-3 text-blue-600 mb-4">
          <div className="p-2.5 bg-blue-50 rounded-xl">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Quick Guide</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
          How to Generate and Submit Your Rent Receipts in 4 Simple Steps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-3">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Enter Details</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Type in tenant name, landlord name, property address, and monthly rent. Watch the live preview update instantly.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-3">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Choose Period</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Select single month or multi-month range (e.g. full financial year from April to March) using quick presets.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-3">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Download PDF</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Click &ldquo;Generate &amp; Download PDF&rdquo; to receive a crisp, high-resolution multi-page PDF on your device instantly.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/40">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm mb-3">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">Sign &amp; Submit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Have your landlord sign the physical or digital document, affix a ₹1 stamp if cash, and upload to your HR/Payroll portal.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interactive FAQs */}
      <section id="faqs" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        <div className="flex items-center space-x-3 text-blue-600 mb-4">
          <div className="p-2.5 bg-blue-50 rounded-xl">
            <HelpCircle className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Got Questions?</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          Everything you need to know about rent receipts, HRA tax deductions, PAN regulations, and our generator tool.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <React.Fragment key={faq.question}>
                <div
                  id={`faq-item-${index}`}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 bg-slate-50/50 hover:bg-slate-100/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 py-4 text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>

                {index === 3 && (
                  <div className="py-2">
                    <AdSlot type="banner" hideOnMobile={true} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
};
