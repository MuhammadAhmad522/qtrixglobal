import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { Reveal } from './ui/Reveal'

export function CallToAction() {
  return (
    <section className="scroll-mt-20 bg-safety-orange py-20 text-center md:py-24" id="contact">
      <Container>
        <Reveal>
          <h2 className="mb-7 font-heading text-4xl font-extrabold leading-tight text-white md:text-display-lg">
            Ready to Build Your Vision?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-7 text-white/90 md:mb-12 md:text-body-lg">
            Contact our technical experts for a custom quote or project consultation. We provide full logistical support and documentation for large-scale developments.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact?subject=Quotation%20request" variant="dark">
              Request Quotation
            </ButtonLink>
            <ButtonLink href="/contact?subject=Project%20consultation" variant="light">
              Speak to an Expert
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
