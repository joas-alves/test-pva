import { CiClock2 } from "react-icons/ci";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { useParams } from "next/navigation";
import { INewsPage } from "@/cms-models/news";
import axios from "axios";
import { imageUrl } from "@/utils";
import Head from "next/head";
import { NewsGridSection } from "@/components/news";
import { dateFormater } from "@/utils/dataConverter";

export default function NewsDetail() {
  const router: NextRouter = useRouter();
  const params = useParams();

  const [data, setData] = useState<INewsPage>({} as INewsPage);
  const [relevantBlogs, setRelevantData] = useState<INewsPage[]>([]);

  useEffect(() => {
    (async () => {
      if (params?.id) {
        const response = await axios(`/api/${router.locale}/news/${params.id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      }
    })();
    (async () => {
      try {
        const response = await axios(`/api/${router.locale}/news`);
        if (response.status === 200) {
          if (response.data && response.data.length > 0) {
            const blogs: INewsPage[] = response.data;

            const sortedData: INewsPage[] =
              blogs && blogs.length > 0
                ? blogs
                    .sort(
                      (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                    )
                    .slice(0, 3)
                : [];
            setRelevantData(sortedData);
          } else setRelevantData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale, params]);

  const images = data.image ? JSON.parse(data.image) : "";

  return (
    <div className="container mx-auto">
      <Head>
        <title>5 Things You Need To Do In Your Practice!</title>
        <meta
          name="description"
          content="Read all the latest news and blog posts from Premier Vet Alliance, and keep up to date with the latest developments."
        ></meta>
        <link
          rel="canonical"
          href="https://premiervetalliance.com/practice-support/"
        />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:title"
          content="5 Things You Need To Do In Your Practice!"
        ></meta>
        <meta
          property="og:description"
          content="Read all the latest news and blog posts from Premier Vet Alliance, and keep up to date with the latest developments."
        ></meta>
        <meta
          property="og:url"
          content="https://premiervetalliance.com/practice-support/"
        ></meta>
        <meta property="og:site_name" content="Premier Vet Alliance"></meta>
      </Head>
      <section className="max-w-[846px] mx-auto text-base md:text-xl pt-6">
        <div className="flex justify-between md:items-center flex-col md:flex-row gap-6 mb-3 md:mb-0">
          <div className="text-secondary body">
            News /{" "}
            <span className="text-primary">
              5 Things You Need To Do In Your Practice!
            </span>
          </div>

          <div className="flex items-center text-secondary gap-1">
            <CiClock2 className="text-sm md:text-base sm:text-xl" />
            <span className="text-xs sm:text-base">
              {dateFormater(data.read_time || data.date, "MMM DD, YYYY • mm")} read
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-10">
          <div
            className="sub-heading"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />

          <Image
            className="w-full"
            src={imageUrl(images?.[0] ?? "")}
            alt="news-detail-top"
            width={846}
            height={500}
          />

          <div dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
      </section>

      <section className="pt-20">
        <div className="sub-heading mb-12">
          You Might <span className="text-primary">Also Like</span>
        </div>
        <div className="">
          <NewsGridSection data={relevantBlogs} />
        </div>
      </section>

      <section className="-mx-10">{/*<NeedMoreHelpSection />*/}</section>
    </div>
  );
}
