/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
  assetPrefix: isProd ? '/website/' : '',
  basePath: isProd ? '/website' : '',
}

module.exports = nextConfig