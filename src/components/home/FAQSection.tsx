import { useState } from 'react';
import { FAQAccordionItem } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const t = useTranslations('Home');

  const DATA = [
    {
      title: t('what_services_does'),
    },
    {
      title: t('how_does_premier'),
    },
    {
      title: t('what_countries_does'),
    },
    {
      title: t('how_does_the_post'),
    },
    {
      title: t('how_do_i_get'),
    },
  ]

  const handleClickAccordion = (value: number) => {
    if (active === value) setActive(null);
    else setActive(value);
  }

  return (
    <section className="container mx-auto py-20">
      <h2 className="sub-heading mb-12 text-center">
        <span className="text-primary">{t('frequently')}</span> {t('asked_questions')}
      </h2>

      <div className="max-w-[846px] mx-auto flex flex-col gap-4">
        {DATA.map((item, index) => (
          <FAQAccordionItem
            key={index}
            data={item}
            onClick={() => handleClickAccordion(index)}
            active={active === index}
          />
        ))}
      </div>
    </section>
  )
}
