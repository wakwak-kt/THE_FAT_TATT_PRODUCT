import Image from "next/image";
import ScrollFadeUp from "@/components/ui/ScrollFadeUp";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <ScrollFadeUp>
          <div className="section-header">
            <h2 className="section-title">THE FAT TATTについて</h2>
            <p className="section-subtitle">
              広島県尾道市にあるタトゥースタジオ。
              <br />
              タトゥーの施術だけで無く、コミュニケーションや雰囲気、唯一無二の空間を提供します。
              <br />
              お客様の想いを形にするため、デザインから施術まで一貫してこだわります。
            </p>
          </div>
        </ScrollFadeUp>

        <ScrollFadeUp>
          <div className="about-content">
            <div className="about-image-wrapper">
              <Image
                src="/images/nakamura_design.jpg"
                alt="スタジオ内観"
                width={600}
                height={500}
                className="about-image"
                priority
              />
            </div>

            <div className="about-text">
              <div className="concept-badge">コンセプト</div>

              <div className="concept-block">
                <h3 className="about-heading">他人不在</h3>
                <p className="about-description">
                  誰に何を言われても気にしない。いや、言わせない。そんな人に、沈黙のユニフォームを。
                </p>
              </div>

              <div className="concept-divider" />

              <div className="concept-block">
                <h3 className="about-heading">多様なバックボーンから織りなす<br />複雑な衝動の可視化</h3>
                <p className="about-description">
                  おめでとうございます。ここまできたあなたは少なからず密かな衝動を隠し持ってます。あとはユニフォームをいれるだけ。
                </p>
              </div>
            </div>
          </div>
        </ScrollFadeUp>
      </div>
    </section>
  );
}
