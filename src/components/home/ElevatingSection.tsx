import Image from "next/image";
import { PiChartLineUpLight } from "react-icons/pi";
import { RiGlobalLine } from "react-icons/ri";

export const ElevatingSection = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="md:flex-1">
          <div className="mb-6">
            <h2 className="sub-heading">Dedicated to <span className="text-primary">Elevating</span></h2>
            <h2 className="sub-heading"><span className="text-primary">Pet Health</span> Worldwide</h2>
          </div>

          <div className="max-w-[512px] mb-8">
            <p className="text-secondary body mb-3">
              Premier Vet Alliance combines cutting-edge technology, investment, and support to develop world-class preventative health plans.
            </p>
            <p className="text-secondary body">
              With over a decade of experience, we are a leading veterinary group delivering premium care worldwide.
            </p>
          </div>

          <button className="btn primary-outline-btn">Learn More</button>
        </div>

        <div className="flex items-start">
          <div className="w-[154px] sm:w-[302px] flex-shrink-0 bg-[url('/images/double-circles.png')] bg-no-repeat rounded-3xl shadow-paper px-4 md:px-7 py-6 md:py-9 mt-10 md:mt-20 -mr-20 relative bg-white">
            <div className="pl-5 md:pl-10">
              <span className="w-8 md:w-[60px] h-8 md:h-[60px] rounded-lg md:rounded-2xl flex items-center justify-center bg-primary">
                <PiChartLineUpLight className="text-white text-md md:text-2xl" />
              </span>
            </div>

            <div className="text-center py-5 md:py-9">
              <div className="sub-head-value mb-2">2,360+</div>
              <div className="text-xs md:text-sm text-secondary">Number of practices we operate in</div>
            </div>

            <div className="flex justify-end pr-5 md:pr-10">
              <span className="w-8 md:w-[60px] h-8 md:h-[60px] rounded-lg md:rounded-2xl flex items-center justify-center bg-info">
                <RiGlobalLine className="text-white text-md md:text-2xl" />
              </span>
            </div>

          </div>
          <Image className="w-[240px] md:w-auto" src="/images/elevating-doctor-cat.png" width={412} height={365} alt="cat" />
        </div>
      </div>
    </section>
  )
}
