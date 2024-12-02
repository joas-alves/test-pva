import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { imageUrl } from "@/utils";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
}

export const DiscoverSection: React.FC<Props> = ({
  title,
  description,
  image
}) => {
  const ct = useTranslations('Common');

  return (
    <section className="container mx-auto py-10">
      <div className="bg-info rounded-3xl bg-[url('/images/double-circles.png')] bg-no-repeat bg-center md:bg-right relative overflow-hidden lg:overflow-visible">
        <div className="px-6 pt-10 md:p-20 mb-[300px] md:mb-0">
          <h2
            className="sub-heading text-white max-w-[624px] mb-3 md:mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="mb-6 md:mb-8 text-white body max-w-[383px]">
            {description}
          </p>
          <Link href="/book-demo">
            <button className="btn info-contained-btn h-12 px-11">
              {ct('get_in_touch')}
            </button>
          </Link>
        </div>

        <Image
          className="hidden lg:block absolute bottom-0 right-0"
          src={imageUrl(image)}
          alt="doctor-man.png"
          width={684}
          height={561}
        />

        <Image
          className="block lg:hidden absolute bottom-0 right-0"
          src="/images/doctor-man-mobile.png"
          alt="doctor-man.png"
          width={324}
          height={266}
        />
      </div>
    </section>
  )
}
