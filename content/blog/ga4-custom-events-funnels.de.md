---
slug: "ga4-custom-events-funnels"
lang: "de"
title: "GA4 Custom Events & Conversion Funnels professionell einrichten"
excerpt: "Messen Sie das Benutzerverhalten in Google Analytics 4 präzise. Salih Maral zeigt benutzerdefinierte Ereignisse und Trichteranalysen."
category: "Tracking"
date: "2026-07-16"
readTime: "10"
coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&q=80"
---

<div class="lead">
  <p>In der modernen Web-Analyse ist die präzise Messung des Nutzerverhaltens der Schlüssel zu profitablem Wachstum und optimierten Kampagnen. Während standardmäßige Einstellungen grundlegende Daten liefern, erfordert tiefgehendes Conversion-Optimierungspotenzial den gezielten Einsatz von benutzerdefinierten Ereignissen und Trichteranalysen. <strong>Salih Maral</strong>, führender Experte für Performance Marketing und Tracking-Infrastruktur, zeigt in diesem detaillierten Leitfaden, wie Sie Google Analytics 4 (GA4) benutzerdefinierte Ereignisse (Custom Events) über den Google Tag Manager (GTM) einrichten, Datenlücken schließen und Conversion-Funnel erstellen, um exakte Erkenntnisse über das Nutzerverhalten zu gewinnen und Ihren Return on Ad Spend (ROAS) nachhaltig zu maximieren.</p>
</div>

<h2>🎯 Der Paradigmenwechsel: Warum GA4 auf Ereignissen basiert</h2>
<p>Im Gegensatz zum alten Universal Analytics (UA), das auf Seitenaufrufen (Pageviews) und sitzungsbasierten Datenmodellen aufbaute, ist Google Analytics 4 (GA4) grundlegend als ereignisbasiertes System konzipiert. Jede Interaktion – sei es ein Klick, ein Scroll-Vorgang, ein Video-Play oder ein Kauf – wird in GA4 als ein Ereignis (Event) erfasst. Dieser Wechsel bietet eine enorme Flexibilität, da er Web- und App-Daten unter einem einheitlichen Datenschema konsolidiert.</p>

<p>Die Umstellung bedeutet jedoch auch, dass standardmäßige Berichte oft nicht ausreichen. Wenn Sie beispielsweise die Leistung einer spezifischen Lead-Generierungs-Kampagne bewerten wollen, müssen Sie genau wissen, wie weit der Nutzer im Anmeldeformular gekommen ist. Hierzu müssen benutzerdefinierte Ereignisse angelegt werden, da GA4 standardmäßig nur den erfolgreichen Abschluss (wenn überhaupt) oder den bloßen Aufruf der Seite misst. Ein strukturiertes Tracking-Setup ist daher das Fundament für erfolgreiche Optimierungen im <a href="/de/dienstleistungen/google-ads">Google Ads Management</a> und der <a href="/de/dienstleistungen/meta-ads">Meta Ads Betreuung</a>.</p>

<h2>📊 Die 4 Ereignis-Typen in GA4 im Vergleich</h2>
<p>Bevor Sie eigene benutzerdefinierte Ereignisse definieren, sollten Sie die Struktur von GA4 verstehen. Google unterscheidet vier verschiedene Ereignisklassen. Nicht jede Interaktion erfordert ein komplett neues Custom Event; oft lassen sich bereits vorhandene Strukturen nutzen.</p>

