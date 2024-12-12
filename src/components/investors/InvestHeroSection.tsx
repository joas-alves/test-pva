import Image from "next/image";
import { useTranslations } from "next-intl";

export const InvestHeroSection = () => {
  const t = useTranslations("Investors");

  return (
    <section className="container mx-auto py-10 sm:mb-20 xs:mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="flex flex-col max-w-[519px]">
            <h1 className="sub-heading">
              {t("invest_in_the")}{" "}
              <span className="text-primary">{t("future")}</span>
            </h1>
            <h1 className="sub-heading mb-5 sm:mb-8">
              <span className="text-primary">{t("of_veterinary")}</span>{" "}
              {t("care")}
            </h1>

            <p className="body text-secondary mb-3 sm:mb-[110px]">
              {t("explore_investment_opportunities")}
            </p>
          </div>
        </div>

        <div className="relative lg:max-w-2xl mx-auto lg:mx-0 flex flex-col gap-4">
          <Image
          className="w-full lg:w-fit lg:h-full  lg:max-h-96 lg:object-contain"
            src="/images/invest-hero.png"
            width={411}
            height={460}
            alt="invest-hero"
          />
          <div className="w-[411px] p-8 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-3xl shadow-paper bg-white lg:absolute top-[160px] right-5 invest-hero-section">
            <div className="text-[32px] font-bold mb-3 text-primary leading-10">
              {t("premier_veterinary")}
            </div>
            <p className="text-sm text-secondary mb-5">{t("registered_no")}</p>
            <div className="mb-6">
              <p className="font-semibold text-primary mb-2">{t("email_us")}</p>
              <p>investorrelations@premiervetgroup.co.uk</p>
            </div>
            <div className="mb-6">
              <p className="font-semibold text-primary mb-2">{t("call_us")}</p>
              <p>+44 117 370 0300</p>
            </div>
            <div>
              <p className="font-semibold text-primary mb-2">
                {t("visiting_us")}
              </p>
              <p>The Quorum, Bond Street, Bristol, BS1 3AE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
