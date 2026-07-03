import { getAllPosts } from '@/lib/blog.server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'de'
  
  if (!['de', 'tr', 'en'].includes(lang)) {
    return Response.json({ error: 'Invalid lang' }, { status: 400 })
  }

  const posts = getAllPosts(lang)
  return Response.json(posts)
}