<table>
  <thead>
    <tr>
      <th>Ereignistyp</th>
      <th>Beschreibung</th>
      <th>Setup-Aufwand</th>
      <th>Praxisbeispiel</th>
      <th>Empfohlene Nutzung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Automatisch erfasste Ereignisse</strong></td>
      <td>Werden von GA4 ohne jegliche Konfiguration im Code aufgezeichnet.</td>
      <td>Keiner (Standardmäßig aktiv)</td>
      <td><code>first_visit</code>, <code>session_start</code>, <code>user_engagement</code></td>
      <td>Grundlegendes Tracking von Nutzerbesuchen und Sitzungsstarts.</td>
    </tr>
    <tr>
      <td><strong>Optimierte Analysen (Enhanced Measurement)</strong></td>
      <td>Können in den GA4-Datenstream-Einstellungen per Klick aktiviert werden.</td>
      <td>Sehr gering (Ein-/Ausschalter)</td>
      <td><code>click</code> (Outbound), <code>scroll</code> (90%), <code>view_search_results</code></td>
      <td>Einfache Interaktionen wie Klicks auf externe Links oder Downloads erfassen.</td>
    </tr>
    <tr>
      <td><strong>Empfohlene Ereignisse</strong></td>
      <td>Von Google vordefinierte Ereignisnamen und Parameter für bestimmte Branchen.</td>
      <td>Mittel (Implementierung via GTM/Code erforderlich)</td>
      <td><code>view_item</code>, <code>add_to_cart</code>, <code>generate_lead</code>, <code>login</code></td>
      <td>Standardisierte E-Commerce-Prozesse und klassische Lead-Generierungen.</td>
    </tr>
    <tr>
      <td><strong>Benutzerdefinierte Ereignisse (Custom Events)</strong></td>
      <td>Vollständig selbst definierte Ereignisse für individuelle Interaktionen.</td>
      <td>Mittel bis Hoch (GTM-Einrichtung & Custom Code)</td>
      <td><code>newsletter_signup_step2</code>, <code>calculator_used</code>, <code>modal_open</code></td>
      <td>Spezifische Interaktionen, die durch die anderen drei Typen nicht abgedeckt sind.</td>
    </tr>
  </tbody>
</table>

<p>Die wichtigste Regel lautet: **Nutzen Sie immer zuerst empfohlene Ereignisse**, bevor Sie benutzerdefinierte Ereignisse anlegen. Der Grund dafür ist einfach: GA4 versteht empfohlene Ereignisse (wie <code>purchase</code> oder <code>generate_lead</code>) nativ und nutzt sie für standardisierte E-Commerce-Berichte und Predictive Analytics. Erst wenn Ihre gewünschte Interaktion in kein Schema passt, greifen Sie zu einem Custom Event.</p>

<blockquote>
  <p>"Wer im Online-Marketing keine maßgeschneiderten Trichteranalysen nutzt, fliegt im Blindflug. Erst wenn Sie genau sehen, an welcher spezifischen Stelle Ihre Nutzer abbrechen – sei es beim Ausfüllen des dritten Formularfelds oder beim Auswählen der Zahlungsmethode –, können Sie Ihr Budget dorthin lenken, wo es tatsächlichen ROI generiert." — Salih Maral, Experte für Web-Analytics und Performance Marketing</p>
</blockquote>

<h2>🛠️ Schritt-für-Schritt-Anleitung: Custom Events via Google Tag Manager (GTM) erstellen</h2>
<p>Die sauberste und flexibelste Methode, um benutzerdefinierte Ereignisse zu erstellen, ist der Einsatz des Google Tag Managers. Dies vermeidet direkte Code-Änderungen auf der Website und ermöglicht ein agiles Tracking-Management.</p>

<h3>Schritt 1: Den Trigger im GTM definieren</h3>
<p>Bevor ein Ereignis gesendet werden kann, muss der Tag Manager wissen, wann es ausgelöst werden soll. Erstellen Sie einen neuen Trigger (z. B. für einen Klick auf einen bestimmten Button):</p>
<ol>
  <li>Gehen Sie im GTM auf <strong>Trigger</strong> und klicken Sie auf <strong>Neu</strong>.</li>
  <li>Wählen Sie als Triggertyp <strong>Klick - Alle Elemente</strong> oder <strong>Klick - Nur Links</strong>.</li>
  <li>Wählen Sie bei der Auslösung <strong>Einige Klicks</strong> aus.</li>
  <li>Definieren Sie die Bedingung, z. B. <code>Click ID</code> entspricht <code>btn-calculate-shipping</code> oder <code>Click Classes</code> enthält <code>cta-primary</code>.</li>
</ol>

<h3>Schritt 2: Das GA4-Ereignis-Tag konfigurieren</h3>
<p>Erstellen Sie nun das Tag, das die Daten an GA4 sendet:</p>
<ol>
  <li>Gehen Sie auf <strong>Tags</strong> und klicken Sie auf <strong>Neu</strong>.</li>
  <li>Wählen Sie als Tag-Typ <strong>Google Analytics: GA4-Ereignis</strong>.</li>
  <li>Wählen Sie Ihr vorhandenes GA4-Konfigurationstag aus (oder tragen Sie Ihre Mess-ID manuell ein).</li>
  <li>Geben Sie dem Ereignis einen Namen (z. B. <code>shipping_calculator_click</code>). **Wichtig:** Verwenden Sie ausschließlich Kleinbuchstaben und Unterstriche (snake_case).</li>
