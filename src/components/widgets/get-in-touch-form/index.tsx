import { CustomInput, CustomRadioGroup, CustomSelect, SelectOption } from "@/components/common";
import { LanguageCode } from "@/utils";
import axios from "axios";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  locale,
  NewCustomerReasons,
  PvaCustomerCancelOptions,
  PvaCustomerReasons,
  PvaCustomerType
} from "./constants";
import { PetOwnerForm } from "./pet-owner";
import { GetInTouchFormType } from "./types";
import { getCustomerType, validateGetInTouchForm } from "./utils";
import { VetDecisionForm } from "./veterinary";
import { subOptionKeyMap } from "./veterinary/pva";

export const GetInTouchForm = () => {
  const t = useTranslations("Common");
  const tp = useTranslations("PetOwner");
  const tc = useTranslations("Constants");
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const { pathname, query, locale: currentLocale, isReady } = router;
  const [selectedOption, setSelectedOption] = useState<string>();
  const [isAgreed, setIsAgreed] = useState(false);
  const initialValue: GetInTouchFormType = useMemo(() => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preference: "veterinary_professional",
    additionalComments: "",
    clinicName: "",
    postCode: "",
    planReference: "",
    customerType: PvaCustomerType.New,
    primaryReason: NewCustomerReasons.HealthPlan,
    secondaryReason: "",
    reasonComments: "",
  }), []);
  const [allData, setFormData] = useState(initialValue);
  const isDuplicatePage = pathname === "/get-in-touch-online"
  const handleChange = useCallback((field: keyof GetInTouchFormType, value: string) => {
    setFormData(prevData => {
      const modifiedData = { ...prevData };
      if (field === "preference") {
        modifiedData.primaryReason = "";
        modifiedData.secondaryReason = "";
        modifiedData.reasonComments = "";
        if (value === "veterinary_professional") {
          modifiedData.customerType = PvaCustomerType.New;
          modifiedData.primaryReason = NewCustomerReasons.HealthPlan;
        }
        if (value === "pet_owner") {
          modifiedData.customerType = PvaCustomerType.New;
          modifiedData.primaryReason = PvaCustomerReasons.Cancellation;
          modifiedData.secondaryReason = "";
        }
      }
      if (field === "customerType") {
        modifiedData.primaryReason = "";
        modifiedData.secondaryReason = "";
        modifiedData.reasonComments = "";

        if (value === PvaCustomerType.Existing) {
          modifiedData.primaryReason = PvaCustomerReasons.Cancellation;
          modifiedData.secondaryReason =
            PvaCustomerCancelOptions.CancellationQuery;
        } else {
          modifiedData.primaryReason = NewCustomerReasons.HealthPlan;
          modifiedData.secondaryReason = "";
        }
      }
      if (field === "primaryReason" && value === "Other") {
        modifiedData.secondaryReason = "";
      }
      modifiedData[field] = value;
      return modifiedData;
    });
  }, [setFormData]);
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    if(isDuplicatePage){
      enqueueSnackbar("Your form is submitted successfully", {
        variant: "success",
      });
      setFormData(initialValue);
      return;
    }
    e.preventDefault();
    // Use validateForm function
    const isValid = validateGetInTouchForm(allData, enqueueSnackbar);
    if (!isValid) return;
    try {
      const formData = {
        ...allData,
        customerType: allData.customerType === PvaCustomerType.Existing ? tc("PvaCustomerType.Existing") : tc("PvaCustomerType.New"),
      }
      if(formData.customerType === PvaCustomerType.Existing){
        formData.primaryReason = allData.primaryReason === PvaCustomerReasons.Other ? allData.primaryReason : tc(`PvaCustomerReasons.${allData.primaryReason}`);
        formData.secondaryReason = allData.secondaryReason === PvaCustomerReasons.Other ? allData.secondaryReason : tc(`${subOptionKeyMap[allData.primaryReason as PvaCustomerReasons]}.${allData.secondaryReason}`);
      }else{
        formData.primaryReason = allData.primaryReason === NewCustomerReasons.Other ? allData.primaryReason : tc(`NewCustomerReasons.${allData.primaryReason}`);
        formData.secondaryReason = "";
      }
      formData.preference = t(formData.preference);
      const response = await axios.post(
        `/api/${currentLocale || LanguageCode.Global}/get-in-touch`,
        formData
      );
      if (response.status === 201) {
        enqueueSnackbar(tp("thank_you_for_getting_in_touch"), {
          variant: "success",
        });
        setFormData(initialValue);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        enqueueSnackbar(error.response?.data?.message || error.message, {
          variant: "error",
        });
      } else {
        enqueueSnackbar(tp("an_unexpected_error_occurred"), {
          variant: "error",
        });
      }
    }
  }, [allData, enqueueSnackbar, isDuplicatePage, currentLocale, t, tp, tc, initialValue]);
  const handleSelectChange = (value: string) => {
    setSelectedOption(value);

    let newLocale = "en"; // Default locale

    switch (value) {
      case locale.Spanish:
        newLocale = "es"; // Spanish locale
        break;
      case locale.EnglishUS:
        newLocale = "en-US"; // English (US)
        break;
      case locale.EnglishUK:
        newLocale = "en-UK"; // English (UK)
        break;
      case locale.Deutch:
        newLocale = "de"; // German (Deutch)
        break;
      case locale.French:
        newLocale = "fr"; // French
        break;
      default:
        newLocale = ""; // Default to English
    }

    router.push({ pathname: router.pathname, query: router.query }, router.asPath, { locale: newLocale });
  };

  const reasons: SelectOption[] = Object.entries(locale).map(
    ([key, value]) => ({ label: value, value: key })
  );
  const renderForm = () => {
    const formType = getCustomerType(allData.preference);
    if (formType === "pet_owner")
      return <PetOwnerForm formData={allData} handleChange={handleChange} />;
    return <VetDecisionForm formData={allData} handleChange={handleChange} />;
  };
  useEffect(() => {
    if (!isReady) return; // Ensure router is ready before accessing query/locale

    const initialPreference = query.default === "pet-owner"
      ? 'pet_owner'
      : 'veterinary_professional';
    handleChange("preference", initialPreference);

    if (currentLocale) setSelectedOption(currentLocale === "global" ? undefined : currentLocale)
  }, [query, currentLocale, isReady, handleChange]);
  return (
    <div className="shadow-paper rounded-3xl p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-8">
        {t("get_in_touch")}
      </h2>
      {currentLocale === 'global' && <div className="flex flex-col gap-6 mb-5">
        <CustomSelect
          label={tp("please_select_one_of_the_below_options")}
          options={reasons}
          value={selectedOption}
          onChange={(e) => handleSelectChange(e.target.value)}
        />

      </div>}
      <div className={selectedOption === undefined && currentLocale === 'global' ? "opacity-50 pointer-events-none" : ""}>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <CustomRadioGroup
              wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
              options={[
                { label: t("veterinary_professional"), value: "veterinary_professional" },
                { label: t("pet_owner"), value: "pet_owner" }
              ]}
              value={allData.preference}
              onChange={(value) => handleChange("preference", value)}
            />
          </div>
          <div className="col-span-2">
            <CustomInput
              label={t("first_name")}
              placeholder={t("enter_first_name")}
              value={allData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <CustomInput
              label={t("last_name")}
              placeholder={t("enter_last_name")}
              value={allData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-3">
            <CustomInput
              label={t("phone_number")}
              placeholder="+44 123 456 7890"
              value={allData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
            <CustomInput
              label={t("e-mail")}
              placeholder="email@example.com"
              value={allData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>
        {renderForm()}
        <CustomInput
          label={tp("please_share_any_additional_comments_below")}
          placeholder={tp("additional_comments")}
          value={allData.additionalComments}
          onChange={(e) => handleChange("additionalComments", e.target.value)}
        />
        {isDuplicatePage && (
          <div className="col-span-2 mt-4">
            <label className="flex items-start gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                className="mt-1"
                checked={isAgreed}
                onChange={() => setIsAgreed(!isAgreed)}
              />
              <span>
                {tp("by_ticking_this_box_you_agree_to_receive_email_and_text_messages_from_premier_vet_alliance_related_to_your_service_and_marketing")}
                <Link href="/pet-owner-terms-conditions" target="_blank" className="underline text-blue-600">
                  {tp("terms_of_service")}
                </Link>{" "}
                {tp("and")}
                <Link href="/privacy-policy" target="_blank" className="underline text-blue-600">
                  {tp("privacy_policy")}
                </Link>
              </span>
            </label>
          </div>
        )}
        <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
          <button
            className="btn primary-btn"
            type="button"
            onClick={handleSubmit}
          >
            {tp("send")}
          </button>
        </div>
      </div>

    </div>
  );
};
