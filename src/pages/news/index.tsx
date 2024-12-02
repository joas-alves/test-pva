import { HeroSection, NewsGridSection } from "@/components/news";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { INewsPage } from "@/cms-models/news";

export default function News() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<INewsPage[]>([]);

  useEffect(() => {
    (async () => {
      try{
        const response = await axios(`/api/${router.locale}/news`);
        if (response.status === 200) {
          setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
      }
    })();
  }, [router.locale]);

  return (
    <>
      <HeroSection />
      <NewsGridSection data={data} />
    </>
  )
}
