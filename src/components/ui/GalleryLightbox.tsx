"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useLanguage } from "@/i18n";
import type { Gallery } from "@/lib/types";

interface GalleryLightboxProps {
  artworks: Gallery[];
}

export default function GalleryLightbox({ artworks }: GalleryLightboxProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { locale } = useLanguage();

  const close = useCallback(() => setSelectedIndex(null), []);

  const goPrev = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + artworks.length) % artworks.length : null
    );
  }, [artworks.length]);

  const goNext = useCallback(() => {
    setSelectedIndex((i) =>
      i !== null ? (i + 1) % artworks.length : null
    );
  }, [artworks.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, close, goPrev, goNext]);

  const selected = selectedIndex !== null ? artworks[selectedIndex] : null;

  // 言語に応じてタイトル/カテゴリを表示
  const getTitle = (artwork: Gallery) => {
    return locale === "en" && artwork.title_en ? artwork.title_en : artwork.title;
  };

  const getCategories = (artwork: Gallery) => {
    return locale === "en" && artwork.category_en ? artwork.category_en : artwork.category;
  };

  return (
    <>
      <div className="artdrop-grid">
        {artworks.map((artwork, index) => (
          <div
            key={artwork.id}
            className="artdrop-card artdrop-card--clickable"
            onClick={() => setSelectedIndex(index)}
          >
            <div className="artdrop-image-wrapper">
              <Image
                src={artwork.image.url}
                alt={getTitle(artwork)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="artdrop-image"
              />
              {getCategories(artwork) && getCategories(artwork)!.length > 0 && (
                <div className="artdrop-categories">
                  {getCategories(artwork)!.map((cat) => (
                    <span key={cat} className="artdrop-category">{cat}</span>
                  ))}
                </div>
              )}
              <div className="artdrop-zoom-icon">
                <i className="ri-zoom-in-line"></i>
              </div>
            </div>
            <div className="artdrop-info">
              <h3 className="artdrop-title">{getTitle(artwork)}</h3>
              {artwork.description && (
                <p className="artdrop-description">{artwork.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {selected &&
        createPortal(
          <div className="lightbox">
            <div className="lightbox-header">
              <div className="lightbox-header-info">
                <h3 className="lightbox-title">{getTitle(selected)}</h3>
              </div>
              <button className="lightbox-close" onClick={close} aria-label="閉じる">
                <i className="ri-close-line"></i>
                <span>閉じる</span>
              </button>
            </div>

            <div className="lightbox-body">
              <div className="lightbox-image-wrapper">
                <Image
                  src={selected.image.url}
                  alt={getTitle(selected)}
                  fill
                  sizes="100vw"
                  className="lightbox-image"
                  priority
                />
              </div>

              {artworks.length > 1 && (
                <>
                  <button className="lightbox-prev" onClick={goPrev} aria-label="前の作品">
                    <i className="ri-arrow-left-s-line"></i>
                  </button>
                  <button className="lightbox-next" onClick={goNext} aria-label="次の作品">
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </>
              )}
            </div>

            {selected.description && (
              <div className="lightbox-footer">
                <p className="lightbox-description">{selected.description}</p>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
