import Footer from "@/components/Footer";
import Header from "@/components/Header";
import setupAxios from "@/setupAxios";
import "@/styles/globals.css";
import { languagesConfig, languagesList } from "@/utils";
import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import { useRouter } from "next/router";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import { ServicesProvider } from "../contexts/services";

// Initialize Axios
setupAxios();

const manrope = localFont({
  src: "../assets/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
});

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (
          config: { pageLanguage: string },
          elementId: string
        ) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const timeZone = "Europe/Vienna";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale as keyof typeof languagesConfig;
  const languageConfig=languagesList.find((each)=>each.code===locale)
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: languageConfig?.code || 'en' },
          "google_translate_element"
        );
      }
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onload = () => {
      // Ensure re-initialization after script load
      if (window.googleTranslateElementInit) {
        window.googleTranslateElementInit();
      } else {
        initializeGoogleTranslate();
      }
    };
    document.body.appendChild(script);

    // Expose the init function globally
    window.googleTranslateElementInit = initializeGoogleTranslate;
  }, []);


  return (
    <NextIntlClientProvider
      locale={locale}
      messages={languagesConfig[locale] || languagesConfig.global}
      timeZone={timeZone}
    >
      <SnackbarProvider
        autoHideDuration={3000}
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <ServicesProvider>
          <main className={manrope.className}>
            <Header />
            <div id="google_translate_element" style={{ display: "none" }}></div>
            <Component {...pageProps} />
            <Footer />
          </main>
        </ServicesProvider>
      </SnackbarProvider>
    </NextIntlClientProvider>
  );
}
