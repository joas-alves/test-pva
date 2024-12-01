import { EnhancedSection, Vet2PetSection, YouPracticeSection } from "@/components/services";
import { FAQSection } from "@/components/home";
import { NeedMoreHelpSection } from "@/components/about-us";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { IServicePage } from "@/cms-models/service";
import { useParams } from "next/navigation";

export default function Services() {
  const router: NextRouter = useRouter();
  const params = useParams();

  const [data, setData] = useState<IServicePage>({} as IServicePage);

  useEffect(() => {
    (async () => {
      if (params?.id) {
        const response = await axios(`/api/${router.locale}/service-content/${params.id}`);
        if (response.status === 200) {
          setData(response.data);
        }
      }
    })();
  }, [router.locale, params]);

  return (
    <div className="flex flex-col gap-0 md:gap-20">
      <Vet2PetSection data={data} />
      <EnhancedSection data={data} />
      <YouPracticeSection data={data} />
      {/*<RealStoriesSection />*/}
      <FAQSection data={[]} />
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
  )
}
