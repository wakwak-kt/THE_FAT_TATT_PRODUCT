import type { Metadata } from "next";
import AccessSection from "@/components/sections/AccessSection";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Access & Location | THE FAT TATT - Onomichi, Hiroshima | アクセス",
  description:
    "Find THE FAT TATT tattoo studio in Onomichi, Hiroshima, Japan. By appointment only. | 広島県尾道市三軒屋家町3-26三軒屋アパートメント東館2F。完全予約制。",
  alternates: {
    canonical: "https://thefattatt.com/access",
  },
};

export default function AccessPage() {
  return (
    <main className="page-content">
      <PageHero pageKey="access" />
      <AccessSection />
    </main>
  );
}
