"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import { useLanguage } from "@/i18n";
import type { Gallery } from "@/lib/types";

export default function GallerySection({
  artworks,
}: {
  artworks: Gallery[];
}) {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="artdrop-section">
      <div className="container">
        <ScrollFadeUp>
          {artworks.length > 0 ? (
            <GalleryLightbox artworks={artworks} />
          ) : (
            <div className="artdrop-empty">
              <i className="ri-gallery-line"></i>
              <p>{t.gallery.empty}</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
