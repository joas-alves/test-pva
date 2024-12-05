export enum PvaCustomerType {
  New = "New Customer",
  Existing = "Existing PVA Customer",
}
//Pet owner values
export enum PetOwnerReasons {
  Cancellation = "Cancellations & reinstatements",
  Refunds = "Refunds",
  Transfers = "Transfer my plan",
  Change = "Change of details",
  Payments = "Payments",
  Other = "Other",
}

export enum PetOwnerPaymentOptions {
  Late = "Late payment fees",
  Phone = "Payments taken over phone",
}

export enum NewCustomerReasons {
  HealthPlan = "Starting a health plan",
  Moving = "Moving plans from existing provider",
  Transfers = "Avail services (Home Delivery and more)",
  Other = "Other",
}

export enum PvaCustomerReasons {
  Cancellation = "Cancellations & reinstatements",
  Refunds = "Refunds",
  Payments = "Payments",
  HomeDelivery = "Home delivery query",
  Locate = "Unable to locate a plan",
  Validation = "Account validation failed",
  PlanStatus = "Plan status",
  Change = "Change of client details",
  V2P = "V2P - Setup or support",
  Other = "Other",
}

export enum PvaCustomerCancelOptions {
  CancellationQuery = "Cancellation queries",
  ReinstatementQuery = "Reinstatement queries",
}

export enum PvaCustomerRefundOptions {
  Organizing = "Organizing a client refund",
  HomeDelivery = "Home delivery refund",
}

export enum PvaCustomerPaymentOptions {
  PaymentQuery = "Payment query",
  Failed = "Failed/Missed payment",
  Invalid = "Invalid bank details",
  Change = "Change payment details",
}

export enum PvaCustomerDeliveryOptions {
  Failed = "Failed delivery",
  Damaged = "Damaged product/",
  Wrong = "Wrong item sent",
  HD = "Setting up HD",
  Delay = "Delays",
}

export enum PvaCustomerLocateOptions {
  Online = "Online signup not in portal",
  Correct = "Correctly setup in portal",
}

export enum PvaCustomerValidationOptions {
  Bawe = "Bawe (UK)",
}

export enum PvaCustomerPlanStatusOptions {
  Active = "Active alert in portal",
  Suspended = "Suspended (RX works)",
  Cancelled = "Cancelled/Inactive",
}

export enum PvaCustomerChangeOptions {
  Contact = "Contact details",
  Payment = "Payment Details",
  Cancelled = "Plan holder name",
  Comms = "Comms preference",
}
