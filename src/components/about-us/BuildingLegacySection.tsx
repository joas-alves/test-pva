import { useTranslations } from "next-intl";

export const BuildingLegacySection = () => {
  const t = useTranslations('About');

  return (
    <section className="bg-dark-blue pt-14 md:pt-20 pb-16 md:pb-[100px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-white max-w-[804px] sub-heading text-left md:text-center mb-4 md:mb-6">
            {t('building_a_legacy_of')}
          </h2>
          <p className="text-gray-200 body text-left md:text-center max-w-[600px]">
            {t('from_small_uk_veterinary')}
          </p>
        </div>

        <div className="text-white">
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3">
                {t('founded_bristol')}
              </div>
              <div className="text-gray-400">
                {t('pva_began_as_small_group')}
              </div>
            </div>

            <div className="text-[64px] font-bold flex flex-col justify-end text-center">
              2012
            </div>

            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3">
                {t('entering_us_market')}
              </div>
              <div className="text-gray-400">
                {t('building_on_its_success')}
              </div>
            </div>

            <div className="text-[64px] font-bold flex flex-col justify-end text-center">
              {t('today')}
            </div>
          </div>

          <div className="px-[133px] mt-5">
            <div className="w-full border-t border-dashed border-t-2 border-primary-light flex justify-between">
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="text-[64px] font-bold text-center">
              2007
            </div>

            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3">
                {t('expanding_across_europe')}
              </div>
              <div className="text-gray-400">
                {t('pva_extended_its_reach')}
              </div>
            </div>

            <div className="text-[64px] font-bold text-center">
              2017
            </div>

            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3">
                {t('global_veterinary_partner')}
              </div>
              <div className="text-gray-400">
                {t('now_partnering_with')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
