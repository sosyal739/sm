'use client'

export default function EcosystemMarquee({ lang = 'de' }) {
  const content = {
    tr: {
      badge: 'ENTEGRASYONLAR & TEKNOLOJİLER',
      title: 'Almanya Pazarlama Ekosisteminizi Tek Merkezde Birleştirin',
      subtitle: 'Google Ads, Analytics, Search Console, Semrush, Meta ve e-ticaret altyapılarınızla %100 entegre çalışıyoruz.'
    },
    de: {
      badge: 'INTEGRATIONEN & TECHNOLOGIEN',
      title: 'Ihr Marketing-Ökosystem in einer zentralen Schaltzentrale',
      subtitle: 'Nahtlose Integration mit Google Ads, Analytics, Search Console, Semrush, Meta und führenden Shop-Systemen.'
    },
    en: {
      badge: 'INTEGRATIONS & TECH STACK',
      title: 'Unify Your Marketing Ecosystem in One Powerhouse',
      subtitle: 'Seamlessly integrated with Google Ads, GA4, Search Console, Semrush, Meta, and major e-commerce platforms.'
    }
  }

  const current = content[lang] || content.de

  // Row 1: Core SEO, Google & Meta Ads Platforms (with guaranteed crisp inline SVGs)
  const row1 = [
    {
      name: 'Google Ads',
      badge: 'Certified Partner',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#4285F4" d="M12.01 2.01L5.65 13.02a4.42 4.42 0 005.88 5.88l6.36-11.01a4.42 4.42 0 00-5.88-5.88z"/>
          <path fill="#FBBC04" d="M5.65 13.02a4.42 4.42 0 105.88 5.88L5.65 13.02z"/>
          <path fill="#34A853" d="M20.25 15.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
        </svg>
      )
    },
    {
      name: 'Google Analytics 4',
      badge: 'E-Com Tracking',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" fill="#F9AB00"/>
          <path d="M12 2v10l8.66 5" stroke="#E37400" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Search Console',
      badge: 'SEO & Indexing',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="24" height="24" rx="6" fill="#4285F4"/>
          <path d="M6 14l4-4 4 4 4-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="8" r="1.5" fill="white"/>
        </svg>
      )
    },
    {
      name: 'Semrush',
      badge: 'Competitive PPC',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="5" fill="#FF622D"/>
          <text x="12" y="16.5" fontSize="11" fill="white" textAnchor="middle" fontWeight="900" fontFamily="sans-serif">SE</text>
        </svg>
      )
    },
    {
      name: 'Ahrefs',
      badge: 'Backlinks & SEO',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="5" fill="#FF6A3D"/>
          <text x="12" y="17" fontSize="14" fill="white" textAnchor="middle" fontWeight="900" fontFamily="sans-serif">A</text>
        </svg>
      )
    },
    {
      name: 'Screaming Frog',
      badge: 'Technical Crawler',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#6DB33F">
          <circle cx="12" cy="12" r="10" fill="#6DB33F"/>
          <circle cx="9" cy="10" r="2.2" fill="white"/>
          <circle cx="15" cy="10" r="2.2" fill="white"/>
          <circle cx="9" cy="10" r="1" fill="#1b4d1b"/>
          <circle cx="15" cy="10" r="1" fill="#1b4d1b"/>
          <path d="M8 15c2 2 6 2 8 0" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Meta Ads',
      badge: 'Instagram & Facebook',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#0081FB" d="M12 7.2c-2.4 0-4.3 1.6-5.5 3.5-1.1-1.8-2.7-3.1-4.6-3.1C.8 7.6 0 8.6 0 10.1c0 3.3 3.6 7.5 7.1 7.5 2.1 0 3.8-1.5 4.9-3.2 1.1 1.7 2.8 3.2 4.9 3.2 3.5 0 7.1-4.2 7.1-7.5 0-1.5-.8-2.5-1.9-2.5-1.9 0-3.5 1.3-4.6 3.1-1.2-1.9-3.1-3.5-5.5-3.5z"/>
        </svg>
      )
    }
  ]

  // Row 2: E-Commerce, CMS & Tracking Infrastructure
  const row2 = [
    {
      name: 'Shopify',
      badge: 'E-Commerce',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <path fill="#95BF47" d="M18.8 4.2c-.1-.1-.3-.2-.5-.1l-1.7.5c-.4-1.2-1.1-2.2-2.1-2.9C13.5 1 12.3.8 11.2 1c-.3 0-.6.1-.8.3-.3.2-.4.6-.3.9l.7 3.5-4.2 1.3c-.4.1-.7.5-.6.9l2.8 14.1c.1.4.5.7.9.6l11.4-3.5c.4-.1.7-.5.6-.9L18.8 4.2z"/>
          <path fill="#5E8E3E" d="M14.5 1.7c-1 .2-1.9.8-2.6 1.7l1.7 8.2 3.7-1.1-2.8-8.8z"/>
        </svg>
      )
    },
    {
      name: 'WordPress',
      badge: 'CMS & Sites',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <circle cx="12" cy="12" r="10" fill="#21759B"/>
          <path fill="white" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-8.8 10a8.8 8.8 0 011.6-5.1l4.8 13.1A8.9 8.9 0 013.2 12zm8.8 8.8c-.8 0-1.6-.1-2.4-.4l3.1-9 3.2 8.9a8.8 8.8 0 01-3.9.5zm7.3-3.9l-3.3-9.5c.7 0 1.3-.1 1.3-.1.4 0 .3-.7-.1-.7h-3.4c-.4 0-.3.7.1.7 0 0 .6.1 1.2.1l-2.4 7-1.4-4.8.9-3c.4 0 .9-.1.9-.1.4 0 .3-.7-.1-.7H8.7c-.4 0-.3.7.1.7 0 0 .6.1 1.1.1l4.2 11.8a8.8 8.8 0 015.3-2.5z"/>
        </svg>
      )
    },
    {
      name: 'Server-Side GTM',
      badge: 'CAPI & First-Party',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="24" height="24" rx="5" fill="#246FDB"/>
          <path d="M7 12l5-5 5 5-5 5-5-5z" fill="white"/>
          <circle cx="12" cy="12" r="2.5" fill="#246FDB"/>
        </svg>
      )
    },
    {
      name: 'Merchant Center',
      badge: 'Google Shopping',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="24" height="24" rx="5" fill="#0F9D58"/>
          <path d="M7 9h10l-1.5 9h-7L7 9z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M10 9V6.5a2 2 0 114 0V9" stroke="white" strokeWidth="2"/>
        </svg>
      )
    },
    {
      name: 'YouTube Ads',
      badge: '23.1M+ Views',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="5" fill="#FF0000"/>
          <path fill="white" d="M10 8.5v7l6-3.5-6-3.5z"/>
        </svg>
      )
    },
    {
      name: 'TikTok Ads',
      badge: 'Gen-Z Reach',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <rect width="24" height="24" rx="5" fill="#000000"/>
          <path fill="#25F4EE" d="M14.5 5.5v7.2a3.5 3.5 0 11-3.5-3.5c.3 0 .6 0 .9.1V6.8a6 6 0 105.1 5.9V9.1c1.2.9 2.6 1.4 4.2 1.4V8a4.5 4.5 0 01-3.2-1.4 4.5 4.5 0 01-1.3-1.1h-2.2z"/>
          <path fill="#FE2C55" d="M15 6v7.2a3.5 3.5 0 11-3.5-3.5c.3 0 .6 0 .9.1V7.3a6 6 0 105.1 5.9V9.6c1.2.9 2.6 1.4 4.2 1.4V8.5a4.5 4.5 0 01-3.2-1.4A4.5 4.5 0 0117.2 6H15z"/>
        </svg>
      )
    },
    {
      name: 'Google Maps',
      badge: 'Local 3-Pack',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <rect width="24" height="24" rx="5" fill="#34A853"/>
          <path d="M12 5c-2.8 0-5 2.2-5 5 0 3.8 5 9 5 9s5-5.2 5-9c0-2.8-2.2-5-5-5z" fill="white"/>
          <circle cx="12" cy="10" r="2" fill="#EA4335"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Dot Matrix Background */}
      <div className="absolute inset-0 bg-grid-dots pointer-events-none opacity-80 z-0"></div>

      {/* Living Ambient Aura behind Marquee */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#5138EE]/18 via-purple-400/20 to-indigo-300/18 rounded-full blur-[90px] pointer-events-none z-0 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 max-w-7xl mb-8 text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-slate-50 border border-slate-100 rounded-md px-3.5 py-1.5 mb-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            {current.badge}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
          {current.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-1">
          {current.subtitle}
        </p>
      </div>

      {/* Edge Blur / Fade Masks for Smooth Orphex Infinite Flow */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

      {/* Row 1: Sliding Left with Google, Analytics, Search Console, Semrush, Ahrefs, Screaming Frog, Meta */}
      <div className="relative mb-4">
        <div className="flex animate-scroll items-center gap-4 w-max">
          {[...row1, ...row1].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(81,56,238,0.08)] hover:border-[#5138EE]/30 transition-all shrink-0 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 border border-slate-100 shadow-2xs">
                {item.renderIcon()}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-950 group-hover:text-[#5138EE] transition-colors">{item.name}</div>
                <div className="text-[10px] font-medium text-slate-500">{item.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Sliding Right (Reverse) with Shopify, WordPress, sGTM, Merchant Center, YouTube, TikTok, Maps */}
      <div className="relative">
        <div className="flex animate-scroll items-center gap-4 w-max" style={{ animationDirection: 'reverse', animationDuration: '32s' }}>
          {[...row2, ...row2].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(16,185,129,0.08)] hover:border-emerald-300 transition-all shrink-0 group cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center p-1.5 border border-slate-100 shadow-2xs">
                {item.renderIcon()}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-950 group-hover:text-emerald-600 transition-colors">{item.name}</div>
                <div className="text-[10px] font-medium text-slate-500">{item.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
