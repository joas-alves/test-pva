import { imageUrl, cleanText } from "@/utils";
import { dateFormater } from "@/utils/dataConverter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";

type Props = {
  id?: number;
  image: string | null;
  time: string;
  title: string;
  description: string;
};

export const NewsCard: React.FC<Props> = ({
  id = 1,
  image,
  time,
  title,
  description,
}) => {
  const images = image ? JSON.parse(image) : null;

  const slug = cleanText(title)
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with dashes
  .replace(/^-+|-+$/g, ""); // Trim leading or trailing dashes

const link = `${slug}?id=${encodeURIComponent(id)}`;

  return (
    <Link href={`/news/${link}`}>
      <div className="rounded-2xl shadow-paper overflow-hidden">
        {images && (
          <Image
            className="w-full"
            src={imageUrl(images?.[0] ?? "")}
            alt="chart"
            width={411}
            height={256}
          />
        )}

        <div className="p-6 sm:p-8">
          <div className="flex items-center text-secondary mb-5 sm:mb-6 gap-1">
            <CiClock2 className="text-base sm:text-xl" />
            <span className="text-sm sm:text-base">
              {dateFormater(time, "YYYY-MM-DD")}
            </span>
          </div>
          <div
            className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-sm mb-5 sm:mb-6 text-secondary">{description}</p>
          <span className="font-medium text-info cursor-pointer text-sm sm:text-base">
            LEARN MORE
          </span>
        </div>
      </div>
    </Link>
  );
};
