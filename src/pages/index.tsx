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

export default function Home() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);

  useEffect(() => {
    (async () => {
      const response = await axios(`/api/${router.locale}/homepage-content/1`);
      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, [router.locale]);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <HeroSection data={data} /> {/* Section1 */}
      <ElevatingSection data={data} />
      <PracticeSection data={data} />
      <AdvantagesSection data={data} />
      <RealStoriesSection data={data} />
      <MapSection data={data} />
      <NewSection />
      <FAQSection data={data.questions} />
      <DiscoverSection
        title={data.section9_title}
        description={data.section9_description}
        image={data.section9_image}
      />
    </div>
  );
}
