/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  turbopack: {
    root: __dirname,
  },
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
      // 301: Thin / Eski Blog Yazıları → Yetkin 2026 Ana Rehberleri (GSC Dizine Ekleme Çözümü)
      { source: '/blog/meta-ads-basari', destination: '/blog/meta-reklamlarinda-para-kaybetmeyi-durdurun-2026', statusCode: 301 },
      { source: '/blog/seo-stratejileri-2026', destination: '/blog/google-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/blog/tiktok-ads-rehber', destination: '/blog/tiktok-shop-vs-meta-advantage-plus-e-commerce-2026', statusCode: 301 },
      { source: '/tr/blog/seo-stratejileri-2026', destination: '/blog/google-seo-ranking-factors-2026', statusCode: 301 },
      { source: '/en/blog/meta-ads-basari', destination: '/blog/meta-reklamlarinda-para-kaybetmeyi-durdurun-2026', statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
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
