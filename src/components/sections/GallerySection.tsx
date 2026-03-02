import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import type { Gallery } from "@/lib/types";

export default function GallerySection({
  artworks,
}: {
  artworks: Gallery[];
}) {
  return (
    <section id="gallery" className="artdrop-section">
      <div className="container">

        <ScrollFadeUp>
          {artworks.length > 0 ? (
            <GalleryLightbox artworks={artworks} />
          ) : (
            <div className="artdrop-empty">
              <i className="ri-gallery-line"></i>
              <p>現在公開中の作品はありません</p>
            </div>
          )}
        </ScrollFadeUp>
      </div>
    </section>
  );
}
