/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
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
      // 301: /de → / (Almanca ana sayfa kök dizindir; kopya sayfa ve GSC kanonik uyarısını önler)
      { source: '/de', destination: '/', statusCode: 301 },
      // 301: Eski Türkçe DE URL'ler → Yeni Almanca URL'ler
      { source: '/de/hizmetler/yorum-yonetimi', destination: '/de/dienstleistungen/bewertungsmanagement', statusCode: 301 },
      { source: '/de/hizmetler/:service', destination: '/de/dienstleistungen/:service', statusCode: 301 },
      // 301: Eski Türkçe EN URL'ler → Yeni İngilizce URL'ler
      { source: '/en/hizmetler/yorum-yonetimi', destination: '/en/services/review-management', statusCode: 301 },
      { source: '/en/hizmetler/:service', destination: '/en/services/:service', statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Access-Control-Allow-Origin", value: process.env.CORS_ORIGINS || "*" },
          { key: "Access-Control-Allow-Methods", value: "GET, POST, PUT, DELETE, OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "*" },
        ],
      },
      {
        source: "/(.*)\\.(png|jpg|jpeg|gif|ico|svg|webp|woff|woff2|ttf|css|js)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
