---
name: Industrial Integrity
colors:
  surface: '#f6fafe'
  surface-dim: '#d6dade'
  surface-bright: '#f6fafe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f4f8'
  surface-container: '#eaeef2'
  surface-container-high: '#e4e9ed'
  surface-container-highest: '#dfe3e7'
  on-surface: '#171c1f'
  on-surface-variant: '#45464d'
  inverse-surface: '#2c3134'
  inverse-on-surface: '#edf1f5'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#9d4300'
  on-secondary: '#ffffff'
  secondary-container: '#fd761a'
  on-secondary-container: '#5c2400'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d1c2f'
  on-tertiary-container: '#76859b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#d5e3fd'
  tertiary-fixed-dim: '#b9c7e0'
  on-tertiary-fixed: '#0d1c2f'
  on-tertiary-fixed-variant: '#3a485c'
  background: '#f6fafe'
  on-background: '#171c1f'
  surface-variant: '#dfe3e7'
  safety-orange: '#F97316'
  industrial-navy: '#0F172A'
  steel-gray: '#64748B'
  concrete-white: '#F8FAFC'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

The design system for this construction and industrial supplier is built on the foundations of reliability, durability, and high-quality engineering. It targets B2B stakeholders, contractors, and project managers who require precision and clear technical data.

The aesthetic follows a **Corporate / Modern** approach with **Minimalist** efficiency. It leverages a rigorous grid system inspired by architectural blueprints and structural steelwork. Visual interest is generated through high-contrast typography and a strategic use of safety-inspired accents, evoking the atmosphere of a professional, well-organized construction site. The emotional response is one of trust, stability, and institutional strength.

## Colors

The palette is anchored by **Industrial Navy**, providing a sense of corporate authority and depth. **Safety Orange** is used exclusively as a high-visibility accent for primary actions, notifications, and critical site highlights, mimicking its real-world functional use in construction.

The neutral scale utilizes **Concrete White** and **Steel Gray** to maintain a clean, professional environment that allows product photography and technical specifications to remain the focus. All color applications must pass AA accessibility standards to ensure readability in high-glare or outdoor environments typical for field personnel.

## Typography

This design system uses **Hanken Grotesk** for headlines to provide a sharp, contemporary, and engineered feel. Its tight apertures and geometric construction reflect industrial precision. **Inter** is used for body copy and UI labels, selected for its exceptional legibility in data-dense environments like product catalogs and submittal forms.

For primary section headings, use `label-caps` to create a structured, "blueprint" look. Ensure large display type uses the heavier weights (700-800) to communicate strength.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop to maintain alignment with technical drawings and structured data. A 12-column grid is used for the website, while a 4-column grid is utilized for mobile devices.

Spacing is based on a strict 4px baseline shift to ensure mathematical consistency. Large vertical sections should be separated by significant whitespace (80px - 120px) to prevent the technical content from feeling cluttered. Content reflows for tablet and mobile by stacking grid units, ensuring that product tables and technical specs remain horizontally scrollable if they exceed the viewport width.

## Elevation & Depth

To maintain an industrial and durable feel, the design system avoids heavy shadows in favor of **Tonal Layers** and **Low-contrast Outlines**. 

Depth is primarily communicated through subtle background shifts:
- **Level 0 (Floor):** Concrete White (`#F8FAFC`) for the main page background.
- **Level 1 (Surface):** Pure White (`#FFFFFF`) for cards and input containers, featuring a 1px border in Steel Gray.
- **Level 2 (Active):** Safety Orange tints or slight Industrial Navy elevation for interactive states.

Shadows, when used (e.g., for modals), are sharp and tight, avoiding soft blurs to maintain the "solid material" metaphor.

## Shapes

The shape language is primarily **Soft (Level 1)**. Elements like buttons and input fields use a 0.25rem (4px) radius. This small radius conveys a sense of being "machined" rather than "organic," striking a balance between modern user expectations and the rigid nature of industrial materials like steel beams and concrete blocks. Large cards or images may use 8px corners to appear more approachable.

## Components

### Buttons
Primary buttons utilize the **Safety Orange** background with white text for maximum visibility. Secondary buttons use an **Industrial Navy** outline with a clear background. All buttons feature a 4px corner radius and bold Inter labels.

### Inputs & Forms
Forms are a critical component for submittal requests. Fields should have a 1px Steel Gray border that thickens and changes to Safety Orange on focus. Labels are always positioned above the field using `label-caps` for a technical look.

### Cards
Cards are used for product categories and blog posts. They should have a 1px light gray border and no shadow. Images within cards should have a subtle greyscale filter that transitions to full color on hover, emphasizing the industrial aesthetic.

### Chips & Status Indicators
Chips are used for product availability (e.g., "In Stock") or technical certifications (e.g., "ISO Certified"). Use Industrial Navy backgrounds with white text for a heavy-duty appearance.

### Technical Data Tables
Tables should use a striped row pattern with Steel Gray borders. Header rows must be Industrial Navy with white Inter text in all caps to distinguish from the data.