import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {useServicesContext} from "../contexts/services.js";
import {DropdownMenu} from "@/components/widgets";
import {NextRouter} from "next/router";
import {IServicePage} from "@/cms-models/service";

interface FooterProps {
  router: NextRouter;
}
const Footer = ({router}: FooterProps) => {
  const t = useTranslations('Footer');
  // @ts-expect-error contexts
  const { services } = useServicesContext();

  return (
    <footer className="pt-10">
      <div className="container mx-auto grid grid-cols-1 gap-6 md:gap-4 md:grid-cols-4 mb-0 sm:mb-16">
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
          <ul className="flex justify-between flex-row sm:flex-col gap-2 sm:gap-4 text-sm sm:text-base">
            <li><Link href="/investors">{t('investors')}</Link></li>
            {/*<li><Link href="/pet-owners">{t('services')}</Link></li>*/}
            <li>
              <DropdownMenu
                  label={t('services')}
                  options={services?.map((item: IServicePage) => ({
                    id: item.id,
                    label: `Service ${item.id}`
                  }))}
                  onChangeMenu={(id) => router.push(`/services/${id}`)}
              />
            </li>
            <li><Link href="/about-us">{t('about')}</Link></li>
            <li><Link href="/news">{t('news')}</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2 flex flex-wrap gap-6 border-y sm:border-none border-y-gray-200 py-6 sm:py-0">
          <ul className="flex flex-col gap-2 sm:gap-4 text-sm sm:text-base">
            <li>{t('address')}</li>
            <li>pcp@premiervetalliance.co.uk</li>
            <li>+44 117 472 5000</li>
          </ul>
          <div className="flex-1" />
          <div className="gap-8 text-2xl flex">

            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t border-t-none sm:border-t-gray-300 py-6 sm:py-8 text-gray-400 flex flex-col flex-col-reverse sm:flex-row gap-6 text-xs sm:text-sm">
        <div className="flex-1">
          © {t('copyright-1')} · {t('copyright-2')} · 07267818
        </div>
        <div className="flex gap-10 justify-between sm:justify-start pb-6 sm:pb-0 border-b border-b-gray-200 sm:border-none">
          <div><a href="/terms-of-use">{t('terms_of_use')}</a></div>
          <div><a href="#">{t('privacy_policy')}</a></div>
          <div><a href="#">{t('cookie_policy')}</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
