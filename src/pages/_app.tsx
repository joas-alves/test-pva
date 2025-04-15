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
import { ServicesProvider } from "../contexts/services";

// Initialize Axios
setupAxios();

const manrope = localFont({
  src: "../assets/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
});

const timeZone = "Europe/Vienna";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale as keyof typeof languagesConfig;
  
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
            <Component {...pageProps} />
            <Footer />
          </main>
        </ServicesProvider>
      </SnackbarProvider>
    </NextIntlClientProvider>
  );
}
