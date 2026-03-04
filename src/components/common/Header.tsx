"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/i18n";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/artdrop", label: t.nav.artdrop },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/news", label: t.nav.news },
    { href: "/access", label: t.nav.access },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isHome = pathname === "/";

  return (
    <header className={`header ${isScrolled || !isHome ? "header--scrolled" : ""}`}>
      <div className="header-container">
        <Link href="/" className="header-logo">
          <Image
            src="/images/the-fat-tatt.logo.png"
            alt="THE FAT TATT"
            width={202}
            height={80}
          />
        </Link>

        <nav className="header-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-nav-link ${pathname === link.href ? "header-nav-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="header-lang-toggle"
          onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
          aria-label={locale === "ja" ? "Switch to English" : "日本語に切り替え"}
        >
          {locale === "ja" ? "English" : "日本語"}
        </button>

        <Link href="/booking" className="header-cta">
          <i className="ri-calendar-check-line"></i>
          {t.nav.booking}
        </Link>

        <button
          className={`header-menu-btn ${isMenuOpen ? "header-menu-btn--open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t.openMenuAriaLabel}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`header-drawer ${isMenuOpen ? "header-drawer--open" : ""}`}
      >
        <nav className="header-drawer-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`header-drawer-link ${pathname === link.href ? "header-drawer-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <button
            className="header-lang-toggle"
            onClick={() => setLocale(locale === "ja" ? "en" : "ja")}
            aria-label={locale === "ja" ? "Switch to English" : "日本語に切り替え"}
          >
            {locale === "ja" ? "English" : "日本語"}
          </button>
          <Link href="/booking" className="header-drawer-cta">
            <i className="ri-calendar-check-line"></i>
            {t.nav.bookingDrawer}
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="header-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}
