import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
  label: string
  href: string
}

export interface Statistic {
  value: string
  label: string
}

export interface ProductCategory {
  name: string
  slug: string
  category: ProductFilter
  image: string
  catalogImage?: string
  alt: string
  description: string
  variants: string
  eyebrow?: string
  featured?: boolean
}

export type ProductFilter = 'Structural' | 'Finishing' | 'Safety' | 'Protection' | 'Electrical'

export interface ProductFeature {
  title: string
  description: string
  icon: LucideIcon
}

export interface ProductDetail {
  slug: string
  name: string
  category: ProductFilter
  badge: string
  image: string
  alt: string
  description: string
  highlights: string[]
  facts: Array<{ label: string; value: string }>
  specificationHeaders: string[]
  specificationRows: string[][]
  features: ProductFeature[]
}

export interface QualityFeature {
  title: string
  description: string
  icon: LucideIcon
}

export interface FooterGroup {
  title: string
  links: NavigationItem[]
}
