import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import React from "react";
import { useTranslations } from "next-intl";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { INewsPage } from "@/cms-models/news";
import { createNewsSlug, imageUrl } from "@/utils";
import Link from "next/link";
import { dateFormater } from "@/utils/dataConverter";

type Props = {
  data: INewsPage[];
};

export const HeroSection: React.FC<Props> = ({ data }) => {
  const t = useTranslations("News");
  // Sort the data by date and get the last 5 posts
  const sortedData =
    (data &&
      data?.length > 0 &&
      data
        ?.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        ?.slice(0, 5)) ??
    [];
  return (
    <section className="container mx-auto pt-4">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row mb-8">
        <div className="sub-heading mb-4 md:mb-0">
          {t("latest")} <span className="text-primary">{t("news")}</span>
        </div>
        <div className="max-w-[517px] text-secondary">
          {t("stay_updated_with_the_latest")}
        </div>
      </div>

      <Swiper className="w-full" modules={[Autoplay]} spaceBetween={24}>
        {sortedData &&
          (sortedData as INewsPage[])?.map((post, index) => {
            const images = post.image ? JSON.parse(post.image) : null;
            return (
              <SwiperSlide key={index}>
                <Link href={`/news/${createNewsSlug(post.title, post.id)}`}>
                  <div className="relative">
                    <Image
                      className="rounded-3xl hidden md:block"
                      src={imageUrl(images?.[0] ?? "")}
                      alt="news-hero"
                      width={1280}
                      height={588}
                    />
                    <Image
                      className="rounded-2xl block md:hidden w-full"
                      src={imageUrl(images?.[0] ?? "")}
                      alt="news-hero"
                      width={327}
                      height={200}
                    />
                    <div className="absolute w-full h-full rounded-3xl top-0 bottom-0 left-0 right-0 p-6 md:p-10 flex items-end">
                      <div className="bg-white p-2 md:p-4 rounded-3xl max-w-[680px]">
                        <div className="flex items-center text-black mb-4 gap-1 text-xs md:text-base">
                          <CiClock2 className="text-base sm:text-xl" />
                          <span className="text-sm">
                            {dateFormater(post.date, "YYYY-MM-DD")}
                          </span>
                        </div>
                        <div className="text-black">
                          <div
                            className="text-xl md:text-[32px] font-bold mb-3 leading-6 md:leading-10"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                          />
                          <div className="line-clamp-3 text-xs md:text-base">
                            {t("we_met_with_juliette")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};
