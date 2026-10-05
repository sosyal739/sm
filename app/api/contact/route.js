import nodemailer from 'nodemailer'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// Primary: Official IONOS SMTP via info@salihmaral.de
const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.ionos.de',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // TLS on port 587
  auth: {
    user: process.env.SMTP_USER || 'info@salihmaral.de',
    pass: process.env.SMTP_PASS || 'Maral.06!2026',
  },
}

const primaryTransporter = nodemailer.createTransport(smtpConfig)

// In-Memory Rate Limiter (sliding window per IP)
const ipRateLimit = new Map()
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5

function checkRateLimit(ip) {
  const now = Date.now()
  const record = ipRateLimit.get(ip)

  // Prune map if it gets too large
  if (ipRateLimit.size > 2000) {
    for (const [key, val] of ipRateLimit.entries()) {
      if (now - val.startTime > RATE_LIMIT_WINDOW_MS) {
        ipRateLimit.delete(key)
      }
    }
  }

  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    ipRateLimit.set(ip, { count: 1, startTime: now })
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 }
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 }
  }

  record.count += 1
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count }
}

function getClientIp(request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const cf = request.headers.get('cf-connecting-ip')
  if (cf) return cf.trim()
  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp.trim()
  return '127.0.0.1'
}

function isAllowedOrigin(request) {
  const origin = request.headers.get('origin') || request.headers.get('referer') || ''
  if (!origin) return true // Allow direct requests without browser headers
  const allowed = ['salihmaral.de', 'www.salihmaral.de', 'localhost', '127.0.0.1']
  return allowed.some((host) => origin.includes(host))
}

