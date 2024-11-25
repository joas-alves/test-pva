import {
  BuildingLegacySection,
  ExperienceUnderstandingSection,
  NeedMoreHelpSection,
  PremierVetAllianceSection,
  TrustedPartnerSection,
  TrustUsSection
} from "@/components/about-us";
import { FAQSection } from "@/components/home";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { IAboutPage } from "@/cms-models/about";

export default function AboutUs() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IAboutPage>({} as IAboutPage);

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/${router.locale}/about-content/1`);
      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, [router.locale]);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <TrustedPartnerSection data={data} />
      <PremierVetAllianceSection data={data} />
      <ExperienceUnderstandingSection data={data} />
      <BuildingLegacySection data={data} />
      <TrustUsSection data={data} />
      <FAQSection data={[]} />
      <NeedMoreHelpSection />
    </div>
  )
}
