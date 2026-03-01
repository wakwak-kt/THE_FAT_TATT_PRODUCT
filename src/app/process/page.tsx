import type { Metadata } from "next";
import ProcessSection from "@/components/sections/ProcessSection";

export const metadata: Metadata = {
  title: "Tattoo Process | THE FAT TATT - How It Works | 施術の流れ",
  description:
    "Learn about THE FAT TATT's tattoo process. Three design options: custom order, bring-your-own, or Art Drop. Perfect for first-timers. | デザインパターンと施術の流れをご紹介。初めての方でも安心。",
  alternates: {
    canonical: "https://thefattatt.com/process",
  },
};

export default function ProcessPage() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">施術の流れ</h1>
          <p className="page-hero-subtitle">
            デザインパターンと施術プロセスのご案内
          </p>
        </div>
      </div>
      <ProcessSection />
    </main>
  );
}
