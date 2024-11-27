import Image from "next/image";
import { PiChartLineUpLight } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { useTranslations } from "next-intl";
import { IHomePage } from "@/cms-models/home";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  data: IHomePage;
}

export const ElevatingSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Home');
  const tc = useTranslations('Common');

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="md:flex-1">
          <div className="mb-6 sub-heading" dangerouslySetInnerHTML={{ __html: data.section2_title }}>

          </div>

          <div className="max-w-[512px] mb-8">
            <p className="text-secondary body mb-3">
              {data.section2_description}
            </p>
            {/*<p className="text-secondary body">*/}
            {/*  {t('with_over_a_decade_of_experience')}*/}
            {/*</p>*/}
          </div>

          <button className="btn primary-outline-btn">{tc('learn_more')}</button>
        </div>

        <div className="flex items-start">
          <div className="w-[154px] sm:w-[302px] flex-shrink-0 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-3xl shadow-paper px-4 md:px-7 py-6 md:py-9 mt-10 md:mt-20 -mr-20 relative bg-white">
            <div className="pl-5 md:pl-10">
              <span className="w-8 md:w-[60px] h-8 md:h-[60px] rounded-lg md:rounded-2xl flex items-center justify-center bg-primary">
                <PiChartLineUpLight className="text-white text-md md:text-2xl" />
              </span>
            </div>

            <div className="text-center py-5 md:py-9">
              <div className="sub-head-value mb-2">{data.section2_practice_number}</div>
              <div className="text-xs md:text-sm text-secondary">{data.section2_practice_text}</div>
            </div>

            <div className="flex justify-end pr-5 md:pr-10">
              <span className="w-8 md:w-[60px] h-8 md:h-[60px] rounded-lg md:rounded-2xl flex items-center justify-center bg-info">
                <RiGlobalLine className="text-white text-md md:text-2xl" />
              </span>
            </div>

          </div>
          <Image className="w-[240px] md:w-auto" src={imageUrl(data.section2_image)} width={412} height={365} alt="cat" />
        </div>
      </div>
    </section>
  )
}
