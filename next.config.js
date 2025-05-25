/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/bleach-core',
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com'],
  },
  trailingSlash: true,
  assetPrefix: '/bleach-core/',
  distDir: 'dist',
}

module.exports = nextConfig 