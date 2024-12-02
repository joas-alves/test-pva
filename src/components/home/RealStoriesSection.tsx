import { GoStarFill } from "react-icons/go";
import { ReviewCarouselCard } from "@/components/widgets";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";
import { IHomePage } from "@/cms-models/home";
import React from "react";
import Link from "next/link";

type Props = {
  data: IHomePage;
}

export const RealStoriesSection: React.FC<Props> = ({ data }) => {
  const t = useTranslations('Home');
  const ct = useTranslations('Common');

  return (
    <section className="container mx-auto py-3">
      <div className="flex flex-col w-full justify-center items-center">
        <Link href="/book-demo">
          <button className="btn primary-outline-btn font-bold mb-[25px] px-10 self-center">{ct('get_started')}</button>
        </Link>
      </div>
      <div className="flex">
        <div className="sub-heading mb-4 md:mb-12 flex-1" dangerouslySetInnerHTML={{ __html: data.section5_title }}></div>
        <div className="hidden md:flex justify-end gap-5 pb-8 mt-10">
          <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-primary border border-primary text-2xl swiper-button-prev cursor-pointer">
            <IoChevronBackOutline />
          </div>
          <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-primary border border-primary text-2xl swiper-button-next cursor-pointer">
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:flex-row gap-10">
        <div className="md:max-w-[411px] flex flex-col items-start w-full">
          <p className="text-secondary body mb-8 md:mb-10">
            {data.section5_description}
          </p>
          <div className="border border-info rounded-2xl flex gap-1 p-4">
            <div>
              <div className="text-dark-green">{t('reviews')}</div>
              <div className="text-warning flex items-center text-sm gap-1">
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <GoStarFill />
                <span className="text-dark-green text-sm mx-2">{data.section5_social_rating}({data?.section5_social_total_rating ?? "5.0"})</span>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4">
          <Swiper
            className="max-w-[760px] w-full !mx-0 !py-4"
            navigation={{
              enabled: true,
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
          >
            {new Array(5).fill(0).map((_, index) => (
              <SwiperSlide key={index}>
                <div className="mx-4">
                  <ReviewCarouselCard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex md:hidden justify-end gap-3 -mt-16 relative z-10">
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-primary border border-primary text-xl swiper-button-prev cursor-pointer">
            <IoChevronBackOutline />
          </div>
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-primary border border-primary text-xl swiper-button-next cursor-pointer">
            <IoChevronForwardOutline />
          </div>
        </div>
      </div>
    </section>
  )
}
