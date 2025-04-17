import React from "react";
import { useTranslations } from "next-intl";

const PrivacyCompliance = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("compliance_title")}</h2>
      <p className="text-lg">
        {t("compliance_content1")}
      </p>
      <p className="text-lg">
        {t("compliance_content2")}
      </p>
      <p className="text-lg">
        {t("compliance_content3")}
      </p>
    </div>
  );
};

export { PrivacyCompliance };
