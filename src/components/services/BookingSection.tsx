import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const ServiceBookingSection = () => {
  const t = useTranslations("ServiceBooking");
  
  return (
    <div className="flex flex-col gap-8 justify-center items-center px-4">
      <p className="text-xl max-w-[600px] w-full mx-auto text-primary text-center">
        {t("take_first_steps")}
      </p>
      <Link href="/get-in-touch">
        <button className="btn primary-outline-btn font-bold mb-[25px] px-10 self-center">
            {t("get_in_touch")}
        </button>
      </Link>
    </div>
  );
};

export { ServiceBookingSection };
