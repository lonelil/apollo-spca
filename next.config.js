/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    //loader: "custom",
    //loaderFile: "./src/lib/imageLoader.ts"
  },
  output: "export",
};

module.exports = nextConfig;
