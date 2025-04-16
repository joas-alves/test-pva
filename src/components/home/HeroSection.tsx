import { IHomePage } from "@/cms-models/home";
import { SignUpInput } from "@/components/widgets";
import { imageUrl} from "@/utils";
import { translateHtmlContent } from "@/utils/translateHTML";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  data: IHomePage;
  globaldata?: IHomePage | null; // Optional prop
};

export const HeroSection: React.FC<Props> = ({ data, globaldata }) => {
  const router: NextRouter = useRouter();
    
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>(globaldata && globaldata.section1_description
    ? globaldata.section1_description
    : data.section1_description);

  useEffect(() => {
    const translateTitle = async () => {
      const translatedTitle = await translateHtmlContent(data.section1_title || "", router.locale || "en-US");
      setTitle(() => translatedTitle.replace("<p>&nbsp;</p>", ""));
    };
    const translateDescription = async () => {
      const translatedDescription = await translateHtmlContent(data.section1_description || "", router.locale || "en-US");
      setDescription(() => translatedDescription.replace("<p>&nbsp;</p>", ""));
    };
    translateTitle();
    translateDescription();
  }, [router.locale]);
  
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-10 sm:gap-6 lg:items-start">
        <div className="flex flex-col items-start">
          <h1
            className="heading mb-5 sm:mb-8 hero-section-title"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <div className="flex-1 flex justify-between w-full items-start">
            <div className="flex flex-col w-full gap-8">
              {router.locale === 'en-US' ?<div className="body text-secondary lg:max-w-[517px] mb-3 sm:mb-6">
                <p dir="ltr"><strong>Premier Vet Alliance</strong> is the leading pet health plan provider to practices across the UK, Europe and USA.</p>
                <p dir="ltr">&nbsp;</p>
                <p dir="ltr">With our tailored plans, advanced technology and comprehensive support, we can maximise your practice potential today.&nbsp;</p></div> :  <p
                className="body text-secondary lg:max-w-[517px] mb-3 sm:mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />}
              <div className="flex justify-center lg:justify-start">
                <SignUpInput />
              </div>
            </div>
            <Image
              className="hidden xl:block w-full max-w-96 object-contain -mt-6"
              src={imageUrl(data.section1_image1)}
              width={301}
              height={365}
              alt="dog"
            />
          </div>
        </div>

        <div className="flex-shrink-0">
          <Image
            className="hidden lg:block h-full object-contain"
            src={imageUrl(data.section1_image2)}
            width={302}
            height={624}
            alt="girl and dog"
          />
          <div className="flex lg:hidden gap-3 self-center items-center justify-center max-h-96">
            <Image
              className="w-full h-[300px] object-contain"
              src={imageUrl(data.section1_image1)}
              width={301}
              height={365}
              alt="dog"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
