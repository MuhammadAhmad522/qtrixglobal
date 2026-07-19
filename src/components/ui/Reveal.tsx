import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'

interface RevealProps {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ as: Component = 'div', children, className = '', delay = 0 }: RevealProps) {
  const { isVisible, ref } = useInView<HTMLElement>()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <Component className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`} ref={ref} style={style}>
      {children}
    </Component>
  )
}
