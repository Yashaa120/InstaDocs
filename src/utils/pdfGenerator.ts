import html2canvas from 'html2canvas-pro';
import jsPDF from 'jspdf';

export type ExportFormat = 'pdf' | 'jpg' | 'png';

export interface GenerateExportOptions {
  containerElementId: string;
  fileName?: string;
  format?: ExportFormat;
  onProgress?: (progress: number, statusText: string) => void;
}

export type GeneratePdfOptions = GenerateExportOptions;

// Shared 2D canvas context for fast, native CSS color normalization
let colorCanvasCtx: CanvasRenderingContext2D | null = null;

function getColorCanvasCtx(): CanvasRenderingContext2D | null {
  if (!colorCanvasCtx && typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    colorCanvasCtx = canvas.getContext('2d', { willReadFrequently: true });
  }
  return colorCanvasCtx;
}

/**
 * Trigger bulletproof file download across mobile browsers, desktop, and iframe environments.
 */
export function triggerBlobDownload(blob: Blob, filename: string): boolean {
  try {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.position = 'fixed';
    a.style.left = '-9999px';
    a.style.top = '-9999px';
    a.style.opacity = '0';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);

    // Try native click
    a.click();

    setTimeout(() => {
      try {
        if (a.parentNode) {
          document.body.removeChild(a);
        }
      } catch {
        // Safe cleanup
      }
      window.URL.revokeObjectURL(url);
    }, 4000);

    return true;
  } catch (err) {
    console.error('triggerBlobDownload error:', err);
    return false;
  }
}

/**
 * Helper to convert Data URL to Blob reliably
 */
export function dataURLToBlob(dataURL: string): Blob {
  const parts = dataURL.split(';base64,');
  const contentType = parts[0].split(':')[1] || 'image/jpeg';
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

/**
 * Converts ANY valid CSS color (oklch, oklab, lab, lch, color(srgb...), etc.) into standard hex (#rrggbb)
 * or rgba(...) that html2canvas can parse without throwing errors.
 */
export function sanitizeCssColor(colorStr: string): string {
  if (!colorStr) return colorStr;
  const trimmed = colorStr.trim();
  if (
    trimmed === '' ||
    trimmed === 'transparent' ||
    trimmed === 'inherit' ||
    trimmed === 'initial' ||
    trimmed === 'unset' ||
    trimmed === 'currentcolor' ||
    trimmed === 'none'
  ) {
    return trimmed;
  }

  // If already standard hex, rgb, or hsl, return as-is
  if (
    !trimmed.includes('oklch') &&
    !trimmed.includes('oklab') &&
    !trimmed.includes('lab') &&
    !trimmed.includes('lch') &&
    !trimmed.includes('color(') &&
    !trimmed.includes('color-mix')
  ) {
    return trimmed;
  }

  const ctx = getColorCanvasCtx();
  if (!ctx) return '#0f172a';

  try {
    ctx.fillStyle = '#00000000';
    ctx.fillStyle = trimmed;
    const computed = ctx.fillStyle;
    return computed || trimmed;
  } catch {
    return '#0f172a';
  }
}

/**
 * Replaces modern color functions within complex CSS values like `box-shadow`, `border`, `background`, or CSS stylesheet text.
 */
export function sanitizeComplexCssValue(value: string): string {
  if (!value) return value;
  if (
    !value.includes('oklch') &&
    !value.includes('oklab') &&
    !value.includes('lab') &&
    !value.includes('lch') &&
    !value.includes('color(') &&
    !value.includes('color-mix')
  ) {
    return value;
  }

  // Regex to match modern color functions: oklch(...), oklab(...), lab(...), lch(...), color(...), color-mix(...)
  return value.replace(
    /(?:oklch|oklab|lab|lch|color|color-mix)\([^\)]+(?:\([^\)]*\)[^\)]*)*\)/gi,
    (match) => sanitizeCssColor(match)
  );
}

const COLOR_CSS_PROPERTIES = [
  'color',
  'background-color',
  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',
  'outline-color',
  'text-decoration-color',
  'fill',
  'stroke',
  'box-shadow',
  'text-shadow',
  'accent-color',
  'caret-color',
] as const;

/**
 * Recursively scans and sanitizes all modern color functions across an HTML element and its subtree.
 */
