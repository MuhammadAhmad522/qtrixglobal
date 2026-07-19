import { qualityFeatures } from '../data/siteContent'
import { Container } from './ui/Container'

export function QualitySection() {
  return (
    <section className="scroll-mt-20 bg-concrete-white py-20 md:py-24" id="quality">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <div className="relative flex min-h-64 items-center pb-8 pr-0 sm:min-h-80 sm:pr-8 lg:pb-0">
            <div className="absolute left-0 right-16 top-1/2 h-3 -translate-y-1/2 bg-surface-dim" aria-hidden="true" />
            <div className="relative z-20 ml-auto max-w-sm border-l-4 border-safety-orange bg-industrial-navy p-6 sm:p-8">
              <h3 className="mb-2 font-heading text-xl font-semibold text-white sm:text-2xl">Sustainable Foundation</h3>
              <p className="text-sm leading-5 text-white/60">
                Our &quot;Super Concrete&quot; technology reduces carbon footprint by 40% while maintaining industry-leading structural integrity.
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-4 font-label text-safety-orange">Commitment to excellence</p>
          <h2 className="section-title mb-8">Quality &amp; Sustainability</h2>
          <div className="space-y-8">
            {qualityFeatures.map(({ description, icon: Icon, title }) => (
              <article className="flex gap-5 md:gap-6" key={title}>
                <div className="flex size-12 shrink-0 items-center justify-center bg-industrial-navy text-safety-orange">
                  <Icon aria-hidden="true" className="size-5" />
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-xl font-semibold text-on-surface md:text-2xl">{title}</h3>
                  <p className="text-steel-gray">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
