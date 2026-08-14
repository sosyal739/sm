import { getPostBySlug } from '@/lib/blog.server'

export async function generateMetadata({ params }) {
  const { slug } = await params
  
  // Try de, then tr, then en
  let post = getPostBySlug(slug, 'de') || getPostBySlug(slug, 'tr') || getPostBySlug(slug, 'en')
  
  if (!post) {
    return {
      title: 'Blog | Salih Maral',
      description: 'Aktuelle Leitfäden über Google Ads, Meta Ads, SEO und GEO.',
    }
  }

  const title = `${post.title} | Salih Maral`
  const description = post.excerpt || `${post.title} - Salih Maral Digital Marketing Blog`
  const canonicalUrl = `https://salihmaral.de/blog/${slug}`

  return {
    title: post.title,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.date,
      authors: ['Salih Maral'],
      images: [
        {
          url: post.coverImage || 'https://salihmaral.de/logo-og.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: [post.coverImage || 'https://salihmaral.de/logo.png'],
      creator: '@salihmaral',
    },
  }
}

export default function BlogSlugLayout({ children }) {
  return <>{children}</>
}
