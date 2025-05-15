import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from 'next-intl';

const LinnaeusPetOwnerTcs = () => {
  const t = useTranslations('LinnaeusPetOwnerTCs');

  return (
    <section className="container mx-auto pt-10 pb-40 text-lg">
      <h1 className="sub-heading mb-6 text-primary">{t('title')}</h1>
      <Link
        className="font-bold text-primary hover:underline"
        href="/pdfs/General-Linnaeus-PHC-TCs-11th-Mar-V5.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('downloadLink')}
      </Link>

      <div className="mt-4">
        <p className="mb-4">{t('sections.intro.paragraph1')}</p>
        <p className="mb-4">{t('sections.intro.paragraph2')}</p>
        <p className="mb-4">{t('sections.intro.paragraph3')}</p>
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.agreement.title')}</h2>
        {t.raw('sections.agreement.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.treatment.title')}</h2>
        {t.raw('sections.treatment.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.responsibilities.title')}</h2>
        {t.raw('sections.responsibilities.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.membership.title')}</h2>
        
        <div className="mb-4">
          <h5>{t('sections.membership.payments.title')}</h5>
          {t.raw('sections.membership.payments.terms').map((term: string, index: number) => (
            <p key={index}>{term}</p>
          ))}
        </div>

        <div className="mb-4">
          <h5>{t('sections.membership.directDebit.title')}</h5>
          {t.raw('sections.membership.directDebit.terms').map((term: string, index: number) => (
            <p key={index}>{term}</p>
          ))}
        </div>

        <div className="mb-4">
          <h5>{t('sections.membership.alteration.title')}</h5>
          {t.raw('sections.membership.alteration.terms').map((term: string, index: number) => (
            <p key={index}>{term}</p>
          ))}
        </div>

        <div className="mb-4">
          <h5>{t('sections.membership.renewal.title')}</h5>
          {t.raw('sections.membership.renewal.terms').map((term: string, index: number) => (
            <p key={index}>{term}</p>
          ))}
        </div>

        <div className="mb-4">
          <h5>{t('sections.membership.nonPayment.title')}</h5>
          {t.raw('sections.membership.nonPayment.terms').map((term: string, index: number) => (
            <p key={index}>{term}</p>
          ))}
        </div>

        <div className="mb-4">
          <h5>{t('sections.membership.deceased.title')}</h5>
          {t.raw('sections.membership.deceased.terms').map((term: string, index: number) => (
            <p key={index}>{term}</p>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.ending.title')}</h2>
        {t.raw('sections.ending.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.complaints.title')}</h2>
        {t.raw('sections.complaints.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.privacy.title')}</h2>
        {t.raw('sections.privacy.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="sub-heading mb-4 text-2xl">{t('sections.general.title')}</h2>
        {t.raw('sections.general.terms').map((term: string, index: number) => (
          <p key={index}>{term}</p>
        ))}
      </div>

      <Image
        className="mt-10"
        width={150}
        height={150}
        alt="debit image"
        src="/images/Direct-Debit-Logo.png"
      />
      <div className="">
        <p className="text-lg my-4">
          <strong>{t('directDebit.title')}</strong>
        </p>
        <ul className="list-disc list-inside">
          {t.raw('directDebit.terms').map((term: string, index: number) => (
            <li key={index} className="mb-4">{term}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <p className="mb-4">{t('footer.linnaeus')}</p>
        <p>{t('footer.animalHealthcare')}</p>
      </div>
    </section>
  );
};

export default LinnaeusPetOwnerTcs;
