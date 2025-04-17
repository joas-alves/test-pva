import { MeetingLink } from "@/components/widgets";
import { useTranslations } from "next-intl";

export const GeneralMeetingSection = () => {
  const t = useTranslations("Investors");

  const downloadPdf = (download: boolean, link: string,name: string) => {
    if (download) {
      const linkElement = document.createElement('a');
      linkElement.href = link;
      linkElement.download = name + '.pdf';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <section className="container mx-auto py-10">
      <div className="sub-heading mb-2">
        {t("annual_report_and_annual_general_meetings")}
      </div>
      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2025</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink pdfUrl='/pdfs/2025-AGM-Notice-Final.pdf' name="2025-AGM-Notice-Final" downloadPdf={downloadPdf}/>
          <MeetingLink pdfUrl='/pdfs/2024-PVG-Annual-Report-FINAL.pdf' name="2024-PVG-Annual-Report-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2025-AGM-Votes-FINAL.pdf' name="2025-AGM-Votes-Final" downloadPdf={downloadPdf}/>
          <MeetingLink pdfUrl='/pdfs/2025-AGM-QA-FINAL.pdf' name="2025-AGM-QA-Final" downloadPdf={downloadPdf}/>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2024</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink pdfUrl='/pdfs/2024-AGM-Notice-FINAL.pdf' name="2024-AGM-Notice-Final" downloadPdf={downloadPdf}/>
          <MeetingLink pdfUrl='/pdfs/2023-PVG-Annual-Report-FINAL.pdf' name="2023-PVG-Annual-Report-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2024-AGM-Votes-FINAL.pdf' name="2024-AGM-Votes-Final" downloadPdf={downloadPdf} />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2023</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink pdfUrl='/pdfs/2023-AGM-Notice-FINAL.pdf' name="2023-AGM-Notice-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2022-PVG-Annual-Report-FINAL-1.pdf' name="2022-PVG-Annual-Report-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2023-pvg-agm-Votes-FINAL-1.pdf' name="2023-AGM-Votes-Final" downloadPdf={downloadPdf} />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2022</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink pdfUrl='/pdfs/2022-PVG-AGM-Notice-of-Meeting-FINAL-2.pdf' name="2022-AGM-Notice-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2021-PVG-Annual-Report-Web-2.pdf' name="2021-PVG-Annual-Report-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2022-PVG-AGM-Votes-FINAL.pdf' name="2022-AGM-Votes-Final" downloadPdf={downloadPdf} />
        </div>
      </div>

      <div className="flex justify-between flex-col md:flex-row py-10">
        <div className="text-[32px] font-bold text-primary mb-2">AGM 2021</div>
        <div className="max-w-[847px] w-full flex flex-col gap-4">
          <MeetingLink pdfUrl='/pdfs/2021-AGM-Notice-FINAL-web.pdf' name="2021-AGM-Notice-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2020-PVG-ARA-30-Sept-FINAL-web.pdf' name="2020-PVG-Annual-Report-Final" downloadPdf={downloadPdf} />
          <MeetingLink pdfUrl='/pdfs/2021-AGM-Proxy-Results-for-Web-Site-1.pdf' name="2021-AGM-Votes-Final" downloadPdf={downloadPdf} />
        </div>
      </div>
    </section>
  );
};
