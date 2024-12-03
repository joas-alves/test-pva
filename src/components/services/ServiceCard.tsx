import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
  variant?: "white" | "info";
  align?: "left" | "right";
  backgroundClassName?: string;
};

export const ServiceCard: React.FC<Props> = ({
  image,
  title,
  description,
  variant = "white",
  align = "left", // Default align value is "left"
  backgroundClassName,
}) => {
  const t = useTranslations("Common");

  return (
    <div
      className={clsx(
        "p-8 rounded-2xl shadow-paper bg-no-repeat",
        variant === "info" && "text-white bg-info",
        backgroundClassName,
        align === "left" ? "text-left justify-start" : "text-right"
      )}
    >
      <div
        className={clsx(
          "flex",
          align === "left" ? "justify-start" : "justify-end"
        )}
      >
        <Image
          className={clsx(
            "mb-12 md:mb-20 w-12 md:w-auto",
            align === "left" ? "ml-0" : "mr-0"
          )}
          src={`/images/${image}`}
          alt="group"
          width={80}
          height={80}
        />
      </div>
      <div
        className={clsx(
          "text-2xl md:text-[32px] font-bold leading-10 mb-3 md:mb-4",
          align === "left" ? "text-left" : "text-right"
        )}
      >
        {title}
      </div>
      <div
        className={clsx(
          "flex",
          align === "left" ? "justify-start" : "justify-end"
        )}
      >
        <div
          className={clsx(
            "body mb-6 md:mb-8 max-w-[455px] text-secondary",
            variant === "info" && "text-white"
          )}
        >
          {description}
        </div>
      </div>

      <span
        className={clsx(
          "body text-info font-medium",
          variant === "info" && "text-white",
          align === "left" ? "text-left" : "text-justify"
        )}
      >
        {t("learn_more")}
      </span>
    </div>
  );
};
