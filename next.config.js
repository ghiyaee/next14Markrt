/** @type {import('next').NextConfig} */
const nextConfig = {
 
};
module.exports = nextConfig;
module.exports = {
  version: 2,
  builds: [{ src: './page.js', use: '@vercel/node' }],
  routes: [{ src: '/(.*)', dest: '/' }],
};
module.exports = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
