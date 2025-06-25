import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  }, images: {
    domains: ['mfiles.alphacoders.com'], // ← Add allowed external image domains here
  },
};

export default nextConfig;
