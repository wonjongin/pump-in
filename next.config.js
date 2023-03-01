/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  plugins: [require("@tailwindcss/forms")],
  async redirects() {
    return [
      {
        source: "/references/career",
        destination: "https://www.work.go.kr/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
