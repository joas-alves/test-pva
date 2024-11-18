import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import React from "react";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations('News');

  return (
    <section className="container mx-auto pt-4">
      <div className="flex justify-between items-center flex-col md:flex-row mb-8">
        <div className="sub-heading mb-4 md:mb-0">
          {t('latest')} <span className="text-primary">{t('news')}</span>
        </div>
        <div className="max-w-[517px] text-secondary">
          {t('stay_updated_with_the_latest')}
        </div>
      </div>

      <div className="relative">
        <Image className="rounded-3xl" src="/images/news-hero.png" alt="news-hero" width={1280} height={588} />
        <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 p-10 flex items-end">
          <div className="max-w-[680px]">
            <div className="flex items-center text-white mb-4 gap-1">
              <CiClock2 className="text-base sm:text-xl" />
              <span className="text-sm">Aug 22, 2024 • 12 min read</span>
            </div>
            <div className="text-white">
              <div className="text-[32px] font-bold mb-3 leading-10">
                {t('an_interview_with_juliette')}
              </div>
              <div>
                {t('we_met_with_juliette')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
