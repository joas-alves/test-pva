import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

export const NewSection = () => {
  return (
    <section className="container mx-auto py-20 pb-10">
      <div className="flex items-center mb-12">
        <h2 className="sub-heading">
          <span className="text-primary">What’s New</span> in Veterinary Care
        </h2>
        <div className="flex-1" />
        <button className="hidden md:block btn primary-outline-btn">Discover All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl shadow-paper overflow-hidden">
          <Image className="w-full" src="/images/new-chart.png" alt="chart" width={411} height={256} />
          <div className="p-6 sm:p-8">
            <div className="flex items-center text-secondary mb-5 sm:mb-6 gap-1">
              <CiClock2 className="text-base sm:text-xl" />
              <span className="text-sm sm:text-base">Sep 18, 2024</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Gen X and Millennials are Ruling the Roost!
            </div>
            <p className="text-sm mb-5 sm:mb-6 text-secondary">
              The highest percentage of today’s new pet owners belong to the Gen X and Millennials. Are you targeting them?
            </p>
            <span className="font-medium text-info cursor-pointer text-sm sm:text-base">LEARN MORE</span>
          </div>
        </div>
        <div className="rounded-2xl shadow-paper overflow-hidden">
          <Image className="w-full" src="/images/new-talking.png" alt="talking" width={411} height={256} />
          <div className="p-6 sm:p-8">
            <div className="flex items-center text-secondary mb-5 sm:mb-6 gap-1">
              <CiClock2 className="text-base sm:text-xl" />
              <span className="text-sm sm:text-base">Sep 18, 2024</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Home Delivery – Why Are We Still Talking About It?!
            </div>
            <p className="text-sm mb-5 sm:mb-6 text-secondary">
              Owners who must collect products from their surgery stay on plan 22 fewer months than those who have a post option. Don’t let this be you.
            </p>
            <span className="font-medium text-info cursor-pointer text-sm sm:text-base">LEARN MORE</span>
          </div>
        </div>
        <div className="rounded-2xl shadow-paper overflow-hidden">
          <Image className="w-full" src="/images/new-cat-dot.png" alt="cat-dog" width={411} height={256} />
          <div className="p-6 sm:p-8">
            <div className="flex items-center text-secondary mb-5 sm:mb-6 gap-1">
              <CiClock2 className="text-base sm:text-xl" />
              <span className="text-sm sm:text-base">Sep 18, 2024</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Can You Guess the Top Cat and Dog Names in 2024?
            </div>
            <p className="text-sm mb-5 sm:mb-6 text-secondary">
              What are the three most common cat and dog names in 2024? We check them out and see how the PVA team’s guesses compare to the average.
            </p>
            <span className="font-medium text-info cursor-pointer text-sm sm:text-base">LEARN MORE</span>
          </div>
        </div>
      </div>

      <div className="block md:hidden flex justify-center pt-6">
        <button className="btn primary-outline-btn px-10">Discover All</button>
      </div>
    </section>
  )
}
