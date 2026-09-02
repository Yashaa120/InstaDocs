import React from 'react';
import { ShieldCheck, UserX, Lock, Smartphone, FileCheck2, Zap } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    {
      id: 'trust-free',
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: '100% Free — No Hidden Charges',
      description: 'Zero fees, no trial periods, and no watermarks. Generate unlimited monthly and annual receipts for free.',
    },
    {
      id: 'trust-no-login',
      icon: <UserX className="w-6 h-6 text-blue-600" />,
      title: 'No Login Required',
      description: 'No account creation, no password to remember, and no email verification. Start generating right away.',
    },
    {
      id: 'trust-privacy',
      icon: <Lock className="w-6 h-6 text-emerald-600" />,
      title: 'Your Data Never Leaves Your Browser',
      description: 'All calculations and PDF generations run purely client-side on your device. Zero form data is transmitted or stored on any server.',
    },
    {
      id: 'trust-responsive',
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: 'Works on Mobile and Desktop',
      description: 'Designed mobile-first so you can quickly generate, preview, and download your receipts on your smartphone, tablet, or laptop.',
    },
    {
      id: 'trust-compliance',
      icon: <FileCheck2 className="w-6 h-6 text-blue-600" />,
      title: 'Income Tax & HRA Compliant',
      description: 'Features standard Indian Section 10(13A) formatting, ₹1 revenue stamp guideline area, landlord PAN notice, and signature line.',
    },
    {
      id: 'trust-instant',
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: 'Instant Multi-Month PDF Export',
      description: 'Generate individual monthly receipts or compile an entire financial year (12 months) into a crisp multi-page PDF in one click.',
    },
  ];

  return (
    <section id="trust-section" className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Thousands of Employees Trust This Tool
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A privacy-focused, authentic utility designed specifically for salaried professionals claiming House Rent Allowance (HRA) in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div
              key={point.id}
              id={point.id}
              className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all flex flex-col items-start"
            >
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
