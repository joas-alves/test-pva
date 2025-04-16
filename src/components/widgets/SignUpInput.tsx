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
      enqueueSnackbar(t("please_enter_a_valid_email_address"), {
        variant: "error",
      });
      return;
    }

    try {
      const response = await axios.post(`/api/${nextRouter.locale || LanguageCode.Global}/ready-to-grow`, { email });
      if (response.status === 201) {
        enqueueSnackbar(
          t("thank_you_for_getting_in_touch"),
          {
            variant: "success",
          }
        );
        setEmail("");
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar(t("an_unexpected_error_occurred_please_try_again_later"), {
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
        placeholder={t("please_enter_your_e_mail")}
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
