import React from "react";
import { useTranslations } from "next-intl";

const PrivacyOtherWebsites = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("other_websites_title")}</h2>
      <p className="text-lg">
        {t("other_websites_content")}
      </p>
    </div>
  );
};

export { PrivacyOtherWebsites };
