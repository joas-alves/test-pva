import { Input } from "@headlessui/react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { useSnackbar } from "notistack";
import { useState } from "react";

export const SignUpInput = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const handleChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email);
    enqueueSnackbar("Thank you for getting in touch!", {
      variant: "success",
    });
    setEmail("");
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
