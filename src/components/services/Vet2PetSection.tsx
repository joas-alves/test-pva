import Image from "next/image";
import { MdStarRate } from "react-icons/md";
import { useTranslations } from "next-intl";

export const Vet2PetSection = () => {
  const t = useTranslations('Services');

  return (
    <section className="container mx-auto py-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          <h1 className="heading mb-5 sm:mb-8 flex items-center gap-5">
            <span className="p-4 rounded-2xl shadow-paper">
              <Image src="/images/vet2pet-logo.png" alt="vet2pet" width={61} height={61} />
            </span>
            {t('vet2')}<span className="text-primary">{t('pet')}</span>
          </h1>
          <div className="flex-1 flex">
            <div className="flex-1 flex flex-col">
              <p className="body text-secondary max-w-[517px] mb-3 sm:mb-6">
                {t('the_perfect_addition_to_premier')}
              </p>

              <div className="flex gap-2">
                <div className="rounded-2xl border border-primary py-3.5 px-6 flex items-center gap-2.5">
                  <Image
                    src="/images/icons/apple-store-icon.svg"
                    alt="apple-store"
                    width={27}
                    height={27}
                  />
                  <div className="text-dark-blue-100">
                    <p className="text-xs">{t('download_on_the')}</p>
                    <p className="font-bold">{t('app_store')}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary py-3.5 px-6 flex items-center gap-2.5">
                  <Image
                    src="/images/icons/google-play-icon.svg"
                    alt="google-play"
                    width={27}
                    height={27}
                  />
                  <div className="text-dark-blue-100">
                    <p className="text-xs">{t('download_on_the')}</p>
                    <p className="font-bold">{t('google_play')}</p>
                  </div>
                </div>
              </div>

              <div className="flex-1" />

              <div className="hidden md:grid w-full max-w-[302px] rounded-3xl shadow-paper relative grid-cols-2 gap-7">
                <div className="pt-4 pb-7 pl-8">
                  <MdStarRate className="text-warning ml-24 text-4xl -mb-5" />
                  <div className="head-value">4,5</div>
                  <div className="text-secondary text-sm">{t('trusted_by_vets')}</div>
                </div>
                <Image className="absolute bottom-0 -right-4" src="/images/vet2pet-dog.png" width={151} height={187} alt="customer-dog" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 flex justify-end relative">
          <div className="shadow-paper rounded-2xl p-8 max-w-[410px] absolute bg-white -left-10 bottom-20">
            <div className="text-xl mb-12">
              {t('vet2pet_has_streamlined')}
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[46px] h-[46px] rounded-full bg-gray-100"></div>
              <div>
                <p className="font-semibold">Katie W.</p>
                <p className="text-sm text-secondary">Anderson Vets.</p>
              </div>
            </div>
          </div>
          <Image
            className="hidden md:block"
            src="/images/vet2pet-woman-doctor-dog.png"
            width={411}
            height={600}
            alt="dog"
          />
          <Image
            className="block md:hidden w-full"
            src="/images/hero-dog-doctor-mobile.png"
            width={327}
            height={240}
            alt="dog"
          />
        </div>
      </div>
    </section>
  )
}
