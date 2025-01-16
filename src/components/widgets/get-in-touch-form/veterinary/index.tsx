import { CustomInput, CustomRadioGroup } from "@/components/common";
import { PvaCustomerType } from "../constants";
import { GetInTouchFormType } from "../types";
import { NewCustomerForm } from "./new";
import { ExistingPvaForm } from "./pva";
type Props={
  formData:GetInTouchFormType
  handleChange: (field: keyof GetInTouchFormType, value: string) => void
}
export const VetDecisionForm = ({formData,handleChange}:Props) => {
  const pvaCustomerTypes: PvaCustomerType[] = Object.values(PvaCustomerType);
  const renderForm = () => {
    if (formData.customerType === PvaCustomerType.Existing)
      return <ExistingPvaForm formData={formData} handleChange={handleChange} />;
    return <NewCustomerForm formData={formData} handleChange={handleChange} />;
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