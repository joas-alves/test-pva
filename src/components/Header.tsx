import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { DropdownMenu, LanguageMenu } from "@/components/widgets";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { useServicesContext } from "../contexts/services.js";
import { IServicePage } from "@/cms-models/service";
import axios from "axios";

const Header = () => {
  const t = useTranslations("Header");
  const ct = useTranslations("Common");
  const router: NextRouter = useRouter();
  // @ts-expect-error contexts
  const { services, setServices } = useServicesContext();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `/api/${router.locale}/service-contents`
        );
        if (response.status === 200) {
          return setServices(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {}
    })();
  }, [router.locale]);

  return (
    <header className="container mx-auto flex items-center py-4">
      <RiMenuLine className="cursor-pointer mr-5 flex-shrink-0 block md:hidden" />
      <Link href="/">
        <Image
          className="mr-10 w-[100px] sm:w-auto"
          src="/images/logo.svg"
          width={170}
          height={70}
          alt="logo"
        />
      </Link>
      <nav className="hidden md:flex gap-4">
        <Link href="/">
          <div className="">{t("home")}</div>
        </Link>
        <div className="flex gap-2">
          <Link href="/services">{t("service")}</Link>
          <DropdownMenu
            label={""}
            options={services?.map((item: IServicePage) => ({
              id: item.id,
              label: `Service ${item.id}`,
            }))}
            onChangeMenu={(id) =>
              router.push(`/services/${id === 1 ? "post-2-pet" : "vet-2-pet"}`)
            }
          />
        </div>

        <Link href="/about-us">
          <div className="flex items-center gap-0.5">
            {t("about")}
            <FiChevronDown />
          </div>
        </Link>
        <Link href="/news">
          <div>{t("news")}</div>
        </Link>
        <Link href="/contact-us">
          <div>{t("contact")}</div>
        </Link>
      </nav>
      <div className="flex-1" />
      <div className="flex items-center gap-8">
        <div className="hidden md:block">{ct("pet_owner_click_here")}</div>
        <span className="hidden md:block">
          <LanguageMenu />
        </span>
        <Link href="/book-demo">
          <button className="btn primary-outline-btn">
            {ct("get_in_touch")}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
