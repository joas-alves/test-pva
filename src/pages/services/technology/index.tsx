import { IServicePage } from "@/cms-models/service";
import { NeedMoreHelpSection } from "@/components/about-us";
import { FAQSection } from "@/components/home";
import {
  EnhancedSection,
  Vet2PetSection,
  YouPracticeSection,
} from "@/components/services";
import { faqsForTechnology } from "@/temp/faqs";
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
        const response = await axios.get(`/${router.locale}/service-content/5`);
        if (response.status === 200) {
          return setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale, params]);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Head>
        <title>Technology at Premier Vet Alliance</title>
        <meta
          name="description"
          content="Premier Vet Alliance's high quality financial technology platform provides a seamless way for veterinary practices to maximise business opportunities"
        />
        <link
          rel="canonical"
          href="https://premiervetalliance.com/uk/services/our-technology/"
        />
        <meta
          property="og:title"
          content="Technology at Premier Vet Alliance"
        />
        <meta
          property="og:description"
          content="Premier Vet Alliance's high quality financial technology platform provides a seamless way for veterinary practices to maximise business opportunities"
        />
        <meta
          property="og:url"
          content="https://premiervetalliance.com/uk/services/our-technology/"
        />
      </Head>
      <Vet2PetSection data={data} />
      <EnhancedSection data={data} />
      <YouPracticeSection data={data} />
      {/*<RealStoriesSection />*/}
      <FAQSection data={faqsForTechnology} />
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
