/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ['ui', 'common'],
  env: {
    CLIENT_API_URL: process.env.CLIENT_API_URL,
  },
};

module.exports = nextConfig;
