import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message, language } = body

    // Validate required fields
    if (!name || !email || !message) {
      const errorMessages = {
        de: 'Bitte füllen Sie alle Pflichtfelder aus.',
        tr: 'Lütfen tüm zorunlu alanları doldurun.',
        en: 'Please fill in all required fields.',
      }
      return Response.json(
        { error: errorMessages[language] || errorMessages.de },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      const errorMessages = {
        de: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
        tr: 'Lütfen geçerli bir e-posta adresi girin.',
        en: 'Please enter a valid email address.',
      }
      return Response.json(
        { error: errorMessages[language] || errorMessages.de },
        { status: 400 }
      )
    }

    console.log('[Contact Form Received]', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      language: language || 'de',
    })

    // Send email notification via Resend
    if (resend) {
      try {
        const contactEmail = process.env.CONTACT_EMAIL || 'salihmaralde@gmail.com'

        const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f1f5f9; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
    .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
    .content { padding: 30px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b; margin-bottom: 6px; }
    .value { font-size: 15px; font-weight: 600; color: #0f172a; background: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #3b82f6; }
    .message-box { font-size: 15px; color: #334155; background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #10b981; white-space: pre-wrap; line-height: 1.7; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 Yeni Müşteri & Teklif Talebi</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Ad Soyad</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">E-Posta</div>
        <div class="value"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value">${phone ? `<a href="tel:${phone}" style="color: #0f172a; text-decoration: none;">${phone}</a>` : 'Belirtilmedi'}</div>
      </div>
      ${company ? `
      <div class="field">
        <div class="label">Firma / Web Sitesi</div>
        <div class="value">${company}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Sayfa / Dil</div>
        <div class="value">${language === 'tr' ? 'Türkçe (TR)' : language === 'en' ? 'İngilizce (EN)' : 'Almanca (DE)'}</div>
      </div>
      <div class="field">
        <div class="label">Mesaj / Teklif Talebi</div>
        <div class="message-box">${message}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px 0;">Bu form <strong>salihmaral.de</strong> üzerinden gönderilmiştir.</p>
      <p style="margin: 0;">Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Berlin' })}</p>
    </div>
  </div>
</body>
</html>
        `

        const emailResult = await resend.emails.send({
          from: 'Salih Maral Website <onboarding@resend.dev>',
          to: contactEmail,
          replyTo: email,
          subject: `📬 Yeni Teklif Talebi: ${name} (${company || 'Bireysel'}) - salihmaral.de`,
          html: emailHtml,
        })

        console.log('[Contact Form] Email sent successfully via Resend:', emailResult)
      } catch (emailError) {
        console.error('[Contact Form] Resend email dispatch failed:', emailError)
      }
    } else {
      console.warn('[Contact Form] RESEND_API_KEY is not defined in environment variables. Email was skipped.')
    }

    const successMessages = {
      de: 'Ihre Nachricht wurde erfolgreich gesendet!',
      tr: 'Mesajınız başarıyla gönderildi!',
      en: 'Your message has been sent successfully!',
    }

    return Response.json(
      { success: true, message: successMessages[language] || successMessages.de },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '10',
          'X-RateLimit-Remaining': '9',
        },
      }
    )
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return Response.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
