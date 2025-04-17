import React from "react";
import { useTranslations } from "next-intl";

const PrivacyChanges = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("changes_title")}</h2>
      <p className="text-lg">
        {t("changes_content")}
      </p>
    </div>
  );
};

export { PrivacyChanges };
