const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Next.js 16+ uses serverExternalPackages at root level
  serverExternalPackages: ['mongodb'],
  // Add empty turbopack config to avoid webpack/turbopack conflict
  turbopack: {},
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "ALLOWALL" },
          { key: "Content-Security-Policy", value: "frame-ancestors *;" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
