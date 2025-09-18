import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set output file tracing root to silence workspace warning
  outputFileTracingRoot: __dirname,
  
  // Disable Turbopack for now as it's causing build issues with Sanity
  // Enable modern React features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Enable ESM modules
    esmExternals: true,
  },
  
  // Configure external packages
  serverExternalPackages: ['@sanity/client'],
  transpilePackages: ['framer-motion'],
  
  // Configure webpack to handle framer-motion
  webpack: (config, { isServer }) => {
    // Handle framer-motion module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': require.resolve('framer-motion'),
    };

    // Handle ESM packages
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    // Fix for server components
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }

    // Handle framer-motion ESM imports
    config.module = {
      ...config.module,
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
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
