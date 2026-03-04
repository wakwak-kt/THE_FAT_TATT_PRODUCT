import type { Metadata } from "next";
import { getArtDropArtworks } from "@/lib/microcms";
import type { ArtDrop } from "@/lib/types";
import ArtDropSection from "@/components/sections/ArtDropSection";
import { PageHero } from "@/components/ui/PageHero";
import { ArtDropPageCTA } from "@/components/ui/ArtDropPageCTA";

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
  let artworks: ArtDrop[] = [];

  try {
    artworks = await getArtDropArtworks();
  } catch (e) {
    console.error("artdrop artworks error:", e);
  }

  return (
    <main className="page-content">
      <PageHero pageKey="artdrop" />
      <ArtDropSection artworks={artworks} />
      <ArtDropPageCTA />
    </main>
  );
}
