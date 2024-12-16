import { GetInTouchForm } from "@/components/widgets";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PiSealCheckFill } from "react-icons/pi";

export const FullPotentialSection = () => {
  const t = useTranslations("Book");

  return (
    <section className="container mx-auto py-6 md:py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[80px]">
        <div>
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
              {t("unlock_the")}{" "}
              <span className="text-primary">{t("full_potential")}</span>{" "}
              {t("of_your_veterinary")}
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
              className="w-full md:w-auto"
              src="/images/full-potential-cat.png"
              width={410}
              height={362}
              alt="cat"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
};
