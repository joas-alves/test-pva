import { MeetingLink } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const GeneralMeetingSection = () => {
  const t = useTranslations('Investors');

  return (
    <section className="container mx-auto py-10">
      <div className="sub-heading mb-2">
        {t('notice_of_annual_meeting')}
      </div>
      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2024</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink name="2024-AGM-Notice-Final" />
          <MeetingLink name="2023-PVG-Annual-Report-FINAL" />
          <MeetingLink name="2024-AGM-Votes-Final" />
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2023</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink name="2024-AGM-Notice-Final" />
          <MeetingLink name="2023-PVG-Annual-Report-FINAL" />
          <MeetingLink name="2024-AGM-Votes-Final" />
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2022</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink name="2024-AGM-Notice-Final" />
          <MeetingLink name="2023-PVG-Annual-Report-FINAL" />
          <MeetingLink name="2024-AGM-Votes-Final" />
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2021</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink name="2024-AGM-Notice-Final" />
          <MeetingLink name="2023-PVG-Annual-Report-FINAL" />
          <MeetingLink name="2024-AGM-Votes-Final" />
        </div>
      </div>
    </section>
  )
}
