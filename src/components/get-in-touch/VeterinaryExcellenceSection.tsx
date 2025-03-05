import { IHomePage } from "@/cms-models/home";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RealStoriesSection } from "../home";

export const VeterinaryExcellenceSection = () => {
  const router: NextRouter = useRouter();
  const [data, setData] = useState<IHomePage>({} as IHomePage);
  useEffect(() => {
    (async () => {
        try{
            const response = await axios(`/en-UK/homepage-content/1`);
            if (response.status === 200) {
                setData(response.data);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
        }
    })();
  }, [router.locale]);
  return (
    <section className="container mx-auto pb-20">
      <RealStoriesSection data={data} />
    </section>
  )
}
