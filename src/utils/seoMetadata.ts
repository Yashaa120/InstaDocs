/**
 * Global SEO Engine & Structured Data (Schema.org) Manager
 * Provides dynamic title, meta descriptions, canonical URLs, Open Graph,
 * Twitter cards, multi-language localization, and rich WebApplication schemas.
 */

import { ActivePage } from '../types';

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string;
  ogType: string;
  canonicalPath: string;
  schema: Record<string, unknown>[];
}

const BASE_URL = 'https://rentreceipt.app';

// Localized Page Titles & Descriptions (English default with Hindi & regional mappings)
const LOCALIZED_SEO: Record<
  ActivePage,
  {
    en: { title: string; description: string };
    hi?: { title: string; description: string };
    bn?: { title: string; description: string };
    te?: { title: string; description: string };
    mr?: { title: string; description: string };
    ta?: { title: string; description: string };
  }
> = {
  home: {
    en: {
      title: 'Rent Receipt & Salary Slip Generator | Free HRA Tax Exemption & ITR Filing Proofs',
      description:
        'Free online Rent Receipt & Salary Slip Generator for HRA tax exemption under Section 10(13A) and Income Tax filing (ITR Login / ClearTax / Tax2Win). Download authentic monthly salary slips, payslip formats, and rent receipts with revenue stamps instantly.',
    },
    hi: {
      title: 'किराया रसीद और सैलरी स्लिप जनरेटर | मुफ्त HRA टैक्स छूट और ITR प्रूफ',
      description:
        'मुफ्त ऑनलाइन रेंट रसीद और वेतन पर्ची (Salary Slip) जनरेटर। धारा 10(13A) के तहत HRA छूट और आयकर रिटर्न दाखिल करने के लिए राजस्व टिकट और लैंडलॉर्ड पैन के साथ पीडीएफ डाउनलोड करें।',
    },
    bn: {
      title: 'ভাড়া রসিদ ও বেতন স্লিপ জেনারেটর | বিনামূল্যে HRA ট্যাক্স ছাড়',
      description:
        'বিনামূল্যে অনলাইন ভাড়া রসিদ এবং বেতন স্লিপ জেনারেটর। আয়কর ধারা 10(13A) এর অধীনে HRA ছাড়ের জন্য অবিলম্বে রাজস্ব স্ট্যাম্প সহ ডাউনলোড করুন।',
    },
    te: {
      title: 'అద్దె రసీదు & జీతం స్లిప్ జనరేటర్ | ఉచిత HRA పన్ను మినహాయింపు రుజువులు',
      description:
        'సెక్షన్ 10(13A) కింద HRA పన్ను మినహాయింపు కోసం ఉచిత ఆన్‌లైన్ అద్దె రసీదు మరియు జీతం స్లిప్ మేకర్. తక్షణ పిడిఎఫ్ డౌన్‌లోడ్.',
    },
    mr: {
      title: 'भाडे पावती व सॅलरी स्लिप जनरेटर | मोफत HRA कर सवलत पुरावा',
      description:
        'HRA कर सवलतीसाठी मोफत ऑनलाइन भाडे पावती आणि पगार पावती जनरेटर. कलम 10(13A) अंतर्गत अधिकृत महसूल तिकीट (Revenue Stamp) सह त्वरित डाउनलोड करा.',
    },
    ta: {
      title: 'வாடகை ரசீது & சம்பள சீட்டு ஜெனரேட்டர் | இலவச HRA வரி விலக்கு',
      description:
        'பிரிவு 10(13A) கீழ் HRA வரி விலக்கு கோருவதற்கான இலவச ஆன்லைன் வாடகை ரசீது மற்றும் சம்பள சீட்டு ஜெனரேட்டர். உடனடி PDF பதிவிறக்கம்.',
    },
  },
  'rent-receipt': {
    en: {
      title: 'Free Rent Receipt Generator Online | Multi-Month HRA Receipts with Revenue Stamp',
      description:
        'Generate and download compliant rent receipts for House Rent Allowance (HRA) tax exemption under Section 10(13A). Supports single and multi-month batches, landlord PAN, and physical revenue stamp guidelines.',
    },
    hi: {
      title: 'मुफ्त रेंट रसीद जनरेटर | HRA टैक्स छूट के लिए मासिक रसीदें',
      description:
        'मकान किराया भत्ता (HRA) छूट के लिए प्रामाणिक रेंट रसीदें तैयार करें। सिंगल और मल्टी-महीने का बैच समर्थन, लैंडलॉर्ड पैन और राजस्व टिकट सुविधा।',
    },
  },
  tool: {
    en: {
      title: 'Free Rent Receipt Generator Online | Multi-Month HRA Receipts with Revenue Stamp',
      description:
        'Generate and download compliant rent receipts for House Rent Allowance (HRA) tax exemption under Section 10(13A). Supports single and multi-month batches, landlord PAN, and physical revenue stamp guidelines.',
    },
  },
  'salary-slip': {
    en: {
      title: 'Online Salary Slip Generator | Free Payslip Format & Compensation Summary Maker',
      description:
        'Create professional, company-compliant employee monthly salary slips with earnings, deductions, PF, ESI, professional tax, and net payable calculations. 100% private in-browser generation.',
    },
    hi: {
      title: 'ऑनलाइन सैलरी स्लिप जनरेटर | मुफ्त वेतन पर्ची फॉर्मेट और पेस्लिप मेकर',
      description:
        'पीएफ, ईएसआई, टीडीएस और पेशेवर कर कटौती के साथ आधिकारिक सैलरी स्लिप बनाएं। बैंक लोन, वीजा और टैक्स फाइलिंग के लिए तुरंत डाउनलोड करें।',
    },
  },
  affidavit: {
    en: {
      title: 'Rent Affidavit & Self-Declaration Generator | Address Proof & Tenancy Declaration',
      description:
        'Generate legally formatted rent self-declarations, no-rent-agreement affidavits, and residential address proof declarations for bank accounts, passport, employer verification, and welfare portals.',
    },
    hi: {
      title: 'किराया शपथ पत्र एवं स्व-घोषणा पत्र जनरेटर | रेंट एग्रीमेंट और पता प्रमाण',
      description:
        'बैंक खाता, पासपोर्ट और नियोक्ता सत्यापन के लिए कानूनी प्रारूप में किराया शपथ पत्र और स्व-घोषणा पत्र तैयार करें।',
    },
  },
  guide: {
    en: {
      title: 'HRA Exemption Rules & Tax Guide 2025-26 | Section 10(13A) Calculation Explained',
      description:
        'Comprehensive guide on House Rent Allowance (HRA) tax exemption calculation rules, landlord PAN requirement thresholds (₹1 Lakh/year), cash rent limits, and Form 12BB proof submission.',
    },
    hi: {
      title: 'HRA टैक्स छूट नियम और गाइड 2025-26 | धारा 10(13A) गणना की पूरी जानकारी',
      description:
        'मकान किराया भत्ता (HRA) टैक्स छूट गणना, 1 लाख से अधिक किराये पर मकान मालिक के पैन की अनिवार्यता और 5000 से अधिक नकद पर ₹1 के राजस्व टिकट के नियम।',
    },
  },
  verify: {
    en: {
      title: 'QR Code Rent Receipt Verification Portal | Authenticity & Integrity Check',
      description:
        'Verify the authenticity, issued date, landlord name, tenant details, and monetary integrity of rent receipts generated on RentReceipt via cryptographic QR code scanning.',
    },
  },
  faq: {
    en: {
      title: 'Frequently Asked Questions (FAQ) | Rent Receipts, Salary Slips & HRA Tax Exemption',
      description:
        'Find clear answers to common questions regarding rent receipts, revenue stamps, landlord PAN mandates, salary slip calculations, and employer tax submission guidelines.',
    },
  },
  about: {
    en: {
      title: 'About Us | RentReceipt - Free, Privacy-First Tax & Payroll Document Suite',
      description:
        'Learn about RentReceipt, an open, zero-server-storage financial document utility built to help salaried employees and tenants format compliant HRA and payroll documentation with total privacy.',
    },
  },
  privacy: {
    en: {
      title: 'Privacy Policy | 100% Client-Side In-Browser Processing Guarantee',
      description:
        'Our transparent privacy policy: zero personal data stored, no server databases, no cookies tracking private financial information, and 100% browser-only document compilation.',
    },
  },
  terms: {
    en: {
      title: 'Terms and Conditions | RentReceipt Usage & Legal Disclaimer',
      description:
        'Official Terms and Conditions for RentReceipt document generation tools, limitation of liability, intellectual property, user responsibilities, and governing law.',
    },
  },
  contact: {
    en: {
      title: 'Contact Us | Feedback, Inquiries & Support for RentReceipt',
      description:
        'Get in touch with the RentReceipt development team for technical inquiries, feature suggestions, partnership requests, or feedback on our free document generators.',
    },
  },
};

