import { IServicePage } from "@/cms-models/service";
import { DropdownMenu, LanguageMenu } from "@/components/widgets";
import { servicesRouteMapping } from "@/utils";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { DropdownMenu, LanguageMenu } from "@/components/widgets";
import { servicesRouteMapping } from "@/utils";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NextRouter, useRouter } from "next/router";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { useServicesContext } from "../contexts/services.js";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const t = useTranslations("Header");
  const ct = useTranslations("Common");
  const router: NextRouter = useRouter();
  // @ts-expect-error contexts
  const { services, setServices } = useServicesContext();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <>
      <header className="container mx-auto flex items-center py-4">
        <RiMenuLine
          className="cursor-pointer mr-5 flex-shrink-0 block lg:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
        <Link href="/">
          <Image
            className="mr-10 w-[100px] sm:w-auto"
            src="/images/logo.svg"
            width={170}
            height={70}
            alt="logo"
          />
        </Link>
        <nav className="hidden lg:flex gap-4 whitespace-nowrap">
          <Link href="/">
            <div className="">{t("home")}</div>
          </Link>
          <div className="flex gap-2">
            <Link href="/services">{t("service")}</Link>
            <DropdownMenu
              label={""}
              options={services?.map((item: IServicePage) => ({
                id: item.id,
                label: servicesRouteMapping[item.id].name,
              }))}
              onChangeMenu={(id) =>
                router.push(`/services/${servicesRouteMapping[id].slug}`)
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
          <div className="hidden lg:block lg:w-[175px] lg:whitespace-nowrap lg:overflow-ellipsis lg:overflow-hidden ">
            {ct("pet_owner_click_here")}
          </div>
          <span className="hidden lg:block">
            <LanguageMenu />
          </span>
          <Link href="/book-demo">
            <button className="btn primary-outline-btn lg:w-auto">
              {ct("get_in_touch")}
            </button>
          </Link>
        </div>
      </header>
      <Dialog
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        className="fixed inset-0 z-50 flex"
      >
        {/* <Dialog className="fixed inset-0 bg-black opacity-30" /> */}
        <div className="relative bg-white w-64 p-4">
          <button
            className="absolute top-4 right-4 font-bold"
            onClick={() => setIsSidebarOpen(false)}
          >
            X
          </button>
          <nav
            className="flex flex-col gap-4"
            onClick={() => setIsSidebarOpen(false)}
          >
            <Link href="/">
              <div className="">{t("home")}</div>
            </Link>
            <div className="flex gap-2">
              <Link href="/services">{t("service")}</Link>
              <DropdownMenu
                label={""}
                options={services?.map((item: IServicePage) => ({
                  id: item.id,
                  label: servicesRouteMapping[item.id].name,
                }))}
                onChangeMenu={(id) =>
                  router.push(`/services/${servicesRouteMapping[id].slug}`)
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
          {/* <div className="flex-1" /> */}
          <div className="flex flex-col mt-10">
            <div className="flex justify-between mb-3">
              <div className="w-[140px]">{ct("pet_owner_click_here")}</div>
              <span className="">
                <LanguageMenu />
              </span>
            </div>
            <Link href="/book-demo">
              <button
                className="btn primary-outline-btn"
                onClick={() => setIsSidebarOpen(false)}
              >
                {ct("get_in_touch")}
              </button>
            </Link>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
