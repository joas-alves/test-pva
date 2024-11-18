import { GeneralMeetingSection, InvestHeroSection, OurStorySection } from "@/components/investors";
import { DiscoverSection } from "@/components/home";

export default function Investors() {
  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <InvestHeroSection />
      <OurStorySection />
      <GeneralMeetingSection />
      <DiscoverSection />
    </div>
  )
}
