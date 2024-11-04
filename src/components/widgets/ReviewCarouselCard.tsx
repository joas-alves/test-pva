import Image from "next/image";
import { GoStarFill } from "react-icons/go";

export const ReviewCarouselCard = () => {
  return (
    <div className="shadow-paper rounded-3xl p-6 md:py-8 md:px-10">
      <div className="flex md:hidden items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gray-100"></div>
        <div>
          <p>Katie W.</p>
          <p className="text-sm text-secondary">Anderson Vets.</p>
        </div>
      </div>
      <Image className="mb-10 hidden md:block" src="/images/quote.svg" width={48} height={34} alt="quote" />
      <div className="text-base md:text-xl font-light mb-12">
        PVA understands vets! We get helpful and clear advice from coaches, and they display great product and practice knowledge. PVA coaches clearly understand clinical staff and client needs. The retention training really helped our staff speak to our clients about what the savings they make while being on a plan and this has reduced cancellations.
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden md:flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-100"></div>
          <div>
            <p>Katie W.</p>
            <p className="text-sm text-secondary">Anderson Vets.</p>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2 text-warning text-lg md:text-2xl">
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <span className="text-secondary ml-2 text-base md:text-2xl">5.0</span>
        </div>
      </div>
    </div>
  )
}
