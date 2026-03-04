"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n";

export function LangSync() {
  const { locale } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
