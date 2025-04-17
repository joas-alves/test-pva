import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const VoyargerPetOwnerTermsConditions = () => {
  const t = useTranslations("PetOwnerTerms");
  
  return (
    <section className="container mx-auto pt-10 pb-40 px-4">
      <h1 className="heading text-center mb-12 md:mb-16">
        <span className="text-primary">{t("voyager_pet_owner")}</span> {t("terms_and_conditions")}
      </h1>

      <p className="text-lg mb-6 text-center">
        <Link
          className="font-bold text-primary hover:underline"
          href="/pdfs/Voyager-Pet-Owner-Reg-Ts-Cs-Nov-2023.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("download_link")}
        </Link>
      </p>

      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section1_title")}</h4>
        <p>
          {t("section1_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section2_title")}</h4>
        <p>
          {t("section2_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section3_title")}</h4>
        <p>
          {t("section3_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section4_title")}</h4>
        <p>
          {t("section4_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section5_title")}</h4>
        <p>
          {t("section5_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section6_title")}</h4>
        <p>
          {t("section6_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section7_title")}</h4>
        <p>
          {t("section7_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section8_title")}</h4>
        <p>
          {t("section8_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section9_title")}</h4>
        <p>
          {t("section9_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section10_title")}</h4>
        <p>
          {t("section10_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section11_title")}</h4>
        <p>
          {t("section11_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section12_title")}</h4>
        <p>
          {t("section12_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section13_title")}</h4>
        <p>
          {t("section13_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section14_title")}</h4>
        <p>
          {t("section14_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section15_title")}</h4>
        <p>
          {t("section15_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section16_title")}</h4>
        <p>
          {t("section16_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section17_title")}</h4>
        <p>
          {t("section17_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section18_title")}</h4>
        <p>
          {t("section18_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section19_title")}</h4>
        <p>
          {t("section19_content")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <h4 className="mb-4 font-bold">{t("section20_title")}</h4>
        <p className="mt-4">
          {t("section20_content1")}
        </p>
        <p className="mt-4">
          {t("section20_content2")}
        </p>
        <p className="mt-4">
          {t("section20_content3")}
        </p>
        <p className="mt-4">
          {t("section20_content4")}
        </p>
        <p className="mt-4">
          {t("section20_content5")}
        </p>
        <p className="mt-4">
          {t("section20_content6")}
        </p>
        <p className="mt-4">
          {t("section20_content7")}
        </p>
        <p className="mt-4">
          {t("section20_content8")}
        </p>
        <p className="mt-4">
          {t("section20_content9")}
        </p>
      </div>
      <div className="text-lg mt-4">
        <p>
          {t("section21_title")} {t("section21_content")}
        </p>
      </div>
      <div className="w-full flex items-center text-center mt-8">
        <Image
          className="mx-auto"
          width={150}
          height={150}
          alt="debit image"
          src="/images/Direct-Debit-Logo.png"
        />
      </div>
      <div className="mt-6">
        <h2 className="sub-heading mb-4 text-lg font-black">
          {t("direct_debit_guarantee")}
        </h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-4">
            {t("direct_debit_point1")}
          </li>
          <li className="text-lg mb-4">
            {t("direct_debit_point2")}
          </li>
          <li className="text-lg mb-4">
            {t("direct_debit_point3")}
          </li>
          <li className="text-lg mb-4">
            {t("direct_debit_point4")}
          </li>
          <li className="text-lg mb-4">
            {t("direct_debit_point5")}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VoyargerPetOwnerTermsConditions;
