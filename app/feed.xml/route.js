import { getAllPosts } from '@/lib/blog.server'

// RSS 2.0 feed of the German blog (/blog/<slug>). Built statically at deploy time.
export const dynamic = 'force-static'

const BASE_URL = 'https://salihmaral.de'

const escapeXml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export async function GET() {
  const now = new Date()
  const posts = getAllPosts('de')
    .filter((post) => post.date && !Number.isNaN(new Date(post.date).getTime()) && new Date(post.date) <= now)
    .slice(0, 50)

  const lastBuildDate = posts.length ? new Date(posts[0].date).toUTCString() : now.toUTCString()

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      ${post.category ? `<category>${escapeXml(post.category)}</category>` : ''}
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <dc:creator>Salih Maral</dc:creator>
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Salih Maral Blog – Google Ads, Meta Ads, SEO &amp; GEO</title>
    <link>${BASE_URL}/blog</link>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Praxisnahe Fachartikel zu Performance-Marketing, SEO, GEO und Server-Side Tracking von Salih Maral.</description>
    <language>de-DE</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
