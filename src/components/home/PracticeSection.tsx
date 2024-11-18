import { PracticeCard } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const PracticeSection = () => {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-12 text-left md:text-center">
        <h2 className="sub-heading mb-6">
          {t('empowering')} <span className="text-primary">{t('your_practice')}</span> {t('with_health_plans')}
        </h2>
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          {t('at_premier_vet_alliance')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="md:col-span-2">
          <PracticeCard
            image="Mask group.svg"
            variant="info"
            title={t('premier_pet_care_plan')}
            description={t('our_market_leading_health')}
          />
        </div>
        <div className="md:col-span-3">
          <PracticeCard
            image="Mask group_3.svg"
            title={t('post_2_pet')}
            description={t('affordable_and_convenient_home')}
            backgroundClassName="bg-[url('/images/post2pet-mobile.png')] md:bg-[url('/images/post2pet.png')] bg-right-top md:bg-right"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_4.svg"
            title={t('vet_2_pet')}
            description={t('the_new_communication_platform')}
            backgroundClassName="bg-[url('/images/vet2pet.png')] bg-right-top bg-57% md:bg-auto"
          />
        </div>
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_2.svg"
            title={t('training')}
            description={t('with_our_expertise_in_health')}
          />
        </div>
        <div className="col-span-2">
          <PracticeCard
            image="Mask group_5.svg"
            variant="info"
            title={t('technology')}
            description={t('our_innovative_financial_platform')}
          />
        </div>
      </div>
    </section>
  )
}
