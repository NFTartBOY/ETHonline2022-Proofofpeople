/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
images: {
    domains: ['avatars.dicebear.com', 'gateway.ipfs.io', 'gateway.pinata.cloud'],
  },
}

module.exports = nextConfig
