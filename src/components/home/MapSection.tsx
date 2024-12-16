import { IHomePage } from "@/cms-models/home";
import React from "react";

type Props = {
  data: IHomePage;
};

export const MapSection: React.FC<Props> = ({ data }) => {
  return (
    <section
      className="flex flex-col justify-start bg-dark-blue h-[60%] pt-10 md:pt-12 pb-20 md:pb-[15px] bg-cover bg-center rounded-b-[35px] md:rounded-b-[45px]"
      style={{
        backgroundImage: `url('/images/map.png')`, // Set the image as background
      }}
    >
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

        {/* Removed image div, as the image is now a background */}
        <div className="flex gap-6 justify-between mx-auto w-full mb-10 sm:w-3/5 text-white flex-wrap">
          <div className="flex flex-col items-center mx-auto">
            <div className="text-[48px] lg:text-[120px] font-bold">
              {data.section6_practices_number}
            </div>
            <div className="text-sm lg:text-lg font-light">
              {data.section6_practices_text}
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <div className="text-[48px] lg:text-[120px] font-bold">
              {data.section6_countries_number}
            </div>
            <div className="text-sm lg:text-lg font-light">
              {data.section6_countries_text}
            </div>
          </div>
          <div className="flex flex-col items-center mx-auto">
            <div className="text-[48px] lg:text-[120px] font-bold">
              {data.section6_continents_number}
            </div>
            <div className="text-sm lg:text-lg font-light">
              {data.section6_continents_text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
