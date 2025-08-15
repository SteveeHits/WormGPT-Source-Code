import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['node-fetch', 'data-uri-to-buffer', 'fetch-blob', 'formdata-polyfill'],
  experimental: {
    allowedDevOrigins: [
        "https://*.cluster-ubrd2huk7jh6otbgyei4h62ope.cloudworkstations.dev"
    ]
  }
};

// Set the default max duration for serverless functions
// This is to prevent timeouts on long-running AI requests
export const maxDuration = 300;

export default nextConfig;
