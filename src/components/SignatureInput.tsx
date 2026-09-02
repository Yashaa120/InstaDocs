import React, { useRef, useEffect } from 'react';
import { RentReceiptData, SignatureMode } from '../types';
import SignaturePad from 'signature_pad';
import { Upload, Type, PenTool, Trash2, Info, Check, Image as ImageIcon } from 'lucide-react';

interface SignatureInputProps {
  data: RentReceiptData;
  setData: React.Dispatch<React.SetStateAction<RentReceiptData>>;
}

export const SignatureInput: React.FC<SignatureInputProps> = ({ data, setData }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const signaturePadRef = useRef<SignaturePad | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize SignaturePad when 'draw' tab is active
  useEffect(() => {
    if (data.signatureMode === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      // Handle high-DPI screens
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

      // If existing drawn signature exists, load it
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

  const handleTabChange = (mode: SignatureMode) => {
    setData((prev) => {
      // If switching to type mode and typedText is empty, default to landlord name
      let typedText = prev.signatureTypedText;
      if (mode === 'type' && !typedText) {
        typedText = prev.landlordName || 'Landlord Signature';
      }
      return {
        ...prev,
        signatureMode: mode,
        signatureTypedText: typedText,
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, JPEG).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setData((prev) => ({
        ...prev,
        signatureUploadUrl: result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleClearDraw = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
    setData((prev) => ({
      ...prev,
      signatureDrawnDataUrl: undefined,
    }));
  };

  const handleRemovePhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setData((prev) => ({
      ...prev,
      signatureUploadUrl: undefined,
    }));
  };

  return (
    <div className="space-y-3 pt-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
          <span>Landlord Signature Option</span>
        </label>
        <span className="text-[11px] text-slate-500 font-medium">
          Choose 1 of 3 ways
        </span>
      </div>

      {/* 3 Tabs Header */}
      <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-lg border border-slate-200/80">
        <button
          type="button"
          id="sig-tab-upload"
          onClick={() => handleTabChange('upload')}
          className={`py-2 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            data.signatureMode === 'upload'
              ? 'bg-white text-blue-600 shadow-2xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Upload className="w-3.5 h-3.5" />
          <span className="truncate">Upload Photo</span>
        </button>

        <button
          type="button"
          id="sig-tab-type"
          onClick={() => handleTabChange('type')}
          className={`py-2 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            data.signatureMode === 'type'
              ? 'bg-white text-blue-600 shadow-2xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Type className="w-3.5 h-3.5" />
          <span className="truncate">Type Signature</span>
        </button>

        <button
          type="button"
          id="sig-tab-draw"
          onClick={() => handleTabChange('draw')}
          className={`py-2 px-2 text-xs font-medium rounded-md flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            data.signatureMode === 'draw'
              ? 'bg-white text-blue-600 shadow-2xs font-semibold'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <PenTool className="w-3.5 h-3.5" />
          <span className="truncate">Draw Signature</span>
        </button>
      </div>

      {/* Tab 1 Content: Upload Photo */}
      {data.signatureMode === 'upload' && (
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-3 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Upload signature image (PNG / JPG / JPEG)</span>
            {data.signatureUploadUrl && (
              <button
                type="button"
                onClick={handleRemovePhoto}
                className="text-rose-600 hover:text-rose-700 flex items-center gap-1 text-[11px] font-medium"
              >
                <Trash2 className="w-3 h-3" />
                Remove
              </button>
            )}
          </div>

          {!data.signatureUploadUrl ? (
            <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 hover:border-blue-500 hover:bg-blue-50/30 rounded-lg p-5 cursor-pointer transition-colors bg-white">
              <ImageIcon className="w-8 h-8 text-slate-400 mb-1.5" />
              <span className="text-xs font-semibold text-slate-700">Click to upload signature photo</span>
              <span className="text-[11px] text-slate-400 mt-0.5">Transparent or white background recommended</span>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          ) : (
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-md border border-slate-200">
              <div className="w-28 h-12 bg-slate-50 rounded border border-slate-200 flex items-center justify-center overflow-hidden p-1">
                <img
                  src={data.signatureUploadUrl}
                  alt="Uploaded Landlord Signature"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="flex-1 text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Image attached
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5">This signature will appear on your generated receipts.</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2 Content: Type Signature */}
      {data.signatureMode === 'type' && (
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-3 animate-fade-in">
          <div>
            <label className="text-xs text-slate-700 font-medium block mb-1">
              Type Landlord Name / Initials:
            </label>
            <input
              type="text"
              id="typed-signature-input"
              value={data.signatureTypedText ?? (data.landlordName || '')}
              onChange={(e) =>
                setData((prev) => ({ ...prev, signatureTypedText: e.target.value }))
              }
              placeholder="e.g. Rajesh Kumar"
              className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-md focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>

          {/* Font Selector */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-600">Handwriting Style:</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setData((prev) => ({ ...prev, signatureTypedFont: 'Dancing Script' }))
                }
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  (data.signatureTypedFont || 'Dancing Script') === 'Dancing Script'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                Dancing Script
              </button>
              <button
                type="button"
                onClick={() =>
                  setData((prev) => ({ ...prev, signatureTypedFont: 'Sacramento' }))
                }
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  data.signatureTypedFont === 'Sacramento'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                Sacramento
              </button>
            </div>
          </div>

          {/* Live Cursive Preview */}
          <div className="bg-white border border-slate-200 rounded-md p-3 text-center">
            <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
              Signature Preview
            </span>
            <div
              className={`text-2xl text-slate-900 py-1 select-none ${
                data.signatureTypedFont === 'Sacramento'
                  ? 'font-["Sacramento"]'
                  : 'font-["Dancing_Script"]'
              }`}
              style={{
                fontFamily:
                  data.signatureTypedFont === 'Sacramento'
                    ? "'Sacramento', cursive"
                    : "'Dancing Script', cursive",
              }}
            >
              {data.signatureTypedText?.trim() || data.landlordName?.trim() || 'Landlord Signature'}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3 Content: Draw Signature */}
      {data.signatureMode === 'draw' && (
        <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 animate-fade-in">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span>Draw signature with mouse or finger/stylus</span>
            <button
              type="button"
              id="clear-canvas-btn"
              onClick={handleClearDraw}
              className="text-slate-600 hover:text-rose-600 flex items-center gap-1 text-[11px] font-medium cursor-pointer"
            >
              <Trash2 className="w-3 h-3" />
              Clear Pad
            </button>
          </div>

          <div className="bg-white border border-slate-300 rounded-md overflow-hidden shadow-inner relative">
            <canvas
              ref={canvasRef}
              className="w-full h-28 touch-none cursor-crosshair bg-white"
            />
            {!data.signatureDrawnDataUrl && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center text-xs text-slate-300">
                Sign here...
              </div>
            )}
          </div>
          <p className="text-[10px] text-slate-400">
            Touch or drag inside the box to sign. Clear anytime to restart.
          </p>
        </div>
      )}

      {/* Requirement 4: Legal Validity Hint */}
      <div className="p-3 bg-amber-50/90 border border-amber-200/80 rounded-md flex items-start gap-2 text-xs text-amber-900 leading-relaxed shadow-2xs">
        <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
        <p>
          <strong>Legal Validity Notice:</strong> For maximum validity, print this receipt and get it physically signed by the landlord along with a revenue stamp (if cash rent exceeds ₹5,000 for the period). Digital signatures are for convenience and record-keeping purposes only.
        </p>
      </div>
    </div>
  );
};
