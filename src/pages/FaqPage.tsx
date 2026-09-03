import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, FileText, CheckCircle2, Calculator, ShieldCheck, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';

interface FaqPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ setActivePage }) => {
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
    {
      question: 'Can I generate salary slips and legal affidavits on this platform?',
      answer:
        'Yes. We offer dedicated generators for professional employee salary slips (with automated EPF, PT, and TDS calculations) and legal self-declaration affidavits (for address proof, name change, and gap declarations with e-stamp margin support).',
    },
    {
      question: 'Can I verify the authenticity of a generated receipt via QR code?',
      answer:
        'Yes. Every generated receipt comes with a tamper-resistant QR code containing receipt metadata. Scanning the QR code with any smartphone camera opens our instant verification portal to confirm the receipt details.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb Navigation */}
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <button
          onClick={() => setActivePage('home')}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-slate-900">Frequently Asked Questions</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        {/* Header */}
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center &amp; FAQs</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base text-slate-600 mt-2">
            Clear answers about rent receipts, HRA tax exemption, PAN rules, revenue stamps, and our free tools.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
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
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 bg-slate-50/60 hover:bg-slate-100/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 py-4 text-base text-slate-600 leading-relaxed bg-white border-t border-slate-100 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>

                {/* Mid-FAQ Content Ad Space - Hidden on mobile to maintain smooth reading */}
                {index === 4 && (
                  <div className="py-2">
                    <AdSlot type="banner" hideOnMobile={true} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Quick Links Banner */}
        <div className="p-6 bg-blue-50/60 border border-blue-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Need to generate a document right now?
            </h3>
            <p className="text-sm text-slate-600 mt-0.5">
              Choose from rent receipts, salary slips, or legal affidavits.
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('rent-receipt');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start Generating</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Ad Slot */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>
      </div>
    </div>
  );
};
