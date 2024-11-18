import React from 'react';
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import Link from "next/link";

type Props = {
  image: string;
  time: string;
  title: string;
  description: string;
}

export const NewsCard: React.FC<Props> = ({
  image,
  time,
  title,
  description
}) => {
  return (
    <Link href="/news/1">
      <div className="rounded-2xl shadow-paper overflow-hidden">
        <Image
          className="w-full"
          src={`/images/${image}`}
          alt="chart"
          width={411}
          height={256}
        />
        <div className="p-6 sm:p-8">
          <div className="flex items-center text-secondary mb-5 sm:mb-6 gap-1">
            <CiClock2 className="text-base sm:text-xl" />
            <span className="text-sm sm:text-base">{time}</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {title}
          </div>
          <p className="text-sm mb-5 sm:mb-6 text-secondary">
            {description}
          </p>
          <span className="font-medium text-info cursor-pointer text-sm sm:text-base">LEARN MORE</span>
        </div>
      </div>
    </Link>
  )
}
