import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

interface ContainerProps<T extends ElementType> {
  as?: T
  children: ReactNode
  className?: string
}

export function Container<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as ?? 'div'

  return (
    <Component className={`site-container ${className}`.trim()}>
      {children}
    </Component>
  )
}
