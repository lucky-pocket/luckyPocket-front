/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shared'],
  reactStrictMode: false,
  transpilePackages: ['ui', 'common'],
  env: {
    CLIENT_API_URL: process.env.CLIENT_API_URL,
  },
};

module.exports = nextConfig;
