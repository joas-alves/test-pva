import { globalLanguageConfig, LanguageConfig, languagesList } from "@/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
type LanguageMenuProps = {
  onClick?:()=>void;
}
export const LanguageMenu = ({onClick}:LanguageMenuProps) => {
  const router: NextRouter = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageConfig | null>(null);

  useEffect(() => {
    const currentLanguage =
    languagesList.find((lang) => lang.code === router.locale) || globalLanguageConfig
    if(currentLanguage)setSelectedLanguage(currentLanguage)
  }, [router.locale]);

  useEffect(() => {
    const select = document.querySelector("select.goog-te-combo");

    if (select && selectedLanguage) {
      (select as HTMLSelectElement).value = selectedLanguage.googleCode;
      select.dispatchEvent(new Event("change"));
    }
  }, [selectedLanguage,router]);

  const handleChangeLanguage = (code: string) => {
    onClick?.()
    router.push(router.pathname, router.asPath, { locale: code });
  };

  if(!selectedLanguage) return null

  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-1 z-10">
        <Image
          className="rounded-full"
          src={`/images/flags/${selectedLanguage.flag}`}
          width={28}
          height={28}
          alt="flag"
        />
        <FiChevronDown />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="origin-top-right rounded-xl p-1 text-sm/6 text-white bg-white shadow transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] mt-2 z-10"
      >
        {languagesList.map((item, index) => (
          <MenuItem key={index}>
            <div
              className={clsx(
                "flex items-center gap-4 text-black p-2 cursor-pointer hover:bg-gray-100 rounded-xl",
                selectedLanguage.code === item.code && "bg-gray-100"
              )}
              onClick={() => handleChangeLanguage(item.code)}
            >
              <Image
                className="rounded-full"
                src={`/images/flags/${item.flag}`}
                width={28}
                height={28}
                alt="flag"
              />
              <span className="pr-2">{item.label}</span>
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};