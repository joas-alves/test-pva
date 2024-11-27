import { FeatureCard } from "@/components/widgets";
import Image from "next/image";
// import { useTranslations } from "next-intl";
import { IAboutPage } from "@/cms-models/about";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  data: IAboutPage;
}

export const ExperienceUnderstandingSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-8 md:mb-12 text-left md:text-center">
        <h2 className="sub-heading" dangerouslySetInnerHTML={{ __html: data.section3_title }} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="md:col-span-3">
          <Image
            className="w-full"
            src={imageUrl(data.section3_image)}
            alt="doctors"
            width={737}
            height={836}
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-6">
          <FeatureCard
            image="chart-icon.svg"
            variant="info"
            title={data.section3_card1_title}
            description={data.section3_card1_description}
            cms
          />
          <FeatureCard
            image="handshake-icon.svg"
            title={data.section3_card2_title}
            description={data.section3_card2_description}
            cms
          />
        </div>
      </div>
    </section>
  )
}
