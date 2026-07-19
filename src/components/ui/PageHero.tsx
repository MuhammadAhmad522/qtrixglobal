import type { ReactNode } from 'react'
import { Container } from './Container'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  children?: ReactNode
  image?: string
}

export function PageHero({ children, description, eyebrow, image, title }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[430px] items-center overflow-hidden bg-industrial-navy py-20 text-white">
      {image && (
        <img className="absolute inset-0 size-full object-cover opacity-35 grayscale" decoding="async" fetchPriority="high" src={image} alt="" />
      )}
      <div className="hero-overlay absolute inset-0" />
      <Container className="relative z-10">
        <div className="max-w-3xl border-l-4 border-safety-orange py-2 pl-6 md:pl-8">
          <p className="hero-enter hero-enter-1 mb-4 font-label text-safety-orange">{eyebrow}</p>
          <h1 className="hero-enter hero-enter-2 mb-5 font-heading text-4xl font-extrabold uppercase leading-tight md:text-display-lg">{title}</h1>
          <p className="hero-enter hero-enter-3 max-w-2xl text-base leading-7 text-white/80 md:text-body-lg">{description}</p>
          {children && <div className="hero-enter hero-enter-4 mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
