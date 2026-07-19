import type { ProductCategory } from '../types/content'
import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { LazyImage } from './ui/LazyImage'

interface ProductCardProps {
  product: ProductCategory
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const isTall = index < 3
  const { isVisible, ref } = useInView<HTMLAnchorElement>()

  return (
    <Link
      className={`reveal group relative overflow-hidden rounded-lg border border-outline-variant bg-surface-container shadow-sm transition-shadow hover:shadow-xl ${isVisible ? 'reveal-visible' : ''} ${product.featured ? 'md:col-span-2' : ''} ${isTall ? 'h-80 md:h-[400px]' : 'h-64 md:h-[280px]'}`}
      ref={ref}
      style={{ '--reveal-delay': `${(index % 4) * 80}ms` } as CSSProperties}
      to={`/products/${product.slug}`}
    >
      <LazyImage
        className="product-card-image absolute inset-0 size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        src={product.image}
        alt={product.alt}
      />
      <div className="product-card-overlay absolute inset-0 bg-black/15 transition-colors group-hover:bg-transparent" />
      <div className="product-card-gradient absolute inset-x-0 bottom-0 p-6 md:p-8">
        {product.eyebrow && (
          <p className="mb-2 font-label text-safety-orange">{product.eyebrow}</p>
        )}
        <h3 className={`${isTall ? 'font-heading text-2xl font-semibold normal-case' : 'font-label text-sm'} text-white`}>
          {product.name}
        </h3>
      </div>
    </Link>
  )
}
