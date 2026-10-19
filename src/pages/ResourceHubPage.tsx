import React from 'react';
import {
  BookOpen,
  Calculator,
  FileText,
  Scale,
  ShieldCheck,
  ArrowRight,
  Receipt,
  FileCheck,
  Building,
  HelpCircle,
  Clock,
  CheckCircle2,
  ExternalLink,
  CreditCard,
  AlertTriangle,
  Coins,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { NewWindowToolCta } from '../components/NewWindowToolCta';

interface ResourceHubPageProps {
  setActivePage: (page: ActivePage) => void;
}

export const ResourceHubPage: React.FC<ResourceHubPageProps> = ({ setActivePage }) => {
  const openInNewWindow = (hash: string) => {
    const url = `${window.location.origin}/#${hash}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const blogArticles = [
    {
      id: 'blog-rent-to-parents' as ActivePage,
      title: 'Paying Rent to Parents to Save Tax',
      subtitle: 'ITAT rulings, § 24 deductions & family tax arbitrage',
      tag: 'Family Tax Strategy',
      readTime: '7 min read',
      icon: <CreditCard className="w-4 h-4 text-blue-600" />,
      action: () => {
        setActivePage('blog-rent-to-parents');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      toolHash: 'rent-receipt',
      toolLabel: 'Generate Receipt (New Tab)',
    },
    {
      id: 'blog-fake-rent-receipts' as ActivePage,
      title: 'Income Tax Notice for Fake Rent Receipts',
      subtitle: 'AIS cross-checks, Section 270A penalties & responses',
      tag: 'Audit Defense',
      readTime: '8 min read',
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      action: () => {
        setActivePage('blog-fake-rent-receipts');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      toolHash: 'form-12bb',
      toolLabel: 'Form 12BB Proofs (New Tab)',
    },
    {
      id: 'blog-section-80gg' as ActivePage,
      title: 'Section 80GG Rent Deduction for Non-HRA',
      subtitle: 'Save up to ₹60,000 without HRA + Form 10BA tutorial',
      tag: 'Self-Employed / Non-HRA',
      readTime: '6 min read',
      icon: <Coins className="w-4 h-4 text-emerald-600" />,
      action: () => {
        setActivePage('blog-section-80gg');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      toolHash: 'hra-calculator',
      toolLabel: 'HRA Calculator (New Tab)',
    },
    {
      id: 'blog-rent-agreement-vs-receipt' as ActivePage,
      title: 'Rent Agreement vs Rent Receipt Differences',
      subtitle: 'State stamp duty rates, legal validity & employer rules',
      tag: 'Legal Documentation',
      readTime: '7 min read',
      icon: <Scale className="w-4 h-4 text-amber-600" />,
      action: () => {
        setActivePage('blog-rent-agreement-vs-receipt');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
      toolHash: 'rent-receipt',
      toolLabel: 'Stamped Receipts (New Tab)',
    },
  ];
  const guides = [
    {
      id: 'hra-calculator',
      title: 'HRA Exemption Calculator & Rule 2A Formula Engine',
      subtitle: 'Interactive tool and complete statutory calculation breakdown',
      desc: 'Simulate your exact tax-exempt House Rent Allowance across the 3 statutory conditions of Section 10(13A). Compare Old vs New Tax Regime savings and calculate estimated annual tax benefits.',
      tag: 'Interactive Tool',
      readTime: '3 min calculation',
      action: () => {
        setActivePage('hra-calculator');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'form-12bb',
      title: 'Form 12BB Statutory Playbook & Tax Proof Submission Guide',
      subtitle: 'Complete filing walkthrough for salaried employees',
      desc: 'Everything you need to know about submitting Form 12BB declarations to your employer, required documentary evidence, timeline deadlines, and how to claim HRA in your ITR if you missed the cut-off.',
      tag: 'Statutory Guide',
      readTime: '6 min read',
      action: () => {
        setActivePage('form-12bb');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'landlord-pan',
      title: 'Landlord PAN Compliance Mandate & Tenant Rights Handbook',
      subtitle: 'CBDT circulars, ₹1 Lakh threshold & Section 194-IB TDS',
      desc: 'Understand the legal requirement for landlord PAN reporting, what to do if your landlord refuses or provides Form 60, and mandatory 5% TDS deductions for monthly rent exceeding ₹50,000.',
      tag: 'Legal Compliance',
      readTime: '5 min read',
      action: () => {
        setActivePage('landlord-pan');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'guide',
      title: 'Section 10(13A) Master HRA Guide & Parent Rent Rules',
      subtitle: 'Claiming HRA legally when living with parents',
      desc: 'Deep-dive into Section 10(13A), Rule 2A metro classifications, banking trail requirements, and how to execute legitimate tenancy contracts when paying rent to your mother or father.',
      tag: 'Tax Strategy',
      readTime: '7 min read',
      action: () => {
        setActivePage('guide');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 'faq',
      title: 'Taxpayer Knowledge Base & Frequently Asked Questions (FAQ)',
      subtitle: 'Authoritative answers to 20+ common tax and rental questions',
      desc: 'Clear explanations regarding revenue stamps, backdated receipts, cash payment limits, landlord co-ownership, and submitting proofs under both Old and New regimes.',
      tag: 'Knowledge Base',
      readTime: '4 min read',
      action: () => {
        setActivePage('faq');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ];

  const tools = [
    {
      name: 'Rent Receipt Generator',
      desc: 'Generate official, print-ready landlord rent receipts in USD, EUR, GBP, CAD, or INR with digital signature and verification QR code.',
      page: 'rent-receipt' as ActivePage,
      icon: <Receipt className="w-5 h-5 text-blue-600" />,
    },
    {
      name: 'Salary Slip & Payslip Creator',
      desc: 'Create monthly salary slips with automated earnings, deductions, PF, professional tax, and net salary calculations.',
      page: 'salary-slip' as ActivePage,
      icon: <FileText className="w-5 h-5 text-emerald-600" />,
    },
    {
      name: 'Tenancy Affidavit Generator',
      desc: 'Formal self-declaration affidavit for tenancy verification, address proof, and claiming HRA without a formal registered lease agreement.',
      page: 'affidavit' as ActivePage,
      icon: <Scale className="w-5 h-5 text-amber-700" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
        <div className="border-b border-slate-100 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Tax, Payroll &amp; Tenancy Knowledge Hub</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Editorial Resource Hub &amp; Statutory Library
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Researched, citation-backed tax guides, legal handbooks, and interactive calculation engines to help taxpayers, tenants, and employers achieve audit-proof compliance under the Income Tax Act, 1961.
          </p>
        </div>

        {/* Featured In-Depth Editorial Guides */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Featured Statutory &amp; Compliance Guides
            </h2>
            <span className="text-xs text-slate-500 font-medium">5 In-Depth Publications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <div
                key={guide.id}
                onClick={guide.action}
                className="p-5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all bg-white flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-blue-600">{guide.tag}</span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      <span>{guide.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {guide.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>Read Guide &amp; Launch Tool</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Tax & Legal Insights Blog Articles */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Editorial Tax &amp; Legal Insights
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Researched deep-dives with ITAT tribunal judgments and step-by-step procedural playbooks.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setActivePage('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors self-start sm:self-auto cursor-pointer"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogArticles.map((art) => (
              <div
                key={art.id}
                className="p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition-all bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-blue-600 flex items-center gap-1.5">
                      {art.icon}
                      <span>{art.tag}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h3
                    onClick={art.action}
                    className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <button
                    type="button"
                    onClick={art.action}
                    className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => openInNewWindow(art.toolHash)}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer"
                    title="Opens tool in new window to preserve your reading spot"
                  >
                    <span>{art.toolLabel}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Window Tool CTA Banner to Stop Bounce Damage */}
        <NewWindowToolCta
          title="Create Stamped Receipts in a New Tab"
          description="Opens our 100% client-side receipt generator in a separate tab so your reading session on the Resource Hub remains uninterrupted."
          variant="inline"
          onNavigateInternal={setActivePage}
        />

        {/* High-Margin In-Article Ad Unit: Placed between guides and tools */}
        <div className="my-8 pt-2">
          <AdSlot type="in-article" />
        </div>

        {/* Browser-Side Document Generators */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900">
            Free Browser-Side Document Generators
          </h2>
          <p className="text-xs text-slate-600">
            All document generation runs 100% locally in your web browser. No accounts, no servers, and zero data logging.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                onClick={() => {
                  setActivePage(tool.page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-blue-400 hover:shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <span>Open Generator</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Standards & E-E-A-T Transparency Section */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">
              Our Editorial Principles &amp; Peer-Review Process
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            At RentReceipt.online, our editorial objective is to bridge the gap between complex tax statutes and everyday salaried employees. Every article, calculator formula, and compliance checklist published on this domain is researched against official gazette notifications issued by the Central Board of Direct Taxes (CBDT), statutory precedents under the Income Tax Appellate Tribunal (ITAT), and the Indian Stamp Act, 1899.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Primary Source Citations:</strong> Referenced directly to sections of the Income Tax Act.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zero Data Logging:</strong> Your financial inputs remain strictly in client-side RAM.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Continuous Curation:</strong> Updated annually for each new Union Budget and Finance Act.</span>
            </div>
          </div>
        </div>

        {/* Pre-Footer Ad Unit */}
        <div className="pt-2">
          <AdSlot type="pre-footer" />
        </div>
      </div>
    </div>
  );
};
