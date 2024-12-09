import {
  CustomInput,
  CustomRadioGroup,
  CustomTextarea,
} from "@/components/common";
import { useTranslations } from "next-intl";
import { useSnackbar } from "notistack";
import { useState } from "react";
export const ContactUsForm = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    status: "active",
    preference: t("pet_owner"),
  };
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    enqueueSnackbar("Thank you for getting in touch!", {
      variant: "success",
    });
    setFormData(initialValue);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3">
      <div className="md:col-span-2">
        <CustomRadioGroup
          wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3 "
          options={[t("veterinary_professional"), t("pet_owner")]}
          value={formData.preference}
          onChange={(value) => handleChange("preference", value)}
        />
      </div>
      <CustomInput
        label={t("first_name")}
        placeholder={t("enter_first_name")}
        value={formData.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <CustomInput
        label={t("last_name")}
        placeholder={t("enter_last_name")}
        value={formData.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <CustomInput
        label={t("phone_number")}
        placeholder="+44 123 456 7890"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <CustomInput
        label="E-mail"
        placeholder="email@example.com"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      {/* <div className="md:col-span-2">
        <CustomSelect
          options={[]}
          label={t("topic_of_your_request")}
          value={formData.status}
          onChange={(e) => handleChange("status", e.target.value)}
        />
      </div> */}
      <div className="md:col-span-2">
        <CustomTextarea
          label={t("your_message")}
          placeholder={t("enter_your_message")}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
        />
      </div>

      <div className="md:col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
        <button
          className="btn primary-btn"
          type="button"
          disabled={!(formData.email && formData.phone)}
          onClick={handleSubmit}
        >
          {t("get_in_touch")}
        </button>
      </div>
    </div>
  );
};
