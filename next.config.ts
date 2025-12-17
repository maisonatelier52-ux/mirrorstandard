import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = withBundleAnalyzer({
  compress: true,
  productionBrowserSourceMaps: true,


  experimental: {
    optimizeCss: true,
  },
});

export default nextConfig;