export function sanitizeElementStylesForHtml2Canvas(root: HTMLElement, doc: Document = document): void {
  if (!root) return;
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>('*'))];
  const win = doc.defaultView || window;

  for (const el of elements) {
    try {
      const computed = win.getComputedStyle(el);
      if (!computed) continue;

      for (const prop of COLOR_CSS_PROPERTIES) {
        const val = computed.getPropertyValue(prop);
        if (
          val &&
          (val.includes('oklch') ||
            val.includes('oklab') ||
            val.includes('lab') ||
            val.includes('lch') ||
            val.includes('color(') ||
            val.includes('color-mix'))
        ) {
          const sanitized = sanitizeComplexCssValue(val);
          el.style.setProperty(prop, sanitized, 'important');
        }
      }

      // Also sanitize any inline style attribute if present
      const inlineStyle = el.getAttribute('style');
      if (
        inlineStyle &&
        (inlineStyle.includes('oklch') ||
          inlineStyle.includes('oklab') ||
          inlineStyle.includes('lab') ||
          inlineStyle.includes('lch') ||
          inlineStyle.includes('color('))
      ) {
        el.setAttribute('style', sanitizeComplexCssValue(inlineStyle));
      }
    } catch {
      // Continue safely if a property cannot be accessed
    }
  }
}

/**
 * Ensures any external web fonts (like Sacramento / Dancing Script signatures) are fully ready.
 */
