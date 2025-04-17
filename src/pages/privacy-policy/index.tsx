import { PrivacyIntroduction } from "@/components/privacy-policy/Introduction";
import { PrivacyWhoWeAre } from "@/components/privacy-policy/WhoWeAre";
import { PrivacyPersonalData } from "@/components/privacy-policy/PersonalData";
import { PrivacyProcessing } from "@/components/privacy-policy/Processing";
import { PrivacyYourRights } from "@/components/privacy-policy/YourRights";
import { PrivacyRetention } from "@/components/privacy-policy/Retention";
import { PrivacyOtherWebsites } from "@/components/privacy-policy/OtherWebsites";
import { PrivacyCookies } from "@/components/privacy-policy/Cookies";
import { PrivacyChanges } from "@/components/privacy-policy/Changes";
import { PrivacyCompliance } from "@/components/privacy-policy/Compliance";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("Common");

  return (
    <section className="container mx-auto pt-10 pb-40">
      <h1 className="sub-heading mb-6">
        <span className="text-primary">{t("privacy")}</span> {t("policy")}
      </h1>
      <PrivacyIntroduction/>
      <PrivacyWhoWeAre/>
      <PrivacyPersonalData/>
      <PrivacyProcessing/>
      <PrivacyYourRights/>
      <PrivacyRetention/>
      <PrivacyOtherWebsites/>
      <PrivacyCookies/>
      <PrivacyChanges/>
      <PrivacyCompliance/>
    </section>
  );
}
