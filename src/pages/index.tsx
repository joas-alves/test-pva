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
import { IHomeCMS } from "@/cms-models/home";

export default function Home() {
  const [data, setData] = useState<IHomeCMS>({} as IHomeCMS);

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/homepage-content/1`);
      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <HeroSection data={data} />
      <ElevatingSection data={data} />
      <PracticeSection data={data} />
      <AdvantagesSection data={data} />
      <RealStoriesSection data={data} />
      <MapSection data={data} />
      <NewSection />
      <FAQSection />
      <DiscoverSection />
    </div>
  );
}
