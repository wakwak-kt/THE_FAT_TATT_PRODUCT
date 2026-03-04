"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n";

export default function MobileBookingCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (pathname !== "/") return;

    const hero = document.getElementById("hero");
    const footer = document.getElementById("contact");
    if (!hero || !footer) return;

    const state = { heroFullyVisible: true, footerVisible: false };

    const update = () => {
      setVisible(!state.heroFullyVisible && !state.footerVisible);
    };

    // Hero: threshold 1 → heroが100%見えている間はボタン非表示、少しでもスクロールしたら表示
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        state.heroFullyVisible = entry.isIntersecting;
        update();
      },
      { threshold: 1 }
    );

    // Footer: threshold 0 → Footerが少しでも見えたらボタン非表示
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        state.footerVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: "0px 0px 80px 0px" }
    );

    heroObserver.observe(hero);
    footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <a
      href="https://instagram.com/the_fat_tatt"
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`mobile-booking-cta ${visible ? "mobile-booking-cta--visible" : ""}`}
    >
      <i className="ri-instagram-line"></i>
      <span>{t.booking.mobileCta}</span>
    </a>
  );
}
