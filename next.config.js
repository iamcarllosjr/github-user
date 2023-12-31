/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  images: {
    domains: [
      "avatars.githubusercontent.com"
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
