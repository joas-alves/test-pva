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
import axios from 'axios';
import { useEffect, useState } from "react";
import { IHomePage } from "@/cms-models/home";
import { NextRouter, useRouter } from "next/router";
import { IFaq } from "@/cms-models/faq";

export default function Home() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);
  const [faqs, setFaqs] = useState<IFaq[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/${router.locale}/homepage-content/1`);
      if (response.status === 200) {
        setData(response.data);
      }

      const faqResponse = await axios(`/api/${router.locale}/homepage-questions`);
      if (faqResponse.status === 200) {
        setFaqs(faqResponse.data);
      }
    })();
  }, [router.locale]);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <HeroSection data={data} />
      <ElevatingSection data={data} />
      <PracticeSection data={data} />
      <AdvantagesSection data={data} />
      <RealStoriesSection data={data} />
      <MapSection data={data} />
      <NewSection />
      <FAQSection data={faqs} />
      <DiscoverSection />
    </div>
  );
}
