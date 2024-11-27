import Image from "next/image";
import { PiChartLineUpLight } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { IServicePage } from "@/cms-models/service";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  data: IServicePage;
}

export const EnhancedSection: React.FC<Props> = ({ data }) => {
  const t = useTranslations('Services');

  return (
    <section className="container mx-auto py-10 flex flex-col gap-20">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-[133px]">
        <div className="flex items-start">
          <div className="w-[154px] sm:w-[302px] flex-shrink-0 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-2xl md:rounded-3xl shadow-paper px-4 md:px-7 py-6 md:py-9 mt-10 md:mt-20 -mr-20 relative bg-white">
            <div className="pl-5 md:pl-10">
              <span className="w-8 md:w-[60px] h-8 md:h-[60px] rounded-lg md:rounded-2xl flex items-center justify-center bg-primary">
                <PiChartLineUpLight className="text-white text-md md:text-2xl" />
              </span>
            </div>

            <div className="text-center py-5 md:py-9">
              <div className="sub-head-value mb-2">{data.section2_practice_number}</div>
              <div className="text-xs md:text-sm text-secondary">{t('number_of_practices_we_operate_in')}</div>
            </div>

            <div className="flex justify-end pr-5 md:pr-10">
              <span className="w-8 md:w-[60px] h-8 md:h-[60px] rounded-lg md:rounded-2xl flex items-center justify-center bg-info">
                <RiGlobalLine className="text-white text-md md:text-2xl" />
              </span>
            </div>
          </div>
          <Image className="w-[240px] md:w-auto" src={imageUrl(data.section2_image)} width={412} height={365} alt="cat" />
        </div>

        <div className="md:flex-1">
          <div className="mb-6 sub-heading" dangerouslySetInnerHTML={{ __html: data.section2_title }} />

          <div className="max-w-[512px] md:mb-8">
            {data.section2_description}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-6">
        <div className="shadow-paper rounded-2xl p-6 md:p-7">
          <Image
            className="mb-6 md:mb-8 w-6 md:w-auto"
            src="/images/icons/small-clock-icon.svg"
            alt="clock"
            width={32}
            height={32}
          />
          <div className="text-[32px] md:text-[52px] leading-10 md:leading-12 font-medium mb-1">
            {data.section2_card1_rating_number}
          </div>
          <div className="text-sm md:text-base text-secondary">
            {data.section2_card1_rating_desc}
          </div>
        </div>
        <div className="shadow-paper rounded-2xl p-7">
          <Image
            className="mb-6 md:mb-8 w-6 md:w-auto"
            src="/images/icons/small-desktop-icon.svg"
            alt="clock"
            width={32}
            height={32}
          />
          <div className="text-[32px] md:text-[52px] leading-10 md:leading-12 font-medium mb-1">
            {data.section2_card2_rating_number}
          </div>
          <div className="text-sm md:text-base text-secondary">
            {data.section2_card2_rating_desc}
          </div>
        </div>
        <div className="shadow-paper rounded-2xl p-7">
          <Image
            className="mb-6 md:mb-8 w-6 md:w-auto"
            src="/images/icons/small-chart-icon.svg"
            alt="clock"
            width={32}
            height={32}
          />
          <div className="text-[32px] md:text-[52px] leading-10 md:leading-12 font-medium mb-1">
            {data.section2_card3_amount}
          </div>
          <div className="text-sm md:text-base text-secondary">
            {data.section2_card3_amount_desc}
          </div>
        </div>
      </div>
    </section>
  )
}
