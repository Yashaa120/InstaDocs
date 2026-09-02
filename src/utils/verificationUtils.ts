import { RentReceiptData, MonthPeriod } from '../types';

export interface DecodedReceiptVerification {
  isValid: boolean;
  receiptNo: string;
  verificationCode: string;
  tenantName: string;
  landlordName: string;
  amount: string;
  amountNumber?: number;
  periodName: string;
  startDate: string;
  endDate: string;
  propertyAddress: string;
  paymentMode: string;
  transactionRef: string;
  landlordPan: string;
  issuedDate: string;
}

/**
 * Builds the verification payload object for summary display.
 */
export function getReceiptPayloadObject(
  period: MonthPeriod,
  data: RentReceiptData,
  amount: number,
  formattedAmount: string,
  verificationCode: string
) {
  return {
    rno: period.receiptNumber,
    code: verificationCode,
    t: data.tenantName.trim() || 'Tenant',
    l: data.landlordName.trim() || 'Landlord',
    amt: formattedAmount,
    amtNum: amount,
    per: `${period.monthName} ${period.year}`,
    start: period.startDate,
    end: period.endDate,
    addr: data.propertyAddress.trim() || 'Address',
    mode: data.paymentMode,
    ref: data.transactionRef?.trim() || '',
    pan: data.landlordPan ? data.landlordPan.trim() : 'EXEMPT',
    dt: data.customDate || period.receiptDate,
  };
}

/**
 * Decodes the receipt data from the current browser URL query string or hash.
 */
export function decodeVerificationFromUrl(): DecodedReceiptVerification | null {
  if (typeof window === 'undefined') return null;

  const urlParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace('#', '?').replace(/^[^?]*\?/, ''));
  
  const isVerify = urlParams.get('verify') === '1' || window.location.hash.startsWith('#verify');
  if (!isVerify) return null;

  const rawData = urlParams.get('data') || hashParams.get('data');

  if (rawData) {
    try {
      const decodedJson = decodeURIComponent(atob(rawData));
      const parsed = JSON.parse(decodedJson);
      return {
        isValid: true,
        receiptNo: parsed.rno || 'RR-001',
        verificationCode: parsed.code || 'RR-001',
        tenantName: parsed.t || 'Tenant',
        landlordName: parsed.l || 'Landlord',
        amount: parsed.amt || '0',
        amountNumber: parsed.amtNum || 0,
        periodName: parsed.per || 'Current Month',
        startDate: parsed.start || '',
        endDate: parsed.end || '',
        propertyAddress: parsed.addr || 'Rented Premises Address',
        paymentMode: parsed.mode || 'Bank Transfer',
        transactionRef: parsed.ref || '',
        landlordPan: parsed.pan || 'EXEMPT',
        issuedDate: parsed.dt || new Date().toISOString().split('T')[0],
      };
    } catch (e) {
      console.warn('Failed to parse encoded receipt data:', e);
    }
  }

  // Fallback to direct query parameters
  const rno = urlParams.get('rno') || hashParams.get('rno');
  if (rno) {
    return {
      isValid: true,
      receiptNo: rno,
      verificationCode: urlParams.get('code') || hashParams.get('code') || rno,
      tenantName: urlParams.get('t') || hashParams.get('t') || 'Tenant',
      landlordName: urlParams.get('l') || hashParams.get('l') || 'Landlord',
      amount: urlParams.get('amt') || hashParams.get('amt') || '0',
      periodName: urlParams.get('per') || hashParams.get('per') || '',
      startDate: urlParams.get('start') || hashParams.get('start') || '',
      endDate: urlParams.get('end') || hashParams.get('end') || '',
      propertyAddress: urlParams.get('addr') || hashParams.get('addr') || 'Rented Premises',
      paymentMode: urlParams.get('mode') || hashParams.get('mode') || 'Bank Transfer',
      transactionRef: urlParams.get('ref') || hashParams.get('ref') || '',
      landlordPan: urlParams.get('pan') || hashParams.get('pan') || 'EXEMPT',
      issuedDate: urlParams.get('dt') || hashParams.get('dt') || '',
    };
  }

  return null;
}
