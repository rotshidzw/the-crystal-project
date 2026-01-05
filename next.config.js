/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.wixstatic.com", "flowbite.s3.amazonaws.com"],
  },
}

module.exports = nextConfig
