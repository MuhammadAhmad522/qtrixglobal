import { ArrowRight } from 'lucide-react'
import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'

export function Hero() {
  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden md:h-[80vh]" id="home">
      <img
        className="absolute inset-0 size-full object-cover"
        src="/assets/hero-construction.jpg"
        alt="Large-scale construction site with heavy machinery."
      />
      <div className="hero-overlay absolute inset-0" />
      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <p className="mb-6 inline-block bg-safety-orange px-4 py-1 font-label text-white">
            Established 2024
          </p>
          <h1 className="mb-6 font-heading text-[2.5rem] font-extrabold leading-[1.08] text-white sm:text-5xl md:text-display-lg">
            Your Partner in Premium{' '}
            <span className="text-safety-orange">Construction</span> Materials
          </h1>
          <p className="mb-10 max-w-xl text-base leading-7 text-white/80 md:text-body-lg">
            Reliability, durability, and high-quality engineering. We supply the foundation for tomorrow&apos;s infrastructure with professional-grade building solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#products">
              View Inventory
              <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Download Catalog
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
