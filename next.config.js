/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/cdn/:path*', // Define the path to be proxied
          destination: 'https://medec-bucket.sgp1.digitaloceanspaces.com/:path*', // Replace with your DigitalOcean Spaces endpoint
        },
      ];
    },
  };
  
  module.exports = nextConfig;