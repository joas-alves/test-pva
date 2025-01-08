import { IHomePage } from "@/cms-models/home";
import { FAQSection } from "@/components/home";
import { ServiceBookingSection } from "@/components/services/BookingSection";
import { ServicesList } from "@/components/services/ServicesList";
import axios from "axios";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      try {
        const response = await axios(`/en-UK/homepage-content/1`);
        if (response.status === 200) {
          setData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale]);

  if (!data || Object.keys(data).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Head>
        <title>Premier Pet Care Plan - Premier Vet Alliance</title>
        <link
          rel="canonical"
          href="https://premiervetalliance.com/uk/services/premier-pet-care-plan/"
        ></link>
        <meta
          name="description"
          content="Learn more about our market leading Premier Pet Care Plan, a simple, affordable and user friendly solution to preventative pet healthcare."
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Global Home - Premier Vet Alliance"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Vet Alliance" />
        <meta property="og:updated_time" content="2023-11-14T11:25:01+00:00" />
      </Head>
      <ServicesList data={data} />
      <ServiceBookingSection />
      <FAQSection data={data.questions} />
    </div>
  );
}
