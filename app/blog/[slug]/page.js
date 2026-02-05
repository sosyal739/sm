'use client'

import { useParams, useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

const blogPosts = {
  'google-ads-nedir': {
    title: 'Google Ads Nedir ve Neden Yapılmalıdır?',
    category: 'Google Ads',
    date: '2026-01-15',
    readTime: '5 dk okuma',
    content: `
      <h2>Google Ads ile İşletmenizi Büyütün</h2>
      <p>Google Ads, dünyanın en büyük arama motoru olan Google'da reklam vermenizi sağlayan güçlü bir platformdur. Her gün milyarlarca arama yapılıyor ve Google Ads ile tam olarak doğru zamanda, doğru kişilere ulaşabilirsiniz.</p>

      <h3>Google Ads Nedir?</h3>
      <p>Google Ads (eski adıyla Google AdWords), Google'ın pay-per-click (PPC) reklam sistemidir. İşletmeniz için reklam oluşturur, bütçenizi belirler ve reklamlarınız Google arama sonuçlarında, YouTube'da, Gmail'de ve milyonlarca web sitesinde görünür.</p>

      <h3>Neden Google Ads Yapmalısınız?</h3>
      
      <h4>1. Anında Sonuç</h4>
      <p>SEO'dan farklı olarak, Google Ads ile kampanyanızı başlattığınız anda trafiğe başlayabilirsiniz. Müşteriler sizi hemen bulmaya başlar.</p>

      <h4>2. Ölçülebilir ROI</h4>
      <p>Her tıklamayı, her dönüşümü ve harcadığınız her kuruşu takip edebilirsiniz. Hangi reklamların işe yaradığını net olarak görürsünüz.</p>

      <h4>3. Hedefli Reklam</h4>
      <p>Coğrafi konum, demografik özellikler, ilgi alanları ve arama davranışlarına göre tam olarak doğru kişilere ulaşın.</p>

      <h4>4. Bütçe Kontrolü</h4>
      <p>Günlük bütçenizi siz belirlersiniz. İstediğiniz zaman kampanyayı durdurabilir veya bütçeyi artırabilirsiniz.</p>

      <h3>Google Ads Kampanya Türleri</h3>
      
      <ul>
        <li><strong>Arama Ağı Reklamları:</strong> Müşteriler sizi Google'da ararken çıkın</li>
        <li><strong>Display Reklamları:</strong> 2 milyon+ web sitesinde görsel reklamlar</li>
        <li><strong>Shopping Reklamları:</strong> Ürünlerinizi fotoğraf ve fiyatıyla gösterin</li>
        <li><strong>YouTube Reklamları:</strong> Video içeriklerle milyonlara ulaşın</li>
        <li><strong>Performance Max:</strong> Tüm Google ağlarında otomatik optimizasyon</li>
      </ul>

      <h3>Başarılı Google Ads Kampanyası İçin İpuçları</h3>
      
      <ol>
        <li><strong>Doğru Anahtar Kelimeleri Seçin:</strong> Müşterilerinizin aradığı kelimeleri hedefleyin</li>
        <li><strong>İkna Edici Reklam Metni:</strong> Farkınızı ortaya koyun, CTA kullanın</li>
        <li><strong>Landing Page Optimizasyonu:</strong> Reklamla landing page uyumlu olmalı</li>
        <li><strong>Sürekli Test ve Optimizasyon:</strong> A/B testleri yapın, sürekli iyileştirin</li>
        <li><strong>Dönüşüm Takibi:</strong> Google Analytics ve dönüşüm pikselini kurun</li>
      </ol>

      <h3>Google Ads Maliyeti</h3>
      <p>Google Ads'in maliyeti sektörünüze, rekabete ve anahtar kelimelerinize göre değişir. Ortalama CPC (tıklama başına maliyet) sektöre göre 0.5€'dan 5€'ya kadar değişebilir. Önemli olan ROI'nizdir - 1€ harcayıp kaç € kazandığınız.</p>

      <h3>Sonuç</h3>
      <p>Google Ads, doğru strateji ile işletmenizi hızla büyütebilecek güçlü bir araçtır. Profesyonel yönetim ile reklamlarınızı optimize eder, maliyetlerinizi düşürür ve dönüşümlerinizi artırabilirsiniz.</p>

      <p><strong>Profesyonel Google Ads yönetimi için hemen iletişime geçin!</strong></p>
    `
  },
  'meta-ads-basari': {
    title: 'Meta Ads ile Başarı: Facebook ve Instagram Reklamcılığı',
    category: 'Meta Ads',
    date: '2026-01-18',
    readTime: '6 dk okuma',
    content: `
      <h2>Facebook ve Instagram'da Etkili Reklam Stratejileri</h2>
      <p>Meta Ads (Facebook ve Instagram reklamları), 3 milyardan fazla aktif kullanıcıya ulaşmanızı sağlayan güçlü bir platformdur. Doğru hedefleme ve kreatif stratejilerle markanızı büyütebilirsiniz.</p>

      <h3>Meta Ads'in Gücü</h3>
      <p>Facebook ve Instagram, kullanıcıları hakkında en detaylı verilere sahip platformlardır. İlgi alanları, davranışlar, demografik özellikler ve daha fazlasına göre hedefleme yapabilirsiniz.</p>

      <h3>Neden Meta Ads?</h3>
      
      <h4>1. Detaylı Hedef Kitle</h4>
      <p>Yaş, cinsiyet, konum, ilgi alanları, davranışlar, hayat olayları ve daha fazlasına göre hedefleme yapın.</p>

      <h4>2. Görsel Odaklı Platform</h4>
      <p>Instagram özellikle görsel içerikler için mükemmel. Ürünlerinizi en iyi şekilde sergileyin.</p>

      <h4>3. Lookalike Audiences</h4>
      <p>Mevcut müşterilerinize benzer kişileri bulun ve onlara ulaşın.</p>

      <h4>4. Retargeting Gücü</h4>
      <p>Web sitenizi ziyaret edenleri takip edin ve onlara özel reklamlar gösterin.</p>

      <h3>Meta Ads Reklam Formatları</h3>
      
      <ul>
        <li><strong>Single Image/Video:</strong> Tek görsel veya video ile basit mesaj</li>
        <li><strong>Carousel:</strong> 10'a kadar görsel veya video</li>
        <li><strong>Collection:</strong> Mobil alışveriş deneyimi</li>
        <li><strong>Stories:</strong> Tam ekran, sürükleyici deneyim</li>
        <li><strong>Reels:</strong> Kısa, eğlenceli video içerikler</li>
      </ul>

      <h3>Başarılı Meta Ads Kampanyası İçin</h3>
      
      <ol>
        <li><strong>Dikkat Çeken Görseller:</strong> İlk 3 saniye kritik!</li>
        <li><strong>Net CTA:</strong> Kullanıcı ne yapmalı? Açıkça söyleyin</li>
        <li><strong>A/B Testing:</strong> Farklı görseller, metinler test edin</li>
        <li><strong>Facebook Pixel:</strong> Mutlaka kurun ve optimize edin</li>
        <li><strong>Doğru Bütçe:</strong> Test için yeterli bütçe ayırın</li>
      </ol>

      <h3>Meta Ads vs Google Ads</h3>
      <p>Google Ads'de kullanıcılar aktif arama yapar. Meta'da ise kullanıcılar içerik tüketir. Bu yüzden Meta'da daha fazla farkındalık ve ilgi yaratmanız gerekir.</p>

      <h3>Sonuç</h3>
      <p>Meta Ads, özellikle B2C işletmeler ve e-ticaret için çok etkilidir. Doğru kreatif ve hedefleme ile düşük maliyetlerle yüksek dönüşüm elde edebilirsiniz.</p>
    `
  },
  'tiktok-ads-rehber': {
    title: 'TikTok Ads: Genç Kitleye Ulaşmanın Yeni Yolu',
    category: 'TikTok Ads',
    date: '2026-01-20',
    readTime: '4 dk okuma',
    content: `
      <h2>TikTok ile Viral Olun</h2>
      <p>TikTok, dünyanın en hızlı büyüyen sosyal medya platformu. 1 milyardan fazla aktif kullanıcısı ve özellikle Gen Z ve Millenial kitlesi ile markanızı büyütmek için mükemmel bir fırsat.</p>

      <h3>TikTok Ads'in Farkı</h3>
      <p>TikTok, eğlenceli, otantik ve yaratıcı içeriklerin ön planda olduğu bir platform. Burada başarılı olmak için reklamlarınızın da platformun diline uygun olması gerekir.</p>

      <h3>TikTok Reklam Formatları</h3>
      
      <h4>1. In-Feed Ads</h4>
      <p>Kullanıcıların For You sayfasında doğal olarak görünen 9-15 saniyelik video reklamlar.</p>

      <h4>2. TopView</h4>
      <p>Uygulama açıldığında ilk görülen, 60 saniyeye kadar video. Maksimum etki!</p>

      <h4>3. Brand Takeover</h4>
      <p>Günde bir marka için özel. Anında dikkat çeker.</p>

      <h4>4. Branded Hashtag Challenge</h4>
      <p>Kullanıcıların katılabileceği challenge. Viral potansiyeli çok yüksek!</p>

      <h3>TikTok Ads Başarı İpuçları</h3>
      
      <ol>
        <li><strong>Otantik Olun:</strong> Aşırı kurumsal reklamlar işe yaramaz</li>
        <li><strong>Müzik Kullanın:</strong> Trend müzikler kullanın</li>
        <li><strong>İlk 3 Saniye:</strong> Hook atmayı unutmayın</li>
        <li><strong>UGC Tarzı:</strong> Kullanıcı içeriğine benzeyin</li>
        <li><strong>Call-to-Action:</strong> Net ve hızlı olun</li>
      </ol>

      <h3>Kimler TikTok Ads Kullanmalı?</h3>
      <ul>
        <li>E-ticaret markaları</li>
        <li>Fashion ve beauty</li>
        <li>Yeme-içme</li>
        <li>Eğlence ve oyun</li>
        <li>18-35 yaş arası hedef kitle</li>
      </ul>

      <h3>Sonuç</h3>
      <p>TikTok Ads, genç kitleye ulaşmak ve viral olmak isteyenler için muazzam bir fırsat. Ancak platformun dilini konuşmak çok önemli!</p>
    `
  },
  'seo-stratejileri-2026': {
    title: 'SEO Stratejileri 2026: Google\'ın Yeni Algoritması',
    category: 'SEO',
    date: '2026-01-22',
    readTime: '8 dk okuma',
    content: `
      <h2>2026'da SEO Nasıl Yapılır?</h2>
      <p>Google'ın algoritması sürekli gelişiyor ve 2026'da SEO artık sadece anahtar kelime optimizasyonundan ibaret değil. Kullanıcı deneyimi, E-E-A-T ve AI entegrasyonu çok daha önemli.</p>

      <h3>2026'da SEO'nun Temelleri</h3>
      
      <h4>1. E-E-A-T: Experience, Expertise, Authority, Trust</h4>
      <p>Google artık içerik üreten kişinin deneyimini, uzmanlığını, otoritesini ve güvenilirliğini ön planda tutuyor.</p>

      <h4>2. Core Web Vitals</h4>
      <p>Sayfa hızı, etkileşim ve görsel stabilite artık ranking faktörü. Teknik SEO çok önemli!</p>

      <h4>3. AI ile İçerik Optimizasyonu</h4>
      <p>Google'ın AI'ı artık çok daha iyi anlıyor. Anahtar kelime doldurmak yerine doğal ve kapsamlı içerik yazın.</p>

      <h3>İç SEO (On-Page SEO)</h3>
      
      <ol>
        <li><strong>Anahtar Kelime Araştırması:</strong> Doğru kelimeleri bulmak her şeyin başı</li>
        <li><strong>Title ve Meta Description:</strong> Optimize edin, tıklama oranını artırın</li>
        <li><strong>H1, H2, H3 Yapısı:</strong> İçeriğinizi düzenli yapılandırın</li>
        <li><strong>Internal Linking:</strong> Sayfalarınızı birbirine bağlayın</li>
        <li><strong>Görsel Optimizasyonu:</strong> Alt text, dosya adı, sıkıştırma</li>
      </ol>

      <h3>Dış SEO (Off-Page SEO)</h3>
      
      <ul>
        <li><strong>Backlink Stratejisi:</strong> Kaliteli, ilgili sitelerden link</li>
        <li><strong>Guest Posting:</strong> Otoriteli bloglarda yazın</li>
        <li><strong>Brand Mentions:</strong> Markanızdan bahsedilmesini sağlayın</li>
        <li><strong>Social Signals:</strong> Sosyal medyada paylaşım</li>
      </ul>

      <h3>Teknik SEO</h3>
      
      <ol>
        <li><strong>Site Hızı:</strong> 2 saniyenin altında olmalı</li>
        <li><strong>Mobile-First:</strong> Mobil optimize şart</li>
        <li><strong>SSL:</strong> HTTPS olmazsa olmaz</li>
        <li><strong>XML Sitemap:</strong> Google'a yol gösterin</li>
        <li><strong>Structured Data:</strong> Schema markup kullanın</li>
      </ol>

      <h3>Yerel SEO</h3>
      <p>Fiziksel mağazanız varsa Google My Business optimize edin, yerel yorumlar alın, NAP tutarlılığını sağlayın.</p>

      <h3>2026'da SEO Hataları</h3>
      
      <ul>
        <li>❌ Anahtar kelime doldurmak</li>
        <li>❌ Düşük kaliteli backlink almak</li>
        <li>❌ İçeriği AI ile yazıp olduğu gibi yayınlamak</li>
        <li>❌ Mobil optimize etmemek</li>
        <li>❌ Core Web Vitals'ı ihmal etmek</li>
      </ul>

      <h3>Sonuç</h3>
      <p>2026'da SEO daha kapsamlı ve teknik. Ancak doğru strateji ile Google'da üst sıralarda yer alabilir ve organik trafiğinizi katlayabilirsiniz.</p>
    `
  },
  'x-twitter-ads': {
    title: 'X (Twitter) Reklamları: Gerçek Zamanlı Pazarlama',
    category: 'X Ads',
    date: '2026-01-25',
    readTime: '5 dk okuma',
    content: `
      <h2>X'te (Twitter) Markanızı Konuşturun</h2>
      <p>X (eski Twitter), haberlerin ve trendlerin merkezi. Gerçek zamanlı konuşmaların yaşandığı bu platformda markanızı doğru zamanda doğru kişilere göstermek çok değerli.</p>

      <h3>X Ads'in Avantajları</h3>
      
      <h4>1. Gerçek Zamanlı Engagement</h4>
      <p>Bir olay olduğunda, bir trend başladığında hemen müdahale edebilirsiniz.</p>

      <h4>2. Influencer ve Thought Leader'lara Ulaşım</h4>
      <p>Sektörünüzdeki önemli isimlere ve karar vericilere ulaşmak kolay.</p>

      <h4>3. Conversation Targeting</h4>
      <p>Belirli konuları konuşan kullanıcılara reklam gösterin.</p>

      <h3>X Reklam Türleri</h3>
      
      <h4>Promoted Tweets</h4>
      <p>Normal tweet'lerinizi daha geniş kitlelere ulaştırın.</p>

      <h4>Promoted Accounts</h4>
      <p>Takipçi sayınızı hızla artırın.</p>

      <h4>Promoted Trends</h4>
      <p>24 saat boyunca Trending Topics'te olun.</p>

      <h3>X Ads Stratejileri</h3>
      
      <ol>
        <li><strong>Kısa ve Öz:</strong> 280 karakter limitini iyi kullanın</li>
        <li><strong>Görsel/Video:</strong> Mutlaka ekleyin</li>
        <li><strong>Hashtag:</strong> İlgili ve trend hashtag'ler</li>
        <li><strong>Timing:</strong> Doğru zamanda paylaşın</li>
        <li><strong>Engagement:</strong> Yorumlara cevap verin</li>
      </ol>

      <h3>Kimler X Ads Kullanmalı?</h3>
      <ul>
        <li>B2B şirketler</li>
        <li>Medya ve haber kuruluşları</li>
        <li>Tech şirketleri</li>
        <li>Thought leader'lar</li>
        <li>Event ve konferanslar</li>
      </ul>

      <h3>Sonuç</h3>
      <p>X Ads, gerçek zamanlı pazarlama ve conversation marketing için mükemmel. Özellikle B2B ve tech sektöründe çok etkili!</p>
    `
  },
  'olumsuz-yorum-yonetimi': {
    title: 'Olumsuz Yorum Yönetimi: İtibarınızı Koruyun',
    category: 'İtibar Yönetimi',
    date: '2026-01-28',
    readTime: '6 dk okuma',
    content: `
      <h2>Haksız Yorumlar İşletmenize Zarar Veriyor mu?</h2>
      <p>Google Maps ve Trustpilot'taki olumsuz yorumlar potansiyel müşterilerinizi kaçırabilir. Ancak haksız, sahte ve iftira içeren yorumları sildirebilirsiniz!</p>

      <h3>Olumsuz Yorumların Etkisi</h3>
      <p>Araştırmalar gösteriyor ki:</p>
      <ul>
        <li>%90 tüketici satın alma öncesi yorumları okuyor</li>
        <li>Bir olumsuz yorum, 10 potansiyel müşteriyi kaybettirebilir</li>
        <li>Yıldız sayısı düştükçe rezervasyon/satış oranı düşüyor</li>
      </ul>

      <h3>Hangi Yorumlar Silinebilir?</h3>
      
      <h4>1. Spam ve Sahte Yorumlar</h4>
      <p>Gerçek deneyime dayanmayan, rakip kaynaklı yorumlar.</p>

      <h4>2. Hakaret ve İftira</h4>
      <p>Küfür, hakaret veya iftira içeren yorumlar Google politikalarına aykırı.</p>

      <h4>3. Kişisel Bilgi İçeren</h4>
      <p>Çalışan isimleri, telefon numaraları gibi özel bilgiler paylaşan yorumlar.</p>

      <h4>4. Rekabet Kaynaklı</h4>
      <p>Rakiplerin veya çalışanların kötü niyetli yorumları.</p>

      <h3>Yorum Silme Süreci</h3>
      
      <ol>
        <li><strong>Analiz:</strong> Yorumu inceliyor, silinebilirliğini değerlendiriyoruz</li>
        <li><strong>Belgelendirme:</strong> Gerekli kanıtları ve belgeleri hazırlıyoruz</li>
        <li><strong>Başvuru:</strong> Google/Trustpilot'a resmi başvuru yapıyoruz</li>
        <li><strong>Takip:</strong> Süreci takip ediyor, gerekirse itiraz ediyoruz</li>
      </ol>

      <h3>Süre ve Başarı Oranı</h3>
      <p>Ortalama 3-7 gün içinde sonuç alıyoruz. Başarı oranımız %95+. Başarısız olursak ücret iadesi yapıyoruz.</p>

      <h3>Pozitif İtibar Oluşturma</h3>
      <p>Olumsuz yorumları silmek yeterli değil. Aynı zamanda:</p>
      <ul>
        <li>Müşterilerden pozitif yorum isteyin</li>
        <li>Olumsuz yorumlara profesyonelce cevap verin</li>
        <li>Google My Business profilinizi güncel tutun</li>
        <li>Sürekli kalite hizmeti sunun</li>
      </ul>

      <h3>Sonuç</h3>
      <p>Online itibarınız işletmenizin en değerli varlıklarından biri. Haksız yorumlarla mücadele edin ve pozitif itibar oluşturun!</p>

      <p><strong>Haksız yorumlarınız için ücretsiz analiz almak ister misiniz? Hemen iletişime geçin!</strong></p>
    `
  }
}

export default function BlogDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { slug } = params

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Yazısı Bulunamadı</h1>
          <Button onClick={() => router.push('/blog')}>Blog'a Dön</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => router.push('/blog')} className="flex items-center space-x-2 hover:opacity-80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Blog'a Dön</span>
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
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center space-x-6 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card>
            <CardContent className="pt-8 prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-[#4285F4] to-[#34A853] rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Profesyonel Dijital Pazarlama Hizmeti</h3>
            <p className="mb-6">İşletmenizi büyütmek için hemen iletişime geçin!</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-[#4285F4]" asChild>
                <a href="tel:+491724106463">Hemen Arayın</a>
              </Button>
              <Button size="lg" className="bg-[#34A853]" asChild>
                <a href="https://wa.me/491724106463" target="_blank">WhatsApp</a>
              </Button>
            </div>
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
