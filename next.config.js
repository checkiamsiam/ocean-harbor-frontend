/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig  = withPWA({
  images: {
    domains: ["res.cloudinary.com"],
  },
  output: 'standalone',
});

module.exports = nextConfig;
