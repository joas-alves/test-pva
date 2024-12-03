import { IHomePage } from "@/cms-models/home";
import { FAQSection } from "@/components/home";
import { ServicesList } from "@/components/services/ServicesList";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ServicesPage() {
  const router: NextRouter = useRouter();

  const [data, setData] = useState<IHomePage>({} as IHomePage);

  useEffect(() => {
    (async () => {
        try{
            const response = await axios(`/api/${router.locale}/homepage-content/1`);
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
     <ServicesList data={data} />
     <FAQSection data={data.questions} />
    </div>
  )
}
