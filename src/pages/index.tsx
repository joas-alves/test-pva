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
import { useEffect, useState } from "react";
import { IHomePage } from "@/cms-models/home";
import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
        try{
            const response = await axios(`/en-UK/homepage-content/1`);
            if (response.status === 200) {
                setData(response.data);
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
       <Head>
       <title>Global Home - Premier Vet Alliance</title>
       <link rel="canonical" href="https://premiervetalliance.com/"></link>
       <meta property="og:locale" content="en_US"/>
       <meta property="og:title" content="Global Home - Premier Vet Alliance"/>
       <meta property="og:type" content="website"/>
       <meta property="og:site_name" content="Premier Vet Alliance"/>
       <meta property="og:updated_time" content="2023-11-14T11:25:01+00:00"/>
       
      </Head>
      <HeroSection data={data} /> {/* Section1 */}
      <ElevatingSection data={data} /> {/* Section2 */}
      <PracticeSection data={data} /> {/* Section3 */}
      <AdvantagesSection data={data} /> {/* Section4 */}
      <RealStoriesSection data={data} /> {/* Section5 */}
      <MapSection data={data} /> {/* Section6 */}
      <NewSection title={data.section7_title} /> {/* Section7 */}
      <FAQSection data={data.questions} /> {/* Section8 */}
      {/* Section9 */}
      <DiscoverSection
        title={data.section9_title}
        description={data.section9_description}
        image={data.section9_image}
      />
    </div>
  );
}
