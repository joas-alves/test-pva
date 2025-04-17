import { CustomInput, CustomRadioGroup } from "@/components/common";
import { PvaCustomerType } from "../constants";
import { GetInTouchFormType } from "../types";
import { NewCustomerForm } from "./new";
import { ExistingPvaForm } from "./pva";
import { useTranslations } from "next-intl";
type Props={
  formData:GetInTouchFormType
  handleChange: (field: keyof GetInTouchFormType, value: string) => void
}
export const VetDecisionForm = ({formData,handleChange}:Props) => {
  const t = useTranslations("PetOwner");
  const tc = useTranslations("Constants");
  const pvaCustomerTypes: string[] = Object.keys(PvaCustomerType).map(each => tc(each) as string);
  const renderForm = () => {
    if (formData.customerType === tc("PvaCustomerType.Existing"))
      return <ExistingPvaForm formData={formData} handleChange={handleChange} />;
    return <NewCustomerForm formData={formData} handleChange={handleChange} />;
  };
  return (
    <div className="flex flex-col gap-6 py-4">
      <div>
        <CustomInput
          label={t("veterinary_clinic_name")}
          placeholder={t("veterinary_clinic_name")}
          value={formData.clinicName}
          onChange={(e) => handleChange("clinicName", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p>{t("please_select_one_of_the_below_options")}</p>
        <CustomRadioGroup
          wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
          options={pvaCustomerTypes}
          value={formData.customerType as string}
          onChange={(value) =>
            handleChange("customerType", value as string)
          }
        />
      </div>
      {renderForm()}
    </div>
  );
};