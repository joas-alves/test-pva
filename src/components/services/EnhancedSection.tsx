import { IServicePage } from "@/cms-models/service";
import { imageUrl, LanguageCode, replaceCurrency } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { PiChartLineUpLight } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";
import { NextRouter, useRouter } from "next/router";

type Props = {
  data: IServicePage;
};

export const EnhancedSection: React.FC<Props> = ({ data }) => {
  const t = useTranslations("Services");
  const router: NextRouter = useRouter();

  return (
    <section className="container mx-auto py-10 flex flex-col gap-20">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center md:items-start mx-auto">
            <div className="bg-white rounded-3xl shadow-paper p-6 md:p-9 w-full max-w-[302px] flex-shrink-0 relative z-10 md:mt-20 md:-mr-20">
              <div className="flex justify-start mb-4">
                <span className="w-10 md:w-[60px] h-10 md:h-[60px] bg-primary rounded-lg md:rounded-2xl flex items-center justify-center">
                  <PiChartLineUpLight className="text-white text-xl md:text-2xl" />
                </span>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {data.section2_practice_number}
                </div>
                <div className="text-sm md:text-base text-secondary">
                  {t("number_of_practices_we_operate_in")}
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <span className="w-10 md:w-[60px] h-10 md:h-[60px] bg-info rounded-lg md:rounded-2xl flex items-center justify-center">
                  <RiGlobalLine className="text-white text-xl md:text-2xl" />
                </span>
              </div>
            </div>
            <div className="relative z-0">
              <Image
                className="rounded-3xl w-full shadow-md"
                src={imageUrl(data.section2_image)}
                width={412}
                height={365}
                alt="dog"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col gap-4">
            <h2 dangerouslySetInnerHTML={{ __html: data.section2_title }} />
            <p>{data.section2_description}</p>
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
          <div className="text-[32px] md:text-[52px] leading-10 md:leading-12 font-medium mb-1 notranslate">
            {replaceCurrency(
              data.section2_card3_amount,
              router.locale as LanguageCode
            )}
          </div>
          <div className="text-sm md:text-base text-secondary">
            {data.section2_card3_amount_desc}
          </div>
        </div>
      </div>
    </section>
  );
};
