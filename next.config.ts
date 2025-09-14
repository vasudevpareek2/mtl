import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for now as it's causing build issues with Sanity
  // Enable modern React features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Enable ESM modules
    esmExternals: true,
    // Enable server components external packages
    serverComponentsExternalPackages: ['@sanity/client'],
  },
  
  // Configure external packages
  transpilePackages: ['framer-motion', '@sanity/client'],
  
  // Configure webpack to handle framer-motion
  webpack: (config) => {
    // Fixes npm packages that depend on `framer-motion`
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': 'framer-motion',
    };
    
    // Handle ESM packages
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    
    return config;
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
