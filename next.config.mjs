/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  distDir: "out",
  basePath: "/aro-aro-mixing-festival",
  assetPrefix: "/aro-aro-mixing-festival",
};

export default nextConfig;
