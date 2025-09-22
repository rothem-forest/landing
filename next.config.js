/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "modo-phinf.pstatic.net",
      },
    ],
  },
};

module.exports = nextConfig;
