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
  PvaCustomerValidationOptions
} from "./constants";

export type VeteniraryNewCustomerFormData = {
  reason: NewCustomerReasons;
  otherReason: string;
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
  otherReason: string;
};

export type PetOwnerFormData = {
  reason: PetOwnerReasons;
  paymentReason: PetOwnerPaymentOptions | null;
  otherReason: string;
};

export type GetInTouchFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preference: string;
  clinicName: string;
  customerType: string;
  primaryReason: string;
  secondaryReason: string;
  reasonComments: string;
  additionalComments: string;
};