</ol>

<h3>Schritt 3: Event-Parameter hinzufügen</h3>
<p>Ein Ereignis ohne Kontext ist oft wertlos. Fügen Sie unter <strong>Ereignisparameter</strong> zusätzliche Informationen hinzu:</p>
<ul>
  <li>Parametername: <code>calculator_type</code> | Wert: <code>international</code></li>
  <li>Parametername: <code>button_location</code> | Wert: <code>product_page_footer</code></li>
</ul>
<p>Verknüpfen Sie das Tag mit dem in Schritt 1 erstellten Trigger und speichern Sie es ab.</p>

<h3>Schritt 4: Registrierung in der GA4-Benutzeroberfläche (Custom Dimensions)</h3>
<p>Ein häufiger Fehler, den selbst erfahrene Entwickler machen: Sie senden Parameter über den GTM an GA4, registrieren diese aber nicht in der GA4-Oberfläche. Ohne diese Registrierung können Sie die Parameter nicht in Ihren Berichten oder Trichteranalysen filtern!</p>
<ol>
  <li>Öffnen Sie Ihr GA4-Eigentum und navigieren Sie zu <strong>Verwaltung</strong> -> <strong>Benutzerdefinierte Definitionen</strong>.</li>
  <li>Klicken Sie auf <strong>Benutzerdefinierte Dimensionen erstellen</strong>.</li>
  <li>Tragen Sie bei <strong>Dimensionsname</strong> eine verständliche Bezeichnung ein (z. B. "Rechnertyp").</li>
  <li>Wählen Sie als Bereich (Scope) <strong>Ereignis</strong> aus.</li>
  <li>Wählen Sie im Dropdown-Menü <strong>Ereignisparameter</strong> genau den Namen aus, den Sie im GTM vergeben haben (z. B. <code>calculator_type</code>).</li>
  <li>Speichern Sie die Dimension ab. Es kann bis zu 24 Stunden dauern, bis Daten in den Berichten einlaufen.</li>
</ol>

<h2>📈 Conversion-Funnel in GA4: Schwachstellen im Funnel aufdecken</h2>
<p>Ein Conversion-Funnel (Trichter) visualisiert den Weg eines Nutzers durch eine vordefinierte Reihe von Schritten bis hin zum Ziel (z. B. dem Kauf oder der Lead-Generierung). In Universal Analytics waren Trichter starr und mussten im Vorfeld definiert werden. GA4 revolutioniert dies mit der **Trichteruntersuchung (Funnel Exploration)** in den Erkundungsberichten. Hier können Sie Trichter rückwirkend und ad-hoc erstellen sowie analysieren.</p>

<p>Die Trichteranalyse hilft Ihnen dabei, exakte Absprungraten (Drop-off Rates) zu identifizieren. Sie beantwortet Fragen wie:
  <ul>
    <li>Wie viele Nutzer legen ein Produkt in den Warenkorb, starten aber den Checkout nicht?</li>
    <li>An welchem spezifischen Schritt des mehrstufigen Kontaktformulars springen die meisten Leads ab?</li>
    <li>Gibt es Unterschiede im Trichter-Verhalten zwischen Mobile- und Desktop-Nutzern?</li>
  </ul>
</p>

<h2>📋 Schritt-für-Schritt-Anleitung: Trichteranalyse in GA4 erstellen</h2>
<p>Um einen aussagekräftigen Trichter zu bauen, müssen Sie in GA4 den Bereich "Erkunden" nutzen. Folgen Sie dieser Anleitung:</p>

