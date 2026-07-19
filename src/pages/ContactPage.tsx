import { Headphones, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from '../components/ui/Container'
import { LazyImage } from '../components/ui/LazyImage'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { submitWebsiteForm } from '../lib/forms'

type SubmissionState = 'idle' | 'sending' | 'success' | 'error'

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle')
  const [callbackState, setCallbackState] = useState<SubmissionState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const defaultSubject = searchParams.get('subject') ?? 'Product Inquiry'
  const subjects = Array.from(new Set([
    defaultSubject,
    'Product Inquiry',
    'Technical Submittal',
    'Bulk Quotation',
    'Logistics Support',
  ]))

  return (
    <>
      <PageHero
        description="From technical specifications to procurement logistics, we provide precision support for Doha's leading construction projects."
        eyebrow="Global industrial partner"
        image="/assets/super-concrete.png"
        title="Get in Touch with Our Industrial Experts"
      />

      <section className="bg-concrete-white py-14 md:py-20">
        <Container className="grid items-start gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <Reveal>
            <form
              className="surface-card p-6 md:p-10"
              onSubmit={async (event) => {
                event.preventDefault()
                const form = event.currentTarget
                const formData = new FormData(form)
                setSubmissionState('sending')
                setErrorMessage('')

                try {
                  await submitWebsiteForm({
                    kind: 'contact',
                    name: formData.get('name')?.toString(),
                    email: formData.get('email')?.toString(),
                    phone: formData.get('phone')?.toString(),
                    subject: formData.get('subject')?.toString(),
                    message: formData.get('message')?.toString(),
                    website: formData.get('website')?.toString(),
                  })
                  form.reset()
                  setSubmissionState('success')
                } catch (error) {
                  setErrorMessage(error instanceof Error ? error.message : 'We could not send your inquiry.')
                  setSubmissionState('error')
                }
              }}
            >
              <h2 className="mb-8 font-heading text-3xl font-bold text-industrial-navy md:text-4xl">Send an Inquiry</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="form-label">Full Name<input className="form-input" name="name" placeholder="John Doe" required /></label>
                <label className="form-label">Email Address<input className="form-input" name="email" placeholder="john@company.com" required type="email" /></label>
                <label className="form-label">Subject<select className="form-input" defaultValue={defaultSubject} name="subject">{subjects.map((subject) => <option key={subject}>{subject}</option>)}</select></label>
                <label className="form-label">Phone Number<input className="form-input" name="phone" placeholder="+974 XXXX XXXX" type="tel" /></label>
                <label className="form-label md:col-span-2">Message<textarea className="form-input min-h-40 resize-y" name="message" placeholder="Describe your project or product requirements..." required /></label>
                <label className="sr-only" aria-hidden="true">Website<input autoComplete="off" name="website" tabIndex={-1} /></label>
              </div>
              <button className="button-link mt-7 bg-safety-orange text-white hover:bg-secondary disabled:cursor-wait disabled:opacity-60" disabled={submissionState === 'sending'} type="submit">{submissionState === 'sending' ? 'Sending...' : 'Submit Inquiry'}</button>
              {submissionState === 'success' && <p className="mt-5 border-l-4 border-safety-orange bg-surface-container-low p-4 text-sm text-industrial-navy" role="status">Thank you. Your inquiry has been sent to the Qtrix Global sales team.</p>}
              {submissionState === 'error' && <p className="mt-5 border-l-4 border-red-600 bg-red-50 p-4 text-sm text-red-800" role="alert">{errorMessage} You can also email <a className="font-bold underline" href="mailto:sales@qtrixglobal.com">sales@qtrixglobal.com</a>.</p>}
            </form>
          </Reveal>

          <Reveal as="aside" className="space-y-6" delay={140}>
            <div className="overflow-hidden rounded-lg bg-industrial-navy p-7 text-white shadow-lg md:p-8">
              <h2 className="mb-6 border-b border-safety-orange pb-4 font-heading text-2xl font-semibold">Our Presence</h2>
              <div className="space-y-7">
                <div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-safety-orange" /><div><p className="mb-1 font-label text-steel-gray">Headquarters</p><p>Qtrix Global Tower, Lusail Marina District,<br />Doha, State of Qatar</p></div></div>
                <div className="flex gap-4"><Phone className="mt-1 size-5 shrink-0 text-safety-orange" /><div><p className="mb-1 font-label text-steel-gray">Direct Line</p><a href="tel:+97433029206">+974 3302 9206</a><p className="mt-1 text-sm text-steel-gray">Sun-Thu: 8:00 AM - 5:00 PM</p></div></div>
                <div className="flex gap-4"><Mail className="mt-1 size-5 shrink-0 text-safety-orange" /><div><p className="mb-1 font-label text-steel-gray">Email Communications</p><a className="block hover:text-safety-orange" href="mailto:info@qtrixglobal.com">info@qtrixglobal.com</a><a className="block text-sm text-steel-gray hover:text-safety-orange" href="mailto:sales@qtrixglobal.com">sales@qtrixglobal.com</a></div></div>
              </div>
            </div>

            <form className="rounded-lg border border-outline-variant/70 bg-surface-container-high p-7 shadow-sm" onSubmit={async (event) => {
              event.preventDefault()
              const form = event.currentTarget
              const formData = new FormData(form)
              setCallbackState('sending')
              try {
                await submitWebsiteForm({ kind: 'callback', phone: formData.get('phone')?.toString(), website: formData.get('website')?.toString() })
                form.reset()
                setCallbackState('success')
              } catch {
                setCallbackState('error')
              }
            }}>
              <h2 className="mb-4 flex items-center gap-3 font-heading text-2xl font-semibold text-industrial-navy"><Headphones className="text-safety-orange" /> Request a Callback</h2>
              <p className="mb-5 text-sm text-steel-gray">Leave your number and our specialized engineers will call you within 2 business hours.</p>
              <label className="sr-only" htmlFor="callback-number">Mobile number</label>
              <input className="form-input mb-3 bg-white" id="callback-number" name="phone" placeholder="Enter your mobile number" required type="tel" />
              <input className="sr-only" aria-hidden="true" autoComplete="off" name="website" tabIndex={-1} />
              <button className="button-link w-full bg-industrial-navy text-white hover:bg-black disabled:cursor-wait disabled:opacity-60" disabled={callbackState === 'sending'} type="submit">{callbackState === 'sending' ? 'Sending...' : 'Call Me Back'}</button>
              {callbackState === 'success' && <p className="mt-3 text-sm font-semibold text-industrial-navy" role="status">Your callback request has been sent.</p>}
              {callbackState === 'error' && <p className="mt-3 text-sm font-semibold text-red-700" role="alert">Could not send. Please call +974 3302 9206.</p>}
            </form>

            <div className="relative h-72 overflow-hidden rounded-lg border border-outline-variant shadow-sm">
              <LazyImage className="size-full object-cover grayscale" src="/assets/contact-map.jpg" alt="Map visualization of the Doha office location." />
              <div className="absolute bottom-4 left-4 bg-white p-3 shadow"><p className="font-label">Office Coordinates</p><p className="text-sm font-bold">25.3548 N, 51.5329 E</p></div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-outline-variant bg-white py-14 text-center">
        <Container><Reveal>
          <h2 className="mb-8 font-label text-steel-gray">Trusted by global standards</h2>
          <div className="flex flex-wrap justify-center gap-5 md:gap-10">
            {['ISO 9001', 'FSC', 'CE', 'EN 397'].map((standard) => <div className="flex min-h-16 min-w-32 items-center justify-center rounded-lg border border-outline-variant bg-concrete-white px-5 font-heading font-bold text-steel-gray shadow-sm" key={standard}>{standard}</div>)}
          </div>
        </Reveal></Container>
      </section>
    </>
  )
}
