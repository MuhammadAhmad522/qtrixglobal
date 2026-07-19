import { ArrowRight, Grid3X3, List, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { TechnicalTable } from '../components/TechnicalTable'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Container } from '../components/ui/Container'
import { PageHero } from '../components/ui/PageHero'
import { getProductBySlug } from '../data/productDetails'
import { products } from '../data/siteContent'
import type { ProductFilter } from '../types/content'

const filters: Array<'All' | ProductFilter> = ['All', 'Structural', 'Electrical', 'Finishing', 'Safety', 'Protection']

const standards = [
  ['Structural Steel', 'ASTM A36 / ISO 9001', 'Germany', '500 MPa'],
  ['Electric Cables', 'IEC 60502-1', 'UAE', '0.6/1.0 kV'],
  ['Safety Gear', 'EN 397:2012', 'USA', 'N/A'],
  ['Timber', 'FSC Certified', 'Canada', 'B2 Grade'],
]

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const activeFilter = (searchParams.get('category') as ProductFilter | null) ?? 'All'
  const query = searchParams.get('q') ?? ''

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = activeFilter === 'All' || product.category === activeFilter
      const searchText = `${product.name} ${product.description} ${product.category}`.toLowerCase()
      return matchesFilter && searchText.includes(query.toLowerCase())
    })
  }, [activeFilter, query])

  function updateParams(next: { category?: string; q?: string }) {
    const params = new URLSearchParams(searchParams)
    Object.entries(next).forEach(([key, value]) => {
      if (!value || value === 'All') params.delete(key)
      else params.set(key, value)
    })
    setSearchParams(params)
  }

  return (
    <>
      <PageHero
        description="Premium structural materials, safety equipment, and technical supplies engineered for durability and mathematical precision in modern construction."
        eyebrow="Industrial solutions for global infrastructure"
        image="/assets/qtrix-industrial-hero.png"
        title="All Products"
      >
        <ButtonLink href="#catalogue">View Catalogue</ButtonLink>
        <ButtonLink href="#standards" variant="secondary">Technical Specs</ButtonLink>
      </PageHero>

      <section className="sticky top-20 z-30 border-b border-outline-variant bg-white py-5">
        <Container className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-label text-steel-gray">Filter by:</span>
            {filters.map((filter) => (
              <button
                className={`filter-chip ${activeFilter === filter ? 'filter-chip-active' : ''}`}
                key={filter}
                onClick={() => updateParams({ category: filter })}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <label className="relative flex-1 lg:w-64">
              <span className="sr-only">Search catalogue</span>
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-steel-gray" aria-hidden="true" />
              <input
                className="h-10 w-full border border-outline-variant bg-surface-container-low pl-10 pr-3 text-sm outline-none focus:border-safety-orange"
                onChange={(event) => updateParams({ q: event.target.value })}
                placeholder="Search catalogue..."
                type="search"
                value={query}
              />
            </label>
            <div className="flex border border-outline-variant">
              <button className={`catalog-view-button ${view === 'grid' ? 'text-safety-orange' : ''}`} onClick={() => setView('grid')} type="button" aria-label="Grid view"><Grid3X3 /></button>
              <button className={`catalog-view-button border-l border-outline-variant ${view === 'list' ? 'text-safety-orange' : ''}`} onClick={() => setView('list')} type="button" aria-label="List view"><List /></button>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-20" id="catalogue">
        <div className={view === 'grid' ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' : 'grid gap-5'}>
          {filteredProducts.map((product) => (
            <article className={`catalog-card group ${view === 'list' ? 'sm:grid sm:grid-cols-[280px_1fr]' : ''}`} key={product.slug}>
              <div className={`relative overflow-hidden ${view === 'list' ? 'h-60 sm:h-full' : 'h-64'}`}>
                <img className="size-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" src={product.catalogImage ?? product.image} alt={product.alt} />
                <span className="absolute left-4 top-4 bg-industrial-navy px-3 py-1 font-label text-white">{product.category}</span>
              </div>
              <div className="flex flex-col p-6">
                <h2 className="mb-2 font-heading text-2xl font-semibold text-industrial-navy group-hover:text-safety-orange">{product.name}</h2>
                <p className="mb-5 text-sm leading-5 text-steel-gray">{product.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-outline-variant/50 pt-4">
                  <span className="font-label text-industrial-navy">
                    {getProductBySlug(product.slug)?.variants.length ?? 0} variants
                  </span>
                  <Link className="flex items-center gap-1 font-label text-safety-orange" to={`/products/${product.slug}`}>Explore <ArrowRight className="size-3" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="surface-card px-6 py-16 text-center">
            <h2 className="font-heading text-2xl font-semibold text-industrial-navy">No matching products</h2>
            <p className="mt-2 text-steel-gray">Try a different material name or category.</p>
          </div>
        )}
      </Container>

      <section className="bg-industrial-navy py-16 text-white md:py-20" id="standards">
        <Container>
          <h2 className="mb-3 font-heading text-3xl font-bold uppercase md:text-5xl">Technical Standards</h2>
          <p className="mb-10 max-w-2xl text-white/60">All Qtrix Global products adhere to rigorous international safety and durability benchmarks.</p>
          <TechnicalTable headers={['Category', 'Standard Certification', 'Origin', 'Load Rating']} rows={standards} />
        </Container>
      </section>

      <section className="border-y border-outline-variant bg-white py-20 text-center">
        <Container>
          <h2 className="mb-5 font-heading text-3xl font-bold uppercase text-industrial-navy md:text-5xl">Need a custom technical submittal?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-steel-gray">Our engineering team can provide detailed data sheets and CAD drawings for your specific project requirements.</p>
          <ButtonLink href="/contact?subject=Technical%20submittal" variant="dark">Consult an Expert</ButtonLink>
        </Container>
      </section>
    </>
  )
}
