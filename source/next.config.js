const withSvgr = require('next-plugin-svgr');
module.exports = withSvgr({
  typescript: {
    // Skip type checking during build; keeps legacy project building
    ignoreBuildErrors: true,
  },
  eslint: {
    // Do not block production builds on ESLint errors
    ignoreDuringBuilds: true,
  },
});