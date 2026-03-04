"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n";

export default function Footer() {
  const { t } = useLanguage();

  const menuLinks = [
    { href: "/", label: t.nav.home },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/artdrop", label: t.nav.artdrop },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/news", label: t.nav.news },
  ];

  const contactLinks = [
    { href: "/booking", label: t.nav.booking },
    { href: "/access", label: t.nav.access },
  ];

  const taglineLines = t.footer.tagline.split("\n");

  return (
    <footer id="contact" className="footer">
      <div className="footer-bg">
        <div className="footer-bg-circle footer-bg-circle-1"></div>
        <div className="footer-bg-circle footer-bg-circle-2"></div>
      </div>

      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-tagline">
              {taglineLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < taglineLines.length - 1 && <br />}
                </span>
              ))}
            </p>
            <div className="footer-social">
              <a
                href="https://instagram.com/the_fat_tatt"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://note.com/k_sage299" className="social-link">
                <i className="ri-file-text-line"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>MENU</h3>
              <ul>
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>CONTACT</h3>
              <ul>
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://instagram.com/the_fat_tatt"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Instagram DM
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 THE FAT TATT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
