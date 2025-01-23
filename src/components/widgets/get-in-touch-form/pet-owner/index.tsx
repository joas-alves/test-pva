import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
import { PetOwnerPaymentOptions, PetOwnerReasons } from "../constants";
import { GetInTouchFormType } from "../types";
type Props = {
  formData: GetInTouchFormType
  handleChange: (field: keyof GetInTouchFormType, value: string) => void
}
export const PetOwnerForm = ({ formData, handleChange }: Props) => {
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
          label='Clinic Name'
          placeholder='Clinic Name'
          value={formData.clinicName}
          onChange={(e) => handleChange("clinicName", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <CustomInput
          label='Plan Reference'
          placeholder='Plan Reference'
          value={formData.planReference}
          onChange={(e) => handleChange("planReference", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <CustomInput
          type="text"
          label='Postal Code'
          placeholder='Postal Code'
          value={formData.postCode}
          onChange={(e) => handleChange("postCode", e.target.value)}
        />
      </div>
      <CustomSelect
        label={"Please select one of the below options"}
        options={reasons}
        value={formData.primaryReason}
        onChange={(e) => handleChange("primaryReason", e.target.value)}
      />
      {formData.primaryReason === PetOwnerReasons.Payments && (
        <CustomSelect
          label={"What is your payment query related to?"}
          options={paymentReasons}
          value={formData.secondaryReason as PetOwnerPaymentOptions}
          onChange={(e) => handleChange("secondaryReason", e.target.value)}
        />
      )}
      {formData.primaryReason === PetOwnerReasons.Other && (
        <CustomInput
          label="Please write any comments below"
          placeholder="Other Reason"
          value={formData.reasonComments}
          onChange={(e) => handleChange("reasonComments", e.target.value)}
        />
      )}
    </div>
  );
};