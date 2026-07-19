import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonLinkProps {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary' | 'dark' | 'light'
  className?: string
}

const variantClasses = {
  primary: 'bg-safety-orange text-white hover:bg-secondary',
  secondary:
    'border-2 border-white bg-transparent text-white hover:bg-white hover:text-industrial-navy',
  dark: 'bg-industrial-navy text-white hover:bg-black',
  light: 'bg-white text-safety-orange hover:bg-concrete-white',
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  const classes = `button-link ${variantClasses[variant]} ${className}`.trim()

  if (href.startsWith('/')) {
    return (
      <Link className={classes} to={href}>
        {children}
      </Link>
    )
  }

  return (
    <a className={classes} href={href}>
      {children}
    </a>
  )
}
