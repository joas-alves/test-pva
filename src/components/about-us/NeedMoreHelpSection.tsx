import Image from "next/image";
import { useTranslations } from "next-intl";

export const NeedMoreHelpSection = () => {
  const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="bg-info rounded-3xl bg-[url('/images/double-circles.png')] bg-no-repeat bg-center bg-contain">
        <div className="px-6 pt-10 md:pt-20 mx-auto flex flex-col items-center">
          <h2 className="sub-heading text-white max-w-[624px] mb-3 md:mb-6">
            {t('need_more_help')}
          </h2>
          <p className="text-white text-center body max-w-[383px]">
            {t('find_the_answers_you')}:
          </p>
        </div>

        <div className="flex justify-between items-center lg:items-end flex-col lg:flex-row px-20">
          <div className="text-white flex flex-col items-center text-center pt-10 pb-10 md:pb-20">
            <Image
              className="mb-8 w-12 md:w-auto"
              src="/images/icons/envelop-icon.svg"
              alt="envelop-icon"
              width={80}
              height={80}
            />
            <div className="text-2xl font-bold mb-3">
              {t('send_us_message')}
            </div>
            <p className="mb-6 max-w-[335px]">
              {t('use_our_contract_form')}
            </p>
            <button className="btn info-contained-btn h-12 px-11">
              {t('book_a_demo')}
            </button>
          </div>
          <Image
            className="flex-1"
            src="/images/doctor-man.png"
            alt="doctor-man.png"
            width={264}
            height={360}
          />
          <div className="text-white flex flex-col items-center text-center pt-10 pb-10 md:pb-20">
            <Image
              className="mb-8 w-12 md:w-auto"
              src="/images/icons/phone-icon.svg"
              alt="envelop-icon"
              width={80}
              height={80}
            />
            <div className="text-2xl font-bold mb-3">
              {t('give_us_call')}
            </div>
            <p className="mb-8 max-w-[335px]">
              {t('call_us_directly')}
            </p>
            <div className="text-2xl font-medium">
              +44 117 472 5000
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
