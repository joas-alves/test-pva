import { FeatureCard } from "@/components/widgets";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const OurStorySection = () => {
  const t = useTranslations("Investors");

  return (
    <section className="container mx-auto mt-10">
      <div className="max-w-[954px] w-full mx-auto mb-12 text-left md:text-center">
        <h2 className="sub-heading">
          <span className="text-primary">{t("experience_understanding")}</span>{" "}
          {t("you_can_trust")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <FeatureCard
            image="hands-icon.svg"
            title={t("about_us")}
            description={t("our_industry")}
          />
          <FeatureCard
            image="handshake-white-icon.svg"
            variant="info"
            title={t("why_invest_in_us")}
            description={t("with_over_partnerships")}
          />
        </div>
        <div className="md:col-span-3">
          <Image
            src="/images/our-story-doctors-dog.png"
            alt="doctors"
            width={737}
            height={780}
          />
        </div>
        {/* <Link href='/strategic-review'><button className="flex gap-5 px-5 items-center justify-center py-4 border border-primary text-primary rounded-xl whitespace-nowrap">Strategic Review<span><FaExternalLinkAlt /></span></button></Link> */}
      </div>
    </section>
  );
};
