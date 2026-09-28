const SERVICE = {
  de: {
    'google-ads': { href: '/de/dienstleistungen/google-ads', label: 'Google Ads Betreuung' },
    'meta-ads': { href: '/de/dienstleistungen/meta-ads', label: 'Meta Ads' },
    seo: { href: '/de/dienstleistungen/seo', label: 'SEO & GEO' },
    'youtube-ads': { href: '/de/dienstleistungen/youtube-ads', label: 'YouTube Ads' },
    reviews: { href: '/de/dienstleistungen/bewertungsmanagement', label: 'Bewertungsmanagement' },
  },
  tr: {
    'google-ads': { href: '/tr/hizmetler/google-ads', label: 'Google Ads yönetimi' },
    'meta-ads': { href: '/tr/hizmetler/meta-ads', label: 'Meta Ads' },
    seo: { href: '/tr/hizmetler/seo', label: 'SEO ve GEO' },
    'youtube-ads': { href: '/tr/hizmetler/youtube-ads', label: 'YouTube Ads' },
    reviews: { href: '/tr/hizmetler/yorum-yonetimi', label: 'Yorum yönetimi' },
  },
  en: {
    'google-ads': { href: '/en/services/google-ads', label: 'Google Ads management' },
    'meta-ads': { href: '/en/services/meta-ads', label: 'Meta Ads' },
    seo: { href: '/en/services/seo', label: 'SEO & GEO' },
    'youtube-ads': { href: '/en/services/youtube-ads', label: 'YouTube Ads' },
    reviews: { href: '/en/services/review-management', label: 'Review management' },
  },
}

