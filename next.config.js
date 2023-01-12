/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: process.env.REACT_APP_HOST_KEY,
    CLOUDINARY_HOST_KEY : process.env.CLOUDINARY_HOST_KEY,
 },
 images: {
  domains: ["res.cloudinary.com"]
 }
}

module.exports = nextConfig
