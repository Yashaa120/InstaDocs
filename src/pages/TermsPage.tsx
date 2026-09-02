import React from 'react';
import { FileText, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import { ActivePage } from '../types';

interface TermsPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ setActivePage }) => {
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
        <span className="text-slate-900">Terms &amp; Conditions</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 mb-3">
            <Scale className="w-3.5 h-3.5 text-amber-600" />
            <span>Legal Disclaimer &amp; Usage Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Effective Date: September 1, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base">
          <p>
            Welcome to <strong>Rent Receipt Generator</strong>. By accessing or using this website, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website.
          </p>

          <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-2">
            <h2 className="text-base font-bold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-700" />
              <span>Important Tax &amp; Legal Advisory Notice</span>
            </h2>
            <p className="text-sm text-amber-900 leading-relaxed">
              This generator is a client-side document formatting utility provided strictly for administrative convenience. It does <strong>not</strong> constitute legal, accounting, tax, or financial advice. We strongly advise users to consult with a certified Chartered Accountant (CA) or tax professional regarding specific House Rent Allowance (HRA) exemptions under Section 10(13A) of the Income Tax Act.
            </p>
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            1. Use of the Tool &amp; User Responsibilities
          </h2>
          <p>
            You are solely responsible for ensuring the accuracy, truthfulness, and legality of all information entered into the form fields (including tenant names, landlord names, property addresses, rent amounts, payment records, and PAN credentials).
          </p>
          <p>
            <strong>Prohibition of Fraudulent Claims:</strong> You agree never to generate fictitious, falsified, or fabricated rent receipts to make illegitimate tax exemption claims. Generating false rent receipts without actual tenancy or rental payments violates provisions of the Income Tax Act, 1961, and may attract stringent penalties, tax assessments, and legal prosecution from the Income Tax Department of India.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            2. &ldquo;As Is&rdquo; and &ldquo;As Available&rdquo; Disclaimer
          </h2>
          <p>
            The service and all generated PDF documents are provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express or implied.
          </p>
          <p>
            We make no warranties or representations regarding:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm">
            <li>The absolute legal acceptability of generated receipts by every individual employer, assessing officer, or judicial body.</li>
            <li>The continuous, uninterrupted, error-free, or virus-free operation of the website.</li>
            <li>The suitability of the generated document for non-Indian legal jurisdictions or commercial lease disputes.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900">
            3. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall the creators, owners, or operators of Rent Receipt Generator be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages—including but not limited to loss of tax benefits, TDS penalties, employment audits, or data loss—arising out of or in connection with your use or inability to use this service.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            4. Statutory Requirements &amp; Signatures
          </h2>
          <p>
            Generating a PDF receipt using this tool does not make it legally binding until it is properly executed according to Indian law. A rent receipt is only valid when signed by the actual landlord or property owner. Furthermore, if cash rent exceeds ₹5,000 per month, a ₹1 revenue stamp must be physically affixed and signed across by the landlord pursuant to the Indian Stamp Act, 1899.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            5. Intellectual Property
          </h2>
          <p>
            The software, code, styling, graphic elements, and branding of Rent Receipt Generator are the intellectual property of its creators and are protected by applicable copyright and intellectual property laws. Users may generate and download receipts for personal or legitimate business filing purposes, but may not scrape, clone, or redistribute the underlying codebase for commercial sale without prior written consent.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            6. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
        </div>
      </div>
    </div>
  );
};
