'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    slug: 'google-ads-nedir',
    title: 'Google Ads Nedir ve Neden Yapılmalıdır?',
    excerpt: 'Google Ads, işletmenizin dijital dünyada görünür olmasının en hızlı yoludur. Doğru stratejilerle yatırımınızın karşılığını almanın yollarını keşfedin.',
    category: 'Google Ads',
    date: '2026-01-15',
    readTime: '5 dk okuma',
    image: '/blog/google-ads.jpg'
  },
  {
    id: 2,
    slug: 'meta-ads-basari',
    title: 'Meta Ads ile Başarı: Facebook ve Instagram Reklamcılığı',
    excerpt: 'Facebook ve Instagram\'da etkili reklam kampanyaları nasıl oluşturulur? Hedef kitle segmentasyonundan kreatif stratejilere kadar her şey.',
    category: 'Meta Ads',
    date: '2026-01-18',
    readTime: '6 dk okuma',
    image: '/blog/meta-ads.jpg'
  },
  {
    id: 3,
    slug: 'tiktok-ads-rehber',
    title: 'TikTok Ads: Genç Kitleye Ulaşmanın Yeni Yolu',
    excerpt: 'TikTok\'ta viral olmanın ve genç kitleye etkili şekilde ulaşmanın stratejilerini öğrenin. Reklam formatları ve best practice\'ler.',
    category: 'TikTok Ads',
    date: '2026-01-20',
    readTime: '4 dk okuma',
    image: '/blog/tiktok-ads.jpg'
  },
  {
    id: 4,
    slug: 'seo-stratejileri-2026',
    title: 'SEO Stratejileri 2026: Google\'ın Yeni Algoritması',
    excerpt: 'Google\'ın sürekli değişen algoritmasında üst sıralarda kalmak için yapmanız gerekenler. İç SEO, dış SEO ve teknik SEO ipuçları.',
    category: 'SEO',
    date: '2026-01-22',
    readTime: '8 dk okuma',
    image: '/blog/seo-2026.jpg'
  },
  {
    id: 5,
    slug: 'x-twitter-ads',
    title: 'X (Twitter) Reklamları: Gerçek Zamanlı Pazarlama',
    excerpt: 'Trend konularda nasıl öne çıkılır? X reklamları ile gerçek zamanlı pazarlama stratejileri ve başarı hikayeleri.',
    category: 'X Ads',
    date: '2026-01-25',
    readTime: '5 dk okuma',
    image: '/blog/x-ads.jpg'
  },
  {
    id: 6,
    slug: 'olumsuz-yorum-yonetimi',
    title: 'Olumsuz Yorum Yönetimi: İtibarınızı Koruyun',
    excerpt: 'Google Maps ve Trustpilot\'taki haksız yorumlar işletmenize zarar veriyor mu? Yorum yönetimi ve silme süreçleri hakkında bilmeniz gerekenler.',
    category: 'İtibar Yönetimi',
    date: '2026-01-28',
    readTime: '6 dk okuma',
    image: '/blog/reviews.jpg'
  }
]

export default function BlogPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/')} className="flex items-center space-x-2 hover:opacity-80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Ana Sayfa</span>
            </button>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04] bg-clip-text text-transparent">
              Salih Maral
            </a>
            <div className="w-24"></div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-[#4285F4]/10 to-[#34A853]/10">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Dijital Pazarlama Blog</h1>
          <p className="text-xl text-muted-foreground">Google Ads, Meta Ads, SEO ve daha fazlası hakkında güncel içerikler</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a key={post.id} href={`/blog/${post.slug}`} className="block">
                <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group cursor-pointer h-full">
                <div className="h-48 bg-gradient-to-br from-[#4285F4]/20 to-[#34A853]/20 flex items-center justify-center">
                  <div className="text-6xl">{
                    post.category === 'Google Ads' ? '🎯' :
                    post.category === 'Meta Ads' ? '📱' :
                    post.category === 'TikTok Ads' ? '🎵' :
                    post.category === 'SEO' ? '🔍' :
                    post.category === 'X Ads' ? '🐦' :
                    '⭐'
                  }</div>
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3">{post.category}</Badge>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#4285F4] transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button className="w-full mt-4 bg-[#4285F4]" asChild>
                    <span>Devamını Oku</span>
                  </Button>
                </CardContent>
              </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">© 2026 Salih Maral. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}
