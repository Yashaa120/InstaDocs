import React, { useState } from 'react';
import {
  Scale,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  AlertTriangle,
  FileCheck2,
  Stamp,
  BookOpen,
  Info,
  CheckCircle,
} from 'lucide-react';

export const AffidavitContent: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What is an Affidavit and how does a Self-Declaration differ from it?',
      a: 'An affidavit is a written, sworn statement of facts voluntary made by a deponent (declarant) under an oath or solemn affirmation administered by a person legally authorized to administer oaths (such as a Notary Public, Oath Commissioner, or Magistrate) under the Indian Oaths Act, 1969. A self-declaration is a signed statement where an individual directly certifies the truthfulness of facts without an intermediary oath commissioner.',
    },
    {
      q: 'When is a self-declaration accepted versus when is formal notarization required?',
      a: 'Following government self-attestation reforms (promoted under administrative simplification guidelines), many public departments (like universities, municipal bodies, and utility providers) accept self-declarations for routine identity, address, or educational gap proofs. However, for passport applications, property transactions, court filings, name changes published in the official Gazette, or bank loan indemnities, a notarized affidavit executed on non-judicial e-stamp paper is strictly mandatory.',
    },
    {
      q: 'Which denomination of stamp paper is needed for an affidavit in India?',
      a: 'Stamp paper duty varies by state and purpose under the Indian Stamp Act, 1899 and respective State Stamp Acts. General self-declarations, address affidavits, and education gap declarations typically require ₹10, ₹20, ₹50, or ₹100 non-judicial e-Stamp papers. High-value undertakings or financial indemnity bonds may require ₹100 or ₹500 stamp papers.',
    },
    {
      q: 'How do I print this generated affidavit on non-judicial stamp paper?',
      a: 'Purchase a non-judicial e-Stamp paper from an authorized CRA (Stock Holding Corporation of India Ltd / SHCIL) or local sub-registrar counter. Download this affidavit PDF, adjust your printer margins to leave the top 4 to 5 inches blank (where the stamp header and barcode sit), or print on plain legal paper and attach it behind the e-Stamp certificate with notary verification stamps.',
    },
    {
      q: 'What are the legal consequences of making a false affidavit or declaration?',
      a: 'Filing a false declaration or affidavit is a serious punishable offense under Section 199 and Section 200 of the Indian Penal Code (IPC) / Bharatiya Nyaya Sanhita (BNS). Anyone deliberately swearing or affirming false statements can face imprisonment of up to 3 or 7 years along with substantial monetary fines.',
    },
    {
      q: 'Can this affidavit be used as proof of residence for Aadhaar or bank KYC?',
      a: 'Banks, telecom companies, and LPG gas agencies frequently accept a self-declaration of residence (especially for tenants or family members without individual utility bills in their name), often accompanied by a rent agreement or electricity bill of the landlord. For formal passport verification (Annexure formats), notarization is required.',
    },
  ];

  return (
    <div className="space-y-12 mt-12 pt-8 border-t border-slate-200" id="affidavit-guide-content">
      {/* 1. In-depth Article Overview */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full w-fit mb-4 border border-amber-200">
          <Scale className="w-3.5 h-3.5" />
          <span>Legal Knowledge &amp; Statutory Guidance</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
          What is an Affidavit &amp; Address Proof Self-Declaration?
        </h2>

        <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-4">
          <p>
            An <strong>Affidavit</strong> is a formal, written statement of truth sworn before an officer authorized by law (such as an Executive Magistrate, Notary Public, or Oath Commissioner). In modern administrative and judicial proceedings across India, affidavits serve as primary documentary evidence of facts within the personal knowledge of the declarant (deponent).
          </p>

          <p>
            A <strong>Self-Declaration</strong>, on the other hand, is a simplified legal instrument where the declarant directly affirms the veracity of facts—such as their current residential address, marital status, change of name, or educational gap—under personal liability for perjury.
          </p>
        </div>

        {/* 2. When to Notarize vs Self-Declare */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-slate-100">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>1. When Self-Declaration is Sufficient</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <li>
                <strong>Tenant Residence Proof:</strong> Submitting temporary address declarations for local gym, library, or informal club memberships.
              </li>
              <li>
                <strong>University / College Admissions:</strong> Declaring gap years, anti-ragging commitments, or category declarations during counseling.
              </li>
              <li>
                <strong>SIM Card &amp; Broadband Setup:</strong> Establishing local residential presence with secondary address proof.
              </li>
              <li>
                <strong>Internal Corporate KYC:</strong> Updating employee records with permanent vs. current correspondence addresses.
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-3 text-amber-800 font-bold text-sm">
              <Stamp className="w-4 h-4" />
              <span>2. When Notarization on Stamp Paper is Mandatory</span>
            </div>
            <ul className="text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <li>
                <strong>Passport &amp; Visa Applications:</strong> Annexure-E, Annexure-D, or minor passport declarations.
              </li>
              <li>
                <strong>Official Name Change &amp; Gazette:</strong> Publishing alias or surname modifications post-marriage in the Official Gazette.
              </li>
              <li>
                <strong>Court Proceedings &amp; Affidavits:</strong> Submitting evidence in civil suits, family disputes, or consumer forum claims.
              </li>
              <li>
                <strong>Property, Inheritance &amp; Bank Claims:</strong> Claiming deceased account balances or executing indemnity bonds.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step Procedure */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
          Step-by-Step Process: From Drafting to Legal Attestation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs text-slate-600 leading-relaxed mt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2.5 text-xs">
              1
            </div>
            <h3 className="font-bold text-slate-900 text-xs mb-1">Draft the Content</h3>
            <p>
              Fill your personal particulars, father&apos;s name, precise address, and specific declaration clauses using our live generator.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2.5 text-xs">
              2
            </div>
            <h3 className="font-bold text-slate-900 text-xs mb-1">Procure e-Stamp Paper</h3>
            <p>
              If notarization is required, obtain non-judicial e-Stamp paper (₹10–₹100) from an authorized SHCIL or court stamp counter.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2.5 text-xs">
              3
            </div>
            <h3 className="font-bold text-slate-900 text-xs mb-1">Print the Document</h3>
            <p>
              Download the PDF and print it directly onto the e-Stamp paper (or print on A4 sheet and staple as annexure).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mb-2.5 text-xs">
              4
            </div>
            <h3 className="font-bold text-slate-900 text-xs mb-1">Sign &amp; Attest</h3>
            <p>
              Sign before the Notary Public or Oath Commissioner who will record your entry, sign, stamp, and affix notary revenue stamps.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Statutory Legal Warning */}
      <section className="bg-amber-50/90 border border-amber-300/80 rounded-2xl p-6 sm:p-7 shadow-2xs">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <h3 className="text-base font-bold text-amber-900">
              Statutory Warning on Perjury &amp; False Declarations
            </h3>
            <p>
              Under <strong>Section 191, 193, 199, and 200 of the Indian Penal Code (IPC)</strong> (and corresponding provisions of the Bharatiya Nyaya Sanhita, 2023), deliberately giving false evidence, swearing an untrue affidavit, or signing a fraudulent self-declaration is a criminal offense punishable with imprisonment up to 7 years and heavy financial penalties.
            </p>
            <p className="text-amber-800 text-xs">
              Always ensure every statement, date, and identification detail declared in this document is completely accurate, truthful, and verified by original identity documents.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-amber-700" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions (Affidavits &amp; Self-Declarations)
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
                      isOpen ? 'transform rotate-180 text-amber-700' : ''
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
