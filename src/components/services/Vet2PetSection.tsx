import { IServicePage } from "@/cms-models/service";
import { imageUrl } from "@/utils";
import Image from "next/image";
import React from "react";

type Props = {
  data: IServicePage;
};

export const Vet2PetSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="container mx-auto pt-5 pb-10 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col">
          <h1 className="heading mb-5 sm:mb-8 flex items-center gap-5">
            <span className="p-2.5 sm:p-4 rounded-2xl shadow-paper">
              <Image
                src="/images/vet2pet-logo.png"
                alt="vet2pet"
                width={61}
                height={61}
              />
            </span>
            <div dangerouslySetInnerHTML={{ __html: data.section1_title }} />
          </h1>
          <div className="flex-1 flex">
            <div className="flex-1 flex flex-col">
              <p className="body text-secondary max-w-[517px] mb-3 sm:mb-6">
                {data.section1_description}
              </p>

              <div className="flex-1" />

              {/* <div className="hidden lg:grid w-full max-w-[250px] rounded-3xl shadow-paper relative grid-cols-1 gap-7 "> */}
              {/* <div className="pt-4 pb-7 pl-8">
                  <MdStarRate className="text-warning ml-24 text-4xl -mb-5" />
                  <div className="head-value">4,5</div>
                  <div className="text-secondary text-sm">
                    {data.section1_rating_text}
                  </div>
                </div> */}
              {/*<Image className="absolute bottom-0 -right-4" src={imageUrl(data.section1_rating_image)} width={151} height={187} alt="customer-dog" />*/}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 flex flex-col-reverse sm:flex-row sm:justify-end relative">
          <div className="shadow-paper rounded-2xl p-6 sm:p-8 w-full sm:max-w-[410px] -mt-10 sm:mt-0 sm:absolute bg-white -left-10 bottom-20">
            <div className="text-xl mb-4 sm:mb-12">
              {data.section1_top_review_text}
            </div>
            <div className="flex items-center gap-4">
              {/* <Image
                className="rounded-full bg-gray-100"
                width={46}
                height={46}
                src={imageUrl(data.section1_reviewer_image)}
                alt="reviewer"
              /> */}
              <div>
                <p className="font-semibold">{data.section1_reviewer_name}</p>
                <p className="text-sm text-secondary">
                  {data.section1_reviewer_office}
                </p>
              </div>
            </div>
          </div>
          <Image
            className="hidden sm:block"
            src={imageUrl(data.section1_logo)}
            width={411}
            height={600}
            alt="dog"
          />
          <Image
            className="block sm:hidden w-full"
            src={imageUrl(data.section1_logo)}
            width={327}
            height={240}
            alt="dog"
          />
        </div>
      </div>
    </section>
  );
};
