import { CustomInput, CustomSelect, SelectOption } from "@/components/common";
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
import { GetInTouchFormType } from "../../types";
import { useTranslations } from "next-intl";
// Mapping reasons to sub-options
export const subOptionsMap: Record<PvaCustomerReasons, SelectOption[]> = {
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
export const subOptionKeyMap = {
  'Cancellation': 'PvaCustomerCancelOptions',
  'Refunds': 'PvaCustomerRefundOptions',
  'Payments': 'PvaCustomerPaymentOptions',
  'HomeDelivery': 'PvaCustomerDeliveryOptions',
  'Locate': 'PvaCustomerLocateOptions',
  'Validation': 'PvaCustomerValidationOptions',
  'PlanStatus': 'PvaCustomerPlanStatusOptions',
  'Change': 'PvaCustomerChangeOptions',
  'V2P': '',
  'Other': '',
}
type Props = {
  formData: GetInTouchFormType;
  handleChange: (field: keyof GetInTouchFormType, value: string) => void;
};
export const ExistingPvaForm = ({ formData, handleChange }: Props) => {
  const t = useTranslations("PetOwner");
  const tc = useTranslations("Constants");
  // Get sub-options for the selected reason
  const selectedSubOptions =
    subOptionsMap[formData.primaryReason as PvaCustomerReasons] || [];
  return (
    <div className="flex flex-col gap-6 py-4">
      {/* Select Reason */}
      <CustomSelect
        label={t("please_select_one_of_the_below_options")}
        options={Object.keys(PvaCustomerReasons).map((each) => ({
          label: tc(`PvaCustomerReasons.${each}`),
          value: each,
        }))}
        value={formData.primaryReason}
        onChange={(e) => {
          handleChange("primaryReason", e.target.value as PvaCustomerReasons)
        }}
      />
      {/* Select Sub-Reason */}
      {selectedSubOptions.length > 0 &&
        ![PvaCustomerReasons.Other, PvaCustomerReasons.V2P].includes(
          formData.primaryReason as PvaCustomerReasons
        ) && (
          <CustomSelect
            label={t("please_select_a_specific_reason")}
            options={selectedSubOptions.map(each => ({
              label: tc(`${subOptionKeyMap[formData.primaryReason as PvaCustomerReasons]}.${each.value}`),
              value: each.value
            }))}
            value={formData.secondaryReason || ""}
            onChange={(e) =>
              handleChange("secondaryReason", e.target.value as PvaCustomerReasons)
            }
          />
        )}
      {formData.primaryReason === PvaCustomerReasons.Other && (
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
