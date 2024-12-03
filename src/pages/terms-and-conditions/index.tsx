import { useTranslations } from "next-intl";

export default function TermsAndConditions() {
  const t = useTranslations("TermsOfUse");
  return (
    <div className="container mx-auto pt-10 pb-40">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="sub-heading mb-6">{t("title")}</h1>
          <p className="text-base text-secondary mb-5">{t("intro")}</p>
          <h1 className="text-3xl font-semibold mb-5">
            {t("alteration_title")}
          </h1>
          <p className="text-base text-secondary mb-5">
            {t("alteration_desc")}
          </p>
          <h1 className="text-3xl font-semibold mb-5">
            {t("information_title")}
          </h1>
          <p className="text-base text-secondary mb-5">
            {t("information_desc")}
          </p>
          <h1 className="text-3xl font-semibold mb-5">
            {t("Liability_title")}
          </h1>
          <p className="text-base text-secondary mb-5">{t("Liability_desc")}</p>
          <h1 className="text-3xl font-semibold mb-5">
            {t("intilectual_title")}
          </h1>
          <p className="text-base text-secondary mb-5">
            {t("intilectual_desc")}
          </p>
          <h1 className="text-3xl font-semibold mb-5">
            {t("jurisdiction_title")}
          </h1>
          <p className="text-base text-secondary mb-5">
            {t("jurisdiction_desc")}
          </p>
          <h1 className="text-3xl font-semibold mb-5">
            {t("questions_title")}
          </h1>
          <p className="text-base text-secondary mb-5">{t("question_desc")}</p>
        </div>
      </div>
    </div>
  );
}
