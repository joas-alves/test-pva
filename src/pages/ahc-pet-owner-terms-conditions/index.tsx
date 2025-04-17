import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AHCPetOwner() {
  const t = useTranslations("AHCPetOwner");
  
  return (
    <section className="container mx-auto pt-10 pb-40">
      <div className="col-md-8 m-auto">
        <h1 className="sub-heading mb-6">
          <span className="text-primary">{t("ahc_pet_owner")}</span> {t("terms_and_conditions")}
        </h1>
        <p className="text-lg mb-4">
          <Link
            className="font-bold text-primary hover:underline"
            href="/pdfs/AHC-Pet-Owner-Ts-Cs-Feb-2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("download_link")}
          </Link>
        </p>

        <p className="text-lg mb-4">
          <strong>
            {t("agreement_title")}
          </strong>
        </p>

        <p className="text-lg mb-4">
          {t("welcome_text")}
        </p>

        <p className="text-lg mb-4">
          {t("payment_plan_text")}
        </p>

        <p className="text-lg mb-4">
          {t("terms_intro")}
        </p>

        <h2 className="sub-heading mb-4 text-2xl ">{t("section1_title")}</h2>
        <p className="text-lg mb-4">{t("section1_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section2_title")}</h2>
        <p className="text-lg mb-4">{t("section2_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section3_title")}</h2>
        <p className="text-lg mb-4">{t("section3_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section4_title")}</h2>
        <p className="text-lg mb-4">{t("section4_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section5_title")}</h2>
        <p className="text-lg mb-4">{t("section5_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section6_title")}</h2>
        <p className="text-lg mb-4">{t("section6_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section7_title")}</h2>
        <p className="text-lg mb-4">{t("section7_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section8_title")}</h2>
        <p className="text-lg mb-4">{t("section8_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section9_title")}</h2>
        <p className="text-lg mb-4">{t("section9_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section10_title")}</h2>
        <p className="text-lg mb-4">{t("section10_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section11_title")}</h2>
        <p className="text-lg mb-4">{t("section11_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section12_title")}</h2>
        <p className="text-lg mb-4">{t("section12_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section13_title")}</h2>
        <p className="text-lg mb-4">{t("section13_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section14_title")}</h2>
        <p className="text-lg mb-4">{t("section14_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section15_title")}</h2>
        <p className="text-lg mb-4">{t("section15_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section16_title")}</h2>
        <p className="text-lg mb-4">{t("section16_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section17_title")}</h2>
        <p className="text-lg mb-4">{t("section17_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section18_title")}</h2>
        <p className="text-lg mb-4">{t("section18_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section19_title")}</h2>
        <p className="text-lg mb-4">{t("section19_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section20_title")}</h2>
        <p className="text-lg mb-4">{t("section20_content1")}</p>
        <p className="text-lg mb-4">{t("section20_content2")}</p>
        <p className="text-lg mb-4">{t("section20_content3")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section21_title")}</h2>
        <p className="text-lg mb-4">{t("section21_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section22_title")}</h2>
        <p className="text-lg mb-4">{t("section22_content")}</p>
        
        <h2 className="sub-heading mb-4 text-2xl ">{t("section23_title")}</h2>
        <p className="text-lg mb-4">{t("section23_content1")}</p>
        <p className="text-lg mb-4">{t("section23_content2")}</p>
        <p className="text-lg mb-4">{t("section23_content3")}</p>
        <p className="text-lg mb-4">{t("section23_content4")}</p>
        <p className="text-lg mb-4">{t("section23_content5")}</p>

        <p className="text-lg mb-4"></p>

        <div className="wp-block-image">
          <Image
            width={150}
            height={150}
            alt="debit image"
            src="/images/Direct-Debit-Logo.png"
          />
          <p className="text-lg my-4">
            <strong>{t("direct_debit_guarantee")}</strong>
          </p>

          <ul className="list-disc pl-5 flex flex-col gap-1 text-lg mb-4">
            <li>{t("direct_debit_point1")}</li>
          </ul>

          <ul className="list-disc pl-5 flex flex-col gap-1 text-lg mb-4">
            <li>{t("direct_debit_point2")}</li>
          </ul>

          <ul className="list-disc pl-5 flex flex-col gap-1 text-lg mb-4">
            <li>{t("direct_debit_point3")}</li>
            <li>{t("direct_debit_point4")}</li>
            <li>{t("direct_debit_point5")}</li>
          </ul>

          <p className="text-lg mb-4"></p>
        </div>
      </div>
    </section>
  );
}
