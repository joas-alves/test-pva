import { ContactUsForm } from "@/components/widgets";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { getLocaleSiteInfo, LanguageCode } from "@/utils";

export default function ContactUs() {
  const t = useTranslations("Contact");
  const router: NextRouter = useRouter();

  const { phone, email, address } = getLocaleSiteInfo(router.locale as LanguageCode);

  return (
    <section className="container mx-auto pt-10 pb-40">
      <Head>
        <title>Contact Premier Vet Alliance | PVA</title>
        <meta
          name="description"
          content="Reach out to contact or book a meeting with Premier Vet Alliance, to discuss your query or express interest in one of our products."
        ></meta>
        <link
          rel="canonical"
          href="https://premiervetalliance.com/uk/contact/"
        ></link>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:title"
          content="Contact Premier Vet Alliance | PVA"
        ></meta>
        <meta
          property="og:description"
          content="Reach out to contact or book a meeting with Premier Vet Alliance, to discuss your query or express interest in one of our products."
        ></meta>
        <meta
          property="og:url"
          content="https://premiervetalliance.com/uk/contact/"
        ></meta>
        <meta property="og:site_name" content="Premier Vet Alliance"></meta>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="">
          <h1 className="sub-heading mb-6">
            <span className="text-primary">Contact</span> us
          </h1>
          <p className="body text-secondary max-w-[465px] mb-10">
            {t("have_question_need_assistance")}
          </p>
          <ContactUsForm />
        </div>

        <div className="relative">
          <Image
            src="/images/contact-us-woman-doctor-dog.png"
            width={411}
            height={500}
            alt="invest-hero"
          />
          <div className="w-full md:w-[411px] p-6 md:p-8 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-3xl shadow-paper bg-white relative md:absolute bottom-20 right-0 -mt-10 md:mt-0 bg-white">
            <div className="text-[32px] font-bold mb-3 text-primary leading-10">
              {t("contact_us")}
            </div>
            <p className="text-sm text-secondary mb-5">
              {t("we_work_with_practice")}
            </p>
            <div className="mb-6">
              <p className="font-semibold text-primary mb-2">{t("email_us")}</p>
              <p className="notranslate">{email}</p>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-primary mb-2">{t("call_us")}</p>
              <p>{phone}</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">
                {t("visiting_us")}
              </p>
              <p>{address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
