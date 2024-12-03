import { useTranslations } from "next-intl";

export default function CookiePolicy() {
  const t = useTranslations("CookiePolicy");
  return (
    <div className="container mx-auto pt-10 pb-40">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <h1 className="sub-heading mb-6">{t("title")}</h1>
          <p className="text-base text-secondary mb-5">
            {t("understading_cookie")}
          </p>
          <p className="text-base text-secondary">{t("cookie_management")}</p>
        </div>
      </div>
    </div>
  );
}
