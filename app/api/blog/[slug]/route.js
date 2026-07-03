import { getPostBySlug } from '@/lib/blog.server'

export async function GET(request, { params }) {
  const { slug } = await params
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang') || 'de'

  if (!['de', 'tr', 'en'].includes(lang)) {
    return Response.json({ error: 'Invalid lang' }, { status: 400 })
  }

  const post = getPostBySlug(slug, lang)
  
  if (!post) {
    return Response.json(null, { status: 404 })
  }

  return Response.json(post)
}
