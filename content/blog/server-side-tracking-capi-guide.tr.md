---
slug: "server-side-tracking-capi-guide"
lang: "tr"
title: "Meta Pixel Neden Satışları Eksik Sayıyor? Server-Side CAPI ile Veri Kaybını Sıfırlayın"
excerpt: "Çerezsiz 2026 dünyasında veri kaybını durdurun. Salih Maral, GTM Server-Side ve Meta CAPI ile ölçümleme kalitesini artırma yollarını paylaşıyor."
category: "Tracking"
date: "2026-07-16"
readTime: "10"
coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop&q=80"
---

          <div class="lead">
            <p>Performans pazarlama uzmanı <strong>Salih Maral</strong>, dijital reklamcılıkta veri kayıplarını önlemek ve dönüşüm ölçümlemesini kusursuzlaştırmak için sunucu tarafı izleme (Server-Side Tracking) ve Conversions API (CAPI) sistemlerinin kullanımını detaylandırıyor. Üçüncü taraf çerezlerin (3rd-party cookies) tarihe karışması, Safari ITP güncellemeleri ve reklam engelleyiciler (ad blockers) nedeniyle tarayıcı tabanlı (Client-Side) ölçümleme sistemleri artık dönüşümlerin %30 ila %50'sini kaçırmaktadır. Bu veri kaybını durdurmanın ve reklam ROI'nızı korumanın tek yolu, kullanıcı dönüşüm verilerini tarayıcı yerine doğrudan kendi sunucunuz üzerinden reklam platformlarına (Meta, Google, TikTok) aktaran <strong>Sunucu Tarafı İzleme (Server-Side Tracking)</strong> ve <strong>Conversions API (CAPI)</strong> entegrasyonudur. Bu rehberde, reklam bütçenizi optimize etmek ve akıllı teklif algoritmalarını doğru beslemek için sunucu tarafı altyapıyı nasıl kuracağınızı adım adım öğreneceksiniz.</p>
          </div>

          <h2>🍪 İstemci Tarafı (Client-Side) İzlemenin Çöküşü: Neden Yeni Bir Altyapı Şart?</h2>
          <p>Yıllar boyunca dijital pazarlamacılar reklam performansını ölçmek için tarayıcı tabanlı (Client-Side) kodlara güvendi. Kullanıcı web sitenize girdiğinde, tarayıcıda bir Javascript kodu (Meta Pikseli veya Google Etiketi gibi) çalışır ve kullanıcının hareketlerini doğrudan reklam platformunun sunucularına gönderirdi. Ancak bu sistem artık teknik ve yasal engeller nedeniyle işlevini yitirmiş durumda.</p>
          
          <p>Apple'ın Safari tarayıcısında uyguladığı <strong>ITP (Intelligent Tracking Prevention)</strong> mekanizması, JavaScript ile yazılan birinci taraf çerezlerin ömrünü 1 ila 7 güne indirdi. Bazı durumlarda (reklam tıklaması ile yönlendirilen sayfalarda) bu süre 24 saate kadar düşmektedir. Bu durum, kullanıcının sitenizi ziyaret edip 3 gün sonra satın alma yapması halinde, bu dönüşümın hangi reklamdan geldiğinin tespit edilememesi anlamına gelir. Ayrıca, AdBlock ve uBlock Origin gibi reklam engelleyiciler, JavaScript kütüphanelerinin çalışmasını doğrudan engelleyerek verinin reklam paneline ulaşmasını tamamen keser.</p>

          <p>Buna ek olarak, Google Chrome'un üçüncü taraf çerezleri tamamen aşamalı olarak kaldırma süreci ve Avrupa Birliği'nin GDPR (ülkemizde KVKK) yaptırımları, tarayıcı tabanlı ölçümlemeyi sürdürülemez kılmaktadır. Veri kaybı arttıkça, reklam platformlarındaki yapay zeka algoritması (örneğin Google Ads Smart Bidding veya Meta Advantage+) doğru beslenemez. Algoritma dönüşüm elde edemediğini düşündüğü için kampanyaları optimize edemez, bu da tıklama başına maliyetlerin (CPC) artmasına ve genel reklam getirisinin (ROAS) ciddi şekilde düşmesine yol açar.</p>

          <blockquote>
            <p>"2026 yılında dijital pazarlamada başarılı olmak ile başarısız olmak arasındaki en büyük fark, veriyi ne kadar doğru okuduğunuzdur. Tarayıcı tabanlı izleme artık can çekişiyor. Eğer sunucu tarafı izleme (Server-Side Tracking) ve Conversions API altyapısını kurmadıysanız, reklam bütçenizin en az %30'unu karanlıkta harcıyorsunuz demektir. Bu bir lüks değil, reklamlarınızın hayatta kalması için teknik bir zorunluluktur." — Salih Maral, Performans Pazarlama Uzmanı</p>
          </blockquote>

          <h2>🔄 İstemci Tarafı (Client-Side) vs. Sunucu Tarafı (Server-Side) Karşılaştırması</h2>
          <p>Performans pazarlama süreçlerinde hangi izleme yönteminin hangi avantajları sunduğunu anlamak, altyapı yatırımlarınızı doğru yönlendirmenizi sağlar. Aşağıdaki tablo, geleneksel tarayıcı tabanlı izleme ile sunucu tarafı ve hibrit modeller arasındaki farkları detaylandırmaktadır:</p>

          <table>
            <thead>
              <tr>
                <th>Kriter</th>
                <th>İstemci Tarafı (Client-Side)</th>
                <th>Sunucu Tarafı (Server-Side)</th>
                <th>Hibrit İzleme (Pixel + CAPI)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Veri İletim Kanalı</strong></td>
                <td>Kullanıcı tarayıcısından doğrudan reklam platformuna</td>
                <td>Kullanıcı tarayıcısından kendi bulut sunucunuza, oradan API ile platforma</td>
                <td>Hem tarayıcı hem sunucu kanalları aynı anda kullanılır</td>
              </tr>
              <tr>
                <td><strong>Ad Blocker Engeli</strong></td>
                <td>Kolayca engellenir (Veri kaybı yüksektir)</td>
                <td>Engellenemez (Özel subdomain kullanıldığında veri kaybı sıfırdır)</td>
                <td>Tarayıcı engellense bile sunucu kanalı veriyi iletir</td>
              </tr>
              <tr>
                <td><strong>Safari ITP Kısıtlaması</strong></td>
                <td>Çerez ömrü 1-7 gün ile sınırlıdır</td>
                <td>HTTP-only çerezler ile çerez ömrü 180-360 güne uzatılabilir</td>
                <td>Uzun çerez ömrü sayesinde geri dönen kullanıcılar doğru eşleşir</td>
              </tr>
              <tr>
                <td><strong>Site Açılış Hızı</strong></td>
                <td>Çok sayıda JS kütüphanesi nedeniyle siteyi yavaşlatır</td>
                <td>Sadece tek bir veri akışı yüklenir, site hızı artar</td>
                <td>Optimize edilmiş tek bir akışla tarayıcı yükü hafifletilir</td>
              </tr>
              <tr>
                <td><strong>Veri Kontrolü ve Güvenlik</strong></td>
                <td>Kullanıcı verileri filtrelenmeden doğrudan platformlara gider</td>
                <td>Veriler platforma gitmeden önce sunucuda maskelenebilir veya silinebilir</td>
                <td>Maksimum veri güvenliği ve seçici veri paylaşımı sağlanır</td>
              </tr>
            </tbody>
          </table>

          <h2>🛠️ Meta Conversions API (CAPI) Nedir ve Nasıl Çalışır?</h2>
          <p>Meta Conversions API (CAPI), web sitenizdeki pazarlama olaylarını (alışveriş, sepete ekleme, form doldurma vb.) doğrudan kendi sunucunuzdan Meta (Facebook) sunucularına güvenli bir şekilde iletmenizi sağlayan bir uygulama programlama arayüzüdür. Tarayıcı tabanlı Meta Pikseli'ne (Pixel) alternatif olarak değil, onunla <strong>birlikte çalışacak şekilde (Hibrit Yapıda)</strong> tasarlanmıştır.</p>
          
          <p>Meta CAPI'nin en büyük avantajı, tarayıcının çökmesi, internet bağlantısının kesilmesi veya ad blocker kullanılması durumlarında bile dönüşüm verisini kayıpsız iletmesidir. Hibrit kurulumlarda aynı olay hem tarayıcıdan hem de sunucudan gönderildiğinde çift sayım (double counting) olmaması için Meta, <strong>tekilleştirme (deduplication)</strong> mekanizmasını kullanır. Bunun için her iki kanaldan gönderilen olayların <code>event_id</code> (olay kimliği) ve <code>event_name</code> (olay adı) parametreleri birebir eşleşmelidir. Meta sunucuları, bu iki veriyi karşılaştırarak yinelenen kayıtları siler ve sadece tek bir dönüşüm yansıtır. Bu yapı, veri bütünlüğünü korurken ölçüm doğruluğunu maksimuma çıkarır.</p>

          <h2>📈 Google Ads Gelişmiş Dönüşümler (Enhanced Conversions) ve Sunucu Tarafı Ölçümleme</h2>
          <p>Google Ads tarafında da veri kayıplarını önlemek için benzer bir teknoloji kullanılmaktadır. <a href="/tr/hizmetler/google-ads">Google Ads Yönetimi</a> süreçlerinde sıklıkla uyguladığımız <strong>Gelişmiş Dönüşümler (Enhanced Conversions)</strong>, kullanıcıların sitenizde gerçekleştirdiği dönüşüm işlemlerine ait birinci taraf verilerini (e-posta adresi, telefon numarası, ad-soyad, adres gibi) güvenli bir şekilde hash'leyerek (SHA-256 algoritması ile) şifreler ve Google'a iletir.</p>

          <p>Google, bu şifrelenmiş verileri kendi veritabanındaki oturum açmış Google kullanıcıları ile eşleştirir. Böylece, kullanıcı reklamınızı bilgisayarda tıklayıp satın alma işlemini telefonda gerçekleştirmiş olsa dahi, dönüşüm doğru reklam kampanyasıyla ilişkilendirilir. Sunucu tarafı GTM altyapısı kullanılarak yapılandırılan Gelişmiş Dönüşümler, tarayıcı kısıtlamalarından tamamen bağımsız olarak çalışır ve reklam hesaplarındaki dönüşüm sayısını ortalama %12 ila %18 oranında artırarak akıllı teklif (Smart Bidding) sistemlerinin çok daha verimli kararlar vermesini sağlar.</p>

          <h2>🛠️ Google Etiket Yöneticisi (GTM) ile Sunucu Tarafı İzleme Kurulumu (Adım Adım)</h2>
          <p>Sunucu tarafı izleme kurulumu teknik bilgi ve dikkat gerektiren bir süreçtir. Aşağıdaki adımları takip ederek işletmeniz için profesyonel bir veri ölçümleme altyapısı oluşturabilirsiniz:</p>

          <h3>Adım 1: GTM Sunucu Konteyneri (Server Container) Oluşturma</h3>
          <p>Google Tag Manager hesabınıza giriş yapın. Yeni bir konteyner oluştur seçeneğine tıklayın ve konteyner türü olarak <strong>"Server" (Sunucu)</strong> seçeneğini işaretleyin. Bu işlem size sunucu tarafı etiketleri yönetebileceğiniz yepyeni bir panel sağlayacaktır.</p>

          <h3>Adım 2: Bulut Sunucusunu (Cloud Server) Yapılandırma</h3>
          <p>GTM Sunucu konteynerini çalıştırabilmek için bir bulut sunucusuna ihtiyacınız vardır. Google, varsayılan olarak kendi <strong>Google Cloud Platform (GCP) / Cloud Run</strong> altyapısını önerir. Alternatif olarak, kurulumu çok daha basit olan ve maliyet avantajı sağlayan <strong>Stape.io</strong> gibi üçüncü parti servis sağlayıcıları da tercih edilebilir. Seçtiğiniz sunucu yapılandırmasını tamamladıktan sonra size verilen sunucu URL'sini GTM sunucu konteyneri ayarlarınıza tanımlayın.</p>

          <h3>Adım 3: Özel Alt Alan Adı (Custom Subdomain) Tanımlama</h3>
          <p>Sunucu izlemesinin Safari ITP engellerini aşabilmesi ve çerezleri "birinci taraf" olarak yazabilmesi için sunucu URL'sinin kendi alan adınızın bir alt alanı (subdomain) olması şarttır. Örneğin; ana siteniz <code>domain.com</code> ise, sunucunuzu <code>sst.domain.com</code> veya <code>metrics.domain.com</code> şeklinde yapılandırmalısınız. Bunun için domain sağlayıcınızın DNS yönetim paneline girerek sunucu sağlayıcınızın gösterdiği IP adreslerine yönlenen <strong>A veya CNAME kayıtlarını</strong> ekleyin.</p>

          <h3>Adım 4: GA4 İstemcisi (GA4 Client) ile Veri Akışı Kurma</h3>
          <p>Tarayıcıdaki verileri sunucu konteynerine taşımak için en yaygın yöntem Google Analytics 4 (GA4) etiketini kullanmaktır. Web sitenizdeki tarayıcı tabanlı GTM konteynerine giderek GA4 etiketinizin "Sunucu URL'si" alanına az önce oluşturduğunuz özel subdomain adresinizi (<code>https://sst.domain.com</code>) yazın. Artık kullanıcının tarayıcısında tetiklenen tüm olaylar, doğrudan sizin kendi sunucunuza gönderilecektir.</p>

          <h3>Adım 5: GTM Sunucu Konteynerinde Etiketleri Yapılandırma</h3>
          <p>Sunucu konteynerinize gelen veriler, buradaki "Client" (İstemci) yapıları tarafından karşılanır. Sunucu konteyneri içinde Meta Conversions API etiketini ve Google Ads dönüşüm etiketlerini oluşturun. Gelen verileri bu etiketler vasıtasıyla ilgili reklam platformlarının API uç noktalarına yönlendirin.</p>

          <h3>Adım 6: Olay Tekilleştirme (Deduplication) ve Eşleştirme Parametreleri</h3>
          <p>Çift sayımların önüne geçmek için tarayıcı etiketleri ile sunucu etiketlerine ortak bir <code>event_id</code> parametresi ekleyin. E-ticaret siteleri için bu değer genellikle sipariş numarası (<code>transaction_id</code>) olur. Diğer olaylar (sepete ekleme, form doldurma) için benzersiz bir rastgele kimlik üreten JavaScript değişkenleri kullanabilirsiniz. Ayrıca, olay eşleşme kalitesini (Event Match Quality) artırmak adına kullanıcının IP adresi, User Agent bilgisi, fbp, fbc çerezleri ile hash'lenmiş e-posta ve telefon bilgilerini sunucu etiketlerine parametre olarak eklemeyi unutmayın.</p>

          <div class="highlight-box success">
            <h4>💡 Kritik Kurulum Uyarısı</h4>
            <p>Sunucu tarafı kuruluma geçerken web sitenizin KVKK ve GDPR uyumluluğunu mutlaka korumalısınız. Kullanıcı çerez izni vermediyse (Consent Mode V2 üzerinde reddedildi olarak işaretlendiyse), sunucu konteynerindeki etiketlerin çalışmasını engellemeli veya verileri tamamen anonimleştirerek göndermelisiniz. Aksi takdirde ciddi yasal yaptırımlarla karşılaşabilirsiniz.</p>
          </div>

          <h2>📊 Sunucu Tarafı İzlemenin Reklam Performansına Etkisi: İstatistiksel Veriler</h2>
          <p>Veri doğruluğunun artması, doğrudan reklam bütçenizin optimizasyonunu sağlar. Yapılan sektörel araştırmalar ve müşteri hesaplarımızda elde ettiğimiz veriler, sunucu tarafı izlemeye geçişin ardından kampanyalarda yaşanan iyileşmeleri net bir şekilde ortaya koymaktadır:</p>

          <table>
            <thead>
              <tr>
                <th>Reklam Platformu</th>
                <th>Ortalama Dönüşüm Verisi Artışı</th>
                <th>Edinme Başına Maliyet (CPA) Değişimi</th>
                <th>Ortalama ROAS Artışı</th>
                <th>Önerilen Kurulum Modeli</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Meta Ads (Facebook & Instagram)</strong></td>
                <td>%+18 ila %+25</td>
                <td>%-15 ila %-22 Düşüş</td>
                <td>%+20 ila %+35</td>
                <td>Hibrit Model (Pixel + CAPI) + Event ID Tekilleştirme</td>
              </tr>
              <tr>
                <td><strong>Google Ads (Search & PMax)</strong></td>
                <td>%+12 ila %+18</td>
                <td>%-10 ila %-15 Düşüş</td>
                <td>%+15 ila %+25</td>
                <td>Server-Side Enhanced Conversions + Consent Mode V2</td>
              </tr>
              <tr>
                <td><strong>TikTok Ads</strong></td>
                <td>%+22 ila %+30</td>
                <td>%-20 ila %-28 Düşüş</td>
                <td>%+25 ila %+40</td>
                <td>TikTok Events API (Server-Side) Entegrasyonu</td>
              </tr>
            </tbody>
          </table>

          <p>Yukarıdaki tablodan da anlaşılacağı üzere, sunucu tarafı izleme altyapısına geçiş yapan işletmeler daha fazla dönüşüm verisi yakaladıkları için reklam platformlarındaki yapay zeka algoritmaları çok daha hızlı öğrenme sürecine girmekte ve bütçeyi en doğru kitleye harcamaktadır. Dönüşüm verilerindeki bu artış, yapay bir artış değil; tarayıcı engelleri nedeniyle daha önce ölçümlenemeyen gerçek satışların sisteme geri kazandırılmasıdır.</p>

          <h2>📋 Olay Eşleşme Kalitesi (Event Match Quality - EMQ) Nasıl Artırılır?</h2>
          <p>Meta Events Manager (Olay Yöneticisi) panelinde, Conversions API üzerinden gönderilen olayların yanında 1 ile 10 arasında bir <strong>Olay Eşleşme Kalitesi (EMQ)</strong> skoru görürsünüz. Bu skor, gönderdiğiniz sunucu verilerinin Meta platformundaki gerçek kullanıcı profilleriyle ne kadar iyi eşleştiğini gösterir. Skorunuz ne kadar yüksekse, yeniden hedefleme (retargeting) kitleleriniz o kadar genişler ve benzer hedef kitle (lookalike) performansınız o kadar artar.</p>

          <p>EMQ skorunu yükseltmek için sunucu olaylarıyla birlikte şu parametreleri göndermeye özen gösterin:</p>
          <ul>
            <li><strong>Müşteri Bilgileri:</strong> E-posta (em), telefon numarası (ph), ad (fn), soyad (ln), şehir (ct), ülke (country). Bu bilgilerin tümü gönderilmeden önce tarayıcıda veya sunucuda <strong>SHA-256</strong> formatında hash'lenmelidir.</li>
            <li><strong>Tarayıcı Bilgileri:</strong> İstemci IP Adresi (client_ip_address), Kullanıcı Aracısı (client_user_agent). Bu bilgiler sunucu tarafından doğrudan HTTP isteğinden okunarak alınabilir.</li>
            <li><strong>Meta Çerezleri:</strong> <code>_fbp</code> (Facebook Tarayıcı Kimliği) ve <code>_fbc</code> (Facebook Tıklama Kimliği). Özellikle reklam tıklamasıyla gelen trafiklerde <code>_fbc</code> parametresinin eksiksiz iletilmesi eşleşme oranını zirveye çıkarır.</li>
            <li><strong>Benzersiz Kullanıcı Kimliği (External ID):</strong> Veritabanınızdaki kullanıcıya ait benzersiz müşteri numarasını (üye ID'si) göndererek eşleşmeyi %100 kesinliğe ulaştırabilirsiniz.</li>
          </ul>

          <h2>🚀 Özet ve Geleceğe Hazırlık</h2>
          <p>Gizlilik odaklı internet çağında, eski usul tarayıcı pikselleriyle reklam yönetmek artık karlı değildir. Sunucu tarafı izleme ve Conversions API entegrasyonları, işletmenizin birinci taraf veri (1st-party data) stratejisinin temel direklerini oluşturur. Bu altyapıyı bugün kurmak, sizi rakiplerinizin bir adım önüne geçirecek ve reklam bütçenizin her kuruşundan maksimum verim almanızı sağlayacaktır.</p>

          <p>Eğer reklam hesaplarınızda veri kayıpları yaşıyor, ROAS oranlarınızın düştüğünü görüyor ve teknik altyapınızı 2026 standartlarına taşımak istiyorsanız, profesyonel destek alarak bu süreci sorunsuz tamamlayabilirsiniz. Doğru kurgulanmış bir ölçümleme yapısıyla dijital pazarlamada tahminlerle değil, net verilerle büyümeye başlayın.</p>

          <div class="highlight-box">
            <h4>📚 Devamını Okuyun</h4>
            <ul>
              <li><a href="/blog/first-party-data-marketing">Çerezsiz Reklamcılık: Birinci Taraf Veri (1st-Party Data) ile Geleceğe Hazırlanın</a></li>
              <li><a href="/tr/hizmetler/google-ads">Salih Maral Google Ads Reklam Yönetimi Hizmeti</a></li>
              <li><a href="/blog/google-ads-roi-tracking">Google Ads Dönüşüm Takibi ve ROI Optimizasyonu Rehberi</a></li>
              <li><a href="/blog/ai-seo-geoptimierung">Yapay Zeka Arama Motorları İçin SEO (GEO) Rehberi 2026</a></li>
              <li><a href="/blog/google-ads-pmax-optimization">PMax Optimizasyonu – ROAS'ınızı 3 Katına Çıkarın</a></li>
              <li><a href="/tr/hizmetler/seo">Salih Maral Profesyonel SEO Hizmetleri</a></li>
            </ul>
          </div>


