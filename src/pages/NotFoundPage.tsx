import { ButtonLink } from '../components/ui/ButtonLink'
import { Container } from '../components/ui/Container'

export function NotFoundPage() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="mb-3 font-label text-safety-orange">404 / Route not found</p>
      <h1 className="mb-5 font-heading text-4xl font-bold text-industrial-navy md:text-6xl">This page is off the delivery manifest.</h1>
      <p className="mb-8 max-w-xl text-steel-gray">Return to the product catalogue to continue exploring Qtrix Global materials.</p>
      <ButtonLink href="/products">View Products</ButtonLink>
    </Container>
  )
}
