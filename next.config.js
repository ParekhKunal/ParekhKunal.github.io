/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  disableExperimentalFeaturesWarning: true,
  reactStrictMode: true,
  swxMinify: true,
  unoptimized: true
};

module.exports = nextConfig;
