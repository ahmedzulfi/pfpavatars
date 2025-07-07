import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['placehold.co', 'aqlrcxdrwimmubklskxc.supabase.co'], // ✅ one array with both domains
  },
};

export default nextConfig;
