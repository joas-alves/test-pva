import {
  CustomSelect,
  SelectOption
} from "@/components/common";
import { useState } from "react";
import { PetOwnerPaymentOptions, PetOwnerReasons } from "../constants";
import { PetOwnerFormData } from "../types";

type FormState = PetOwnerFormData;

export const PetOwnerForm = () => {
  const initialValue: PetOwnerFormData = {
    reason: PetOwnerReasons.Cancellation,
    paymentReason: PetOwnerPaymentOptions.Late,
  };
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (field: keyof FormState, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const reasons:SelectOption[]=Object.values(PetOwnerReasons).map((each)=>({label:each,value:each}))
  const paymentReasons:SelectOption[]=Object.values(PetOwnerPaymentOptions).map((each)=>({label:each,value:each}))

  return (
    <div className="flex flex-col gap-6 py-4">
        <CustomSelect
          label={"Please select one of the below options"}
          options={reasons}
          value={formData.reason}
          onChange={(e) => handleChange("reason", e.target.value)}
        />
        {formData.reason === PetOwnerReasons.Payments && (
          <CustomSelect
            label={"What is your payment query related to?"}
            options={paymentReasons}
            value={formData.paymentReason as PetOwnerPaymentOptions}
            onChange={(e) => handleChange("paymentReason", e.target.value)}
          />
        )}
      </div>
  );
};
