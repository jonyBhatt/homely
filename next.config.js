/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        hostname: "a0.muscache.com",
        protocol: "https",
      },
      {
        hostname: "img.freepik.com",
        protocol: "https",
      },
    ],
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
