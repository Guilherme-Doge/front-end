/** @type {import('next').Next.json} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pngwing.com',
      },
    ],
  },
};

export default nextConfig;