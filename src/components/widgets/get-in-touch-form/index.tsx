import { CustomInput, CustomRadioGroup } from "@/components/common";
import { useTranslations } from "next-intl";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { PvaCustomerType } from "./constants";
import { PetOwnerForm } from "./pet-owner";
import { GetInTouchFormType } from "./types";
import { getCustomerType, validateGetInTouchForm } from "./utils";
import { VetDecisionForm } from "./veterinary";
import axios, { AxiosError } from "axios";

export const GetInTouchForm = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();

  const initialValue: GetInTouchFormType = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preference: t("veterinary_professional"),
    additionalComments: "",
    clinicName: "",
    customerType: PvaCustomerType.New,
    primaryReason: "",
    secondaryReason: "",
    reasonComments: "",
  };
  const [allData, setFormData] = useState(initialValue);

  const handleChange = (field: keyof GetInTouchFormType, value: string) => {
    const modifiedData = { ...allData };

    if (field === "preference") {
      modifiedData.primaryReason = "";
      modifiedData.secondaryReason = "";
      modifiedData.reasonComments = "";

      const customerType = getCustomerType(value);

      if (customerType === "veterinary") {
        modifiedData.customerType = PvaCustomerType.New;
      } else {
        modifiedData.customerType = "";
      }
    }
    if (field === "customerType") {
      modifiedData.primaryReason = "";
      modifiedData.secondaryReason = "";
      modifiedData.reasonComments = "";
    }

    if (field === "primaryReason" && value === "Other") {
      modifiedData.secondaryReason = "";
    }

    modifiedData[field] = value;
    setFormData(modifiedData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Use validateForm function
    const isValid = validateGetInTouchForm(allData, enqueueSnackbar);
    if (!isValid) return;

    try {
      const response = await axios.post(`/api/api/get-in-touch`, allData);
      if (response.status === 201) {
        enqueueSnackbar("Thank you for getting in touch!", {
          variant: "success",
        });
        setFormData(initialValue);
      }
    } catch (error: AxiosError | any) {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  };

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
      <CustomInput
        label="Please share any additional comments below"
        placeholder="Additional comments"
        value={allData.additionalComments}
        onChange={(e) => handleChange("additionalComments", e.target.value)}
      />
      <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
        <button
          className="btn primary-btn"
          type="button"
          onClick={handleSubmit}
        >
          {t("talk_to_us")}
        </button>
      </div>
    </div>
  );
};
