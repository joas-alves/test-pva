import { BookDemoForm } from "@/components/widgets";
import { PiSealCheckFill } from "react-icons/pi";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const FullPotentialSection = () => {
  const t = useTranslations('Book');

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[133px]">
        <div>
          <div className="mb-6">
            <h2 className="sub-heading">{t('unlock_the')} <span className="text-primary">{t('full_potential')}</span> {t('of_your_veterinary')}</h2>
          </div>
          <div className="body text-secondary mb-10 md:mb-16">
            {t('discover_how_premier')}
          </div>

          <div className="block lg:hidden mb-10">
            <BookDemoForm />
          </div>

          <div className="relative md:pt-[260px] flex flex-col-reverse md:flex-row justify-end">
            <div className="md:absolute top-0 left-0 z-1 w-full -mt-10 md:mt-0 md:w-[411px] bg-[url('/images/double-circles.png')] bg-no-repeat rounded-2xl md:rounded-3xl shadow-paper px-4 md:px-8 py-6 md:py-9 bg-white">
              <div className="text-[32px] font-bold mb-6">{t('what_can_i_expect')}</div>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <PiSealCheckFill className="text-primary-light text-xl translate-y-0.5" />
                  <div className="flex-1">
                    {t('tailored_health_plans')}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiSealCheckFill className="text-primary-light text-xl translate-y-0.5" />
                  <div className="flex-1">
                    {t('streamlined_technology')}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiSealCheckFill className="text-primary-light text-xl translate-y-0.5" />
                  <div className="flex-1">
                    {t('10_years_of_experience')}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PiSealCheckFill className="text-primary-light text-xl translate-y-0.5" />
                  <div className="flex-1">
                    {t('trusted_by_veterinary')}
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="w-full md:w-auto"
              src="/images/full-potential-cat.png"
              width={410}
              height={362}
              alt="cat"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <BookDemoForm />
        </div>
      </div>
    </section>
  )
}
