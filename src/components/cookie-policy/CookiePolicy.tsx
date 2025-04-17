import { useTranslations } from "next-intl";
import React from "react";

const CookiePolicy = () => {
  const t = useTranslations("Common");
  return (
    <div className="mb-4">
      <p className="text-lg">
        {t("cookie_policy_description")}
      </p>
    </div>
  );
};

export { CookiePolicy };
