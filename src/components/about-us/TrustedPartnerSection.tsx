import Image from "next/image";
import { SignUpInput } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const TrustedPartnerSection = () => {
  const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row gap-10 sm:gap-6">
        <div className="flex-shrink-0">
          <Image className="hidden md:block" src="/images/trusted-partner-doctor-dog.png" width={302} height={624} alt="dog" />
          <Image className="block md:hidden w-full" src="/images/hero-dog-doctor-mobile.png" width={327} height={240} alt="dog" />
        </div>
        <div className="flex flex-col">
          <h1 className="heading mb-8 sm:mb-20 md:text-right">
            {t('your')} <span className="text-primary">{t('trusted_partner')}</span> {t('in_pet_wellness')}
          </h1>
          <div className="flex-1 flex justify-between w-full">
            <Image className="hidden lg:block" src="/images/trusted-partner-doctor-small-dog.png" width={301} height={365} alt="dog" />

            <div className="flex flex-col">
              <div className="body text-secondary max-w-[517px] mb-3 sm:mb-6">
                <p className="mb-3">
                  {t('premier_vet_alliance')}
                </p>
                <p>
                  {t('we_provide_technology')}
                </p>
              </div>

              <SignUpInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
