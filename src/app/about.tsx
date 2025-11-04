import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import HistorySection from "@/components/sections/HistorySection";
import ProfileSection from "@/components/sections/ProfileSection"
import SkillsSection from "@/components/sections/SkillsSection"
import WorksSection from "@/components/sections/WorksSection";

export default function AboutPage() {
  return (
    <>
      <ProfileSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
      <HistorySection />
      <Footer />
    </>
  );
}
