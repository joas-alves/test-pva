import { EnhancedSection, Vet2PetSection, YouPracticeSection } from "@/components/services";
import { FAQSection, RealStoriesSection } from "@/components/home";
import { NeedMoreHelpSection } from "@/components/about-us";

export default function Services() {
  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Vet2PetSection />
      <EnhancedSection />
      <YouPracticeSection />
      <RealStoriesSection />
      <FAQSection />
      <NeedMoreHelpSection />
    </div>
  )
}
