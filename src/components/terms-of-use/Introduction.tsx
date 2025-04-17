import React from "react";
import { useTranslations } from "next-intl";

const TermsIntroduction = () => {
  const t = useTranslations("TermsOfUse");
  
  return (
    <div className="mb-4">
      <p className="text-lg">
        {t("intro")}
      </p>
    </div>
  );
};

export { TermsIntroduction };
