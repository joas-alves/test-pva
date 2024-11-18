import Image from "next/image";
import { useTranslations } from "next-intl";

export const AdvantagesSection = () => {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <h2 className="sub-heading mb-12">
        {t('premier_vet')}: <span className="text-primary">{t('the_advantages')}</span>
        <div>{t('of_partnership')}</div>
      </h2>
      <div className="flex justify-between items-start flex-col lg:flex-row">
        <div className="relative px-[33px] md:px-[109px] py-10 md:py-[85px]">
          <div className="text-center rounded-2xl shadow-paper w-[113px] md:w-[192px] flex flex-col items-center pt-4 absolute top-0 left-0 bg-white">
            <div className="text-info sub-value mb-2">10+</div>
            <div className="text-xs sm:text-sm text-secondary mb-2">{t('years_of_experience')}</div>
            <Image className="" src="/images/small-dog.png" alt="dog" width={149} height={116} />
          </div>
          <Image src="/images/advantages-doctor.png" width={410} height={450} alt="doctor" />
          <div className="flex items-center justify-between flex-col md:flex-row rounded-2xl shadow-paper w-[113px] md:w-[302px] bg-white absolute bottom-0 right-0">
            <div className="pb-2 p-5 px-2 md:p-8 md:pr-0 text-center md:text-left">
              <div className="text-info sub-value mb-2">2M+</div>
              <div className="text-xs sm:text-sm text-secondary">{t('pets_are_enrolled')}</div>
            </div>
            <Image className="w-[80px] md:w-auto" src="/images/small-cat.png" alt="cat" width={130} height={139} />
          </div>
        </div>

        <div className="max-w-full lg:max-w-[519px]">
          <div className="mb-8 md:mb-10">
            <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] rounded-2xl flex items-center justify-center bg-info mb-3">
              <Image src="/images/advantage-end-to-end.svg" alt="end-to-end" width={24} height={24} />
            </div>
            <div className="title mb-3">
              {t('end_to_end_veterinary')}
            </div>
            <p className="text-secondary body">
              {t('we_provide_a_complete')}
            </p>
          </div>

          <div className="mb-8 md:mb-10">
            <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] rounded-2xl flex items-center justify-center bg-primary mb-3">
              <Image src="/images/advantage-smart-tech.svg" alt="smart-tech" width={24} height={24} />
            </div>
            <div className="title mb-3">
              {t('smart_technology_for_seamless')}
            </div>
            <p className="text-secondary body">
              {t('benefit_from_our_cutting_edge')}
            </p>
          </div>

          <div className="mb-8 md:mb-10">
            <div className="w-[44px] md:w-[52px] h-[44px] md:h-[52px] rounded-2xl flex items-center justify-center bg-info mb-3">
              <Image src="/images/advantage-decades.svg" alt="decades" width={24} height={24} />
            </div>
            <div className="title mb-3">
              {t('decades_of_experience')}
            </div>
            <p className="text-secondary body">
              {t('with_over_a_decade')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
