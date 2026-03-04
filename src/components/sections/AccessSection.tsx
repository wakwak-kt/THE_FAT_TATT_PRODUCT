"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

export default function AccessSection() {
  const { t, locale } = useLanguage();

  const addressLines = t.access.addressValue.split("\n");
  const hoursLines = t.access.hoursValue.split("\n");

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.838957272248!2d133.18930777604328!3d34.405438998997774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3551017f4cbbeecd%3A0x570359b4476ea913!2sTHE%20FAT%20TATT!5e0!3m2!1s${locale}!2s${locale}!4v1768816720326!5m2!1s${locale}!2s${locale}`;

  return (
    <section id="access" className="access-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="access-content">
            <div className="access-info">
              <h3 className="access-heading">{t.access.heading}</h3>

              <div className="access-items">
                <div className="access-item">
                  <div className="access-icon">
                    <i className="ri-map-pin-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>{t.access.addressLabel}</h4>
                    <p>
                      {addressLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="access-item">
                  <div className="access-icon">
                    <i className="ri-calendar-check-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>{t.access.hoursLabel}</h4>
                    <p>
                      {hoursLines.map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < hoursLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <a
                  className="access-item"
                  href="https://instagram.com/the_fat_tatt"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <div className="access-icon">
                    <i className="ri-instagram-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>Instagram</h4>
                    <span>@the_fat_tatt</span>
                  </div>
                </a>

                <a
                  className="access-item"
                  href="https://note.com/k_sage299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="access-icon">
                    <i className="ri-file-text-line"></i>
                  </div>
                  <div className="access-detail">
                    <h4>note</h4>
                    <span>{t.access.noteLink}</span>
                  </div>
                </a>
              </div>

              <div className="access-notice">
                <i className="ri-information-line"></i>
                <div>
                  <h4>{t.access.noticeHeading}</h4>
                  <p>{t.access.noticeText}</p>
                </div>
              </div>
            </div>

            <div className="access-map">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.access.mapTitle}
              ></iframe>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
