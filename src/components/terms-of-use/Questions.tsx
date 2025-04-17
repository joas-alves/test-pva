import React from "react";
import { useTranslations } from "next-intl";

const TermsQuestions = () => {
  const t = useTranslations("TermsOfUse");
  
  return (
    <div className="mb-4">
      <h2 className="sub-heading mb-4 text-2xl ">{t("questions_title")}</h2>
      <p className="text-lg">
        {t("question_desc")}
      </p>
    </div>
  );
};

export { TermsQuestions };
