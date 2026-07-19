import { AtSign, Phone, Send, Share2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerGroups } from '../data/siteContent'
import { submitWebsiteForm } from '../lib/forms'
import { Container } from './ui/Container'
import { LazyImage } from './ui/LazyImage'

export function Footer() {
  const [newsletterState, setNewsletterState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  return (
    <footer className="border-t border-white/5 bg-industrial-navy pt-16 text-white md:pt-20">
      <Container className="grid gap-12 pb-16 sm:grid-cols-2 md:grid-cols-4 md:gap-6 md:pb-20">
        <div className="flex flex-col items-start gap-6">
          <Link to="/" aria-label="Qtrix Global home">
            <LazyImage className="h-14 w-20 object-cover" src="/assets/qtrix-logo.jpg" alt="Qtrix Global" />
          </Link>
          <p className="text-sm leading-5 text-concrete-white/60">
            The industry standard for premium construction supplies. Building trust through material excellence since 2024.
          </p>
          <div className="flex gap-3">
            <a className="footer-icon" href="mailto:info@qtrixglobal.com?subject=Qtrix Global enquiry" aria-label="Share Qtrix Global">
              <Share2 aria-hidden="true" className="size-4" />
            </a>
            <a className="footer-icon" href="mailto:info@qtrixglobal.com" aria-label="Email Qtrix Global">
              <AtSign aria-hidden="true" className="size-4" />
            </a>
            <a className="footer-icon" href="tel:+97433029206" aria-label="Call Qtrix Global at +974 3302 9206">
              <Phone aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        {footerGroups.map((group) => (
          <nav key={group.title} aria-label={`${group.title} links`}>
            <h2 className="mb-7 font-label text-safety-orange">{group.title}</h2>
            <ul className="space-y-4">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link className="text-sm text-concrete-white/80 transition-colors hover:text-safety-orange" to={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="mb-7 font-label text-safety-orange">Newsletter</h2>
          <p className="mb-4 text-sm leading-5 text-concrete-white/60">
            Stay updated with our latest technical specifications and project highlights.
          </p>
          <form className="flex" onSubmit={async (event) => {
            event.preventDefault()
            const form = event.currentTarget
            const formData = new FormData(form)
            setNewsletterState('sending')
            try {
              await submitWebsiteForm({ kind: 'newsletter', email: formData.get('email')?.toString(), website: formData.get('website')?.toString() })
              form.reset()
              setNewsletterState('success')
            } catch {
              setNewsletterState('error')
            }
          }}>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input
              className="min-w-0 flex-1 border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none placeholder:text-white/50 focus:border-safety-orange"
              id="newsletter-email"
              name="email"
              placeholder="Email"
              required
              type="email"
            />
            <input className="sr-only" aria-hidden="true" autoComplete="off" name="website" tabIndex={-1} />
            <button className="flex size-10 shrink-0 items-center justify-center bg-safety-orange text-white hover:bg-secondary disabled:cursor-wait disabled:opacity-60" disabled={newsletterState === 'sending'} type="submit" aria-label="Subscribe">
              <Send aria-hidden="true" className="size-4" />
            </button>
          </form>
          {newsletterState === 'success' && <p className="mt-3 text-xs text-concrete-white/80" role="status">Subscription request sent.</p>}
          {newsletterState === 'error' && <p className="mt-3 text-xs text-red-300" role="alert">Could not subscribe. Please try again.</p>}
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 text-center font-label text-concrete-white/40 sm:flex-row sm:text-left">
        <p>© 2024 Qtrix Global. All rights reserved.</p>
        <p>Built for reliability</p>
      </Container>
    </footer>
  )
}
