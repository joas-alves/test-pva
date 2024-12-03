import { EnhancedSection, Vet2PetSection, YouPracticeSection } from "@/components/services";
import { FAQSection } from "@/components/home";
import { NeedMoreHelpSection } from "@/components/about-us";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IServicePage } from "@/cms-models/service";
import { useParams } from "next/navigation";
import axios from "axios";

export default function ServicePage() {
  const router: NextRouter = useRouter();
  const params = useParams();

  const [data, setData] = useState<IServicePage>({} as IServicePage);

  useEffect(() => {
    (async () => {
        try {
          const response = await axios.get(`/api/${router.locale}/service-content/2`);
          if (response.status === 200) {
              return setData(response.data);
          }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
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
