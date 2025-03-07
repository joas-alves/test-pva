import { GetInTouchForm } from "@/components/widgets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PiSealCheckFill } from "react-icons/pi";
import { NextRouter, useRouter } from "next/router";
import getintouchimage from "../../../public/images/get-in-touch-dog-doctor.jpeg"
import { getLocaleSiteInfo, LanguageCode } from "@/utils";

export const FullPotentialSection = () => {
  const t = useTranslations("Book");
  const t2 = useTranslations("Contact");
  const router: NextRouter = useRouter();

  const { phone, email, address } = getLocaleSiteInfo(router.locale as LanguageCode);

  return (
    <section className="container mx-auto py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[80px]">
        <div>
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              <span className="inline-block">{t("unlock_the")}</span>&nbsp;
              <span className="text-primary inline-block">{t("full_potential")}</span>&nbsp;
              <span className="inline-block">{t("of_your_veterinary")}</span>
            </h2>
          </div>
          <div className="text-sm md:text-base text-secondary mb-6 md:mb-10">
            {t("discover_how_premier")}
          </div>

          <div className="block lg:hidden mb-6">
            <GetInTouchForm />
          </div>

          <div className="relative flex flex-col-reverse md:flex-row justify-end md:pt-[180px]">
            <div className="md:absolute top-0 left-0 z-1 w-full -mt-6 md:mt-0 md:w-[350px] lg:w-[400px] rounded-xl md:rounded-2xl shadow-paper px-4 md:px-6 py-4 md:py-6 bg-white">
              <div className="text-xl md:text-2xl font-bold mb-4">
                {t("what_can_i_expect")}
              </div>
              <div className="flex flex-col gap-4">
                {[
                  "tailored_health_plans",
                  "streamlined_technology",
                  "10_years_of_experience",
                  "trusted_by_veterinary",
                ].map((key, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <PiSealCheckFill className="text-primary-light text-lg md:text-xl translate-y-0.5" />
                    <div className="text-sm md:text-base flex-1">{t(key)}</div>
                  </div>
                ))}
              </div>
            </div>
            <Image
              className="w-full md:w-2/3 lg:relative lg:top-28 lg:right-7 z-[-10] rounded-[40px]"
              src={getintouchimage}
              width={410}
              height={362}
              alt="cat"
            />
          </div>

          <div className="w-full p-6 md:p-8 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-3xl shadow-paper bg-white relative mt-5 lg:mt-32">
            <div className="text-[32px] font-bold mb-3 text-primary leading-10">
              {t2("contact_us")}
            </div>
            <p className="text-sm text-secondary mb-5">
              {t2("we_work_with_practice")}
            </p>
            <div className="mb-6">
              <p className="font-semibold text-primary mb-2">{t2("email_us")}</p>
              <p className="notranslate">{email}</p>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-primary mb-2">{t2("call_us")}</p>
              <p>{phone}</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">
                {t2("visiting_us")}
              </p>
              <p>{address}</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
};
