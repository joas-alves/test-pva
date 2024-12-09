import {
  CustomInput,
  CustomRadioGroup,
  CustomTextarea,
} from "@/components/common";
import axios from "axios";
import { useTranslations } from "next-intl";
import { useSnackbar } from "notistack";
import { useState } from "react";

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// Phone validation regex
const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const ContactUsForm = () => {
  const t = useTranslations("Common");
  const { enqueueSnackbar } = useSnackbar();
  const initialValue = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preference: t("pet_owner"),
  };
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validation
    if (formData.firstName.trim().length === 0) {
      enqueueSnackbar("Please enter a valid first name.", { variant: "error" });
      return;
    }

    if (formData.lastName.trim().length === 0) {
      enqueueSnackbar("Please enter a valid last name.", { variant: "error" });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      enqueueSnackbar("Please enter a valid phone number.", {
        variant: "error",
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      enqueueSnackbar("Please enter a valid email address.", {
        variant: "error",
      });
      return;
    }

    if (formData.message.trim().length === 0) {
      enqueueSnackbar("Please enter your message.", { variant: "error" });
      return;
    }

    try {
      const response = await axios.post(`/api/api/contact-us`, formData);

      if (response.status === 201) {
        // If everything is valid, show success message
        enqueueSnackbar("Thank you for getting in touch!", {
          variant: "success",
        });

        // Reset form data after successful submission
        setFormData(initialValue);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          onClick={handleSubmit}
        >
          {t("get_in_touch")}
        </button>
      </div>
    </div>
  );
};
