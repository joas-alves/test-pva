import React from "react";
import { useTranslations } from "next-intl";

const PrivacyIntroduction = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <p className="text-lg">
        {t("introduction")}
      </p>
    </div>
  );
};

export { PrivacyIntroduction };
