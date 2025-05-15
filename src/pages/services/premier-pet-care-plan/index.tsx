import { IFaq } from "@/cms-models/faq";
import { IServicePage } from "@/cms-models/service";
import { NeedMoreHelpSection } from "@/components/about-us";
import { FAQSection } from "@/components/home";
import {
  EnhancedSection,
  Vet2PetSection,
  YouPracticeSection,
} from "@/components/services";
import axios from "axios";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useParams } from "next/navigation";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const router: NextRouter = useRouter();
  const params = useParams();
  const t = useTranslations("FAQs");
  const [data, setData] = useState<IServicePage>({} as IServicePage);

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      try {
        const response = await axios.get(`/${router.locale}/service-content/1`);
        if (response.status === 200) {
          return setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale, router.isReady, params]);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Head>
        <title>Premier Pet Care Plan - Premier Vet Alliance</title>
        <meta
          name="description"
          content="Learn more about our market leading Premier Pet Care Plan, a simple, affordable and user friendly solution to preventative pet healthcare."
        ></meta>
        <link
          rel="canonical"
          href="https://premiervetalliance.com/uk/services/premier-pet-care-plan/"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Premier Pet Care Plan - Premier Vet Alliance"
        />
        <meta
          property="og:description"
          content="Learn more about our market leading Premier Pet Care Plan, a simple, affordable and user friendly solution to preventative pet healthcare."
        />
        <meta
          property="og:url"
          content="https://premiervetalliance.com/uk/services/premier-pet-care-plan/"
        ></meta>
        <meta property="og:site_name" content="Premier Vet Alliance"></meta>
        <meta
          property="og:updated_time"
          content="2023-11-30T09:41:37+00:00"
        ></meta>
      </Head>
      <Vet2PetSection data={data} />
      <EnhancedSection data={data} />
      <YouPracticeSection data={data} />
      {/*<RealStoriesSection />*/}
      <FAQSection
        data={(t.raw("premier_pet_care_plan") as IFaq[]).map((item) => ({
          title: item.title,
          description: item.description,
          id: Math.random(),
          homepage_id: "",
          created_at: "",
          updated_at: "",
        }))}
      />
      <NeedMoreHelpSection
        title={data.section4_title}
        description={data.section4_description}
        msgTitle={data.section4_msg_title}
        msgDescription={data.section4_msg_content}
        msgIcon={data.section4_msg_icon}
        phoneTitle={data.section4_phone_title}
        phoneDescription={data.section4_phone_content}
        phoneIcon={data.section4_phone_icon}
        image={data.section4_image}
      />
    </div>
  );
}
