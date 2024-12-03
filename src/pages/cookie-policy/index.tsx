
import { CookiePolicy } from "@/components/cookie-policy/CookiePolicy";

export default function PrivacyPolicy() {
  return (
    <section className="container mx-auto pt-10 pb-40">
      <h1 className="sub-heading mb-6">
        <span className="text-primary">Cookie</span> Policy
      </h1>
      <CookiePolicy />
    </section>
  );
}
