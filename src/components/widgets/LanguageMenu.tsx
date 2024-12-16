import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const languages = [
  {
    label: "Global",
    flag: "global.svg",
    code: "global",
    googleCode: "en",
  },
  {
    label: "Spanish",
    flag: "es.svg",
    code: "es",
    googleCode: "es",
  },
  {
    label: "English-US",
    flag: "en-US.svg",
    code: "en-US",
    googleCode: "en",
  },
  {
    label: "English-UK",
    flag: "en-UK.svg",
    code: "en-UK",
    googleCode: "en",
  },
  {
    label: "Deutch",
    flag: "de.svg",
    code: "de",
    googleCode: "de",
  },
  {
    label: "French",
    flag: "fr.svg",
    code: "fr",
    googleCode: "fr",
  },
];

export const LanguageMenu = () => {
  const router: NextRouter = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return (
      languages.find((lang) => lang.code === router.locale) || languages[2]
    );
  });

  useEffect(() => {
    const currentLanguage =
      languages.find((lang) => lang.code === router.locale) || languages[2];
    setSelectedLanguage(currentLanguage);
  }, [router.locale]);

  useEffect(() => {
    const select = document.querySelector("select.goog-te-combo");

    if (select) {
      (select as HTMLSelectElement).value = selectedLanguage.googleCode;
      select.dispatchEvent(new Event("change"));
    }
  }, [selectedLanguage]);

  const handleChangeLanguage = (code: string) => {
    router.push(router.pathname, router.asPath, { locale: code });
  };

  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-1">
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
        className="origin-top-right rounded-xl p-1 text-sm/6 text-white bg-white shadow transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] mt-2"
      >
        {languages.map((item, index) => (
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