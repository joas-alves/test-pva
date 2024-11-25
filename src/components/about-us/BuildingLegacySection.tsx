import { IAboutPage } from "@/cms-models/about";
import React from "react";

type Props = {
  data: IAboutPage;
}

export const BuildingLegacySection: React.FC<Props> = ({ data }) => {
  // const t = useTranslations('About');

  return (
    <section className="bg-dark-blue pt-14 md:pt-20 pb-16 md:pb-[100px] bg-[url('/images/ellipse-1.png'),url('/images/ellipse-2.png')] bg-no-repeat bg-right-bottom">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-8 md:mb-10">
          <h2
            className="text-white max-w-[804px] sub-heading text-left md:text-center mb-4 md:mb-6"
            dangerouslySetInnerHTML={{ __html: data.section4_title }}
          />
          <p className="text-gray-200 body text-left md:text-center max-w-[600px]">
            {data.section4_description}
          </p>
        </div>

        {/* Desktop */}
        <div className="text-white hidden lg:block">
          <div className="grid grid-cols-4 gap-3">
            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: data.section4_card1_title }} />
              <div className="text-gray-400">
                {data.section4_card1_description}
              </div>
            </div>

            <div className="text-[64px] font-bold flex flex-col justify-end text-center">
              {data.section4_card2_date}
            </div>

            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: data.section4_card2_title }} />
              <div className="text-gray-400">
                {data.section4_card2_description}
              </div>
            </div>

            <div className="text-[64px] font-bold flex flex-col justify-end text-center">
              {data.section4_card4_date}
            </div>
          </div>

          <div className="px-[133px] mt-5">
            <div className="w-full border-t border-dashed border-t-2 border-primary-light flex justify-between">
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
              <span className="w-5 h-5 border border-[3px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue -translate-y-[10px]">
                <span className="w-3 h-3 bg-primary-light rounded-full" />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="text-[64px] font-bold text-center">
              {data.section4_card1_date}
            </div>

            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: data.section4_card3_title }} />
              <div className="text-gray-400">
                {data.section4_card3_description}
              </div>
            </div>

            <div className="text-[64px] font-bold text-center">
              {data.section4_card3_date}
            </div>

            <div className="rounded-2xl p-6 bg-dark-info">
              <div className="text-2xl font-bold text-white mb-3" dangerouslySetInnerHTML={{ __html: data.section4_card4_title }} />
              <div className="text-gray-400">
                {data.section4_card4_description}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block lg:hidden text-white flex flex-col gap-4">
          <div className="flex items-center gap-4 relative">
            <div className="text-2xl font-bold text-center flex items-center min-w-[67px]">
              {data.section4_card1_date}
            </div>
            <span className="w-[14px] h-[14px] border border-[2px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue flex-shrink-0 vertical-milestone">
              <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
            </span>
            <div className="rounded-2xl p-5 bg-dark-info">
              <div className="text-lg font-bold text-white mb-2.5" dangerouslySetInnerHTML={{ __html: data.section4_card1_title }} />
              <div className="text-xs text-gray-400">
                {data.section4_card1_description}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 relative">
            <div className="text-2xl font-bold text-center flex items-center min-w-[67px]">
              {data.section4_card2_date}
            </div>
            <span className="w-[14px] h-[14px] border border-[2px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue flex-shrink-0 vertical-milestone">
              <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
            </span>
            <div className="rounded-2xl p-5 bg-dark-info">
              <div className="text-lg font-bold text-white mb-2.5" dangerouslySetInnerHTML={{ __html: data.section4_card2_title }} />
              <div className="text-xs text-gray-400">
                {data.section4_card2_description}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 relative">
            <div className="text-2xl font-bold text-center flex items-center min-w-[67px]">
              {data.section4_card3_date}
            </div>
            <span className="w-[14px] h-[14px] border border-[2px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue flex-shrink-0 vertical-milestone">
              <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
            </span>
            <div className="rounded-2xl p-5 bg-dark-info">
              <div className="text-lg font-bold text-white mb-2.5" dangerouslySetInnerHTML={{ __html: data.section4_card3_title }} />
              <div className="text-xs text-gray-400">
                {data.section4_card3_description}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-center flex items-center min-w-[67px]">
              {data.section4_card4_date}
            </div>
            <span className="w-[14px] h-[14px] border border-[2px] border-primary-light rounded-full flex justify-center items-center bg-dark-blue flex-shrink-0">
              <span className="w-1.5 h-1.5 bg-primary-light rounded-full" />
            </span>
            <div className="rounded-2xl p-5 bg-dark-info">
              <div className="text-lg font-bold text-white mb-2.5" dangerouslySetInnerHTML={{ __html: data.section4_card4_title }} />
              <div className="text-xs text-gray-400">
                {data.section4_card4_description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
