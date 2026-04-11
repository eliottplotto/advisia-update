import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/insights/5-tches-que-lia',
        destination: '/insights/5-taches-que-lia',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
