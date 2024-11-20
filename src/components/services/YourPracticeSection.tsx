import { FeatureCard } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const YouPracticeSection = () => {
  const t = useTranslations('Services');

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-8 md:mb-12 text-center">
        <h2 className="sub-heading mb-6">
          {t('key_benefits')} <span className="text-primary">{t('your_practice')}</span>
        </h2>
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          {t('discover_how_our_solutions')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-6">
        <FeatureCard
          image="chat-message-icon.svg"
          variant="info"
          title={t('communication')}
          description={t('a_faster_way_to_communicate')}
        />
        <FeatureCard
          image="check-mark-icon.svg"
          title={t('convenience')}
          description={t('available_to_download')}
        />
        <FeatureCard
          variant="info"
          image="puzzle-icon.svg"
          title={t('integration')}
          description={t('view_manage_and_amend')}
        />
        <FeatureCard
          image="handshake-icon.svg"
          title={t('client_satisfaction')}
          description={t('listen_to_your_audience')}
        />
        <FeatureCard
          image="clock-icon.svg"
          variant="info"
          title={t('time_pressure')}
          description={t('designed_to_relative')}
        />
        <FeatureCard
          image="dyamond-icon.svg"
          title={t('added_value')}
          description={t('take_advantage')}
        />
      </div>
    </section>
  )
}
