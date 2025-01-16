import { useTranslations } from "next-intl";
import { RealStoriesSection } from "../home";
import { useEffect, useState } from "react";
import { IHomePage } from "@/cms-models/home";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";

export const VeterinaryExcellenceSection = () => {
  const t = useTranslations('Book');
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
    <section className="container mx-auto py-20">
      <div className="max-w-[954px] w-full mx-auto mb-0 md:mb-4 text-center">
        <h2 className="sub-heading mb-6">
          {t('tailored_for')} <span className="text-primary">{t('veterinary')}</span> {t('and_efficiency')}
        </h2>
        <p className="text-secondary max-w-[600px] w-full mx-auto">
          {t('see_how_our_tailored')}
        </p>
      </div>
      <RealStoriesSection data={data} />
    </section>
  )
}
