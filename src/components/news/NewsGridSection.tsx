import { NewsCard } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const NewsGridSection = () => {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        <NewsCard
          image="new-chart.png"
          time="Sep 18, 2024"
          title={t('gen_x_and_millennials')}
          description={t('the_highest_percentage')}
        />
        <NewsCard
          image="new-talking.png"
          time="Sep 18, 2024"
          title={t('home_delivery_why_are')}
          description={t('owners_who_must_collect')}
        />
        <NewsCard
          image="new-cat-dot.png"
          time="Sep 18, 2024"
          title={t('can_you_guess_the_top')}
          description={t('what_are_the_three_most')}
        />
        <NewsCard
          image="new-chart.png"
          time="Sep 18, 2024"
          title={t('gen_x_and_millennials')}
          description={t('the_highest_percentage')}
        />
        <NewsCard
          image="new-talking.png"
          time="Sep 18, 2024"
          title={t('home_delivery_why_are')}
          description={t('owners_who_must_collect')}
        />
        <NewsCard
          image="new-cat-dot.png"
          time="Sep 18, 2024"
          title={t('can_you_guess_the_top')}
          description={t('what_are_the_three_most')}
        />
      </div>

      <div>

      </div>
    </section>
  )
}
