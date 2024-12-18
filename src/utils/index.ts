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
