import React, { useState, useRef, useEffect } from 'react';
import {
  Scale,
  User,
  MapPin,
  Calendar,
  Download,
  Printer,
  Sparkles,
  Plus,
  Trash2,
  FileCheck2,
  CheckCircle2,
  RefreshCw,
  Eye,
  ShieldCheck,
  Upload,
  Type,
  PenTool,
  Check,
  Image as ImageIcon,
  AlertTriangle,
  FileText,
  Stamp,
  Info,
  ArrowLeft,
} from 'lucide-react';
import SignaturePad from 'signature_pad';
import { AffidavitData, AffidavitPurpose, SignatureMode } from '../types';
import { downloadReceiptsPdf } from '../utils/pdfGenerator';
import { AdSlot } from './AdSlot';
import { AffidavitContent } from './AffidavitContent';
import { RelatedTools } from './RelatedTools';
import { DownloadFormatModal } from './DownloadFormatModal';
import { ActivePage } from '../types';

interface AffidavitGeneratorProps {
  onNavigate: (page: ActivePage) => void;
}

export const AffidavitGenerator: React.FC<AffidavitGeneratorProps> = ({ onNavigate }) => {
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfProgressText, setPdfProgressText] = useState('');
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Signature canvas ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const getClausesForPurpose = (purpose: AffidavitPurpose): string[] => {
    switch (purpose) {
      case 'address_proof':
        return [
          'That I am a bonafide citizen and permanent resident of India.',
          'That I am currently residing at the address mentioned above for the past 2 years.',
          'That all official and legal correspondence may be delivered to my above-stated address.',
          'That the documents produced by me in support of my residence proof are authentic, genuine, and valid.',
        ];
      case 'name_change':
        return [
          'That my original and earlier name recorded in my school and educational records was [Previous Name].',
          'That I have changed my name and shall hereafter be known and addressed by my new name [New Full Name].',
          'That both names refer to one and the same person, i.e., myself.',
          'That I have made this declaration to update my records across all government and private authorities.',
        ];
      case 'income_declaration':
        return [
          'That I am engaged in self-employment / professional consulting / agricultural operations.',
          'That my total annual household income from all sources during the current financial year is approximately ₹ [Amount in figures] (Rupees [Amount in Words] Only).',
          'That no other member of my household has any taxable income beyond the statutory exemption limit.',
          'That this income declaration is true and submitted for obtaining educational scholarship / welfare scheme benefits.',
        ];
      case 'gap_declaration':
        return [
          'That I successfully completed my [Course / Degree / 12th Standard] in the academic year [Year].',
          'That there has been a gap of [Number] years in my regular education / employment due to [Preparation for competitive examinations / health reasons / family commitments].',
          'That during this intervening gap period, I was not involved in any unlawful, anti-social, or criminal activities.',
        ];
      case 'lost_document':
        return [
          'That I am the rightful owner and holder of the original document, namely [Document Name / Registration No].',
          'That on or about [Date], the said original document was inadvertently misplaced / lost and despite diligent efforts could not be traced.',
          'That the said document has not been pledged, mortgaged, or deposited with any bank or financial institution.',
        ];
      case 'custom':
      default:
        return [
          'That the facts stated in this affidavit are true to my personal knowledge and belief.',
          'That nothing material has been concealed or falsely stated herein.',
        ];
    }
  };

  const initialData: AffidavitData = {
    declarantName: 'Suresh Kumar Reddy',
    relationType: 's/o',
    relativeName: 'Venkata Subba Reddy',
    age: 32,
    occupation: 'Software Engineer',
    idProofType: 'Aadhaar Card',
    idProofNumber: 'XXXX-XXXX-8912',
    currentAddress: 'Flat 304, Green Meadows Apartment, Sarjapur Main Road, Bengaluru, Karnataka - 560035',
    hasDifferentPermanentAddress: false,
    permanentAddress: 'House No. 12-4-89, RTC Colony, Kadapa, Andhra Pradesh - 516001',
    purpose: 'address_proof',
    customTitle: 'AFFIDAVIT / SELF-DECLARATION OF RESIDENTIAL ADDRESS',
    statementClauses: getClausesForPurpose('address_proof'),
    declarationDate: new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    place: 'Bengaluru',
    templateFormat: 'formal_stamp',
    showStampMarginNotice: false,
    signatureMode: 'type',
    signatureTypedText: 'Suresh Kumar Reddy',
    signatureTypedFont: 'Dancing Script',
  };

  const [data, setData] = useState<AffidavitData>(initialData);

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

  const handlePurposeChange = (purpose: AffidavitPurpose) => {
    let title = 'AFFIDAVIT / SELF-DECLARATION';
    if (purpose === 'address_proof') title = 'AFFIDAVIT / SELF-DECLARATION OF RESIDENTIAL ADDRESS';
    if (purpose === 'name_change') title = 'AFFIDAVIT FOR CHANGE OF NAME';
    if (purpose === 'income_declaration') title = 'INCOME SELF-DECLARATION AFFIDAVIT';
    if (purpose === 'gap_declaration') title = 'AFFIDAVIT FOR GAP IN EDUCATION / CAREER';
    if (purpose === 'lost_document') title = 'AFFIDAVIT FOR LOSS OF ORIGINAL DOCUMENTS';

    setData((prev) => ({
      ...prev,
      purpose,
      customTitle: title,
      statementClauses: getClausesForPurpose(purpose),
    }));
  };

  const handleSignatureModeChange = (mode: SignatureMode) => {
    setData((prev) => ({
      ...prev,
      signatureMode: mode,
      signatureTypedText:
        mode === 'type' && !prev.signatureTypedText
          ? prev.declarantName || 'Deponent Signature'
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

  const addClause = () => {
    setData((prev) => ({
      ...prev,
      statementClauses: [
        ...prev.statementClauses,
        'That I solemnly affirm that the facts stated herein are true and correct.',
      ],
    }));
  };

  const updateClause = (idx: number, text: string) => {
    setData((prev) => {
      const updated = [...prev.statementClauses];
      updated[idx] = text;
      return { ...prev, statementClauses: updated };
    });
  };

  const removeClause = (idx: number) => {
    setData((prev) => ({
      ...prev,
      statementClauses: prev.statementClauses.filter((_, i) => i !== idx),
    }));
  };

  // PDF Export
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    setPdfProgressText('Formatting affidavit document...');
    try {
      const formattedFileName = `Affidavit_${data.declarantName.replace(/\s+/g, '_')}_${data.purpose}.pdf`;
      await downloadReceiptsPdf({
        containerElementId: 'affidavit-print-card',
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
          id="back-to-home-affidavit"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-amber-800 transition-colors py-1.5 px-2.5 -ml-2.5 rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Hero Intro */}
      <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-amber-50 text-amber-800 mb-2.5 sm:mb-3 border border-amber-200 shadow-2xs">
          <Scale className="w-3.5 h-3.5 text-amber-700" />
          <span>General Purpose Legal Draft • Indian Oaths Act &amp; Stamp Ready</span>
        </div>
        <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Affidavit &amp; Address Proof Generator
        </h1>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Create structured self-declaration affidavits for residence/address proof, name change, educational gap, or income declarations ready for legal printing or notarization.
        </p>
      </div>

      {/* Statutory Advisory Notice */}
      <div className="mb-5 p-3 sm:p-3.5 bg-amber-50/90 border border-amber-200 rounded-xl flex items-start gap-2.5 sm:gap-3 shadow-2xs text-[11px] sm:text-xs text-amber-900 leading-relaxed max-w-4xl mx-auto">
        <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Legal Reference Notice:</strong> This is a general declaration format for reference and self-attestation. For legal matters requiring formal attestation or court submissions, please print this draft onto an authorized non-judicial e-Stamp paper and consult a Notary Public or legal advocate.
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
                ? 'bg-white text-amber-800 shadow-xs'
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
                ? 'bg-white text-amber-800 shadow-xs'
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
                <FileCheck2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                <span>Declaration Details</span>
              </h2>
              <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                Self-Attested Format
              </span>
            </div>

            {/* 1. Purpose Selector */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                1. Select Affidavit / Declaration Purpose *
              </label>
              <select
                value={data.purpose}
                onChange={(e) => handlePurposeChange(e.target.value as AffidavitPurpose)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 font-medium text-slate-800 transition-colors"
              >
                <option value="address_proof">🏠 Address Proof / Residence Self-Declaration</option>
                <option value="name_change">🔤 Name Change Declaration / Alias</option>
                <option value="income_declaration">💰 Income Self-Declaration (Scholarship/EWS)</option>
                <option value="gap_declaration">🎓 Gap in Education / Career Declaration</option>
                <option value="lost_document">📄 Loss of Original Document / Marksheet</option>
                <option value="custom">✍️ Custom General Affidavit</option>
              </select>
            </div>

            {/* 2. Declarant (Deponent) Particulars */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                2. Declarant / Deponent Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Declarant Full Name *
                  </label>
                  <input
                    type="text"
                    value={data.declarantName}
                    onChange={(e) => setData({ ...data, declarantName: e.target.value })}
                    placeholder="e.g. Suresh Kumar Reddy"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Relation &amp; Relative Name *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <select
                      value={data.relationType}
                      onChange={(e) =>
                        setData({ ...data, relationType: e.target.value as any })
                      }
                      className="w-full sm:w-24 px-2.5 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-700 uppercase font-semibold focus:outline-none focus:border-amber-600 shrink-0"
                    >
                      <option value="s/o">S/O</option>
                      <option value="d/o">D/O</option>
                      <option value="w/o">W/O</option>
                      <option value="c/o">C/O</option>
                    </select>
                    <input
                      type="text"
                      value={data.relativeName}
                      onChange={(e) => setData({ ...data, relativeName: e.target.value })}
                      placeholder="Father's / Husband's Name"
                      className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Age (in Years) *
                  </label>
                  <input
                    type="number"
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    placeholder="32"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Occupation / Profession
                  </label>
                  <input
                    type="text"
                    value={data.occupation}
                    onChange={(e) => setData({ ...data, occupation: e.target.value })}
                    placeholder="e.g. Software Professional / Student"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 3. Address Particulars */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                3. Address Particulars
              </h3>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Current Residential Address *
                </label>
                <textarea
                  rows={2}
                  value={data.currentAddress}
                  onChange={(e) => setData({ ...data, currentAddress: e.target.value })}
                  placeholder="Full door no, street, locality, city, state, pin code"
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                />
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="diff-perm-address"
                  checked={data.hasDifferentPermanentAddress}
                  onChange={(e) =>
                    setData({ ...data, hasDifferentPermanentAddress: e.target.checked })
                  }
                  className="rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                />
                <label htmlFor="diff-perm-address" className="text-xs text-slate-700 cursor-pointer">
                  Permanent address is different from current address
                </label>
              </div>

              {data.hasDifferentPermanentAddress && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Permanent Hometown Address *
                  </label>
                  <textarea
                    rows={2}
                    value={data.permanentAddress}
                    onChange={(e) => setData({ ...data, permanentAddress: e.target.value })}
                    placeholder="Permanent family residence address"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
              )}
            </div>

            {/* 4. Declaration Statements / Clauses */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  4. Declaration Clauses (Editable)
                </h3>
                <button
                  type="button"
                  onClick={addClause}
                  className="inline-flex items-center gap-1 text-xs text-amber-800 font-semibold hover:underline cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Clause</span>
                </button>
              </div>

              <div className="space-y-2">
                {data.statementClauses.map((clause, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-stretch sm:items-start gap-2 p-2 sm:p-2.5 bg-slate-50 border border-slate-200 rounded-lg"
                  >
                    <div className="flex items-center justify-between sm:justify-start gap-2 shrink-0">
                      <span className="font-bold text-xs text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded sm:bg-transparent sm:p-0 sm:mt-1.5 sm:w-4">
                        Clause {idx + 1}.
                      </span>
                      {data.statementClauses.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeClause(idx)}
                          className="sm:hidden p-1 text-rose-500 hover:text-rose-700 cursor-pointer"
                          title="Remove Clause"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <textarea
                      rows={2}
                      value={clause}
                      onChange={(e) => updateClause(idx, e.target.value)}
                      className="flex-1 min-w-0 text-xs sm:text-sm bg-white border border-slate-300 rounded-md p-2 focus:outline-none focus:border-amber-600 transition-colors"
                    />
                    {data.statementClauses.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeClause(idx)}
                        className="hidden sm:block p-1.5 text-rose-500 hover:text-rose-700 mt-1 cursor-pointer shrink-0"
                        title="Remove Clause"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Date & Place */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                5. Execution Location &amp; Date
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Place of Declaration *
                  </label>
                  <input
                    type="text"
                    value={data.place}
                    onChange={(e) => setData({ ...data, place: e.target.value })}
                    placeholder="e.g. Bengaluru / New Delhi"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Declaration *
                  </label>
                  <input
                    type="text"
                    value={data.declarationDate}
                    onChange={(e) => setData({ ...data, declarationDate: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:border-amber-600 transition-colors"
                  />
                </div>
              </div>

              {/* Stamp Paper Top Margin Toggle */}
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Stamp className="w-4 h-4 text-amber-700" />
                  <span className="text-slate-700 font-medium">
                    Reserve 3.5&quot; top space for non-judicial e-Stamp Paper
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={data.showStampMarginNotice}
                  onChange={(e) =>
                    setData({ ...data, showStampMarginNotice: e.target.checked })
                  }
                  className="rounded text-amber-600 focus:ring-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* 6. Deponent Signature Block (3-Option Tabbed) */}
            <div className="space-y-3 pt-3.5 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  6. Deponent Signature Option
                </label>
                <span className="text-[11px] text-slate-500">Upload / Type / Draw</span>
              </div>

              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-lg border border-slate-200">
                <button
                  type="button"
                  onClick={() => handleSignatureModeChange('upload')}
                  className={`py-1.5 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    data.signatureMode === 'upload'
                      ? 'bg-white text-amber-800 shadow-2xs font-semibold'
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
                      ? 'bg-white text-amber-800 shadow-2xs font-semibold'
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
                      ? 'bg-white text-amber-800 shadow-2xs font-semibold'
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
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-amber-500 rounded-lg p-3 sm:p-4 cursor-pointer bg-white">
                      <ImageIcon className="w-5 h-5 text-slate-400 mb-1" />
                      <span className="text-xs font-semibold text-slate-700">Upload deponent signature image</span>
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
                    placeholder="e.g. Suresh Kumar Reddy"
                    className="w-full px-3 py-1.5 text-xs sm:text-sm bg-white border border-slate-300 rounded focus:outline-none focus:border-amber-600"
                  />
                  <div className="flex items-center gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setData({ ...data, signatureTypedFont: 'Dancing Script' })}
                      className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                        data.signatureTypedFont === 'Dancing Script'
                          ? 'bg-amber-700 text-white font-medium'
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
                          ? 'bg-amber-700 text-white font-medium'
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
            </div>

            {/* Form-Bottom Action Controls: Always Visible on Mobile & Desktop */}
            <div id="affidavit-form-actions" className="pt-4 border-t border-slate-200 space-y-3">
              <button
                type="button"
                id="generate-download-affidavit-pdf-btn"
                onClick={() => setIsDownloadModalOpen(true)}
                disabled={isGeneratingPdf}
                className="w-full py-3 px-4 bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white font-semibold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer disabled:opacity-75"
              >
                <Download className="w-4 h-4" />
                <span>Download Affidavit (Choose PDF or JPG)</span>
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
                  <Eye className="w-3.5 h-3.5 text-amber-700" />
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
              <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate max-w-[180px] sm:max-w-none">
                {data.customTitle}
              </span>
              <span className="text-[11px] text-amber-800 font-medium">
                Standard Legal Format (A4 / Stamp-Ready)
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
                title="Print Affidavit"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                type="button"
                id="affidavit-preview-download-btn"
                onClick={() => setIsDownloadModalOpen(true)}
                disabled={isGeneratingPdf}
                className="py-2 px-3 sm:px-4 bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer disabled:opacity-75"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download (PDF / JPG)</span>
              </button>
            </div>
          </div>

          {/* Actual Printable Affidavit Document */}
          <div className="bg-slate-200/70 p-2 sm:p-4 rounded-2xl border border-slate-300/80 shadow-inner overflow-x-auto">
            <div
              id="affidavit-print-card"
              className="receipt-print-card bg-white rounded-xl border border-slate-300 p-4 sm:p-9 shadow-sm text-[#0F172A] font-serif leading-relaxed"
              style={{ minHeight: '750px' }}
            >
              {/* Optional e-Stamp Paper Header Space */}
              {data.showStampMarginNotice && (
                <div className="h-36 border-2 border-dashed border-slate-300 rounded mb-6 flex items-center justify-center text-xs text-slate-400 font-sans text-center p-4">
                  [ Non-Judicial e-Stamp Paper Print Area (Top 3.5 Inches Reserved) ]
                </div>
              )}

              {/* Title */}
              <div className="text-center pb-4 border-b border-slate-300">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wide font-sans">
                  {data.customTitle}
                </h2>
                <span className="text-[11px] text-slate-500 font-sans uppercase tracking-wider block mt-1">
                  BEFORE THE COMPETENT AUTHORITY / NOTARY PUBLIC
                </span>
              </div>

              {/* Deponent Opening Preamble */}
              <div className="mt-5 text-xs text-slate-800 text-justify space-y-3 leading-relaxed">
                <p>
                  I, <strong>{data.declarantName || '[Full Name]'}</strong>, {data.relationType.toUpperCase()} Sri{' '}
                  <strong>{data.relativeName || '[Father/Husband Name]'}</strong>, aged about{' '}
                  <strong>{data.age || '—'}</strong> years, by occupation{' '}
                  <strong>{data.occupation || '—'}</strong>, residing at{' '}
                  <strong>{data.currentAddress || '[Current Address]'}</strong>
                  {data.hasDifferentPermanentAddress && data.permanentAddress ? (
                    <span>
                      {' '}
                      and having permanent residence at{' '}
                      <strong>{data.permanentAddress}</strong>
                    </span>
                  ) : null}
                  , do hereby solemnly declare, swear, and state on oath as under:
                </p>

                {/* Numbered Declaration Statements */}
                <ol className="list-decimal list-outside pl-5 space-y-2 mt-4 text-xs">
                  {data.statementClauses.map((clause, idx) => (
                    <li key={idx} className="pl-1">
                      {clause}
                    </li>
                  ))}
                </ol>

                {/* Verification Statement */}
                <div className="mt-6 pt-4 border-t border-slate-300">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-1 font-sans">
                    VERIFICATION:
                  </h4>
                  <p className="text-xs text-justify">
                    I, the deponent above named, do hereby verify and declare that the contents of paragraphs 1 to{' '}
                    {data.statementClauses.length} of this declaration / affidavit are true and correct to the best of my personal knowledge, information, and belief. No part of it is false and nothing material has been concealed therefrom.
                  </p>
                </div>

                {/* Execution Details & Signature Block */}
                <div className="mt-8 pt-4 flex items-end justify-between text-xs font-sans">
                  <div className="space-y-1 text-slate-700 text-xs">
                    <p>
                      <strong>Place:</strong> {data.place || '—'}
                    </p>
                    <p>
                      <strong>Date:</strong> {data.declarationDate || '—'}
                    </p>
                  </div>

                  <div className="text-center space-y-1">
                    {/* Signature display */}
                    <div className="h-14 flex items-center justify-center min-w-[150px]">
                      {data.signatureMode === 'upload' && data.signatureUploadUrl && (
                        <img
                          src={data.signatureUploadUrl}
                          alt="Deponent Signature"
                          className="max-h-12 max-w-[150px] object-contain"
                        />
                      )}

                      {data.signatureMode === 'draw' && data.signatureDrawnDataUrl && (
                        <img
                          src={data.signatureDrawnDataUrl}
                          alt="Deponent Signature"
                          className="max-h-12 max-w-[150px] object-contain"
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
                          {data.signatureTypedText || data.declarantName}
                        </span>
                      )}

                      {data.signatureMode === 'none' && (
                        <div className="border-b border-slate-400 w-36 pb-1" />
                      )}
                    </div>
                    <div className="border-t border-slate-800 pt-1 font-bold text-slate-900">
                      DEPONENT / DECLARANT
                    </div>
                    <span className="text-[11px] text-slate-500 block">
                      ({data.declarantName})
                    </span>
                  </div>
                </div>

                {/* Notary Public Attestation Box */}
                <div className="mt-8 pt-4 border-t-2 border-slate-400/80 grid grid-cols-2 gap-4 text-[10px] text-slate-500 font-sans">
                  <div className="border border-slate-300 rounded p-2 text-center h-20 flex flex-col items-center justify-center">
                    <span>[ Space for Notary Seal / Stamp ]</span>
                  </div>
                  <div className="border border-slate-300 rounded p-2 text-center h-20 flex flex-col items-center justify-center">
                    <span>[ Notary Public Signature &amp; Registration No. ]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Tools Navigation Cards (Compact 2-col horizontal layout) */}
      <RelatedTools currentTool="affidavit" onNavigate={onNavigate} />

      {/* Pre-Footer Banner Ad */}
      <AdSlot type="pre-footer" />

      {/* 600+ Words Below-Tool Educational Guide & FAQs */}
      <AffidavitContent />

      {/* Download Format Modal (PDF / JPG / PNG / Print) */}
      <DownloadFormatModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
        documentTitle="Legal Affidavit Draft"
        defaultFileName={`Affidavit_${(data.declarantName || 'Declarant').replace(/\s+/g, '_')}_${(data.purpose || 'Document').replace(/\s+/g, '_')}`}
        targetElementId="affidavit-print-card"
      />
    </div>
  );
};
