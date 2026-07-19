import { ArrowRight, CheckCircle2, FileText } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { TechnicalTable } from '../components/TechnicalTable'
import { Breadcrumbs } from '../components/ui/Breadcrumbs'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Container } from '../components/ui/Container'
import { getProductBySlug } from '../data/productDetails'
import { products } from '../data/siteContent'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) return <Navigate replace to="/products" />

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3)

  return (
    <>
      <Container className="py-10 md:py-12">
        <Breadcrumbs current={product.name} parent={{ label: 'Products', href: '/products' }} />
        <section className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="relative flex aspect-square max-h-[620px] items-center justify-center overflow-hidden border border-outline-variant bg-white p-5 md:p-10">
              <img className="max-h-full max-w-full object-contain transition-transform duration-700 hover:scale-105" src={product.image} alt={product.alt} />
              <span className="absolute left-4 top-4 bg-industrial-navy px-3 py-1 font-label text-white">{product.badge}</span>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {[product.image, ...related.map((item) => item.catalogImage ?? item.image)].map((image, index) => (
                <div className={`aspect-square overflow-hidden border bg-white p-2 ${index === 0 ? 'border-2 border-safety-orange' : 'border-outline-variant'}`} key={image}>
                  <img className="size-full object-cover grayscale" src={image} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
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
            <ul className="mb-10 space-y-4">
              {product.highlights.map((highlight) => (
                <li className="flex items-start gap-3" key={highlight}>
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-safety-orange" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink className="flex-1" href={`/contact?subject=${encodeURIComponent(`${product.name} quote`)}`}>
                <FileText aria-hidden="true" className="size-4" /> Request Technical Quote
              </ButtonLink>
              <ButtonLink className="flex-1 border-industrial-navy text-industrial-navy hover:bg-industrial-navy hover:text-white" href="#specifications" variant="secondary">
                View Technical Data
              </ButtonLink>
            </div>
          </div>
        </section>
      </Container>

      <section className="bg-surface-container-low py-16 md:py-20" id="specifications">
        <Container>
          <h2 className="mb-8 font-heading text-3xl font-bold text-industrial-navy md:text-4xl">Technical Specifications</h2>
          <TechnicalTable headers={product.specificationHeaders} rows={product.specificationRows} />
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-label text-safety-orange">Engineered for the field</p>
            <h2 className="font-heading text-3xl font-bold text-industrial-navy md:text-4xl">Performance &amp; Application</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {product.features.map(({ description, icon: Icon, title }, index) => (
              <article className={`${index === 0 ? 'bg-industrial-navy text-white' : 'border border-outline-variant bg-white text-industrial-navy'} p-7 md:p-8`} key={title}>
                <Icon aria-hidden="true" className="mb-8 size-7 text-safety-orange" />
                <h3 className="mb-3 font-heading text-2xl font-semibold">{title}</h3>
                <p className={index === 0 ? 'text-white/60' : 'text-steel-gray'}>{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-concrete-white py-16 md:py-20">
        <Container>
          <h2 className="mb-8 font-heading text-3xl font-bold text-industrial-navy">Complementary Project Assets</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link className="group border border-outline-variant bg-white" to={`/products/${item.slug}`} key={item.slug}>
                <div className="h-52 overflow-hidden"><img className="size-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" src={item.catalogImage ?? item.image} alt={item.alt} /></div>
                <div className="p-5">
                  <p className="mb-2 font-label text-safety-orange">{item.category}</p>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heading text-xl font-semibold text-industrial-navy">{item.name}</h3>
                    <ArrowRight className="size-4 shrink-0 text-safety-orange" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="blueprint-dark bg-industrial-navy py-16 text-center text-white md:py-20">
        <Container>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-5xl">Require Custom Specs?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/60">Our engineering team can prepare custom configurations, volume pricing, and technical submittal packages for your project.</p>
          <ButtonLink href={`/contact?subject=${encodeURIComponent(`${product.name} custom specification`)}`}>Contact Sales Engineer</ButtonLink>
        </Container>
      </section>
    </>
  )
}
