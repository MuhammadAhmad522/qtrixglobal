import { useEffect, useState } from 'react'
import { statistics } from '../data/siteContent'
import { useInView } from '../hooks/useInView'
import { Container } from './ui/Container'

interface AnimatedStatisticProps {
  isVisible: boolean
  value: string
}

function AnimatedStatistic({ isVisible, value }: AnimatedStatisticProps) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? Number(match[1]) : null
  const suffix = match?.[2] ?? ''
  const [displayValue, setDisplayValue] = useState(isVisible ? target ?? value : target === null ? value : 0)

  useEffect(() => {
    if (!isVisible || target === null) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(target)
      return
    }

    const duration = 1100
    const startTime = performance.now()
    let frameId = 0

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(target * easedProgress))
      if (progress < 1) frameId = requestAnimationFrame(update)
    }

    frameId = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frameId)
  }, [isVisible, target])

  return (
    <>
      <span aria-hidden="true">{target === null ? value : `${displayValue}${suffix}`}</span>
      <span className="sr-only">{value}</span>
    </>
  )
}

export function StatsSection() {
  const { isVisible, ref } = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <section className="bg-industrial-navy py-12" aria-label="Company statistics" ref={ref}>
      <Container className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">
        {statistics.map((stat, index) => (
          <div
            className={`stat-item ${isVisible ? 'stat-item-visible' : ''} text-center ${index < statistics.length - 1 ? 'md:border-r md:border-white/10' : ''}`}
            key={stat.label}
            style={{ '--stat-delay': `${index * 100}ms` } as React.CSSProperties}
          >
            <p className="font-heading text-4xl font-bold leading-tight text-safety-orange md:text-headline-lg">
              <AnimatedStatistic isVisible={isVisible} value={stat.value} />
            </p>
            <p className="font-label text-white/60">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  )
}
