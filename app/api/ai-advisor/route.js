import { getAllPosts } from '@/lib/blog.server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { message = '', language = 'de' } = body
    const query = message.trim().toLowerCase()

    const posts = getAllPosts(language)

    // Knowledge base responses for typical digital marketing scenarios
    const responses = {
      de: {
        ads: "Für Google Ads empfehle ich eine klare Ausrichtung auf kaufbereite Suchbegriffe und die Nutzung von Responsive Search Ads. Kombinieren Sie dies mit automatischen Keyword-Ausschlüssen, um Ihr Budget um bis zu 30% effizienter einzusetzen.",
        seo: "Im Bereich SEO (und GEO) liegt der Schlüssel 2026 darin, präzise Antworten in den ersten 150 Wörtern zu liefern und strukturierte Datentabellen einzusetzen. Das steigert Ihre Sichtbarkeit in Google AI Overviews und Perplexity erheblich.",
        cro: "Zur Steigerung Ihrer Conversion-Rate (CRO) sollten Sie dynamische Headlines nutzen, die exakt mit der Suchanfrage übereinstimmen. Dadurch senken Sie Ihre Kundenakquisitionskosten (CPA) spürbar.",
        default: "Als Salih Maral unterstütze ich Sie gerne bei Google Ads, Meta Ads und SEO. Teilen Sie mir gerne Ihre Website oder Ihr Werbeziel mit, um eine maßgeschneiderte Empfehlung zu erhalten!"
      },
      en: {
        ads: "For Google Ads optimization, I recommend targeting high-intent commercial keywords and leveraging Responsive Search Ads combined with dynamic negative keyword filtering to boost ROAS.",
        seo: "In 2026 SEO & GEO, placing direct answers within the first 150 words alongside structured comparative data tables is key to securing top placements in Google AI Overviews.",
        cro: "To scale your conversion rates (CRO), implement dynamic headline matching aligned with ad intent. This dramatically reduces your cost per acquisition (CPA).",
        default: "As Salih Maral, I help businesses scale through Google Ads, Meta Ads, and SEO. Feel free to share your website URL or target advertising goal for a customized growth strategy!"
      },
      tr: {
        ads: "Google Ads tarafında dönüşüm oranı yüksek arama niyetli anahtar kelimelere odaklanmanızı ve Duyarlı Arama Reklamlarını (RSA) otomatik negatif filtreleme ile desteklemenizi öneririm. Bu sayede bütçe verimliliğiniz %30+ artacaktır.",
        seo: "2026 SEO ve GEO dünyasında en kritik konu, makalenin ilk 150 kelimesinde net yanıt sunmak ve karşılaştırma tabloları kullanmaktır. Bu yöntem Google AI Overviews ve Perplexity sonuçlarında ilk sırada yer almanızı sağlar.",
        cro: "Dönüşüm oranınızı (CRO) artırmak için reklamdaki arama terimi ile web sitenizdeki H1 başlığını dinamik olarak eşleştirin. Bu yöntem Müşteri Edinme Maliyetinizi (CPA) ciddi oranda düşürür.",
        default: "Salih Maral olarak Google Ads, Meta Ads ve SEO projelerinizde size rehberlik etmekten memnuniyet duyarım. Web sitenizi veya reklam hedefinizi iletirseniz size özel bir strateji çıkarabilirim!"
      }
    }

    const langResponses = responses[language] || responses.de

    let answerText = langResponses.default
    let category = 'Allgemein'

    if (query.includes('ads') || query.includes('reklam') || query.includes('google') || query.includes('bütçe') || query.includes('budget')) {
      answerText = langResponses.ads
      category = 'Google Ads'
    } else if (query.includes('seo') || query.includes('geo') || query.includes('sıralama') || query.includes('ranking') || query.includes('google ai')) {
      answerText = langResponses.seo
      category = 'SEO'
    } else if (query.includes('cro') || query.includes('dönüşüm') || query.includes('conversion') || query.includes('satış') || query.includes('sales')) {
      answerText = langResponses.cro
      category = 'Conversion'
    }

    // Match top 2 relevant blog recommendations
    const searchTerms = query.split(/\s+/).filter(Boolean)
    const matchingPosts = posts.map(post => {
      let score = 0
      const text = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase()
      searchTerms.forEach(term => {
        if (text.includes(term)) score += 5
      })
      return { ...post, score }
    }).filter(p => p.score > 0).sort((a, b) => b.score - a.score).slice(0, 2)

    return Response.json({
      answer: answerText,
      category,
      recommendedPosts: matchingPosts.length > 0 ? matchingPosts : posts.slice(0, 2)
    })
  } catch (error) {
    return Response.json({ error: 'Failed to process advice' }, { status: 500 })
  }
}
