import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { LanguageMenu } from "@/components/widgets";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Header = () => {
  const t = useTranslations('Header');

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
        <Link href="/services">
          <div className="flex items-center gap-0.5">
            {t('service')}
            <FiChevronDown />
          </div>
        </Link>
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
