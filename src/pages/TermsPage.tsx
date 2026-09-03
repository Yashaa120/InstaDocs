import React from 'react';
import {
  FileText,
  AlertTriangle,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ExternalLink,
  Ban,
  HelpCircle,
  Clock,
  Mail,
  FileCheck
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';

interface TermsPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb Navigation */}
      <nav className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500" aria-label="Breadcrumb">
        <button
          onClick={() => setActivePage('home')}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900 font-semibold">Terms &amp; Conditions</span>
      </nav>

      {/* Main Terms Document Card */}
      <article className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-slate-700">
        
        {/* Header Section */}
        <header className="border-b border-slate-100 pb-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-100">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span>Legal Agreement &amp; Terms of Service</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono pt-1">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md text-slate-700 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              Last Updated: September 2, 2026
            </span>
            <span>•</span>
            <span>Applies to all visitors, users, and generated documents</span>
          </div>
        </header>

        {/* Quick Highlights Box */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs sm:text-sm">
          <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-blue-600" />
            <span>Summary of Key Principles</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>Free administrative formatting tool</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>100% client-side browser processing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>Not a legal, tax, or accounting advisor</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
              <span>User responsible for data accuracy</span>
            </li>
          </ul>
        </div>

        {/* 11 Comprehensive Legal Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-600">

          {/* Section 1 */}
          <section className="space-y-3" id="introduction">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">1</span>
              <span>Introduction &amp; Acceptance of Terms</span>
            </h2>
            <p>
              Welcome to <strong>RentReceipt</strong> (&ldquo;Website&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing, browsing, or using this website, including its document generation utilities, calculation tools, guides, and download features, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions (&ldquo;Terms&rdquo;) in full.
            </p>
            <p>
              If you do not agree with, understand, or accept any provision set forth in these Terms, you must immediately cease accessing and using this website and any of its associated services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3" id="nature-of-service">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">2</span>
              <span>Nature of Service (Not Financial or Legal Advice)</span>
            </h2>
            <p>
              RentReceipt provides a complimentary, self-service online formatting and templating utility for generating standard administrative documents, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700 text-sm">
              <li>Residential Rent Receipts for House Rent Allowance (HRA) declaration purposes</li>
              <li>Monthly Salary Slips and compensation summary statements</li>
              <li>Self-declaration affidavits, rent declaration letters, and address proof formats</li>
              <li>HRA exemption calculators and informational compliance guides</li>
            </ul>
            <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-950 space-y-2 mt-3">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Strict Disclaimer of Advisory Services</span>
              </div>
              <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                This website is strictly an administrative document formatting software. We are <strong>not</strong> a law firm, tax consultancy, Chartered Accountant (CA) firm, or certified financial planning service. Nothing on this website constitutes legal, accounting, taxation, investment, or statutory advice. Users requiring guidance regarding specific tax exemptions under Section 10(13A) of the Income Tax Act, 1961, or contractual tenancy matters should consult a certified tax professional or qualified legal advocate.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3" id="no-warranty">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">3</span>
              <span>No Warranty (&ldquo;As-Is&rdquo; Provision)</span>
            </h2>
            <p>
              All templates, PDF downloads, calculators, articles, and services on this website are provided strictly on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis, without warranties, guarantees, or conditions of any kind, whether express, statutory, or implied.
            </p>
            <p>
              Without limiting the generality of the foregoing, the Website expressly disclaims any warranties of:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700 text-sm">
              <li><strong>Legal Validity:</strong> We do not warrant that documents formatted using this tool will be legally binding, fully enforceable, or admissible in a court of law without proper physical execution (such as actual physical signatures and required statutory revenue stamps under the Indian Stamp Act, 1899).</li>
              <li><strong>Tax Acceptance:</strong> We make no guarantee that an employer, corporate payroll department, tax assessing officer (AO), or the Income Tax Department of India will accept or approve your claimed tax deductions or exemptions.</li>
              <li><strong>Continuous Availability:</strong> We do not warrant that the website will operate uninterrupted, timely, secure, or free from typographical bugs, browser inconsistencies, or device rendering anomalies.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3" id="user-responsibility">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">4</span>
              <span>User Responsibility &amp; Prohibition of Fraud</span>
            </h2>
            <p>
              As a user of this tool, you assume full and exclusive responsibility for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700 text-sm">
              <li>Ensuring the absolute accuracy, completeness, truthfulness, and authenticity of all data entered into the generator fields (including tenant names, landlord names, property addresses, rental figures, payment modes, and Landlord Permanent Account Number [PAN]).</li>
              <li>Independently reviewing and verifying that generated documents comply with your employer&apos;s internal payroll guidelines, HR submission mandates, and prevailing statutory tax laws before submission.</li>
              <li>Obtaining genuine, authorized signatures from the actual landlord or authorized recipient prior to treating any receipt as a valid legal proof of payment.</li>
            </ul>
            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 text-rose-950 space-y-2 mt-3">
              <div className="flex items-center gap-2 font-bold text-rose-900 text-sm">
                <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Strict Prohibition of Fictitious or Fraudulent Claims</span>
              </div>
              <p className="text-xs sm:text-sm text-rose-900/90 leading-relaxed">
                You agree never to utilize this tool to manufacture fictitious, backdated, or fabricated rental receipts or salary slips to evade taxes or make fraudulent House Rent Allowance (HRA) claims where no genuine landlord-tenant relationship or monetary transaction exists. Submitting fake receipts violates the provisions of the Income Tax Act, 1961, and the Indian Penal Code / Bharatiya Nyaya Sanhita, and may attract monetary penalties, disallowance of claims, and legal prosecution by statutory authorities.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-3" id="no-data-storage">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">5</span>
              <span>Zero Server Data Storage &amp; Privacy Guarantee</span>
            </h2>
            <p>
              We firmly uphold user data confidentiality and privacy:
            </p>
            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Local Browser-Only Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900/90 leading-relaxed">
                All document generation, previewing, and PDF compilation occurs strictly inside your local web browser using client-side JavaScript (Canvas &amp; jsPDF). Your personal information, salary amounts, PAN details, signatures, and rental records are <strong>never</strong> transmitted to our servers, stored in any external database, logged, or shared with third parties.
              </p>
            </div>
            <p className="text-xs text-slate-500 pt-1">
              For complete details regarding our privacy commitments and automated client-side processing, please review our comprehensive{' '}
              <button
                onClick={() => setActivePage('privacy')}
                className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors"
              >
                Privacy Policy
              </button>.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3" id="intellectual-property">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">6</span>
              <span>Intellectual Property Rights</span>
            </h2>
            <p>
              All content on this website—including but not limited to the user interface designs, custom CSS styling, source code, interactive calculators, branding elements, typography layouts, and informational articles—is the proprietary intellectual property of RentReceipt and is protected by applicable copyright, trademark, and intellectual property laws.
            </p>
            <p>
              <strong>Permitted Use:</strong> You are granted a personal, revocable, non-exclusive, non-transferable license to use the website to format, preview, and download documents for your own personal use, family filing, or legitimate workplace documentation.
            </p>
            <p>
              <strong>Restricted Activities:</strong> You may not copy, scrape, clone, reverse-engineer, decompile, mirror, republish, sell, or redistribute the website&apos;s software, source code, or proprietary visual templates without prior written authorization from the website operators.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3" id="third-party-links">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">7</span>
              <span>Third-Party Links &amp; Advertisements</span>
            </h2>
            <p>
              The website may display third-party advertisements (such as Google AdSense banners) and hyperlinks leading to external third-party websites or services (e.g., the official Income Tax e-filing portal, UIDAI, banking portals, or tax preparation platforms).
            </p>
            <p>
              These third-party advertisements and external links are provided solely for user convenience and monetization to keep this service free of charge. RentReceipt does not control, investigate, endorse, or verify the content, claims, products, or privacy policies of third-party advertisers or external websites. We are not responsible or liable for any dealings, transactions, or damages incurred between you and any third-party advertiser or linked website.
            </p>

            <div className="py-2">
              <AdSlot type="banner" />
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-3" id="limitation-of-liability">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">8</span>
              <span>Limitation of Liability</span>
            </h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall RentReceipt, its creators, developers, owners, affiliates, or contributors be held liable for any direct, indirect, punitive, incidental, special, consequential, or exemplary damages whatsoever, including without limitation damages for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700 text-sm">
              <li>Disallowance or rejection of HRA tax exemptions, deductions, or refund claims by tax assessing officers or employers;</li>
              <li>Income tax reassessments, interest charges, penalties, or compliance notices from the Income Tax Department;</li>
              <li>Disputes or litigation between landlords and tenants concerning rental payments, security deposits, or occupancy;</li>
              <li>Loss of data, browser crashes, system errors, or inability to access the website during critical filing deadlines;</li>
              <li>Any unauthorized alterations made to downloaded PDF files after generation.</li>
            </ul>
            <p className="text-xs text-slate-500 pt-1">
              Your sole and exclusive remedy for dissatisfaction with the service or any generated document is to discontinue using the website.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3" id="changes-to-terms">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">9</span>
              <span>Modifications &amp; Changes to Terms</span>
            </h2>
            <p>
              We reserve the exclusive right, at our sole discretion, to modify, update, amend, or replace these Terms and Conditions at any time without prior individual notice.
            </p>
            <p>
              Any changes will become effective immediately upon being published on this page, and the &ldquo;Last Updated&rdquo; date at the top of these Terms will be refreshed accordingly. Your continued use of the website following the posting of revised Terms constitutes your full acceptance of and agreement to the updated Terms. We recommend checking this page periodically to stay informed of any updates.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3" id="governing-law">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">10</span>
              <span>Governing Law &amp; Jurisdiction</span>
            </h2>
            <p>
              These Terms and Conditions, as well as any disputes, claims, or controversies arising out of or related to your use of this website or its generated documents, shall be governed by, construed, and enforced in accordance with the substantive <strong>laws of the Republic of India</strong>, without giving effect to any conflict of law principles.
            </p>
            <p>
              Subject to applicable legal remedies, you irrevocably agree that the competent courts situated in India shall have exclusive jurisdiction over any legal action, dispute, or proceeding arising out of these Terms. As the service expands to serve international visitors, jurisdictional terms may be updated to reflect applicable cross-border principles.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3" id="contact-information">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 text-xs font-bold inline-flex items-center justify-center shrink-0">11</span>
              <span>Contact Information</span>
            </h2>
            <p>
              If you have any questions, feedback, clarifications, or concerns regarding these Terms and Conditions or any feature of the website, please feel free to reach out to our team:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="space-y-1">
                <div className="font-semibold text-slate-900 text-sm">Have inquiries about these Terms?</div>
                <div className="text-xs text-slate-500">We typically review user correspondence within 24–48 business hours.</div>
              </div>
              <button
                onClick={() => setActivePage('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Support Page</span>
              </button>
            </div>
          </section>

        </div>

        {/* Bottom Ad Slot */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>

        {/* Bottom Back Button & Stamp Notice */}
        <footer className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <span>Reference: Section 10(13A) Income Tax Act &amp; Indian Stamp Act, 1899</span>
          </div>
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors cursor-pointer"
          >
            ← Back to Free Generators
          </button>
        </footer>

      </article>
    </div>
  );
};
