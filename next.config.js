/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
  assetPrefix: isProd ? '/bleach-core/' : '',
  basePath: isProd ? '/bleach-core' : '',
}

module.exports = nextConfig