import { CiClock2 } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NewsCard } from "@/components/widgets";
import { NextRouter, useRouter } from "next/router";
import { useParams } from "next/navigation";
import { INewsPage } from "@/cms-models/news";
import axios from "axios";
import moment from 'moment';
import { imageUrl } from "@/utils";
import Head from "next/head";

export default function NewsDetail() {
  const router: NextRouter = useRouter();
  const params = useParams();

  const [data, setData] = useState<INewsPage>({} as INewsPage);

  useEffect(() => {
    (async () => {
      if (params?.id) {
        const response = await axios(`/api/${router.locale}/news/${params.id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      }
    })();
  }, [router.locale, params]);

  const images = data.image ? JSON.parse(data.image) : '';

  return (
    <div className="container mx-auto">
      <Head>
        <title>5 Things You Need To Do In Your Practice!</title>
        <meta name="description" content="Read all the latest news and blog posts from Premier Vet Alliance, and keep up to date with the latest developments."></meta>
        <link rel="canonical" href="https://premiervetalliance.com/practice-support/"/>        
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:title" content="5 Things You Need To Do In Your Practice!"></meta>
        <meta property="og:description" content="Read all the latest news and blog posts from Premier Vet Alliance, and keep up to date with the latest developments."></meta>
        <meta property="og:url" content="https://premiervetalliance.com/practice-support/"></meta>
        <meta property="og:site_name" content="Premier Vet Alliance"></meta>
      </Head>
      <section className="max-w-[846px] mx-auto text-base md:text-xl pt-6">
        <div className="flex justify-between md:items-center flex-col md:flex-row gap-6 mb-3 md:mb-0">
          <div className="text-secondary body">
            News{' '}/{' '}<span className="text-primary">5 Things You Need To Do In Your Practice!</span>
          </div>

          <div className="flex items-center text-secondary gap-1">
            <CiClock2 className="text-sm md:text-base sm:text-xl" />
            <span className="text-xs sm:text-base">{moment(data.read_time).format('MMM DD, YYYY • mm')} read</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <div className="sub-heading" dangerouslySetInnerHTML={{ __html: data.title }} />

          <Image className="w-full" src={imageUrl(images?.[0] ?? '')} alt="news-detail-top" width={846} height={500} />

          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </section>

      <section className="pt-20">
        <div className="sub-heading mb-12">
          You Might <span className="text-primary">Also Like</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard
            image={null}
            time="Sep 18, 2024"
            title="Gen X and Millennials are Ruling the Roost!"
            description="The highest percentage of today’s new pet owners belong to the Gen X and Millennials. Are you targeting them?"
          />
          <NewsCard
            image={null}
            time="Sep 18, 2024"
            title="Home Delivery – Why Are We Still Talking About It?!"
            description="Owners who must collect products from their surgery stay on plan 22 fewer months than those who have a post option. Don’t let this be you."
          />
          <NewsCard
            image={null}
            time="Sep 18, 2024"
            title="Can You Guess the Top Cat and Dog Names in 2024?"
            description="What are the three most common cat and dog names in 2024? We check them out and see how the PVA team’s guesses compare to the average."
          />
        </div>
      </section>

      <section className="-mx-10">
        {/*<NeedMoreHelpSection />*/}
      </section>
    </div>
  )
}
