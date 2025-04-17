import React from 'react'
import { useTranslations } from "next-intl";

const DetailsOfTermsAndConditions = () => {
    const t = useTranslations("PetOwnerTerms");
    
    return (
        <ol className='list-decimal list-inside text-lg mt-4 text-primary' start={2}>
            <li>
                {t("details_item2")}
            </li>
            <li>
                {t("details_item3")}
            </li>
            <li>
                {t("details_item4")}
            </li>
            <li>
                {t("details_item5")}
            </li>
            <li>
                {t("details_item6")}
            </li>
            <li>
                {t("details_item7")}
            </li>
            <li>
                {t("details_item8")}
            </li>
            <li>
                {t("details_item9")}
            </li>
            <li>
                {t("details_item10")}
            </li>
            <li>
                {t("details_item11")}
                <ol className='list-decimal list-inside px-10' start={1}>
                    <li>{t("details_item11_1")}</li>
                    <li>{t("details_item11_2")}</li>
                    <li>{t("details_item11_3")}</li>
                    <li>{t("details_item11_4")}</li>
                    <li>{t("details_item11_5")}</li>
                </ol>
            </li>
            <li>
                {t("details_item12")}
            </li>
            <li>
                {t("details_item13")}
            </li>
            <li>
                {t("details_item14")}
            </li>
            <li>
                {t("details_item15")}
            </li>
            <li>
                {t("details_item16")}
            </li>
            <li>
                {t("details_item17")}
            </li>
            <li>
                {t("details_item18")}
            </li>
            <li>
                {t("details_item19")}
            </li>
            <li>
                {t("details_item20")}
            </li>
            <li>
                {t("details_item21")}
            </li>
            <li>
                {t("details_item22")}
            </li>
            <li>
                {t("details_item23")}
            </li>
            <li>
                {t("details_item24")}
            </li>
            <li>
                {t("details_item25")}
            </li>
            <li>
                {t("details_item26")}
            </li>
        </ol>
    )
}

export { DetailsOfTermsAndConditions };
