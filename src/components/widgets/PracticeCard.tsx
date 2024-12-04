import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  description: string;
  variant?: "white" | "info";
  backgroundClassName?: string;
  link?: string;
};

export const PracticeCard: React.FC<Props> = ({
  image,
  title,
  description,
  variant = "white",
  backgroundClassName,
  link = "#",
}) => {
  const t = useTranslations("Common");

  return (
    <div
      className={clsx(
        "p-8 rounded-2xl shadow-paper bg-no-repeat",
        variant === "info" && "text-white bg-info",
        backgroundClassName
      )}
    >
      <Image
        className="mb-12 md:mb-20 w-12 md:w-auto"
        src={`/images/${image}`}
        alt="group"
        width={80}
        height={80}
      />
      <div className="text-2xl md:text-[32px] font-bold leading-10 mb-3 md:mb-4">
        {title}
      </div>
      <div
        className={clsx(
          "body mb-6 md:mb-8 max-w-[455px] text-secondary",
          variant === "info" && "text-white"
        )}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <Link href={link}>
        <span
          className={clsx(
            "body text-info font-medium",
            variant === "info" && "text-white"
          )}
        >
          {t("learn_more")}
        </span>
      </Link>
    </div>
  );
};
