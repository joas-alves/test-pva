import React from "react";
import { useTranslations } from "next-intl";

const TermsInformation = () => {
  const t = useTranslations("TermsOfUse");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("information_title")}</h2>
      <p className="text-lg">
        {t("information_desc")}
      </p>
    </div>
  );
};

export { TermsInformation };
