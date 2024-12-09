import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
import { NewCustomerReasons } from "../../constants";
import { GetInTouchFormType } from "../../types";

type Props = {
  formData: GetInTouchFormType;
  handleChange: (field: keyof GetInTouchFormType, value: string) => void;
};

export const NewCustomerForm = ({ formData, handleChange }: Props) => {
  const reasons: SelectOption[] = Object.values(NewCustomerReasons).map(
    (each) => ({ label: each, value: each })
  );

  return (
    <div className="flex flex-col gap-6 py-4">
      <CustomSelect
        label={"Please select one of the below options"}
        options={reasons}
        value={formData.primaryReason}
        onChange={(e) => handleChange("primaryReason", e.target.value)}
      />
      {formData.primaryReason === NewCustomerReasons.Other && (
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
