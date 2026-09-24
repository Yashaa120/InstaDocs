/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Footer } from './components/Footer';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { HraGuidePage } from './pages/HraGuidePage';
import { ValidationPage } from './pages/ValidationPage';
import { FaqPage } from './pages/FaqPage';
import { IndiaPage } from './pages/IndiaPage';
import { UsPage } from './pages/UsPage';
import { RentReceiptView } from './components/RentReceiptView';
import { SalarySlipGenerator } from './components/SalarySlipGenerator';
import { AffidavitGenerator } from './components/AffidavitGenerator';
import { LegalModal, LegalModalType } from './components/LegalModal';

import { RentReceiptData, ActivePage, MonthPeriod } from './types';
import {
  decodeVerificationFromUrl,
  DecodedReceiptVerification,
} from './utils/verificationUtils';
import { formatCurrencyAmount } from './utils/numberToWords';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { updateDocumentSeo } from './utils/seoMetadata';

function AppContent() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [verifiedData, setVerifiedData] = useState<DecodedReceiptVerification | null>(null);
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
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
    tenantName: 'John Doe',
    landlordName: 'Jane Smith',
    monthlyRent: '1850',
    propertyAddress: 'Apt 4B, 742 Evergreen Terrace, Springfield, OR 97477',
    currency: 'USD',
    currencySymbol: '$',
    landlordPan: '',
    isMultiMonth: false,
    singleMonth: currentMonth,
    singleYear: currentYear,
    startMonth: 0,
    startYear: 2026,
    endMonth: 11,
    endYear: 2026,
    paymentMode: 'Bank Transfer / Wire / ACH',
    transactionRef: 'ACH-784920',
    receiptNoPrefix: 'RR',
    customDate: '',
    templateFormat: 'modern',
    signatureMode: 'type',
    signatureTypedText: 'Jane Smith',
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
      const path = window.location.pathname.toLowerCase();

      if (hash === 'in' || hash === 'hra' || path === '/in' || path === '/hra' || path.startsWith('/in/') || path.startsWith('/hra/')) {
        setActivePage('in');
      } else if (hash === 'us' || path === '/us' || path.startsWith('/us/')) {
        setActivePage('us');
      } else if (hash === 'rent-receipt' || hash === 'tool' || hash === 'rent-receipt.html' || path.includes('rent-receipt')) {
        setActivePage('rent-receipt');
      } else if (hash === 'salary-slip' || hash === 'salary-slip.html' || path.includes('salary-slip')) {
        setActivePage('salary-slip');
      } else if (hash === 'affidavit' || hash === 'affidavit-generator' || hash === 'affidavit-generator.html' || path.includes('affidavit')) {
        setActivePage('affidavit');
      } else if (hash === 'terms' || hash === 'terms.html' || path.includes('terms')) {
        setActivePage('terms');
      } else if (hash === 'privacy' || hash === 'privacy.html' || path.includes('privacy')) {
        setActivePage('privacy');
      } else if (hash === 'about' || hash === 'about.html' || path.includes('about')) {
        setActivePage('about');
      } else if (hash === 'contact' || hash === 'contact.html' || path.includes('contact')) {
        setActivePage('contact');
      } else if (hash === 'guide' || hash === 'guide.html' || path.includes('guide')) {
        setActivePage('guide');
      } else if (hash === 'faq' || hash === 'faq.html' || path.includes('faq')) {
        setActivePage('faq');
      } else if (hash === 'verify' || path.includes('verify')) {
        setActivePage('verify');
      } else {
        setActivePage('home');
      }

      // Clean dynamic query parameters (?lang=, etc.) from history to avoid unindexed crawl strings
      if (window.location.search && !window.location.search.includes('verify')) {
        try {
          window.history.replaceState(null, '', window.location.pathname || '/');
        } catch {}
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

    // Keep URL strictly clean and prevent search spiders from indexing dynamic parameters or infinite crawl variations
    try {
      if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname || '/');
      }
    } catch {
      // Safe fallback
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLaunchWithCurrency = (currency: 'INR' | 'USD' | 'EUR' | 'GBP' | 'CAD') => {
    if (currency === 'INR') {
      setReceiptData((prev) => ({
        ...prev,
        currency: 'INR',
        currencySymbol: '₹',
        monthlyRent: '25000',
        tenantName: prev.currency === 'INR' ? prev.tenantName : 'Rahul Sharma',
        landlordName: prev.currency === 'INR' ? prev.landlordName : 'Rameshwar Prasad Gupta',
        propertyAddress: prev.currency === 'INR' ? prev.propertyAddress : 'Flat 402, Sunshine Heights, 100 Feet Road, Indiranagar, Bengaluru, Karnataka - 560038',
        landlordPan: prev.landlordPan || 'ABCDE1234F',
        paymentMode: 'UPI / NetBanking / GPay',
        signatureTypedText: prev.currency === 'INR' ? prev.signatureTypedText : 'Rameshwar Prasad Gupta',
      }));
    } else if (currency === 'EUR') {
      setReceiptData((prev) => ({
        ...prev,
        currency: 'EUR',
        currencySymbol: '€',
        monthlyRent: '1250',
        tenantName: prev.currency === 'EUR' ? prev.tenantName : 'Lucas Dubois',
        landlordName: prev.currency === 'EUR' ? prev.landlordName : 'Marc Laurent',
        propertyAddress: prev.currency === 'EUR' ? prev.propertyAddress : '14 Rue de la Paix, 75002 Paris, France',
        paymentMode: 'SEPA Direct Debit / Wire',
        signatureTypedText: prev.currency === 'EUR' ? prev.signatureTypedText : 'Marc Laurent',
      }));
    } else if (currency === 'GBP') {
      setReceiptData((prev) => ({
        ...prev,
        currency: 'GBP',
        currencySymbol: '£',
        monthlyRent: '1450',
        tenantName: prev.currency === 'GBP' ? prev.tenantName : 'Oliver Smith',
        landlordName: prev.currency === 'GBP' ? prev.landlordName : 'William Evans',
        propertyAddress: prev.currency === 'GBP' ? prev.propertyAddress : '24 Baker Street, Marylebone, London, NW1 6XE, UK',
        paymentMode: 'Standing Order / BACS',
        signatureTypedText: prev.currency === 'GBP' ? prev.signatureTypedText : 'William Evans',
      }));
    } else if (currency === 'CAD') {
      setReceiptData((prev) => ({
        ...prev,
        currency: 'CAD',
        currencySymbol: '$',
        monthlyRent: '1950',
        tenantName: prev.currency === 'CAD' ? prev.tenantName : 'Liam Tremblay',
        landlordName: prev.currency === 'CAD' ? prev.landlordName : 'Robert Chen',
        propertyAddress: prev.currency === 'CAD' ? prev.propertyAddress : 'Suite 1804, 350 Bay Street, Toronto, ON M5H 2S6, Canada',
        paymentMode: 'Interac e-Transfer',
        signatureTypedText: prev.currency === 'CAD' ? prev.signatureTypedText : 'Robert Chen',
      }));
    } else {
      setReceiptData((prev) => ({
        ...prev,
        currency: 'USD',
        currencySymbol: '$',
        monthlyRent: '1850',
        tenantName: prev.currency === 'USD' ? prev.tenantName : 'John Doe',
        landlordName: prev.currency === 'USD' ? prev.landlordName : 'Jane Smith',
        propertyAddress: prev.currency === 'USD' ? prev.propertyAddress : 'Apt 4B, 742 Evergreen Terrace, Springfield, OR 97477',
        paymentMode: 'Bank Transfer / Wire / ACH',
        signatureTypedText: prev.currency === 'USD' ? prev.signatureTypedText : 'Jane Smith',
      }));
    }
    handlePageChange('rent-receipt');
  };

  const handleOpenLiveValidation = (period: MonthPeriod) => {
    const parsedAmount =
      typeof receiptData.monthlyRent === 'string'
        ? parseFloat(receiptData.monthlyRent.replace(/,/g, '')) || 0
        : receiptData.monthlyRent || 0;
    const formattedAmount = formatCurrencyAmount(parsedAmount, receiptData.currency || 'USD');

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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] w-full overflow-x-hidden">
      {/* 1. Minimal Header with Logo, Home, About, Contact & Share */}
      <Header activePage={activePage} setActivePage={handlePageChange} />

      <main className="flex-grow w-full overflow-x-hidden">
        {/* VIEW 1: Homepage Tool Selector Landing Page */}
        {activePage === 'home' && (
          <HomePage
            onSelectTool={handlePageChange}
            onLaunchWithCurrency={handleLaunchWithCurrency}
            onOpenModal={setLegalModal}
          />
        )}

        {/* REGIONAL VIEW: India HRA / Section 10(13A) Landing Page */}
        {activePage === 'in' && (
          <IndiaPage onSelectTool={handlePageChange} onLaunchWithCurrency={handleLaunchWithCurrency} />
        )}

        {/* REGIONAL VIEW: US Rental & IRS Schedule C/E Landing Page */}
        {activePage === 'us' && (
          <UsPage onSelectTool={handlePageChange} onLaunchWithCurrency={handleLaunchWithCurrency} />
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
            onNavigate={handlePageChange}
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
      <Footer setActivePage={handlePageChange} onOpenModal={setLegalModal} />

      {/* Immediate Informational Legal Overlay / Modal */}
      <LegalModal
        type={legalModal}
        onClose={() => setLegalModal(null)}
        onNavigateFullPage={handlePageChange}
      />
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
