import { NewsCard } from "@/components/widgets";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  title: string;
}

export const NewSection: React.FC<Props> = ({ title }) => {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-20 pb-10">
      <div className="flex items-center mb-12">
        <h2 className="sub-heading" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="flex-1" />
        <button className="hidden md:block btn primary-outline-btn">{t('discover_all')}</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <NewsCard
          image={null}
          time="Sep 18, 2024"
          title={t('gen_x_and_millennials')}
          description={t('the_highest_percentage')}
        />
        <NewsCard
          image={null}
          time="Sep 18, 2024"
          title={t('home_delivery_why_are')}
          description={t('owners_who_must_collect')}
        />
        <NewsCard
          image={null}
          time="Sep 18, 2024"
          title={t('can_you_guess_the_top')}
          description={t('what_are_the_three_most')}
        />
      </div>

      <div className="block md:hidden flex justify-center pt-6">
        <button className="btn primary-outline-btn px-10">{t('discover_all')}</button>
      </div>
    </section>
  )
}
