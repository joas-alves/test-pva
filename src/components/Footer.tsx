import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { ServicesDropdown } from "./widgets/services-dropdown";
import { getLocaleSiteInfo, LanguageCode } from "@/utils";
import { NextRouter, useRouter } from "next/router";

const Footer = () => {
  const t = useTranslations("Footer");
  const router: NextRouter = useRouter();

  const { phone: phoneNumber, email,address } = getLocaleSiteInfo(
    router.locale as LanguageCode
  );

  return (
    <footer className="pt-10">
      <div className="container mx-auto grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-4 md:mb-6">
        <div>
          <Link href="/">
            <Image
              className="pr-10 w-[142px] sm:w-auto"
              src="/images/logo.svg"
              width={170}
              height={70}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <ul className="flex justify-start sm:justify-between flex-wrap md:flex-col gap-2 md:gap-4 text-sm md:text-base">
            {router.locale === "global" && (
              <>
                <li>
                  <Link href="/investors">{t("investors")}</Link>
                </li>
                <li>
                  <Link href="/strategic-review">{t("strategic_review")}</Link>
                </li>
              </>
            )}
            {/*<li><Link href="/pet-owners">{t('services')}</Link></li>*/}
            <li>
              <ServicesDropdown />
            </li>
            <li>
              <Link href="/about-us">{t("about")}</Link>
            </li>
            <li>
              <Link href="/news">{t("news")}</Link>
            </li>
            <li>
              <Link href="/cookie-policy">{t("cookie_policy")}</Link>
            </li>
            <li>
              <Link href="/pet-owner-terms-conditions">{t("terms_of_use")}</Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2 flex flex-wrap gap-6 border-y md:border-none border-y-gray-200 py-6 md:py-0">
          <ul className="flex flex-col gap-2 md:gap-4 text-sm md:text-base">
            <li className="notranslate">{address}</li>
            <a
              className="notranslate"
              href={`mailto:${email}`}
            >
              {email}
            </a>
            <li>
              <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </li>
          </ul>
          <div className="flex-1" />
          <div className="gap-8 text-2xl flex notranslate">
            <a
              href="https://www.linkedin.com/company/premier-vet-alliance/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-t-none md:border-t-gray-300 py-6 md:py-8 text-gray-400 flex flex-col-reverse md:flex-row gap-6 text-xs md:text-sm">
        <div className="flex-1">
          © {t("copyright-1")} · {t("copyright-2")} · 07267818
        </div>
        <div className="flex gap-10 justify-between md:justify-start pb-6 md:pb-0 border-b border-b-gray-200 md:border-none">
          <div>
            <Link href="/pet-owner-terms-conditions">{t("terms_of_use")}</Link>
          </div>
          <div>
            <Link href="/privacy-policy">{t("privacy_policy")}</Link>
          </div>
          <div>
            <Link href="/cookie-policy">{t("cookie_policy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
