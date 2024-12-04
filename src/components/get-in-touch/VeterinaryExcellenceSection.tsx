import { SmallReviewCarouselCard } from "@/components/widgets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import 'swiper/css';
import { useTranslations } from "next-intl";

export const VeterinaryExcellenceSection = () => {
  const t = useTranslations('Book');

  return (
    <section className="container mx-auto py-20">
      <div className="max-w-[954px] w-full mx-auto mb-0 md:mb-4 text-center">
        <h2 className="sub-heading mb-6">
          {t('tailored_for')} <span className="text-primary">{t('veterinary')}</span> {t('and_efficiency')}
        </h2>
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          {t('see_how_our_tailored')}
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          enabled: true,
          nextEl: '.swiper-button-next-1',
          prevEl: '.swiper-button-prev-1',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          976: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        pagination={false}
        modules={[Navigation]}
      >
        {new Array(5).fill(0).map((_, index) => (
          <SwiperSlide key={index} className="px-2 py-6">
            <SmallReviewCarouselCard />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-5 md:pt-3">
        <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-xl md:rounded-2xl flex items-center justify-center text-primary border border-primary text-xl md:text-2xl swiper-button-prev-1 cursor-pointer">
          <IoChevronBackOutline />
        </div>
        <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-xl md:rounded-2xl flex items-center justify-center text-primary border border-primary text-xl md:text-2xl swiper-button-next-1 cursor-pointer">
          <IoChevronForwardOutline />
        </div>
      </div>
    </section>
  )
}
