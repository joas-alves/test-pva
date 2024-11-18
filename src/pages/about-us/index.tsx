import {
  BuildingLegacySection,
  ExperienceUnderstandingSection,
  NeedMoreHelpSection,
  PremierVetAllianceSection,
  TrustedPartnerSection,
  TrustUsSection
} from "@/components/about-us";
import { FAQSection } from "@/components/home";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <TrustedPartnerSection />
      <PremierVetAllianceSection />
      <ExperienceUnderstandingSection />
      <BuildingLegacySection />
      <TrustUsSection />
      <FAQSection />
      <NeedMoreHelpSection />
    </div>
  )
}
