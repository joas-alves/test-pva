import Image from "next/image";
import { useTranslations } from "next-intl";

export const DiscoverSection = () => {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <div className="bg-info rounded-3xl bg-[url('/images/double-circles.png')] bg-no-repeat bg-center md:bg-right relative overflow-hidden lg:overflow-visible">
        <div className="px-6 pt-10 md:p-20 mb-[300px] md:mb-0">
          <h2 className="sub-heading text-white max-w-[624px] mb-3 md:mb-6">
            {t('discover_how_we_can_help')}
          </h2>
          <p className="mb-6 md:mb-8 text-white body max-w-[383px]">
            {t('book_a_demo_to_see')}
          </p>
          <button className="btn info-contained-btn h-12 px-11">
            {t('book_a_demo')}
          </button>
        </div>

        <Image
          className="hidden lg:block absolute bottom-0 right-0"
          src="/images/doctor-man.png"
          alt="doctor-man.png"
          width={684}
          height={561}
        />

        <Image
          className="block lg:hidden absolute bottom-0 right-0"
          src="/images/doctor-man-mobile.png"
          alt="doctor-man.png"
          width={324}
          height={266}
        />
      </div>
    </section>
  )
}
