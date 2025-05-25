/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/bleach-core' : '',
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bleach-core/' : '',
}

module.exports = nextConfig 