const CITIES = {
  frankfurt: {
    name: { de: 'Frankfurt am Main', tr: 'Frankfurt', en: 'Frankfurt am Main' },
    areas: {
      de: 'Dreieich, Offenbach, Eschborn und die Rhein-Main-Region',
      tr: 'Dreieich, Offenbach, Eschborn ve Rhein-Main bölgesi',
      en: 'Dreieich, Offenbach, Eschborn and the Rhine-Main region',
    },
    queries: {
      de: 'Steuerberater Frankfurt, Klinik Frankfurt, B2B Leadgenerierung Rhein-Main',
      tr: 'Frankfurt vergi müşaviri, Frankfurt klinik, Rhein-Main B2B müşteri',
      en: 'tax advisor Frankfurt, clinic Frankfurt, B2B leads Rhine-Main',
    },
    angle: {
      de: 'Frankfurt ist ein teurer Klickmarkt. Finanzdienstleister, Kanzleien und Kliniken bieten auf dieselben Begriffe. Eine Kampagne, die nur die Stadtgrenze als Radius setzt, kauft Klicks aus dem Pendlerverkehr, die nie zum Termin kommen. Wir trennen Innenstadt, Flughafen-Korridor und Umland und geben jedem Gebiet eigene Anzeigen und eigene Ausschlüsse.',
      tr: 'Frankfurt pahalı bir tıklama pazarıdır. Finans, hukuk büroları ve klinikler aynı kelimelere teklif verir. Sadece şehir sınırı yarıçapı, randevuya dönüşmeyen banliyö tıklamaları satın alır. İç merkez, havalimanı koridoru ve çevreyi ayırıp her bölgeye kendi reklamını ve negatif kelimelerini kurarız.',
      en: 'Frankfurt is an expensive click market. Finance, law firms and clinics bid on the same terms. A radius around the city border buys commuter clicks that never become appointments. We split the centre, the airport corridor and the surrounding towns, each with its own ads and negatives.',
    },
    sectors: {
      de: [
        ['Finanzdienstleister und Kanzleien', 'Suchanfragen kommen mit hohem Gebot und kurzer Entscheidungsfrist. Wir schützen den Markennamen, filtern Job- und Ratgeber-Traffic und führen die Anzeige auf ein Erstgespräch, nicht auf eine allgemeine Leistungsseite.'],
        ['Kliniken und Praxen', 'Patienten suchen nach Behandlung plus Stadtteil. Kampagnen laufen getrennt für Offenbach, Westend und das Umland, damit das Budget der Praxis nicht in der falschen Postleitzahl landet.'],
        ['E-Commerce mit Rhein-Main-Lager', 'Shopping und Performance Max brauchen eine Feed-Struktur, die Marge und Liefergebiet kennt. Sonst skaliert das System günstige, aber unprofitable Produkte aus dem gesamten Bundesgebiet.'],
      ],
      tr: [
        ['Finans ve hukuk büroları', 'Aramalar yüksek teklifli ve kararı kısadır. Marka adını korur, iş ilanı ve rehber trafiğini eler, reklamı genel hizmet sayfası yerine ilk görüşmeye indiririz.'],
        ['Klinik ve muayenehaneler', 'Hastalar tedavi artı semt arar. Offenbach, Westend ve çevre ayrı kampanyalardır; bütçe yanlış posta kodunda erimez.'],
        ['Rhein-Main depolu e-ticaret', 'Shopping ve Performance Max, kâr marjını ve teslimat bölgesini bilen bir ürün akışı ister. Aksi halde sistem tüm Almanya’dan kârsız ürün satar.'],
      ],
      en: [
        ['Finance and law firms', 'Queries carry high bids and a short decision window. We protect the brand, filter jobs and guide traffic, and send the ad to a first meeting rather than a generic services page.'],
        ['Clinics and practices', 'Patients search treatment plus district. Offenbach, Westend and the suburbs run as separate campaigns so the budget does not land in the wrong postcode.'],
        ['E-commerce with a Rhine-Main warehouse', 'Shopping and Performance Max need a feed that knows margin and delivery area. Otherwise the system scales cheap, unprofitable products from across Germany.'],
      ],
    },
  },
  duesseldorf: {
    name: { de: 'Düsseldorf', tr: 'Düsseldorf', en: 'Düsseldorf' },
    areas: {
      de: 'Neuss, Ratingen, Meerbusch und der linke Niederrhein',
      tr: 'Neuss, Ratingen, Meerbusch ve Aşağı Ren’in sol yakası',
      en: 'Neuss, Ratingen, Meerbusch and the left bank of the Lower Rhine',
    },
    queries: {
      de: 'Mode Shop Düsseldorf, Google Ads Agentur Neuss, B2B Beratung Ratingen',
      tr: 'Düsseldorf moda mağazası, Neuss Google Ads, Ratingen B2B danışmanlık',
      en: 'fashion shop Düsseldorf, Google Ads Neuss, B2B consulting Ratingen',
    },
    angle: {
      de: 'Düsseldorf mischt Mode, Handel und Konzernzentralen. Eine Anzeige, die für die Kö funktioniert, ist in Ratingen oft zu teuer und in Neuss zu unspezifisch. Wir bauen getrennte Anzeigengruppen für Innenstadt, Umland und reine Online-Shops mit Versandschwerpunkt NRW.',
      tr: 'Düsseldorf moda, perakende ve şirket merkezlerini aynı anda barındırır. Kö için çalışan bir reklam Ratingen’de pahalı, Neuss’ta ise fazla genel kalır. İç merkez, çevre ve NRW gönderimli online mağazalar için ayrı reklam grupları kurarız.',
      en: 'Düsseldorf mixes fashion, retail and corporate headquarters. An ad that works on the Königsallee is often too expensive in Ratingen and too vague in Neuss. We split ad groups for the centre, the suburbs and online shops shipping across NRW.',
    },
    sectors: {
      de: [
        ['Mode und E-Commerce', 'Produktfeeds werden nach Marge und Retourenquote geschnitten. Sonst verbrennt Advantage+ das Budget auf Blickfänger, die nie die zweite Bestellung bringen.'],
        ['B2B und Dienstleister', 'Entscheider suchen abends und mit Firmennamen. Wir trennen mobile Impulsklicks von Desktop-Recherche und messen Anfragen, nicht nur Sitzungen.'],
        ['Agenturen und Kanzleien', 'Der Markt ist voll mit austauschbaren Claims. Anzeigen nennen Einzugsgebiet und Festpreis, damit der Klick von jemandem kommt, der schon vergleichen will.'],
      ],
      tr: [
        ['Moda ve e-ticaret', 'Ürün akışını marj ve iade oranına göre keseriz. Aksi halde Advantage+ bütçeyi ikinci sipariş getirmeyen vitrin ürünlerinde yakar.'],
        ['B2B ve hizmet firmaları', 'Karar vericiler akşam ve şirket adıyla arar. Mobil dürtü tıklamasını masaüstü araştırmadan ayırır, oturumu değil talebi ölçeriz.'],
        ['Ajanslar ve hukuk büroları', 'Pazar birbirinin aynısı vaatlerle dolu. Reklamlar hizmet bölgesini ve sabit ücreti söyler; tıklama karşılaştırmaya hazır kişiden gelir.'],
      ],
      en: [
        ['Fashion and e-commerce', 'Feeds are cut by margin and return rate. Otherwise Advantage+ burns budget on eye-catching products that never earn a second order.'],
        ['B2B and professional services', 'Buyers search in the evening and with company names. We separate mobile impulse clicks from desktop research and measure enquiries, not sessions.'],
        ['Agencies and law firms', 'The market is full of interchangeable claims. Ads name the catchment and the flat fee so the click comes from someone already comparing.'],
      ],
    },
  },
  koeln: {
    name: { de: 'Köln', tr: 'Köln', en: 'Cologne' },
    areas: {
      de: 'Ehrenfeld, Deutz, Bonn und das linke Rheinufer',
      tr: 'Ehrenfeld, Deutz, Bonn ve Ren’in sol yakası',
      en: 'Ehrenfeld, Deutz, Bonn and the left bank of the Rhine',
    },
    queries: {
      de: 'Zahnarzt Ehrenfeld, Restaurant Köln Deutz, Performance Marketing Köln',
      tr: 'Ehrenfeld diş hekimi, Köln Deutz restoran, Köln performans pazarlama',
      en: 'dentist Ehrenfeld, restaurant Cologne Deutz, performance marketing Cologne',
    },
    angle: {
      de: 'Köln sucht lokal und in Veedeln. Wer nur „Köln“ als Keyword kauft, bezahlt Innenstadt-Preise für Anfragen aus Vororten, die eine andere Anfahrt erwarten. Veedel-Begriffe, Rheinauhafen und der Übergang nach Bonn bekommen eigene Anzeigen.',
      tr: 'Köln aramaları mahalle (Veedel) düzeyindedir. Sadece „Köln“ kelimesini satın almak, farklı bir yolculuk bekleyen banliyö talepleri için merkez fiyatı ödetir. Mahalle terimleri, Rheinauhafen ve Bonn geçişi ayrı reklam alır.',
      en: 'Cologne searches locally, by neighbourhood. Buying only “Cologne” pays inner-city prices for enquiries from suburbs that expect a different journey. Neighbourhood terms, the Rheinauhafen and the Bonn corridor get their own ads.',
    },
    sectors: {
      de: [
        ['Praxen und Gesundheit', 'Termine hängen am Stadtteil. Eine Praxis in Ehrenfeld darf nicht für Suchen aus Porz zahlen, wenn sie dort keine Sprechstunde anbietet.'],
        ['Gastronomie und Events', 'Abendsuche und Kartenverkäufe brauchen ein anderes Gebot als die Mittagssuche nach einem Geschäftsessen in Deutz.'],
        ['Medien und Agenturen', 'Köln hat viele Anbieter mit ähnlichen Portfolios. Die Anzeige muss Branche und Referenzrahmen nennen, sonst bleibt der Klick ein Vergleich ohne Auftrag.'],
      ],
      tr: [
        ['Muayenehane ve sağlık', 'Randevu semte bağlıdır. Ehrenfeld’deki bir muayenehane, orada hizmet vermiyorsa Porz aramalarına para ödememelidir.'],
        ['Gastro ve etkinlik', 'Akşam araması ve bilet satışı, Deutz’ta iş yemeği aramasından farklı teklif ister.'],
        ['Medya ve ajanslar', 'Köln’de portfolyosu benzeyen çok sağlayıcı vardır. Reklam sektörü ve referans çerçevesini söylemezse tıklama siparişsiz bir karşılaştırma olarak kalır.'],
      ],
      en: [
        ['Practices and healthcare', 'Appointments depend on the district. A practice in Ehrenfeld should not pay for Porz searches if it does not see patients there.'],
        ['Hospitality and events', 'Evening search and ticket sales need a different bid from a lunch search for a business meal in Deutz.'],
        ['Media and agencies', 'Cologne has many providers with similar portfolios. The ad has to name the sector and the proof, or the click stays a comparison without a brief.'],
      ],
    },
  },
  muenchen: {
    name: { de: 'München', tr: 'Münih', en: 'Munich' },
    areas: {
      de: 'Schwabing, Bogenhausen, Augsburg und Oberbayern',
      tr: 'Schwabing, Bogenhausen, Augsburg ve Yukarı Bavyera',
      en: 'Schwabing, Bogenhausen, Augsburg and Upper Bavaria',
    },
    queries: {
      de: 'Privatklinik München, Software München B2B, Premium Shop München',
      tr: 'Münih özel klinik, Münih B2B yazılım, Münih premium mağaza',
      en: 'private clinic Munich, B2B software Munich, premium shop Munich',
    },
    angle: {
      de: 'München bezahlt die höchsten Klickpreise in Süddeutschland. Wer das Konto wie einen Bundesdurchschnitt steuert, verliert gegen Anbieter, die Stadtteil, Zahlungsbereitschaft und Branche getrennt bieten. Schwabing, Bogenhausen und das Augsburger Umland sind drei Märkte.',
      tr: 'Münih, güney Almanya’nın en yüksek tıklama fiyatını öder. Hesabı ülke ortalaması gibi yöneten, semt, ödeme gücü ve sektörü ayrı teklifleyen rakiplere kaybeder. Schwabing, Bogenhausen ve Augsburg çevresi üç ayrı pazardır.',
      en: 'Munich pays the highest click prices in southern Germany. Running the account like a national average loses to competitors who bid separately by district, willingness to pay and sector. Schwabing, Bogenhausen and the Augsburg area are three markets.',
    },
    sectors: {
      de: [
        ['Tech und Software', 'Entscheider vergleichen Anbieter über Problembegriffe, nicht über „Agentur München“. Die Anzeige muss den Use-Case nennen, den das Produkt in 30 Tagen löst.'],
        ['Premium E-Commerce', 'Hoher Warenwert verträgt höhere CPCs nur mit sauberer Marge im Feed. Sonst skaliert PMax die Optik und nicht den Deckungsbeitrag.'],
        ['Privatkliniken', 'Patienten recherchieren länger und mit Behandlungsnamen. Wir trennen Informationssuchen von Terminsuchen und messen gebuchte Gespräche.'],
      ],
      tr: [
        ['Teknoloji ve yazılım', 'Karar vericiler „Münih ajansı“ değil, problem kelimeleriyle karşılaştırır. Reklam, ürünün 30 günde çözdüğü kullanım durumunu söylemeli.'],
        ['Premium e-ticaret', 'Yüksek sepet, akışta temiz marj varsa yüksek CPC’yi taşır. Aksi halde PMax görünümü büyütür, katkıyı değil.'],
        ['Özel klinikler', 'Hastalar tedavi adıyla ve daha uzun araştırır. Bilgi aramasını randevu aramasından ayırır, ayırtılan görüşmeyi ölçeriz.'],
      ],
      en: [
        ['Tech and software', 'Buyers compare providers on problem terms, not on “agency Munich”. The ad has to name the use case the product solves in 30 days.'],
        ['Premium e-commerce', 'A high basket can carry a high CPC only with clean margin in the feed. Otherwise PMax scales the look, not the contribution.'],
        ['Private clinics', 'Patients research longer and by treatment name. We separate information searches from appointment searches and measure booked calls.'],
      ],
    },
  },
  stuttgart: {
    name: { de: 'Stuttgart', tr: 'Stuttgart', en: 'Stuttgart' },
    areas: {
      de: 'Esslingen, Ludwigsburg, Böblingen und die Region Stuttgart',
      tr: 'Esslingen, Ludwigsburg, Böblingen ve Stuttgart bölgesi',
      en: 'Esslingen, Ludwigsburg, Böblingen and the Stuttgart region',
    },
    queries: {
      de: 'Maschinenbau Leads Stuttgart, Industrie Zulieferer Esslingen, B2B Google Ads Ludwigsburg',
      tr: 'Stuttgart makine müşteri adayı, Esslingen tedarikçi, Ludwigsburg B2B Google Ads',
      en: 'mechanical engineering leads Stuttgart, supplier Esslingen, B2B Google Ads Ludwigsburg',
    },
    angle: {
      de: 'Stuttgart kauft langsam und in Gremien. Ein Formular aus dem Consumer-Funnel wirkt hier unseriös. Wir bauen Suche auf Problem, Bauteil und Norm, und messen qualifizierte Anfragen aus Einkauf und Technik, nicht Newsletter-Anmeldungen.',
      tr: 'Stuttgart yavaş ve kurul kararıyla satın alır. Tüketici hunisindeki form burada ciddiyetsiz durur. Aramayı problem, parça ve norm üzerine kurar; bülten kaydını değil satın alma ve mühendislikten gelen nitelikli talebi ölçeriz.',
      en: 'Stuttgart buys slowly and by committee. A consumer-funnel form looks unserious here. We build search around the problem, the part and the standard, and measure qualified enquiries from purchasing and engineering, not newsletter signups.',
    },
    sectors: {
      de: [
        ['Maschinenbau und Zulieferer', 'Suchbegriffe sind technisch. Wer sie in eine breite Phrase packt, zahlt für Studenten und Jobs statt für Einkäufer.'],
        ['Mittelstand mit mehreren Werken', 'Esslingen und Ludwigsburg brauchen eigene Ortsseiten und eigene Anzeigen, sonst landet die Anfrage im falschen Werk.'],
        ['B2B-Dienstleister', 'Der Vertrieb will Gesprächstermine mit Budgetrahmen. Die Kampagne endet auf einer Seite, die genau das abfragt.'],
      ],
      tr: [
        ['Makine ve tedarik', 'Arama terimleri tekniktir. Bunları geniş bir öbeğe koyan, satın almacı yerine öğrenci ve iş ilanı trafiği öder.'],
        ['Birden fazla tesisli KOBİ', 'Esslingen ve Ludwigsburg kendi sayfasını ve reklamını ister; yoksa talep yanlış tesise düşer.'],
        ['B2B hizmet', 'Satış ekibi bütçe çerçevesi olan görüşme ister. Kampanya tam olarak bunu soran bir sayfada biter.'],
      ],
      en: [
        ['Mechanical engineering and suppliers', 'Queries are technical. Folding them into a broad phrase pays for students and jobs instead of buyers.'],
        ['Mid-sized firms with several plants', 'Esslingen and Ludwigsburg need their own pages and ads, or the enquiry lands at the wrong plant.'],
        ['B2B services', 'Sales wants meetings with a budget frame. The campaign ends on a page that asks for exactly that.'],
      ],
    },
  },
  berlin: {
    name: { de: 'Berlin', tr: 'Berlin', en: 'Berlin' },
    areas: {
      de: 'Mitte, Kreuzberg, Prenzlauer Berg und den Speckgürtel',
      tr: 'Mitte, Kreuzberg, Prenzlauer Berg ve çevre ilçeler',
      en: 'Mitte, Kreuzberg, Prenzlauer Berg and the outer boroughs',
    },
    queries: {
      de: 'D2C Shop Berlin, SaaS Demo Berlin, lokaler Dienstleister Mitte',
      tr: 'Berlin D2C mağaza, Berlin SaaS demo, Mitte yerel hizmet',
      en: 'D2C shop Berlin, SaaS demo Berlin, local service Mitte',
    },
    angle: {
      de: 'Berlin mischt internationale Marken und sehr lokale Nachfrage. Eine Kampagne für ganz Berlin ohne Bezirk ist entweder zu teuer oder zu unscharf. Wir trennen Markenaufbau auf YouTube und Meta von Suchkampagnen, die einen Bezirk und eine Leistung nennen.',
      tr: 'Berlin uluslararası markalarla çok yerel talebi aynı anda taşır. İlçesiz bir Berlin kampanyası ya pahalı ya da bulanıktır. YouTube ve Meta’daki marka kurulumunu, ilçe ve hizmet söyleyen arama kampanyalarından ayırırız.',
      en: 'Berlin mixes international brands and very local demand. A campaign for all of Berlin with no borough is either too expensive or too vague. We separate brand building on YouTube and Meta from search campaigns that name a borough and a service.',
    },
    sectors: {
      de: [
        ['Start-ups und SaaS', 'Der Klick muss eine Demo oder ein Trial sein. Wir schließen Karriere-Begriffe aus und werten nur qualifizierte Anmeldungen.'],
        ['D2C-Marken', 'Berlin ist ein teurer Testmarkt. Kreative werden gegen echte Käufe gerechnet, nicht gegen Video-Aufrufe ohne Warenkorb.'],
        ['Lokale Dienstleister', 'Mitte und Prenzlauer Berg haben andere Suchpreise als der Außenbezirk. Der Radius folgt der echten Anfahrt, nicht der Stadtgrenze.'],
      ],
      tr: [
        ['Girişim ve SaaS', 'Tıklama demo veya deneme olmalıdır. Kariyer kelimelerini kapatır, yalnızca nitelikli kaydı sayarız.'],
        ['D2C markalar', 'Berlin pahalı bir test pazarıdır. Kreatifler, sepetsiz video izlenmesine değil gerçek satın almaya göre değerlendirilir.'],
        ['Yerel hizmet', 'Mitte ve Prenzlauer Berg’in arama fiyatı dış ilçeden farklıdır. Yarıçap şehir sınırına değil gerçek yolculuğa uyar.'],
      ],
      en: [
        ['Startups and SaaS', 'The click has to be a demo or a trial. We exclude careers terms and count only qualified signups.'],
        ['D2C brands', 'Berlin is an expensive test market. Creative is judged on real purchases, not on video views without a basket.'],
        ['Local services', 'Mitte and Prenzlauer Berg have different search prices from the outer boroughs. The radius follows the real journey, not the city border.'],
      ],
    },
  },
  hamburg: {
    name: { de: 'Hamburg', tr: 'Hamburg', en: 'Hamburg' },
    areas: {
      de: 'HafenCity, Altona, Harburg und das Hamburger Umland',
      tr: 'HafenCity, Altona, Harburg ve Hamburg çevresi',
      en: 'HafenCity, Altona, Harburg and the Hamburg suburbs',
    },
    queries: {
      de: 'Online Shop Hamburg, Logistik B2B Hamburg, Kanzlei HafenCity',
      tr: 'Hamburg online mağaza, Hamburg lojistik B2B, HafenCity hukuk bürosu',
      en: 'online shop Hamburg, B2B logistics Hamburg, law firm HafenCity',
    },
    angle: {
      de: 'Hamburg verkauft Handel und Logistik. Shopping-Kampagnen ohne Deckungsbeitrag und B2B-Suche ohne Firmengröße im Formular erzeugen Aktivität ohne Auftrag. Wir trennen Privatkunden-Shopping von Anfragen, die eine Spedition oder Kanzlei wirklich annehmen kann.',
      tr: 'Hamburg ticaret ve lojistik satar. Katkı payı olmayan Shopping ile formda şirket büyüklüğü sormayan B2B araması, siparişsiz hareket üretir. Bireysel alışverişi, bir lojistik firmasının veya hukuk bürosunun gerçekten alabileceği talepten ayırırız.',
      en: 'Hamburg sells trade and logistics. Shopping without contribution margin, and B2B search that never asks company size, creates activity without a job. We separate consumer shopping from enquiries a freight firm or a law practice can actually take.',
    },
    sectors: {
      de: [
        ['E-Commerce und Handel', 'Der Hafen ist kein Grund, ganz Deutschland zu bewerben, wenn die Marge nur Norddeutschland trägt. Das Liefergebiet steht im Feed.'],
        ['Logistik und Transport', 'Suchende unterscheiden Stückgut, Lager und Express. Jede Leistung bekommt eigene Keywords und eine eigene Landingpage.'],
        ['Kanzleien und Kliniken', 'HafenCity und Altona sind unterschiedliche Einzugsgebiete. Die Anzeige nennt den Stadtteil, den die Mandanten wirklich erreichen.'],
      ],
      tr: [
        ['E-ticaret ve ticaret', 'Marj yalnızca kuzey Almanya’yı taşıyorsa liman, tüm ülkeyi reklamlamak için gerekçe değildir. Teslimat bölgesi akışta yazar.'],
        ['Lojistik ve taşıma', 'Arayan parsiyel, depo ve ekspres ayrımı yapar. Her hizmetin kendi kelimesi ve sayfası vardır.'],
        ['Hukuk bürosu ve klinikler', 'HafenCity ve Altona farklı çekim alanlarıdır. Reklam, danışanların gerçekten geldiği semti söyler.'],
      ],
      en: [
        ['E-commerce and trade', 'The port is not a reason to advertise all of Germany if the margin only carries northern Germany. The delivery area sits in the feed.'],
        ['Logistics and transport', 'Searchers distinguish groupage, warehousing and express. Each service gets its own keywords and landing page.'],
        ['Law firms and clinics', 'HafenCity and Altona are different catchments. The ad names the district clients can actually reach.'],
      ],
    },
  },
  nuernberg: {
    name: { de: 'Nürnberg', tr: 'Nürnberg', en: 'Nuremberg' },
    areas: {
      de: 'Fürth, Erlangen, Schwabach und die Metropolregion',
      tr: 'Fürth, Erlangen, Schwabach ve metropol bölgesi',
      en: 'Fürth, Erlangen, Schwabach and the metropolitan region',
    },
    queries: {
      de: 'Handwerk Nürnberg, IT Dienstleister Erlangen, Mittelstand Fürth Leads',
      tr: 'Nürnberg zanaat, Erlangen BT hizmeti, Fürth KOBİ müşteri',
      en: 'trades Nuremberg, IT services Erlangen, mid-market leads Fürth',
    },
    angle: {
      de: 'Nürnberg, Fürth und Erlangen werden oft als eine Stadt gebucht und dann als three getrennte Suchintentionen verloren. Wer in Erlangen ein Rechenzentrum sucht, klickt nicht auf eine reine Nürnberg-Anzeige fürs Handwerk. Drei Städte, drei Anzeigen, ein gemeinsames Tracking.',
      tr: 'Nürnberg, Fürth ve Erlangen çoğu zaman tek şehir gibi satın alınır ve sonra üç ayrı niyet olarak kaybedilir. Erlangen’de veri merkezi arayan, zanaat için yazılmış saf bir Nürnberg reklamına tıklamaz. Üç şehir, üç reklam, ortak ölçüm.',
      en: 'Nuremberg, Fürth and Erlangen are often bought as one city and then lost as three search intents. Someone looking for a data centre in Erlangen does not click a pure Nuremberg trades ad. Three cities, three ads, one tracking setup.',
    },
    sectors: {
      de: [
        ['Mittelstand und Industrie', 'Anfragen sollen Projektvolumen nennen. Sonst füllt das Formular den Kalender mit Gesprächen ohne Budget.'],
        ['IT rund um Erlangen', 'Technische Suchen getrennt von lokalen Handwerksbegriffen halten den CPC ehrlich.'],
        ['Handwerk in Fürth und Schwabach', 'Notfall-Suchen am selben Tag brauchen ein höheres Gebot und eine Telefonnummer über der Falz.'],
      ],
      tr: [
        ['KOBİ ve sanayi', 'Talep proje hacmini sormalıdır. Aksi halde form, bütçesiz görüşmelerle takvimi doldurur.'],
        ['Erlangen çevresi BT', 'Teknik aramayı yerel zanaat kelimelerinden ayırmak TBM’yi dürüst tutar.'],
        ['Fürth ve Schwabach zanaat', 'Aynı gün acil aramalar daha yüksek teklif ve sayfanın üstünde telefon ister.'],
      ],
      en: [
        ['Mid-market and industry', 'Enquiries should ask for project size. Otherwise the form fills the calendar with calls that have no budget.'],
        ['IT around Erlangen', 'Keeping technical searches apart from local trades terms keeps the CPC honest.'],
        ['Trades in Fürth and Schwabach', 'Same-day emergency searches need a higher bid and a phone number above the fold.'],
      ],
    },
  },
  dortmund: {
    name: { de: 'Dortmund', tr: 'Dortmund', en: 'Dortmund' },
    areas: {
      de: 'Hörde, Bochum, Unna und das östliche Ruhrgebiet',
      tr: 'Hörde, Bochum, Unna ve doğu Ruhr bölgesi',
      en: 'Hörde, Bochum, Unna and the eastern Ruhr',
    },
    queries: {
      de: 'Sanierung Dortmund, Dachdecker Hörde, B2B Dienstleister Ruhrgebiet',
      tr: 'Dortmund tadilat, Hörde çatı, Ruhr B2B hizmet',
      en: 'renovation Dortmund, roofer Hörde, B2B services Ruhr',
    },
    angle: {
      de: 'Im Ruhrgebiet überschneiden sich Einsatzradien. Eine Dortmunder Sanierung, die auch in Bochum arbeitet, braucht zwei Anzeigen mit zwei Telefonstrecken. Sonst zahlt Dortmund für einen Auftrag, den das Team in Bochum nicht am selben Tag schafft.',
      tr: 'Ruhr’da hizmet yarıçapları üst üste biner. Bochum’da da çalışan bir Dortmund tadilat firması iki reklam ve iki telefon hattı ister. Aksi halde Dortmund, ekibin aynı gün yetişemeyeceği bir iş için öder.',
      en: 'In the Ruhr, service radii overlap. A Dortmund renovation firm that also works in Bochum needs two ads and two phone paths. Otherwise Dortmund pays for a job the Bochum crew cannot finish the same day.',
    },
    sectors: {
      de: [
        ['Sanierung und Handwerk', 'Notfallbegriffe getrennt von Planungsbegriffen. Der eine will heute einen Monteur, der andere holt drei Angebote ein.'],
        ['B2B im Ruhrgebiet', 'Firmen suchen mit „in der Nähe“ plus Leistung. Der Standort in der Anzeige muss der echte Hof sein, nicht die größte Stadt im Umkreis.'],
        ['Lokaler Handel', 'Abholung in Hörde ist ein anderes Versprechen als Versand. Die Anzeige darf nur das sagen, was der Laden hält.'],
      ],
      tr: [
        ['Tadilat ve zanaat', 'Acil kelimeler planlama kelimelerinden ayrıdır. Biri bugün usta ister, diğeri üç teklif toplar.'],
        ['Ruhr’da B2B', 'Firmalar „yakınımda“ artı hizmet arar. Reklamdaki konum gerçek depo olmalı, çevredeki en büyük şehir değil.'],
        ['Yerel ticaret', 'Hörde’den teslim almak, kargodan farklı bir vaattir. Reklam yalnızca dükkânın tuttuğu sözü söyler.'],
      ],
      en: [
        ['Renovation and trades', 'Emergency terms stay apart from planning terms. One searcher wants a fitter today, the other is collecting three quotes.'],
        ['B2B in the Ruhr', 'Companies search “near me” plus a service. The location in the ad has to be the real yard, not the biggest city nearby.'],
        ['Local retail', 'Collection in Hörde is a different promise from shipping. The ad may only say what the shop can keep.'],
      ],
    },
  },
  leipzig: {
    name: { de: 'Leipzig', tr: 'Leipzig', en: 'Leipzig' },
    areas: {
      de: 'Plagwitz, Halle, Dresden und Sachsen',
      tr: 'Plagwitz, Halle, Dresden ve Saksonya',
      en: 'Plagwitz, Halle, Dresden and Saxony',
    },
    queries: {
      de: 'E-Commerce Leipzig, Scale-up Dresden, lokaler Service Plagwitz',
      tr: 'Leipzig e-ticaret, Dresden scale-up, Plagwitz yerel hizmet',
      en: 'e-commerce Leipzig, scale-up Dresden, local service Plagwitz',
    },
    angle: {
      de: 'Leipzig und Dresden teilen sich Sachsen, aber nicht die Suchpreise. Ein Shop, der aus Leipzig versendet, sollte Dresden nicht mit denselben Geboten bewerben, wenn Retoure und Lieferzeit dort anders ausfallen. Wir rechnen das Gebiet getrennt.',
      tr: 'Leipzig ve Dresden Saksonya’yı paylaşır, arama fiyatını paylaşmaz. Leipzig’den kargolayan bir mağaza, iade ve teslimat orada farklıysa Dresden’e aynı teklifle çıkmamalıdır. Bölgeyi ayrı hesaplarız.',
      en: 'Leipzig and Dresden share Saxony, not the search prices. A shop shipping from Leipzig should not bid the same on Dresden if returns and delivery time differ there. We calculate the area separately.',
    },
    sectors: {
      de: [
        ['E-Commerce', 'Neue Marken testen in Leipzig günstiger als in München, verlieren aber bei unsauberem Feed genauso Geld. Die ersten 30 Tage gehören der Marge, nicht dem Umsatzrekord.'],
        ['Scale-ups', 'Wachstumswerbung ohne Server-Side-Tracking bewertet den falschen Kanal. Wir schließen die Messung, bevor das Budget steigt.'],
        ['Lokale Betriebe in Plagwitz und Halle', 'Zwei Städte in einer Anzeigengruppe vermischen Öffnungszeiten und Anfahrt. Jede Stadt bekommt die eigene Zeile.'],
      ],
      tr: [
        ['E-ticaret', 'Yeni markalar Leipzig’de Münih’ten ucuz test eder, kirli akışta aynı parayı kaybeder. İlk 30 gün ciro rekoruna değil marja aittir.'],
        ['Scale-up', 'Sunucu tarafı ölçüm olmayan büyüme reklamı yanlış kanalı ödüllendirir. Bütçe artmadan ölçümü kapatırız.'],
        ['Plagwitz ve Halle’deki işletmeler', 'Tek reklam grubundaki iki şehir, çalışma saati ve yolu karıştırır. Her şehrin kendi satırı vardır.'],
      ],
      en: [
        ['E-commerce', 'New brands test more cheaply in Leipzig than in Munich, and still lose money on a dirty feed. The first 30 days belong to margin, not to a revenue record.'],
        ['Scale-ups', 'Growth ads without server-side tracking reward the wrong channel. We close the measurement before the budget rises.'],
        ['Local businesses in Plagwitz and Halle', 'Two cities in one ad group mix opening hours and travel. Each city gets its own line.'],
      ],
    },
  },
  bonn: {
    name: { de: 'Bonn', tr: 'Bonn', en: 'Bonn' },
    areas: {
      de: 'Sankt Augustin, Siegburg, Troisdorf und den Rhein-Sieg-Kreis',
      tr: 'Sankt Augustin, Siegburg, Troisdorf ve Rhein-Sieg bölgesi',
      en: 'Sankt Augustin, Siegburg, Troisdorf and the Rhein-Sieg district',
    },
    queries: {
      de: 'Steuerberater Bonn, Zahnarzt Bad Godesberg, B2B Dienstleister Siegburg',
      tr: 'Bonn vergi müşaviri, Bad Godesberg diş, Siegburg B2B hizmet',
      en: 'tax advisor Bonn, dentist Bad Godesberg, B2B services Siegburg',
    },
    angle: {
      de: 'Bonn wird oft als Anhängsel von Köln gebucht. Mandanten aus Bad Godesberg und Firmen aus Siegburg suchen aber mit eigenem Ortsnamen. Eine Köln-Kampagne mit Radius bis Bonn bezahlt den teureren Markt und verfehlt die genaue Suche. Bonn, Sankt Augustin und Troisdorf laufen getrennt.',
      tr: 'Bonn çoğu zaman Köln’ün eklentisi gibi satın alınır. Bad Godesberg’deki danışan ve Siegburg’daki firma ise kendi ilçe adıyla arar. Bonn’a uzanan bir Köln kampanyası daha pahalı pazarı öder ve kesin aramayı kaçırır. Bonn, Sankt Augustin ve Troisdorf ayrı yürür.',
      en: 'Bonn is often bought as an add-on to Cologne. Clients in Bad Godesberg and firms in Siegburg search with their own place name. A Cologne campaign with a radius into Bonn pays the more expensive market and misses the exact query. Bonn, Sankt Augustin and Troisdorf run separately.',
    },
    sectors: {
      de: [
        ['Kanzleien und Beratung', 'Die Suche nennt das Rechtsgebiet und Bonn oder Bad Godesberg. Allgemeine „Anwalt in der Nähe“-Begriffe werden begrenzt, weil sie den falschen Mandanten bringen.'],
        ['Praxen im Rhein-Sieg-Kreis', 'Siegburg und Troisdorf haben eigene Anfahrten. Die Anzeige nennt den Standort, an dem der Termin wirklich stattfindet.'],
        ['B2B-Dienstleister', 'Organisationen in Bonn fragen nach Referenzen und Festpreis. Die Landingpage beantwortet beides vor dem Formular.'],
      ],
      tr: [
        ['Hukuk ve danışmanlık', 'Arama hukuk dalını ve Bonn ya da Bad Godesberg’i söyler. Genel „yakınımda avukat“ terimleri yanlış danışanı getirdiği için sınırlanır.'],
        ['Rhein-Sieg muayenehaneleri', 'Siegburg ve Troisdorf’un yolu farklıdır. Reklam, randevunun gerçekten olduğu yeri söyler.'],
        ['B2B hizmet', 'Bonn’daki kurumlar referans ve sabit ücret sorar. İniş sayfası ikisini de formdan önce cevaplar.'],
      ],
      en: [
        ['Law firms and consulting', 'The search names the practice area and Bonn or Bad Godesberg. Broad “lawyer near me” terms are limited because they bring the wrong client.'],
        ['Practices in Rhein-Sieg', 'Siegburg and Troisdorf mean different journeys. The ad names the site where the appointment actually happens.'],
        ['B2B services', 'Organisations in Bonn ask for proof and a flat fee. The landing page answers both before the form.'],
      ],
    },
  },
  essen: {
    name: { de: 'Essen', tr: 'Essen', en: 'Essen' },
    areas: {
      de: 'Rüttenscheid, Mülheim, Oberhausen und das mittlere Ruhrgebiet',
      tr: 'Rüttenscheid, Mülheim, Oberhausen ve orta Ruhr',
      en: 'Rüttenscheid, Mülheim, Oberhausen and the central Ruhr',
    },
    queries: {
      de: 'Industrie Essen, Sanierung Rüttenscheid, Handwerk Mülheim',
      tr: 'Essen sanayi, Rüttenscheid tadilat, Mülheim zanaat',
      en: 'industry Essen, renovation Rüttenscheid, trades Mülheim',
    },
    angle: {
      de: 'Essen ist das wirtschaftliche Zentrum des Ruhrgebiets, aber Mülheim und Oberhausen suchen mit eigenem Namen. Wer nur „Essen“ kauft, fehlt auf der Suche, die den Auftrag tatsächlich auslöst. Drei Städte bleiben in der Kampagne sichtbar, mit gemeinsamem Conversion-Tracking.',
      tr: 'Essen Ruhr’un ekonomik merkezidir, ama Mülheim ve Oberhausen kendi adıyla arar. Yalnızca „Essen“ satın alan, işi gerçekten başlatan aramada görünmez. Üç şehir kampanyada görünür kalır, dönüşüm ölçümü ortaktır.',
      en: 'Essen is the economic centre of the Ruhr, but Mülheim and Oberhausen search under their own names. Buying only “Essen” misses the query that actually starts the job. Three cities stay visible in the campaign, with shared conversion tracking.',
    },
    sectors: {
      de: [
        ['Industrie und Energie', 'Suchbegriffe sind spezifiziert. Breite Branchenwörter ziehen Bewerber statt Einkauf.'],
        ['Handwerk und Sanierung', 'Rüttenscheid und Werden haben unterschiedliche Auftragslagen. Der Radius folgt der Monteur-Route.'],
        ['Handel', 'Abholung und Versand werden in der Anzeige nicht vermischt, sonst steigt die Absprungrate nach dem Klick.'],
      ],
      tr: [
        ['Sanayi ve enerji', 'Arama terimleri spesifiktir. Geniş sektör kelimeleri satın alma yerine aday getirir.'],
        ['Zanaat ve tadilat', 'Rüttenscheid ve Werden’in iş yoğunluğu farklıdır. Yarıçap ustanın rotasını izler.'],
        ['Ticaret', 'Teslim alma ve kargo reklamda karışmaz; karışırsa tıklama sonrası hemen çıkış artar.'],
      ],
      en: [
        ['Industry and energy', 'Queries are specific. Broad sector words attract applicants instead of purchasing.'],
        ['Trades and renovation', 'Rüttenscheid and Werden have different job patterns. The radius follows the fitter’s route.'],
        ['Retail', 'Collection and shipping are not mixed in the ad, or the bounce rate rises after the click.'],
      ],
    },
  },
  duisburg: {
    name: { de: 'Duisburg', tr: 'Duisburg', en: 'Duisburg' },
    areas: {
      de: 'den Innenhafen, Moers, Dinslaken und Krefeld',
      tr: 'İç liman, Moers, Dinslaken ve Krefeld',
      en: 'the inner harbour, Moers, Dinslaken and Krefeld',
    },
    queries: {
      de: 'Logistik Duisburg, Spedition Moers, Handwerk Krefeld',
      tr: 'Duisburg lojistik, Moers nakliye, Krefeld zanaat',
      en: 'logistics Duisburg, freight Moers, trades Krefeld',
    },
    angle: {
      de: 'Duisburg lebt vom Hafen, die Suche lebt von Nachbarstädten. Eine Spedition in Duisburg wird in Moers und Krefeld unter anderen Begriffen gefunden. Wir legen für jedes Einsatzgebiet eine Anzeigengruppe an und schließen Suchen aus, die einen anderen Hafen oder einen Job meinen.',
      tr: 'Duisburg limandan yaşar, arama ise komşu şehirlerden. Duisburg’daki bir nakliye firması Moers ve Krefeld’de başka kelimelerle bulunur. Her hizmet bölgesine bir reklam grubu açar, başka liman veya iş ilanı aramalarını kapatırız.',
      en: 'Duisburg lives off the port, search lives off the neighbouring towns. A freight firm in Duisburg is found in Moers and Krefeld under different terms. We build an ad group per service area and exclude searches that mean another port or a job.',
    },
    sectors: {
      de: [
        ['Logistik', 'Stückgut, Lager und Zoll sind drei Angebote. Eine Sammelanzeige macht den Klick unverbindlich.'],
        ['Handwerk am Niederrhein', 'Moers und Dinslaken erwarten eine erreichbare Nummer und einen Termin am selben oder nächsten Tag.'],
        ['Handel und Gewerbe', 'Der Innenhafen ist ein Standort, kein automatisches Einzugsgebiet für ganz NRW.'],
      ],
      tr: [
        ['Lojistik', 'Parsiyel, depo ve gümrük üç ayrı tekliftir. Toplu reklam tıklamayı bağlayıcı olmaktan çıkarır.'],
        ['Aşağı Ren zanaatı', 'Moers ve Dinslaken ulaşılır bir numara ve aynı ya da ertesi gün randevu bekler.'],
        ['Ticaret', 'İç liman bir konumdur, tüm NRW için otomatik bir hizmet alanı değildir.'],
      ],
      en: [
        ['Logistics', 'Groupage, warehousing and customs are three offers. One combined ad makes the click non-binding.'],
        ['Trades on the Lower Rhine', 'Moers and Dinslaken expect a reachable number and a slot the same day or the next.'],
        ['Trade and commercial services', 'The inner harbour is a location, not an automatic catchment for all of NRW.'],
      ],
    },
  },
  hannover: {
    name: { de: 'Hannover', tr: 'Hannover', en: 'Hanover' },
    areas: {
      de: 'Mitte, Garbsen, Langenhagen und die Region Hannover',
      tr: 'Mitte, Garbsen, Langenhagen ve Hannover bölgesi',
      en: 'Mitte, Garbsen, Langenhagen and the Hanover region',
    },
    queries: {
      de: 'Messe Nachlauf Hannover, B2B Leads Garbsen, Shop Langenhagen',
      tr: 'Hannover fuar sonrası talep, Garbsen B2B, Langenhagen mağaza',
      en: 'post-fair leads Hanover, B2B Garbsen, shop Langenhagen',
    },
    angle: {
      de: 'Hannover hat zwei Kalender: den Messekalender und den Alltag der Region. Wer das ganze Jahr mit Messe-Geboten bietet, verbrennt Budget in leeren Wochen. Wir schalten Messe-Begriffe zeitlich und lassen die regionale Suche nach Garbsen und Langenhagen durchlaufen.',
      tr: 'Hannover’in iki takvimi vardır: fuar takvimi ve bölgenin günlük işi. Tüm yılı fuar teklifiyle açan, boş haftalarda bütçe yakar. Fuar kelimelerini tarihe bağlar, Garbsen ve Langenhagen aramasını sürekli bırakırız.',
      en: 'Hanover has two calendars: the trade-fair calendar and the everyday business of the region. Bidding fair terms all year burns budget in empty weeks. We schedule fair keywords and let the regional search for Garbsen and Langenhagen run continuously.',
    },
    sectors: {
      de: [
        ['B2B und Messen', 'Nach der Messe suchen Entscheider den Anbieter noch einmal mit Produktnamen. Diese Begriffe haben ein eigenes Budget.'],
        ['E-Commerce', 'Versand aus Hannover ist ein Vorteil nur, wenn Lieferzeit in der Anzeige steht und der Feed sie halten kann.'],
        ['Kanzleien und Praxen', 'Garbsen und Langenhagen sind eigene Zielgebiete mit eigener Anfahrt, nicht ein Radius um den Hauptbahnhof.'],
      ],
      tr: [
        ['B2B ve fuarlar', 'Fuar sonrası karar verici, sağlayıcıyı ürün adıyla yeniden arar. Bu kelimelerin ayrı bütçesi vardır.'],
        ['E-ticaret', 'Hannover’den kargo, teslimat süresi reklamda yazıyorsa ve akış bunu tutuyorsa avantajdır.'],
        ['Hukuk bürosu ve muayenehane', 'Garbsen ve Langenhagen, ana garaj çevresindeki bir yarıçap değil, kendi yolu olan hedef bölgelerdir.'],
      ],
      en: [
        ['B2B and trade fairs', 'After the fair, buyers search the provider again by product name. Those terms have their own budget.'],
        ['E-commerce', 'Shipping from Hanover is an advantage only if delivery time is in the ad and the feed can keep it.'],
        ['Law firms and practices', 'Garbsen and Langenhagen are their own target areas with their own journey, not a radius around the central station.'],
      ],
    },
  },
  mannheim: {
    name: { de: 'Mannheim', tr: 'Mannheim', en: 'Mannheim' },
    areas: {
      de: 'Ludwigshafen, Heidelberg, Weinheim und die Rhein-Neckar-Region',
      tr: 'Ludwigshafen, Heidelberg, Weinheim ve Rhein-Neckar',
      en: 'Ludwigshafen, Heidelberg, Weinheim and the Rhine-Neckar region',
    },
    queries: {
      de: 'Pharma Marketing Mannheim, Mittelstand Ludwigshafen, Praxis Heidelberg',
      tr: 'Mannheim ilaç pazarlama, Ludwigshafen KOBİ, Heidelberg muayenehane',
      en: 'pharma marketing Mannheim, mid-market Ludwigshafen, practice Heidelberg',
    },
    angle: {
      de: 'Die Rhein-Neckar-Region liegt in drei Städten und zwei Bundesländern. Eine Mannheim-Anzeige ohne Ludwigshafen und Heidelberg verliert die Suche, die den Rhein überquert. Wir benennen die Stadt in der Anzeige genau so, wie sie getippt wird.',
      tr: 'Rhein-Neckar üç şehir ve iki eyalete yayılır. Ludwigshafen ve Heidelberg’siz bir Mannheim reklamı, Ren’i geçen aramayı kaybeder. Reklamda şehri, yazıldığı gibi adlandırırız.',
      en: 'The Rhine-Neckar region sits in three cities and two states. A Mannheim ad without Ludwigshafen and Heidelberg loses the search that crosses the river. We name the city in the ad exactly as it is typed.',
    },
    sectors: {
      de: [
        ['Pharma und Industrie', 'Compliance-sensible Begriffe werden eng gefasst. Informationssuche ohne Kaufabsicht wird ausgeschlossenen Keywords übergeben.'],
        ['Mittelstand', 'Ludwigshafen und Mannheim teilen sich Fachkräfte, nicht automatisch dasselbe Einzugsgebiet für Endkunden.'],
        ['Praxen in Heidelberg', 'Patienten suchen den Campus und die Altstadt getrennt. Die Anzeige folgt der Adresse der Praxis.'],
      ],
      tr: [
        ['İlaç ve sanayi', 'Uyum açısından hassas kelimeler dar tutulur. Satın alma niyeti olmayan bilgi araması negatif kelimeye gider.'],
        ['KOBİ', 'Ludwigshafen ve Mannheim nitelikli eleği paylaşır; son müşteri çekim alanını otomatik paylaşmaz.'],
        ['Heidelberg muayenehaneleri', 'Hastalar kampüs ile eski kenti ayrı arar. Reklam muayenehanenin adresini izler.'],
      ],
      en: [
        ['Pharma and industry', 'Compliance-sensitive terms stay tight. Information searches without buying intent go to negative keywords.'],
        ['Mid-market', 'Ludwigshafen and Mannheim share skilled staff, not automatically the same catchment for end customers.'],
        ['Practices in Heidelberg', 'Patients search the campus and the old town separately. The ad follows the practice address.'],
      ],
    },
  },
  wiesbaden: {
    name: { de: 'Wiesbaden', tr: 'Wiesbaden', en: 'Wiesbaden' },
    areas: {
      de: 'Mainz, Taunusstein, Eltville und den Rheingau',
      tr: 'Mainz, Taunusstein, Eltville ve Rheingau',
      en: 'Mainz, Taunusstein, Eltville and the Rheingau',
    },
    queries: {
      de: 'Anwalt Wiesbaden, Privatklinik Mainz, Beratung Taunusstein',
      tr: 'Wiesbaden avukat, Mainz özel klinik, Taunusstein danışmanlık',
      en: 'lawyer Wiesbaden, private clinic Mainz, consulting Taunusstein',
    },
    angle: {
      de: 'Wiesbaden und Mainz trennt der Rhein und ein anderes Bundesland. Trotzdem suchen viele Mandanten beide Städte. Wer nur eine Stadt bucht, fehlt auf der anderen Seite der Brücke. Zwei Konten-Strukturen, ein Bericht, keine vermischten Telefonnummern.',
      tr: 'Wiesbaden ile Mainz’ı Ren ve başka bir eyalet ayırır. Yine de birçok danışan iki şehri birden arar. Yalnızca bir şehri satın alan, köprünün diğer yakasında yoktur. İki hesap yapısı, tek rapor, karışmayan telefon numaraları.',
      en: 'The Rhine and a state border separate Wiesbaden and Mainz. Many clients still search both cities. Booking only one city means missing the other side of the bridge. Two account structures, one report, no mixed phone numbers.',
    },
    sectors: {
      de: [
        ['Kanzleien', 'Fachgebiet plus Wiesbaden oder Mainz. Allgemeine Rechtsberatungsbegriffe werden gekappt, sobald sie Mandanten ohne Honorarrahmen bringen.'],
        ['Ärzte und Privatkliniken', 'Der Rheingau sucht anders als die Wiesbadener Innenstadt. Die Anzeige nennt den Standort der Sprechstunde.'],
        ['Beratung und Finanzen', 'Taunusstein und Eltville sind kaufkräftige Randlagen. Sie bekommen eigene Anzeigen, nicht einen Rest-Radius.'],
      ],
      tr: [
        ['Hukuk büroları', 'Uzmanlık artı Wiesbaden veya Mainz. Ücret çerçevesi olmayan danışan getiren genel hukuk terimleri kısılır.'],
        ['Hekim ve özel klinikler', 'Rheingau, Wiesbaden merkezinden farklı arar. Reklam muayene yerini söyler.'],
        ['Danışmanlık ve finans', 'Taunusstein ve Eltville alım gücü yüksek kenar bölgelerdir. Kalan yarıçap değil, kendi reklamlarını alırlar.'],
      ],
      en: [
        ['Law firms', 'Practice area plus Wiesbaden or Mainz. Broad legal terms are cut once they bring clients without a fee frame.'],
        ['Doctors and private clinics', 'The Rheingau searches differently from central Wiesbaden. The ad names where the consultation happens.'],
        ['Consulting and finance', 'Taunusstein and Eltville are high-income edges. They get their own ads, not a leftover radius.'],
      ],
    },
  },
  karlsruhe: {
    name: { de: 'Karlsruhe', tr: 'Karlsruhe', en: 'Karlsruhe' },
    areas: {
      de: 'Ettlingen, Rastatt, Bruchsal und Pforzheim',
      tr: 'Ettlingen, Rastatt, Bruchsal ve Pforzheim',
      en: 'Ettlingen, Rastatt, Bruchsal and Pforzheim',
    },
    queries: {
      de: 'Software Karlsruhe, IT Systemhaus Ettlingen, B2B Leads Pforzheim',
      tr: 'Karlsruhe yazılım, Ettlingen sistem evi, Pforzheim B2B talep',
      en: 'software Karlsruhe, IT firm Ettlingen, B2B leads Pforzheim',
    },
    angle: {
      de: 'Karlsruhe sucht IT-Leistungen mit Produkt- und Problemnamen, Pforzheim und Rastatt oft mit klassischem Gewerbe. Ein Konto für „die Region“ vermischt einen SaaS-Demo-Klick mit einem Handwerker-Notruf. Die Kampagnen bleiben getrennt, das Reporting zeigt beide.',
      tr: 'Karlsruhe BT hizmetini ürün ve problem adıyla arar; Pforzheim ve Rastatt çoğu zaman klasik esnafla. „Bölge“ için tek hesap, bir SaaS demo tıklamasını bir usta acil çağrısıyla karıştırır. Kampanyalar ayrı kalır, rapor ikisini de gösterir.',
      en: 'Karlsruhe searches IT services by product and problem name, while Pforzheim and Rastatt often search classic trades. One account for “the region” mixes a SaaS demo click with an emergency trades call. The campaigns stay separate, the report shows both.',
    },
    sectors: {
      de: [
        ['IT und Software', 'Demo, Trial und „Alternative zu“ sind die Begriffe mit Kaufabsicht. Jobtitel werden ausgeschlossen.'],
        ['B2B-Dienstleister', 'Ettlingen und Bruchsal nennen in der Anzeige den echten Standort, nicht nur Karlsruhe als größere Marke.'],
        ['Handwerk in Rastatt und Pforzheim', 'Eigene Gebote, eigene Telefonaktion, weil der Einsatzradius nicht bis in die Karlsruher Innenstadt reicht.'],
      ],
      tr: [
        ['BT ve yazılım', 'Demo, deneme ve „alternatifi“ satın alma niyetli kelimelerdir. İş unvanları dışlanır.'],
        ['B2B hizmet', 'Ettlingen ve Bruchsal reklamda gerçek konumu söyler, yalnızca daha büyük marka olarak Karlsruhe’yi değil.'],
        ['Rastatt ve Pforzheim zanaatı', 'Hizmet yarıçapı Karlsruhe merkezine uzanmadığı için kendi teklifi ve telefon aksiyonu vardır.'],
      ],
      en: [
        ['IT and software', 'Demo, trial and “alternative to” are the terms with buying intent. Job titles are excluded.'],
        ['B2B services', 'Ettlingen and Bruchsal name the real location in the ad, not only Karlsruhe as the larger brand.'],
        ['Trades in Rastatt and Pforzheim', 'Their own bids and call actions, because the service radius does not reach central Karlsruhe.'],
      ],
    },
  },
  muenster: {
    name: { de: 'Münster', tr: 'Münster', en: 'Münster' },
    areas: {
      de: 'Gievenbeck, Greven, Warendorf und das Münsterland',
      tr: 'Gievenbeck, Greven, Warendorf ve Münsterland',
      en: 'Gievenbeck, Greven, Warendorf and the Münsterland',
    },
    queries: {
      de: 'Klinik Münster, Shop Gievenbeck, Beratung Warendorf',
      tr: 'Münster klinik, Gievenbeck mağaza, Warendorf danışmanlık',
      en: 'clinic Münster, shop Gievenbeck, consulting Warendorf',
    },
    angle: {
      de: 'Münster hat eine dichte Innenstadt und ein weites Münsterland. Dieselbe Anzeige für die Prinzipalmarkt-Lage und für Warendorf verspricht eine Anfahrt, die der Betrieb nicht hält. Wir staffeln Gebote nach echter Fahrzeit und schreiben den Ort in die erste Zeile der Anzeige.',
      tr: 'Münster’in sıkı bir merkezi ve geniş bir Münsterland’ı vardır. Prinzipalmarkt ile Warendorf için aynı reklam, işletmenin tutamayacağı bir yol vaat eder. Teklifleri gerçek sürüş süresine göre kademeler, yeri reklamın ilk satırına yazarız.',
      en: 'Münster has a dense centre and a wide Münsterland. The same ad for the Prinzipalmarkt and for Warendorf promises a journey the business cannot keep. We tier bids by real driving time and put the place in the first line of the ad.',
    },
    sectors: {
      de: [
        ['Kliniken und Praxen', 'Patienten suchen Fachrichtung plus Münster oder Greven. Überregionale Klinikbegriffe ohne Ortsbindung werden begrenzt.'],
        ['E-Commerce und Bildung', 'Studierenden-Traffic ist günstig und oft ohne Kauf. Wir trennen Campus-Suchen von kaufbereiten Haushaltskunden.'],
        ['Beratung im Münsterland', 'Warendorf und Greven bleiben als eigene Zielorte sichtbar, statt in einem 40-Kilometer-Radius zu verschwinden.'],
      ],
      tr: [
        ['Klinik ve muayenehane', 'Hastalar branş artı Münster veya Greven arar. Yere bağlı olmayan bölge üstü klinik kelimeleri sınırlanır.'],
        ['E-ticaret ve eğitim', 'Öğrenci trafiği ucuzdur ve çoğu zaman satın almasızdır. Kampüs aramasını satın almaya hazır hane halkından ayırırız.'],
        ['Münsterland danışmanlığı', 'Warendorf ve Greven, 40 kilometrelik bir yarıçapta kaybolmak yerine kendi hedef yerleri olarak görünür kalır.'],
      ],
      en: [
        ['Clinics and practices', 'Patients search specialty plus Münster or Greven. Supra-regional clinic terms without a place are limited.'],
        ['E-commerce and education', 'Student traffic is cheap and often without a purchase. We separate campus searches from households ready to buy.'],
        ['Consulting in the Münsterland', 'Warendorf and Greven stay visible as their own targets instead of disappearing into a 40-kilometre radius.'],
      ],
    },
  },
}

