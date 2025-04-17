
import { CookiePolicy } from "@/components/cookie-policy/CookiePolicy";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("Common");

  return (
    <section className="container mx-auto pt-10 pb-40">
      <h1 className="sub-heading mb-6">
        <span className="text-primary">{t('cookie')}</span> {t('policy')}
      </h1>
      <CookiePolicy />
    </section>
  );
}
