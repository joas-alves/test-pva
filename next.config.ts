import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n: {
    locales: ['en-UK', 'en-US', 'de', 'es', 'fr'],
    defaultLocale: 'en-UK',
    localeDetection: false,
  },
};

export default nextConfig;
