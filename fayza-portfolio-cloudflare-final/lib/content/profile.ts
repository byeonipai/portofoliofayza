import type { About, Hero, NavItem, Profile } from "./types"

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
]

export const profile: Profile = {
  name: "Fayza Kamila",
  logo: "fayza.dev",
  role: "System Analyst with UI/UX & Frontend Development Experience",
  photo: "/images/profile.png",
  photoAlt: "Portrait of Fayza Kamila",
  location: "Bogor, West Java, Indonesia",
}

export const hero: Hero = {
  headlineLines: ["System Analyst", "UI/UX & Frontend"],
  subheadline:
    "I turn user needs and business requirements into structured systems, intuitive interfaces, and functional digital products.",
  intro:
    "Information Systems graduate with experience in system analysis, UI/UX design, frontend development, software testing, and digital product projects.",
  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    {
      label: "Download CV",
      href: "/fayza-kamila-cv.pdf",
      variant: "secondary",
      external: true,
    },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
  ],
  tags: [
    "System Analysis",
    "UI/UX",
    "Frontend",
    "Testing",
    "REST API",
    "Figma",
  ],
}

export const about: About = {
  heading: "About Me",
  paragraphs: [
    "I'm an Information Systems graduate with hands-on experience in requirement analysis, system design, UI/UX, frontend development, and software testing. I enjoy understanding user and business needs and translating them into clear system flows and practical digital solutions.",
    "My project experience includes requirement documentation, UML and workflow modeling, database design, wireframing and prototyping, frontend implementation, REST API integration, functional testing, API testing, and collaborative system development.",
  ],
  highlights: [
    "Requirement analysis & documentation",
    "System workflows & UML modeling",
    "Wireframing & prototyping",
    "Frontend implementation",
    "Functional & API testing",
    "Project collaboration",
  ],
  stats: [
    { value: "3.90/4.00", label: "GPA" },
    { value: "7", label: "Projects & Case Studies" },
    { value: "10+", label: "Certifications & Training" },
  ],
}
