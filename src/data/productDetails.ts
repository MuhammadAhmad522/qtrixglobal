import {
  Boxes,
  Cable,
  CircleGauge,
  Droplets,
  Factory,
  Flame,
  Hammer,
  HardHat,
  Leaf,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
  Waves,
  Wrench,
} from 'lucide-react'
import type { ProductDetail } from '../types/content'

export const productDetails: ProductDetail[] = [
  {
    slug: 'plywood-white-wood',
    name: 'Plywood & White wood',
    category: 'Structural',
    badge: 'Certified Grade A',
    image: '/assets/detail-plywood.jpg',
    alt: 'Premium structural plywood and white wood planks stacked in a warehouse.',
    description:
      'Engineered for maximum durability and load-bearing capacity. Our premium plywood and white wood selections are sourced from sustainable forests and processed to meet rigorous ISO structural standards for commercial and residential construction projects.',
    highlights: [
      'Kiln-dried for consistent dimensional stability.',
      'Commercial and premium structural grades available.',
      'Bulk procurement options for projects of every scale.',
    ],
    facts: [
      { label: 'Material origin', value: 'Certified global forests' },
      { label: 'Standard size', value: '1220mm x 2440mm' },
    ],
    specificationHeaders: ['Property', 'Plywood (Commercial)', 'White Wood (Premium)'],
    specificationRows: [
      ['Material Origin', 'Southeast Asian Hardwood', 'European Spruce/Pine'],
      ['Density (kg/m3)', '580 - 650', '420 - 470'],
      ['Moisture Content', '8% - 12% (Kiln Dried)', '15% - 18% (Air/Kiln)'],
      ['Standard Size', '1220mm x 2440mm', 'Variable Lengths (3m - 6m)'],
      ['Thickness Options', '3mm to 25mm', '19mm to 100mm'],
      ['Adhesive Grade', 'WBP Melamine / Phenolic', 'N/A (Solid Timber)'],
    ],
    features: [
      {
        title: 'Structural Engineering',
        description: 'Precisely milled for optimal straightness and structural reliability in framing and scaffolding.',
        icon: Ruler,
      },
      {
        title: 'Eco-Certified Supply',
        description: 'Verified sustainable sourcing for projects targeting LEED and responsible-material goals.',
        icon: Leaf,
      },
      {
        title: 'Project-Ready Packs',
        description: 'Protected bulk bundles prepared for efficient storage, handling, and site distribution.',
        icon: Boxes,
      },
    ],
  },
  {
    slug: 'electric-cables',
    name: 'Electric cables',
    category: 'Electrical',
    badge: 'IEC 60502-1 Compliant',
    image: '/assets/catalog-cables.jpg',
    alt: 'Heavy-duty electrical cables on industrial reels.',
    description:
      'Reliable power and control cabling engineered for commercial buildings, infrastructure, and demanding industrial installations. Every cable range is selected for stable conductivity, insulation performance, and long service life.',
    highlights: [
      'Flame-retardant and low-smoke options available.',
      'Copper and aluminium conductors for varied load requirements.',
      'Project-length cutting and numbered drum preparation.',
    ],
    facts: [
      { label: 'Voltage class', value: '0.6/1.0 kV' },
      { label: 'Conductor', value: 'Copper / Aluminium' },
    ],
    specificationHeaders: ['Cable Type', 'Core Range', 'Insulation', 'Standard'],
    specificationRows: [
      ['Low Voltage Power', '1 - 5 Core', 'XLPE / PVC', 'IEC 60502-1'],
      ['Building Wire', 'Single Core', 'Flame Retardant PVC', 'IEC 60227'],
      ['Control Cable', '2 - 37 Core', 'XLPE / LSZH', 'IEC 60332'],
      ['Armoured Cable', '2 - 4 Core', 'SWA / PVC', 'BS 5467'],
    ],
    features: [
      { title: 'Stable Conductivity', description: 'Verified conductors minimize loss across long distribution runs.', icon: Cable },
      { title: 'Fire Performance', description: 'Specified insulation options support fire-conscious project requirements.', icon: Flame },
      { title: 'Load Matching', description: 'Technical selection support aligns cable size with connected demand.', icon: CircleGauge },
    ],
  },
  {
    slug: 'bathroom-kitchen',
    name: 'Bathroom & Kitchen',
    category: 'Finishing',
    badge: 'Commercial Fixture Series',
    image: '/assets/catalog-bathroom.jpg',
    alt: 'Premium commercial bathroom and kitchen fixtures.',
    description:
      'Commercial-grade fixtures and plumbing hardware selected for daily reliability, efficient water use, and a clean architectural finish across residential, hospitality, and institutional projects.',
    highlights: [
      'Corrosion-resistant finishes for high-use environments.',
      'Water-efficient mixer and sanitary fixture options.',
      'Coordinated collections for consistent project finishes.',
    ],
    facts: [
      { label: 'Primary finish', value: 'Chrome / Brushed Steel' },
      { label: 'Application', value: 'Commercial & Residential' },
    ],
    specificationHeaders: ['Fixture Group', 'Material', 'Pressure Range', 'Compliance'],
    specificationRows: [
      ['Mixer Taps', 'Solid Brass', '0.5 - 5 Bar', 'EN 817'],
      ['Sanitary Fixtures', 'Vitreous China', 'Dual Flush', 'EN 997'],
      ['Kitchen Sinks', '304 Stainless Steel', '1.0mm Gauge', 'EN 13310'],
      ['Accessories', 'Zinc / Stainless Steel', 'Commercial Duty', 'ISO 9001'],
    ],
    features: [
      { title: 'Durable Finishes', description: 'Hard-wearing surface treatments resist corrosion and everyday cleaning.', icon: Sparkles },
      { title: 'Water Efficiency', description: 'Flow-managed fixtures help reduce consumption without sacrificing usability.', icon: Droplets },
      { title: 'Installation Support', description: 'Coordinated mounting kits simplify project procurement and fitting.', icon: Wrench },
    ],
  },
  {
    slug: 'steel-wires-nails',
    name: 'Steel Wires & Nails',
    category: 'Structural',
    badge: 'ISO 9001 Certified',
    image: '/assets/detail-steel.png',
    alt: 'Industrial-grade steel wire and nail packaging.',
    description:
      'High-tensile industrial fasteners engineered for structural integrity and long-term durability in heavy-duty construction environments.',
    highlights: [
      'Anti-corrosion galvanized coating for extreme environments.',
      'Precision-sharpened points for hardwood and concrete.',
      'Bulk industrial packaging available in 25kg and 50kg pails.',
    ],
    facts: [
      { label: 'Material', value: 'Q195 Low Carbon Steel' },
      { label: 'Tensile strength', value: '350-550 N/mm2' },
    ],
    specificationHeaders: ['Product Category', 'Standard Lengths', 'Wire Gauge (BWG)', 'Coating Type', 'Certification'],
    specificationRows: [
      ['Common Round Nails', '25mm - 150mm', 'BWG 8 - 18', 'Polished / EG', 'ASTM F1667'],
      ['Concrete Steel Nails', '30mm - 100mm', 'Hardened 3.0mm+', 'Black / Galvanized', 'ISO 16120'],
      ['Annealed Binding Wire', 'Coil Rolls', 'BWG 20 - 22', 'Soft Black Annealed', 'AISI 1008'],
      ['Finishing Nails', '15mm - 50mm', 'BWG 15 - 17', 'Electro-Galvanized', 'ASTM F1667'],
    ],
    features: [
      { title: 'Steel Nails', description: 'Round-head fasteners for timber framing and general carpentry.', icon: Hammer },
      { title: 'Binding Wires', description: 'Flexible annealed wire for securing rebar and general tie-down work.', icon: Factory },
      { title: 'Galvanized Staples', description: 'Heavy-duty fasteners for fencing, insulation, and mesh attachment.', icon: ShieldCheck },
    ],
  },
  {
    slug: 'safety-gear',
    name: 'Industrial Protection Series V2',
    category: 'Safety',
    badge: 'ISO 20345 Certified',
    image: '/assets/detail-safety.jpg',
    alt: 'Heavy-duty construction safety boots with reinforced steel toes.',
    description:
      'Engineered for the most demanding construction environments, our V2 Series safety gear integrates advanced polymer protection with ergonomic comfort. Compliant with international standards ISO 20345 and ANSI Z89.1.',
    highlights: [
      'Waterproof, oil-resistant upper and outsole construction.',
      'Impact-rated steel toe protection for demanding sites.',
      'Ergonomic fit engineered for extended shift comfort.',
    ],
    facts: [
      { label: 'Series', value: 'QT-SF-2024-XP' },
      { label: 'Lead time', value: '3-5 Business Days' },
    ],
    specificationHeaders: ['Parameter', 'Rating / Value'],
    specificationRows: [
      ['Impact Resistance', '200 Joules (Toe Protection)'],
      ['Thermal Insulation', 'Cold up to -20 C / Heat up to 300 C'],
      ['Chemical Resistance', 'Acid, Alkali, and Hydrocarbon resistant'],
      ['Material Density', 'High-density Polyurethane (Sole)'],
    ],
    features: [
      { title: 'Protective Footwear', description: 'Reinforced toe, tread, and support zones for active construction sites.', icon: ShieldCheck },
      { title: 'Safety Helmets', description: 'Impact-managed head protection with accessory-ready configurations.', icon: HardHat },
      { title: 'Full PPE Ecosystem', description: 'Compatible gloves, eyewear, hearing protection, and fall-arrest equipment.', icon: Wrench },
    ],
  },
  {
    slug: 'membranes-sheets',
    name: 'Membranes & Sheets',
    category: 'Protection',
    badge: 'ISO 9001 Certified Protection',
    image: '/assets/detail-membranes.png',
    alt: 'Industrial waterproofing membrane being applied to a roof.',
    description:
      'Engineered Polythene and Bitumen solutions designed for structural integrity. Our heavy-duty barriers provide absolute protection against moisture ingress, chemical exposure, and gas permeation in high-demand industrial environments.',
    highlights: [
      'High-density reinforced membranes with superior tear resistance.',
      'Torch-on bitumen systems for roofs and foundations.',
      'Complete jointing and protective-layer guidance.',
    ],
    facts: [
      { label: 'Thickness', value: '1200 Gauge' },
      { label: 'Tensile strength', value: '450 N/50mm' },
    ],
    specificationHeaders: ['Property', 'Polythene Sheet', 'Bitumen Membrane', 'Standards'],
    specificationRows: [
      ['Moisture Vapor Trans.', '< 0.1 g/m2/24h', '< 0.05 g/m2/24h', 'EN 1931'],
      ['Temperature Range', '-20 C to +40 C', '-15 C to +110 C', 'ISO 11357'],
      ['Impact Resistance', 'High', 'Superior', 'EN 12691'],
    ],
    features: [
      { title: 'Surface Preparation', description: 'Clean, dry substrates and compatible primers maximize adhesion.', icon: Sparkles },
      { title: 'Lapping & Bonding', description: 'Controlled overlaps create continuous protection across joints.', icon: Waves },
      { title: 'Protection Layer', description: 'Boards or sand blinding protect installed membranes during construction.', icon: ShieldCheck },
    ],
  },
  {
    slug: 'industrial-paint',
    name: 'Industrial Paint',
    category: 'Finishing',
    badge: 'High-Performance Coatings',
    image: '/assets/product-paint.jpg',
    alt: 'High-quality industrial paint with deep navy and neutral tones.',
    description:
      'Protective coating systems formulated for steel, concrete, and demanding architectural surfaces. Qtrix industrial paints combine dependable coverage with resistance to abrasion, weather, and project-specific chemical exposure.',
    highlights: [
      'Primer, intermediate, and top-coat systems available.',
      'Interior, exterior, and heavy-duty industrial formulations.',
      'Project color matching and volume packaging support.',
    ],
    facts: [
      { label: 'Application', value: 'Steel & Concrete' },
      { label: 'Pack sizes', value: '5L / 20L' },
    ],
    specificationHeaders: ['Coating Type', 'Finish', 'Coverage', 'Application'],
    specificationRows: [
      ['Epoxy Primer', 'Matt', '7-9 m2/L', 'Steel / Concrete'],
      ['Polyurethane Topcoat', 'Satin / Gloss', '9-11 m2/L', 'Exterior Steel'],
      ['Acrylic Coating', 'Low Sheen', '8-10 m2/L', 'Walls / Facades'],
      ['Floor Coating', 'Anti-Slip', '5-7 m2/L', 'Industrial Floors'],
    ],
    features: [
      { title: 'Surface Protection', description: 'Coating systems resist abrasion, moisture, and routine chemical exposure.', icon: ShieldCheck },
      { title: 'Color Consistency', description: 'Batch-managed tinting supports consistent finishes across large projects.', icon: PaintBucket },
      { title: 'Application Support', description: 'Technical guidance covers preparation, film thickness, and curing.', icon: Wrench },
    ],
  },
]

export function getProductBySlug(slug: string | undefined) {
  return productDetails.find((product) => product.slug === slug)
}
