import { MongoClient } from 'mongodb'
import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import { Resend } from 'resend'

const uri = process.env.MONGO_URL
let client
let clientPromise

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

if (!uri) {
  throw new Error('Please add your Mongo URI to .env')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri)
  clientPromise = client.connect()
}

async function getDatabase() {
  const client = await clientPromise
  return client.db(process.env.DB_NAME || 'salih_maral_website')
}

// GET handler
export async function GET(request) {
  const { pathname } = new URL(request.url)

  try {
    if (pathname === '/api/health') {
      return NextResponse.json({ status: 'ok', timestamp: new Date().toISOString() })
    }

    if (pathname === '/api/contacts') {
      const db = await getDatabase()
      const contacts = await db.collection('contacts').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return NextResponse.json({ success: true, data: contacts })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('GET Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST handler
export async function POST(request) {
  const { pathname } = new URL(request.url)

  try {
    if (pathname === '/api/contact') {
      const body = await request.json()
      const { name, email, phone, message, language } = body

      if (!name || !email || !phone || !message) {
        return NextResponse.json(
          { error: 'All fields are required' },
          { status: 400 }
        )
      }

      const db = await getDatabase()
      const contact = {
        id: uuidv4(),
        name,
        email,
        phone,
        message,
        language: language || 'de',
        createdAt: new Date().toISOString(),
        status: 'new'
      }

      await db.collection('contacts').insertOne(contact)

      // Send email notification via Resend
      try {
        const contactEmail = process.env.CONTACT_EMAIL || 'salihmaralde@gmail.com'
        
        // Create HTML email template
        const emailHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #4285F4, #34A853); padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .header h1 { color: white; margin: 0; font-size: 24px; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #4285F4; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .field-value { background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #4285F4; }
              .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 3px solid #34A853; white-space: pre-wrap; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔔 Yeni İletişim Formu Mesajı</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Gönderen</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">E-posta</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Telefon</div>
                  <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">Dil / Language</div>
                  <div class="field-value">${language === 'de' ? 'Almanca (DE)' : language === 'en' ? 'İngilizce (EN)' : 'Türkçe (TR)'}</div>
                </div>
                <div class="field">
                  <div class="field-label">Mesaj</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>
              <div class="footer">
                <p>Bu mesaj salihmaral.de web sitesi iletişim formundan gönderilmiştir.</p>
                <p>Tarih: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Berlin' })}</p>
              </div>
            </div>
          </body>
          </html>
        `

        await resend.emails.send({
          from: 'Salih Maral Website <onboarding@resend.dev>',
          to: contactEmail,
          subject: `📬 Yeni İletişim: ${name} - salihmaral.de`,
          html: emailHtml,
          replyTo: email
        })

        console.log('Email notification sent successfully to:', contactEmail)
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Failed to send email notification:', emailError)
      }

      return NextResponse.json({ success: true, data: contact })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('POST Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PUT handler
export async function PUT(request) {
  const { pathname } = new URL(request.url)

  try {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('PUT Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// DELETE handler
export async function DELETE(request) {
  const { pathname } = new URL(request.url)

  try {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  } catch (error) {
    console.error('DELETE Error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}