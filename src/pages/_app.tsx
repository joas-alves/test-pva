import Footer from "@/components/Footer";
import Header from "@/components/Header";
import de from "@/i18n/de.json";
import enUK from "@/i18n/en-UK.json";
import enUS from "@/i18n/en-US.json";
import es from "@/i18n/es.json";
import fr from "@/i18n/fr.json";
import setupAxios from "@/setupAxios";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { NextRouter, useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import { ServicesProvider } from "../contexts/services";
import { useEffect } from "react";
setupAxios();

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

const languages = {
  "en-US": enUS,
  "en-UK": enUK,
  es,
  de,
  fr,
};
const timeZone = "Europe/Vienna";

const manrope = localFont({
  src: "../assets/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  useEffect(() => {
    const googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={
        languages[router.locale as "en-US" | "en-UK" | "es" | "de" | "fr"]
      }
      timeZone={timeZone}
    >
      <SnackbarProvider
        autoHideDuration={3000}
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{}}
      >
        <ServicesProvider>
          <main className={manrope.className}>
            <Header />
            <div
              id="google_translate_element"
              style={{ display: "none" }}
            ></div>
            <Component {...pageProps} />
            <Footer />
          </main>
        </ServicesProvider>
      </SnackbarProvider>
    </NextIntlClientProvider>
  );
}
