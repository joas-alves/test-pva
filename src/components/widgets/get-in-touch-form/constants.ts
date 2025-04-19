export enum PvaCustomerType {
  New = "New",
  Existing = "Existing",
}
//Pet owner values
export enum PetOwnerReasons {
  Cancellation = "Cancellation",
  Refunds = "Refunds",
  Transfers = "Transfers",
  Change = "Change",
  Payments = "Payments",
  Other = "Other",
}

export enum locale {
  SelectCountry = "Select country",
  Spanish = "Spanish",
  EnglishUS = "English-US",
  EnglishUK = "English-UK",
  Deutch = "Deutch",
  French = "French",
}

export enum PetOwnerPaymentOptions {
  Late = "Late payment fees",
  Phone = "Payments taken over phone",
}

export enum NewCustomerReasons {
  HealthPlan = "HealthPlan",
  Moving = "Moving",
  Transfers = "Transfers",
  Other = "Other",
}

export enum PvaCustomerReasons {
  Cancellation = "Cancellation",
  Refunds = "Refunds",
  Payments = "Payments",
  HomeDelivery = "HomeDelivery",
  Locate = "Locate",
  Validation = "Validation",
  PlanStatus = "PlanStatus",
  Change = "Change",
  V2P = "V2P",
  Other = "Other",
}

export enum PvaCustomerCancelOptions {
  CancellationQuery = "CancellationQuery",
  ReinstatementQuery = "ReinstatementQuery",
}

export enum PvaCustomerRefundOptions {
  Organizing = "Organizing",
  HomeDelivery = "HomeDelivery",
}

export enum PvaCustomerPaymentOptions {
  PaymentQuery = "PaymentQuery",
  Failed = "Failed",
  Invalid = "Invalid",
  Change = "Change",
}

export enum PvaCustomerDeliveryOptions {
  Failed = "Failed",
  Damaged = "Damaged",
  Wrong = "Wrong",
  HD = "HD",
  Delay = "Delay",
}

export enum PvaCustomerLocateOptions {
  Online = "Online",
  Correct = "Correct",
}

export enum PvaCustomerValidationOptions {
  Bawe = "Bawe",
}

export enum PvaCustomerPlanStatusOptions {
  Active = "Active",
  Suspended = "Suspended",
  Cancelled = "Cancelled",
}

export enum PvaCustomerChangeOptions {
  Contact = "Contact",
  Payment = "Payment",
  Cancelled = "Cancelled",
  Comms = "Comms",
}