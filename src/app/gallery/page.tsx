import type { Metadata } from "next";
import Link from "next/link";
import { getGalleryArtworks } from "@/lib/microcms";
import type { Gallery } from "@/lib/types";
import GallerySection from "@/components/sections/GallerySection";

export const metadata: Metadata = {
  title: "Gallery | THE FAT TATT - Tattoo Portfolio | ギャラリー",
  description:
    "Browse THE FAT TATT's tattoo portfolio and gallery. View our past works and custom designs. | これまでの施術作品やデザインをご覧いただけます。",
  alternates: {
    canonical: "https://thefattatt.com/gallery",
  },
};

export const revalidate = 60;

export default async function GalleryPage() {
  let artworks: Gallery[] = [];

  try {
    artworks = await getGalleryArtworks();
  } catch (e) {
    console.error("gallery artworks error:", e);
  }

  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">ギャラリー</h1>
          <p className="page-hero-subtitle">これまでの作品をご覧ください</p>
        </div>
      </div>
      <GallerySection artworks={artworks} />
    </main>
  );
}
