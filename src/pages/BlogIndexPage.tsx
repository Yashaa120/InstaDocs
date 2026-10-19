import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  AlertTriangle,
  Coins,
  Scale,
  Receipt,
  Calculator,
  FileText,
  Search,
  Filter,
  Sparkles,
} from 'lucide-react';
import { ActivePage } from '../types';
import { AdSlot } from '../components/AdSlot';
import { NewWindowToolCta } from '../components/NewWindowToolCta';

interface BlogIndexPageProps {
  setActivePage: (page: ActivePage) => void;
}

interface BlogPostMeta {
  id: ActivePage;
  title: string;
  excerpt: string;
  category: 'HRA & Family' | 'Tax Scrutiny' | 'Deductions' | 'Legal & Tenancy';
  readTime: string;
  updatedDate: string;
  badgeColor: string;
  icon: React.ReactNode;
  toolHash: string;
  toolLabel: string;
}

export const BlogIndexPage: React.FC<BlogIndexPageProps> = ({ setActivePage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const openInNewWindow = (hash: string) => {
    const url = `${window.location.origin}/#${hash}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const blogPosts: BlogPostMeta[] = [
    {
      id: 'blog-rent-to-parents',
      title: 'Paying Rent to Parents to Save Tax: Complete Legal Rules, ITAT Judgments & Audit Checklist',
      excerpt:
        'How salaried Indian professionals can legally claim Section 10(13A) House Rent Allowance by renting accommodation owned by their parents, backed by Ahmedabad ITAT tribunal rulings, Section 24 standard deduction benefits, and banking paper trails.',
      category: 'HRA & Family',
      readTime: '7 min read',
      updatedDate: 'FY 2026-27',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      icon: <CreditCard className="w-4 h-4 text-blue-600" />,
      toolHash: 'rent-receipt',
      toolLabel: 'Generate Parent Rent Receipt (New Window)',
    },
    {
      id: 'blog-fake-rent-receipts',
      title: 'Income Tax Notice for Fake Rent Receipts: AIS Verification, Section 270A Penalties & How to Respond',
      excerpt:
        'How CBDT automated data-mining algorithms cross-reference HRA claims in Form 16 with landlord PANs in Schedule HP, what red flags trigger computerized scrutiny (CASS), and the 200% penalty for misreporting of income.',
      category: 'Tax Scrutiny',
      readTime: '8 min read',
      updatedDate: 'FY 2026-27',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      icon: <AlertTriangle className="w-4 h-4 text-red-600" />,
      toolHash: 'form-12bb',
      toolLabel: 'Review Form 12BB Proofs (New Window)',
    },
    {
      id: 'blog-section-80gg',
      title: 'Section 80GG Rent Deduction: How Self-Employed & Non-HRA Employees Save Up to ₹60,000',
      excerpt:
        'The definitive guide to claiming rent paid when your salary structure lacks an HRA component or when you work as a self-employed professional, freelancer, or consultant in India. Includes Form 10BA electronic filing walkthrough.',
      category: 'Deductions',
      readTime: '6 min read',
      updatedDate: 'FY 2026-27',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: <Coins className="w-4 h-4 text-emerald-600" />,
      toolHash: 'hra-calculator',
      toolLabel: 'Open HRA & Tax Calculator (New Window)',
    },
    {
      id: 'blog-rent-agreement-vs-receipt',
      title: 'Rent Agreement vs Rent Receipt: Key Differences, State Stamp Duty & Employer Requirements',
      excerpt:
        'Demystifying the legal roles of Tenancy Agreements (Transfer of Property Act) and Monthly Rent Receipts (Indian Stamp Act Article 53 & Section 10(13A)). Learn state stamp duty rates and what corporate payroll audits demand.',
      category: 'Legal & Tenancy',
      readTime: '7 min read',
      updatedDate: 'FY 2026-27',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      icon: <Scale className="w-4 h-4 text-amber-600" />,
      toolHash: 'rent-receipt',
      toolLabel: 'Create Stamped Receipts (New Window)',
    },
  ];

  const categories = ['All', 'HRA & Family', 'Tax Scrutiny', 'Deductions', 'Legal & Tenancy'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('home');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Home
        </a>
        <span>/</span>
        <a
          href="#resources"
          onClick={(e) => {
            e.preventDefault();
            setActivePage('resources');
          }}
          className="hover:text-blue-600 transition-colors"
        >
          Resources
        </a>
        <span>/</span>
        <span className="text-slate-900 font-semibold">Editorial Tax &amp; Legal Blog</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Authoritative Taxpayer Editorial Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Indian Rental Tax, HRA &amp; Legal Compliance Insights
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            In-depth statutory analyses, ITAT tribunal rulings, Form 12BB documentation playbooks, and Section 80GG deduction strategies written and reviewed for Indian taxpayers.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Grounded in CBDT Circulars &amp; Income Tax Rules</span>
            </span>
            <span>•</span>
            <span>Zero Sponsor Bias</span>
            <span>•</span>
            <span>Independent Research</span>
          </div>
        </div>
      </div>

      {/* Global New-Window Tools Drawer Banner */}
      <NewWindowToolCta
        title="Interactive Document Generators (Opens in New Tab)"
        description="Launch any of our free client-side formatting tools in a separate window. Your blog browsing and reading position will remain open in this tab without interruption."
        variant="banner"
      />

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tax guides..."
            className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-12">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              {/* Category, Date & Read Time */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${post.badgeColor}`}
                >
                  {post.icon}
                  <span>{post.category}</span>
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                  <span>•</span>
                  <span>{post.updatedDate}</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight leading-snug mb-2">
                <a
                  href={`#${post.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActivePage(post.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="cursor-pointer"
                >
                  {post.title}
                </a>
              </h2>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>
            </div>

            {/* Bottom Actions: Read Article + Direct Open in New Window Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setActivePage(post.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group/link"
              >
                <span>Read Complete Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => openInNewWindow(post.toolHash)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 text-xs font-semibold transition-all cursor-pointer group/btn"
                title="Opens tool in new window so this article stays open"
              >
                <span>{post.toolLabel}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover/btn:text-blue-600 shrink-0" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* In-Article / Hub AdSlot Placement */}
      <div className="mb-12">
        <AdSlot type="high-ctr" />
      </div>

      {/* Deep Resource Hub Quick Links */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Looking for Calculators &amp; Statutory Playbooks?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore our complete suite of interactive Indian tax utilities and compliance guides.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setActivePage('resources');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer self-start sm:self-auto"
          >
            <span>View All Resources</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div
            onClick={() => {
              setActivePage('hra-calculator');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Calculator className="w-5 h-5 text-emerald-600" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openInNewWindow('hra-calculator');
                }}
                className="text-slate-400 hover:text-blue-600"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-900">HRA Calculator</p>
            <p className="text-[11px] text-slate-500 mt-0.5">3-condition formula engine</p>
          </div>

          <div
            onClick={() => {
              setActivePage('form-12bb');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openInNewWindow('form-12bb');
                }}
                className="text-slate-400 hover:text-blue-600"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-900">Form 12BB Playbook</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Employer tax proof rules</p>
          </div>

          <div
            onClick={() => {
              setActivePage('landlord-pan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openInNewWindow('landlord-pan');
                }}
                className="text-slate-400 hover:text-blue-600"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-900">Landlord PAN Mandate</p>
            <p className="text-[11px] text-slate-500 mt-0.5">CBDT ₹1 Lakh threshold</p>
          </div>

          <div
            onClick={() => {
              setActivePage('affidavit');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <Scale className="w-5 h-5 text-amber-600" />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openInNewWindow('affidavit');
                }}
                className="text-slate-400 hover:text-blue-600"
                title="Open in new window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-900">Affidavit Generator</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Form 60 &amp; address proof</p>
          </div>
        </div>
      </section>
    </div>
  );
};
