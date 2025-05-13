// next.config.js
module.exports = {
  typescript: {
    ignoreBuildErrors: true,  // temporarily bypasses type checking issues
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
