import { CallToAction } from '../components/CallToAction'
import { Hero } from '../components/Hero'
import { ProductsSection } from '../components/ProductsSection'
import { QualitySection } from '../components/QualitySection'
import { StatsSection } from '../components/StatsSection'

export function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProductsSection />
      <QualitySection />
      <CallToAction />
    </>
  )
}
