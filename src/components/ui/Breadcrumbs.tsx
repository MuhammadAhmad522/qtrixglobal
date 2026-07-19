import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BreadcrumbsProps {
  current: string
  parent?: { label: string; href: string }
}

export function Breadcrumbs({ current, parent }: BreadcrumbsProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 font-label text-steel-gray" aria-label="Breadcrumb">
      <Link className="hover:text-safety-orange" to="/">Home</Link>
      <ChevronRight aria-hidden="true" className="size-3" />
      {parent && (
        <>
          <Link className="hover:text-safety-orange" to={parent.href}>{parent.label}</Link>
          <ChevronRight aria-hidden="true" className="size-3" />
        </>
      )}
      <span className="text-industrial-navy">{current}</span>
    </nav>
  )
}
