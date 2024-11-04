import {
  AdvantagesSection,
  DiscoverSection,
  ElevatingSection,
  HeroSection,
  MapSection,
  NewSection,
  PracticeSection,
  RealStoriesSection,
  FAQSection
} from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <HeroSection />
      <ElevatingSection />
      <PracticeSection />
      <AdvantagesSection />
      <RealStoriesSection />
      <MapSection />
      <NewSection />
      <FAQSection />
      <DiscoverSection />
    </div>
  );
}
