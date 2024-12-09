import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
import { useState } from "react";
import { NewCustomerReasons } from "../../constants";
import { VeteniraryNewCustomerFormData } from "../../types";

export const NewCustomerForm = () => {
  const initialValue: VeteniraryNewCustomerFormData = {
    reason: NewCustomerReasons.HealthPlan,
    otherReason:''
  };
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const reasons: SelectOption[] = Object.values(NewCustomerReasons).map(
    (each) => ({ label: each, value: each })
  );

  return (
    <div className="flex flex-col gap-6 py-4">
      <CustomSelect
        label={"Please select one of the below options"}
        options={reasons}
        value={formData.reason}
        onChange={(e) => handleChange("reason", e.target.value)}
      />
      {formData.reason === NewCustomerReasons.Other && (
        <CustomInput
          label="Please write any comments below"
          placeholder="Other Reason"
          value={formData.otherReason}
          onChange={(e) => handleChange("otherReason", e.target.value)}
        />
      )}
    </div>
  );
};
