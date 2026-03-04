"use client";

import Image from "next/image";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

export default function PhilosophySection() {
  const { t } = useLanguage();

  return (
    <section className="philosophy-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="philosophy-card">
            <div className="philosophy-content">
              <div className="philosophy-text">
                <div className="philosophy-label">tattoo type</div>
                <h2 className="philosophy-title">
                  new school tattoo
                </h2>
                <p className="philosophy-description">
                  {t.philosophy.description1}
                </p>
                <p className="philosophy-description">
                  {t.philosophy.description2}
                </p>
              </div>

              <div className="philosophy-image-wrapper">
                <Image
                  src="/images/nakamura_tatt.jpg"
                  alt={t.philosophy.designSketchAlt}
                  width={600}
                  height={400}
                  className="philosophy-image"
                />
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