<ol>
  <li>Navigieren Sie im linken Menü von GA4 auf den Reiter <strong>Erkunden</strong> (Explorations).</li>
  <li>Wählen Sie die Vorlage <strong>Trichteruntersuchung</strong> (Funnel Exploration) aus.</li>
  <li>Im Menü <strong>Tab-Einstellungen</strong> (rechte Spalte) finden Sie den Bereich <strong>Schritte</strong>. Klicken Sie auf das Stiftsymbol, um die Schritte anzupassen.</li>
  <li>Definieren Sie Ihre Trichter-Schritte nacheinander. Zum Beispiel für einen Standard-E-Commerce-Funnel:
    <ul>
      <li><strong>Schritt 1: Produktsuche</strong> (Ereignis: <code>view_item</code>)</li>
      <li><strong>Schritt 2: In den Einkaufswagen</strong> (Ereignis: <code>add_to_cart</code>)</li>
      <li><strong>Schritt 3: Checkout begonnen</strong> (Ereignis: <code>begin_checkout</code>)</li>
      <li><strong>Schritt 4: Kauf abgeschlossen</strong> (Ereignis: <code>purchase</code>)</li>
    </ul>
  </li>
  <li>Klicken Sie auf <strong>Übernehmen</strong>. GA4 rendert nun sofort die Trichtergrafik für den gewählten Zeitraum.</li>
</ol>

<h3>Offene vs. geschlossene Trichter (Open vs. Closed Funnels)</h3>
<p>In den Einstellungen der Trichteruntersuchung können Sie festlegen, ob es sich um einen **offenen** oder einen **geschlossenen** Trichter handelt:</p>
<ul>
  <li><strong>Geschlossener Trichter:</strong> Ein Nutzer wird nur dann im Trichter erfasst, wenn er bei Schritt 1 einsteigt und alle Schritte in der vorgegebenen Reihenfolge durchläuft. Wenn jemand direkt bei Schritt 2 einsteigt, wird er ignoriert.</li>
  <li><strong>Offener Trichter:</strong> Nutzer können an jeder beliebigen Stelle in den Trichter einsteigen. Dies ist besonders nützlich für Websites, bei denen Nutzer direkt von externen Seiten (z. B. Landingpages) in den Checkout-Prozess springen können.</li>
</ul>

<h2>📊 E-Commerce & Lead-Gen Trichter-Benchmarks</h2>
<p>Um Ihre gemessenen Daten richtig einzuordnen, müssen Sie wissen, wie Ihre Raten im Branchenvergleich abschneiden. Die folgende Tabelle zeigt typische Benchmarks und die passenden Hebel zur Conversion-Rate-Optimierung (CRO):</p>

<table>
  <thead>
    <tr>
      <th>Trichterstufe (E-Commerce)</th>
      <th>Branchen-Benchmark</th>
      <th>Typische Schwachstelle</th>
      <th>Optimierungshebel (CRO)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Session Start → View Item</strong></td>
      <td>40 % - 50 %</td>
      <td>Schlechte Navigation, langsame Ladezeiten, unübersichtliche Kategorieseiten.</td>
      <td>Interne Suche verbessern, Page Speed optimieren, klare Filterfunktionen.</td>
    </tr>
    <tr>
      <td><strong>View Item → Add to Cart</strong></td>
      <td>8 % - 12 %</td>
      <td>Unklare Produktvorteile, fehlende Trust-Elemente, unübersichtliche Preise.</td>
      <td>Social Proof einbinden, hochauflösende Bilder nutzen, Call-to-Action hervorheben.</td>
    </tr>
    <tr>
      <td><strong>Add to Cart → Begin Checkout</strong></td>
      <td>45 % - 55 %</td>
      <td>Unerwartete Zusatzkosten (z. B. Versand), komplizierter Warenkorb.</td>
      <td>Gratisversand-Grenze anzeigen, Checkout-Button prominenter platzieren.</td>
    </tr>
    <tr>
      <td><strong>Begin Checkout → Purchase</strong></td>
      <td>35 % - 45 %</td>
      <td>Zu viele Pflichtfelder, fehlende bevorzugte Zahlungsarten, mangelnde Sicherheitsgefühle.</td>
      <td>Gast-Checkout erlauben, One-Page-Checkout nutzen, Trust-Badges im Checkout platzieren.</td>
    </tr>
  </tbody>
</table>

<p>Wenn Ihre Conversion Rate von <em>Begin Checkout → Purchase</em> beispielsweise unter 25 % liegt, deutet dies auf massive Reibungspunkte (Friction) im Bezahlvorgang hin. Dank des präzisen GA4-Trackings wissen Sie exakt, dass das Problem nicht Ihre Werbeanzeigen oder Ihre Produktseiten sind, sondern die Checkout-Infrastruktur.</p>

