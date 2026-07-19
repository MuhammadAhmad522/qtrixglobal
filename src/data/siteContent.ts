import { Handshake, Leaf, ShieldCheck } from 'lucide-react'
import type {
  FooterGroup,
  NavigationItem,
  ProductCategory,
  QualityFeature,
  Statistic,
} from '../types/content'

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const statistics: Statistic[] = [
  { value: '15k+', label: 'SKUs available' },
  { value: '24h', label: 'Delivery turnaround' },
  { value: 'ISO', label: 'Certified quality' },
  { value: '500+', label: 'Projects supplied' },
]

export const products: ProductCategory[] = [
  {
    name: 'Plywood & White wood',
    slug: 'plywood-white-wood',
    category: 'Structural',
    eyebrow: 'Structural',
    image: '/assets/product-plywood.jpg',
    catalogImage: '/assets/catalog-plywood.jpg',
    alt: 'High-quality plywood stacks in an industrial warehouse.',
    description: 'Structural grade lumber and finishing plywood for formwork and framing.',
    featured: true,
  },
  {
    name: 'Electric cables',
    slug: 'electric-cables',
    category: 'Electrical',
    image: '/assets/product-cables.jpg',
    catalogImage: '/assets/catalog-cables.jpg',
    alt: 'Industrial electric cables coiled neatly.',
    description: 'High-voltage transmission lines and residential grade wiring solutions.',
  },
  {
    name: 'Bathroom & Kitchen',
    slug: 'bathroom-kitchen',
    category: 'Finishing',
    image: '/assets/product-bathroom.jpg',
    catalogImage: '/assets/catalog-bathroom.jpg',
    alt: 'Premium bathroom and kitchen fixtures.',
    description: 'Commercial grade fixtures and heavy-duty plumbing infrastructure.',
  },
  {
    name: 'Safety Gear',
    slug: 'safety-gear',
    category: 'Safety',
    image: '/assets/product-safety.jpg',
    catalogImage: '/assets/catalog-safety.jpg',
    alt: 'Professional construction safety gear.',
    description: 'ISO certified personal protective equipment for hazardous environments.',
  },
  {
    name: 'Steel & Nails',
    slug: 'steel-wires-nails',
    category: 'Structural',
    image: '/assets/product-steel.jpg',
    catalogImage: '/assets/catalog-steel.jpg',
    alt: 'Industrial steel wires and galvanized nails.',
    description: 'Galvanized binding wires and industrial grade fasteners for masonry.',
  },
  {
    name: 'Membranes & Sheets',
    slug: 'membranes-sheets',
    category: 'Protection',
    image: '/assets/product-membranes.jpg',
    catalogImage: '/assets/catalog-membranes.jpg',
    alt: 'Construction membranes and waterproofing sheets.',
    description: 'Advanced waterproofing solutions and heavy-duty protective sheeting.',
  },
  {
    name: 'Industrial Paint',
    slug: 'industrial-paint',
    category: 'Finishing',
    image: '/assets/product-paint.jpg',
    alt: 'High-quality industrial paint in neutral shades.',
    description: 'High-performance protective coatings for demanding industrial surfaces.',
  },
]

export const qualityFeatures: QualityFeature[] = [
  {
    title: 'Rigorous Certification',
    description:
      'Every batch of material undergoes stringent laboratory testing to exceed international ASTM and ISO standards.',
    icon: ShieldCheck,
  },
  {
    title: 'Greener Solutions',
    description:
      'We actively source materials from eco-certified manufacturers and prioritize recycled steel and sustainable timber.',
    icon: Leaf,
  },
  {
    title: 'Trusted Logistics',
    description:
      'Our streamlined supply chain minimizes transit waste and ensures on-site delivery precision for your timeline.',
    icon: Handshake,
  },
]

export const footerGroups: FooterGroup[] = [
  {
    title: 'Products',
    links: [
      { label: 'Plywood', href: '/products/plywood-white-wood' },
      { label: 'Steel', href: '/products/steel-wires-nails' },
      { label: 'Safety Gear', href: '/products/safety-gear' },
      { label: 'Industrial Paint', href: '/products/industrial-paint' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Projects', href: '/about#projects' },
      { label: 'Terms of Service', href: '/' },
      { label: 'Privacy Policy', href: '/' },
    ],
  },
]
