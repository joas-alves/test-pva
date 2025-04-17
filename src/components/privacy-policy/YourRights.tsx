import React from "react";
import { useTranslations } from "next-intl";

const PrivacyYourRights = () => {
  const t = useTranslations("PrivacyPolicy");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("your_rights_title")}</h2>
      <p className="text-lg mb-4">{t("your_rights_intro")}</p>
      <ul className="list-disc mb-4 pl-5 flex flex-col gap-1 text-lg">
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item1") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item2") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item3") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item4") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item5") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item6") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item7") }} />
        <li dangerouslySetInnerHTML={{ __html: t("your_rights_item8") }} />
      </ul>
      <p className="text-lg mb-4">{t("your_rights_footer")}</p>
    </div>
  );
};

export { PrivacyYourRights };
