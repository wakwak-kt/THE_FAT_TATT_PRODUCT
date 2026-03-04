"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n";

export function ArtDropPageCTA() {
  const { t } = useLanguage();

  return (
    <div className="container">
      <div className="gallery-cta">
        <p className="gallery-cta-text">{t.artdrop.cta}</p>
        <Link href="/booking" className="gallery-cta-btn">
          <i className="ri-calendar-check-line"></i>
          {t.artdrop.ctaBtn}
        </Link>
      </div>
    </div>
  );
}
