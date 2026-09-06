import { getAllPosts } from '@/lib/blog.server'
import BlogPageClient from './BlogPageClient'

export const metadata = {
  title: {
    absolute: 'Digital Marketing & KI Blog | Salih Maral',
  },
  description: 'Aktuelle Experten-Leitfäden über Google Ads, Meta Ads, SEO, Generative Engine Optimization (GEO) und Server-Side Tracking.',
  alternates: {
    canonical: 'https://salihmaral.de/blog',
  },
  openGraph: {
    title: 'Digital Marketing & KI Blog | Salih Maral',
    description: 'Aktuelle Experten-Leitfäden über Google Ads, Meta Ads, SEO, Generative Engine Optimization (GEO) und Server-Side Tracking.',
    url: 'https://salihmaral.de/blog',
    type: 'website',
  },
}

export default async function BlogPage() {
  const initialPosts = getAllPosts('de') || []
  return <BlogPageClient initialPosts={initialPosts} />
}