<h2>🔗 Verknüpfung mit Advertising: ROAS steigern mit Custom Events</h2>
<p>Warum betreiben wir diesen Aufwand? Der primäre Zweck von präzisem Event-Tracking ist die Optimierung Ihrer Werbekampagnen. Wenn Sie Ihre GA4-Eigentümer mit Google Ads verknüpfen, können Sie benutzerdefinierte Ereignisse als Conversions markieren und in Google Ads importieren.</p>

<p>Dies hat immense Vorteile für die Smart Bidding Algorithmen von Google:</p>
<ol>
  <li><strong>Mikro-Conversions optimieren:</strong> Bei Produkten mit langen Entscheidungszyklen (z. B. B2B-Software oder Immobilien) gibt es oft zu wenige Makro-Conversions (Käufe/Vertragsabschlüsse) für den Algorithmus. Indem Sie auf Mikro-Conversions wie "Nutzung des Ertragsrechners" optimieren, füttern Sie den Algorithmus mit ausreichend Daten, um die passenden Zielgruppen zu finden.</li>
  <li><strong>Ausschließen irrelevanter Nutzer:</strong> Erfassen Sie Nutzer, die eine Aktion negativ abbrechen (z. B. "Fehlermeldung im Formular erhalten"), und schließen Sie diese gezielt aus Ihren Retargeting-Kampagnen aus, um Budgetverschwendung zu vermeiden.</li>
</ol>
<p>Ergänzend dazu sichert das serverseitige Tracking über die <a href="/blog/server-side-tracking-capi-guide">Meta Conversions API (CAPI)</a> und GTM Server-Side, dass diese Ereignisse auch in Zeiten von Werbeblockern und strengen ITP-Richtlinien verlustfrei an die Werbeplattformen übermittelt werden. Die Kombination aus Custom Events und modernem Tracking bildet das Fundament für profitables Marketing auf Basis von <a href="/blog/first-party-data-marketing">First-Party-Daten</a>.</p>

<h2>⚠️ Die 5 häufigsten Fehler beim GA4 Event-Tracking</h2>
<p>Bei der Einrichtung von GA4-Events schleichen sich schnell Fehler ein, die Ihre Datenqualität nachhaltig verzerren. Achten Sie auf folgende Punkte:</p>
<ol>
  <li><strong>Groß- und Kleinschreibung ignorieren:</strong> GA4 unterscheidet strikt zwischen Groß- und Kleinschreibung. Ein Event namens <code>generate_lead</code> und eines namens <code>Generate_Lead</code> werden als zwei völlig unterschiedliche Ereignisse gewertet. Nutzen Sie immer konsequent Kleinschreibung (lowercase).</li>
  <li><strong>GTM-Vorschau nicht nutzen:</strong> Veröffentlichen Sie niemals Tracking-Änderungen, ohne sie im Vorschaumodus des GTM und in der GA4 DebugView getestet zu haben. Die DebugView zeigt Ihnen in Echtzeit, welche Events und Parameter ankommen.</li>
  <li><strong>Zu viele Custom Dimensions registrieren:</strong> GA4 hat Limits für benutzerdefinierte Dimensionen (z. B. maximal 50 ereignisbezogene Dimensionen in der Standard-Version). Registrieren Sie nur Parameter, die Sie wirklich für Berichte benötigen.</li>
  <li><strong>Standard-Scroll-Tracking unkontrolliert laufen lassen:</strong> Das Enhanced Measurement Scroll-Tracking erfasst nur das Erreichen von 90 % der Seite. Für lange Blogartikel oder Landingpages ist dies nutzlos. Deaktivieren Sie das Standard-Scroll-Tracking und setzen Sie über den GTM ein eigenes Scroll-Tracking auf (z. B. bei 25 %, 50 % und 75 %).</li>
  <li><strong>Keine Naming Conventions festlegen:</strong> Ohne ein klares Dokumentations-Schema verliert ein wachsendes Marketing-Team schnell den Überblick. Nutzen Sie standardisierte Tabellen, um festzulegen, welche Events welche Parameter übertragen.</li>
</ol>

