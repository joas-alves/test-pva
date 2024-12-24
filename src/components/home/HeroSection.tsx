import { IHomePage } from "@/cms-models/home";
import { SignUpInput } from "@/components/widgets";
import { imageUrl } from "@/utils";
import Image from "next/image";
import React from "react";

type Props = {
  data: IHomePage;
};

export const HeroSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-6 lg:items-start">
        <div className="flex flex-col items-start">
          <h1
            className="heading mb-5 sm:mb-8 hero-section-title"
            dangerouslySetInnerHTML={{
              __html: (data.section1_title || "").replace(/<p>&nbsp;<\/p>/g, ""),
            }}
          />
          <div className="flex-1 flex justify-between w-full items-start">
            <div className="flex flex-col w-full gap-8">
              <p
                className="body text-secondary lg:max-w-[517px] mb-3 sm:mb-6"
                dangerouslySetInnerHTML={{ __html: data.section1_description }}
              />
              <div className="flex justify-center lg:justify-start">
                <SignUpInput />
              </div>
              {data.section1_rating_image && (
                <div className="mx-auto lg:mx-0">
                  <Image
                    className=""
                    src={imageUrl(data.section1_rating_image)}
                    width={410}
                    height={187}
                    alt="generate extra euro 350,000"
                  />
              </div>
              ) }
              
            </div>
            <Image
              className="hidden xl:block w-full max-w-96 object-contain -mt-6"
              src={imageUrl(data.section1_image1)}
              width={301}
              height={365}
              alt="dog"
            />
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            className="hidden lg:block h-full object-contain"
            src={imageUrl(data.section1_image2)}
            width={302}
            height={624}
            alt="girl and dog"
          />
          <div className="flex lg:hidden gap-3 self-center items-center justify-center max-h-96">
            <Image
              className="w-full h-[300px] object-contain"
              src={imageUrl(data.section1_image1)}
              width={301}
              height={365}
              alt="dog"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
