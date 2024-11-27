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
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'ec2-35-176-20-182.eu-west-2.compute.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
};

export default nextConfig;
