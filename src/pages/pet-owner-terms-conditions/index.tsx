import { DetailsOfTermsAndConditions } from "@/components/pet-owner-terms-conditions/details-of-terms-and-conditions";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export default function PetOwnerTermsConditions() {
  const t = useTranslations('PetOwnerTermsConditions');
  
  return (
    <section className="container mx-auto pt-10 pb-40">
      <h1 className="sub-heading mb-6 text-primary">
        {t('title')}
      </h1>

      <Link
        className="font-bold text-primary hover:underline"
        href="/pdfs/PVA-Pet-Owner-Ts-Cs.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('download_link')}
      </Link>
      <DetailsOfTermsAndConditions />
      <div className="my-4">
        <h2 className="sub-heading mb-4 text-2xl font-black">{t('privacy_policy_title')}</h2>
        {t.raw('privacy_policy').map((paragraph: string, index: number) => (
          <p key={index} className="text-lg mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      <Image
        width={150}
        height={150}
        alt={t('debit_image_alt')}
        src="/images/Direct-Debit-Logo.png"
      />
      <div>
        <h2 className="sub-heading mb-4 text-2xl font-black">
          {t('direct_debit_guarantee_title')}
        </h2>
        <ul className="list-disc list-inside">
          {t.raw('direct_debit_guarantee').map((item: string, index: number) => (
            <li key={index} className="text-lg mb-4">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
