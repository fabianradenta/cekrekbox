import type { NextConfig } from "next";

// STATIC_EXPORT=1 untuk hosting statis (hasil di out/, tanpa optimasi gambar).
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
