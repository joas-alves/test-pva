import Image from "next/image";

export const MapSection = () => {
  return (
    <section className="bg-dark-blue pt-14 md:pt-20 pb-16 md:pb-[100px] bg-[url('/images/map.png')] md:bg-none bg-no-repeat bg-center bg-140% bg-bottom bg-center-64%">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-white max-w-[804px] sub-heading text-left md:text-center mb-4 md:mb-6">
            Expanding Horizons: Premier Vet Alliance Across the Globe
          </h2>
          <p className="text-gray-200 body text-left md:text-center max-w-[600px]">
            See how Premier Vet Alliance partners with veterinary practices worldwide, bringing top-tier pet care solutions to clinics across the globe.
          </p>
        </div>
        <div className="block md:hidden h-[367px]" />
        <Image className="hidden md:block" src="/images/map.png" width={1280} height={583} alt="map" />
        <div className="flex gap-6 justify-between w-full sm:w-3/5 text-white -mt-[19%]">
          <div className="flex flex-col items-center">
            <div className="text-[48px] md:text-[120px] font-bold">3K+</div>
            <div className="text-sm md:text-lg font-light">practices</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[48px] md:text-[120px] font-bold">6</div>
            <div className="text-sm md:text-lg font-light">countries</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[48px] md:text-[120px] font-bold">2</div>
            <div className="text-sm md:text-lg font-light">continents</div>
          </div>
        </div>
      </div>
    </section>
  )
}
