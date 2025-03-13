import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);

module.exports = {
  images: {
    domains: ['drive.google.com'],
  },
};
//module.exports = {
  //images: {
    //remotePatterns: [
      //{
        //protocol: 'https',
        //hostname: 'drive.google.com',
      //},
    //],
  //},
//};
