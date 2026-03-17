# Salih Maral - Dijital Pazarlama Uzmanı Portfolio Web Sitesi

## Proje Tanımı
Salih Maral için modern, üç dilli (Türkçe, Almanca, İngilizce) kişisel portfolyo web sitesi. Dijital pazarlama hizmetlerini tanıtan, blog yönetimi ve iletişim formu içeren profesyonel bir web sitesi.

## Teknoloji Stack
- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Email**: Resend
- **Deployment**: Vercel
- **SEO**: JSON-LD Schema, Meta Tags, Sitemap, robots.txt
- **Legal**: GDPR Cookie Consent Management
- **Analytics**: Google Analytics (G-QT1CZE5BJK)

## Tamamlanan Özellikler
- [x] Tam çoklu dil desteği (TR/DE/EN) - tüm sayfalarda
- [x] Ana sayfa: Hero, Stats, Hizmetler, Başarılar, Kurumsal, Müşteri Yorumları, Hakkımda, İletişim
- [x] Hizmet detay sayfaları (6 hizmet): Google Ads, Meta Ads, TikTok Ads, X Ads, SEO, Yorum Yönetimi
- [x] Blog sayfası ve blog detay sayfaları
- [x] İletişim formu (Resend e-posta entegrasyonu → fuslu454@gmail.com)
- [x] Custom logo ve favicon
- [x] SEO: JSON-LD, manifest.json, sitemap.xml, robots.txt, Google Search Console doğrulaması
- [x] GDPR uyumlu Cookie Consent banner (Google Analytics'i gates eder)
- [x] Ana sayfa hizmet kartları: Renkli gradient, border, animasyonlar
- [x] Ana sayfa "Sıradan Bir Hizmet Değil" ve "Verilerle Büyüyün" bölümleri: Renkli kenarlıklar
- [x] Hizmet detay sayfaları kutucukları: Renkli kenarlıklar, gradient çubuklar, hover animasyonları (2026-03-10)
- [x] Blog kartları: Yapay emoji yerine gerçek stok fotoğraflar ve platform logoları (2026-03-11)
- [x] Çoklu dil SEO: Ayrı URL yapısı (/, /tr, /en) + hreflang + canonical + content-language + sitemap güncelleme (2026-03-17)
- [x] Google Sitelinks: Dile göre dinamik JSON-LD (SiteNavigationElement, ItemList, ProfessionalService) - her dilde 6 hizmet + blog + iletişim (2026-03-17)
- [x] WhatsApp linkleri dil bazlı dinamik mesajlarla
- [x] Kişisel bilgiler (telefon/email) genel sayfalardan kaldırıldı (Impressum/Datenschutz hariç)
- [x] Vercel deployment konfigürasyonu (vercel.json, next.config.js)

## Bekleyen/Gelecek Görevler

### P0 - Yüksek Öncelik
- [ ] Admin Paneli oluşturma (/admin)
  - Güvenli giriş (/admin/login) - kullanıcı adı/şifre gerekli
  - Blog CRUD (Listeleme/Oluşturma/Güncelleme/Silme)
  - Zengin metin editörü
  - TR/DE/EN çoklu dil desteği
  - Kategori yönetimi
  - Arayüz tamamen Türkçe

### P2 - Refactoring
- [ ] i18n altyapısını next-intl gibi bir kütüphaneye taşıma

## Önemli Dosyalar
- `/app/app/[lang]/hizmetler/[service]/page.js` - Hizmet detay sayfası
- `/app/app/page.js` - Ana sayfa
- `/app/app/layout.js` - SEO, Analytics, Favicon
- `/app/components/CookieConsent.js` - GDPR banner
- `/app/app/api/[[...path]]/route.js` - İletişim API

## DB Şeması
- **contacts**: `{ name, email, phone, message, createdAt }`

## API Endpoint'leri
- `POST /api/contact` - İletişim formu
