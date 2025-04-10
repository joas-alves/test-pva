import { CustomInput, CustomRadioGroup, CustomSelect, SelectOption } from "@/components/common";
import { LanguageCode } from "@/utils";
import axios from "axios";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { NextRouter, useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
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
export const GetInTouchForm = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const searchParams = useSearchParams();
  const nextRouter: NextRouter = useRouter();
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<string>();
  const [isAgreed, setIsAgreed] = useState(false);
  const pathname = usePathname();
  const initialValue: GetInTouchFormType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preference: t("veterinary_professional"),
    additionalComments: "",
    clinicName: "",
    postCode: "",
    planReference: "",
    customerType: PvaCustomerType.New,
    primaryReason: NewCustomerReasons.HealthPlan,
    secondaryReason: "",
    reasonComments: "",
  };
  const [allData, setFormData] = useState(initialValue);
  useEffect(() => {
    const initialPreference =
      searchParams.get("default") === "pet-owner"
        ? t("pet_owner")
        : t("veterinary_professional");
    handleChange("preference", initialPreference);

    if (router?.locale) setSelectedOption(router.locale === "global" ? undefined : router.locale)
  }, [searchParams, router.locale]);
  const isDuplicatePage = pathname === "/get-in-touch-online"
  const handleChange = (field: keyof GetInTouchFormType, value: string) => {
    const modifiedData = { ...allData };
    if (field === "preference") {
      modifiedData.primaryReason = "";
      modifiedData.secondaryReason = "";
      modifiedData.reasonComments = "";
      const customerType = getCustomerType(value);
      if (customerType === "veterinary") {
        modifiedData.customerType = PvaCustomerType.New;
        modifiedData.primaryReason = NewCustomerReasons.HealthPlan;
      }
      if (customerType === "pet_owner") {
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
    setFormData(modifiedData);
  };
  const handleSubmit = async (e: React.FormEvent) => {
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
      const response = await axios.post(
        `/api/${nextRouter.locale || LanguageCode.Global}/get-in-touch`,
        allData
      );
      if (response.status === 201) {
        enqueueSnackbar("Thank you for getting in touch!", {
          variant: "success",
        });
        setFormData(initialValue);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios-specific error with message or response data
        enqueueSnackbar(error.response?.data?.message || error.message, {
          variant: "error",
        });
      } else {
        // Handle generic errors
        enqueueSnackbar("An unexpected error occurred.", {
          variant: "error",
        });
      }
    }
  };
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

    router.push(router.pathname, router.asPath, { locale: newLocale });
  };


  const reasons: SelectOption[] = Object.values(locale).map(
    (each) => ({ label: each, value: each })
  );
  const renderForm = () => {
    const formType = getCustomerType(allData.preference);
    if (formType === "pet_owner")
      return <PetOwnerForm formData={allData} handleChange={handleChange} />;
    return <VetDecisionForm formData={allData} handleChange={handleChange} />;
  };
  return (
    <div className="shadow-paper rounded-3xl p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-8">
        {t("get_in_touch")}
      </h2>
      {nextRouter.locale === 'global' && <div className="flex flex-col gap-6 mb-5">
        <CustomSelect
          label={"Please select one of the below options"}
          options={reasons}
          value={selectedOption}
          onChange={(e) => handleSelectChange(e.target.value)}
        />

      </div>}
      <div className={selectedOption === undefined && nextRouter.locale === 'global' ? "opacity-50 pointer-events-none" : ""}>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <CustomRadioGroup
              wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
              options={["Veterinary Professional", "Pet Owner"]}
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
          label="Please share any additional comments below"
          placeholder="Additional comments"
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
                By ticking this box, you agree to receive email and text messages from Premier Vet Alliance related to your service and marketing. View our{" "}
                <Link href="/pet-owner-terms-conditions" target="_blank" className="underline text-blue-600">Terms of Service</Link> and{" "}
                <Link href="/privacy-policy" target="_blank" className="underline text-blue-600">Privacy Policy</Link> for details.
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
            Send
          </button>
        </div>
      </div>

    </div>
  );
};
