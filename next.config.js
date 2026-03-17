/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Required for Next.js 16 Turbopack compatibility
  turbopack: {},
  async rewrites() {
    return [
      // German: /de/dienstleistungen/:service → /de/hizmetler/:service
      { source: '/de/dienstleistungen/bewertungsmanagement', destination: '/de/hizmetler/yorum-yonetimi' },
      { source: '/de/dienstleistungen/:service', destination: '/de/hizmetler/:service' },
      // English: /en/services/:service → /en/hizmetler/:service
      { source: '/en/services/review-management', destination: '/en/hizmetler/yorum-yonetimi' },
      { source: '/en/services/:service', destination: '/en/hizmetler/:service' },
    ];
  },
  async redirects() {
    return [
      // Redirect old Turkish-style URLs for DE and EN to localized versions
      { source: '/de/hizmetler/yorum-yonetimi', destination: '/de/dienstleistungen/bewertungsmanagement', permanent: true },
      { source: '/de/hizmetler/:service', destination: '/de/dienstleistungen/:service', permanent: true },
      { source: '/en/hizmetler/yorum-yonetimi', destination: '/en/services/review-management', permanent: true },
      { source: '/en/hizmetler/:service', destination: '/en/services/:service', permanent: true },
    ];
  },
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
