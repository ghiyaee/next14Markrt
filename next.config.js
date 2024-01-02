/** @type {import('next').NextConfig} */
const nextConfig = {
  "version": 2,
  "builds": [
    {
      "src": "./app/**/*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    },
    
  ]
}

module.exports = nextConfig
module.exports = {
  experimental: {
     serverComponentsExternalPackages: ['mongoose'],
    },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};
