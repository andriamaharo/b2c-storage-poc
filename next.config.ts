import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  assetPrefix: phase === PHASE_DEVELOPMENT_SERVER
    ? undefined
    : "https://b2c-storage-poc.netlify.app",
  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
      {
        source: "/(passwordreset)?",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://klpretailerbeta.b2clogin.com",
          },
        ],
      },
    ];
  },
});

export default nextConfig;
