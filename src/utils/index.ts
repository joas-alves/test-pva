import de from "@/i18n/de.json";
import enUK from "@/i18n/en-UK.json";
import enUS from "@/i18n/en-US.json";
import es from "@/i18n/es.json";
import fr from "@/i18n/fr.json";

export const imageUrl = (url: string) => {
  return process.env.NEXT_PUBLIC_APP_ASSET_ENDPOINT + "/" + url;
};

export const servicesRouteMapping: Record<
  number,
  { name: string; slug: string }
> = {
  1: { name: "Premier Pet Care Plan", slug: "premier-pet-care-plan" },
  2: { name: "Training", slug: "training" },
  4: { name: "Home Delivery", slug: "post2pet" },
  5: { name: "Technology", slug: "technology" },
};

// --------------------------- Localization ------------------------------
export enum LanguageCode {
  Global = "global",
  Spanish = "es",
  EnglishUS = "en-US",
  EnglishUK = "en-UK",
  German = "de",
  French = "fr",
}

export enum GoogleLanguageCode {
  English = "en",
  Spanish = "es",
  German = "de",
  French = "fr",
}

type Translation = Record<string, Record<string, string>>;

export type LanguageConfig = {
  label: string;
  flag: string;
  code: LanguageCode;
  googleCode: GoogleLanguageCode;
  translation: Translation;
};

export const globalLanguageConfig: LanguageConfig = {
  label: "Global",
  flag: "global.svg",
  code: LanguageCode.Global,
  googleCode: GoogleLanguageCode.English,
  translation: enUK,
};

export const spanishLanguageConfig: LanguageConfig = {
  label: "Spanish",
  flag: "es.svg",
  code: LanguageCode.Spanish,
  googleCode: GoogleLanguageCode.Spanish,
  translation: es,
};

export const englishUSLanguageConfig: LanguageConfig = {
  label: "English-US",
  flag: "en-US.svg",
  code: LanguageCode.EnglishUS,
  googleCode: GoogleLanguageCode.English,
  translation: enUS,
};

export const englishUKLanguageConfig: LanguageConfig = {
  label: "English-UK",
  flag: "en-UK.svg",
  code: LanguageCode.EnglishUK,
  googleCode: GoogleLanguageCode.English,
  translation: enUK,
};

export const germanLanguageConfig: LanguageConfig = {
  label: "Deutch",
  flag: "de.svg",
  code: LanguageCode.German,
  googleCode: GoogleLanguageCode.German,
  translation: de,
};

export const frenchLanguageConfig: LanguageConfig = {
  label: "French",
  flag: "fr.svg",
  code: LanguageCode.French,
  googleCode: GoogleLanguageCode.French,
  translation: fr,
};

export const languagesList: LanguageConfig[] = [
  globalLanguageConfig,
  spanishLanguageConfig,
  englishUSLanguageConfig,
  englishUKLanguageConfig,
  germanLanguageConfig,
  frenchLanguageConfig,
];

export const languagesConfig: Record<LanguageCode, Translation> =
  languagesList.reduce((acc, lang) => {
    acc[lang.code] = lang.translation;
    return acc;
  }, {} as Record<LanguageCode, Translation>);

export const getLocaleSiteInfo = (
  locale: LanguageCode
): { phone: string; email: string; currency: string } => {
  const localeInfo: Record<
    LanguageCode,
    { phone: string; email: string; currency: string }
  > = {
    [LanguageCode.EnglishUK]: {
      phone: "+44 117 472 5000",
      email: "pcp@premiervetalliance.co.uk",
      currency: "£",
    },
    [LanguageCode.EnglishUS]: {
      phone: "+1 470-509-5111",
      email: "pcp@premiervetalliance.com",
      currency: "$",
    },
    [LanguageCode.Spanish]: {
      phone: "+44 117 472 5000",
      email: "pcp@premiervetalliance.co.uk",
      currency: "€",
    },
    [LanguageCode.French]: {
      phone: "+44 (0)117 370 0300 ",
      email: "pcp@premiervetalliance.co.uk",
      currency: "€",
    },
    [LanguageCode.German]: {
      phone: "+44 (0)117 370 0300",
      email: "pcp@premiervetalliance.co.uk",
      currency: "€",
    },
    [LanguageCode.Global]: {
      phone: "+44 117 472 5000",
      email: "pcp@premiervetalliance.co.uk",
      currency: "£",
    },
  };

  // Return the info for the given locale
  // Default to Global if the locale is not found
  return localeInfo[locale] || localeInfo[LanguageCode.Global];
};

export const phoneNumberPlaceholders: Record<LanguageCode, string> = {
  [LanguageCode.Global]: "+1 (123) 123-1234",
  [LanguageCode.Spanish]: "+34 123 123 123",
  [LanguageCode.EnglishUS]: "+1 (123) 123-1234",
  [LanguageCode.EnglishUK]: "+44 1234 123 123",
  [LanguageCode.German]: "+49 1234 1234567",
  [LanguageCode.French]: "+33 1 23 45 67 89",
};

export const replaceCurrency = (
  amount: string,
  languageCode: LanguageCode
): string => {
  // Regular expression to identify the first non-digit character (the currency symbol)
  const updatedAmount = amount.replace(
    /^\D+/,
    getLocaleSiteInfo(languageCode).currency + ""
  );
  return updatedAmount.trim();
};
export function cleanText(input: string): string {
  if (!input) return "";
  // Remove HTML tags
  const withoutHtml = input.replace(/<\/?[^>]+(>|$)/g, "");
  // Remove non-alphanumeric characters except spaces
  const alphanumericAndSpacesOnly = withoutHtml.replace(/[^a-zA-Z0-9\s]/g, "");
  // Trim extra spaces and return
  return alphanumericAndSpacesOnly.trim();
}
