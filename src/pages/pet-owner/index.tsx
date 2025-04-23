import { IHomePage } from "@/cms-models/home";
import { FAQSection, RealStoriesSection } from "@/components/home";
import { PetOwnerHealthPlan } from "@/components/pet-owner/health-plan";
import { PetOwnerHelp } from "@/components/pet-owner/help";
import { PetOwnerIntroduction } from "@/components/pet-owner/introduction";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { IFaq } from "@/cms-models/faq";

export default function PetOwnerPage() {
  const router: NextRouter = useRouter();
  const t = useTranslations("Common");
  const tq = useTranslations("FAQs");
  const [data, setData] = useState<IHomePage>({} as IHomePage);

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      try {
        const response = await axios(
          `/${router.locale}/homepage-content/1`
        );
        if (response.status === 200) {
          setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale, router.isReady, router]);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <section className="container mx-auto pt-10 pb-40">
      <h1 className="sub-heading mb-6">
        <span className="text-primary">{t("pet")}</span> {t("owners")}
      </h1>
      <PetOwnerIntroduction />
      <PetOwnerHealthPlan />
      <PetOwnerHelp />
      <FAQSection data={(tq.raw("pet_owner_faqs") as IFaq[]).map((item) => ({
        ...item,
        id: Math.random(),
        homepage_id: "",
        created_at: "",
        updated_at: "",
      }))} />
      <RealStoriesSection data={data} />
    </section>
  );
}
