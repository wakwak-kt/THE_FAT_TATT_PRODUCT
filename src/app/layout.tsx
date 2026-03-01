import type { Metadata } from "next";
import { Poppins, Outfit, Noto_Sans_JP } from "next/font/google";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "THE FAT TATT - Tattoo Studio in Onomichi, Hiroshima | タトゥースタジオ 広島県尾道市",
  description:
    "THE FAT TATT is a tattoo studio based in Onomichi, Hiroshima, Japan. Specializing in newschool style tattoos by appointment only. | 広島県尾道市のタトゥースタジオ。完全予約制で一生残るアートを創り上げます。",
  keywords:
    "tattoo studio,Onomichi,Hiroshima,Japan,newschool tattoo,custom tattoo,color tattoo,タトゥースタジオ,尾道,広島,カスタムデザイン,カラー,細密タトゥー,THE FAT TATT,tattoo artist Japan",
  openGraph: {
    title: "THE FAT TATT - Tattoo Studio | Onomichi, Hiroshima",
    description:
      "Unique art on your skin. A newschool style tattoo studio in Onomichi, Hiroshima, Japan. | 唯一無二のアートを、あなたの肌に。",
    type: "website",
    url: "https://thefattatt.com/",
    locale: "ja_JP",
    alternateLocale: "en_US",
    siteName: "THE FAT TATT",
    images: [
      {
        url: "https://thefattatt.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "THE FAT TATT - Tattoo Studio in Onomichi, Hiroshima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "THE FAT TATT - Tattoo Studio | Onomichi, Hiroshima",
    description:
      "Unique art on your skin. Newschool tattoo studio in Onomichi, Hiroshima, Japan.",
  },
  alternates: {
    canonical: "https://thefattatt.com/",
    languages: {
      "ja": "https://thefattatt.com/",
      "en": "https://thefattatt.com/",
      "x-default": "https://thefattatt.com/",
    },
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${poppins.variable} ${outfit.variable} ${notoSansJP.variable}`}
    >
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "THE FAT TATT",
              description:
                "A newschool style tattoo studio in Onomichi, Hiroshima, Japan. By appointment only.",
              url: "https://thefattatt.com",
              image: "https://thefattatt.com/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "三軒屋家町3-26 三軒屋アパートメント東館2F",
                addressLocality: "尾道市",
                addressRegion: "広島県",
                addressCountry: "JP",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 34.4109,
                longitude: 133.2059,
              },
              priceRange: "¥10,000〜",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                description: "By appointment only / 完全予約制",
              },
              sameAs: ["https://www.instagram.com/the_fat_tatt"],
              knowsLanguage: ["ja", "en"],
              areaServed: {
                "@type": "Place",
                name: "Onomichi, Hiroshima, Japan",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
