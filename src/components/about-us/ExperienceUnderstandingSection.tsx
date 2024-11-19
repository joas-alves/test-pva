import { FeatureCard } from "@/components/widgets";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const ExperienceUnderstandingSection = () => {
  const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="max-w-[954px] w-full mx-auto mb-8 md:mb-12 text-left md:text-center">
        <h2 className="sub-heading">
          <span className="text-primary">{t('experience_and_understanding')}</span> {t('you_can_trust')}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="md:col-span-3">
          <Image
            className="w-full"
            src="/images/experience-understanding-doctors.png"
            alt="doctors"
            width={737}
            height={836}
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-6">
          <FeatureCard
            image="chart-icon.svg"
            variant="info"
            title={t('commitment_to_excellence')}
            description={t('our_vision_remains')}
          />
          <FeatureCard
            image="handshake-icon.svg"
            title={t('insight_driven_support')}
            description={t('our_industry_experience')}
          />
        </div>
      </div>
    </section>
  )
}
