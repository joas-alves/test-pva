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
