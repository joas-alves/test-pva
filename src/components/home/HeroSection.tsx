import { useTranslations } from 'next-intl';

import Image from "next/image";
import { SignUpInput } from "@/components/widgets";
import { MdStarRate } from "react-icons/md";

export const HeroSection = () => {
  const t = useTranslations('Home');

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10 sm:gap-6">
        <div className="flex flex-col">
          <h1 className="heading mb-5 sm:mb-8">
            {t('global_leader_in_preventative')} <span className="text-primary">{t('health_care')}</span>
          </h1>
          <div className="flex-1 flex">
            <div className="flex-1 flex flex-col">
              <p className="body text-secondary max-w-[517px] mb-3 sm:mb-6">
                {t('utilizing_advanced_technology_comprehensive')}
              </p>

              <SignUpInput />

              <div className="flex-1" />

              <div className="hidden md:grid w-full max-w-[410px] rounded-3xl shadow-paper relative grid-cols-2 gap-7">
                <div>
                  <Image className="absolute bottom-0 left-6" src="/images/customer-dog.png" width={151} height={187} alt="customer-dog" />
                </div>
                <div className="pt-4 pb-7">
                  <MdStarRate className="text-warning ml-20 text-3xl" />
                  <div className="head-value">4,5</div>
                  <div className="text-secondary text-sm">{t('customer_choice')}</div>
                </div>
              </div>
            </div>
            <Image className="hidden lg:block" src="/images/hero-small-dog.png" width={301} height={365} alt="dog" />
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image className="hidden md:block" src="/images/hero-dog-doctor.png" width={302} height={624} alt="dog" />
          <Image className="block md:hidden w-full" src="/images/hero-dog-doctor-mobile.png" width={327} height={240} alt="dog" />

          <div className="block md:hidden w-full rounded-3xl shadow-paper relative grid grid-cols-2 gap-7 mt-10">
            <div>
              <Image className="absolute bottom-0 left-6 w-[115px] md:w-auto" src="/images/customer-dog.png" width={151} height={187} alt="customer-dog" />
            </div>
            <div className="pt-4 pb-7">
              <MdStarRate className="text-warning ml-20 text-3xl" />
              <div className="head-value mb-4">4,5</div>
              <div className="text-secondary text-xs md:text-sm">{t('customer_choice')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
