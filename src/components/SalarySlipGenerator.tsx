import React, { useState, useRef, useEffect } from 'react';
import {
  Building2,
  User,
  DollarSign,
  TrendingDown,
  Calendar,
  CreditCard,
  Download,
  Printer,
  Sparkles,
  Plus,
  Trash2,
  FileCheck,
  CheckCircle2,
  RefreshCw,
  Eye,
  ShieldCheck,
  Upload,
  Type,
  PenTool,
  Check,
  Image as ImageIcon,
  HelpCircle,
  ArrowLeft,
} from 'lucide-react';
import SignaturePad from 'signature_pad';
import { SalarySlipData, SignatureMode } from '../types';
import { numberToIndianWords, formatIndianCurrency } from '../utils/numberToWords';
import { downloadReceiptsPdf } from '../utils/pdfGenerator';
import { AdSlot } from './AdSlot';
import { SalarySlipContent } from './SalarySlipContent';
import { RelatedTools } from './RelatedTools';
import { DownloadFormatModal } from './DownloadFormatModal';
import { ActivePage } from '../types';

interface SalarySlipGeneratorProps {
  onNavigate: (page: ActivePage) => void;
}

export const SalarySlipGenerator: React.FC<SalarySlipGeneratorProps> = ({ onNavigate }) => {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfProgressText, setPdfProgressText] = useState('');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Signature canvas ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const initialData: SalarySlipData = {
    companyName: 'TechVanguard Solutions Pvt. Ltd.',
    companyAddress: 'Plot 42, 4th Floor, EPIP Zone, Whitefield, Bengaluru, Karnataka - 560066',
    payslipTitle: 'SALARY SLIP FOR THE MONTH OF',
    employeeName: 'Priya Sundaram',
    employeeId: 'TVS-2024-892',
    designation: 'Senior Product Engineer',
    department: 'Engineering & Innovation',
    joiningDate: '12-Jan-2023',
    bankName: 'HDFC Bank Ltd.',
    bankAccountNo: 'XXXX-XXXX-4819',
    panNumber: 'ABCPS9876K',
    uanNumber: '101298471928',
    salaryMonth: 'August 2026',
    payDays: 31,
    paidDays: 31,
    payDate: '31-Aug-2026',
    payslipNumber: 'PAY-2026-08-0412',
    basicPay: 45000,
    hra: 22500,
    conveyanceAllowance: 3000,
    specialAllowance: 14500,
    customEarnings: [{ label: 'Medical Allowance', amount: 2000 }],
    providentFund: 3600,
    professionalTax: 200,
    tds: 4200,
    customDeductions: [{ label: 'Group Health Insurance', amount: 500 }],
    paymentMode: 'Direct Bank Transfer (NEFT/IMPS)',
    transactionRef: 'NEFT-HDFC-99182376',
    remarks: 'Salary credited successfully into registered salary account.',
    templateFormat: 'corporate',
    signatureMode: 'type',
    signatureTypedText: 'Authorized Signatory',
    signatureTypedFont: 'Dancing Script',
    signatoryTitle: 'Manager - Payroll & HR',
  };

  const [data, setData] = useState<SalarySlipData>(initialData);

  // Parse numerical amounts safely
  const parseNum = (val: number | string): number => {
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    if (!val) return 0;
    const clean = val.toString().replace(/,/g, '').trim();
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
  };

  // Calculations
  const basicVal = parseNum(data.basicPay);
  const hraVal = parseNum(data.hra);
  const conveyanceVal = parseNum(data.conveyanceAllowance);
  const specialVal = parseNum(data.specialAllowance);
  const customEarningsTotal = data.customEarnings.reduce(
    (acc, curr) => acc + parseNum(curr.amount),
    0
  );

  const grossSalary =
    basicVal + hraVal + conveyanceVal + specialVal + customEarningsTotal;

  const pfVal = parseNum(data.providentFund);
  const ptVal = parseNum(data.professionalTax);
  const tdsVal = parseNum(data.tds);
  const customDeductionsTotal = data.customDeductions.reduce(
    (acc, curr) => acc + parseNum(curr.amount),
    0
  );

  const totalDeductions = pfVal + ptVal + tdsVal + customDeductionsTotal;
  const netSalary = Math.max(0, grossSalary - totalDeductions);
  const netSalaryInWords = numberToIndianWords(netSalary);

  // Initialize Signature Pad when 'draw' mode is active
  useEffect(() => {
    if (data.signatureMode === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(ratio, ratio);
      }

      if (signaturePadRef.current) {
        signaturePadRef.current.off();
      }

      const pad = new SignaturePad(canvas, {
        penColor: '#0f172a',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        minWidth: 1.2,
        maxWidth: 3,
      });

      if (data.signatureDrawnDataUrl) {
        pad.fromDataURL(data.signatureDrawnDataUrl);
      }

      pad.addEventListener('endStroke', () => {
        if (!pad.isEmpty()) {
          const dataUrl = pad.toDataURL('image/png');
          setData((prev) => ({ ...prev, signatureDrawnDataUrl: dataUrl }));
        }
      });

      signaturePadRef.current = pad;
    }

    return () => {
      if (signaturePadRef.current) {
        signaturePadRef.current.off();
      }
    };
  }, [data.signatureMode]);

  const handleSignatureModeChange = (mode: SignatureMode) => {
    setData((prev) => ({
      ...prev,
      signatureMode: mode,
      signatureTypedText:
        mode === 'type' && !prev.signatureTypedText
          ? 'Authorized Signatory'
          : prev.signatureTypedText,
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, JPEG).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setData((prev) => ({ ...prev, signatureUploadUrl: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleClearDraw = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
    setData((prev) => ({ ...prev, signatureDrawnDataUrl: undefined }));
  };

  const addCustomEarning = () => {
    setData((prev) => ({
      ...prev,
      customEarnings: [...prev.customEarnings, { label: 'Bonus / Other Allowance', amount: '' }],
    }));
  };

  const removeCustomEarning = (index: number) => {
    setData((prev) => ({
      ...prev,
      customEarnings: prev.customEarnings.filter((_, i) => i !== index),
    }));
  };

  const addCustomDeduction = () => {
    setData((prev) => ({
      ...prev,
      customDeductions: [...prev.customDeductions, { label: 'Loan / Advance Deduction', amount: '' }],
    }));
  };

  const removeCustomDeduction = (index: number) => {
    setData((prev) => ({
      ...prev,
      customDeductions: prev.customDeductions.filter((_, i) => i !== index),
    }));
  };

  // PDF Export
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setPdfProgressText('Initializing salary slip export...');
    try {
      const formattedFileName = `Salary_Slip_${data.employeeName.replace(/\s+/g, '_')}_${data.salaryMonth.replace(/\s+/g, '_')}.pdf`;
      await downloadReceiptsPdf({
        containerElementId: 'salary-slip-print-card',
        fileName: formattedFileName,
        onProgress: (_prog, text) => setPdfProgressText(text),
      });
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      {/* Top Navigation: Back to Home button */}
      <div className="mb-4">
        <button
          type="button"
          id="back-to-home-salary-slip"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors py-1.5 px-2.5 -ml-2.5 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2.5 sm:mb-3 border border-emerald-200 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Payment of Wages Act Compliant • 100% Private Client-Side</span>
        </div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Free Salary Slip Generator
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Generate professional, audit-compliant employee payslips with automated Basic, HRA, PF, PT, and TDS calculations. Free instant PDF download with company branding and digital signature.
        </p>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="lg:hidden flex items-center justify-center mb-5">
        <div className="bg-slate-200/90 p-1 rounded-xl flex items-center w-full max-w-sm shadow-inner">
          <button
            type="button"
            onClick={() => setMobileTab('form')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
              mobileTab === 'form'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            📝 Fill Details
          </button>
          <button
            type="button"
            onClick={() => setMobileTab('preview')}
            className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all text-center cursor-pointer ${
              mobileTab === 'preview'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            👁️ Live Preview &amp; PDF
          </button>
        </div>
      </div>

      {/* Main Grid: Form Left (6 cols), Live Preview Right (6 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
        {/* Form Column */}
        <div
          className={`lg:col-span-6 space-y-4 ${
            mobileTab === 'preview' ? 'hidden lg:block' : 'block'
          }`}
        >
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4 sm:space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                <span>Payslip Information</span>
              </h2>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Auto-Calculated
              </span>
            </div>

            {/* 1. Company Information */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                1. Company / Employer Details
              </h3>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Employer Name *
                </label>
                <input
                  type="text"
                  value={data.companyName}
                  onChange={(e) => setData({ ...data, companyName: e.target.value })}
                  placeholder="e.g. Acme Innovations Pvt. Ltd."
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company Registered Address *
                </label>
                <textarea
                  rows={2}
                  value={data.companyAddress}
                  onChange={(e) => setData({ ...data, companyAddress: e.target.value })}
                  placeholder="e.g. Unit 401, Tech Park, Outer Ring Road, Bengaluru - 560103"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>
            </div>

            {/* 2. Employee Details */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Employee Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Employee Name *
                  </label>
                  <input
                    type="text"
                    value={data.employeeName}
                    onChange={(e) => setData({ ...data, employeeName: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Employee ID *
                  </label>
                  <input
                    type="text"
                    value={data.employeeId}
                    onChange={(e) => setData({ ...data, employeeId: e.target.value })}
                    placeholder="e.g. EMP-1048"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Designation *
                  </label>
                  <input
                    type="text"
                    value={data.designation}
                    onChange={(e) => setData({ ...data, designation: e.target.value })}
                    placeholder="e.g. Software Engineer"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    value={data.department}
                    onChange={(e) => setData({ ...data, department: e.target.value })}
                    placeholder="e.g. Information Technology"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Bank Name &amp; A/C No
                  </label>
                  <input
                    type="text"
                    value={data.bankAccountNo}
                    onChange={(e) => setData({ ...data, bankAccountNo: e.target.value })}
                    placeholder="e.g. HDFC Bank - XXXX-4912"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Employee PAN (Optional)
                  </label>
                  <input
                    type="text"
                    value={data.panNumber}
                    onChange={(e) => setData({ ...data, panNumber: e.target.value.toUpperCase() })}
                    placeholder="e.g. ABCDE1234F"
                    className="w-full px-3 py-2 text-xs sm:text-sm uppercase bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors font-mono"
                  />
                </div>
              </div>
            </div>

            {/* 3. Pay Period & Days */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                3. Pay Period &amp; Attendance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Salary Month *
                  </label>
                  <input
                    type="text"
                    value={data.salaryMonth}
                    onChange={(e) => setData({ ...data, salaryMonth: e.target.value })}
                    placeholder="e.g. August 2026"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Paid / Working Days
                  </label>
                  <input
                    type="number"
                    value={data.paidDays}
                    onChange={(e) => setData({ ...data, paidDays: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Disbursement Date
                  </label>
                  <input
                    type="text"
                    value={data.payDate}
                    onChange={(e) => setData({ ...data, payDate: e.target.value })}
                    placeholder="e.g. 31-Aug-2026"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 4. Earnings Breakdown */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                  <span>4. Earnings Breakdown (₹)</span>
                </h3>
                <span className="text-xs font-bold text-emerald-700">
                  Gross: ₹{formatIndianCurrency(grossSalary)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Basic Salary (₹) *
                  </label>
                  <input
                    type="number"
                    value={data.basicPay}
                    onChange={(e) => setData({ ...data, basicPay: e.target.value })}
                    placeholder="45000"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    House Rent Allowance (HRA) (₹) *
                  </label>
                  <input
                    type="number"
                    value={data.hra}
                    onChange={(e) => setData({ ...data, hra: e.target.value })}
                    placeholder="22500"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Conveyance Allowance (₹)
                  </label>
                  <input
                    type="number"
                    value={data.conveyanceAllowance}
                    onChange={(e) => setData({ ...data, conveyanceAllowance: e.target.value })}
                    placeholder="3000"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Allowance (₹)
                  </label>
                  <input
                    type="number"
                    value={data.specialAllowance}
                    onChange={(e) => setData({ ...data, specialAllowance: e.target.value })}
                    placeholder="14500"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              {/* Dynamic Custom Earnings - Mobile First Flexbox */}
              {data.customEarnings.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 sm:p-0 bg-slate-100/70 sm:bg-transparent rounded-lg border sm:border-0 border-slate-200"
                >
                  <input
                    type="text"
                    value={item.label}
                    onChange={(e) => {
                      const updated = [...data.customEarnings];
                      updated[idx].label = e.target.value;
                      setData({ ...data, customEarnings: updated });
                    }}
                    placeholder="Allowance Label (e.g. Bonus)"
                    className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={item.amount}
                      onChange={(e) => {
                        const updated = [...data.customEarnings];
                        updated[idx].amount = e.target.value;
                        setData({ ...data, customEarnings: updated });
                      }}
                      placeholder="₹ Amount"
                      className="flex-1 sm:w-28 px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg font-mono focus:outline-none focus:border-emerald-600"
                    />
                    <button
                      type="button"
                      onClick={() => removeCustomEarning(idx)}
                      className="p-2 text-rose-500 hover:text-rose-700 bg-white sm:bg-transparent border sm:border-0 border-slate-200 rounded-lg cursor-pointer shrink-0 transition-colors"
                      title="Delete Allowance"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addCustomEarning}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-3 py-1.5 rounded-lg border border-emerald-200 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Custom Allowance (e.g. Performance Bonus)</span>
              </button>
            </div>

            {/* 5. Deductions Breakdown */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                  <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
                  <span>5. Deductions Breakdown (₹)</span>
                </h3>
                <span className="text-xs font-bold text-rose-700">
                  Total: ₹{formatIndianCurrency(totalDeductions)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Provident Fund (PF) (₹)
                  </label>
                  <input
                    type="number"
                    value={data.providentFund}
                    onChange={(e) => setData({ ...data, providentFund: e.target.value })}
                    placeholder="3600"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Professional Tax (PT) (₹)
                  </label>
                  <input
                    type="number"
                    value={data.professionalTax}
                    onChange={(e) => setData({ ...data, professionalTax: e.target.value })}
                    placeholder="200"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    TDS / Income Tax (₹)
                  </label>
                  <input
                    type="number"
                    value={data.tds}
                    onChange={(e) => setData({ ...data, tds: e.target.value })}
                    placeholder="4200"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              {/* Dynamic Custom Deductions - Mobile First Flexbox */}
              {data.customDeductions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 sm:p-0 bg-slate-100/70 sm:bg-transparent rounded-lg border sm:border-0 border-slate-200"
                >
                  <input
                    type="text"
                    value={item.label}
                    onChange={(e) => {
                      const updated = [...data.customDeductions];
                      updated[idx].label = e.target.value;
                      setData({ ...data, customDeductions: updated });
                    }}
                    placeholder="Deduction Label (e.g. Loan EMI)"
                    className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600"
                  />
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={item.amount}
                      onChange={(e) => {
                        const updated = [...data.customDeductions];
                        updated[idx].amount = e.target.value;
                        setData({ ...data, customDeductions: updated });
                      }}
                      placeholder="₹ Amount"
                      className="flex-1 sm:w-28 px-3 py-2 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg font-mono focus:outline-none focus:border-emerald-600"
                    />
                    <button
                      type="button"
                      onClick={() => removeCustomDeduction(idx)}
                      className="p-2 text-rose-500 hover:text-rose-700 bg-white sm:bg-transparent border sm:border-0 border-slate-200 rounded-lg cursor-pointer shrink-0 transition-colors"
                      title="Delete Deduction"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={addCustomDeduction}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100/80 px-3 py-1.5 rounded-lg border border-rose-200 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Custom Deduction (e.g. Loan / Insurance)</span>
              </button>
            </div>

            {/* 6. Employer Signature Block (3-Option Tabbed) */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  6. Employer / Signatory Signature
                </label>
                <span className="text-[11px] text-slate-500">Upload / Type / Draw</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => handleSignatureModeChange('upload')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    data.signatureMode === 'upload'
                      ? 'bg-white text-emerald-700 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span className="truncate">Upload</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSignatureModeChange('type')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    data.signatureMode === 'type'
                      ? 'bg-white text-emerald-700 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span className="truncate">Type</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSignatureModeChange('draw')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    data.signatureMode === 'draw'
                      ? 'bg-white text-emerald-700 shadow-2xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span className="truncate">Draw</span>
                </button>
              </div>

              {/* Upload Tab */}
              {data.signatureMode === 'upload' && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  {!data.signatureUploadUrl ? (
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-lg p-3 sm:p-4 cursor-pointer bg-white">
                      <ImageIcon className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-xs font-semibold text-slate-700">Upload signature/seal image</span>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                  ) : (
                    <div className="flex items-center justify-between bg-white p-2 border border-slate-200 rounded">
                      <img src={data.signatureUploadUrl} alt="Signature" className="h-8 object-contain" />
                      <button
                        type="button"
                        onClick={() => setData({ ...data, signatureUploadUrl: undefined })}
                        className="text-xs text-rose-600 hover:text-rose-700 cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Type Tab */}
              {data.signatureMode === 'type' && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <input
                    type="text"
                    value={data.signatureTypedText || ''}
                    onChange={(e) => setData({ ...data, signatureTypedText: e.target.value })}
                    placeholder="e.g. Authorized Signatory / HR Manager"
                    className="w-full px-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-emerald-600"
                  />
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setData({ ...data, signatureTypedFont: 'Dancing Script' })}
                      className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                        data.signatureTypedFont === 'Dancing Script'
                          ? 'bg-emerald-600 text-white font-medium'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      Dancing Script
                    </button>
                    <button
                      type="button"
                      onClick={() => setData({ ...data, signatureTypedFont: 'Sacramento' })}
                      className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                        data.signatureTypedFont === 'Sacramento'
                          ? 'bg-emerald-600 text-white font-medium'
                          : 'bg-white border border-slate-200 text-slate-700'
                      }`}
                    >
                      Sacramento
                    </button>
                  </div>
                </div>
              )}

              {/* Draw Tab */}
              {data.signatureMode === 'draw' && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Draw signature below:</span>
                    <button
                      type="button"
                      onClick={handleClearDraw}
                      className="text-rose-600 text-xs hover:underline cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                  <canvas
                    ref={canvasRef}
                    className="w-full h-20 bg-white border border-slate-300 rounded touch-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Signatory Designation / Title
                </label>
                <input
                  type="text"
                  value={data.signatoryTitle || ''}
                  onChange={(e) => setData({ ...data, signatoryTitle: e.target.value })}
                  placeholder="e.g. Manager - Payroll &amp; HR"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>
            </div>

            {/* Form-Bottom Action Controls: Always Visible on Mobile & Desktop */}
            <div id="salary-slip-form-actions" className="pt-4 border-t border-slate-200 space-y-3">
              <button
                type="button"
                id="generate-download-salary-pdf-btn"
                onClick={() => setIsDownloadModalOpen(true)}
                disabled={isGeneratingPdf}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer disabled:opacity-75"
              >
                <Download className="w-4 h-4" />
                <span>Download Payslip (Choose PDF or JPG)</span>
              </button>

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setMobileTab('preview');
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className="lg:hidden py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span>View Live Preview</span>
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Print</span>
                </button>

                <span className="text-[11px] text-slate-400 hidden sm:inline">
                  100% Free &amp; Client-Side
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Preview Column (Sticky on Desktop) */}
        <div
          className={`lg:col-span-6 space-y-4 lg:sticky lg:top-24 ${
            mobileTab === 'form' ? 'hidden lg:block' : 'block'
          }`}
        >
          {/* Action Bar */}
          <div className="bg-white rounded-xl border border-slate-200 p-3 sm:p-4 shadow-xs flex flex-wrap items-center justify-between gap-2.5">
            <div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                Net Pay: ₹{formatIndianCurrency(netSalary)}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium">
                Live Calculated A4 Payslip
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileTab('form');
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className="lg:hidden py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>✏️ Edit</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="py-2 px-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Print Payslip"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                type="button"
                id="salary-slip-preview-download-btn"
                onClick={() => setIsDownloadModalOpen(true)}
                disabled={isGeneratingPdf}
                className="py-2 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer disabled:opacity-75"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download (PDF / JPG)</span>
              </button>
            </div>
          </div>

          {/* Actual Printable Payslip Document */}
          <div className="bg-slate-200/70 p-2 sm:p-4 rounded-2xl border border-slate-300/80 shadow-inner overflow-x-auto">
            <div
              id="salary-slip-print-card"
              className="receipt-print-card bg-white rounded-xl border border-slate-300 p-4 sm:p-8 shadow-sm text-[#0F172A] font-sans"
              style={{ minHeight: '680px' }}
            >
              {/* Header: Company Details */}
              <div className="text-center pb-5 border-b-2 border-slate-800">
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight uppercase">
                  {data.companyName || 'COMPANY NAME'}
                </h2>
                <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                  {data.companyAddress || 'Company Registered Address'}
                </p>
                <div className="mt-3 inline-block bg-slate-900 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {data.payslipTitle} {data.salaryMonth}
                </div>
              </div>

              {/* Employee Summary Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 py-4 border-b border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 font-medium">Employee Name: </span>
                  <strong className="text-slate-900">{data.employeeName || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Employee ID: </span>
                  <strong className="text-slate-900">{data.employeeId || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Designation: </span>
                  <strong className="text-slate-900">{data.designation || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Department: </span>
                  <strong className="text-slate-900">{data.department || '—'}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Bank A/C: </span>
                  <span className="text-slate-900">{data.bankAccountNo || '—'}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">PAN Number: </span>
                  <span className="text-slate-900 font-mono">{data.panNumber || '—'}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Paid Days: </span>
                  <strong className="text-slate-900">{data.paidDays} Days</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-medium">Pay Date: </span>
                  <strong className="text-slate-900">{data.payDate || '—'}</strong>
                </div>
              </div>

              {/* Earnings vs Deductions Table */}
              <div className="mt-4 border border-slate-300 rounded overflow-hidden text-xs">
                <div className="grid grid-cols-2 bg-slate-100 border-b border-slate-300 font-bold text-slate-800">
                  <div className="p-2.5 border-r border-slate-300">Earnings Particulars</div>
                  <div className="p-2.5">Deductions Particulars</div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-slate-300 min-h-[160px]">
                  {/* Earnings Column */}
                  <div className="p-2.5 space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Basic Salary</span>
                      <span className="font-semibold text-slate-900">
                        ₹{formatIndianCurrency(basicVal)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">House Rent Allowance (HRA)</span>
                      <span className="font-semibold text-slate-900">
                        ₹{formatIndianCurrency(hraVal)}
                      </span>
                    </div>
                    {conveyanceVal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Conveyance Allowance</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(conveyanceVal)}
                        </span>
                      </div>
                    )}
                    {specialVal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Special Allowance</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(specialVal)}
                        </span>
                      </div>
                    )}
                    {data.customEarnings.map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-600">{item.label || 'Other Allowance'}</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(parseNum(item.amount))}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Deductions Column */}
                  <div className="p-2.5 space-y-1.5">
                    {pfVal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Provident Fund (EPF)</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(pfVal)}
                        </span>
                      </div>
                    )}
                    {ptVal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Professional Tax (PT)</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(ptVal)}
                        </span>
                      </div>
                    )}
                    {tdsVal > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Income Tax (TDS)</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(tdsVal)}
                        </span>
                      </div>
                    )}
                    {data.customDeductions.map((item, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-slate-600">{item.label || 'Other Deduction'}</span>
                        <span className="font-semibold text-slate-900">
                          ₹{formatIndianCurrency(parseNum(item.amount))}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtotals Row */}
                <div className="grid grid-cols-2 bg-slate-50 border-t border-slate-300 font-bold text-xs">
                  <div className="p-2.5 border-r border-slate-300 flex justify-between">
                    <span>Gross Earnings</span>
                    <span className="text-emerald-700">₹{formatIndianCurrency(grossSalary)}</span>
                  </div>
                  <div className="p-2.5 flex justify-between">
                    <span>Total Deductions</span>
                    <span className="text-rose-700">₹{formatIndianCurrency(totalDeductions)}</span>
                  </div>
                </div>
              </div>

              {/* Net Pay Highlight Banner */}
              <div className="mt-4 p-3 bg-emerald-50 border border-emerald-300 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Net Take-Home Salary
                  </span>
                  <span className="text-xs text-slate-600 italic">
                    {netSalaryInWords}
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-black text-emerald-800">
                  ₹{formatIndianCurrency(netSalary)}
                </div>
              </div>

              {/* Footer / Signatory Row */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-end justify-between text-xs">
                <div className="space-y-1 text-slate-500 max-w-xs text-[11px]">
                  <p>• System-generated salary voucher.</p>
                  <p>• Mode: {data.paymentMode}</p>
                </div>

                <div className="text-center space-y-1">
                  {/* Signature display */}
                  <div className="h-14 flex items-center justify-center min-w-[140px]">
                    {data.signatureMode === 'upload' && data.signatureUploadUrl && (
                      <img
                        src={data.signatureUploadUrl}
                        alt="Employer Signature"
                        className="max-h-12 max-w-[140px] object-contain"
                      />
                    )}

                    {data.signatureMode === 'draw' && data.signatureDrawnDataUrl && (
                      <img
                        src={data.signatureDrawnDataUrl}
                        alt="Employer Signature"
                        className="max-h-12 max-w-[140px] object-contain"
                      />
                    )}

                    {data.signatureMode === 'type' && (
                      <span
                        className="text-xl text-slate-900"
                        style={{
                          fontFamily:
                            data.signatureTypedFont === 'Sacramento'
                              ? "'Sacramento', cursive"
                              : "'Dancing Script', cursive",
                        }}
                      >
                        {data.signatureTypedText || 'Authorized Signatory'}
                      </span>
                    )}

                    {data.signatureMode === 'none' && (
                      <div className="border-b border-slate-400 w-32 pb-1" />
                    )}
                  </div>
                  <div className="border-t border-slate-800 pt-1 font-bold text-slate-900">
                    {data.signatoryTitle || 'Authorized Signatory'}
                  </div>
                  <span className="text-[10px] text-slate-500 block">
                    {data.companyName}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools Navigation Cards (Compact 2-col horizontal layout) */}
      <RelatedTools currentTool="salary-slip" onNavigate={onNavigate} />

      {/* Pre-Footer Banner Ad */}
      <AdSlot type="pre-footer" />

      {/* 600+ Words Below-Tool Educational Guide & FAQs */}
      <SalarySlipContent />

      {/* Download Format Modal (PDF / JPG / PNG / Print) */}
      <DownloadFormatModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        documentTitle="Salary Slip"
        defaultFileName={`Salary_Slip_${(data.employeeName || 'Employee').replace(/\s+/g, '_')}_${(data.salaryMonth || 'Payslip').replace(/\s+/g, '_')}`}
        targetElementId="salary-slip-print-card"
      />
    </div>
  );
};
