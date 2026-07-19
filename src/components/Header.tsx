import { ArrowRight, Building2, Home, Mail, Menu, PackageSearch, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../data/siteContent'
import { ProductSearch } from './ProductSearch'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  const mobileNavigationIcons = {
    '/': Home,
    '/products': PackageSearch,
    '/about': Building2,
    '/contact': Mail,
  }

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const closeMenu = () => setIsMenuOpen(false)
    mediaQuery.addEventListener('change', closeMenu)
    return () => mediaQuery.removeEventListener('change', closeMenu)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-20 border-b border-steel-gray/20 bg-concrete-white transition-shadow ${isScrolled ? 'shadow-md' : ''}`}
    >
      <Container className="flex h-full items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-8">
          <Link
            className="relative h-14 w-28 shrink-0 overflow-hidden md:h-16 md:w-32"
            to="/"
            aria-label="Qtrix Global home"
          >
            <img
              className="absolute left-1/2 top-1/2 size-36 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover md:size-40"
              src="/assets/qtrix-logo-provided.png"
              alt="Qtrix Global"
            />
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
                end={item.href === '/'}
                to={item.href}
                key={item.label}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ProductSearch className="hidden w-64 lg:block" />
          <ButtonLink className="hidden px-6 py-3 sm:inline-flex" href="/contact">
            Get a Quote
          </ButtonLink>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            className={`icon-button md:hidden ${isMenuOpen ? 'border-industrial-navy bg-industrial-navy text-white' : 'bg-white'}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-50 md:hidden" id="mobile-navigation">
          <button
            aria-label="Close navigation"
            className="mobile-menu-backdrop absolute inset-0 rounded-none bg-industrial-navy/45 backdrop-blur-[2px]"
            onClick={() => setIsMenuOpen(false)}
            type="button"
          />
          <aside className="mobile-menu-panel absolute bottom-0 right-0 top-0 flex w-[min(88vw,360px)] flex-col overflow-y-auto border-l border-outline-variant bg-concrete-white shadow-2xl">
            <div className="border-b border-outline-variant/70 px-5 py-5">
              <div className="mb-4">
                <p className="font-label text-safety-orange">Qtrix Global</p>
                <p className="mt-1 font-heading text-xl font-semibold text-industrial-navy">Menu</p>
              </div>
              <ProductSearch onNavigate={() => setIsMenuOpen(false)} placeholder="Search products..." />
            </div>

            <nav className="px-3 py-4" aria-label="Mobile navigation">
              {navigation.map((item) => {
                const Icon = mobileNavigationIcons[item.href as keyof typeof mobileNavigationIcons]
                return (
                  <NavLink
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                    end={item.href === '/'}
                    to={item.href}
                    key={item.label}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon aria-hidden="true" className="size-5 shrink-0" />
                    <span className="flex-1">{item.label}</span>
                    <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
                  </NavLink>
                )
              })}
            </nav>

            <div className="mt-auto border-t border-outline-variant/70 bg-surface-container-low p-5">
              <ButtonLink className="mb-5 w-full justify-center" href="/contact">
                Get a Quote
                <ArrowRight aria-hidden="true" className="size-4" />
              </ButtonLink>
              <p className="mb-3 font-label text-steel-gray">Direct assistance</p>
              <a className="flex items-center gap-3 text-sm font-semibold text-industrial-navy hover:text-safety-orange" href="tel:+97433029206">
                <span className="flex size-9 items-center justify-center rounded-md bg-white text-safety-orange shadow-sm">
                  <Phone aria-hidden="true" className="size-4" />
                </span>
                +974 3302 9206
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}
