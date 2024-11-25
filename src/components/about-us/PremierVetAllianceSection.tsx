import { FeatureCard } from "@/components/widgets";
// import { useTranslations } from "next-intl";
import { IAboutPage } from "@/cms-models/about";
import React from "react";

type Props = {
  data: IAboutPage;
}

export const PremierVetAllianceSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="flex justify-between flex-col lg:flex-row mb-10">
        <div className="mb-6 lg:mb-0 sub-heading" dangerouslySetInnerHTML={{ __html: data.section2_title }} />

        <div className="lg:max-w-[517px]">
          <p className="text-secondary body mb-3">
            {data.section2_description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          image="check-mark-icon.svg"
          title={data.section2_card1_title}
          description={data.section2_card1_description}
          cms
        />
        <FeatureCard
          image="notepad-icon.svg"
          title={data.section2_card2_title}
          description={data.section2_card2_description}
          cms
        />
        <FeatureCard
          image="display-icon.svg"
          title={data.section2_card3_title}
          description={data.section2_card3_description}
          cms
        />
      </div>
    </section>
  )
}
