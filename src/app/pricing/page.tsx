import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PricingPageContent } from "@/components/ui/PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing | THE FAT TATT - Tattoo Rates | 料金",
  description:
    "THE FAT TATT tattoo pricing guide. From small one-point tattoos to large custom designs, view our size-based pricing. | ワンポイントから大型デザインまでサイズ別の参考価格をご案内します。",
  alternates: {
    canonical: "https://thefattatt.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <main className="page-content">
      <PageHero pageKey="pricing" />
      <PricingPageContent />
    </main>
  );
}
