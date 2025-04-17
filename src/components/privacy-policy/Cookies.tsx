import React from "react";
import { useTranslations } from "next-intl";

const PrivacyCookies = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("cookies_title")}</h2>
      <p className="text-lg" dangerouslySetInnerHTML={{ __html: t("cookies_content") }} />
    </div>
  );
};

export { PrivacyCookies };