const META = {
  frankfurt: {
    de: ['Google Ads Agentur Frankfurt am Main | Partner • Fixpreis', 'Zertifizierter Google Partner mit 17+ Jahren Erfahrung für Frankfurt am Main & Rhein-Main. B2B, Kanzleien & Handel mit planbarem Festpreis ohne Provision.'],
    tr: ['Frankfurt Google Ads Ajansı | Resmi Partner • Sabit Fiyat', 'Frankfurt, Dreieich ve Offenbach için sabit ücretli Google Ads ve Meta Ads yönetimi. 17+ yıllık resmi Google Partneri Salih Maral ile sıfır komisyon riski.'],
    en: ['Google Ads Agency Frankfurt am Main | Certified Partner', 'Official Google Partner with 17+ years experience for Frankfurt & Rhine-Main. High-converting B2B & E-Commerce Google Ads on a transparent monthly flat fee.'],
  },
  duesseldorf: {
    de: ['Google Ads Agentur Düsseldorf & Neuss | Salih Maral', 'Google Ads und Meta Ads für Düsseldorf, Neuss und Ratingen. Mode, Handel und B2B mit Festpreis-Betreuung statt Prozent vom Werbebudget.'],
    tr: ['Düsseldorf Google Ads Ajansı | Neuss | Salih Maral', 'Düsseldorf, Neuss ve Ratingen için sabit ücretli Google Ads ve Meta Ads. Moda, ticaret ve B2B aramaları ayrı reklam gruplarında yönetilir.'],
    en: ['Google Ads Agency Düsseldorf and Neuss | Salih Maral', 'Google Ads and Meta Ads for Düsseldorf, Neuss and Ratingen. Fashion, retail and B2B on a flat monthly fee, not a cut of ad spend.'],
  },
  koeln: {
    de: ['Google Ads Agentur Köln & Rheinland | Salih Maral', 'Performance Marketing für Köln, Ehrenfeld und den Weg nach Bonn. Google Ads, Meta Ads und lokale SEO-Signale zum planbaren Festpreis.'],
    tr: ['Köln Google Ads Ajansı | Rheinland | Salih Maral', 'Köln, Ehrenfeld ve Bonn hattı için sabit ücretli Google Ads ve Meta Ads. Mahalle aramaları genel şehir kelimesinden ayrı yönetilir.'],
    en: ['Google Ads Agency Cologne & Rhineland | Salih Maral', 'Performance marketing for Cologne, Ehrenfeld and the road to Bonn. Google Ads, Meta Ads and local signals on a predictable flat fee.'],
  },
  muenchen: {
    de: ['Google Ads Agentur München & Bayern | Salih Maral', 'Google Ads Betreuung in München, Schwabing und Augsburg. Tech, Premium-Handel und Kliniken mit getrennten Geboten und Festpreis.'],
    tr: ['Münih Google Ads Ajansı | Bavyera | Salih Maral', 'Münih, Schwabing ve Augsburg için sabit ücretli Google Ads. Teknoloji, premium ticaret ve klinikler ayrı tekliflerle yönetilir.'],
    en: ['Google Ads Agency Munich and Bavaria | Salih Maral', 'Google Ads for Munich, Schwabing and Augsburg. Tech, premium retail and clinics bid separately, billed on a flat monthly fee.'],
  },
  stuttgart: {
    de: ['Google Ads Agentur Stuttgart | B2B Mittelstand', 'B2B Google Ads für Stuttgart, Esslingen und Ludwigsburg. Maschinenbau und Mittelstand mit Festpreis, ohne Prozent vom Mediabudget.'],
    tr: ['Stuttgart Google Ads Ajansı | B2B Sanayi ve KOBİ', 'Stuttgart, Esslingen ve Ludwigsburg için sabit ücretli B2B Google Ads. Makine ve KOBİ aramaları teknik kelimelerle ayrılır.'],
    en: ['Google Ads Agency Stuttgart for B2B and Industry', 'B2B Google Ads for Stuttgart, Esslingen and Ludwigsburg. Engineering and mid-market accounts on a flat fee, not a percentage of media spend.'],
  },
  berlin: {
    de: ['Google Ads Agentur Berlin | Start-ups und D2C', 'Google Ads und Meta Ads in Berlin-Mitte, Kreuzberg und dem Speckgürtel. SaaS, D2C und lokale Dienste laufen getrennt, zum monatlichen Festpreis.'],
    tr: ['Berlin Google Ads Ajansı | Start-up, SaaS ve D2C', 'Berlin Mitte, Kreuzberg ve çevre ilçeler için sabit ücretli Google Ads ve Meta Ads. SaaS, D2C ve yerel hizmet ayrı kampanya olarak yürür.'],
    en: ['Google Ads Agency Berlin for Startups and D2C', 'Google Ads and Meta Ads in Mitte, Kreuzberg and outer Berlin. SaaS, D2C and local services run separately, on a monthly flat fee.'],
  },
  hamburg: {
    de: ['Google Ads Agentur Hamburg | Handel und Hafen', 'Google Shopping und Search für Hamburg, HafenCity und Altona. Handel und Logistik mit Festpreis-Betreuung und sauberem Feed.'],
    tr: ['Hamburg Google Ads Ajansı | Ticaret, Liman, Kuzey', 'Hamburg, HafenCity ve Altona için sabit ücretli Google Shopping ve arama reklamları. Ticaret ile lojistik talebi ayrı ölçülür.'],
    en: ['Google Ads Agency Hamburg for Trade and the Port', 'Google Shopping and search for Hamburg, HafenCity and Altona. Trade and logistics on a flat fee, with a feed that knows delivery area.'],
  },
  nuernberg: {
    de: ['Google Ads Agentur Nürnberg, Fürth und Erlangen', 'Google Ads für Nürnberg, Fürth und Erlangen. Mittelstand, IT und Handwerk mit eigenen Anzeigen und monatlichem Festpreis.'],
    tr: ['Nürnberg Google Ads Ajansı | Fürth ve Erlangen', 'Nürnberg, Fürth ve Erlangen için sabit ücretli Google Ads. KOBİ, BT ve zanaat aramaları üç ayrı reklamda, ortak ölçümle yürür.'],
    en: ['Google Ads Agency Nuremberg, Fürth and Erlangen', 'Google Ads for Nuremberg, Fürth and Erlangen. Mid-market, IT and trades each get their own ads, billed on a monthly flat fee.'],
  },
  dortmund: {
    de: ['Google Ads Agentur Dortmund | Ruhrgebiet • Fixpreis', 'Offizieller Google Partner mit 17+ Jahren Erfahrung für Dortmund, Bochum & Ruhrgebiet. B2B, Handwerk & Handel mit planbarem Festpreis.'],
    tr: ['Dortmund Google Ads Ajansı | Ruhr Bölgesi • Sabit Fiyat', 'Dortmund, Bochum ve Ruhr bölgesi işletmeleri için 17+ yıllık resmi Google Partneri Salih Maral ile sabit ücretli Google Ads ve Meta Ads.'],
    en: ['Google Ads Agency Dortmund & Ruhr Area | Flat Fee', 'Official Google Partner for Dortmund, Bochum and the Ruhr area. Profitable B2B, trades and retail Google Ads on a transparent monthly flat fee.'],
  },
  leipzig: {
    de: ['Google Ads Agentur Leipzig & Dresden | Sachsen', 'Google Ads für Leipzig, Plagwitz und Dresden. E-Commerce und lokale Betriebe mit getrennten Geboten und monatlichem Festpreis.'],
    tr: ['Leipzig Google Ads Ajansı | Dresden, Saksonya', 'Leipzig, Plagwitz ve Dresden için sabit ücretli Google Ads. E-ticaret ile yerel işletme aramaları ayrı tekliflenir ve ayrı ölçülür.'],
    en: ['Google Ads Agency Leipzig and Dresden | Saxony', 'Google Ads for Leipzig, Plagwitz and Dresden. E-commerce and local businesses bid separately and share a monthly flat fee.'],
  },
  bonn: {
    de: ['Google Ads Agentur Bonn und der Rhein-Sieg-Kreis', 'Google Ads für Bonn, Siegburg und Troisdorf. Kanzleien, Praxen und B2B zum Festpreis, klar getrennt von reinen Köln-Kampagnen.'],
    tr: ['Bonn Google Ads Ajansı | Rhein-Sieg ve Bad Godesberg', 'Bonn, Siegburg ve Troisdorf için sabit ücretli Google Ads. Hukuk, muayenehane ve B2B talebi Köln kampanyasından ayrı yürür.'],
    en: ['Google Ads Agency Bonn and the Rhein-Sieg District', 'Google Ads for Bonn, Siegburg and Troisdorf. Law firms, practices and B2B on a flat fee, separate from Cologne campaigns.'],
  },
  essen: {
    de: ['Google Ads Agentur Essen, Mülheim, Oberhausen', 'Google Ads im mittleren Ruhrgebiet: Essen, Mülheim und Oberhausen. Industrie und Handwerk mit eigenem Ortsnamen und Festpreis.'],
    tr: ['Essen Google Ads Ajansı | Mülheim ve Oberhausen', 'Essen, Mülheim ve Oberhausen için sabit ücretli Google Ads. Sanayi ve zanaat aramaları her şehrin kendi adıyla ayrı açılır.'],
    en: ['Google Ads Agency Essen, Mülheim and Oberhausen', 'Google Ads for Essen, Mülheim and Oberhausen. Industry and trades stay under each city’s own name, on a flat monthly fee.'],
  },
  duisburg: {
    de: ['Google Ads Agentur Duisburg, Moers und Krefeld', 'Google Ads für Duisburg, Moers und Krefeld. Logistik und Handwerk mit getrennten Anzeigengruppen und monatlichem Festpreis.'],
    tr: ['Duisburg Google Ads Ajansı | Moers ve Krefeld', 'Duisburg, Moers ve Krefeld için sabit ücretli Google Ads. Lojistik ve zanaat ayrı reklam gruplarında, ortak ölçümle yürür.'],
    en: ['Google Ads Agency Duisburg for Moers and Krefeld', 'Google Ads for Duisburg, Moers and Krefeld. Logistics and trades run in separate ad groups, billed on one monthly flat fee.'],
  },
  hannover: {
    de: ['Google Ads Agentur Hannover & Region Hannover', 'Google Ads für Hannover, Garbsen und Langenhagen. Messe-Begriffe zeitlich, regionale Suche dauerhaft, Betreuung zum Festpreis.'],
    tr: ['Hannover Google Ads Ajansı | Garbsen ve Bölge', 'Hannover, Garbsen ve Langenhagen için sabit ücretli Google Ads. Fuar kelimeleri tarihli açılır, bölgesel arama ise sürekli kalır.'],
    en: ['Google Ads Agency Hanover and the Hanover Region', 'Google Ads for Hanover, Garbsen and Langenhagen. Fair terms run on a schedule, regional search runs all year, on a flat fee.'],
  },
  mannheim: {
    de: ['Google Ads Agentur Mannheim und die Rhein-Neckar', 'Google Ads für Mannheim, Ludwigshafen und Heidelberg. Mittelstand und Praxen mit stadtscharfen Anzeigen und monatlichem Festpreis.'],
    tr: ['Mannheim Google Ads Ajansı | Rhein-Neckar Bölgesi', 'Mannheim, Ludwigshafen ve Heidelberg için sabit ücretli Google Ads. KOBİ ve muayenehane aramaları şehir adıyla ayrı açılır.'],
    en: ['Google Ads Agency Mannheim and the Rhine-Neckar', 'Google Ads for Mannheim, Ludwigshafen and Heidelberg. Mid-market and practices with city-specific ads, on a flat monthly fee.'],
  },
  wiesbaden: {
    de: ['Google Ads Agentur Wiesbaden & Mainz | Rheingau', 'Google Ads für Wiesbaden, Mainz und den Rheingau. Kanzleien und Praxen mit zwei Stadtstrukturen und einem monatlichen Festpreis.'],
    tr: ['Wiesbaden Google Ads Ajansı | Mainz ve Rheingau', 'Wiesbaden, Mainz ve Rheingau için sabit ücretli Google Ads. Hukuk ve muayenehane iki şehir yapısında, tek raporla yürür.'],
    en: ['Google Ads Agency Wiesbaden, Mainz and Rheingau', 'Google Ads for Wiesbaden, Mainz and the Rheingau. Law firms and practices use two city structures and one flat monthly fee.'],
  },
  karlsruhe: {
    de: ['Google Ads Agentur Karlsruhe | IT & Mittelstand', 'Google Ads für Karlsruhe, Ettlingen und Pforzheim. IT-Demos und Handwerk bleiben getrennte Kampagnen, Betreuung zum Festpreis.'],
    tr: ['Karlsruhe Google Ads Ajansı | BT, Yazılım ve KOBİ', 'Karlsruhe, Ettlingen ve Pforzheim için sabit ücretli Google Ads. BT demoları ile zanaat acil aramaları aynı kampanyada karışmaz.'],
    en: ['Google Ads Agency Karlsruhe for IT, Software and B2B', 'Google Ads for Karlsruhe, Ettlingen and Pforzheim. IT demos and trades emergencies stay in separate campaigns, on a flat fee.'],
  },
  muenster: {
    de: ['Google Ads Agentur Münster und das Münsterland', 'Google Ads für Münster, Greven und Warendorf. Kliniken und lokale Betriebe nach Fahrzeit gestaffelt, Betreuung zum Festpreis.'],
    tr: ['Münster Google Ads Ajansı | Münsterland Bölgesi', 'Münster, Greven ve Warendorf için sabit ücretli Google Ads. Klinik ve yerel işletme teklifleri gerçek sürüş süresine göre kademelenir.'],
    en: ['Google Ads Agency Münster and the Münsterland', 'Google Ads for Münster, Greven and Warendorf. Clinics and local firms bid by real driving time, on a flat monthly retainer.'],
  },
}

