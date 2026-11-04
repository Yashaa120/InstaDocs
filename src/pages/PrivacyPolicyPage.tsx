import React from 'react';
import { ShieldCheck, Lock, EyeOff, Server, Cookie, ExternalLink, Mail, CheckCircle } from 'lucide-react';
import { ActivePage } from '../types';

interface PrivacyPolicyPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ setActivePage }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
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
        <span>/</span>
        <span className="text-slate-900 font-semibold">Privacy Policy</span>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 mb-3">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Server Data Retention Guarantee</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Effective Date: November 4, 2026 &bull; Published by RentReceipt.online
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6 text-sm sm:text-base">
          <p>
            At <strong>RentReceipt.online</strong> (accessible from <a href="https://www.rentreceipt.online" className="text-blue-600 hover:underline">https://www.rentreceipt.online</a>), protecting the privacy and personal autonomy of our worldwide visitors is our highest priority. This comprehensive Privacy Policy document details the strict client-side architecture governing our utility, our zero-server-storage policies, the operational parameters of third-party advertising partners (including Google AdSense), and your explicit data rights under international data protection laws such as GDPR, CCPA/CPRA, and PIPEDA.
          </p>

          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 space-y-2.5">
            <h2 className="text-base font-bold flex items-center gap-2 text-emerald-900">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <span>Core Privacy Guarantee at a Glance</span>
            </h2>
            <ul className="list-disc list-inside text-xs sm:text-sm space-y-1.5 text-emerald-900">
              <li><strong>Zero Document Data Transmitted:</strong> All document generation, number-to-words conversions, digital signature signing, and PDF exports occur 100% locally within your device's web browser canvas.</li>
              <li><strong>No Databases or Cloud Storage:</strong> We do not operate databases storing tenant names, landlord identities, rental property addresses, PAN cards, SSNs, or payment amounts.</li>
              <li><strong>No User Account or Registration:</strong> You are never asked to create an account, register an email address, or provide phone numbers to use any of our free tools.</li>
              <li><strong>Instant Tab Purge:</strong> When you reload or close your web browser tab, all entered data is immediately purged from volatile device memory.</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            1. 100% In-Browser Client-Side Processing Architecture
          </h2>
          <p>
            Conventional web applications transmit user input across public networks to remote server clusters for processing, database storage, and file generation. RentReceipt.online is architected on a modern <em>zero-backend, client-side streaming model</em>.
          </p>
          <p>
            When you enter rental data (such as tenant full name, landlord full name, rented property address, monthly rent amount, landlord Permanent Account Number / Taxpayer ID, or payment references), that information stays in your local device RAM. The JavaScript code compiling the document runs locally via client-side libraries (jsPDF and HTML-to-Canvas). The compiled PDF binary is streamed directly from your browser memory to your local file download manager without making an API upload request to any server.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            2. Cookies, Local Storage &amp; Web Beacons
          </h2>
          <p>
            RentReceipt.online does not use first-party tracking cookies to build user profiles or monitor private browsing habits. We may utilize standard browser <code>localStorage</code> solely to remember non-sensitive user interface preferences (such as your preferred active currency, e.g. USD, EUR, GBP, CAD, or INR, or your interface language selection). This preference data never leaves your device and can be cleared at any time through your browser settings.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            3. Google AdSense &amp; Third-Party Advertising Policy
          </h2>
          <p>
            To keep our document generator tools, calculators, and tax compliance guides 100% free for users worldwide without requiring paid subscriptions, we partner with third-party advertising networks, including <strong>Google AdSense</strong>.
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>
              <strong>Google DART Cookies:</strong> Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
            </li>
            <li>
              <strong>Personalized Advertising Opt-Out:</strong> Users may opt out of personalized advertising by visiting <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.aboutads.info</a>.
            </li>
            <li>
              <strong>Advertising Placement Integrity:</strong> In strict compliance with Google AdSense Program Policies, advertisements are never served on screens lacking content, within interactive modals, or disguised as tool actions. Ad placements are distinctly isolated with standard "ADVERTISEMENT" labels and generous margins to prevent accidental clicks.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            4. Server Log Files &amp; Technical Diagnostics
          </h2>
          <p>
            Like virtually all web hosts, our hosting servers automatically log standard network requests when visitors access web pages. The information recorded in log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and number of clicks. These technical data points are not linked to any personally identifiable information (PII) and are utilized strictly for server health monitoring, DDoS mitigation, and aggregate traffic diagnostics.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            5. European Union General Data Protection Regulation (GDPR) Compliance
          </h2>
          <p>
            For visitors residing in the European Economic Area (EEA) and the United Kingdom, we adhere strictly to the General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018. Under these regulations, you hold the following statutory rights:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>Right of Access:</strong> You have the right to request copies of your personal data. Because we store zero personal data on servers, we hold no user files to furnish.</li>
            <li><strong>Right to Rectification:</strong> You can edit any details directly inside the in-browser form inputs in real time.</li>
            <li><strong>Right to Erasure:</strong> Refreshing or closing your browser window instantly purges all inputs from device memory.</li>
            <li><strong>Right to Restrict or Object to Processing:</strong> You have full control over cookie preferences through your browser settings or consent management banners.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            6. California Consumer Privacy Act (CCPA &amp; CPRA) Notice
          </h2>
          <p>
            For residents of California, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) provide specific data rights:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li><strong>No Sale or Sharing of Personal Information:</strong> RentReceipt.online does not sell, rent, or trade user personal information to data brokers or third parties. We do not monetize personal data.</li>
            <li><strong>Right to Know &amp; Delete:</strong> As stated, our architecture stores zero personal identifiable information on our infrastructure.</li>
            <li><strong>Non-Discrimination:</strong> We provide identical, high-speed, 100% free document generation tools to all users regardless of privacy rights exercised.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            7. Children's Online Privacy Protection (COPPA)
          </h2>
          <p>
            Another essential part of our commitment is adding protection for children while using the internet. RentReceipt.online provides administrative, tenancy, and tax compliance utilities intended for adult tenants, salaried employees, and property owners. We do not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe your child provided personal information on our website, please contact us immediately, and we will verify that no such data exists on any database.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            8. Third-Party External Links
          </h2>
          <p>
            Our statutory guides and editorial blog articles contain references and hyperlinks to government portals (such as incometax.gov.in, irs.gov, gov.uk, and cra-arc.gc.ca). If you click on a third-party link, you will be directed to that site. We strongly advise you to review the Privacy Policy of every external website you visit, as we have no control over and assume no responsibility for third-party practices.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy periodically to reflect technological enhancements, statutory tax updates, or regulatory revisions. We encourage users to review this page periodically for any updates. Changes are effective immediately upon posting to this URL.
          </p>

          <h2 className="text-xl font-bold text-slate-900 pt-2">
            10. Contacting Our Data Privacy Team
          </h2>
          <p>
            If you have questions, feedback, or require clarification regarding our privacy architecture, please contact our administrative desk:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1 text-slate-700">
            <p><strong>Website:</strong> <a href="https://www.rentreceipt.online" className="text-blue-600 hover:underline">https://www.rentreceipt.online</a></p>
            <p><strong>Primary Support Email:</strong> <a href="mailto:support@rentreceipt.online" className="text-blue-600 hover:underline">support@rentreceipt.online</a></p>
            <p><strong>Official Postal Inquiries:</strong> RentReceipt.online Editorial Desk, Contact Support, Global Document Suite</p>
            <p><strong>Average Response Window:</strong> 24 to 48 business hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};
