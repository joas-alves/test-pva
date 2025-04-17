import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
import { PetOwnerPaymentOptions, PetOwnerReasons } from "../constants";
import { GetInTouchFormType } from "../types";
import { useTranslations } from "next-intl";
type Props = {
  formData: GetInTouchFormType
  handleChange: (field: keyof GetInTouchFormType, value: string) => void
}
export const PetOwnerForm = ({ formData, handleChange }: Props) => {
  const t = useTranslations("PetOwner");
  const reasons: SelectOption[] = Object.values(PetOwnerReasons).map(
    (each) => ({ label: each, value: each })
  );
  const paymentReasons: SelectOption[] = Object.values(
    PetOwnerPaymentOptions
  ).map((each) => ({ label: each, value: each }));
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="col-span-2">
        <CustomInput
          label={t("clinic_name")}
          placeholder={t("clinic_name")}
          value={formData.clinicName}
          onChange={(e) => handleChange("clinicName", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <CustomInput
          label={t("plan_reference")}
          placeholder={t("plan_reference")}
          value={formData.planReference}
          onChange={(e) => handleChange("planReference", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <CustomInput
          type="text"
          label={t("postal_code")}
          placeholder={t("postal_code")}
          value={formData.postCode}
          onChange={(e) => handleChange("postCode", e.target.value)}
        />
      </div>
      <CustomSelect
        label={t("please_select_one_of_the_below_options")}
        options={reasons}
        value={formData.primaryReason}
        onChange={(e) => handleChange("primaryReason", e.target.value)}
      />
      {formData.primaryReason === PetOwnerReasons.Payments && (
        <CustomSelect
          label={t("what_is_your_payment_query_related_to")}
          options={paymentReasons}
          value={formData.secondaryReason as PetOwnerPaymentOptions}
          onChange={(e) => handleChange("secondaryReason", e.target.value)}
        />
      )}
      {formData.primaryReason === PetOwnerReasons.Other && (
        <CustomInput
          label={t("please_write_any_comments_below")}
          placeholder={t("other_reason")}
          value={formData.reasonComments}
          onChange={(e) => handleChange("reasonComments", e.target.value)}
        />
      )}
    </div>
  );
};