import { useState } from 'react';
import { FAQAccordionItem } from "@/components/widgets";

const DATA = [
  {
    title: 'What services does Premier Vet Alliance offer?',
  },
  {
    title: 'How does Premier Pet Care Plan benefit my practice?',
  },
  {
    title: 'What countries does Premier Vet Alliance operate in?',
  },
  {
    title: 'How does the Post2Pet service work?',
  },
  {
    title: 'How do I get started with Premier Vet Alliance?',
  },
]

export const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleClickAccordion = (value: number) => {
    if (active === value) setActive(null);
    else setActive(value);
  }

  return (
    <section className="container mx-auto py-20">
      <h2 className="sub-heading mb-12 text-center">
        <span className="text-primary">Frequently</span> Asked Questions
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
