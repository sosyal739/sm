import { getAllPosts } from '@/lib/blog.server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const q = (searchParams.get('q') || '').trim().toLowerCase()
  const lang = searchParams.get('lang') || 'de'

  if (!q) {
    return Response.json({ results: [], query: q })
  }

  // 1. Fetch posts for selected language
  const posts = getAllPosts(lang)

  // 2. Perform relevance scoring
  const searchTerms = q.split(/\s+/).filter(Boolean)

  const scoredResults = posts.map(post => {
    let score = 0
    const titleLower = post.title.toLowerCase()
    const excerptLower = post.excerpt.toLowerCase()
    const categoryLower = (post.category || '').toLowerCase()

    searchTerms.forEach(term => {
      if (titleLower.includes(term)) score += 10
      if (excerptLower.includes(term)) score += 5
      if (categoryLower.includes(term)) score += 3
    })

    return { ...post, score }
  }).filter(item => item.score > 0)

  scoredResults.sort((a, b) => b.score - a.score)

  return Response.json({
    results: scoredResults,
    total: scoredResults.length,
    query: q,
    lang
  })
}
