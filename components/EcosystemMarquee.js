'use client'

export default function EcosystemMarquee({ lang = 'de' }) {
  const content = {
    tr: {
      badge: 'ENTEGRASYONLAR',
      title: 'Almanya Pazarlama Ekosisteminizi Tek Merkezde Birleştirin',
      subtitle: 'Kullandığımız tüm dijital kanallar, e-ticaret altyapıları ve analiz araçlarıyla %100 entegre çalışıyoruz.'
    },
    de: {
      badge: 'INTEGRATIONEN',
      title: 'Ihr Marketing-Ökosystem in einer zentralen Schaltzentrale',
      subtitle: 'Wir verbinden nahtlos alle führenden Werbekanäle, E-Commerce-Plattformen und Analysetools.'
    },
    en: {
      badge: 'INTEGRATIONS',
      title: 'Unify Your Marketing Ecosystem in One Powerhouse',
      subtitle: 'Seamlessly integrated with all leading ad networks, ecommerce platforms, and analytics engines.'
    }
  }

  const current = content[lang] || content.de

  const row1Logos = [
    { name: 'Google Ads', badge: 'Certified Partner', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg' },
    { name: 'Meta Ads', badge: 'Instagram & Facebook', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { name: 'YouTube Ads', badge: '23M+ Views', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg' },
    { name: 'TikTok Ads', badge: 'Viral Growth', icon: 'https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg' },
    { name: 'Google Maps', badge: 'Local 3-Pack', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' },
    { name: 'Merchant Center', badge: 'Shopping Feed', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Microsoft Bing', badge: 'B2B Reach', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' }
  ]

  const row2Logos = [
    { name: 'Shopify', badge: 'E-Commerce', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
    { name: 'Shopware', badge: 'Made in Germany', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Shopware_logo.svg' },
    { name: 'WooCommerce', badge: 'WordPress', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/WooCommerce_logo.svg' },
    { name: 'ikas', badge: 'Hızlı E-Ticaret', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Google Analytics 4', badge: 'E-Com Tracking', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Server-Side GTM', badge: 'CAPI & First-Party', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'Google Search Console', badge: 'SEO & Indexing', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' }
  ]

  return (
    <section className="py-16 bg-slate-50/70 border-y border-slate-200/70 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl mb-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-white border border-slate-200/80 rounded-full px-4 py-1.5 mb-3 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {current.badge}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          {current.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
          {current.subtitle}
        </p>
      </div>

      {/* Row 1: Sliding Left */}
      <div className="relative mb-4">
        <div className="flex animate-scroll items-center gap-4 w-max">
          {[...row1Logos, ...row1Logos].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all shrink-0 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1 border border-slate-100">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#4285F4] transition-colors">{item.name}</div>
                <div className="text-[10px] font-medium text-slate-400">{item.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Sliding Right (Reverse) */}
      <div className="relative">
        <div className="flex animate-scroll items-center gap-4 w-max" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
          {[...row2Logos, ...row2Logos].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-emerald-300 transition-all shrink-0 group cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center p-1 border border-slate-100">
                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{item.name}</div>
                <div className="text-[10px] font-medium text-slate-400">{item.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
