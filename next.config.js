/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxbc.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'beachcomber.csoft.ca',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'savemaxheadlessdemo.csoft.ca',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      },
    ]
  },
};

module.exports = nextConfig;
