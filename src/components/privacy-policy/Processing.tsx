import React from "react";
import { useTranslations } from "next-intl";

const PrivacyProcessing = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("processing_title")}</h2>
      <p className="text-lg mb-4">
        {t("processing_intro")}
      </p>
      <p className="text-lg mb-4">{t("processing_use_intro")}</p>
      <ul className="list-disc mb-4 pl-5 flex flex-col gap-1 text-lg">
        <li>{t("processing_use_item1")}</li>
        <li>{t("processing_use_item2")}</li>
        <li>{t("processing_use_item3")}</li>
        <li>{t("processing_use_item4")}</li>
        <li>{t("processing_use_item5")}</li>
        <li>{t("processing_use_item6")}</li>
        <li>{t("processing_use_item7")}</li>
      </ul>
      <p className="text-lg mb-4">{t("processing_share_intro")}</p>
      <ul className="list-disc mb-4 pl-5 flex flex-col gap-1 text-lg">
        <li>{t("processing_share_item1")}</li>
        <li>{t("processing_share_item2")}</li>
        <li>{t("processing_share_item3")}</li>
        <li>{t("processing_share_item4")}</li>
        <li>{t("processing_share_item5")}</li>
        <li>{t("processing_share_item6")}</li>
      </ul>
    </div>
  );
};

export { PrivacyProcessing };
