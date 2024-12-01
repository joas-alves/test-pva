import { GeneralMeetingSection, InvestHeroSection, OurStorySection } from "@/components/investors";
import { DiscoverSection } from "@/components/home";
import {useEffect, useState} from "react";
import {ITInvestorsPage} from "@/cms-models/investors";
import {NextRouter, useRouter} from "next/router";

export default function Investors() {
    const router: NextRouter = useRouter();

    const [data, setData] = useState<ITInvestorsPage>({} as ITInvestorsPage);
    const [disImages, setDisImages] = useState([]);

    useEffect(() => {
        (async () => {
            try{
                const response = await fetch(`/api/investors?locale=${router.locale}`);
                const result = await response.json();
                setData(result);
                const imgs = JSON.parse(result?.section3_bg_image ?? []);
                setDisImages(imgs)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                console.log({error})
            }
        })();
    }, [router.locale]);

    console.log({data});

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <InvestHeroSection />
      <OurStorySection />
      <GeneralMeetingSection />
      <DiscoverSection
          title={data.section3_title}
          description={data.section3_description}
          image={`${disImages[disImages.length - 1]}`}
      />
    </div>
  )
}
