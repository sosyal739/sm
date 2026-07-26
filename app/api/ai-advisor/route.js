import { getAllPosts } from '@/lib/blog.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { message = '', language = 'de' } = body
    const query = message.trim()
    const queryLower = query.toLowerCase()

    // Smart automatic language detection
    let activeLang = language
    const turkishIndicators = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'nasıl', 'nedir', 'merhaba', 'reklam', 'bütçe', 'sıralama', 'artırma', 'satış', 'dönüşüm', 'yapabilirim', 'önerirsin', 'neden', 'ne', 'için', 'veya', 'bana', 'yardım', 'hakkında', 'fiyat', 'ücret', 'teklif', 'iletişim', 'iletişm', 'kimdir', 'salih', 'kim', 'ulaş', 'form']
    const englishIndicators = ['how', 'what', 'why', 'increase', 'boost', 'grow', 'scale', 'my', 'the', 'and', 'should', 'can', 'help', 'best', 'optimization', 'price', 'cost', 'contact', 'reach']

    if (turkishIndicators.some(term => queryLower.includes(term))) {
      activeLang = 'tr'
    } else if (englishIndicators.some(term => queryLower.includes(term))) {
      activeLang = 'en'
    }

    const posts = getAllPosts(activeLang)

    // Dedicated Intent Handlers (Handles exact questions, typos, and direct needs)
    
    // INTENT 1: Contact / Communication (İletişim, Ulaşım, Form, WhatsApp, Typos like 'iletişm')
    const contactKeys = ['iletişim', 'iletişm', 'iletisim', 'ulaş', 'ulas', 'görüş', 'gorus', 'konuş', 'konus', 'yaz', 'mesaj', 'form', 'contact', 'reach', 'kontakt', 'nachricht']
    if (contactKeys.some(k => queryLower.includes(k))) {
      const contactAnswer = {
        tr: "Salih Maral ile iletişime geçmek için sitemizdeki **İletişim Formunu** doldurabilir veya doğrudan **WhatsApp** hattımızdan mesaj atabilirsiniz. Projenizi inceleyip en kısa sürede size geri dönüş sağlıyoruz.",
        de: "Um Salih Maral zu kontaktieren, füllen Sie bitte das **Kontaktformular** auf unserer Website aus oder schreiben Sie uns direkt per **WhatsApp**. Wir melden uns umgehend bei Ihnen.",
        en: "To contact Salih Maral, please fill out the **Contact Form** on our website or message us directly via **WhatsApp**. We will get back to you promptly."
      }
      return Response.json({
        answer: contactAnswer[activeLang] || contactAnswer.de,
        detectedLang: activeLang,
        recommendedPosts: posts.slice(0, 2)
      })
    }

    // INTENT 2: Pricing / Costs / Offers (Fiyat, Ücret, Maliyet, Teklif, Kaç Para, Ne Kadar)
    const priceKeys = ['fiyat', 'ücret', 'ucret', 'maliyet', 'teklif', 'kaç para', 'ne kadar', 'paket', 'price', 'cost', 'quote', 'preise', 'kosten', 'angebot']
    if (priceKeys.some(k => queryLower.includes(k))) {
      const priceAnswer = {
        tr: "Danışmanlık ve reklam yönetimi fiyatlarımız projenizin hedeflerine, bütçesine ve yönetilecek kanallara (Google Ads, Meta Ads, SEO) göre özel belirlenmektedir. Web siteniz için özel fiyat teklifi ve ücretsiz bütçe analizi almak için lütfen **İletişim Formunu** doldurun.",
        de: "Unsere Preise richten sich individuell nach Ihren Zielen und den gewünschten Kanälen (Google Ads, Meta Ads, SEO). Bitte füllen Sie das **Kontaktformular** aus, um ein maßgeschneidertes Angebot und eine kostenlose Analyse zu erhalten.",
        en: "Our management and consulting fees are tailored to your goals and marketing channels (Google Ads, Meta Ads, SEO). Please fill out the **Contact Form** to receive a customized quote and free audit."
      }
      return Response.json({
        answer: priceAnswer[activeLang] || priceAnswer.de,
        detectedLang: activeLang,
        recommendedPosts: posts.slice(0, 2)
      })
    }

    // INTENT 3: Greetings & Identity (Merhaba, Selam, Kimsiniz, Salih Maral Kimdir)
    const greetingKeys = ['merhaba', 'selam', 'hallo', 'hi', 'hey', 'günaydın', 'iyi günler', 'kimdir', 'kimsin', 'wer bist du', 'who are you']
    if (greetingKeys.some(k => queryLower.includes(k))) {
      const greetingAnswer = {
        tr: "Merhaba! Ben Performans Pazarlama ve SEO Uzmanı Salih Maral'ın dijital asistanıyım. Google Ads, Meta Ads, SEO/GEO ve Server-Side Tracking alanlarında projelerinize özel çözümler sunuyorum. İletişim sayfamızdan form doldurarak Salih Maral ile doğrudan iletişime geçebilirsiniz.",
        de: "Hallo! Ich bin der digitale Assistent von Salih Maral (Google Ads & SEO Experte). Ich unterstütze Sie bei Google Ads, Meta Ads, SEO/GEO und Server-Side Tracking. Über unser Kontaktformular können Sie direkt mit Salih Maral in Verbindung treten.",
        en: "Hello! I am Salih Maral's Digital Marketing Assistant. I specialize in Google Ads, Meta Ads, SEO/GEO, and Server-Side Tracking. You can fill out our Contact Form to get in touch with Salih Maral directly."
      }
      return Response.json({
        answer: greetingAnswer[activeLang] || greetingAnswer.de,
        detectedLang: activeLang,
        recommendedPosts: posts.slice(0, 2)
      })
    }

    // INTENT 4: Marketing Specific Topics (Google Ads, Meta, TikTok, SEO, CRO, Tracking)
    let aiAnswerText = ''

    // Try Real-Time Gemini API if GEMINI_API_KEY is available
    const geminiKey = process.env.GEMINI_API_KEY
    if (geminiKey) {
      try {
        const systemInstruction = `You are Salih Maral's AI Marketing Advisor for salihmaral.de (Google Ads, Meta Ads, SEO expert).
Answer the user's question directly in 2 sentences in language '${activeLang}'.
If user asks about contact, tell them to fill out the Contact Form. If user asks about price, tell them to fill out the Contact Form for a free audit.`

        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${query}` }] }]
          }),
          signal: AbortSignal.timeout(5000)
        })

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json()
          const rawAnswer = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text
          if (rawAnswer) aiAnswerText = rawAnswer.trim()
        }
      } catch (e) {}
    }

    // High-Performance Dynamic Marketing Intent Fallback
    if (!aiAnswerText) {
      const topicScenarios = [
        {
          match: ['google', 'ads', 'pmax', 'tıklama', 'cpc', 'arama', 'anahtar kelime', 'adwords'],
          tr: "Google Ads reklamlarında verim almak için: Yüksek satın alma niyetli anahtar kelimelere odaklanmalı, otomatik negatif kelime takibi uygulamalı ve Performance Max kampanyalarını doğru dönüşüm verileriyle beslemelisiniz.",
          de: "Für Google Ads Performance: Fokus auf kaufrelevante Keywords, automatische Keyword-Ausschlüsse zur Budgetersparnis und Anreicherung von Performance Max mit Konvertierungs-Signalen.",
          en: "For peak Google Ads efficiency: Target commercial search intent, use negative keyword filtering to eliminate waste, and fuel Performance Max with rich audience signals."
        },
        {
          match: ['meta', 'facebook', 'instagram', 'advantage', 'sosyal medya', 'piksel', 'kreatif'],
          tr: "Meta Ads (Facebook & Instagram) ölçeklendirmesinde: Advantage+ Alışveriş Kampanyalarını aktif kullanmalı, geniş hedefleme (Broad Targeting) uygulamalı ve haftalık UGC video testleri yapmalısınız.",
          de: "Für Meta Ads Skalierung: Nutzen Sie Advantage+ Shopping-Kampagnen, setzen Sie auf Broad Targeting und testen Sie wöchentlich neue UGC-Videos.",
          en: "To scale Meta Ads: Deploy Advantage+ Shopping Campaigns, use broad targeting to identify high-value buyers, and rotate UGC video creatives weekly."
        },
        {
          match: ['tiktok', 'tiktok shop', 'reklam', 'sosyal ticaret'],
          tr: "TikTok Shop ve TikTok Ads kurgusunda: Uygulama içi ödeme (in-app checkout) entegrasyonu yapmak ve içerik üreticilerle ortaklıklar kurmak esastır. Doğal kısa videolar dönüşümü 4 kat artırır.",
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
          tr: "Çerez kısıtlamaları tarayıcı piksellerinde %30 veri kaybına yol açar. Server-Side Tracking (sGTM & CAPI) ile dönüşüm verileriniz %100 eksiksiz sunucudan iletilir ve reklam yapay zekasının doğruluğu maksimuma çıkar.",
          de: "Durch Cookie-Blocker gehen bis zu 30% der Daten verloren. Mit Server-Side Tracking (sGTM & CAPI) übermitteln wir Ihre Conversions zu 100% vom Server an Werbenetzwerke.",
          en: "Cookie restrictions cause up to 30% tracking loss. Server-Side Tracking (sGTM & CAPI) delivers 100% accurate first-party conversion data directly to ad networks."
        }
      ]

      let found = topicScenarios.find(item => item.match.some(m => queryLower.includes(m)))
      if (found) {
        aiAnswerText = found[activeLang] || found.de
      } else {
        if (activeLang === 'tr') {
          aiAnswerText = `"${query}" konusundaki talebiniz için Salih Maral performans pazarlama altyapısıyla projelerinize özel büyüme stratejisi geliştirebiliriz.`
        } else if (activeLang === 'en') {
          aiAnswerText = `Regarding "${query}", Salih Maral provides tailored digital marketing & SEO strategies to boost your conversion rates and ROAS.`
        } else {
          aiAnswerText = `Bezüglich "${query}" bietet Salih Maral maßgeschneiderte Digital-Marketing- und SEO-Strategien zur Maximierung Ihres ROAS.`
        }
      }
    }

    // Funnel redirection for topic responses
    const funnelRedirect = {
      tr: " Detaylı bilgi almak ve web siteniz için özel teklif oluşturmak üzere **İletişim Formunu** doldurabilirsiniz.",
      de: " Für ein maßgeschneidertes Angebot füllen Sie bitte unser **Kontaktformular** aus.",
      en: " To get a customized audit and proposal, please fill out our **Contact Form**."
    }

    aiAnswerText += (funnelRedirect[activeLang] || funnelRedirect.de)

    // Semantic relevant blog post matching
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
