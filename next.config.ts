import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-store",
          },
          {
            key: "Netlify-CDN-Cache-Control",
            value: "no-store",
          },
        ],
      },
      {
        source: "/",
        has: [{ type: "header", key: "origin", value: "https://klpretailerbeta\\.b2clogin\\.com" }],
        headers: [{ key: "Access-Control-Allow-Origin", value: "https://klpretailerbeta.b2clogin.com" }],
      },
      {
        source: "/",
        has: [{ type: "header", key: "origin", value: "https://qlf-uniform\\.klepierre\\.fr" }],
        headers: [{ key: "Access-Control-Allow-Origin", value: "https://qlf-uniform.klepierre.fr" }],
      },
    ];
  },
};

export default nextConfig;
