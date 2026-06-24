import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent directory made Next infer the wrong
  // workspace root. Pin it to this project so Turbopack resolves correctly.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
