import de from "@/i18n/de.json";
import enUK from "@/i18n/en-UK.json";
import enUS from "@/i18n/en-US.json";
import es from "@/i18n/es.json";
import fr from "@/i18n/fr.json";

export const imageUrl = (url: string) => {
  return process.env.NEXT_PUBLIC_APP_ASSET_ENDPOINT + "/" + url;
};

export const i18nMapping = {
  de,
  enUK,
  enUS,
  es,
  fr,
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

type RecursiveRecord = {
  [key: string]: string | RecursiveRecord;
};

type Translation = RecursiveRecord;

export type LanguageConfig = {
  label: string;
  flag: string;
  code: LanguageCode;
  translation: Translation;
};

export const globalLanguageConfig: LanguageConfig = {
  label: "Global",
  flag: "global.svg",
  code: LanguageCode.Global,
  translation: enUK,
};

export const spanishLanguageConfig: LanguageConfig = {
  label: "Spanish",
  flag: "es.svg",
  code: LanguageCode.Spanish,
  translation: es,
};

export const englishUSLanguageConfig: LanguageConfig = {
  label: "English-US",
  flag: "en-US.svg",
  code: LanguageCode.EnglishUS,
  translation: enUS,
};

export const englishUKLanguageConfig: LanguageConfig = {
  label: "English-UK",
  flag: "en-UK.svg",
  code: LanguageCode.EnglishUK,
  translation: enUK,
};

export const germanLanguageConfig: LanguageConfig = {
  label: "Deutch",
  flag: "de.svg",
  code: LanguageCode.German,
  translation: de,
};

export const frenchLanguageConfig: LanguageConfig = {
  label: "French",
  flag: "fr.svg",
  code: LanguageCode.French,
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
): { phone: string; email: string; currency: string; address: string } => {
  const localeInfo: Record<
    LanguageCode,
    { phone: string; email: string; currency: string; address: string }
  > = {
    [LanguageCode.EnglishUK]: {
      phone: "+44 117 472 5000",
      email: "pcp@premiervetalliance.co.uk",
      currency: "£",
      address: "The Quorum, Bond Street, Bristol, BS1 3AE",
    },
    [LanguageCode.EnglishUS]: {
      phone: "+1 470-509-5111",
      email: "pcp@premiervetalliance.com",
      currency: "$",
      address: "207 Tanner Williams Ct. Suite D Mobile, AL 36608",
    },
    [LanguageCode.Spanish]: {
      phone: "+44 117 472 5000",
      email: "pcp@premiervetalliance.co.uk",
      currency: "€",
      address: "The Quorum, Bond Street, Bristol, BS1 3AE",
    },
    [LanguageCode.French]: {
      phone: "+44 (0)117 370 0300 ",
      email: "administratie@huisdierenzorgplan.nl",
      currency: "€",
      address: "The Quorum, Bond Street, Bristol, BS1 3AE",
    },
    [LanguageCode.German]: {
      phone: "+44 (0)117 370 0300",
      email: "pcp@premiervetalliance.co.uk",
      currency: "€",
      address: "The Quorum, Bond Street, Bristol, BS1 3AE",
    },
    [LanguageCode.Global]: {
      phone: "+44 117 472 5000",
      email: "pcp@premiervetalliance.co.uk",
      currency: "£",
      address: "The Quorum, Bond Street, Bristol, BS1 3AE",
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

export function createNewsSlug(title: string, id: string | number) {
  const slug = cleanText(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with dashes
    .replace(/^-+|-+$/g, ""); // Trim leading or trailing dashes

  return `${slug}?id=${encodeURIComponent(id)}`;
}
