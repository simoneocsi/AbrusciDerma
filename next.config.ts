import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abrusciderma.com",
      },
    ],
  },
};

export default nextConfig;
