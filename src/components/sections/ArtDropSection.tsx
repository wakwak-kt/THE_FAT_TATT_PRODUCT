"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import ArtDropLightbox from "@/components/ui/ArtDropLightbox";
import { useLanguage } from "@/i18n";
import type { ArtDrop } from "@/lib/types";

export default function ArtDropSection({
  artworks,
}: {
  artworks: ArtDrop[];
}) {
  const { t } = useLanguage();

  return (
    <section id="artdrop" className="artdrop-section">
      <div className="container">
        <ScrollFadeUp>
          {artworks.length > 0 ? (
            <ArtDropLightbox artworks={artworks} />
          ) : (
            <div className="artdrop-empty">
              <i className="ri-gallery-line"></i>
              <p>{t.artdrop.empty}</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
