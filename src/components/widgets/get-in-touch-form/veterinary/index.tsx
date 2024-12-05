import { CustomInput, CustomRadioGroup } from "@/components/common";
import { useState } from "react";
import { PvaCustomerType } from "../constants";
import { NewCustomerForm } from "./new";
import { ExistingPvaForm } from "./pva";

type FormState = { customerType: PvaCustomerType; clinicName: string };

export const VetDecisionForm = () => {
  const initialValue: FormState = {
    customerType: PvaCustomerType.New,
    clinicName: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (
    field: keyof FormState,
    value: PvaCustomerType | string
  ) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const pvaCustomerTypes: PvaCustomerType[] = Object.values(PvaCustomerType);
  const renderForm = () => {
    if (formData.customerType === PvaCustomerType.Existing)
      return <ExistingPvaForm />;
    return <NewCustomerForm />;
  };
  return (
    <div className="flex flex-col gap-6 py-4">
      <div>
        <CustomInput
          label={"Veterinary Clinic Name"}
          placeholder="Enter clinic name"
          value={formData.clinicName}
          onChange={(e) => handleChange("clinicName", e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-6">
        <p>Please select one of the below options</p>
        <CustomRadioGroup
          wrapperClassName="grid grid-cols-1 md:grid-cols-2 gap-3"
          options={pvaCustomerTypes}
          value={formData.customerType as PvaCustomerType}
          onChange={(value) =>
            handleChange("customerType", value as PvaCustomerType)
          }
        />
      </div>
      {renderForm()}
    </div>
  );
};
