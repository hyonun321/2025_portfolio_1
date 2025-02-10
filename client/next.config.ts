import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/2025_portfolio_1" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/2025_portfolio_1" : "",
};

export default nextConfig;
