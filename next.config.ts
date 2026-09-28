import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/profiles/julio-herrera-velutini/",
        destination: "/people/julio-herrera-velutini/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
