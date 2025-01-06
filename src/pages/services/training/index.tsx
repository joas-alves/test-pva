import { IServicePage } from "@/cms-models/service";
import { NeedMoreHelpSection } from "@/components/about-us";
import { FAQSection } from "@/components/home";
import {
  EnhancedSection,
  Vet2PetSection,
  YouPracticeSection,
} from "@/components/services";
import { faqsForTraining } from "@/temp/faqs";
import axios from "axios";
import Head from "next/head";
import { useParams } from "next/navigation";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServicePage() {
  const router: NextRouter = useRouter();
  const params = useParams();

  const [data, setData] = useState<IServicePage>({} as IServicePage);

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      try {
        const response = await axios.get(
          `/en-UK/service-content/2`
        );
        if (response.status === 200) {
          return setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) { }
    })();
  }, [router.locale, params]);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Head>
        <title>Premier Vet Alliance Training Academy</title>
        <meta name="description" content="Welcome to the Premier Vet Alliance Training Academy, a tailored service to support you with a broad catalogue of content and training packages"></meta>
        <link rel="canonical" href="https://premiervetalliance.com/uk/services/training/"></link>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="article"></meta>
        <meta property="og:title" content="Premier Vet Alliance Training Academy"></meta>
        <meta property="og:description" content="Welcome to the Premier Vet Alliance Training Academy, a tailored service to support you with a broad catalogue of content and training packages"></meta>
        <meta property="og:url" content="https://premiervetalliance.com/uk/services/training/"></meta>
        <meta property="og:site_name" content="Premier Vet Alliance"></meta>
      </Head>
      <Vet2PetSection data={data} />
      <EnhancedSection data={data} />
      <YouPracticeSection data={data} />
      {/*<RealStoriesSection />*/}
      <FAQSection data={faqsForTraining} />
      <NeedMoreHelpSection
        title={data.section4_title}
        description={data.section4_description}
        msgTitle={data.section4_msg_title}
        msgDescription={data.section4_msg_content}
        msgIcon={data.section4_msg_icon}
        phoneTitle={data.section4_phone_title}
        phoneDescription={data.section4_phone_content}
        phoneIcon={data.section4_phone_icon}
        phoneNumber={data.section4_phone_number}
        image={data.section4_image}
      />
    </div>
  );
}
