"use client";

import { useLanguage } from "@/i18n";
import type { Translations } from "@/i18n/types";

type PageKey = keyof Pick<
  Translations,
  | "gallery"
  | "artdrop"
  | "news"
  | "access"
  | "booking"
  | "pricing"
  | "process_page"
>;

export function PageHero({ pageKey }: { pageKey: PageKey }) {
  const { t } = useLanguage();
  const page = t[pageKey] as { pageTitle: string; pageSubtitle: string };

  return (
    <div className="page-hero">
      <div className="container">
        <h1 className="page-hero-title">{page.pageTitle}</h1>
        <p className="page-hero-subtitle">{page.pageSubtitle}</p>
      </div>
    </div>
  );
}
