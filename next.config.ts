import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers () {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate, max-age=0"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
