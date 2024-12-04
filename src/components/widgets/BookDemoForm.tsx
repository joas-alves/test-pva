import {
  CustomInput,
  CustomRadioGroup,
  CustomSelect,
} from "@/components/common";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useSnackbar } from "notistack";

export const BookDemoForm = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
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
    <div className="shadow-paper rounded-3xl p-6 md:p-12 bg-white">
      <h2 className="text-2xl md:text-[32px] font-bold text-primary mb-8">
        {t("get_in_touch")}
      </h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <CustomRadioGroup
            wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
            options={[t("veterinary_professional"), t("pet_owner")]}
            value={formData.preference}
            onChange={(value) => handleChange("preference", value)}
          />
        </div>
        <div className="col-span-2">
          <CustomInput
            label={t("first_name")}
            placeholder={t("enter_first_name")}
            value={formData.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <CustomInput
            label={t("last_name")}
            placeholder={t("enter_last_name")}
            value={formData.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <CustomInput
            label={t("company_name")}
            placeholder={t("enter_company_name")}
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>
        <div className="col-span-2">
          <CustomSelect
            label={t("country")}
            value={formData.status}
            onChange={(e) => handleChange("status", e.target.value)}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <CustomInput
            label={t("phone_number")}
            placeholder="+44 123 456 7890"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <CustomInput
            label={t("e-mail")}
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-3 pt-3 md:pt-6">
          <button
            className="btn primary-btn"
            type="button"
            disabled={!(formData.email && formData.phone)}
            onClick={handleSubmit}
          >
            {t("talk_to_us")}
          </button>
        </div>
      </div>
    </div>
  );
};