/**
 * Generates structured Schema.org JSON-LD definitions based on the active page
 */
export const getPageSchemas = (page: ActivePage): Record<string, unknown>[] => {
  // Global Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'RentReceipt Suite',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.svg`,
    image: `${BASE_URL}/og-image.svg`,
    description:
      'Free, privacy-first client-side documentation suite for salaried employees, tenants, and small businesses.',
    areaServed: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'Country',
        name: 'Global',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      url: `${BASE_URL}/#contact`,
      availableLanguage: ['en', 'hi'],
    },
  };

  // Global WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'RentReceipt - Document & Tax Proof Suite',
    alternateName: [
      'RentReceipt.app',
      'Rent Receipt Generator',
      'Salary Slip Generator',
      'HRA Tax Calculator',
    ],
    url: BASE_URL,
    inLanguage: [
      'en-IN',
      'hi-IN',
      'bn-IN',
      'te-IN',
      'mr-IN',
      'ta-IN',
      'gu-IN',
      'kn-IN',
      'ml-IN',
      'pa-IN',
      'en',
    ],
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };

  // Tool 1: Rent Receipt WebApplication Schema
  const rentReceiptAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${BASE_URL}/#rent-receipt-tool`,
    name: 'Rent Receipt Generator for HRA Tax Exemption',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All Modern Web Browsers (Mobile & Desktop)',
    browserRequirements: 'Requires JavaScript. Requires HTML5 Canvas.',
    url: `${BASE_URL}/#rent-receipt`,
    description:
      'Free client-side tool to generate, preview, and download compliant rent receipts for HRA tax exemption claims in India under Section 10(13A).',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    featureList: [
      'Single month and multi-month financial year batch generator',
      'Physical revenue stamp guidance for rent exceeding ₹5,000 in cash',
      'Mandatory Landlord PAN integration for annual rent exceeding ₹1,00,000',
      'Cryptographic QR code verification system',
      '100% private in-browser PDF rendering with zero server storage',
    ],
  };

  // Tool 2: Salary Slip WebApplication Schema
  const salarySlipAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${BASE_URL}/#salary-slip-tool`,
    name: 'Online Salary Slip & Payslip Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All Modern Web Browsers',
    url: `${BASE_URL}/#salary-slip`,
    description:
      'Free tool to create monthly employee salary slips with earnings, provident fund (PF), ESI, professional tax, and net payable summaries.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    featureList: [
      'Automatic basic, HRA, DA, and special allowance calculations',
      'Statutory deductions for PF, ESI, TDS, and Professional Tax',
      'Instant print-ready PDF export',
      'Zero login or account creation required',
    ],
  };

  // Tool 3: Affidavit Generator Schema
  const affidavitAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${BASE_URL}/#affidavit-tool`,
    name: 'Rent Self-Declaration & Tenancy Affidavit Maker',
    applicationCategory: 'LegalApplication',
    operatingSystem: 'All Modern Web Browsers',
    url: `${BASE_URL}/#affidavit`,
    description:
      'Generate formatted self-declarations for tenancy and residential address verification when rent agreements are unavailable.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
  };

  // Page specific selection
  if (page === 'home') {
    return [websiteSchema, organizationSchema, rentReceiptAppSchema];
  }
  if (page === 'rent-receipt' || page === 'tool') {
    return [rentReceiptAppSchema, organizationSchema];
  }
  if (page === 'salary-slip') {
    return [salarySlipAppSchema, organizationSchema];
  }
  if (page === 'affidavit') {
    return [affidavitAppSchema, organizationSchema];
  }

  return [websiteSchema, organizationSchema];
};

