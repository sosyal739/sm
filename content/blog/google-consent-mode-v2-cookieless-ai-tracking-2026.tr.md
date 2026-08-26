---
slug: "google-consent-mode-v2-cookieless-ai-tracking-2026"
lang: "tr"
title: "Google Consent Mode v2 Nedir? Reklam Verilerinizin %40'ını Kurtarma Rehberi"
excerpt: "Avrupa Birliği GDPR ve KVKK uyumlu Consent Mode v2 kurulumu. Çerez reddeden ziyaretçilerden yapay zeka ile kayıp satış verilerini geri kazanın."
category: "Server-Side Tracking & Veri"
date: "2026-08-22"
readTime: "14"
coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=300&fit=crop&q=80"
---

<div class="lead">
<p><strong>Doğrudan Cevap:</strong> Google Consent Mode v2; Avrupa Birliği Dijital Pazarlar Yasası (DMA) ve KVKK gereğince, web sitelerindeki çerez onay durumunu Google Ads ve GA4'e ileten zorunlu ölçüm mimarisidir. Consent Mode v2 kurulu olmayan sitelerde <strong>Google Ads yeniden pazarlama (Remarketing) ve Smart Bidding yapay zekası durdurulur.</strong> Doğru yapılandırılmış Gelişmiş Consent Mode v2 (Advanced Mode), çerezleri reddeden kullanıcıların dönüştürme eylemlerini kişisel veri saklamadan şifreli sinyallerle modeller ve kaybolan <strong>%35-40'lık satış verisini geri kazandırır.</strong></p>
</div>

<h2>📊 Temel (Basic) vs. Gelişmiş (Advanced) Consent Mode v2</h2>
<table>
  <thead>
    <tr>
      <th>Özellik</th>
      <th>Basic Consent Mode v2</th>
      <th>Advanced Consent Mode v2 (Önerilen)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Çerez Reddedildiğinde</strong></td>
      <td>Tüm etiketler tamamen bloke edilir, 0 veri iletilir.</td>
      <td>Çerezsiz şifreli sinyaller (Pings) gönderilir.</td>
    </tr>
    <tr>
      <td><strong>Yapay Zeka Dönüşüm Modellemesi</strong></td>
      <td>Çalışmaz (Kayıp veri %40).</td>
      <td><strong>%100 Aktif (Kayıp dönüşümler kurtarılır).</strong></td>
    </tr>
    <tr>
      <td><strong>Smart Bidding / tROAS Performansı</strong></td>
      <td>Zayıf algoritma beslemesi, yüksek CPA.</td>
      <td><strong>Maksimum teklif hassasiyeti, düşük CPA.</strong></td>
    </tr>
    <tr>
      <td><strong>GDPR / DMA Yasal Uyumu</strong></td>
      <td>Uyumlu</td>
      <td><strong>Tam Uyumlu & Google Sertifikalı CMP</strong></td>
    </tr>
  </tbody>
</table>

<h2>🛠️ 4 Zorunlu İzin Parametresi</h2>
<ul>
  <li><code>ad_storage</code>: Reklam amaçlı çerezlerin kaydedilmesi.</li>
  <li><code>analytics_storage</code>: Analitik ve kullanım istatistiği çerezleri.</li>
  <li><code>ad_user_data</code> (v2 Yeni): Kullanıcı verilerinin reklam amacıyla Google'a aktarılması onayı.</li>
  <li><code>ad_personalization</code> (v2 Yeni): Yeniden pazarlama ve kişiselleştirilmiş reklam hedefleme izni.</li>
</ul>

<p>Kusursuz Consent Mode v2 ve sGTM entegrasyonu için <a href="/tr/hizmetler/server-side-tracking">Server-Side Tracking Kurulumu</a> sayfamızı inceleyin.</p>
