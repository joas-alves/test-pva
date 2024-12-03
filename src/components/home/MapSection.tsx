import Image from "next/image";
// import { useTranslations } from "next-intl";
import { IHomePage } from "@/cms-models/home";
import React from "react";

type Props = {
  data: IHomePage;
};

export const MapSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Home');

  return (
    <section className="bg-dark-blue h-[60%] pt-10 md:pt-12 pb-20 md:pb-[15px] bg-[url('/images/map.png')] md:bg-none bg-no-repeat bg-center bg-140% bg-bottom bg-center-64% rounded-b-[35px] md:rounded-b-[45px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-6">
          <div
            className="text-white max-w-[804px] sub-heading text-left md:text-center mb-4 md:mb-6"
            dangerouslySetInnerHTML={{ __html: data.section6_title }}
          />
          <p className="text-gray-200 body text-left md:text-center max-w-[600px]">
            {data.section6_description}
          </p>
        </div>
        <div className="block md:hidden h-[132px]" />
        <div className="hidden md:flex justify-center mb-6">
          <div className="w-[860px] h-[500px] md:w-[860px] md:h-[500px] rounded-full overflow-hidden flex justify-center items-center bg-dark-blue">
            <Image
              className="hidden md:block object-cover rounded-b-[30px]"
              src="/images/map.png"
              width={1280}
              height={500}
              alt="map"
            />
          </div>
        </div>

        <div className="flex gap-6 justify-between mx-auto w-full mb-10 sm:w-3/5 text-white -mt-[20%]">
          <div className="flex flex-col items-center">
            <div className="text-[48px] md:text-[120px] font-bold">
              {data.section6_practices_number}
            </div>
            <div className="text-sm md:text-lg font-light">
              {data.section6_practices_text}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[48px] md:text-[120px] font-bold">
              {data.section6_countries_number}
            </div>
            <div className="text-sm md:text-lg font-light">
              {data.section6_countries_text}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[48px] md:text-[120px] font-bold">
              {data.section6_continents_number}
            </div>
            <div className="text-sm md:text-lg font-light">
              {data.section6_continents_text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
