export interface LanguageOption {
  code: string;
  nativeName: string;
  name: string;
  flag?: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', nativeName: 'English', name: 'English' },
  { code: 'hi', nativeName: 'हिन्दी', name: 'Hindi' },
  { code: 'bn', nativeName: 'বাংলা', name: 'Bengali' },
  { code: 'te', nativeName: 'తెలుగు', name: 'Telugu' },
  { code: 'mr', nativeName: 'मराठी', name: 'Marathi' },
  { code: 'ta', nativeName: 'தமிழ்', name: 'Tamil' },
  { code: 'gu', nativeName: 'ગુજરાતી', name: 'Gujarati' },
  { code: 'kn', nativeName: 'ಕನ್ನಡ', name: 'Kannada' },
  { code: 'ml', nativeName: 'മലയാളം', name: 'Malayalam' },
  { code: 'pa', nativeName: 'ਪੰਜਾਬੀ', name: 'Punjabi' },
  { code: 'es', nativeName: 'Español', name: 'Spanish' },
  { code: 'fr', nativeName: 'Français', name: 'French' },
  { code: 'de', nativeName: 'Deutsch', name: 'German' },
  { code: 'ar', nativeName: 'العربية', name: 'Arabic' },
  { code: 'zh-CN', nativeName: '中文 (简体)', name: 'Chinese' },
  { code: 'ja', nativeName: '日本語', name: 'Japanese' },
  { code: 'pt', nativeName: 'Português', name: 'Portuguese' },
  { code: 'it', nativeName: 'Italiano', name: 'Italian' },
  { code: 'ru', nativeName: 'Русский', name: 'Russian' },
];

const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  // Spanish speaking
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
  VE: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', DO: 'es',
  HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es',
  UY: 'es', PR: 'es',

  // French speaking
  FR: 'fr', BE: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr',
  MG: 'fr', ML: 'fr', CD: 'fr', CG: 'fr',

  // German speaking
  DE: 'de', AT: 'de', CH: 'de', LI: 'de',

  // Arabic speaking
  SA: 'ar', AE: 'ar', EG: 'ar', QA: 'ar', KW: 'ar', OM: 'ar',
  BH: 'ar', JO: 'ar', IQ: 'ar', LB: 'ar', MA: 'ar', DZ: 'ar', TN: 'ar',

  // Portuguese speaking
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',

  // Italian speaking
  IT: 'it', SM: 'it',

  // Russian speaking
  RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru',

  // Japanese / Chinese
  JP: 'ja', CN: 'zh-CN', TW: 'zh-CN', HK: 'zh-CN',

  // India & English countries default to English
  IN: 'en', US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en',
  SG: 'en', ZA: 'en', IE: 'en',
};

const STORAGE_KEY = 'user_selected_language';

/**
 * Sets Google Translate cookie across all domain levels so the widget picks it up
 */
export function setGoogleTranslateCookie(langCode: string) {
  if (typeof document === 'undefined') return;

  const cookieVal = langCode === 'en' ? '' : `/en/${langCode}`;
  const host = window.location.hostname;
  const domainParts = host.split('.');
  const rootDomain = domainParts.length > 1 ? `.${domainParts.slice(-2).join('.')}` : host;

  if (langCode === 'en') {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${host};`;
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${rootDomain};`;
  } else {
    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${host};`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${rootDomain};`;
  }
}

/**
 * Reads the current language from localStorage or the googtrans cookie
 */
export function getCurrentLanguage(): string {
  if (typeof window === 'undefined') return 'en';
  
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
    return saved;
  }

  // Fallback check googtrans cookie
  const match = document.cookie.match(/googtrans=\/[a-zA-Z-]+\/([a-zA-Z-]+)/);
  if (match && match[1]) {
    const lang = match[1];
    if (SUPPORTED_LANGUAGES.some((l) => l.code === lang)) {
      return lang;
    }
  }

  return 'en';
}

function applyToGoogleCombo(langCode: string): boolean {
  const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
  if (!select) return false;

  let targetValue = '';

  if (langCode !== 'en') {
    const codeLower = langCode.toLowerCase();
    const baseCode = langCode.split('-')[0].toLowerCase();

    for (let i = 0; i < select.options.length; i++) {
      const optVal = select.options[i].value;
      const optValLower = optVal.toLowerCase();
      if (optValLower === codeLower || optValLower === baseCode || optValLower.startsWith(baseCode)) {
        targetValue = optVal;
        break;
      }
    }

    if (!targetValue) {
      targetValue = langCode;
    }
  } else {
    // Return to original language
    targetValue = '';
  }

  select.value = targetValue;
  select.dispatchEvent(new Event('change', { bubbles: true }));
  select.dispatchEvent(new Event('input', { bubbles: true }));
  return true;
}

/**
 * Programmatically triggers Google Translate widget to translate page
 */
export function triggerGoogleTranslate(langCode: string) {
  setGoogleTranslateCookie(langCode);
  localStorage.setItem(STORAGE_KEY, langCode);

  // Try immediate execution
  const success = applyToGoogleCombo(langCode);
  if (!success) {
    // Poll until Google Translate widget mounts
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      const done = applyToGoogleCombo(langCode);
      if (done || attempts > 60) {
        clearInterval(interval);
      }
    }, 80);
  }
}

/**
 * Detects visitor language via IP geolocation (ipapi.co) on first visit
 */
export async function detectVisitorLanguage(): Promise<string> {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (existing) {
    return existing;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const res = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const countryCode = data?.country_code?.toUpperCase();
      if (countryCode && COUNTRY_LANGUAGE_MAP[countryCode]) {
        const detectedLang = COUNTRY_LANGUAGE_MAP[countryCode];
        return detectedLang;
      }
    }
  } catch (err) {
    console.debug('IP geolocation lookup skipped or timed out:', err);
  }

  return 'en';
}
