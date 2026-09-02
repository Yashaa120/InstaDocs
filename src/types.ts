export type SignatureMode = 'upload' | 'type' | 'draw' | 'none';
export type ReceiptTemplate = 'modern' | 'classic' | 'minimalist' | 'simple_paper' | 'corporate';

export interface RentReceiptData {
  tenantName: string;
  landlordName: string;
  monthlyRent: number | string;
  propertyAddress: string;
  landlordPan: string;
  isMultiMonth: boolean;
  singleMonth: number; // 0 - 11
  singleYear: number;
  startMonth: number; // 0 - 11
  startYear: number;
  endMonth: number; // 0 - 11
  endYear: number;
  paymentMode: 'Bank Transfer / NEFT / IMPS' | 'UPI' | 'Cheque' | 'Cash';
  receiptNoPrefix: string;
  customDate?: string;
  transactionRef?: string; // UTR / UPI Ref / Cheque No / Bank Txn ID for Court & Audit verification
  templateFormat?: ReceiptTemplate;
  // Signature 3 Options
  signatureMode: SignatureMode;
  signatureUploadUrl?: string;
  signatureTypedText?: string;
  signatureTypedFont?: 'Dancing Script' | 'Sacramento';
  signatureDrawnDataUrl?: string;
}

export type ActivePage =
  | 'home'
  | 'rent-receipt'
  | 'tool' // alias for rent-receipt
  | 'salary-slip'
  | 'affidavit'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'contact'
  | 'guide'
  | 'verify'
  | 'faq';

export interface MonthPeriod {
  monthIndex: number;
  monthName: string;
  year: number;
  receiptNumber: string;
  receiptDate: string;
  startDate: string;
  endDate: string;
}

export interface SalarySlipData {
  // Company Information
  companyName: string;
  companyAddress: string;
  companyLogoUrl?: string;
  payslipTitle: string;
  
  // Employee Information
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  joiningDate?: string;
  bankName?: string;
  bankAccountNo?: string;
  panNumber?: string;
  uanNumber?: string;
  
  // Period & Dates
  salaryMonth: string; // e.g. "August 2026"
  payDays: number;
  paidDays: number;
  payDate: string;
  payslipNumber: string;

  // Earnings Breakdown
  basicPay: number | string;
  hra: number | string;
  conveyanceAllowance: number | string;
  specialAllowance: number | string;
  customEarnings: { label: string; amount: number | string }[];

  // Deductions Breakdown
  providentFund: number | string;
  professionalTax: number | string;
  tds: number | string;
  customDeductions: { label: string; amount: number | string }[];

  // Payment method & notes
  paymentMode: string;
  transactionRef?: string;
  remarks?: string;

  // Visual Template
  templateFormat: 'corporate' | 'modern' | 'classic' | 'simple_paper';

  // Employer Signature (3 modes)
  signatureMode: SignatureMode;
  signatureUploadUrl?: string;
  signatureTypedText?: string;
  signatureTypedFont?: 'Dancing Script' | 'Sacramento';
  signatureDrawnDataUrl?: string;
  signatoryTitle?: string;
}

export type AffidavitPurpose =
  | 'address_proof'
  | 'name_change'
  | 'income_declaration'
  | 'gap_declaration'
  | 'lost_document'
  | 'custom';

export interface AffidavitData {
  // Declarant / Deponent Info
  declarantName: string;
  relationType: 's/o' | 'd/o' | 'w/o' | 'c/o';
  relativeName: string;
  age: number | string;
  occupation: string;
  idProofType: string;
  idProofNumber: string;

  // Addresses
  currentAddress: string;
  hasDifferentPermanentAddress: boolean;
  permanentAddress: string;

  // Purpose & Content
  purpose: AffidavitPurpose;
  customTitle?: string;
  statementClauses: string[];
  
  // Execution details
  declarationDate: string;
  place: string;

  // Template / Stamp mode
  templateFormat: 'formal_stamp' | 'clean_paper' | 'court_format';
  showStampMarginNotice: boolean;

  // Deponent Signature (3 modes)
  signatureMode: SignatureMode;
  signatureUploadUrl?: string;
  signatureTypedText?: string;
  signatureTypedFont?: 'Dancing Script' | 'Sacramento';
  signatureDrawnDataUrl?: string;
}

