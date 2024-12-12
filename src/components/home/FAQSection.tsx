import React, { useState } from "react";
import { FAQAccordionItem } from "@/components/widgets";
import { useTranslations } from "next-intl";
import { IFaq } from "@/cms-models/faq";

type Props = {
  data: IFaq[];
};

export const FAQSection: React.FC<Props> = ({ data }) => {
  const [active, setActive] = useState<number | null>(null);
  const t = useTranslations("Home");

  const handleClickAccordion = (value: number) => {
    if (active === value) setActive(null);
    else setActive(value);
  };

  return (
    <section className="container mx-auto pt-10 !p-0">
      <h2 className="sub-heading mb-12 text-center">
        <span className="text-primary">{t("frequently")}</span>{" "}
        {t("asked_questions")}
      </h2>

      <div className="max-w-[846px] mx-auto flex flex-col gap-4">
        {data?.map((item, index) => (
          <FAQAccordionItem
            key={index}
            data={item}
            onClick={() => handleClickAccordion(index)}
            active={active === index}
          />
        ))}
      </div>
    </section>
  );
};
