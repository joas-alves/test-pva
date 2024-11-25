import { EnhancedSection, Vet2PetSection, YouPracticeSection } from "@/components/services";
import { FAQSection } from "@/components/home";
import { NeedMoreHelpSection } from "@/components/about-us";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { IServicePage } from "@/cms-models/service";

export default function Services() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IServicePage>({} as IServicePage);

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/${router.locale}/service-content/1`);
      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, [router.locale]);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Vet2PetSection data={data} />
      <EnhancedSection data={data} />
      <YouPracticeSection data={data} />
      {/*<RealStoriesSection />*/}
      <FAQSection data={[]} />
      <NeedMoreHelpSection />
    </div>
  )
}
