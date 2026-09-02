import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, Cookie, ExternalLink } from 'lucide-react';
import { ActivePage } from '../types';

interface PrivacyPolicyPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ setActivePage }) => {
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
        <span className="text-slate-900">Privacy Policy</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 mb-3">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Server Data Retention</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated: September 1, 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-base">
          <p>
            At <strong>Rent Receipt Generator</strong> (accessible from our web application), your privacy is our foundational commitment. This Privacy Policy document outlines the types of information handled by our tool and explains our strict zero-data-retention architecture.
          </p>

          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-2">
            <h2 className="text-base font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Core Privacy Summary</span>
            </h2>
            <ul className="list-disc list-inside text-sm space-y-1 text-emerald-900">
              <li><strong>Zero Form Data Transmitted:</strong> All text inputs (tenant name, landlord name, address, rent amount, PAN) are processed solely in your browser memory.</li>
              <li><strong>No User Accounts:</strong> We do not ask for registration, login, phone number, or email.</li>
              <li><strong>No Database Storage:</strong> No databases or cloud storage are attached to this tool. When you refresh or close your browser tab, your session is wiped.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            1. Information Processed by the Generator Tool
          </h2>
          <p>
            When you utilize the rent receipt generator, you enter specific personal and financial details into web form fields, including:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-slate-700 text-sm">
            <li>Tenant&apos;s Full Legal Name</li>
            <li>Landlord&apos;s / Property Owner&apos;s Name</li>
            <li>Monthly Rent Amount and Payment Mode</li>
            <li>Rental House or Flat Address</li>
            <li>Landlord&apos;s Permanent Account Number (PAN)</li>
            <li>Rent Period Dates</li>
          </ul>
          <p>
            <strong>Technical Architecture:</strong> This data is held strictly in temporary client-side JavaScript memory (React state). The PDF rendering engine (jsPDF &amp; html2canvas) constructs the downloadable document directly inside your device&apos;s memory and initiates a local browser download. At no point during this operation is any form data sent across the network or stored on any server.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            2. Web Analytics and Log Files
          </h2>
          <p>
            Like standard websites, we or our web hosting infrastructure may collect standard, non-personally identifiable log information when you access our site. These logs may include internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, operating system, date/time stamps, and click counts. This data is used exclusively for analyzing technical trends, administering the site, preventing malicious DDoS traffic, and gathering aggregate demographic data. Log files are not linked to any personally identifiable information entered into the generator.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            3. Cookies and Web Beacons (Google AdSense &amp; Advertising Partners)
          </h2>
          <p>
            Our website may partner with third-party advertising networks, such as <strong>Google AdSense</strong>, to serve advertisements when you visit our website. These third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on Rent Receipt Generator, which are sent directly to users&apos; browsers.
          </p>
          <p>
            Google, as a third-party vendor, uses cookies (including the DoubleClick DART cookie) to serve ads to our site visitors based upon their visit to this website and other websites across the internet.
          </p>
          <p>
            Users may choose to opt out of the use of the DART cookie or personalized advertising by visiting the Google Ad and Content Network Privacy Policy at the following URL:{' '}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>Google Ads Privacy Policy</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            4. Third-Party Privacy Policies
          </h2>
          <p>
            Rent Receipt Generator&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p>
            You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers&apos; respective official websites.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            5. Children&apos;s Information
          </h2>
          <p>
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Rent Receipt Generator does not knowingly collect any Personal Identifiable Information from children under the age of 13.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            6. Consent &amp; Changes to Privacy Policy
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms. We may update our Privacy Policy periodically. We advise you to review this page periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};
