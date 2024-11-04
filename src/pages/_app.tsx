import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = localFont({
  src: "../assets/fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={manrope.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
