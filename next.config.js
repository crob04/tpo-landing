/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: '*.podbean.com' },
      { hostname: 'podbean.com' }
    ]
  }
}

module.exports = nextConfig
