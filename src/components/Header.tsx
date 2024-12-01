import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { DropdownMenu, LanguageMenu } from "@/components/widgets";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
// import { IServicePage } from "@/cms-models/service";
import {useServicesContext} from "../contexts/services.js";

const Header = () => {
  const t = useTranslations('Header');
  const router: NextRouter = useRouter();
  // @ts-ignore
  const { services, setServices } = useServicesContext();


    // const [services, setServices] = useState<IServicePage[]>([]);

  useEffect(() => {
    (async () => {
        try{
          const response = await fetch(`/api/services?locale=${router.locale}`);
          const result = await response.json();
          setServices(result);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            console.log({error})
        }
    })();
  }, [router.locale]);

  return (
    <header className="container mx-auto flex items-center py-4">
      <RiMenuLine className="cursor-pointer mr-5 flex-shrink-0 block md:hidden" />
      <Link href="/">
        <Image className="mr-10 w-[100px] sm:w-auto" src="/images/logo.svg" width={170} height={70} alt="logo" />
      </Link>
      <nav className="hidden md:flex gap-4">
        <Link href="/">
          <div className="">{t('home')}</div>
        </Link>
        <DropdownMenu
          label={t('service')}
          options={services?.map((item) => ({
            id: item.id,
            label: `Service ${item.id}` // item.section1_title,
          }))}
          onChangeMenu={(id) => router.push(`/services/${id}`)}
        />
        <Link href="/about-us">
          <div className="flex items-center gap-0.5">
            {t('about')}
            <FiChevronDown />
          </div>
        </Link>
        <Link href="/news">
          <div>{t('news')}</div>
        </Link>
        <Link href="/contact-us">
          <div>{t('contact')}</div>
        </Link>
      </nav>
      <div className="flex-1" />
      <div className="flex items-center gap-8">
        <div className="hidden md:block">{t('global_site')}</div>
        <span className="hidden md:block">
          <LanguageMenu />
        </span>
        <Link href="/book-demo">
          <button className="btn primary-outline-btn">{t('book_a_demo')}</button>
        </Link>
      </div>
    </header>
  )
}

export default Header
