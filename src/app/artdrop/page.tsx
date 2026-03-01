import type { Metadata } from "next";
import Link from "next/link";
import { getArtDropArtworks } from "@/lib/microcms";
import type { Artwork } from "@/lib/types";
import ArtDropSection from "@/components/sections/ArtDropSection";

export const metadata: Metadata = {
  title: "Art Drop - Flash Tattoo Designs | THE FAT TATT | アートドロップ",
  description:
    "Browse THE FAT TATT's Art Drop collection. Pre-designed flash tattoos at fixed prices by our artists. | アーティストが描き下ろしたデザインからお気に入りを見つけて施術いただけます。",
  alternates: {
    canonical: "https://thefattatt.com/artdrop",
  },
};

export const revalidate = 60;

export default async function ArtDropPage() {
  let artworks: Artwork[] = [];

  try {
    artworks = await getArtDropArtworks();
  } catch (e) {
    console.error("artdrop artworks error:", e);
  }

  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">アートドロップ</h1>
          <p className="page-hero-subtitle">
            アーティストが描き下ろしたデザインからお選びいただけます
          </p>
        </div>
      </div>
      <ArtDropSection artworks={artworks} />
      <div className="container">
        <div className="gallery-cta">
          <p className="gallery-cta-text">
            気になるデザインがあればお気軽にご予約ください
          </p>
          <Link href="/booking" className="gallery-cta-btn">
            <i className="ri-calendar-check-line"></i>
            ご予約・お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  );
}
