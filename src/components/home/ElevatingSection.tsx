import { IHomePage } from "@/cms-models/home";
import { imageUrl } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiChartLineUpLight } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";

type Props = {
  data: IHomePage;
};

export const ElevatingSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Home');
  const tc = useTranslations("Common");

  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="md:flex-1">
          <div
            className="mb-6 sub-heading"
            dangerouslySetInnerHTML={{ __html: data.section2_title }}
          ></div>

          <div className="lg:max-w-[512px] mb-8">
            <p
              className="text-secondary body mb-3"
              dangerouslySetInnerHTML={{ __html: data.section2_description }}
            />
            {/*<p className="text-secondary body">*/}
            {/*  {t('with_over_a_decade_of_experience')}*/}
            {/*</p>*/}
          </div>

          <Link href="/services/premier-pet-care-plan">
            <button className="btn primary-outline-btn" type="button">
              {tc("learn_more")}
            </button>
          </Link>
        </div>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center md:items-start">
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
                {data.section2_practice_text}
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
    </section>
  );
};
