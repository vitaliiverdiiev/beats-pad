import type { NextConfig } from "next";
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg?react$/i,
      issuer: /\.[js|ts|jsx|tsx]$/,
      use: ['@svgr/webpack'],
    });

    if (!isServer) {
      // Ensure that all imports of 'yjs' resolve to the same instance
      config.resolve.alias['yjs'] = path.resolve(__dirname, 'node_modules/yjs')
    }

    return config
  },
};

export default nextConfig;
