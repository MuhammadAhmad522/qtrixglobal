import { ExternalLink } from 'lucide-react'
import { products } from '../data/siteContent'
import { ProductCard } from './ProductCard'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function ProductsSection() {
  return (
    <section className="blueprint-grid relative overflow-hidden bg-white py-20 md:py-24" id="products">
      <Container className="relative z-10">
        <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="section-title mb-4">Our Products</h2>
            <div className="mb-6 h-1.5 w-24 bg-safety-orange" />
            <p className="text-steel-gray">
              Precision-engineered materials for every phase of construction. From structural steel to finishing paints, we ensure consistency across your entire project.
            </p>
          </div>
          <a className="group flex shrink-0 items-center gap-2 font-label text-safety-orange" href="#products">
            Explore all categories
            <ExternalLink aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard index={index} key={product.name} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
