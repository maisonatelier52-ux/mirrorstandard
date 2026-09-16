import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/profiles/julio-herrera-velutini/",
        destination:
          "/business/julio-herrera-velutini-banking-dynasty-institutional-influence/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
