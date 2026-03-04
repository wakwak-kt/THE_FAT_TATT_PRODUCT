import type { Metadata } from "next";
import { getGalleryArtworks } from "@/lib/microcms";
import type { Gallery } from "@/lib/types";
import GallerySection from "@/components/sections/GallerySection";
import { PageHero } from "@/components/ui/PageHero";

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
      <PageHero pageKey="gallery" />
      <GallerySection artworks={artworks} />
    </main>
  );
}
