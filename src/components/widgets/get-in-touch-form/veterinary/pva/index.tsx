import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
import { useState } from "react";
import {
  PvaCustomerCancelOptions,
  PvaCustomerChangeOptions,
  PvaCustomerDeliveryOptions,
  PvaCustomerLocateOptions,
  PvaCustomerPaymentOptions,
  PvaCustomerPlanStatusOptions,
  PvaCustomerReasons,
  PvaCustomerRefundOptions,
  PvaCustomerValidationOptions,
} from "../../constants";
import { VeteniraryPvaCustomerFormData } from "../../types";

// Mapping reasons to sub-options
const subOptionsMap: Record<PvaCustomerReasons, SelectOption[]> = {
  [PvaCustomerReasons.Cancellation]: Object.values(
    PvaCustomerCancelOptions
  ).map((each) => ({ label: each, value: each })),
  [PvaCustomerReasons.Refunds]: Object.values(PvaCustomerRefundOptions).map(
    (each) => ({ label: each, value: each })
  ),
  [PvaCustomerReasons.Payments]: Object.values(PvaCustomerPaymentOptions).map(
    (each) => ({ label: each, value: each })
  ),
  [PvaCustomerReasons.HomeDelivery]: Object.values(
    PvaCustomerDeliveryOptions
  ).map((each) => ({ label: each, value: each })),
  [PvaCustomerReasons.Locate]: Object.values(PvaCustomerLocateOptions).map(
    (each) => ({ label: each, value: each })
  ),
  [PvaCustomerReasons.Validation]: Object.values(
    PvaCustomerValidationOptions
  ).map((each) => ({ label: each, value: each })),
  [PvaCustomerReasons.PlanStatus]: Object.values(
    PvaCustomerPlanStatusOptions
  ).map((each) => ({ label: each, value: each })),
  [PvaCustomerReasons.Change]: Object.values(PvaCustomerChangeOptions).map(
    (each) => ({ label: each, value: each })
  ),
  [PvaCustomerReasons.V2P]: [],

  [PvaCustomerReasons.Other]: [],
};

export const ExistingPvaForm = () => {
  // Define the initial form data with explicit typing
  const initialValue: VeteniraryPvaCustomerFormData = {
    reason: PvaCustomerReasons.Cancellation,
    cancelReason: null,
    refundReason: null,
    paymentReason: null,
    homeDeliveryReason: null,
    locateReason: null,
    validationReason: null,
    planStatusReason: null,
    changeReason: null,
    otherReason: "",
  };

  const [formData, setFormData] =
    useState<VeteniraryPvaCustomerFormData>(initialValue);

  // Typing the field name and value for better type safety
  const handleChange = (
    field: keyof VeteniraryPvaCustomerFormData,
    value: string | null
  ) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  // Get sub-options for the selected reason
  const selectedSubOptions = subOptionsMap[formData.reason] || [];

  // Generate the specific reason field dynamically based on the selected reason
  const reasonField =
    `${formData.reason.toLowerCase()}Reason` as keyof VeteniraryPvaCustomerFormData;

  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Select Reason */}
      <CustomSelect
        label={"Please select one of the below options"}
        options={Object.values(PvaCustomerReasons).map((each) => ({
          label: each,
          value: each,
        }))}
        value={formData.reason}
        onChange={(e) =>
          handleChange("reason", e.target.value as PvaCustomerReasons)
        }
      />

      {/* Select Sub-Reason */}
      {selectedSubOptions.length > 0 &&
        ![PvaCustomerReasons.Other,PvaCustomerReasons.V2P].includes(formData.reason) && (
          <CustomSelect
            label={"Please select a specific reason"}
            options={selectedSubOptions}
            value={formData[reasonField] || ""}
            onChange={(e) =>
              handleChange(reasonField, e.target.value as string)
            }
          />
        )}
      {formData.reason === PvaCustomerReasons.Other && (
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
