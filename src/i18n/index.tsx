"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import type { Locale, Translations } from "./types";
import { ja } from "./locales/ja";
import { en } from "./locales/en";

const STORAGE_KEY = "fattatt-lang";
const translations = { ja, en } as Record<Locale, Translations>;

type LanguageContextType = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "ja",
  t: ja,
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ja");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "ja") {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
