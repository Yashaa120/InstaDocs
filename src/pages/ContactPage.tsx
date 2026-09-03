import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Clock, Shield } from 'lucide-react';
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
    window.location.href = `mailto:support@rentreceipt.app?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
  };

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
        <span className="text-slate-900">Contact Us</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Contact info & support details */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Contact Us
            </h1>
            <p className="text-sm text-slate-600 mt-2">
              Have questions, feedback, bug reports, or feature suggestions? We’d love to hear from you.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                  Direct Email
                </span>
                <a
                  href="mailto:support@rentreceipt.app"
                  className="text-sm font-bold text-blue-600 hover:underline break-all"
                >
                  support@rentreceipt.app
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                  Response Time
                </span>
                <span className="text-sm font-medium text-slate-700">
                  Usually within 24–48 hours
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-slate-100 text-slate-600 rounded-lg shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-slate-400 block tracking-wider">
                  Privacy First
                </span>
                <span className="text-xs text-slate-600">
                  We never share your email address with third parties.
                </span>
              </div>
            </div>
          </div>

          {/* Left Column Ad Slot */}
          <div className="pt-1">
            <AdSlot type="sidebar" />
          </div>
        </div>

        {/* Right Column: Contact form */}
        <div className="md:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold text-slate-900 mb-1">
            Send a Message
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Fill out the details below to generate an email directly to our support desk.
          </p>

          {isSubmitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="text-base font-bold text-emerald-900">
                Email Client Triggered!
              </h3>
              <p className="text-xs text-emerald-700 max-w-sm mx-auto">
                Your email client was opened with your message. If it didn&apos;t open automatically, you can write directly to{' '}
                <strong>support@rentreceipt.app</strong>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-emerald-800 underline"
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
                  Subject
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
                  Message / Feedback *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell us what's on your mind, suggest a feature, or report an issue..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                id="send-message-btn"
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom Ad Slot */}
      <div className="pt-8">
        <AdSlot type="pre-footer" />
      </div>
    </div>
  );
};
