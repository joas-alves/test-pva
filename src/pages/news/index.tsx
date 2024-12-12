import { HeroSection, NewsGridSection } from "@/components/news";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { INewsPage } from "@/cms-models/news";
import Head from "next/head";

export default function News() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<INewsPage[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(`/api/${router.locale}/news`);
        if (response.status === 200) {
          if(response.data && response.data.length > 0){
            const blogs:INewsPage[]  = response.data
            const sortedData = blogs.sort((a, b) => a.newspage_id - b.newspage_id);
            setData(sortedData);
          }else
          setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale]);

  return (
    <>
    <Head>
    <title>Premier Vet Alliance News - Premier Vet Alliance</title>
    <meta name="description" content="Read all the latest news and blog posts from Premier Vet Alliance, and keep up to date with the latest developments."></meta>
    <link rel="canonical" href="https://premiervetalliance.com/news/"></link>
    <link rel="next" href="https://premiervetalliance.com/news/page/2/"></link>
    <meta property="og:locale" content="en_US"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:title" content="Premier Vet Alliance News - Premier Vet Alliance"></meta>
    <meta property="og:description" content="Read all the latest news and blog posts from Premier Vet Alliance, and keep up to date with the latest developments."></meta>
    <meta property="og:url" content="https://premiervetalliance.com/news/"></meta>
    <meta property="og:site_name" content="Premier Vet Alliance"></meta>
    </Head>
      <HeroSection data={[...data]} />
      <NewsGridSection data={data} />
    </>
  );
}
