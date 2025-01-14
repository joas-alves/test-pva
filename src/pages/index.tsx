import {
  AdvantagesSection,
  DiscoverSection,
  ElevatingSection,
  HeroSection,
  MapSection,
  NewSection,
  PracticeSection,
  RealStoriesSection,
  FAQSection,
} from "@/components/home";
import { useEffect, useState } from "react";
import { IHomePage } from "@/cms-models/home";
import { NextRouter, useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

export default function Home() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);
  const [globalData, setGlobalData] = useState<IHomePage | null>(null);

  const url = `/en-UK/${
    router.locale === "global" ? "globalpage-content" : "homepage-content"
  }/1`;
  const globalUrl = `/en-UK/globalpage-content/1`;

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        const pageResponse = axios(url);
        const globalResponse =
          router.locale === "en-US" ? axios(globalUrl) : null;

        const [pageData, globalPageData] = await Promise.all([
          pageResponse,
          globalResponse,
        ]);

        if (pageData.status === 200) {
          setData(pageData.data);
        }

        if (globalPageData?.status === 200) {
          setGlobalData(globalPageData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [router.locale, router.isReady]);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Head>
        <title>Global Home - Premier Vet Alliance</title>
        <link rel="canonical" href="https://premiervetalliance.com/"></link>
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Global Home - Premier Vet Alliance"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Vet Alliance" />
        <meta property="og:updated_time" content="2023-11-14T11:25:01+00:00" />
      </Head>
      <HeroSection data={data} globaldata={globalData} /> {/* Updated */}
      <ElevatingSection data={data} />
      <PracticeSection data={data} />
      <AdvantagesSection data={data} />
      <RealStoriesSection data={data} />
      <MapSection data={data} />
      <NewSection title={data.section7_title} />
      <FAQSection data={data.questions} />
      <DiscoverSection
        title={data.section9_title}
        description={data.section9_description}
        image={data.section9_image}
      />
    </div>
  );
}
