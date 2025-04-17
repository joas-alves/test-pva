import React from "react";
import { useTranslations } from "next-intl";

const PrivacyWhoWeAre = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("who_we_are_title")}</h2>
      <p className="text-lg">
        {t("who_we_are_content")}
      </p>
    </div>
  );
};

export { PrivacyWhoWeAre };
