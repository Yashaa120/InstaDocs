import React from 'react';
import { Heart, Sparkles, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

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
            About Rent Receipt Generator
          </h1>
          <p className="text-base text-slate-600 mt-2">
            Why we built a fast, 100% free, client-side rent receipt generator for Indian taxpayers.
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
            In response, we built <strong>Rent Receipt Generator</strong> as a lightweight, clean, fast, and completely free web utility. Our goal was simple: provide an instant tool that allows anyone to generate authentic, CBDT-compliant rent receipts for single months or an entire financial year in less than 30 seconds—with absolute privacy.
          </p>

          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3 my-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Shield className="w-5 h-5 text-emerald-600" />
              <span>Our Guiding Principles</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>100% Client-Side Privacy:</strong> Your data never touches our servers. Everything is rendered and converted directly in your browser.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>No Paywalls &amp; No Forced Signups:</strong> No subscriptions, premium tiers, or registration barriers. Accessible to all salaried workers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong>Accurate Legal Formatting:</strong> Built strictly according to Indian Income Tax rules, including ₹1 revenue stamp placeholders, landlord PAN compliance, and rupee words conversion.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-900">
            Who Are We?
          </h2>
          <p>
            We are a small, independent team of software developers and finance enthusiasts based in India. We build focused, practical utility web apps that solve everyday headaches for working professionals, freelancers, and small businesses.
          </p>
          <p>
            We believe the modern web should be fast, uncluttered, and respect user privacy. We don’t track your personal identity, we don’t sell your information, and we don’t force you through unnecessary verification flows.
          </p>

          <h2 className="text-xl font-bold text-slate-900">
            How This Site Stays Free
          </h2>
          <p>
            To keep this tool completely free and cover web hosting and domain upkeep costs, we display standard, non-intrusive banner advertisements (such as Google AdSense). We purposefully keep these ad placements cleanly separated from the generator form so that you always enjoy a distraction-free, seamless experience.
          </p>
          <p>
            If you find this tool helpful, the greatest way to support us is by sharing the link with your colleagues, friends, or roommates who might also be rushing to submit their HRA proofs this tax season!
          </p>
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
