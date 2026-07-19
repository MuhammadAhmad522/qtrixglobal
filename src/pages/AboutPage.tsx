import { Boxes, Globe2, Lightbulb, ShieldCheck, Truck, Wrench } from 'lucide-react'
import { ButtonLink } from '../components/ui/ButtonLink'
import { Container } from '../components/ui/Container'
import { PageHero } from '../components/ui/PageHero'

const values = [
  { title: 'Reliability', description: 'Our fulfillment systems eliminate downtime through predictable scheduling and clear project communication.', icon: ShieldCheck },
  { title: 'Quality', description: 'Every material in our catalogue follows rigorous quality control and technical certification protocols.', icon: Boxes },
  { title: 'Innovation', description: 'Smart inventory tracking and sustainable sourcing bring modern solutions to industrial supply challenges.', icon: Lightbulb },
]

const reasons = [
  { title: 'Global Footprint', description: 'Strategic distribution hubs across five continents keep demanding projects within reach.', icon: Globe2 },
  { title: 'Bulk Capacity', description: 'High-volume submittals, dependable stock planning, and competitive enterprise pricing.', icon: Truck },
  { title: 'Technical Support', description: 'On-staff engineers provide detailed submittal assistance and technical data for every purchase.', icon: Wrench },
]

export function AboutPage() {
  return (
    <>
      <PageHero
        description="Qtrix Global is a premier provider of heavy-duty construction materials and industrial tools, dedicated to empowering large-scale projects with precision engineering and seamless logistics."
        eyebrow="Established reliability"
        image="/assets/qtrix-industrial-hero.png"
        title="Building the Future of Industrial Supply"
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-4xl font-bold text-industrial-navy md:text-5xl">Our Mission</h2>
            <p className="mb-8 text-base leading-7 text-steel-gray md:text-body-lg">At Qtrix Global, our mission is to streamline the global construction supply chain through unwavering commitment to quality and technical excellence. We bridge the gap between complex engineering requirements and on-site execution.</p>
            <div className="grid gap-4">
              <div className="rounded-lg border border-outline-variant bg-concrete-white p-5 shadow-sm"><div className="flex gap-4"><ShieldCheck className="size-6 shrink-0 text-safety-orange" /><div><h3 className="font-bold text-industrial-navy">Engineering Excellence</h3><p className="text-sm text-steel-gray">Supplies that meet rigorous ISO standards and technical specifications.</p></div></div></div>
              <div className="rounded-lg border border-outline-variant bg-concrete-white p-5 shadow-sm"><div className="flex gap-4"><Truck className="size-6 shrink-0 text-safety-orange" /><div><h3 className="font-bold text-industrial-navy">Reliable Logistics</h3><p className="text-sm text-steel-gray">Timely delivery to remote and challenging project sites worldwide.</p></div></div></div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <img className="h-80 w-full rounded-lg object-cover grayscale shadow-lg" src="/assets/about-steel-beams.jpg" alt="Precision steel beams and industrial rivets." />
            <img className="h-64 w-full rounded-lg object-cover grayscale shadow-lg" src="/assets/about-site.jpg" alt="Organized large-scale construction site." />
          </div>
        </Container>
      </section>

      <section className="bg-surface-container py-16 md:py-20">
        <Container>
          <div className="mb-10 text-center"><p className="mb-3 font-label text-safety-orange">The Qtrix standard</p><h2 className="font-heading text-4xl font-bold text-industrial-navy">Core Values That Drive Us</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ description, icon: Icon, title }) => (
              <article className="surface-card surface-card-interactive p-7" key={title}><div className="mb-7 flex size-11 items-center justify-center rounded-md bg-industrial-navy text-safety-orange shadow-sm"><Icon className="size-5" /></div><h3 className="mb-3 font-heading text-2xl font-semibold text-industrial-navy">{title}</h3><p className="text-steel-gray">{description}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20" id="projects">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <img className="aspect-square w-full rounded-lg object-cover grayscale shadow-lg" src="/assets/about-logistics.jpg" alt="Warehouse manager coordinating industrial inventory." />
          <div>
            <h2 className="mb-8 font-heading text-4xl font-bold text-industrial-navy md:text-5xl">Why Leading Contractors Choose Us</h2>
            <div className="space-y-7">
              {reasons.map(({ description, icon: Icon, title }, index) => (
                <article className="flex gap-5 border-b border-outline-variant/60 pb-6 last:border-0" key={title}><span className="font-heading text-xl font-bold text-safety-orange">0{index + 1}</span><div><div className="mb-2 flex items-center gap-3"><Icon className="size-5 text-industrial-navy" /><h3 className="font-heading text-xl font-semibold text-industrial-navy">{title}</h3></div><p className="text-steel-gray">{description}</p></div></article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-industrial-navy py-12 text-white">
        <Container className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {[['15k+', 'Projects supplied'], ['24/7', 'Logistics support'], ['120+', 'Partner brands'], ['99%', 'On-time delivery']].map(([value, label]) => <div key={label}><p className="font-heading text-4xl font-bold text-safety-orange">{value}</p><p className="font-label text-white/60">{label}</p></div>)}
        </Container>
      </section>

      <section className="bg-concrete-white py-16 md:py-20">
        <Container className="surface-card px-6 py-12 text-center md:px-12">
          <h2 className="mb-4 font-heading text-3xl font-bold text-industrial-navy md:text-4xl">Ready to Scale Your Construction Logistics?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-steel-gray">Connect with our procurement experts to discuss your requirements and receive a custom quote within 24 hours.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row"><ButtonLink href="/contact">Get Started</ButtonLink><ButtonLink href="/products" variant="outline-dark">Browse Catalogue</ButtonLink></div>
        </Container>
      </section>
    </>
  )
}
