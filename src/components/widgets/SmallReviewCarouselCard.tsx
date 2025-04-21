import { GoStarFill } from "react-icons/go";
import Image from "next/image";
export type ReviewUser = {
  name: string;
  username: string;
  image: string;
};

export type Review = {
  rate: number;
  message: string;
  user: ReviewUser;
};

type DataProp = Review



export const SmallReviewCarouselCard: React.FC<DataProp> = ({ rate, message, user: { image, name, username } }) => {
  return (
    <div className="shadow-paper rounded-3xl p-6 md:py-8 md:px-10 h-full lg:min-h-[500px]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100">
            {image && <Image src={image} className="w-16" alt={name || ""} />}
          </div>
          <div>
            <p className="text-sm md:text-base font-bold">{username}</p>
            <p className="text-xs md:text-sm text-secondary">{name}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 mb-6">
        <div>
          <div className="text-warning flex items-center text-sm gap-1">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <span className="text-dark-green text-sm mx-2">{rate}</span>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-base font-light">
        {message}
      </div>

    </div>
  )
}
