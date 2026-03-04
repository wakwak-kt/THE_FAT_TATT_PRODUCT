"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

const facilityIcons = [
  "ri-calendar-check-line",
  "ri-shield-check-line",
  "ri-tools-line",
  "ri-heart-pulse-line",
];

export default function FacilitySection() {
  const { t } = useLanguage();

  return (
    <section id="facility" className="facility-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title">{t.facility.title}</h2>
            <p className="section-subtitle">{t.facility.subtitle}</p>
          </div>
        </ScrollFadeUp>

        <div className="facility-grid">
          {t.facility.items.map((item, index) => (
            <ScrollFadeUp key={item.title} delay={index * 0.1}>
              <div className="facility-item">
                <div className="facility-icon">
                  <i className={facilityIcons[index]}></i>
                </div>
                <h3 className="facility-title">{item.title}</h3>
                <p className="facility-description">{item.description}</p>
              </div>
            </ScrollFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
