import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ["en-UK", "en-US", "de", "es", "fr", "global"],
    defaultLocale: "global",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ec2-35-176-20-182.eu-west-2.compute.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pva.21days.org.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "21days.org.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.21days.org.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.premiervetalliance.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/why-pva", destination: "/about-us", permanent: true },
      {
        source: "/investors/strategic-review",
        destination: "/strategic-review",
        permanent: true,
      },
      {
        source: "/strategic-review",
        destination: "/",
        permanent: true,
      },
      {
        source: "/voyager-practice-terms-conditions",
        destination: "/voyager-pet-owner-terms-conditions",
        permanent: true,
      },
      {
        source: "/uk/contact",
        destination: "/en-UK/contact-us",
        permanent: true,
      },
      {
        source: "/uk/services/premier-pet-care-plan",
        destination: "/en-UK/services/premier-pet-care-plan",
        permanent: true,
      },
      {
        source: "/uk/contact",
        destination: "/en-UK/contact-us",
        permanent: true,
      },
      {
        source: "/uk/services/training",
        destination: "/en-UK/services/training",
        permanent: true,
      },
      {
        source: "/uk/services/vet2pet",
        destination: "/en-UK/services/vet2pet",
        permanent: true,
      },
      {
        source: "/uk/services/post2pet",
        destination: "/en-UK/services/post2pet",
        permanent: true,
      },
      {
        source: "/uk/who-we-are",
        destination: "/en-UK/about-us",
        permanent: true,
      },
      {
        source: "/uk/services/our-technology",
        destination: "/en-UK/services/technology",
        permanent: true,
      },
      {
        source: "/is-your-pet-health-plan-relevant",
        destination:
          "/news/is-your-pet-health-plan-relevant-to-todayrsquos-pet-owners?id=18",
        permanent: true,
      },
      {
        source: "/selling-the-benefits-of-your-pet-health-plan",
        destination:
          "/news/how-to-sell-the-benefits-of-your-pet-health-plan?id=15",
        permanent: true,
      },
      {
        source: "/pet-health-plan-metrics",
        destination:
          "/news/top-10-pet-health-plan-measurement-metricsnbsp?id=31",
        permanent: true,
      },
      {
        source: "/how-to-price-my-pet-health-plan",
        destination: "/news/how-to-price-your-pet-health-plan?id=26",
        permanent: true,
      },
      {
        source: "/uk/services/premier-pet-care-plan/benefits-for-pet-owners",
        destination: "/services/premier-pet-care-plan",
        permanent: true,
      },
      {
        source: "/pet-insurance-vs-pet-health-plan",
        destination:
          "/news/whatrsquos-the-difference-between-pet-insurance-and-healthcare-plans-pet-owners-seem-confused?id=17",
        permanent: true,
      },
      {
        source: "/updated-rcvs-under-care-guidance",
        destination: "/news/rcvs-under-care-guidance-ndash-an-overview?id=35",
        permanent: true,
      },
      {
        source: "/reasons-not-to-offer-home-delivery",
        destination: "/news/five-reasons-not-to-offer-home-delivery?id=22",
        permanent: true,
      },
      {
        source: "/what-to-do-in-your-practice",
        destination: "/news/5-things-you-need-to-do-in-your-practice?id=12",
        permanent: true,
      },
      {
        source: "/attract-clients-to-your-practice",
        destination: "/news/10-ways-to-attract-clients-to-your-practice?id=19",
        permanent: true,
      },
      {
        source: "/technology-in-your-practice",
        destination:
          "/news/top-5-ways-to-use-technology-in-your-practice-nbsp?id=27",
        permanent: true,
      },
      {
        source: "/gen-x-and-millennial-owners",
        destination: "/news/gen-x-and-millennials-are-ruling-the-roost?id=8",
        permanent: true,
      },
      {
        source: "/pet-healthcare-plans-during-a-cost-of-living-crisis",
        destination:
          "/news/pet-healthcare-plans-during-a-costofliving-crisis?id=21",
        permanent: true,
      },
      {
        source: "/top-cat-and-dog-names-2024",
        destination:
          "/news/can-you-guess-the-top-cat-and-dog-names-in-2024?id=10",
        permanent: true,
      },
      {
        source: "/does-a-pet-health-plan-increase-revenue",
        destination:
          "/news/how-much-does-a-pet-health-plan-increase-revenue?id=30",
        permanent: true,
      },
      {
        source: "/why-we-talk-about-home-delivery",
        destination:
          "/news/home-delivery-ndash-why-are-we-still-talking-about-it?id=36",
        permanent: true,
      },
      {
        source: "/build-client-loyalty",
        destination: "/news/top-4-ways-to-build-client-loyalty?id=28",
        permanent: true,
      },
      {
        source: "/five-ways-to-grow-your-practice",
        destination: "/news/5-ways-to-grow-your-practice?id=29",
        permanent: true,
      },
      {
        source: "/make-your-pet-health-plan-successful",
        destination:
          "/news/how-can-you-make-your-pet-health-plan-more-successful-five-important-indicators-to-regularly-check?id=13",
        permanent: true,
      },
      {
        source: "/an-interview-with-katie-mercer",
        destination:
          "/news/an-interview-with-katie-mercer-principal-andersonrsquos-vets?id=20",
        permanent: true,
      },
      {
        source: "/improve-client-engagement",
        destination:
          "/news/6-ways-to-improve-client-engagement-with-your-plan?id=25",
        permanent: true,
      },
      {
        source: "/uk/services/premier-pet-care-plan/benefits-for-practices",
        destination: "/services/premier-pet-care-plan",
        permanent: true,
      },
      {
        source: "/rcvs-regulation-update",
        destination:
          "/news/how-does-the-rcvs-regulation-affect-pet-health-plans?id=24",
        permanent: true,
      },
      {
        source: "/get-older-pets",
        destination: "/news/why-you-need-older-pets?id=9",
        permanent: true,
      },
      {
        source: "/keeping-up-with-what-pet-owners-want",
        destination:
          "/news/pet-ownersrsquo-demands-are-changing-are-you-keeping-up-with-what-pet-owners-want?id=37",
        permanent: true,
      },
      {
        source: "/understand-the-new-cat-microchipping-law",
        destination:
          "/news/understanding-the-new-cat-microchipping-law-ndash-what-it-means-for-your-plan?id=16",
        permanent: true,
      },
      { source: "/contact", destination: "/contact-us", permanent: true },
    ];
  },
};

export default nextConfig;
