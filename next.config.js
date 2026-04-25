//next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // শুধু এই লাইনটি যুক্ত করুন
};

module.exports = nextConfig;