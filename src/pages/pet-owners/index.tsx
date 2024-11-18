import { ContactUsForm } from "@/components/widgets";
import Image from "next/image";
import { FAQSection } from "@/components/home";
import { useTranslations } from "next-intl";

export default function PetOwners() {
  const t = useTranslations('Owners');

  return (
    <div>
      <section className="container mx-auto pt-10 pb-40">
        <div className="grid grid-cols-2">
          <div className="max-w-[519px]">
            <h1 className="sub-heading mb-6">
              <span className="text-primary">{t('for_pet')}</span> {t('owners')}
            </h1>
            <p className="body text-secondary max-w-[465px] mb-10">
              {t('have_a_question_or_need')}
            </p>
            <ContactUsForm />
          </div>

          <div className="relative">
            <Image
              src="/images/owner-woman-dog.png"
              width={411}
              height={500}
              alt="invest-hero"
            />
            <div className="w-[411px] p-8 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-3xl shadow-paper bg-white absolute bottom-20 right-0">
              <div className="text-[32px] font-bold mb-3 text-primary leading-10">
                {t('contact_us')}
              </div>
              <p className="text-sm text-secondary mb-5">
                {t('we_work_with_practices')}
              </p>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-2">{t('email_us')}</p>
                <p>investorrelations@premiervetgroup.co.uk</p>
              </div>
              <div className="mb-6">
                <p className="font-semibold text-primary mb-2">{t('call_us')}</p>
                <p>+44 117 370 0300</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">{t('visiting_us')}</p>
                <p>The Quorum, Bond Street, Bristol, BS1 3AE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  )
}
