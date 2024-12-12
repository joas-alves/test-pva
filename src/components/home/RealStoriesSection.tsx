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
};

export const RealStoriesSection: React.FC<Props> = ({ data }) => {
  const t = useTranslations("Home");
  const ct = useTranslations("Common");

  const reviewData = [
    {
      rate: 5,
      message:
        "I have a pet plan with Premier and their customer service is second to none. I've been speaking to Tiffany regularly for over a year and she's always engaging, polite, professional and always does her best to help me. Previously, I had a plan with someone else and they were obnoxious, rude and blamed me for their errors! Tiffany is a breath of fresh air compared to what I've experienced before. She is a credit to Premier. Thank you!",
      user: {
        name: "Antony P",
        username: "Antony P",
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocJk1addyJkZ7ujgAIcxi0PbyB6dvvT_wZvOLnNZAhY888uP1g=s40-c-rp-mo-br100",
      },
    },
    {
      rate: 5,
      message:
        "Love this vet & the employees! They’re super flexible and always willing to assist. Definitely a family oriented environment & outside of my pups I always look forward to appointments! Kudos to Tiffany specifically for her efficiency and quick response.",
      user: {
        name: "byrd layd",
        username: "byrd layd",
        image:
          "https://lh3.googleusercontent.com/a-/ALV-UjW1UsTohXAva1JNDyEJlKgUGej7oBnQ3AmbTtXWBS1P0BdDTw=s40-c-rp-mo-br100",
      },
    },
    {
      rate: 5,
      message:
        "Premier Vet Alliance has been great for our clinic. Clients love that they can get the ultimate care for there pet without breaking the bank. Tiffany and Alyson have been a tremendous help with navigating updates whether it be for the clinic or clients concerns. 10/10 would highly recommend!",
      user: {
        name: "Pets Account",
        username: "Pets Account",
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocILC6Wnn3vAcJnaOj2FUMlO0Cbjg4KfFxL_yHpROq6k0XsQBQ=s40-c-rp-mo-br100",
      },
    },
    {
      rate: 5,
      message:
        "I highly recommend Premiere Vet for your pets. I reside in the United States and they provide excellent care for my pets. They receive their checkups, well and sick visits, their vaccination shots and flea, tick, heart worm meds. My customer service Rep Tiffany is amazing!  She’s always helpful, very pleasant, courteous and very knowledgeable! It’s a pleasure to contact Premiere Vet, as I know Tiffany will be on the other of the call to help with any questions I may have.",
      user: {
        name: "Annette Rorke",
        username: "Annette Rorke",
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocLx1o4SSMBUdAHhiohAfYv-SuPxduB3wSsqnQlnZTjKvvY-hg=s40-c-rp-mo-br100",
      },
    },
    {
      rate: 5,
      message:
        "I have put my trust in Premier Vet Alliance for years! They have always been on top of it. Tiffany has always been my go to - she is able to handle any situation in a calm & professional manner. We will continue to use this service for the years to come!",
      user: {
        name: "Morgan Taylor",
        username: "Morgan Taylor",
        image:
          "https://lh3.googleusercontent.com/a/ACg8ocKABJoP64cjb3E9ebn8oovbgnNgsjisZnUq6q9R6xaAEmdudQ=s40-c-rp-mo-br100",
      },
    },
  ];

  return (
    <section className="container mx-auto pb-10 sm:px-6 lg:px-8">
      {/* Get Started Button */}
      <div className="flex flex-col w-full justify-center items-center mb-6">
        <Link href="/get-in-touch">
          <button className="btn primary-outline-btn font-bold px-8 py-2">
            {ct("get_started")}
          </button>
        </Link>
      </div>

      {/* Title & Navigation */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div className="flex-1">
          <h2
            className="sub-heading mb-4 md:mb-0"
            dangerouslySetInnerHTML={{ __html: data.section5_title }}
          ></h2>
        </div>
        {/* Navigation Buttons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center text-primary border border-primary text-2xl swiper-button-prev">
            <IoChevronBackOutline />
          </button>
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
              <div className="text-dark-green">{t("reviews")}</div>
              <div className="text-warning flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <GoStarFill key={i} />
                ))}
                <span className="text-dark-green ml-2">
                  {data.section5_social_rating} (
                  {data.section5_social_total_rating ?? "5.0"})
                </span>
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
          >
            {reviewData.map((review, index) => (
              <SwiperSlide key={index}>
                <div>
                  <ReviewCarouselCard
                    rate={review.rate}
                    user={review.user}
                    message={review.message}
                  />
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
