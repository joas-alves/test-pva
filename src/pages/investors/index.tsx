import { GeneralMeetingSection, InvestHeroSection, OurStorySection } from "@/components/investors";
import { DiscoverSection } from "@/components/home";
import {useEffect, useState} from "react";
import {ITInvestorsPage} from "@/cms-models/investors";
import {NextRouter, useRouter} from "next/router";
import axios from "axios";
import { StrategicReviewSection } from "@/components/investors/StrategicReview";
import { BasicModal } from "@/components/modals/basic";

export default function Investors() {
    const router: NextRouter = useRouter();

    const [data, setData] = useState<ITInvestorsPage>({} as ITInvestorsPage);
    const [disImages, setDisImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const onAction = (value: string) => {
      if(value === 'disagree'){
        setIsOpen(false)
        router.push("/")
      }else{
        localStorage.setItem("investorAgree", "true")
        setIsOpen(false)
      }
      
    }
    useEffect(() => {
      if(!localStorage.getItem('investorAgree')){
        setIsOpen(true)
      }
      if (!router.isReady) return;
        (async () => {
            try{
                const response = await axios(`/api/${router.locale}/investors-content/1`);
                if (response.status === 200) {
                    setData(response.data);
                    const imgs = JSON.parse(response.data?.section3_bg_image ?? []);
                    setDisImages(imgs)
                }
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
            }
        })();
    }, [router.locale]);

    if (!data || Object.keys(data).length === 0) {
      return <div>Loading...</div>;
    }


  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <InvestHeroSection />
      <OurStorySection />
      <GeneralMeetingSection />
      <StrategicReviewSection />
      <DiscoverSection
          title={data.section3_title}
          description={data.section3_description}
          image={`${disImages[disImages.length - 1]}`}
      />
      <BasicModal setIsOpen={setIsOpen} isOpen={isOpen} onAction={onAction} />
    </div>
  )
}
