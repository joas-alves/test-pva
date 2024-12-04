import { NextIntlClientProvider } from "next-intl";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NextRouter, useRouter } from "next/router";
import setupAxios from "@/setupAxios";
import enUS from "@/i18n/en-US.json";
import enUK from "@/i18n/en-UK.json";
import es from "@/i18n/es.json";
import de from "@/i18n/de.json";
import fr from "@/i18n/fr.json";
import { ServicesProvider } from "../contexts/services.js";
import { SnackbarProvider } from "notistack";
setupAxios();

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

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={
        languages[router.locale as "en-US" | "en-UK" | "es" | "de" | "fr"]
      }
      timeZone={timeZone}
    >
      <SnackbarProvider autoHideDuration={3000}>
        <ServicesProvider>
          <main className={manrope.className}>
            <Header />
            <Component {...pageProps} />
            <Footer router={router} />
          </main>
        </ServicesProvider>
      </SnackbarProvider>
    </NextIntlClientProvider>
  );
}
