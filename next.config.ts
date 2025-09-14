import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable modern React features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Optimize package imports for server components
    serverComponentsExternalPackages: ['@sanity/client'],
    // Enable Turbopack
    turbo: {
      rules: {
        '*.svg': ['@svgr/webpack']
      }
    }
  },
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'cdn.sanity.io'],
  },
  
  // Enable React strict mode
  reactStrictMode: true,
  
  // Handle 404s for client-side navigation
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },
  
  // Redirects for old routes
  async redirects() {
    return [
      // Redirect old routes to the new single-page anchors
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/#blog',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
