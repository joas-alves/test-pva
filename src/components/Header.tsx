import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { LanguageMenu } from "@/components/widgets";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations('Header');

  return (
    <header className="container mx-auto flex items-center py-4">
      <RiMenuLine className="cursor-pointer mr-5 flex-shrink-0 block md:hidden" />
      <Image className="mr-10 w-[100px] sm:w-auto" src="/images/logo.svg" width={170} height={70} alt="logo" />
      <nav className="hidden md:flex gap-4">
        <div className="text-primary font-semibold">{t('home')}</div>
        <div className="flex items-center gap-0.5">
          {t('service')}
          <FiChevronDown />
        </div>
        <div className="flex items-center gap-0.5">
          {t('about')}
          <FiChevronDown />
        </div>
        <div>{t('news')}</div>
        <div>{t('contact')}</div>
      </nav>
      <div className="flex-1" />
      <div className="flex items-center gap-8">
        <div className="hidden md:block">{t('global_site')}</div>
        <span className="hidden md:block">
          <LanguageMenu />
        </span>
        <button className="btn primary-outline-btn">{t('book_a_demo')}</button>
      </div>
    </header>
  )
}

export default Header
