import { LanguageCode } from "@/utils";
import { Input } from "@headlessui/react";
import axios from "axios";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { NextRouter, useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useState } from "react";

export const SignUpInput = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const nextRouter: NextRouter = useRouter();
  const handleChange = (value: string) => {
    setEmail(value);
  };
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      enqueueSnackbar("Please enter a valid email address.", {
        variant: "error",
      });
      return;
    }

    try {
      const response = await axios.post(`/api/${nextRouter.locale || LanguageCode.Global}/ready-to-grow`, { email });
      if (response.status === 201) {
        enqueueSnackbar(
          "Thank you for getting in touch! Our representative will contact you via email",
          {
            variant: "success",
          }
        );
        setEmail("");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar("An unexpected error occurred. Please try again later", {
        variant: "error",
      });
    }
  };

  return (
    <form className="flex items-center max-w-[450px] w-full rounded-2xl border border-gray-300 p-0.5">
      <Input
        className={clsx(
          "block w-full rounded-xl px-6 h-12 md:h-[50px] text-xs sm:text-lg",
          "focus:outline-none"
        )}
        placeholder="Please enter your E-mail"
        value={email}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        className="btn primary-btn text-sm whitespace-nowrap"
        disabled={!email}
        onClick={handleSubmit}
      >
        {t("ready_to_grow")}
      </button>
    </form>
  );
};
