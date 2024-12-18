import React from 'react';
import { MeetingLink } from "@/components/widgets";
import { useTranslations } from "next-intl";
const investors = [{
  date: "15/09/2023",
  name: 'Strategic Review Announcement',
  pdfUrl:'/pdfs/2023-09-15-Strategic-Review-Announcement-WEBSITE.pdf',
  id: 1,
},
{
  date: "18/09/2023",
  name: 'Rule 2.11 Letter to Shareholders',
  pdfUrl:'/pdfs/Rule-2.11-Letter-to-shareholders.pdf',
  id: 2,
},
{
  date: "29/09/2023",
  name: 'Form 8.0 (OPD) Premier Veterinary Group plc',
  pdfUrl:'/pdfs/PVG-Form-8-OPD.pdf',
  id: 3,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Andrew Carter',
  pdfUrl:'/pdfs/PVG-Form-8.3-Andrew-Carter.pdf',
  id: 4,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Ning Cao',
  pdfUrl:'/pdfs/PVG-Form-8.3-Ning-Cao.pdf',
  id: 5,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Andy Taylor',
  pdfUrl:'/pdfs/PVG-Form-8.3-Andy-Taylor.pdf',
  id: 6,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Iain Ross',
  pdfUrl:'/pdfs/PVG-Form-8.3-Iain-Ross.pdf',
  id: 7,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Gerry Harkins',
  pdfUrl:'/pdfs/PVG-Form-8.3-Gerry-Harkins.pdf',
  id: 8,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Matthew Turner',
  pdfUrl:'/pdfs/PVG-Form-8.3-Matthew-Turner.pdf',
  id: 9,
},{
  date: "29/09/2023",
  name: 'Form 8.3 – Denplan',
  pdfUrl:'/pdfs/PVG-Form-8.3-Denplan.pdf',
  id: 10,
},{
  date: "06/10/2023",
  name: 'Form 8.3 – Michael Somerset-Leeke',
  pdfUrl:'/pdfs/PVG-Form-8.3-Michael-Somerset-Leeke.pdf',
  id: 11,
},{
  date: "10/10/2023",
  name: 'Form 8.3 – Caspar Macdonald-Hall',
  pdfUrl:'/pdfs/PVG-Form-8.3-Caspar-Macdonald-Hall.pdf',
  id: 12,
},{
  date: "12/10/2023",
  name: 'Form 8.3 – Anthony Miller',
  pdfUrl:'/pdfs/Anthony-Miller-Form-8.3.pdf',
  id: 13,
},{
  date: "15/03/2024",
  name: 'Strategic Review Update Announcement',
  pdfUrl:'/pdfs/Strategic-review-update-announcement.pdf',
  id: 14,
}]
export const StrategicReviewSection = () => {
  const t = useTranslations('Investors');


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
        {t('strategic_review')}
      </div>
      {investors && investors.length > 0 && investors.map((investor, index) => (
        <div key={index} className="flex justify-between flex-col md:flex-row border-b border-b-gray-200 py-10">
          <div className="text-[32px] font-bold text-primary mb-2">{investor.date}</div>
          <div className="max-w-[847px] w-full flex flex-col gap-4">
            <MeetingLink pdfUrl={investor.pdfUrl} name={investor.name} downloadPdf={downloadPdf}/>
          </div>
        </div>
      ))}
    </section>
  );
};
