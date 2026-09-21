/**
 * Shared content types for the portfolio.
 * Most portfolio content can be updated from the files under `lib/content/`.
 */

export type NavItem = {
  label: string
  href: string
}

export type CTA = {
  label: string
  href: string
  variant: "primary" | "secondary"
  external?: boolean
}

export type Profile = {
  name: string
  logo: string
  role: string
  photo: string
  photoAlt: string
  location?: string
}

export type Hero = {
  headlineLines: string[]
  subheadline: string
  intro: string
  ctas: CTA[]
  tags: string[]
}

export type Stat = {
  value: string
  label: string
}

export type About = {
  heading: string
  paragraphs: string[]
  highlights: string[]
  stats: Stat[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type ProjectMetric = {
  value: string
  label: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  role: string
  tools: string[]
  categories: string[]
  thumbnail: string
  featured: boolean
  links?: ProjectLink[]
  detail: {
    overview: string
    background: string
    objectives: string[]
    contribution: string[]
    process: string[]
    features: string[]
    learnings: string[]
    gallery: string[]
    metrics?: ProjectMetric[]
  }
}

export type CertificateCategory =
  | "Analysis"
  | "Development"
  | "Cloud"
  | "Academic"

export type Certificate = {
  id: string
  title: string
  issuer: string
  year: string
  note: string
  category: CertificateCategory
  image: string
  href?: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export type ExperienceItem = {
  role: string
  organization?: string
  period?: string
  description: string
}

export type AwardItem = {
  title: string
  issuer: string
  year: string
  description?: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
  icon: "mail" | "phone" | "linkedin" | "github"
}

export type ContactContent = {
  heading: string
  message: string
  links: ContactLink[]
}

export type FooterContent = {
  tagline: string
  copyright: string
}
