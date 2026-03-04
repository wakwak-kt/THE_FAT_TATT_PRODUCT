"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="booking-content booking-content--dm-only">
            <div className="booking-side">
              <div className="booking-card">
                <div className="booking-icon">
                  <i className="ri-instagram-line"></i>
                </div>
                <h3 className="booking-card-title">{t.booking.cardTitle}</h3>
                <p className="booking-card-description">
                  {t.booking.cardDescription}
                </p>
                <a
                  href="https://instagram.com/the_fat_tatt"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="booking-button"
                >
                  <i className="ri-instagram-line"></i>
                  <span>{t.booking.button}</span>
                </a>
                <p className="booking-note">{t.booking.note}</p>
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
