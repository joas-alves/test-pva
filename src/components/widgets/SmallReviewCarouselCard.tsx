import { GoStarFill } from "react-icons/go";

export const SmallReviewCarouselCard = () => {
  return (
    <div className="shadow-paper rounded-3xl p-6 md:py-8 md:px-10">
      <div className="flex gap-1 mb-6">
        <div>
          <div className="text-dark-green">Reviews</div>
          <div className="text-warning flex items-center text-sm gap-1">
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <GoStarFill />
            <span className="text-dark-green text-sm mx-2">4.8(70)</span>
          </div>
        </div>
      </div>
      <div className="text-sm md:text-base font-light mb-10 md:mb-20">
        PVA understands vets! We get helpful and clear advice from coaches, and they display great product and practice knowledge. PVA coaches clearly understand clinical staff and client needs. The retention training really helped our staff speak to our clients about what the savings they make while being on a plan and this has reduced cancellations.
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100"></div>
          <div>
            <p className="text-sm md:text-base font-bold">Katie W.</p>
            <p className="text-xs md:text-sm text-secondary">Anderson Vets.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
