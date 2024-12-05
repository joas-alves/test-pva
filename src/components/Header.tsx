import { LanguageMenu } from "@/components/widgets";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";
import { useServicesContext } from "../contexts/services";
import { ServicesDropdown } from "./widgets/services-dropdown";

const Header = () => {
  const t = useTranslations("Header");
  const ct = useTranslations("Common");
  const router: NextRouter = useRouter();
  const { setServices } = useServicesContext();
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
      } catch (error) { }
    })();
  }, [router.locale, setServices]);

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
          <ServicesDropdown />

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
          <Link href="/get-in-touch">
            <button className="btn primary-outline-btn lg:w-auto">
              {ct("get_in_touch")}
            </button>
          </Link>
        </div>
      </header>
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex"
          onClose={() => setIsSidebarOpen(false)}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-30"
              onClick={() => setIsSidebarOpen(false)}
            />
          </Transition.Child>

          {/* Sidebar Content */}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative bg-white w-64 p-4">
              <button
                className="absolute top-4 right-4 font-bold"
                onClick={() => setIsSidebarOpen(false)}
              >
                X
              </button>
              <nav className="flex flex-col gap-4 pt-10">
                <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                  {/* <div className="">{t("home333")}</div> */}
                  <Image
                    className="mr-10 w-[100px] sm:w-auto"
                    src="/images/logo.svg"
                    width={170}
                    height={70}
                    alt="logo"
                  />
                  {/* src="/images/logo.svg" */}
                </Link>
                <ServicesDropdown />

                <Link href="/about-us" onClick={() => setIsSidebarOpen(false)}>
                  <div className="flex items-center gap-0.5">
                    {t("about")}
                    <FiChevronDown />
                  </div>
                </Link>
                <Link href="/news" onClick={() => setIsSidebarOpen(false)}>
                  <div>{t("news")}</div>
                </Link>
                <Link
                  href="/contact-us"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div>{t("contact")}</div>
                </Link>
              </nav>
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
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;