function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function GET() {
  return Response.json({
    status: 'active',
    primaryProvider: 'IONOS SMTP (info@salihmaral.de)',
    contactEmail: process.env.CONTACT_EMAIL || 'salihmaralde@gmail.com',
    hasResendFallback: Boolean(process.env.RESEND_API_KEY),
    security: {
      rateLimiting: 'active (5 req / 10 min)',
      honeypot: 'active',
      originCheck: 'active',
    },
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request) {
  try {
    // 1. Origin & Referer Verification (Cross-Origin Protection)
    if (!isAllowedOrigin(request)) {
      return Response.json(
        { error: 'Forbidden: Invalid request origin.' },
        { status: 403 }
      )
    }

    // 2. IP Rate Limiting Check
    const clientIp = getClientIp(request)
    const rateLimit = checkRateLimit(clientIp)
    if (!rateLimit.allowed) {
      return Response.json(
        {
          error: 'Zu viele Anfragen. Bitte warten Sie einige Minuten vor dem nächsten Versuch.',
          error_tr: 'Çok fazla istek gönderildi. Lütfen birkaç dakika bekleyin.',
          error_en: 'Too many requests. Please wait a few minutes before trying again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': '600',
            'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
            'X-RateLimit-Remaining': '0',
          },
        }
      )
    }

    const body = await request.json()
    const { name, email, phone, company, message, language, b_check, _gotcha, website_hp } = body

    // 3. Honeypot Anti-Bot Filter (Silently trap automated spam bots)
    if (b_check || _gotcha || website_hp) {
      console.warn('[Honeypot Triggered] Spam bot trapped and deflected from IP:', clientIp)
      return Response.json(
        {
          success: true,
          message: 'Ihre Nachricht wurde erfolgreich gesendet!',
          provider: 'honeypot_deflected',
        },
        { status: 200 }
      )
    }

    // 4. Validate required fields
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

    // 5. Input Length & Type Limits (Prevent buffer exhaustion / payload abuse)
    if (
      typeof name !== 'string' || name.length > 100 ||
      typeof email !== 'string' || email.length > 120 ||
      (phone && (typeof phone !== 'string' || phone.length > 40)) ||
      (company && (typeof company !== 'string' || company.length > 100)) ||
      typeof message !== 'string' || message.length > 3000
    ) {
      return Response.json(
        { error: 'Eingabe überschreitet die zulässige Zeichenbegrenzung.' },
        { status: 400 }
      )
    }

    // 6. Validate email format (RFC-compliant regex)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
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

    // Sanitize all inputs to prevent HTML/Script injection
    const cleanName = escapeHtml(name.replace(/[\r\n]/g, ' ').trim())
    const cleanEmail = escapeHtml(email.trim())
    const cleanPhone = phone ? escapeHtml(phone.replace(/[\r\n]/g, ' ').trim()) : ''
    const cleanCompany = company ? escapeHtml(company.replace(/[\r\n]/g, ' ').trim()) : ''
    const cleanMessage = escapeHtml(message.trim())
    const cleanLang = ['de', 'tr', 'en'].includes(language) ? language : 'de'

    console.log('[Contact Form Verified]', {
      timestamp: new Date().toISOString(),
      name: cleanName,
      email: cleanEmail,
      phone: cleanPhone || 'N/A',
      company: cleanCompany || 'N/A',
      language: cleanLang,
      ip: clientIp,
    })

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
        <div class="value">${cleanName}</div>
      </div>
      <div class="field">
        <div class="label">E-Posta</div>
        <div class="value"><a href="mailto:${cleanEmail}" style="color: #3b82f6; text-decoration: none;">${cleanEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Telefon</div>
        <div class="value">${cleanPhone ? `<a href="tel:${cleanPhone}" style="color: #0f172a; text-decoration: none;">${cleanPhone}</a>` : 'Belirtilmedi'}</div>
      </div>
      ${cleanCompany ? `
      <div class="field">
        <div class="label">Firma / Web Sitesi</div>
        <div class="value">${cleanCompany}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="label">Sayfa / Dil</div>
        <div class="value">${cleanLang === 'tr' ? 'Türkçe (TR)' : cleanLang === 'en' ? 'İngilizce (EN)' : 'Almanca (DE)'}</div>
      </div>
      <div class="field">
        <div class="label">Mesaj / Teklif Talebi</div>
        <div class="message-box">${cleanMessage}</div>
      </div>
    </div>
    <div class="footer">
      <p style="margin: 0 0 6px 0;">Bu form <strong>salihmaral.de</strong> üzerinden güvenli SSL doğrulamasıyla iletilmiştir.</p>
      <p style="margin: 0;">Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Berlin' })} &bull; Güvenlik: Filtrelendi</p>
    </div>
  </div>
</body>
</html>
    `

    let sentVia = 'ionos_smtp'
    let emailId = null

    try {
      const smtpRes = await primaryTransporter.sendMail({
        from: '"Salih Maral Web Sitesi" <info@salihmaral.de>',
        to: contactEmail,
        replyTo: email,
        subject: `📬 Yeni Teklif Talebi: ${cleanName} (${cleanCompany || 'Bireysel'}) - salihmaral.de`,
        html: emailHtml,
      })
      emailId = smtpRes.messageId
      console.log('[Contact Form] Delivered via IONOS SMTP:', emailId)
    } catch (smtpErr) {
      console.error('[Contact Form] IONOS SMTP error, trying fallback:', smtpErr)
      if (resend) {
        const fallbackRes = await resend.emails.send({
          from: 'Salih Maral Website <onboarding@resend.dev>',
          to: process.env.RESEND_FALLBACK_EMAIL || 'salihmaralde@gmail.com',
          replyTo: email,
          subject: `📬 [Yedek Kanal] Yeni Teklif Talebi: ${cleanName} (${cleanCompany || 'Bireysel'})`,
          html: emailHtml,
        })
        sentVia = 'resend_fallback'
        emailId = fallbackRes?.data?.id
      } else {
        throw smtpErr
      }
    }

    const successMessages = {
      de: 'Ihre Nachricht wurde erfolgreich gesendet!',
      tr: 'Mesajınız başarıyla gönderildi!',
      en: 'Your message has been sent successfully!',
    }

    return Response.json(
      { 
        success: true, 
        message: successMessages[cleanLang] || successMessages.de,
        emailId: emailId,
        provider: sentVia,
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': String(MAX_REQUESTS_PER_WINDOW),
          'X-RateLimit-Remaining': String(rateLimit.remaining),
        },
      }
    )
  } catch (error) {
    console.error('[Contact Form Error]', error)
    return Response.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
