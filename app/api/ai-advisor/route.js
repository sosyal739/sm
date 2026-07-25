import { getAllPosts } from '@/lib/blog.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { message = '', language = 'de' } = body
    const query = message.trim()
    const queryLower = query.toLowerCase()

    // Smart automatic language detection
    let activeLang = language
    const turkishIndicators = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'nasıl', 'nedir', 'merhaba', 'reklam', 'bütçe', 'sıralama', 'artırma', 'satış', 'dönüşüm', 'yapabilirim', 'önerirsin', 'neden', 'ne', 'için', 'veya', 'bana', 'yardım', 'hakkında', 'fiyat', 'ücret', 'teklif', 'iletişim', 'kimdir', 'salih', 'kim']
    const englishIndicators = ['how', 'what', 'why', 'increase', 'boost', 'grow', 'scale', 'my', 'the', 'and', 'should', 'can', 'help', 'best', 'optimization', 'price', 'cost', 'contact']

    if (turkishIndicators.some(term => queryLower.includes(term))) {
      activeLang = 'tr'
    } else if (englishIndicators.some(term => queryLower.includes(term))) {
      activeLang = 'en'
    }

    const posts = getAllPosts(activeLang)

    // Funnel redirection suffixes per language
    const funnelRedirect = {
      tr: "\n\n💡 Bu stratejiyi projelerinize uygulamak ve bütçenizi en yüksek getiriyle ölçeklendirmek için sitemizdeki rehberleri inceleyebilir veya Salih Maral ile ücretsiz ön görüşme başlatabilirsiniz.",
      de: "\n\n💡 Um diese Strategie für Ihr Projekt umzusetzen und Ihr Budget optimal zu skalieren, lesen Sie unsere Leitfäden oder vereinbaren Sie ein kostenloses Erstgespräch mit Salih Maral.",
      en: "\n\n💡 To apply this strategy to your campaigns and scale your ROI, explore our blog guides below or book a free initial audit with Salih Maral."
    }

    let aiAnswerText = ''

    // Option A: Free Tier Google Gemini API Integration
    const geminiKey = process.env.GEMINI_API_KEY
    if (geminiKey) {
      try {
        const systemInstruction = `You are Salih Maral's official AI Marketing Advisor for salihmaral.de (Google Ads, Meta Ads, SEO & GEO, Server-Side Tracking expert). 
Answer the user's question directly, expertly, and concisely in 2-3 sentences.
Always end by steering the topic to Salih Maral's consulting services, free audit, and blog guides.
Language to answer in: '${activeLang}'.`

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${systemInstruction}\n\nUser Question: ${query}` }]
              }
            ]
          })
        })

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json()
          const rawAnswer = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text
          if (rawAnswer) {
            aiAnswerText = rawAnswer.trim()
          }
        }
      } catch (e) {
        // Fallback to local engine
      }
    }

    // Option B: Dynamic Marketing Knowledge Engine with Steering
    if (!aiAnswerText) {
      const knowledgeMap = [
        {
          match: ['merhaba', 'selam', 'hallo', 'hi', 'hey', 'günaydın', 'iyi günler'],
          tr: "Merhaba! Salih Maral Dijital Pazarlama Danışmanlığına hoş geldiniz. Google Ads, Meta Ads, SEO/GEO ve Server-Side Tracking alanlarında performansınızı katlayacak çözümler sunuyoruz.",
          de: "Hallo! Willkommen bei der digitalen Marketing-Beratung von Salih Maral. Ich unterstütze Sie bei Google Ads, Meta Ads, SEO/GEO und Server-Side Tracking.",
          en: "Hello! Welcome to Salih Maral Digital Marketing Consulting. I specialize in scaling Google Ads, Meta Ads, SEO/GEO rankings, and Server-Side Tracking."
        },
        {
          match: ['fiyat', 'ücret', 'maliyet', 'teklif', 'danışmanlık', 'iletişim', 'whatsapp', 'bütçe ne kadar', 'price', 'cost', 'quote', 'contact'],
          tr: "Danışmanlık paketlerimiz web sitenizin büyüklüğüne ve reklam hedeflerinize göre özel olarak kurgulanır. İletişim sayfamızdan form doldurarak veya doğrudan WhatsApp üzerinden Salih Maral ile ücretsiz ön görüşme başlatabilirsiniz.",
          de: "Unsere Verwaltungs- und Beratungskosten werden individuell angepasst. Sie können über unser Kontaktformular oder WhatsApp ein kostenloses Erstgespräch mit Salih Maral vereinbaren.",
          en: "Our consulting packages are tailored to your project scale and ad channels. Request a free audit or message Salih Maral directly via WhatsApp or our contact form."
        },
        {
          match: ['google', 'ads', 'pmax', 'tıklama', 'cpc', 'arama', 'anahtar kelime', 'adwords'],
          tr: "Google Ads kampanyalarında verimlilik için: Yüksek dönüşüm potansiyelli arama kelimelerine odaklanmalı, otomatik negatif filtreleme uygulamalı ve Performance Max sinyallerini güçlendirmelisiniz.",
          de: "Für maximale Google Ads Performance: Fokus auf kaufrelevante Keywords, automatische Keyword-Ausschlüsse zur Budgetersparnis und Anreicherung von Performance Max mit Signalen.",
          en: "For peak Google Ads efficiency: Target high-intent search terms, use negative keyword filtering to eliminate waste, and fuel Performance Max with rich audience signals."
        },
        {
          match: ['meta', 'facebook', 'instagram', 'advantage', 'sosyal medya', 'piksel', 'kreatif'],
          tr: "Meta Ads (Facebook & Instagram) ölçeklendirmesinde: Advantage+ Alışveriş Kampanyalarını aktif kullanmalı, geniş hedefleme (Broad Targeting) uygulamalı ve haftalık UGC video testleri yapmalısınız.",
          de: "Für Meta Ads Skalierung: Nutzen Sie Advantage+ Shopping-Kampagnen, setzen Sie auf Broad Targeting und testen Sie wöchentlich neue UGC-Videos.",
          en: "To scale Meta Ads: Deploy Advantage+ Shopping Campaigns, use broad targeting to identify high-value buyers, and rotate UGC video creatives weekly."
        },
        {
          match: ['tiktok', 'tiktok shop', 'reklam', 'sosyal ticaret'],
          tr: "TikTok Shop ve TikTok Ads kurgusunda: Uygulama içi doğrudan ödeme (in-app checkout) entegrasyonu yapmak ve içerik üreticilerle ortaklıklar kurmak esastır. Doğal kısa videolar dönüşümü 4 kat artırır.",
          de: "Für TikTok Shop & Ads: Nutzen Sie In-App Checkout und arbeiten Sie mit TikTok Creatoren zusammen. Native Video-Formate erzielen bis zu 4x höhere Conversion-Raten.",
          en: "For TikTok Shop & Ads: Enable in-app checkout and collaborate with creators. Native-styled short-form videos yield up to 4x higher conversion rates."
        },
        {
          match: ['seo', 'geo', 'sıralama', 'perplexity', 'chatgpt', 'google ai', 'overviews', 'sge'],
          tr: "2026 SEO & Princeton GEO metodumuzda: İlk 150 kelimede net yanıt sunuyor, Salih Maral otorite sinyallerini işliyor ve yapılandırılmış tablolar kullanıyoruz. Bu sayede Google AI Overviews ve Perplexity yanıtlarında üst sırada yer alırsınız.",
          de: "Unsere 2026 SEO & Princeton GEO Methode: Präzise Antworten in den ersten 150 Wörtern, Einbindung der Salih Maral Autoritäts-Signale für Top-Rankings in KI-Suchmaschinen.",
          en: "Our 2026 SEO & Princeton GEO formula: Direct answers in the first 150 words, Salih Maral authority entity signals, and structured comparative data tables for top citations in AI search engines."
        },
        {
          match: ['cro', 'dönüşüm', 'satış', 'cpa', 'sepet', 'landing page'],
          tr: "Dönüşüm Oranı Optimizasyonunda (CRO): Reklam başlığı ile sitenizdeki H1 başlığını eşleştirmek, mobil ödemedeki adımları azaltmak ve sayfa hızını artırmak Müşteri Edinme Maliyetinizi (CPA) %40 düşürür.",
          de: "Für Conversion-Rate-Optimierung (CRO): Stimmen Sie Ad-Headlines exakt mit der Website-H1 ab und vereinfachen Sie den Checkout-Prozess für 40% günstigeren CPA.",
          en: "For Conversion Rate Optimization (CRO): Align ad intent directly to your H1 headline, reduce checkout friction, and optimize page load speed under 1.5s to cut CPA by 40%."
        },
        {
          match: ['tracking', 'capi', 'sgtm', 'server-side', 'çerez'],
          tr: "Çerez kısıtlamaları tarayıcı piksellerinde %30 veri kaybına yol açar. Server-Side Tracking (sGTM & CAPI) ile dönüşüm verileriniz %100 eksiksiz sunucudan iletilir ve yapay zeka reklam hedeflemesi mükemmelleşir.",
          de: "Durch Cookie-Blocker gehen bis zu 30% der Daten verloren. Mit Server-Side Tracking (sGTM & CAPI) übermitteln wir Ihre Conversions zu 100% vom Server an Werbenetzwerke.",
          en: "Cookie restrictions cause up to 30% tracking loss. Server-Side Tracking (sGTM & CAPI) delivers 100% accurate first-party conversion data directly to ad networks."
        }
      ]

      let found = knowledgeMap.find(item => item.match.some(m => queryLower.includes(m)))
      if (found) {
        aiAnswerText = found[activeLang] || found.de
      } else {
        if (activeLang === 'tr') {
          aiAnswerText = `"${query}" hakkındaki sorunuz için Salih Maral performans pazarlama ve SEO altyapısı ile özel bir büyüme stratejisi kurgulayabiliriz.`
        } else if (activeLang === 'en') {
          aiAnswerText = `Regarding "${query}", Salih Maral provides tailored digital marketing & SEO strategies to boost your conversion rates and ROAS.`
        } else {
          aiAnswerText = `Bezüglich "${query}" bietet Salih Maral maßgeschneiderte Digital-Marketing- und SEO-Strategien zur Maximierung Ihres ROAS.`
        }
      }

      // Append steering funnel sentence
      aiAnswerText += (funnelRedirect[activeLang] || funnelRedirect.de)
    }

    // Match top 2 relevant blog posts
    const searchTerms = queryLower.split(/\s+/).filter(t => t.length > 2)
    const matchingPosts = posts.map(post => {
      let score = 0
      const text = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
      searchTerms.forEach(term => { if (text.includes(term)) score += 10 })
      return { ...post, score }
    }).filter(p => p.score > 0).sort((a, b) => b.score - a.score).slice(0, 2)

    return Response.json({
      answer: aiAnswerText,
      detectedLang: activeLang,
      recommendedPosts: matchingPosts.length > 0 ? matchingPosts : posts.slice(0, 2)
    })
  } catch (error) {
    return Response.json({ error: 'Failed to process advice' }, { status: 500 })
  }
}