/**
 * Updates DOM head elements (Title, Meta Description, Canonical, OG, Twitter, Schemas)
 * in real-time based on active view and selected language
 */
export const updateDocumentSeo = (page: ActivePage, language: string = 'en') => {
  if (typeof document === 'undefined') return;

  const pageKey = page === 'tool' ? 'rent-receipt' : page;
  const langKey = (language in (LOCALIZED_SEO[pageKey] || {})
    ? language
    : 'en') as 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta';

  const localized =
    LOCALIZED_SEO[pageKey]?.[langKey] ||
    LOCALIZED_SEO[pageKey]?.en ||
    LOCALIZED_SEO.home.en;

  const canonicalUrl = `${BASE_URL}/${pageKey === 'home' ? '' : `#${pageKey}`}`;

  // 1. Title
  document.title = localized.title;

  // 2. Meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', localized.description);

  // 3. Canonical Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 4. Open Graph Tags
  const setOgMeta = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setOgMeta('og:title', localized.title);
  setOgMeta('og:description', localized.description);
  setOgMeta('og:url', canonicalUrl);
  setOgMeta('og:site_name', 'RentReceipt');
  setOgMeta('og:type', pageKey === 'terms' || pageKey === 'privacy' ? 'article' : 'website');
  setOgMeta('og:image', `${BASE_URL}/og-image.svg`);
  setOgMeta('og:image:width', '1200');
  setOgMeta('og:image:height', '630');
  setOgMeta('og:image:alt', localized.title);
  setOgMeta('og:locale', langKey === 'hi' ? 'hi_IN' : 'en_IN');

  // 5. Twitter Card Tags
  const setTwitterMeta = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setTwitterMeta('twitter:card', 'summary_large_image');
  setTwitterMeta('twitter:title', localized.title);
  setTwitterMeta('twitter:description', localized.description);
  setTwitterMeta('twitter:image', `${BASE_URL}/og-image.svg`);
  setTwitterMeta('twitter:image:alt', localized.title);

  // 6. Structured Data (Schema.org) JSON-LD Injection
  const schemas = getPageSchemas(pageKey);
  let scriptTag = document.getElementById('dynamic-page-schema') as HTMLScriptElement | null;
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.id = 'dynamic-page-schema';
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas,
  });
};
