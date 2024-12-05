import { CustomInput, CustomRadioGroup } from "@/components/common";
import { useTranslations } from "next-intl";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { PetOwnerReasons, PvaCustomerType } from "./constants";
import { PetOwnerForm } from "./pet-owner";
import { GetInTouchFormType, PetOwnerFormData, VeteniraryPvaCustomerFormData } from "./types";
import { getCustomerType } from "./utils";
import { VetDecisionForm } from "./vetenirary";

export const GetInTouchForm = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const initialValue: GetInTouchFormType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preference: t("veterinary_professional"),
    formData: null,
    customerType: null,
  };
  const [allData, setFormData] = useState(initialValue);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...allData,
      [field]: value,
    });
  };

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Phone validation regex (for example, international phone numbers like +44 123 456 7890)
  const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email and phone
    if (!emailRegex.test(allData.email)) {
      enqueueSnackbar("Please enter a valid email address.", { variant: "error" });
      return;
    }

    if (!phoneRegex.test(allData.phone)) {
      enqueueSnackbar("Please enter a valid phone number.", { variant: "error" });
      return;
    }

    console.log(allData);
    enqueueSnackbar("Thank you for getting in touch!", {
      variant: "success",
    });
    setFormData(initialValue);
  };

  const isComplete = (): boolean => {
    const { customerType, formData, ...basicInfo } = allData;
    const isBasicInfoFilled = Object.values(basicInfo).every(
      (value) => value !== null && value?.length
    );

    if (!isBasicInfoFilled) return false;

    if (customerType === PvaCustomerType.Existing) {
      const { reason, ...secondaryReasons } = formData as VeteniraryPvaCustomerFormData;
      return !!(
        reason.length && Object.values(secondaryReasons).some((value) => value !== null && value.length)
      );
    }

    if (customerType === PvaCustomerType.New) {
      const { reason, paymentReason } = formData as PetOwnerFormData;
      const isReasonFilled = !!(reason !== null && reason.length);
      if (!isReasonFilled) return false;
      if (reason === PetOwnerReasons.Payments) {
        const isPaymentReasonFilled = !!(paymentReason !== null && paymentReason.length);
        if (isPaymentReasonFilled) return true;
        return false;
      }
      return true;
    }

    return true;
  };

  const renderForm = () => {
    const formType = getCustomerType(allData.preference);
    if (formType === "pet_owner") return <PetOwnerForm />;
    return <VetDecisionForm />;
  };

  return (
    <div className="shadow-paper rounded-3xl p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-8">{t("get_in_touch")}</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <CustomRadioGroup
            wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
            options={[t("veterinary_professional"), t("pet_owner")]}
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
      <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
        <button
          className="btn primary-btn"
          type="button"
          disabled={!isComplete()}
          onClick={handleSubmit}
        >
          {t("talk_to_us")}
        </button>
      </div>
    </div>
  );
};
