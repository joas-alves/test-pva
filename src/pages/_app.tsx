import Footer from "@/components/Footer";
import Header from "@/components/Header";
import de from "@/i18n/de.json";
import enUK from "@/i18n/en-UK.json";
import global from "@/i18n/global.json";

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

setupAxios();

const languages = {
  "en-UK": enUK,
  "en-US": enUS,
  es,
  de,
  fr,
  "global": enUK,
};

const timeZone = "Europe/Vienna";

const manrope = localFont({
  src: "../assets/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
});

export const metadata = {
  title: 'Acme',
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      messages={
        languages[router.locale as "en-US" | "en-UK" | "es" | "de" | "fr" | "global"] 
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
            <Component {...pageProps} />
            <Footer />
          </main>
        </ServicesProvider>
      </SnackbarProvider>
    </NextIntlClientProvider>
  );
}
