import React from "react";
import { useTranslations } from "next-intl";

const TermsLiability = () => {
  const t = useTranslations("TermsOfUse");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("Liability_title")}</h2>
      <p className="text-lg">
        {t("Liability_desc")}
      </p>
    </div>
  );
};

export { TermsLiability };
