import de from "../../../i18n/de.json";
import enUK from "../../../i18n/en-UK.json";
import es from "../../../i18n/es.json";
import fr from "../../../i18n/fr.json";

export const getCustomerType = (
  preference: string,
): "veterinary" | "pet_owner" | null => {
  const veterinaryStrings = [
    de.Common.veterinary_professional,
    enUK.Common.veterinary_professional,
    es.Common.veterinary_professional,
    fr.Common.veterinary_professional,
  ];
  const petOwnerStrings = [
    de.Common.pet_owner,
    enUK.Common.pet_owner,
    es.Common.pet_owner,
    fr.Common.pet_owner,
  ];
  
  if (petOwnerStrings.includes(preference)) return "pet_owner";
  else if (veterinaryStrings.includes(preference)) return "veterinary";
  else return null;
};


import { PetOwnerReasons, PvaCustomerReasons, PvaCustomerType } from "./constants";
import { GetInTouchFormType } from "./types";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const validateGetInTouchForm = (
  allData: GetInTouchFormType,
  enqueueSnackbar: (message: string, options: { variant: string }) => void
) => {
  if (allData.firstName.length <= 0) {
    enqueueSnackbar("Please enter a valid first name.", { variant: "error" });
    return false;
  }
  if (allData.lastName.length <= 0) {
    enqueueSnackbar("Please enter a valid last name.", { variant: "error" });
    return false;
  }

  if (!phoneRegex.test(allData.phone)) {
    enqueueSnackbar("Please enter a valid phone number.", { variant: "error" });
    return false;
  }

  if (!emailRegex.test(allData.email)) {
    enqueueSnackbar("Please enter a valid email address.", { variant: "error" });
    return false;
  }

  const customerType = getCustomerType(allData.preference);

  if (customerType === "veterinary" && !allData.clinicName) {
    enqueueSnackbar("Please enter the clinic name", { variant: "error" });
    return false;
  }

  if (!allData.primaryReason) {
    enqueueSnackbar("Please select the primary reason", { variant: "error" });
    return false;
  }

  if (allData.primaryReason === "Other" && !allData.reasonComments) {
    enqueueSnackbar("Please enter your other reasons", { variant: "error" });
    return false;
  }

  if (customerType === "pet_owner") {
    if (
      allData.primaryReason === PetOwnerReasons.Payments &&
      !allData.secondaryReason
    ) {
      enqueueSnackbar("Please select a payment query", { variant: "error" });
      return false;
    }
  }

  if (customerType === "veterinary") {
    if (allData.customerType === PvaCustomerType.Existing) {
      const optionsWithSecondary = Object.values(PvaCustomerReasons).filter(
        (each) =>
          ![PvaCustomerReasons.V2P, PvaCustomerReasons.Other].includes(each)
      );
      if (
        optionsWithSecondary.includes(allData.primaryReason as PvaCustomerReasons) &&
        !allData.secondaryReason
      ) {
        enqueueSnackbar("Please select a secondary reason", { variant: "error" });
        return false;
      }
    }
  }

  if (!allData.additionalComments) {
    enqueueSnackbar(
      "Please enter some additional description regarding your query.",
      { variant: "error" }
    );
    return false;
  }

  return true; // If no errors, return true indicating form is valid
};
