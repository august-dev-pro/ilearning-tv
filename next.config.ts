import { API_URL } from "@/lib/api";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1", "ilearningtv-backend.onrender.com"],
  },
  /*  ⚠ The "images.domains" configuration is deprecated. Please use "images.remotePatterns" configuration instead. */
};

export default nextConfig;
