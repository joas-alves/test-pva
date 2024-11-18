import React from 'react';
import Image from "next/image";
import clsx from 'clsx';

type Props = {
  image: string;
  title: string;
  description: string;
  variant?: 'white' | 'info';
}

export const FeatureCard: React.FC<Props> = ({
  image,
  title,
  description,
  variant = 'white',
}) => {
  return (
    <div className={clsx("p-8 rounded-2xl shadow-paper", variant === 'info' && 'text-white bg-info')}>
      <Image className="mb-6 md:mb-12 w-12 md:w-auto" src={`/images/icons/${image}`} alt="group" width={80} height={80} />
      <div className="text-2xl md:text-[32px] font-bold leading-10 mb-3 md:mb-4">
        {title}
      </div>
      <div className={clsx("body max-w-[455px] text-secondary", variant === 'info' && 'text-white')}>
        {description}
      </div>
    </div>
  )
}
