import React from "react";
import { useTranslations } from "next-intl";

const PrivacyRetention = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("retention_title")}</h2>
      <p className="text-lg">
        {t("retention_content")}
      </p>
    </div>
  );
};

export { PrivacyRetention };
