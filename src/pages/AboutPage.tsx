import React from 'react';
import { Heart, Sparkles, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';

interface AboutPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb / Back Navigation */}
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <button
          onClick={() => setActivePage('home')}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </button>
        <span>/</span>
        <span className="text-slate-900">About Us</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        {/* Header */}
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Our Story & Mission</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            About RentReceipt
          </h1>
          <p className="text-base text-slate-600 mt-2">
            Why we built an open, 100% client-side, zero-database financial and legal document suite for Indian taxpayers and salaried professionals.
          </p>
        </div>

        {/* Narrative Content (600+ words) */}
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base">
          <h2 className="text-xl font-bold text-slate-900">
            The Story Behind the Tool
          </h2>
          <p>
            Like millions of salaried professionals in India, every year between December and February, we faced the same dreaded ritual: the corporate investment proof declaration window. HR emails would start flooding in with strict deadlines: <em>&ldquo;Please submit rent receipts and landlord PAN by Friday to claim HRA exemptions under Section 10(13A).&rdquo;</em>
          </p>
          <p>
            The existing options were frustrating. We either had to manually copy-paste names, amounts, and dates across 12 separate Microsoft Word or Excel receipt templates, or use clumsy online PDF editors that forced us to create accounts, hit paywalls, or plastered intrusive watermarks across the page. Worse yet, many websites demanded personal phone numbers and uploaded sensitive financial information to unknown backend servers.
          </p>
          <p>
            We thought: <strong>why does generating a standard 1-page or 12-month rent receipt need to be so painful, slow, and privacy-invasive?</strong>
          </p>
          <p>
            In response, we built <strong>RentReceipt</strong> as a lightweight, clean, fast, and completely free web utility. What started as a focused{' '}
            <button
              onClick={() => setActivePage('rent-receipt')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Rent Receipt Generator
            </button>{' '}
            has now expanded into a comprehensive suite including an online{' '}
            <button
              onClick={() => setActivePage('salary-slip')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Salary Slip Generator
            </button>{' '}
            and a legal{' '}
            <button
              onClick={() => setActivePage('affidavit')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Rent Affidavit &amp; Address Proof Generator
            </button>
            .
          </p>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 my-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Our Guiding Architectural Principles</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>100% Client-Side Privacy:</strong> Your sensitive PAN numbers, salaries, and addresses never touch a server database. Everything is calculated and rendered directly in your browser.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>No Paywalls &amp; No Forced Signups:</strong> No subscriptions, premium tiers, or registration barriers. All tools are accessible to all salaried workers and small business employers for free.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Accurate Legal Formatting:</strong> Built strictly according to Indian Income Tax rules, including ₹1 revenue stamp placeholders, landlord PAN compliance thresholds, and formal Section 10(13A) audit standards. Read our full{' '}
                <button
                  onClick={() => setActivePage('guide')}
                  className="text-blue-600 font-semibold hover:underline cursor-pointer"
                >
                  HRA Tax Rules Guide
                </button>
                .</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            Why Client-Side In-Browser Processing Matters
          </h2>
          <p>
            When claiming House Rent Allowance or generating monthly compensation slips, you handle confidential identifiers: your Permanent Account Number (PAN), your landlord&apos;s PAN, gross earnings, provident fund contributions, and residential addresses. On traditional websites, this information is sent over APIs and stored in backend databases that are vulnerable to data breaches or unsolicited telemarketing.
          </p>
          <p>
            RentReceipt uses modern web technologies (HTML5 Canvas, Web Cryptography, and in-memory PDF generation) to ensure that <strong>zero bytes of your input data leave your device</strong>. Once you close your browser tab or click refresh, all input values vanish entirely. You can inspect our security commitments in our{' '}
            <button
              onClick={() => setActivePage('privacy')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            .
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            Who Are We?
          </h2>
          <p>
            We are an independent group of software engineers, tax enthusiasts, and product designers based in India. We build focused, lightweight web tools that eliminate administrative friction for salaried employees, tenants, freelancers, and small business owners.
          </p>
          <p>
            If you have ideas for new document templates, feature improvements, or bug reports, we welcome you to reach out via our{' '}
            <button
              onClick={() => setActivePage('contact')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              Contact &amp; Support Desk
            </button>
            . For quick answers to common questions about rent receipts, salary slips, and HRA rules, check our{' '}
            <button
              onClick={() => setActivePage('faq')}
              className="text-blue-600 font-semibold hover:underline cursor-pointer"
            >
              FAQ knowledge base
            </button>
            .
          </p>

          {/* Mid-Content Ad Slot - Clean on desktop, hidden on mobile for seamless reading */}
          <div className="my-6">
            <AdSlot type="banner" hideOnMobile={true} />
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            How This Site Stays Free
          </h2>
          <p>
            To keep this tool completely free and cover web hosting, domain maintenance, and ongoing development costs, we display standard, non-intrusive advertisements (such as Google AdSense). We purposefully keep these ad placements cleanly separated from the interactive generator forms so that you always enjoy a distraction-free, seamless experience.
          </p>
          <p>
            If you find this suite helpful, the greatest way to support us is by sharing the link with your colleagues, friends, or roommates who might also be rushing to submit their HRA proofs or salary slips this tax season!
          </p>
        </div>

        {/* Bottom Ad Slot */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>

        {/* Call to action */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-medium text-slate-700">
            Ready to generate your documents?
          </span>
          <button
            onClick={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
          >
            <span>Explore All Free Generators</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
