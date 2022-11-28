/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: process.env.REACT_APP_HOST_KEY,
 },
}

module.exports = nextConfig
