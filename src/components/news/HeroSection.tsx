import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import React from "react";
import { useTranslations } from "next-intl";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const HeroSection = () => {
  const t = useTranslations('News');

  return (
    <section className="container mx-auto pt-4">
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row mb-8">
        <div className="sub-heading mb-4 md:mb-0">
          {t('latest')} <span className="text-primary">{t('news')}</span>
        </div>
        <div className="max-w-[517px] text-secondary">
          {t('stay_updated_with_the_latest')}
        </div>
      </div>

      <Swiper
        className="w-full"
        modules={[Autoplay]}
        spaceBetween={24}
      >
        {new Array(5).fill(0).map((_, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <Image className="rounded-3xl hidden md:block" src="/images/news-hero.png" alt="news-hero" width={1280} height={588} />
              <Image className="rounded-2xl block md:hidden w-full" src="/images/news-hero-mobile.png" alt="news-hero" width={327} height={460} />
              <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 p-6 md:p-10 flex items-end">
                <div className="max-w-[680px]">
                  <div className="flex items-center text-white mb-4 gap-1 text-xs md:text-base">
                    <CiClock2 className="text-base sm:text-xl" />
                    <span className="text-sm">Aug 22, 2024 • 12 min read</span>
                  </div>
                  <div className="text-white">
                    <div className="text-xl md:text-[32px] font-bold mb-3 leading-6 md:leading-10">
                      {t('an_interview_with_juliette')}
                    </div>
                    <div className="line-clamp-3 text-xs md:text-base">
                      {t('we_met_with_juliette')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
