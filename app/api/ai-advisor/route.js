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

    // 1. Primary: Real-Time Free Open-Access LLM Inference API (Pollinations / Llama 3)
    try {
      const systemPrompt = `You are Salih Maral's official AI Marketing Advisor for salihmaral.de (Google Ads, Meta Ads, SEO & GEO expert).
Answer the user's question directly, expertly, and concisely in 2-3 sentences.
Language to answer in: '${activeLang}'.
User Question: "${query}"`

      const llmRes = await fetch('https://text.pollinations.ai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are Salih Maral AI Advisor. Give short, expert digital marketing advice in requested language.' },
            { role: 'user', content: systemPrompt }
          ],
          model: 'openai',
          seed: Math.floor(Math.random() * 1000)
        }),
        signal: AbortSignal.timeout(5000) // 5s timeout
      })

      if (llmRes.ok) {
        const text = await llmRes.text()
        if (text && text.trim().length > 10 && !text.includes('Error')) {
          aiAnswerText = text.trim()
        }
      }
    } catch (e) {
      // Ignore & fallback to Option B
    }

    // 2. Secondary: Real-Time Free Gemini API if GEMINI_API_KEY is defined
    if (!aiAnswerText && process.env.GEMINI_API_KEY) {
      try {
        const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: `Answer concisely as Salih Maral AI Marketing Advisor in '${activeLang}': ${query}` }] }]
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

    // 3. Fallback: High-Performance Dynamic Marketing Engine
    if (!aiAnswerText) {
      if (activeLang === 'tr') {
        aiAnswerText = `"${query}" konusundaki talebiniz için Salih Maral performans pazarlama ve SEO altyapısı ile projelerinize özel büyüme stratejisi geliştirebiliriz.`
      } else if (activeLang === 'en') {
        aiAnswerText = `Regarding "${query}", Salih Maral provides tailored digital marketing & SEO strategies to boost your conversion rates and ROAS.`
      } else {
        aiAnswerText = `Bezüglich "${query}" bietet Salih Maral maßgeschneiderte Digital-Marketing- und SEO-Strategien zur Maximierung Ihres ROAS.`
      }
    }

    // Always append the steering funnel message
    aiAnswerText += (funnelRedirect[activeLang] || funnelRedirect.de)

    // Semantic relevant blog matching
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
