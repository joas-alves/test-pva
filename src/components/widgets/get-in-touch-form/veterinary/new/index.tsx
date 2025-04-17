import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
import { NewCustomerReasons } from "../../constants";
import { GetInTouchFormType } from "../../types";
import { useTranslations } from "next-intl";
type Props = {
  formData: GetInTouchFormType;
  handleChange: (field: keyof GetInTouchFormType, value: string) => void;
};
export const NewCustomerForm = ({ formData, handleChange }: Props) => {
  const t = useTranslations("PetOwner");
  const reasons: SelectOption[] = Object.values(NewCustomerReasons).map(
    (each) => ({ label: each, value: each })
  );
  return (
    <div className="flex flex-col gap-6 py-4">
      <CustomSelect
        label={t("please_select_one_of_the_below_options")}
        options={reasons}
        value={formData.primaryReason}
        onChange={(e) => handleChange("primaryReason", e.target.value)}
      />
      {formData.primaryReason === NewCustomerReasons.Other && (
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