import { FeatureCard } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const PremierVetAllianceSection = () => {
  const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="flex justify-between flex-col lg:flex-row mb-10">
        <div className="mb-6 lg:mb-0">
          <h2 className="sub-heading">{t('why_choose')}</h2>
          <h2 className="sub-heading"><span className="text-primary">{t('premier_vet')}</span></h2>
        </div>

        <div className="lg:max-w-[517px]">
          <p className="text-secondary body mb-3">
            {t('founded_in_2007')}
          </p>
          <p className="text-secondary body">
            {t('while_initially_focused')}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          image="check-mark-icon.svg"
          title={t('global_expertise_support')}
          description={t('our_market_leading_health')}
        />
        <FeatureCard
          image="notepad-icon.svg"
          title={t('customized_preventative')}
          description={t('our_market_leading_health')}
        />
        <FeatureCard
          image="display-icon.svg"
          title={t('technology_training')}
          description={t('our_market_leading_health')}
        />
      </div>
    </section>
  )
}