async function waitForFonts(): Promise<void> {
  try {
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch (e) {
    console.warn('Font loading check skipped:', e);
  }
}

/**
 * Common DOM staging helper that creates a dedicated on-screen staging container
 */
function createStagingArea(sourceElement: HTMLElement): {
  stagingContainer: HTMLElement;
  elementsToRender: HTMLElement[];
} {
  const stagingContainer = document.createElement('div');
  stagingContainer.id = 'document-staging-export-surface';
  stagingContainer.style.position = 'fixed';
  stagingContainer.style.top = '0';
  stagingContainer.style.left = '0';
  stagingContainer.style.width = '794px'; // Standard A4 pixel width @ 96 DPI
  stagingContainer.style.zIndex = '99999';
  stagingContainer.style.backgroundColor = '#ffffff';
  stagingContainer.style.padding = '16px';
  stagingContainer.style.boxSizing = 'border-box';
  stagingContainer.style.pointerEvents = 'none';
  stagingContainer.style.opacity = '1';
  stagingContainer.style.visibility = 'visible';

  // Clone content from source and ensure it is visibly rendered inside stagingContainer
  const clonedContent = sourceElement.cloneNode(true) as HTMLElement;
  clonedContent.style.display = 'block';
  clonedContent.style.visibility = 'visible';
  clonedContent.style.width = '100%';
  clonedContent.style.margin = '0 auto';
  clonedContent.style.backgroundColor = '#ffffff';
  clonedContent.classList.remove('hidden');

  stagingContainer.appendChild(clonedContent);
  document.body.appendChild(stagingContainer);

  // Apply color sanitization to staging DOM before html2canvas runs
  sanitizeElementStylesForHtml2Canvas(stagingContainer);

  // Find all receipt/document cards inside the staging area
  const cardElements = stagingContainer.querySelectorAll<HTMLElement>('.receipt-print-card');
  const elementsToRender: HTMLElement[] =
    cardElements.length > 0 ? Array.from(cardElements) : [clonedContent];

  return { stagingContainer, elementsToRender };
}

/**
 * Generates and downloads Document (Rent Receipts / Payslips / Affidavits) as PDF, JPG, or PNG.
 * 100% Client-Side, Zero API Key required.
 */
export async function downloadDocument({
  containerElementId,
  fileName = 'Document',
  format = 'pdf',
  onProgress,
}: GenerateExportOptions): Promise<boolean> {
  let stagingContainer: HTMLElement | null = null;

  try {
    onProgress?.(10, `Preparing document for ${format.toUpperCase()} export...`);
    await waitForFonts();

    // 1. Locate the source container or active preview
    let sourceElement = document.getElementById(containerElementId);
    if (!sourceElement) {
      sourceElement =
        document.getElementById('single-receipt-preview-display') ||
        document.getElementById('salary-slip-print-card') ||
        document.getElementById('affidavit-print-card') ||
        (document.querySelector('.receipt-print-card') as HTMLElement);
    }

    if (!sourceElement) {
      throw new Error(`Document container #${containerElementId} not found in DOM.`);
    }

    onProgress?.(25, 'Rendering high-resolution canvas...');

    // 2. Stage the element
    const staged = createStagingArea(sourceElement);
    stagingContainer = staged.stagingContainer;
    const elementsToRender = staged.elementsToRender;

    // Allow browser 1 frame tick to layout the DOM elements and SVGs
    await new Promise((resolve) => setTimeout(resolve, 150));

    const totalPages = elementsToRender.length;
    const cleanBaseName = fileName.replace(/\.(pdf|jpg|jpeg|png)$/i, '');

    // === BRANCH A: IMAGE EXPORT (JPG / PNG) ===
    if (format === 'jpg' || format === 'png') {
      onProgress?.(45, `Capturing ${format.toUpperCase()} image (${totalPages} page)...`);

      for (let i = 0; i < elementsToRender.length; i++) {
        const el = elementsToRender[i];
        const pageNum = totalPages > 1 ? `_Page_${i + 1}` : '';
        const imgFileName = `${cleanBaseName}${pageNum}.${format === 'png' ? 'png' : 'jpg'}`;

        const canvas = await html2canvas(el, {
          scale: 2.5, // Crisp 240 DPI equivalent
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          logging: false,
          scrollX: 0,
          scrollY: 0,
          onclone: (clonedDoc, clonedEl) => {
            try {
              const styleTags = clonedDoc.querySelectorAll('style');
              styleTags.forEach((styleEl) => {
                if (styleEl.textContent) {
                  styleEl.textContent = sanitizeComplexCssValue(styleEl.textContent);
                }
              });
            } catch {
              // Ignore
            }
            sanitizeElementStylesForHtml2Canvas(clonedEl, clonedDoc);
          },
        });

        onProgress?.(80, `Saving image ${imgFileName}...`);

        const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
        const dataUrl = canvas.toDataURL(mimeType, 0.95);
        const blob = dataURLToBlob(dataUrl);
        triggerBlobDownload(blob, imgFileName);
      }

      onProgress?.(100, 'Image download complete!');
      return true;
    }

    // === BRANCH B: PDF EXPORT (A4 Multi-page / Single-page) ===
    onProgress?.(40, `Generating PDF (${totalPages} ${totalPages === 1 ? 'page' : 'pages'})...`);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true,
    });

    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const margin = 10;
    const printableWidth = pageWidth - margin * 2;
    const printableHeight = pageHeight - margin * 2;

    for (let i = 0; i < elementsToRender.length; i++) {
      const el = elementsToRender[i];
      const currentPercent = Math.round(40 + ((i + 1) / totalPages) * 50);
      onProgress?.(currentPercent, `Rendering PDF page ${i + 1} of ${totalPages}...`);

      const canvas = await html2canvas(el, {
        scale: 2, // High resolution (192 DPI equivalent)
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        scrollX: 0,
        scrollY: 0,
        onclone: (clonedDoc, clonedEl) => {
          try {
            const styleTags = clonedDoc.querySelectorAll('style');
            styleTags.forEach((styleEl) => {
              if (styleEl.textContent) {
                styleEl.textContent = sanitizeComplexCssValue(styleEl.textContent);
              }
            });
          } catch {
            // Ignore
          }
          sanitizeElementStylesForHtml2Canvas(clonedEl, clonedDoc);
        },
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      if (i > 0) {
        pdf.addPage('a4', 'portrait');
      }

      const imgWidthPx = canvas.width;
      const imgHeightPx = canvas.height;
      const imgRatio = imgHeightPx / imgWidthPx;

      let renderWidth = printableWidth;
      let renderHeight = printableWidth * imgRatio;

      // If the rendered height exceeds printable page height, scale down proportionally
      if (renderHeight > printableHeight) {
        renderHeight = printableHeight;
        renderWidth = printableHeight / imgRatio;
      }

      // Center vertically if fits comfortably
      const yPosition =
        renderHeight < printableHeight
          ? margin + Math.max(0, (printableHeight - renderHeight) / 4)
          : margin;

      const xPosition = margin + Math.max(0, (printableWidth - renderWidth) / 2);

      pdf.addImage(imgData, 'JPEG', xPosition, yPosition, renderWidth, renderHeight, undefined, 'FAST');
    }

    onProgress?.(95, 'Preparing download file...');
    const pdfFileName = `${cleanBaseName}.pdf`;

    // Download via Blob for max reliability across iframe & mobile
    try {
      const pdfBlob = pdf.output('blob');
      triggerBlobDownload(pdfBlob, pdfFileName);
    } catch {
      // Fallback to jsPDF native save
      pdf.save(pdfFileName);
    }

    onProgress?.(100, 'PDF downloaded successfully!');
    return true;
  } catch (error) {
    console.error('Error generating document:', error);
    onProgress?.(100, 'Export encountered an error. Opening print preview...');
    // Print fallback if device canvas blocks
    window.print();
    return false;
  } finally {
    // Always clean up staging DOM element
    if (stagingContainer && stagingContainer.parentNode) {
      stagingContainer.parentNode.removeChild(stagingContainer);
    }
  }
}

/**
 * Backward-compatible alias for existing calls
 */
export const downloadReceiptsPdf = downloadDocument;

