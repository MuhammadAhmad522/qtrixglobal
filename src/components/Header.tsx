import { Menu, Search, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { navigation } from '../data/siteContent'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

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
          <form
            className="relative hidden lg:block"
            role="search"
            onSubmit={(event) => {
              event.preventDefault()
              const query = new FormData(event.currentTarget).get('query')?.toString().trim()
              navigate(query ? `/products?q=${encodeURIComponent(query)}` : '/products')
            }}
          >
            <label className="sr-only" htmlFor="material-search">
              Search materials
            </label>
            <input
              className="h-10 w-64 border border-outline-variant bg-surface-container-low px-4 pr-10 text-sm outline-none transition-colors focus:border-safety-orange"
              id="material-search"
              name="query"
              placeholder="Search Materials..."
              type="search"
            />
            <button
              aria-label="Search materials"
              className="absolute right-0 top-0 flex size-10 items-center justify-center bg-transparent text-steel-gray transition-colors hover:text-safety-orange"
              type="submit"
            >
              <Search aria-hidden="true" className="size-4" />
            </button>
          </form>
          <ButtonLink className="hidden px-6 py-3 sm:inline-flex" href="/contact">
            Get a Quote
          </ButtonLink>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            className="icon-button md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        className={`absolute inset-x-0 top-20 border-b border-outline-variant bg-concrete-white px-4 py-5 shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-navigation"
      >
        <nav className="flex flex-col" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <NavLink
              className="border-b border-outline-variant/60 px-2 py-4 font-label text-industrial-navy last:border-0 hover:text-safety-orange"
              to={item.href}
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <ButtonLink className="mt-4 justify-center sm:hidden" href="/contact">
            Get a Quote
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
