import React from "react";
import { useTranslations } from "next-intl";

const PrivacyPersonalData = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("personal_data_title")}</h2>
      <p className="text-lg mb-4">
        {t("personal_data_content")}
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1 text-lg mb-4">
        <li>{t("personal_data_item1")}</li>
        <li>{t("personal_data_item2")}</li>
        <li>{t("personal_data_item3")}</li>
        <li>{t("personal_data_item4")}</li>
      </ul>
    </div>
  );
};

export { PrivacyPersonalData };
