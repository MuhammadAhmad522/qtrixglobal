export type WebsiteFormKind = 'contact' | 'callback' | 'newsletter'

export interface WebsiteFormPayload {
  kind: WebsiteFormKind
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  website?: string
}

export async function submitWebsiteForm(payload: WebsiteFormPayload) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const result = await response.json().catch(() => null) as { error?: string } | null
  if (!response.ok) throw new Error(result?.error ?? 'We could not send your request. Please try again.')
}
