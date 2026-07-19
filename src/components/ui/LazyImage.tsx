import { useEffect, useState, type ImgHTMLAttributes } from 'react'
import { useInView } from '../../hooks/useInView'

type LazyImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'>

export function LazyImage({ className = '', onLoad, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isColorized, setIsColorized] = useState(false)
  const { isVisible, ref } = useInView<HTMLImageElement>({ rootMargin: '0px 0px -5% 0px', threshold: 0.1 })

  useEffect(() => {
    if (!isLoaded || !isVisible) return

    const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches
    if (!isTouchDevice) return

    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900
    const timeoutId = window.setTimeout(() => setIsColorized(true), delay)
    return () => window.clearTimeout(timeoutId)
  }, [isLoaded, isVisible])

  return (
    <img
      {...props}
      className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : ''} ${isColorized ? 'lazy-image-colorized' : ''} ${className}`}
      decoding="async"
      loading="lazy"
      onLoad={(event) => {
        setIsLoaded(true)
        onLoad?.(event)
      }}
      ref={ref}
    />
  )
}
