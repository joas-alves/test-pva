import { FullPotentialSection, VeterinaryExcellenceSection } from "@/components/get-in-touch";
import Head from "next/head";

export default function GetInTouchPage() {
  return (
    <div>
      <Head>
      <title>Contact Premier Vet Alliance | PVA</title>
      <meta property="og:site_name" content="Premier Vet Alliance"></meta>
      <meta name="description" content="Reach out to contact or book a meeting with Premier Vet Alliance, to discuss your query or express interest in one of our products."></meta>
      <link rel="canonical" href="https://premiervetalliance.com/uk/contact/"></link>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:title" content="Contact Premier Vet Alliance | PVA"></meta>
      <meta property="og:description" content="Reach out to contact or book a meeting with Premier Vet Alliance, to discuss your query or express interest in one of our products."></meta>
      <meta property="og:url" content="https://premiervetalliance.com/uk/contact/"></meta>
      <meta property="og:url" content="https://premiervetalliance.com/uk/contact/"></meta>
      </Head>
      <FullPotentialSection />
      <VeterinaryExcellenceSection />
    </div>
  )
}
