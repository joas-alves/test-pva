import {
  NewCustomerReasons,
  PetOwnerPaymentOptions,
  PetOwnerReasons,
  PvaCustomerCancelOptions,
  PvaCustomerChangeOptions,
  PvaCustomerDeliveryOptions,
  PvaCustomerLocateOptions,
  PvaCustomerPaymentOptions,
  PvaCustomerPlanStatusOptions,
  PvaCustomerReasons,
  PvaCustomerRefundOptions,
  PvaCustomerType,
  PvaCustomerValidationOptions,
} from "./constants";

export type VeteniraryNewCustomerFormData = {
  reason: NewCustomerReasons;
};

export type VeteniraryPvaCustomerFormData = {
  reason: PvaCustomerReasons;
  cancelReason: PvaCustomerCancelOptions | null;
  refundReason: PvaCustomerRefundOptions | null;
  paymentReason: PvaCustomerPaymentOptions | null;
  homeDeliveryReason: PvaCustomerDeliveryOptions | null;
  locateReason: PvaCustomerLocateOptions | null;
  validationReason: PvaCustomerValidationOptions | null;
  planStatusReason: PvaCustomerPlanStatusOptions | null;
  changeReason: PvaCustomerChangeOptions | null;
};

export type PetOwnerFormData = {
  reason: PetOwnerReasons;
  paymentReason: PetOwnerPaymentOptions | null;
};

export type GetInTouchFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preference: string;
  customerType: PvaCustomerType | null;
  formData:
    | PetOwnerFormData
    | VeteniraryNewCustomerFormData
    | VeteniraryPvaCustomerFormData
    | null;
};
