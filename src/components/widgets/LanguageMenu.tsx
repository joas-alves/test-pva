import Image from "next/image";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi";
import { NextRouter, useRouter } from "next/router";
import { useEffect, useState } from "react";

const languages = [
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
  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]);

  useEffect(() => {
    const select = document.querySelector("select.goog-te-combo");

    if (select) {
      (select as HTMLSelectElement).value = selectedLanguage.googleCode;
      select.dispatchEvent(new Event("change"));
    }
  }, [selectedLanguage]);

  const handleChangeLanguage = (code: string) => {
    router.push(router.pathname, router.asPath, { locale: code });
    
    const language = languages.find((lang) => lang.code === code);
    if (language) {
      setSelectedLanguage(language);
    }
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
              className="flex items-center gap-4 text-black p-2 cursor-pointer hover:bg-gray-100 rounded-xl"
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
