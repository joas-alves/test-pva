import { INewsPage } from "@/cms-models/news";
import axios from "axios";
import { useTranslations } from "next-intl";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { NewsGridSection } from "../news";

type Props = {
  title: string;
}

export const NewSection: React.FC<Props> = ({ title }) => {
  const t = useTranslations('Home');
const [relevantBlogs, setRelevantData] = useState<INewsPage[]>([]);
  const router: NextRouter = useRouter();

  useEffect(() => {
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
  }, [router.locale]);
  return (
    <section className="container mx-auto py-20 pb-10">
      <div className="flex items-center mb-12">
        <h2 className="sub-heading" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="flex-1" />
        <button className="hidden md:block btn primary-outline-btn">{t('discover_all')}</button>
      </div>
      <NewsGridSection data={relevantBlogs} />
      <div className="md:hidden flex justify-center pt-6">
        <button className="btn primary-outline-btn px-10">{t('discover_all')}</button>
      </div>
    </section>
  )
}
