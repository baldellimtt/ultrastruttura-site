import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validazione
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Prepara i dati email
    const emailSubject = `Contact Form - ${name}`
    const emailText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `

    // Usa Resend se configurato, altrimenti logga per sviluppo
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev', // Cambia con il tuo dominio verificato
          to: 'Andrea.baldelli@icloud.com',
          reply_to: email,
          subject: emailSubject,
          html: emailHtml,
          text: emailText,
        }),
      })

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json()
        throw new Error(errorData.message || 'Failed to send email')
      }
    } else {
      // In sviluppo, logga i dati
      console.log('📧 Contact form submission (development mode):')
      console.log('To: Andrea.baldelli@icloud.com')
      console.log('From:', email)
      console.log('Subject:', emailSubject)
      console.log('Message:', message)
      console.log('\n⚠️  To enable email sending, configure RESEND_API_KEY in .env.local')
      console.log('See EMAIL_SETUP.md for instructions')
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
