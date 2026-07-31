import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root,
  },
  // CV PDF se nesmí cachovat — jinak prohlížeč/Cloudflare drží starou verzi
  // po `max-age` i po nasazení nové. no-store → vždy čerstvá verze.
  async headers() {
    return [
      {
        source: "/cv/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
