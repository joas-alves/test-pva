import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { imageUrl } from "@/utils";

type Props = {
  title: string;
  description: string;
  msgTitle: string;
  msgDescription: string;
  msgIcon: string;
  phoneTitle: string;
  phoneDescription: string;
  phoneIcon: string;
  phoneNumber: string;
  image: string;
}

export const NeedMoreHelpSection: React.FC<Props> = ({
  title,
  description,
  msgTitle,
  msgDescription,
  msgIcon,
  phoneTitle,
  phoneDescription,
  phoneIcon,
  phoneNumber,
  image,
}) => {
  const t = useTranslations('About');

  return (
    <section className="container mx-auto py-10">
      <div className="bg-info rounded-3xl bg-[url('/images/double-circles.png')] bg-no-repeat bg-center bg-contain">
        <div className="px-6 pt-10 md:pt-20 mx-auto flex flex-col items-center">
          <h2 className="sub-heading text-white max-w-[624px] mb-3 md:mb-6" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-white text-center body max-w-[383px] opacity-80">
            {description}:
          </p>
        </div>

        <div className="flex justify-between items-center lg:items-end flex-col lg:flex-row px-10 md:px-20">
          <div className="text-white flex flex-col items-center text-center pt-10 pb-0 md:pb-20">
            <Image
              className="mb-5 md:mb-8 w-12 md:w-auto"
              src={imageUrl(msgIcon)}
              alt="envelop-icon"
              width={80}
              height={80}
            />
            <div className="text-lg md:text-2xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: msgTitle }} />
            <p className="mb-5 md:mb-6 max-w-[335px] body opacity-80">
              {msgDescription}
            </p>
            <button className="btn info-contained-btn h-12 px-11">
              {t('book_a_demo')}
            </button>
          </div>
          <Image
            className="hidden lg:block flex-1"
            src={imageUrl(image)}
            alt="doctor-man.png"
            width={264}
            height={360}
          />
          <div className="text-white flex flex-col items-center text-center pt-10 pb-10 md:pb-20">
            <Image
              className="mb-5 md:mb-8 w-12 md:w-auto"
              src={imageUrl(phoneIcon)}
              alt="envelop-icon"
              width={80}
              height={80}
            />
            <div className="text-lg md:text-2xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: phoneTitle }} />
            <p className="mb-5 md:mb-8 max-w-[335px] body opacity-80">
              {phoneDescription}
            </p>
            <div className="text-lg md:text-2xl font-medium">
              {phoneNumber}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
