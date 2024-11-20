import { PracticeCard } from "@/components/widgets";
// import { useTranslations } from "next-intl";
import { IHomeCMS } from "@/cms-models/home";
import React from "react";

type Props = {
  data: IHomeCMS;
}

export const PracticeSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-12 text-left md:text-center">
        <div className="sub-heading mb-6" dangerouslySetInnerHTML={{ __html: data.section3_title }}>
        </div>
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          {data.section3_description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="md:col-span-2">
          <PracticeCard
            image="Mask group.svg"
            variant="info"
            title={data.section3_card1_title}
            description={data.section3_card1_description}
          />
        </div>
        <div className="md:col-span-3">
          <PracticeCard
            image="Mask group_3.svg"
            title={data.section3_card2_title}
            description={data.section3_card2_description}
            backgroundClassName="bg-[url('/images/post2pet-mobile.png')] md:bg-[url('/images/post2pet.png')] bg-right-top md:bg-right"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_4.svg"
            title={data.section3_card3_title}
            description={data.section3_card3_description}
            backgroundClassName="bg-[url('/images/vet2pet.png')] bg-right-top bg-57% md:bg-auto"
          />
        </div>
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_2.svg"
            title={data.section3_card4_title}
            description={data.section3_card4_description}
          />
        </div>
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_5.svg"
            variant="info"
            title={data.section3_card5_title}
            description={data.section3_card5_description}
          />
        </div>
      </div>
    </section>
  )
}
