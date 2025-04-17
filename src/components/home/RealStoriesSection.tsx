import { IHomePage } from "@/cms-models/home";
import { ReviewCarouselCard } from "@/components/widgets";
import { reviewData } from "@/temp/reviewDataForTestimonals";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { GoStar, GoStarFill } from "react-icons/go";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  data: IHomePage;
};

export const RealStoriesSection: React.FC<Props> = ({ data }) => {
  const t = useTranslations('Home');
  
  const [currentSlide, setCurrentSlide] = useState(reviewData[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(reviewData[swiper.activeIndex]);
  };
  return (
    <section className="container mx-auto py-3">
      <div className="flex">
        <div className="sub-heading mb-4 md:mb-12 flex-1" dangerouslySetInnerHTML={{ __html: data.section5_title }}></div>
        <div className="hidden md:flex justify-end gap-5 pb-8 mt-10">
          <div className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-primary border border-primary text-2xl swiper-button-prev cursor-pointer">
            <IoChevronBackOutline />
          </div>
          <button className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-primary border border-primary text-2xl swiper-button-next">
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Text & Rating */}
        <div className="md:max-w-[411px] flex flex-col items-start w-full">
          <p className="text-secondary body mb-8 md:mb-10">
            {data.section5_description}
          </p>
          <div className="border border-info rounded-2xl flex items-center gap-4 p-4 mx-auto md:mx-0">
            <div>
              <Image
                className="w-full md:w-auto"
                src="/images/google-icon.svg"
                width={50}
                height={50}
                alt="google"
              />
            </div>
            <div>
              <div className="text-dark-green">{t("reviews")}</div>
              <div className="text-warning flex items-center gap-1">
                {[...Array(5)].map((_, index) => {
                  if (index < Math.floor(currentSlide.rate)) {
                    return <GoStarFill key={index} />;
                  } else if (index < currentSlide.rate) {
                    return <GoStar key={index} className="text-gray-400" />;
                  } else {
                    return <GoStar key={index} className="text-gray-400" />;
                  }
                })}
                {/* <span className="text-dark-green ml-2">
                  {data.section5_social_rating} (
                  {data.section5_social_total_rating ??
                    currentSlide.rate + ".0"}
                  )
                </span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="flex-1">
          <Swiper
            className="max-w-[760px] w-full !mx-0 !py-4"
            navigation={{
              enabled: true,
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            onSlideChange={handleSlideChange}
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="mx-4">
                  <ReviewCarouselCard rate={review.rate} user={review.user} message={review.message} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-end gap-3 -mt-16 relative z-10">
          <button className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-primary border border-primary text-xl swiper-button-prev">
            <IoChevronBackOutline />
          </button>
          <button className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-primary border border-primary text-xl swiper-button-next">
            <IoChevronForwardOutline />
          </button>
        </div>
      </div>
    </section>
  );
};
