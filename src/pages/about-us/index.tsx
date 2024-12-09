import {
  BuildingLegacySection,
  ExperienceUnderstandingSection,
  NeedMoreHelpSection,
  PremierVetAllianceSection,
  TrustedPartnerSection,
  TrustUsSection
} from "@/components/about-us";
import { FAQSection } from "@/components/home";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { IAboutPage } from "@/cms-models/about";
import Head from "next/head";

export default function AboutUs() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IAboutPage>({} as IAboutPage);

  useEffect(() => {
    (async () => {
        try{
          const response = await axios(`/api/${router.locale}/about-content/1`);
          if (response.status === 200) {
            setData(response.data);
          }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
        }
    })();
  }, [router.locale]);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Head>
      <title>About PVA - Premier Vet Alliance</title>
      <meta name="description" content="Learn more about PVA and our story to see how we can use our experience to help your veterinary practice in its operations."></meta>
      <link rel="canonical" href="https://premiervetalliance.com/uk/who-we-are/"></link>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:title" content="About PVA - Premier Vet Alliance"></meta>
      <meta property="og:description" content="Learn more about PVA and our story to see how we can use our experience to help your veterinary practice in its operations."></meta>
      <meta property="og:url" content="https://premiervetalliance.com/uk/who-we-are/"></meta>
      <meta property="og:site_name" content="Premier Vet Alliance"></meta>
      </Head>
      <TrustedPartnerSection data={data} />
      <PremierVetAllianceSection data={data} />
      <ExperienceUnderstandingSection data={data} />
      <BuildingLegacySection data={data} />
      <TrustUsSection data={data} />
      <FAQSection data={[]} />
      <NeedMoreHelpSection
        title={data.section6_title}
        description={data.section6_description}
        msgTitle={data.section6_msg_title}
        msgDescription={data.section6_msg_content}
        msgIcon={data.section6_msg_icon}
        phoneTitle={data.section6_phone_title}
        phoneDescription={data.section6_phone_content}
        phoneIcon={data.section6_phone_icon}
        phoneNumber={data.section6_phone_number}
        image={data.section6_image}
      />
    </div>
  )
}
