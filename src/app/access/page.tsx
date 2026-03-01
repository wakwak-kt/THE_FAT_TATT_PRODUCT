import type { Metadata } from "next";
import AccessSection from "@/components/sections/AccessSection";

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
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">アクセス</h1>
          <p className="page-hero-subtitle">店舗情報とアクセス方法</p>
        </div>
      </div>
      <AccessSection />
    </main>
  );
}
