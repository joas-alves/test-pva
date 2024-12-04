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
    <form className="flex items-center max-w-[410px] w-full rounded-2xl border border-gray-300 p-0.5">
      <input
        className="flex-1 text-sm pl-4 pr-0 sm:px-6"
        placeholder="Please enter your E-mail"
        value={email}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        className="btn primary-btn min-w-[113px]"
        disabled={!email}
        onClick={handleSubmit}
      >
        {t("ready_to_grow")}
      </button>
    </form>
  );
};
