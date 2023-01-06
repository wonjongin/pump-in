/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  plugins: [require("@tailwindcss/forms")],
};

module.exports = nextConfig;
