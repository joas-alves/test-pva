import Image from "next/image";
import { GoStarFill } from "react-icons/go";

type Props = {
  rate?: number;
  user: {
    name: string | null;
    username: string | null;
    image: string | null;
  } | null;
  message: string;
};

export const ReviewCarouselCard: React.FC<Props> = ({
  rate = 5,
  user,
  message,
}) => {
  return (
    <div className="shadow-paper rounded-3xl md:py-8 md:px-10">
      <div className="flex md:hidden items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-100"></div>
        <div>
          <p>{user?.name}</p>
          <p className="text-sm text-secondary">{user?.username}</p>
        </div>
      </div>
      <Image
        className="mb-10 hidden md:block"
        src="/images/quote.svg"
        width={48}
        height={34}
        alt="quote"
      />
      <div className="text-base md:text-xl font-light mb-12">{message}</div>
      <div className="flex justify-between items-center">
        <div className="hidden md:flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100">
            {user?.image && <img src={user.image} className="w-16" />}
          </div>
          <div>
            <p>{user?.name}</p>
            <p className="text-sm text-secondary">{user?.username}</p>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2 text-warning text-lg md:text-2xl">
          {[...Array(Math.round(rate))].map((_, index) => (
            <GoStarFill key={index} />
          ))}
          <span className="text-secondary ml-2 text-base md:text-2xl">5.0</span>
        </div>
      </div>
    </div>
  );
};