const COPY = {
  de: {
    catchmentTitle: (name) => `Einzugsgebiet und Suchintention in ${name}`,
    catchment: (c) => `${c.name.de} wird nicht mit einer bundesweiten Standardkampagne gewonnen. Menschen tippen den Ort, den Stadtteil und die Leistung. Die Betreuung startet bei den Suchen, die hier Umsatz bringen: ${c.queries.de}. Das Targeting deckt ${c.areas.de} ab und schließt Klicks aus, die außerhalb der echten Anfahrt liegen. ${c.angle.de}`,
    sectorsTitle: (name) => `Branchen, die in ${name} anders gebucht werden müssen`,
    campaignTitle: (name) => `So läuft eine Kampagne in ${name} in den ersten 30 Tagen`,
    steps: (c) => [
      ['Suchbegriffe und Ausschlüsse', `Die ersten Listen trennen Marke, Leistung und Ort. Begriffe wie ${c.queries.de} bekommen eigene Anzeigen. Job, Ratgeber und fremde Städte werden ausgeschlossen, bevor das Budget steigt.`],
      ['Anzeige und Seite passen zum Ort', `Die erste Zeile nennt ${c.name.de} oder den Stadtteil, nicht nur die Leistung. Die Seite wiederholt dasselbe Gebiet, damit der Klick nicht auf einer bundesweiten Vorlage landet.`],
      ['Messung vor Skalierung', 'Anrufe, Formulare und Käufe laufen über Server-Side-Tracking und, wo Meta im Mix ist, über die Conversions API. Ohne diese Zahlen wird kein Gebot erhöht.'],
      ['Gebiet staffeln, nicht fluten', `${c.areas.de} bleiben sichtbar, aber nicht mit demselben Gebot. Wo die Fahrzeit oder die Marge schlechter wird, sinkt das Gebot oder die Anzeige pausiert.`],
    ],
    mapsTitle: (name) => `Google Maps und Bewertungen rund um ${name}`,
    maps: (c) => `Viele Aufträge in ${c.name.de} starten auf der Karte, nicht in der klassischen Suche. Das Profil muss denselben Ort nennen wie die Anzeige, sonst wirkt das Unternehmen an zwei Stellen gleichzeitig und an keiner verlässlich. Bewertungen werden nach Leistung und Stadtteil beantwortet, nicht mit einem austauschbaren Danke. Für ${c.areas.de} gilt: Nur Standorte, an denen Sie wirklich Termine anbieten, gehören ins Profil und in die Anzeigenerweiterung.`,
    firstMonthTitle: 'Was Sie nach dem ersten Monat sehen',
    firstMonth: (c) => `Nach dreißig Tagen liegt ein Bericht vor, der Suchbegriffe, ausgeschlossene Begriffe, Kosten pro Anfrage und das Gebiet zeigt. Für ${c.name.de} zählt nicht die Klickzahl, sondern ob Anfragen aus ${c.areas.de} kommen und ob sie zur genannten Leistung passen. Begriffe ohne Anfrage werden gestrichen. Begriffe mit Anfrage, aber schlechter Marge, werden im Gebot gesenkt. Erst dann wird das Budget angehoben.`,
    budgetTitle: 'Budget und Festpreis',
    budget: (c) => `Das Mediabudget für ${c.name.de} richtet sich nach Marge und Suchpreis, nicht nach einem Bundesdurchschnitt. Unter etwa 1.000 € monatlichem Suchbudget bleiben zu wenige Anfragen, um Ort und Leistung sauber zu trennen. Darüber wird zuerst die Qualität der Anfragen aus ${c.areas.de} stabilisiert. Der Betrag für die Betreuung ist ein monatlicher Festpreis und steigt nicht, wenn Sie mehr Werbebudget freigeben.`,
    linksTitle: 'Passende Leistungen',
  },
  tr: {
    catchmentTitle: (name) => `${name} çekim alanı ve arama niyeti`,
    catchment: (c) => `${c.name.tr} ülke geneli bir hazır kampanyayla kazanılmaz. İnsanlar yeri, semti ve hizmeti yazar. Çalışma, burada ciro getiren aramalarla başlar: ${c.queries.tr}. Hedefleme ${c.areas.tr} bölgesini kapsar ve gerçek yolculuğun dışında kalan tıklamaları kapatır. ${c.angle.tr}`,
    sectorsTitle: (name) => `${name} içinde ayrı kurulması gereken sektörler`,
    campaignTitle: (name) => `${name} kampanyası ilk 30 günde nasıl yürür`,
    steps: (c) => [
      ['Arama terimleri ve negatifler', `İlk listeler markayı, hizmeti ve yeri ayırır. ${c.queries.tr} gibi terimler kendi reklamını alır. İş ilanı, rehber ve başka şehirler bütçe artmadan kapatılır.`],
      ['Reklam ve sayfa aynı yeri söyler', `İlk satır yalnızca hizmeti değil, ${c.name.tr} veya semti söyler. Sayfa aynı bölgeyi tekrarlar; tıklama ülke geneli bir şablona düşmez.`],
      ['Ölçeklemeden önce ölçüm', 'Aramalar, formlar ve satın almalar sunucu tarafında izlenir. Meta varsa Conversions API bağlanır. Bu sayılar olmadan teklif yükselmez.'],
      ['Bölgeyi kademele, boşaltma', `${c.areas.tr} görünür kalır ama aynı teklifle değil. Sürüş süresi veya marj kötüleşince teklif düşer ya da reklam durur.`],
    ],
    mapsTitle: (name) => `${name} çevresinde Google Haritalar ve yorumlar`,
    maps: (c) => `${c.name.tr} içindeki birçok iş klasik aramada değil haritada başlar. Profil, reklamla aynı yeri söylemeli. Aksi halde işletme iki yerde birden görünür ve hiçbirinde güven vermez. Yorumlar, hazır bir teşekkürle değil hizmet ve semte göre yanıtlanır. ${c.areas.tr} için kural açıktır: Profile ve reklam uzantısına yalnızca gerçekten randevu verilen konumlar girer.`,
    firstMonthTitle: 'İlk aydan sonra ne görürsünüz',
    firstMonth: (c) => `Otuz günün sonunda raporda arama terimleri, kapatılan terimler, talep başına maliyet ve bölge vardır. ${c.name.tr} için önemli olan tıklama sayısı değil, taleplerin ${c.areas.tr} içinden gelmesi ve söylenen hizmete uymasıdır. Talep getirmeyen terim silinir. Talep getirip marjı kötü olan terimin teklifi düşer. Bütçe ancak bundan sonra artar.`,
    budgetTitle: 'Bütçe ve sabit ücret',
    budget: (c) => `${c.name.tr} için medya bütçesi ülke ortalamasına değil marja ve arama fiyatına bağlıdır. Aylık yaklaşık 1.000 € arama bütçesinin altında, yer ile hizmeti ayıracak kadar talep birikmez. Bunun üzerinde önce ${c.areas.tr} içinden gelen talebin kalitesi oturtulur. Yönetim bedeli aylık sabit ücrettir ve reklam bütçesi arttıkça yükselmez.`,
    linksTitle: 'İlgili hizmetler',
  },
  en: {
    catchmentTitle: (name) => `Catchment and search intent in ${name}`,
    catchment: (c) => `${c.name.en} is not won with a national template. People type the place, the district and the service. Work starts on the queries that make revenue here: ${c.queries.en}. Targeting covers ${c.areas.en} and shuts off clicks outside the real journey. ${c.angle.en}`,
    sectorsTitle: (name) => `Sectors that must be booked differently in ${name}`,
    campaignTitle: (name) => `How a campaign in ${name} runs in the first 30 days`,
    steps: (c) => [
      ['Queries and negatives', `The first lists split brand, service and place. Terms such as ${c.queries.en} get their own ads. Jobs, guides and other cities are excluded before the budget rises.`],
      ['Ad and page name the same place', `The first line names ${c.name.en} or the district, not only the service. The page repeats that area so the click does not land on a national template.`],
      ['Measurement before scale', 'Calls, forms and purchases run through server-side tracking and, where Meta is in the mix, the Conversions API. Bids do not rise without those numbers.'],
      ['Tier the area, do not flood it', `${c.areas.en} stay visible, but not at the same bid. Where driving time or margin gets worse, the bid drops or the ad pauses.`],
    ],
    mapsTitle: (name) => `Google Maps and reviews around ${name}`,
    maps: (c) => `Many jobs in ${c.name.en} start on the map, not in classic search. The profile has to name the same place as the ad, or the business appears in two places and is trusted in neither. Reviews are answered by service and district, not with a stock thank-you. For ${c.areas.en} the rule is simple: only locations where you actually take appointments belong in the profile and the ad extension.`,
    firstMonthTitle: 'What you see after the first month',
    firstMonth: (c) => `After thirty days the report shows search terms, excluded terms, cost per enquiry and the area. For ${c.name.en} the click count is not the point. Enquiries have to come from ${c.areas.en} and match the service you named. Terms with no enquiry are removed. Terms with enquiries but weak margin are bid down. Only then does the budget rise.`,
    budgetTitle: 'Budget and flat fee',
    budget: (c) => `Media budget for ${c.name.en} follows margin and search price, not a national average. Below about €1,000 a month in search spend there are too few enquiries to split place and service cleanly. Above that, enquiry quality from ${c.areas.en} is stabilised first. The management fee is a monthly flat fee and does not rise when you release more ad budget.`,
    linksTitle: 'Related services',
  },
}

