"use client";

import ScrollFadeUp from "@/components/ui/ScrollFadeUp";
import { useLanguage } from "@/i18n";

const patternIcons = ["ri-pencil-ruler-2-line", "ri-image-add-line", "ri-gallery-line"];
const stepIcons = [
  "ri-calendar-check-line",
  "ri-discuss-line",
  "ri-checkbox-circle-line",
  "ri-hand-heart-line",
  "ri-heart-pulse-line",
];
const stepNumbers = ["01", "02", "03", "04", "05"];

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="process-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title-dark">{t.process.patternsTitle}</h2>
            <p className="section-subtitle-dark">
              {t.process.patternsSubtitle}
            </p>
          </div>
        </ScrollFadeUp>

        <div className="patterns-grid">
          {t.process.patterns.map((pattern, index) => (
            <ScrollFadeUp key={pattern.title} delay={index * 0.1}>
              <div className="pattern-card">
                <div className="pattern-icon">
                  <i className={patternIcons[index]}></i>
                </div>
                <h3 className="pattern-title">{pattern.title}</h3>
                <p className="pattern-description">{pattern.description}</p>
                <div className="pattern-features">
                  {pattern.features.map((feature) => (
                    <div key={feature} className="pattern-feature">
                      <i className="ri-check-line"></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollFadeUp>
          ))}
        </div>

        <ScrollFadeUp>
          <div className="section-header" style={{ marginTop: "8rem" }}>
            <h2 className="section-title-dark">{t.process.stepsTitle}</h2>
            <p className="section-subtitle-dark">
              {t.process.stepsSubtitle}
            </p>
          </div>
        </ScrollFadeUp>

        <div className="steps-container">
          <div className="steps-line"></div>
          <div className="steps-grid">
            {t.process.steps.map((step, index) => (
              <ScrollFadeUp key={stepNumbers[index]} delay={index * 0.1}>
                <div className="step-card">
                  <div className="step-number">{stepNumbers[index]}</div>
                  <div className="step-icon">
                    <i className={stepIcons[index]}></i>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </ScrollFadeUp>
            ))}
          </div>
        </div>

        <ScrollFadeUp>
          <a
            href="https://instagram.com/the_fat_tatt"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="process-note"
          >
            <i className="ri-instagram-line"></i>
            {t.process.dmNote}
          </a>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
