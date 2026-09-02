import React, { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentLanguage, setGoogleTranslateCookie, detectVisitorLanguage } from '../utils/languageUtils';
import { TranslationKey, getTranslation } from '../utils/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => getCurrentLanguage());

  const setLanguage = (newLang: string) => {
    setLanguageState(newLang);
    localStorage.setItem('user_selected_language', newLang);
    setGoogleTranslateCookie(newLang);

    // Always keep standard LTR (Left-to-Right) UI layout so cards, grids, and previews don't mirror or flip
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
      document.documentElement.dir = 'ltr';
      document.body.dir = 'ltr';
    }

    // Also trigger google translate combo if present
    const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
    if (select) {
      select.value = newLang === 'en' ? '' : newLang;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  useEffect(() => {
    // Initial sync
    const initialLang = getCurrentLanguage();
    if (initialLang) {
      setLanguage(initialLang);
    } else {
      detectVisitorLanguage().then((detected) => {
        if (detected && detected !== 'en') {
          setLanguage(detected);
        }
      });
    }
  }, []);

  const t = (key: TranslationKey): string => {
    return getTranslation(key, language);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
