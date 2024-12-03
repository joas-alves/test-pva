// import { useTranslations } from 'next-intl';

import Image from "next/image";
import { SignUpInput } from "@/components/widgets";
import { MdStarRate } from "react-icons/md";
import { IHomePage } from "@/cms-models/home";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  data: IHomePage;
}

export const HeroSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Home');
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10 sm:gap-6">
        <div className="flex flex-col">
          <h1 className="heading mb-5 sm:mb-8" dangerouslySetInnerHTML={{ __html: data.section1_title }} />
          <div className="flex-1 flex">
            <div className="flex flex-col">
              <p className="body text-secondary max-w-[517px] mb-3 sm:mb-6" dangerouslySetInnerHTML={{ __html: data.section1_description }}/>

              <SignUpInput />

              {/* <div className="flex-1" />

              <div className="hidden md:grid w-full max-w-[410px] rounded-3xl shadow-paper relative grid-cols-2 gap-7">
                <div>
                  <Image className="absolute bottom-0 left-6" src={imageUrl(data.section1_rating_image)} width={151} height={187} alt="customer-dog" />
                </div>
                <div className="pt-4 pb-7">
                  <MdStarRate className="text-warning ml-20 text-3xl" />
                  <div className="head-value">{data.section1_rating_number}</div>
                  <div className="text-secondary text-sm">{data.section1_rating_text}</div>
                </div>
              </div> */}
            </div>
            <Image className="hidden lg:block" src={imageUrl(data.section1_image1)} width={301} height={365} alt="dog" />
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image className="hidden md:block" src={imageUrl(data.section1_image2)} width={302} height={624} alt="dog" />
          <div className={"flex gap-3 self-center items-center justify-center lg:block "}>
            <Image className="block md:hidden w-[40%] self-center lg:self-auto lg:w-full" src={imageUrl(data.section1_image2)} width={327} height={240} alt="dog" />
            <Image className="w-[120px] h-[160px] lg:hidden" src={imageUrl(data.section1_image1)} width={301} height={365} alt="dog" />
          </div>

          {/* <div className="block md:hidden w-full rounded-3xl shadow-paper relative grid grid-cols-2 gap-7 mt-10"> */}
            {/* <div>
              <Image className="absolute bottom-0 left-6 w-[115px] md:w-auto" src={imageUrl(data.section1_rating_image)} width={151} height={187} alt="customer-dog" />
            </div> */}
            {/* <div className="pt-4 pb-7">
              <MdStarRate className="text-warning ml-20 text-3xl" />
              <div className="head-value mb-4">{data.section1_rating_number}</div>
              <div className="text-secondary text-xs md:text-sm">{data.section1_rating_text}</div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}
