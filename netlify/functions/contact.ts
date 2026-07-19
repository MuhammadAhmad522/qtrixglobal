import type { Handler } from '@netlify/functions'
import nodemailer from 'nodemailer'

type FormKind = 'contact' | 'callback' | 'newsletter'

interface ContactPayload {
  kind?: FormKind
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  website?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, maximumLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maximumLength) : ''
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character)
}

function json(statusCode: number, body: object) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') return json(405, { error: 'Method not allowed.' })
  if (!event.body || event.body.length > 20_000) return json(400, { error: 'Invalid request.' })

  let payload: ContactPayload
  try {
    payload = JSON.parse(event.body) as ContactPayload
  } catch {
    return json(400, { error: 'Invalid request.' })
  }

  // Bots commonly fill hidden fields. Return success without sending so they do not retry.
  if (clean(payload.website, 200)) return json(200, { ok: true })

  const kind = payload.kind ?? 'contact'
  const name = clean(payload.name, 120)
  const email = clean(payload.email, 254).toLowerCase()
  const phone = clean(payload.phone, 50)
  const subject = clean(payload.subject, 160).replace(/[\r\n]+/g, ' ')
  const message = clean(payload.message, 5_000)

  if (!['contact', 'callback', 'newsletter'].includes(kind)) return json(400, { error: 'Invalid form type.' })
  if (kind === 'contact' && (!name || !emailPattern.test(email) || !message)) {
    return json(400, { error: 'Please provide your name, a valid email, and your requirements.' })
  }
  if (kind === 'callback' && !phone) return json(400, { error: 'Please provide a phone number.' })
  if (kind === 'newsletter' && !emailPattern.test(email)) return json(400, { error: 'Please provide a valid email address.' })

  const smtpHost = process.env.SMTP_HOST ?? 'smtp.hostinger.com'
  const smtpPort = Number(process.env.SMTP_PORT ?? 465)
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const salesRecipient = process.env.CONTACT_TO_EMAIL ?? 'sales@qtrixglobal.com'
  const infoRecipient = process.env.INFO_TO_EMAIL ?? 'info@qtrixglobal.com'

  if (!smtpUser || !smtpPass) {
    console.error('Hostinger SMTP environment variables are not configured.')
    return json(503, { error: 'Email service is not configured yet. Please contact us directly.' })
  }

  const labels: Record<FormKind, string> = {
    contact: subject || 'Product inquiry',
    callback: 'Callback request',
    newsletter: 'Newsletter subscription',
  }
  const recipient = kind === 'newsletter' ? infoRecipient : salesRecipient
  const rows = [
    ['Form', kind],
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Subject', subject],
    ['Message', message],
  ].filter(([, value]) => value)

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  })

  try {
    await transporter.sendMail({
      from: `Qtrix Global Website <${smtpUser}>`,
      to: recipient,
      replyTo: email || smtpUser,
      subject: `[Website] ${labels[kind]}`,
      text: rows.map(([label, value]) => `${label}: ${value}`).join('\n\n'),
      html: `<h2>New ${escapeHtml(labels[kind])}</h2><table cellpadding="8" cellspacing="0" style="border-collapse:collapse">${rows.map(([label, value]) => `<tr><th align="left" valign="top" style="border-bottom:1px solid #ddd">${escapeHtml(label)}</th><td style="border-bottom:1px solid #ddd;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`).join('')}</table>`,
    })
    return json(200, { ok: true })
  } catch (error) {
    console.error('Hostinger SMTP delivery failed:', error)
    return json(502, { error: 'We could not send your request. Please email us directly.' })
  }
}
