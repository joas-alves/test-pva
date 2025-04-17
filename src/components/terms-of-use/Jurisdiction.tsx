import React from "react";
import { useTranslations } from "next-intl";

const TermsJurisdiction = () => {
  const t = useTranslations("TermsOfUse");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("jurisdiction_title")}</h2>
      <p className="text-lg">
        {t("jurisdiction_desc")}
      </p>
    </div>
  );
};

export { TermsJurisdiction };
