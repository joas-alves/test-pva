import { FeatureCard } from "@/components/widgets";
import { IServicePage } from "@/cms-models/service";
import React from "react";

type Props = {
  data: IServicePage;
}

export const YouPracticeSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('Services');

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-8 md:mb-12 text-center">
        <h2 className="sub-heading mb-6" dangerouslySetInnerHTML={{ __html: data.section3_title }} />
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          {data.section3_description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6 mb-6">
        <FeatureCard
          image="chat-message-icon.svg"
          variant="info"
          title={data.section3_card1_title}
          description={data.section3_card1_description}
          cms
        />
        <FeatureCard
          image="check-mark-icon.svg"
          title={data.section3_card2_title}
          description={data.section3_card2_description}
          cms
        />
        <FeatureCard
          variant="info"
          image="puzzle-icon.svg"
          title={data.section3_card3_title}
          description={data.section3_card3_description}
          cms
        />
        <FeatureCard
          image="handshake-icon.svg"
          title={data.section3_card4_title}
          description={data.section3_card4_description}
          cms
        />
        <FeatureCard
          image="clock-icon.svg"
          variant="info"
          title={data.section3_card5_title}
          description={data.section3_card5_description}
          cms
        />
        <FeatureCard
          image="dyamond-icon.svg"
          title={data.section3_card6_title}
          description={data.section3_card6_description}
          cms
        />
      </div>
    </section>
  )
}
