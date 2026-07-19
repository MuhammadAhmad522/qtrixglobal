import { statistics } from '../data/siteContent'
import { Container } from './ui/Container'

export function StatsSection() {
  return (
    <section className="bg-industrial-navy py-12" aria-label="Company statistics">
      <Container className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">
        {statistics.map((stat, index) => (
          <div
            className={`text-center ${index < statistics.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
            key={stat.label}
          >
            <p className="font-heading text-4xl font-bold leading-tight text-safety-orange md:text-headline-lg">
              {stat.value}
            </p>
            <p className="font-label text-white/60">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
