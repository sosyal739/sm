export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, language } = body

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

    // Log the contact form submission (replace with email service later)
    console.log('[Contact Form]', {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone: phone || 'N/A',
      language: language || 'de',
      messageLength: message.length,
    })

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
