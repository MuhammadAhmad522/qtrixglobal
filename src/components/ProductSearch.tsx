import { Search } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProductBySlug } from '../data/productDetails'
import { products } from '../data/siteContent'

interface ProductSearchProps {
  className?: string
  onNavigate?: () => void
  placeholder?: string
}

function getSearchText(product: (typeof products)[number]) {
  const variants = getProductBySlug(product.slug)?.variants ?? []
  return [product.name, product.category, product.description, ...variants].join(' ').toLowerCase()
}

export function ProductSearch({
  className = '',
  onNavigate,
  placeholder = 'Search products...',
}: ProductSearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef<HTMLFormElement>(null)
  const inputId = useId()
  const listboxId = `${inputId}-results`
  const navigate = useNavigate()
  const location = useLocation()

  const matches = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return []

    return products
      .filter((product) => getSearchText(product).includes(normalizedQuery))
      .slice(0, 5)
  }, [query])

  useEffect(() => {
    setIsOpen(false)
    setActiveIndex(-1)
  }, [location.pathname, location.search])

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [])

  function openProduct(slug: string) {
    setIsOpen(false)
    setQuery('')
    onNavigate?.()
    navigate(`/products/${slug}`)
  }

  function submitSearch() {
    const normalizedQuery = query.trim()

    if (!normalizedQuery) {
      navigate('/products')
    } else if (matches.length > 0) {
      openProduct(matches[Math.max(activeIndex, 0)].slug)
      return
    } else {
      navigate(`/products?q=${encodeURIComponent(normalizedQuery)}`)
    }

    setIsOpen(false)
    onNavigate?.()
  }

  return (
    <form
      className={`relative ${className}`}
      onSubmit={(event) => {
        event.preventDefault()
        submitSearch()
      }}
      ref={rootRef}
      role="search"
    >
      <label className="sr-only" htmlFor={inputId}>Search products</label>
      <input
        aria-activedescendant={activeIndex >= 0 ? `${inputId}-option-${activeIndex}` : undefined}
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        autoComplete="off"
        className="h-10 w-full rounded-md border border-outline-variant bg-surface-container-low px-4 pr-10 text-sm outline-none transition-colors focus:border-safety-orange"
        id={inputId}
        onChange={(event) => {
          setQuery(event.target.value)
          setIsOpen(true)
          setActiveIndex(-1)
        }}
        onFocus={() => query.trim() && setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' && matches.length > 0) {
            event.preventDefault()
            setIsOpen(true)
            setActiveIndex((index) => (index + 1) % matches.length)
          }
          if (event.key === 'ArrowUp' && matches.length > 0) {
            event.preventDefault()
            setIsOpen(true)
            setActiveIndex((index) => (index <= 0 ? matches.length - 1 : index - 1))
          }
          if (event.key === 'Escape') {
            setIsOpen(false)
            setActiveIndex(-1)
          }
        }}
        placeholder={placeholder}
        role="combobox"
        type="search"
        value={query}
      />
      <button
        aria-label="Search products"
        className="absolute right-0 top-0 flex size-10 items-center justify-center bg-transparent text-steel-gray transition-colors hover:text-safety-orange"
        type="submit"
      >
        <Search aria-hidden="true" className="size-4" />
      </button>

      {isOpen && query.trim() && (
        <div
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-md border border-outline-variant bg-white shadow-xl"
          id={listboxId}
          role="listbox"
        >
          {matches.length > 0 ? (
            matches.map((product, index) => (
              <button
                aria-selected={activeIndex === index}
                className={`flex w-full items-center gap-3 rounded-none border-b border-outline-variant/60 p-3 text-left last:border-0 hover:bg-surface-container-low ${activeIndex === index ? 'bg-surface-container-low' : 'bg-white'}`}
                id={`${inputId}-option-${index}`}
                key={product.slug}
                onClick={() => openProduct(product.slug)}
                onMouseEnter={() => setActiveIndex(index)}
                role="option"
                type="button"
              >
                <img className="size-12 shrink-0 rounded-sm object-cover" src={product.catalogImage ?? product.image} alt="" />
                <span className="min-w-0">
                  <span className="block truncate font-heading font-semibold text-industrial-navy">{product.name}</span>
                  <span className="block font-label text-steel-gray">{product.category}</span>
                </span>
              </button>
            ))
          ) : (
            <div className="p-4" role="status">
              <p className="font-heading font-semibold text-industrial-navy">No products found</p>
              <p className="mt-1 text-xs leading-5 text-steel-gray">Press Enter to view the full catalogue search.</p>
            </div>
          )}
        </div>
      )}
    </form>
  )
}
