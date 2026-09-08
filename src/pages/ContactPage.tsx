import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  HelpCircle,
  FileText,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';

interface ContactPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setActivePage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Feedback / Query about Rent Receipt Generator',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || 'Rent Receipt Generator Query');
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:support@rentreceipt.online?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumbs with internal navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="hover:text-blue-600 transition-colors cursor-pointer"
        >
          Home
        </a>
        <span>/</span>
        <span className="text-slate-900">Contact Us</span>
      </nav>

      {/* Main Single H1 Section */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3 border border-blue-200">
          <Mail className="w-3.5 h-3.5" />
          <span>User Support &amp; Technical Inquiries</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Contact Us &amp; Technical Support Desk
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Need assistance with our free document tools, want to suggest new features for our{' '}
          <a
            href="#rent-receipt"
            onClick={(e) => {
              e.preventDefault();
              setActivePage('rent-receipt');
            }}
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Rent Receipt Generator
          </a>{' '}
          or{' '}
          <a
            href="#salary-slip"
            onClick={(e) => {
              e.preventDefault();
              setActivePage('salary-slip');
            }}
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
          >
            Salary Slip Generator
          </a>
          , or have feedback? Reach out directly to our engineering and support team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Left Column: Direct channels */}
        <div className="space-y-6">
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Direct Contact Information
            </h2>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                  Direct Email Desk
                </span>
                <a
                  href="mailto:support@rentreceipt.online"
                  className="text-sm font-bold text-blue-600 hover:underline break-all"
                >
                  support@rentreceipt.online
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                  Expected Response SLA
                </span>
                <span className="text-sm font-medium text-slate-700">
                  Typically within 24–48 business hours
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-100 text-slate-600 rounded-lg shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                  Privacy First Protocol
                </span>
                <span className="text-xs text-slate-600 leading-relaxed block">
                  We never store personal financial records or share email addresses. See our{' '}
                  <a
                    href="#privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      setActivePage('privacy');
                    }}
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>

          {/* Quick Self-Help Card */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-slate-50 rounded-2xl border border-blue-100 text-xs text-slate-700 space-y-3">
            <div className="flex items-center gap-2 text-blue-900 font-bold">
              <HelpCircle className="w-4 h-4 text-blue-600" />
              <span>Looking for Quick Answers?</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Check our comprehensive knowledge base before emailing. 90% of user queries regarding revenue stamps, landlord PAN rules, and employer submission deadlines are already covered.
            </p>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('faq');
              }}
              className="inline-flex items-center gap-1.5 font-bold text-blue-700 hover:text-blue-800 underline cursor-pointer"
            >
              <span>Browse All Frequently Asked Questions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Left Column Ad Slot */}
          <div className="pt-1">
            <AdSlot type="sidebar" />
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-1">
            Send Us a Message or Feature Request
          </h2>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Fill out the details below to generate an email directly to our support desk. Whether you discovered an edge case during PDF export or want a new template, we review every submission.
          </p>

          {isSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">
                Email Client Triggered Successfully!
              </h3>
              <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                Your email client was opened with your message parameters. If your mail software didn&apos;t open automatically, please send your email manually to{' '}
                <strong className="underline">support@rentreceipt.online</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-emerald-800 underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject Category
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message, Bug Report or Inquiry Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Describe your question or feedback. If reporting a formatting issue, please mention your browser and operating system..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                id="send-message-btn"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Support</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Expanded Informational Section: 400+ Words Content Coverage */}
      <div className="space-y-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
            Frequently Asked Inquiries Before Contacting Support
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            To save your time, here are quick resolutions for the most frequent inquiries our support desk receives each month regarding document generation, HRA compliance, and technical printing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Why did my PDF download fail or show a blank screen?</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All documents are rendered entirely within your web browser using HTML5 Canvas. If a download does not trigger, please check if your browser blocked an automatic download popup. You can also try using Chrome or Safari in standard mode, or use the &quot;Print to PDF&quot; option in your system print dialogue.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Is a physical revenue stamp mandatory on my rent receipt?</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Under the Indian Stamp Act, a ₹1 revenue stamp is only mandatory if rent exceeds ₹5,000 per month and is paid in <strong>cash</strong>. If you pay rent via UPI, NEFT, IMPS, or bank cheque, our digital transaction UTR reference format provides full legal audit validity. Check our{' '}
                <a
                  href="#guide"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('guide');
                  }}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  HRA Tax Rules Guide
                </a>{' '}
                for complete citations.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Does RentReceipt store my PAN or bank details?</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Zero storage guarantee:</strong> Our architecture does not possess backend customer databases. When you close or refresh your browser tab, all entered tenant names, landlord PAN numbers, and salary slip figures are purged from memory. Read our comprehensive{' '}
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('privacy');
                  }}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                <span>What if my landlord does not have a PAN card?</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your annual rent exceeds ₹1,00,000 (approx. ₹8,334/month) and your landlord lacks a PAN card, you must submit a signed <strong>Form 60</strong> declaration from the landlord along with your receipts, or generate a formal{' '}
                <a
                  href="#affidavit"
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage('affidavit');
                  }}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  Rent Affidavit &amp; Self-Declaration
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <h2 className="text-base font-bold text-slate-900 mb-2">
            Explore Free Tools &amp; Resources Across Our Platform
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            RentReceipt offers a complete suite of compliance generators designed specifically for Indian tax filers, salaried professionals, and property owners. Navigate to our other modules:
          </p>

          <div className="flex flex-wrap gap-2 text-xs">
            <a
              href="#rent-receipt"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('rent-receipt');
              }}
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-semibold transition-colors cursor-pointer"
            >
              🏠 Rent Receipt Generator
            </a>
            <a
              href="#salary-slip"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('salary-slip');
              }}
              className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold transition-colors cursor-pointer"
            >
              💼 Salary Slip Generator
            </a>
            <a
              href="#affidavit"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('affidavit');
              }}
              className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100 font-semibold transition-colors cursor-pointer"
            >
              📜 Rent Affidavit Generator
            </a>
            <a
              href="#guide"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('guide');
              }}
              className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 font-semibold transition-colors cursor-pointer"
            >
              📖 HRA Tax Exemption Guide
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                setActivePage('faq');
              }}
              className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold transition-colors cursor-pointer"
            >
              ❓ All FAQs &amp; Help
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Ad Slot */}
      <div className="pt-8">
        <AdSlot type="pre-footer" />
      </div>
    </div>
  );
};

