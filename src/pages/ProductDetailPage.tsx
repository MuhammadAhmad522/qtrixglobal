import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { TechnicalTable } from '../components/TechnicalTable'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Container } from '../components/ui/Container'
import { LazyImage } from '../components/ui/LazyImage'
import { Reveal } from '../components/ui/Reveal'
import { getProductBySlug } from '../data/productDetails'
import { products } from '../data/siteContent'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0)

  useEffect(() => {
    setSelectedImageIndex(0)
    setSelectedVariantIndex(0)
  }, [product?.slug])

  if (!product) return <Navigate replace to="/products" />

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)
  const catalogProduct = products.find((item) => item.slug === product.slug)
  const galleryImages = [
    { src: product.image, alt: product.alt },
    ...(catalogProduct?.catalogImage ? [{ src: catalogProduct.catalogImage, alt: catalogProduct.alt }] : []),
    ...(catalogProduct?.image ? [{ src: catalogProduct.image, alt: catalogProduct.alt }] : []),
  ].filter((image, index, images) => images.findIndex((candidate) => candidate.src === image.src) === index)
  const selectedImage = galleryImages[selectedImageIndex] ?? galleryImages[0]
  const selectedVariant = product.variants[selectedVariantIndex] ?? product.variants[0]

  function cycleImage(direction: number) {
    setSelectedImageIndex((current) => (current + direction + galleryImages.length) % galleryImages.length)
  }

  function selectVariant(index: number) {
    setSelectedVariantIndex(index)
    if (galleryImages[index]) setSelectedImageIndex(index)
  }

  return (
    <>
      <Container className="py-10 md:py-12">
        <Breadcrumbs current={product.name} parent={{ label: 'Products', href: '/products' }} />
        <section className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="surface-card relative aspect-[16/10] overflow-hidden bg-surface-container-high">
              <img className="size-full object-cover transition-transform duration-500 hover:scale-105" decoding="async" src={selectedImage.src} alt={selectedImage.alt} />
              <span className="absolute left-4 top-4 bg-industrial-navy px-3 py-1 font-label text-white">{product.badge}</span>
              {galleryImages.length > 1 && (
                <>
                  <button className="gallery-arrow left-4" onClick={() => cycleImage(-1)} type="button" aria-label="View previous product image"><ChevronLeft aria-hidden="true" /></button>
                  <button className="gallery-arrow right-4" onClick={() => cycleImage(1)} type="button" aria-label="View next product image"><ChevronRight aria-hidden="true" /></button>
                </>
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galleryImages.map((image, index) => (
                <button
                  aria-label={`View product image ${index + 1}`}
                  aria-pressed={selectedImageIndex === index}
                  className={`aspect-[16/10] overflow-hidden rounded-md border bg-surface-container-high shadow-sm transition-colors hover:border-safety-orange ${selectedImageIndex === index ? 'border-2 border-safety-orange' : 'border-outline-variant'}`}
                  key={image.src}
                  onClick={() => setSelectedImageIndex(index)}
                  type="button"
                >
                  <LazyImage className={`gallery-thumbnail-image size-full object-cover transition ${selectedImageIndex === index ? 'grayscale-0' : 'grayscale hover:grayscale-0'}`} src={image.src} alt="" />
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:py-4" delay={140}>
            <p className="mb-3 font-label text-safety-orange">{product.category} materials</p>
            <h1 className="mb-5 font-heading text-4xl font-bold leading-tight text-industrial-navy md:text-5xl">{product.name}</h1>
            <p className="mb-8 text-base leading-7 text-steel-gray md:text-body-lg">{product.description}</p>
            <div className="mb-8 grid grid-cols-2 gap-5 border-y border-outline-variant/70 py-7">
              {product.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="mb-1 block font-label text-steel-gray">{fact.label}</span>
                  <span className="font-heading text-lg font-semibold text-industrial-navy md:text-xl">{fact.value}</span>
                </div>
              ))}
            </div>
            <fieldset className="mb-8">
              <legend className="mb-3 font-label text-industrial-navy">Available variants</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.variants.map((variant, index) => (
                  <button
                    aria-pressed={selectedVariantIndex === index}
                    className={`variant-button ${selectedVariantIndex === index ? 'variant-button-active' : ''}`}
                    key={variant}
                    onClick={() => selectVariant(index)}
                    type="button"
                  >
                    {variant}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-md bg-surface-container-low px-4 py-3 text-sm">
                <span className="size-2 shrink-0 rounded-full bg-safety-orange" aria-hidden="true" />
                <span><strong className="text-industrial-navy">{selectedVariant}</strong> selected for technical quotation.</span>
              </div>
            </fieldset>
            <ul className="mb-10 space-y-4">
              {product.highlights.map((highlight) => (
                <li className="flex items-start gap-3" key={highlight}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-safety-orange" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink className="flex-1" href={`/contact?subject=${encodeURIComponent(`${product.name} - ${selectedVariant} quote`)}`}>
                <FileText aria-hidden="true" className="size-4" /> Request Technical Quote
              </ButtonLink>
              <ButtonLink className="flex-1" href="#specifications" variant="outline-dark">
                View Technical Data
              </ButtonLink>
            </div>
          </Reveal>
        </section>
      </Container>

      <section className="bg-surface-container-low py-16 md:py-20" id="specifications">
        <Container>
          <Reveal>
            <h2 className="mb-8 font-heading text-3xl font-bold text-industrial-navy md:text-4xl">Technical Specifications</h2>
            <TechnicalTable headers={product.specificationHeaders} rows={product.specificationRows} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <Reveal><div className="mb-10 max-w-2xl">
            <p className="mb-3 font-label text-safety-orange">Engineered for the field</p>
            <h2 className="font-heading text-3xl font-bold text-industrial-navy md:text-4xl">Performance &amp; Application</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {product.features.map(({ description, icon: Icon, title }, index) => (
              <article className={`surface-card surface-card-interactive ${index === 0 ? 'border-industrial-navy bg-industrial-navy text-white' : 'text-industrial-navy'} p-7 md:p-8`} key={title}>
                <Icon aria-hidden="true" className="mb-8 size-7 text-safety-orange" />
                <h3 className="mb-3 font-heading text-2xl font-semibold">{title}</h3>
                <p className={index === 0 ? 'text-white/60' : 'text-steel-gray'}>{description}</p>
              </article>
            ))}
          </div></Reveal>
        </Container>
      </section>

      <section className="bg-concrete-white py-16 md:py-20">
        <Container>
          <Reveal><h2 className="mb-8 font-heading text-3xl font-bold text-industrial-navy">Complementary Project Assets</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link className="surface-card surface-card-interactive group" to={`/products/${item.slug}`} key={item.slug}>
                <div className="h-52 overflow-hidden"><LazyImage className="related-product-image size-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" src={item.catalogImage ?? item.image} alt={item.alt} /></div>
                <div className="p-5">
                  <p className="mb-2 font-label text-safety-orange">{item.category}</p>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-xl font-semibold text-industrial-navy">{item.name}</h3>
                    <ArrowRight className="size-4 shrink-0 text-safety-orange" />
                  </div>
                </div>
              </Link>
            ))}
          </div></Reveal>
        </Container>
      </section>

      <section className="blueprint-dark bg-industrial-navy py-16 text-center text-white md:py-20">
        <Container>
          <Reveal>
            <h2 className="mb-5 font-heading text-3xl font-bold md:text-5xl">Require Custom Specs?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-white/60">Our engineering team can prepare custom configurations, volume pricing, and technical submittal packages for your project.</p>
            <ButtonLink href={`/contact?subject=${encodeURIComponent(`${product.name} - ${selectedVariant} custom specification`)}`}>Contact Sales Engineer</ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
