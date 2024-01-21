/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unsplash.com',
          },
          {
            protocol: 'https',
            hostname: '8gbgwx7rusepl9z5.public.blob.vercel-storage.com',
          },
        ],
      },
};

export default nextConfig;
