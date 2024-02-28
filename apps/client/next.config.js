/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shared'],
  reactStrictMode: false,
  transpilePackages: ['ui', 'common'],
  env: {
    CLIENT_API_URL: process.env.CLIENT_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}:path*`,
    },
  ],
};

module.exports = nextConfig;
