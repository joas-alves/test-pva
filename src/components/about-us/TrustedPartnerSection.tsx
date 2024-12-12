import Image from "next/image";
import { SignUpInput } from "@/components/widgets";
import { IAboutPage } from "@/cms-models/about";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  data: IAboutPage;
}

export const TrustedPartnerSection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('About');
  const images = data.section1_image ? JSON.parse(data.section1_image) : null;

  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col-reverse md:flex-row gap-10 sm:gap-6">
        <div className="flex-shrink-0">
          <Image className="hidden md:block" src={imageUrl(images?.[1] ?? '')} width={302} height={624} alt="dog" />
          <Image className="block md:hidden h-full max-h-96 object-contain mx-auto" src={imageUrl(images?.[0] ?? '')} width={327} height={240} alt="dog" />
        </div>
        <div className="flex flex-col">
          <h1 className="heading mb-5 sm:mb-20 md:text-right" dangerouslySetInnerHTML={{ __html: data.section1_title }} />
          <div className="flex-1 flex justify-between w-full">
            <Image
              className="hidden xl:block"
              src={imageUrl(images?.[0] ?? '')}
              width={301}
              height={365}
              alt="dog"
            />

            <div className="flex flex-col lg:pl-8">
              <div className="body text-secondary mb-3 sm:mb-6">
                <p className="mb-3">
                  {data.section1_description}
                </p>
              </div>

              <SignUpInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
