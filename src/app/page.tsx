import HeroSection from '@/components/sections/hero';
import ContactSection from '@/components/sections/contact';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/experiences';
import HackathonsSection from '@/components/sections/hackathons';
import WorkSection from '@/components/sections/projects';
import VolunteerSection from '@/components/sections/volunteer';
import ResearchSection from '@/components/sections/research';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />

      <WorkSection />
      <HackathonsSection />
      <VolunteerSection />
      <ResearchSection />
      <ContactSection />
    </>
  );
}
