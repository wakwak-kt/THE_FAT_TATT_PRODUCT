import type { Metadata } from "next";
import BookingSection from "@/components/sections/BookingSection";

export const metadata: Metadata = {
  title: "Booking & Contact | THE FAT TATT | ご予約・お問い合わせ",
  description:
    "Book your tattoo appointment at THE FAT TATT via Instagram DM. Custom orders, bring-your-own designs, and Art Drop available. | 施術予約はInstagramのDMから承っております。",
  alternates: {
    canonical: "https://thefattatt.com/booking",
  },
};

export default function BookingPage() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">ご予約</h1>
          <p className="page-hero-subtitle">
            Instagram DMからご予約ください
          </p>
        </div>
      </div>
      <BookingSection />
    </main>
  );
}
