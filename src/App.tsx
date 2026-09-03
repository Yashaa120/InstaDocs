/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { RentReceiptView } from './components/RentReceiptView';
import { SalarySlipGenerator } from './components/SalarySlipGenerator';
import { AffidavitGenerator } from './components/AffidavitGenerator';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { HraGuidePage } from './pages/HraGuidePage';
import { ValidationPage } from './pages/ValidationPage';
import { FaqPage } from './pages/FaqPage';
import { RentReceiptData, ActivePage, MonthPeriod } from './types';
import {
  decodeVerificationFromUrl,
  DecodedReceiptVerification,
} from './utils/verificationUtils';
import { formatIndianCurrency } from './utils/numberToWords';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { updateDocumentSeo } from './utils/seoMetadata';

function AppContent() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [verifiedData, setVerifiedData] = useState<DecodedReceiptVerification | null>(null);
  const { language } = useLanguage();

  // Dynamic Global SEO synchronization: title, meta description, OpenGraph, canonical, Twitter, and Schema.org
  useEffect(() => {
    updateDocumentSeo(activePage, language);
  }, [activePage, language]);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Primary receipt form state (defaults to single month = 1 page)
  const [receiptData, setReceiptData] = useState<RentReceiptData>({
    tenantName: 'Rahul Sharma',
    landlordName: 'Rameshwar Prasad Gupta',
    monthlyRent: '25000',
    propertyAddress: 'Flat 402, Sunshine Heights, 100 Feet Road, Indiranagar, Bengaluru, Karnataka - 560038',
    landlordPan: 'ABCDE1234F',
    isMultiMonth: false,
    singleMonth: currentMonth,
    singleYear: currentYear,
    startMonth: 3, // April
    startYear: 2025,
    endMonth: 2, // March
    endYear: 2026,
    paymentMode: 'Bank Transfer / NEFT / IMPS',
    transactionRef: 'NEFT-AXIS-984210482',
    receiptNoPrefix: 'RR',
    customDate: '',
    templateFormat: 'modern',
    signatureMode: 'type',
    signatureTypedText: 'Rameshwar Prasad Gupta',
    signatureTypedFont: 'Dancing Script',
  });

  // Sync search query & hash in URL for verification redirects and clean navigation
  useEffect(() => {
    const handleUrlCheck = () => {
      // Check if URL has verification data from QR code scan
      const verificationPayload = decodeVerificationFromUrl();
      if (verificationPayload) {
        setVerifiedData(verificationPayload);
        setActivePage('verify');
        return;
      }

      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'rent-receipt' || hash === 'tool' || hash === 'rent-receipt.html') {
        setActivePage('rent-receipt');
      } else if (hash === 'salary-slip' || hash === 'salary-slip.html') {
        setActivePage('salary-slip');
      } else if (hash === 'affidavit' || hash === 'affidavit-generator' || hash === 'affidavit-generator.html') {
        setActivePage('affidavit');
      } else if (hash === 'terms' || hash === 'terms.html') {
        setActivePage('terms');
      } else if (hash === 'privacy' || hash === 'privacy.html') {
        setActivePage('privacy');
      } else if (hash === 'about' || hash === 'about.html') {
        setActivePage('about');
      } else if (hash === 'contact' || hash === 'contact.html') {
        setActivePage('contact');
      } else if (hash === 'home' || hash === 'index.html' || hash === '') {
        setActivePage('home');
      } else if (['guide', 'verify', 'faq'].includes(hash)) {
        setActivePage(hash as ActivePage);
      } else if (!window.location.search.includes('verify')) {
        if (activePage === 'verify' && !verifiedData) {
          setActivePage('home');
        }
      }
    };

    handleUrlCheck();
    window.addEventListener('hashchange', handleUrlCheck);
    window.addEventListener('popstate', handleUrlCheck);
    return () => {
      window.removeEventListener('hashchange', handleUrlCheck);
      window.removeEventListener('popstate', handleUrlCheck);
    };
  }, []);

  const handlePageChange = (page: ActivePage) => {
    // Normalise 'tool' to 'rent-receipt'
    const targetPage = page === 'tool' ? 'rent-receipt' : page;
    setActivePage(targetPage);

    if (targetPage === 'home') {
      // Remove hash or set to clean state
      if (window.location.hash) {
        window.history.pushState({}, '', window.location.pathname);
      }
    } else {
      window.location.hash = targetPage;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLiveValidation = (period: MonthPeriod) => {
    const parsedAmount =
      typeof receiptData.monthlyRent === 'string'
        ? parseFloat(receiptData.monthlyRent.replace(/,/g, '')) || 0
        : receiptData.monthlyRent || 0;
    const formattedAmount = formatIndianCurrency(parsedAmount);

    const liveData: DecodedReceiptVerification = {
      isValid: true,
      receiptNo: period.receiptNumber,
      verificationCode: period.receiptNumber,
      tenantName: receiptData.tenantName.trim() || 'Tenant',
      landlordName: receiptData.landlordName.trim() || 'Landlord',
      amount: formattedAmount,
      amountNumber: parsedAmount,
      periodName: `${period.monthName} ${period.year}`,
      startDate: period.startDate,
      endDate: period.endDate,
      propertyAddress: receiptData.propertyAddress.trim() || 'Rented Premises Address',
      paymentMode: receiptData.paymentMode,
      transactionRef: receiptData.transactionRef?.trim() || '',
      landlordPan: receiptData.landlordPan ? receiptData.landlordPan.trim() : 'EXEMPT',
      issuedDate: receiptData.customDate || period.receiptDate,
    };

    setVerifiedData(liveData);
    setActivePage('verify');
    window.location.hash = 'verify';
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* 1. Minimal Header with Logo, Home, About, Contact & Share */}
      <Header activePage={activePage} setActivePage={handlePageChange} />

      <main className="flex-grow">
        {/* VIEW 1: Homepage Tool Selector Landing Page */}
        {activePage === 'home' && (
          <HomePage onSelectTool={handlePageChange} />
        )}

        {/* VIEW 2: Dedicated Rent Receipt Generator Page */}
        {(activePage === 'rent-receipt' || activePage === 'tool') && (
          <RentReceiptView
            receiptData={receiptData}
            setReceiptData={setReceiptData}
            onOpenLiveValidation={handleOpenLiveValidation}
            onNavigate={handlePageChange}
          />
        )}

        {/* VIEW 3: Dedicated Salary Slip Generator Page */}
        {activePage === 'salary-slip' && (
          <SalarySlipGenerator onNavigate={handlePageChange} />
        )}

        {/* VIEW 4: Dedicated Affidavit & Address Proof Generator Page */}
        {activePage === 'affidavit' && (
          <AffidavitGenerator onNavigate={handlePageChange} />
        )}

        {/* Dedicated Receipt Validation Portal View */}
        {activePage === 'verify' && (
          <ValidationPage
            verifiedData={verifiedData}
            onNavigateHome={() => handlePageChange('home')}
          />
        )}

        {/* Informational & Policy Pages */}
        {activePage === 'about' && (
          <AboutPage setActivePage={handlePageChange} />
        )}

        {activePage === 'privacy' && (
          <PrivacyPolicyPage setActivePage={handlePageChange} />
        )}

        {activePage === 'terms' && (
          <TermsPage setActivePage={handlePageChange} />
        )}

        {activePage === 'contact' && (
          <ContactPage setActivePage={handlePageChange} />
        )}

        {activePage === 'guide' && (
          <HraGuidePage setActivePage={handlePageChange} />
        )}

        {activePage === 'faq' && (
          <FaqPage setActivePage={handlePageChange} />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
