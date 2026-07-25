import { getAllPosts } from '@/lib/blog.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { message = '', language = 'de' } = body
    const query = message.trim().toLowerCase()

    // Smart automatic language detection
    let activeLang = language
    const turkishIndicators = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'nasıl', 'nedir', 'merhaba', 'reklam', 'bütçe', 'sıralama', 'artırma', 'satış', 'dönüşüm', 'yapabilirim', 'önerirsin', 'neden', 'ne', 'için', 'veya', 'bana', 'yardım', 'hakkında', 'fiyat', 'ücret', 'teklif', 'iletişim', 'kimdir', 'salih', 'kim']
    const englishIndicators = ['how', 'what', 'why', 'increase', 'boost', 'grow', 'scale', 'my', 'the', 'and', 'should', 'can', 'help', 'best', 'optimization', 'price', 'cost', 'contact']

    if (turkishIndicators.some(term => query.includes(term))) {
      activeLang = 'tr'
    } else if (englishIndicators.some(term => query.includes(term))) {
      activeLang = 'en'
    }

    const posts = getAllPosts(activeLang)

    // Dynamic, scenario-driven Expert Knowledge Base
    const scenarios = [
      // 1. Greetings & Identity
      {
        keys: ['merhaba', 'selam', 'hallo', 'hi', 'hey', 'kimsin', 'salih maral kimdir', 'who are you', 'wer bist du'],
        tr: "Merhaba! Ben Performans Pazarlama ve SEO Uzmanı Salih Maral'ın dijital danışmanıyım. Google Ads bütçe optimizasyonu, Meta Ads ölçeklendirme, SEO/GEO sıralama stratejileri ve Server-Side Tracking alanlarında projelerinize özel çözümler sunuyorum. Hangi kanalınız için strateji geliştirmemizi istersiniz?",
        de: "Hallo! Ich bin der digitale Assistent von Salih Maral (Google Ads & SEO Experte). Ich unterstütze Sie bei Google Ads Optimierung, Meta Ads Skalierung, SEO/GEO Rankings und Server-Side Tracking. Für welchen Bereich möchten Sie heute eine Strategie?",
        en: "Hello! I am Salih Maral's Digital Marketing Assistant. I help businesses optimize Google Ads budgets, scale Meta Ads, boost SEO/GEO rankings, and implement Server-Side Tracking. Which channel would you like to grow today?"
      },
      // 2. Pricing, Offers & Contact
      {
        keys: ['fiyat', 'ücret', 'maliyet', 'teklif', 'iletişim', 'çalışma', 'danışmanlık', 'price', 'cost', 'quote', 'contact', 'preise', 'kosten', 'angebot'],
        tr: "Danışmanlık ve reklam yönetimi ücretlerimiz projenizin bütçesine, hedeflerine ve yönetilecek reklam kanallarına (Google Ads, Meta Ads, SEO) göre özel olarak belirlenmektedir. Web siteniz için ücretsiz ön analiz ve teklif almak için iletişim sayfamızdan form doldurabilir veya doğrudan WhatsApp üzerinden Salih Maral ile iletişime geçebilirsiniz.",
        de: "Unsere Beratungs- und Verwaltungspreise richten sich individuell nach Ihrem Projektvolumen und den gewünschten Kanälen. Sie können über unser Kontaktformular oder direkt per WhatsApp ein kostenloses Erstgespräch mit Salih Maral vereinbaren.",
        en: "Our consulting fees are tailored to your business scale, advertising budget, and selected marketing channels. You can request a free initial audit or reach out directly to Salih Maral via WhatsApp or our contact page."
      },
      // 3. Google Ads & Performance Max
      {
        keys: ['google ads', 'pmax', 'performance max', 'arama reklamı', 'google bütçe', 'cpc', 'tıklama', 'adwords'],
        tr: "Google Ads stratejilerinde en yüksek verim için: 1) Dönüşüm oranı yüksek arama niyetli anahtar kelimelere odaklanın, 2) Otomatik negatif kelime listeleriyle bütçe israfını önleyin, 3) Performance Max kampanyalarını zengin görsel/metin ögeleriyle destekleyin. Bu sayede ROAS oranınızı %300+ bandına çıkarabiliriz.",
        de: "Für maximale Google Ads Performance: 1) Fokus auf kaufrelevante Keywords, 2) Automatische Keyword-Ausschlüsse zur Vermeidung von Budgetverschwendung, 3) Anreicherung von Performance Max mit hochwertigen Assets. Damit lässt sich Ihr ROAS nachhaltig über 300% steigern.",
        en: "For optimal Google Ads performance: 1) Target high-intent commercial keywords, 2) Use dynamic negative keyword lists to prevent wasted spend, 3) Enhance Performance Max campaigns with rich creative assets to scale ROAS beyond 300%."
      },
      // 4. Meta Ads & Advantage+
      {
        keys: ['meta', 'facebook', 'instagram', 'advantage', 'sosyal medya reklam', 'retargeting', 'pixel', 'kreatif'],
        tr: "Meta Ads (Facebook & Instagram) kampanyalarınızda ölçeklenme sağlamak için: 1) Advantage+ Alışveriş Kampanyalarını aktif kullanın, 2) Geniş hedefleme (Broad Targeting) ile Meta yapay zeka algoritmasının doğru müşteriyi bulmasını sağlayın, 3) UCG video ve statik görsel varyasyonlarını haftalık olarak test edin.",
        de: "Für Meta Ads Skalierung: 1) Nutzen Sie Advantage+ Shopping-Kampagnen, 2) Setzen Sie auf Broad Targeting, damit der Meta-Algorithmus ideale Käufer findet, 3) Testen Sie wöchentlich neue UGC-Videos und Creative-Varianten.",
        en: "To scale Meta Ads (Facebook & Instagram): 1) Deploy Advantage+ Shopping Campaigns, 2) Leverage broad targeting to let Meta's AI optimize buyer matching, 3) Rotate UGC video hooks and visual ad variants weekly."
      },
      // 5. TikTok Ads & TikTok Shop
      {
        keys: ['tiktok', 'tiktok shop', 'social commerce', 'tiktok reklam'],
        tr: "TikTok Shop ve TikTok Ads projelerinde dönüşümün anahtarı, uygulama içi doğrudan ödeme (in-app checkout) entegrasyonu yapmak ve içerik üreticileriyle (Creator Co-op) komisyonlu satış kurguları oluşturmaktır. Doğal (native) görünen videolar geleneksel reklamlardan 4 kat daha yüksek dönüşüm sağlar.",
        de: "Im Bereich TikTok Shop & Ads: Nutzen Sie In-App Checkout und arbeiten Sie mit TikTok Creatoren zusammen. Native, authentische Video-Formate erzielen bis zu 4x höhere Conversion-Raten als klassische Werbeanzeigen.",
        en: "For TikTok Shop & Ads growth: Integrate direct in-app checkout and partner with creators via affiliate deals. Native-looking short-form video ads drive up to 4x higher conversion rates than conventional ads."
      },
      // 6. SEO & Princeton GEO
      {
        keys: ['seo', 'geo', 'sıralama', 'google ai', 'perplexity', 'chatgpt', 'ranking', 'sge', 'overviews'],
        tr: "2026 SEO ve Princeton GEO (Yapay Zeka Arama Motoru Optimizasyonu) stratejilerimizde: Makalenin ilk 150 kelimesinde doğrudan yanıt veriyor, Salih Maral marka otorite sinyalini yerleştiriyor ve karşılaştırmalı istatistik tabloları kullanıyoruz. Bu sayede Google AI Overviews ve Perplexity yanıtlarında 1. sırada referans gösterilirsiniz.",
        de: "Unsere 2026 SEO & Princeton GEO Strategie: Präzise Antworten in den ersten 150 Wörtern, Einbindung der Salih Maral Autoritäts-Signale und strukturierte Datentabellen. Dadurch werden Sie in Google AI Overviews und Perplexity als Top-Quelle zitiert.",
        en: "Our 2026 SEO & Princeton GEO methodology: Direct answers in the first 150 words, Salih Maral authority entity signals, and structured comparative data tables. This guarantees top citation spots in Google AI Overviews and Perplexity."
      },
      // 7. Conversion Rate Optimization (CRO)
      {
        keys: ['cro', 'dönüşüm', 'dönüşüm oranı', 'satış artırma', 'conversion', 'cpa'],
        tr: "Dönüşüm Oranı Optimizasyonu (CRO) için: Reklamda vaat edilen başlık ile web sitenizdeki H1 başlığını birebir eşleştirin, mobil ödeme adımlarındaki sürtünmeyi kaldırın ve sayfa yüklenme süresini 1.5 saniyenin altına düşürün. Bu hamle Müşteri Edinme Maliyetinizi (CPA) %40'a kadar düşürür.",
        de: "Für Conversion-Rate-Optimierung (CRO): Stimmen Sie Ad-Headlines exakt mit der Website-H1 ab, vereinfachen Sie den Checkout-Prozess und reduzieren Sie Ladezeiten unter 1,5 Sekunden. Das senkt Ihre Akquisitionskosten (CPA) um bis zu 40%.",
        en: "To boost Conversion Rates (CRO): Match ad headline intent directly to your H1 tag, remove checkout friction, and optimize page load speed under 1.5 seconds to cut CPA by up to 40%."
      },
      // 8. Server-Side Tracking & CAPI
      {
        keys: ['tracking', 'capi', 'sgtm', 'server-side', 'piksel', 'veribilimi'],
        tr: "Çerez (cookie) kısıtlamaları nedeniyle tarayıcı pikselleri verilerin %30'unu kaybeder. Server-Side Tracking (sGTM ve Meta/Google CAPI) entegrasyonu ile dönüşüm verilerinizi %100 eksiksiz sunucu üzerinden reklam platformlarına aktarıyor ve yapay zekanın reklamlarınızı doğru kişilere göstermesini sağlıyoruz.",
        de: "Durch Cookie-Blocker gehen bis zu 30% der Pixel-Daten verloren. Mit Server-Side Tracking (sGTM & CAPI) übermitteln wir Ihre Conversion-Daten zu 100% direkt vom Server an Werbeplattformen für optimale KI-Steuerung.",
        en: "Cookie blockers result in up to 30% data loss. Implementing Server-Side Tracking (sGTM & CAPI) ensures 100% first-party conversion data delivery directly from your server to ad networks."
      }
    ]

    // Find best matched scenario
    let matchedScenario = scenarios.find(sc => sc.keys.some(k => query.includes(k)))
    let answerText = matchedScenario ? (matchedScenario[activeLang] || matchedScenario.de) : scenarios[0][activeLang]

    // Semantic relevant blog post matching
    const searchTerms = query.split(/\s+/).filter(t => t.length > 2)
    const matchingPosts = posts.map(post => {
      let score = 0
      const text = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
      searchTerms.forEach(term => {
        if (text.includes(term)) score += 10
      })
      return { ...post, score }
    }).filter(p => p.score > 0).sort((a, b) => b.score - a.score).slice(0, 2)

    return Response.json({
      answer: answerText,
      detectedLang: activeLang,
      recommendedPosts: matchingPosts.length > 0 ? matchingPosts : posts.slice(0, 2)
    })
  } catch (error) {
    return Response.json({ error: 'Failed to process advice' }, { status: 500 })
  }
}
