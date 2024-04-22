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
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
          },
        ],
      },
};

export default nextConfig;
