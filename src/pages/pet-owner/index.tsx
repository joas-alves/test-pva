import { IHomePage } from "@/cms-models/home";
import { FAQSection, RealStoriesSection } from "@/components/home";
import { PetOwnerHealthPlan } from "@/components/pet-owner/health-plan";
import { PetOwnerHelp } from "@/components/pet-owner/help";
import { PetOwnerIntroduction } from "@/components/pet-owner/introduction";
import { faqsforPetOwner } from "@/temp/faqs";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PetOwnerPage() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios(
          `/api/${router.locale}/homepage-content/1`
        );
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch homepage content:", error);
      }
    })();
  }, [router.locale]);

  return (
    <section className="container mx-auto pt-10 pb-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">
        <span className="text-primary">Pet</span> Owners
      </h1>
      <div className="space-y-10">
        <PetOwnerIntroduction />
        <PetOwnerHealthPlan />
        <PetOwnerHelp />
        <RealStoriesSection data={data} />
        <FAQSection data={faqsforPetOwner} />
      </div>
    </section>
  );
}