<h2>❓ Häufig gestellte Fragen (FAQs)</h2>

<h3>Wie viele benutzerdefinierte Ereignisse kann ich in GA4 erstellen?</h3>
<p>Es gibt in GA4 kein Limit für die Gesamtanzahl der gesendeten Ereignisse. Allerdings gibt es ein Limit für die Anzahl der <em>einzigartigen</em> Ereignisnamen (500 pro Property). Achten Sie daher darauf, Eventnamen dynamisch zu halten und Details über Parameter zu steuern, statt für jedes Produkt oder jede Seite einen eigenen Ereignisnamen zu vergeben.</p>

<h3>Warum sehe ich meine Event-Parameter nicht in den GA4-Standardberichten?</h3>
<p>Das liegt meist daran, dass Sie den Parameter nicht als benutzerdefinierte Dimension (Custom Dimension) in den Verwaltungseinstellungen von GA4 registriert haben. Führen Sie diesen Schritt für jeden Parameter aus, den Sie in Berichten nutzen möchten. Nach der Registrierung kann es zudem bis zu 24 Stunden dauern, bis historische Daten angezeigt werden.</p>

<h3>Was ist der Unterschied zwischen einem offenen und geschlossenen Trichter?</h3>
<p>Ein geschlossener Trichter erfordert, dass der Nutzer alle Schritte in der exakten Reihenfolge abarbeitet (z. B. Schritt 1 -> Schritt 2 -> Schritt 3). Steigt der Nutzer erst bei Schritt 2 ein, zählt er nicht. Ein offener Trichter erlaubt den Einstieg an jeder beliebigen Stelle. Geschlossene Trichter eignen sich für feste Prozesse wie Checkouts, offene Trichter für flexiblere Pfade auf einer Website.</p>

<h3>Kompensieren Custom Events die Einschränkungen von Third-Party-Cookies?</h3>
<p>Nur bedingt. Custom Events strukturieren die Daten, die Sie auf der Seite erfassen. Um Datenverluste durch Cookie-Einschränkungen (wie Apples ITP) zu verhindern, müssen Sie diese Custom Events über ein Server-Side Tracking-Setup (z. B. GTM Server-Side) ausspielen. Dadurch werden First-Party-Cookies serverseitig gesetzt, was deren Lebensdauer verlängert.</p>

<h2>🚀 Fazit: Nutzen Sie Daten als Ihren stärksten Hebel</h2>
<p>Ein standardmäßiges GA4-Setup kratzt nur an der Oberfläche dessen, was moderne Web-Analyse leisten kann. Erst durch die gezielte Implementierung von benutzerdefinierten Ereignissen und maßgeschneiderten Trichteranalysen verwandeln Sie GA4 in ein mächtiges Optimierungswerkzeug. Sie erkennen exakt, an welchen Stellen Sie potenzielle Kunden verlieren, und können Ihre Budgets zielgerichtet steuern.</p>

<p>Machen Sie keine Kompromisse bei Ihrer Datenqualität. <strong>Salih Maral</strong> unterstützt Sie als erfahrener Analytics- und Performance-Marketing-Spezialist dabei, eine lückenlose, zukunftssichere Tracking-Infrastruktur aufzubauen. Richten Sie Ihr Tracking DSGVO-konform und zielorientiert aus, um Ihre Kampagneneffizienz nachweisbar zu steigern.</p>

<div class="highlight-box">
  <h4>📚 Weiterlesen</h4>
  <ul>
    <li><a href="/blog/server-side-tracking-capi-guide">Server-Side Tracking und Conversions API (CAPI) Leitfaden</a></li>
    <li><a href="/blog/google-ads-roi-tracking">Google Ads Conversion Tracking und ROI-Optimierung</a></li>
    <li><a href="/blog/first-party-data-marketing">Werbung ohne Cookies: Bereiten Sie sich mit First-Party-Daten auf die Zukunft vor</a></li>
    <li><a href="/de/dienstleistungen/google-ads">Google Ads Management von Salih Maral</a></li>
    <li><a href="/de/dienstleistungen/meta-ads">Meta Ads Betreuung von Salih Maral</a></li>
    <li><a href="/de/dienstleistungen/seo">SEO Dienstleistungen für nachhaltiges Wachstum</a></li>
  </ul>
</div>