export function getCityMeta(city, lang) {
  const row = META[city] || META.frankfurt
  const pair = row[lang] || row.de
  return { title: pair[0], description: pair[1] }
}

export function getCityGrowth(city, lang) {
  const c = CITIES[city] || CITIES.frankfurt
  const copy = COPY[lang] || COPY.de
  const name = c.name[lang] || c.name.de
  const sectorRows = c.sectors[lang] || c.sectors.de
  const service = SERVICE[lang] || SERVICE.de
  return {
    catchmentTitle: copy.catchmentTitle(name),
    catchment: copy.catchment(c),
    sectorsTitle: copy.sectorsTitle(name),
    sectors: sectorRows.map(([sectorName, body]) => ({ name: sectorName, body })),
    campaignTitle: copy.campaignTitle(name),
    steps: copy.steps(c).map(([title, body]) => ({ title, body })),
    mapsTitle: copy.mapsTitle(name),
    maps: copy.maps(c),
    firstMonthTitle: copy.firstMonthTitle,
    firstMonth: copy.firstMonth(c),
    budgetTitle: copy.budgetTitle,
    budget: copy.budget(c),
    linksTitle: copy.linksTitle,
    links: ['google-ads', 'meta-ads', 'seo', 'youtube-ads', 'reviews'].map((key) => service[key]),
  }
}

export const CITY_IDS = Object.keys(CITIES)