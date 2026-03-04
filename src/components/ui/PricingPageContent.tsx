"use client";

import Link from "next/link";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

const PRICE_ICONS = ["ri-drop-line", "ri-rectangle-line", "ri-image-line", "ri-fullscreen-line"];

export function PricingPageContent() {
  const { t } = useLanguage();

  return (
    <section className="pricing-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="pricing-grid">
            {t.pricing.priceItems.map((item, index) => (
              <div key={item.label} className="pricing-card">
                <div className="pricing-card-icon">
                  <i className={PRICE_ICONS[index]}></i>
                </div>
                <h3 className="pricing-card-label">{item.label}</h3>
                <p className="pricing-card-size">{item.size}</p>
                <p className="pricing-card-price">{item.price}</p>
              </div>
            ))}
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="pricing-artdrop">
            <div className="pricing-artdrop-icon">
              <i className="ri-gallery-line"></i>
            </div>
            <div className="pricing-artdrop-info">
              <h3 className="pricing-artdrop-title">Art Drop</h3>
              <p className="pricing-artdrop-description">
                {t.pricing.artDropDescription}
              </p>
            </div>
            <Link href="/artdrop" className="pricing-artdrop-link">
              {t.pricing.artDropLink}
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="pricing-notice">
            <i className="ri-information-line"></i>
            <div>
              <h4>{t.pricing.noticeHeading}</h4>
              <p>{t.pricing.noticeText}</p>
            </div>
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="gallery-cta">
            <p className="gallery-cta-text">{t.pricing.ctaText}</p>
            <Link href="/booking" className="gallery-cta-btn">
              <i className="ri-calendar-check-line"></i>
              {t.pricing.ctaBtn}
            </Link>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
