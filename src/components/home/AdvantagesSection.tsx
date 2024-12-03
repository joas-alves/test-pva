import Image from "next/image";
// import { useTranslations } from "next-intl";
import { IHomePage } from "@/cms-models/home";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  data: IHomePage;
};

export const AdvantagesSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <div
        className="sub-heading mb-12 text-center"
        dangerouslySetInnerHTML={{
          __html: "Unlocking your practice potential",
        }}
      />

      <div className="flex justify-between items-start flex-col lg:flex-row">
        <div className="relative px-[33px] md:px-[109px] py-10 md:py-[85px]">
          <div className="text-center rounded-2xl shadow-paper w-[113px] md:w-[192px] flex flex-col items-center pt-4 absolute top-0 left-0 bg-white">
            <div className="text-info sub-value mb-2">
              {data.section4_experience_number}
            </div>
            <div className="text-xs sm:text-sm text-secondary mb-2">
              {data.section4_experience_text}
            </div>
            <Image
              className=""
              src={imageUrl(data.section4_experience_image)}
              alt="dog"
              width={149}
              height={116}
            />
          </div>
          <Image
            src={imageUrl(data.section4_image)}
            width={410}
            height={450}
            alt="doctor"
          />
          <div className="flex items-center justify-between flex-col md:flex-row rounded-2xl shadow-paper w-[113px] md:w-[302px] bg-white absolute bottom-0 right-0">
            <div className="pb-2 p-5 px-2 md:p-8 md:pr-0 text-center md:text-left">
              <div className="text-info sub-value mb-2">
                {data.section4_enrolled_number}
              </div>
              <div className="text-xs sm:text-sm text-secondary">
                {data.section4_enrolled_text}
              </div>
            </div>
            <Image
              className="w-[80px] md:w-auto"
              src={imageUrl(data.section4_enrolled_image)}
              alt="cat"
              width={130}
              height={139}
            />
          </div>
        </div>

        <div className="max-w-full lg:max-w-[519px]">
          <div className="mb-8 md:mb-10">
            <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] rounded-2xl flex items-center justify-center bg-info mb-3">
              <Image
                src="/images/icons/money.svg"
                alt="end-to-end"
                width={24}
                height={24}
              />
            </div>
            <div className="title mb-3">{data.section4_end_to_end_title}</div>
            <p className="text-secondary body">
              {data.section4_end_to_end_description}
            </p>
          </div>

          <div className="mb-8 md:mb-10">
            <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] rounded-2xl flex items-center justify-center bg-primary mb-3">
              <Image
                src="/images/icons/check-mark-white.svg"
                alt="smart-tech"
                width={24}
                height={24}
              />
            </div>
            <div className="title mb-3">
              {data.section4_smart_technology_title}
            </div>
            <p className="text-secondary body">
              {data.section4_smart_technology_description}
            </p>
          </div>

          <div className="mb-8 md:mb-10">
            <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] rounded-2xl flex items-center justify-center bg-info mb-3">
              <Image
                src="/images/icons/chart-icon.svg"
                alt="decades"
                width={24}
                height={24}
              />
            </div>
            <div className="title mb-3">{data.section4_global_trust_title}</div>
            <p className="text-secondary body">
              {data.section4_global_trust_description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
