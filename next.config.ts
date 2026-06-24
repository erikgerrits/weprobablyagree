import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent directory made Next infer the wrong
  // workspace root. Pin it to this project so Turbopack resolves correctly.
  turbopack: {
    root: __dirname,
  },
  // Canonical host: permanently redirect www.weprobablyagree.com to the
  // bare apex, preserving the path. Only fires for the www host, so the
  // apex and *.vercel.app domains are unaffected.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.weprobablyagree.com" }],
        destination: "https://weprobablyagree.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
