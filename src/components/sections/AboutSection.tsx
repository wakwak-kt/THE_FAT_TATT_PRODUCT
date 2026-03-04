"use client";

import Image from "next/image";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-subtitle">{t.about.subtitle}</p>
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="about-content">
            <div className="about-image-wrapper">
              <Image
                src="/images/nakamura_design.jpg"
                alt={t.about.studioImageAlt}
                width={600}
                height={500}
                className="about-image"
                priority
              />
            </div>

            <div className="about-text">
              <div className="concept-badge">{t.about.conceptBadge}</div>

              <div className="concept-block">
                <h3 className="about-heading">{t.about.heading}</h3>
                <p className="about-description">{t.about.description}</p>
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
