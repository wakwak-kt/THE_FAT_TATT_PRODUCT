import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import ProcessSection from "@/components/sections/ProcessSection";
import FacilitySection from "@/components/sections/FacilitySection";
import RecentNewsSection from "@/components/sections/RecentNewsSection";
import { getAnnouncements } from "@/lib/microcms";
import type { Announcement } from "@/lib/types";

export const revalidate = 60;

export default async function Home() {
  let announcements: Announcement[] = [];

  try {
    announcements = await getAnnouncements();
  } catch (e) {
    console.error("announcements error:", e);
  }

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <FacilitySection />
      <ProcessSection />
      <RecentNewsSection announcements={announcements.slice(0, 3)} />
    </main>
  );
}
