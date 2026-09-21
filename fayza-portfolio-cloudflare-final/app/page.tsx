import { Navbar } from "@/components/navbar"
import { SiteBackground } from "@/components/site-background"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Awards } from "@/components/sections/awards"
import { Certificates } from "@/components/sections/certificates"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fayza Kamila",
  jobTitle: "System Analyst",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Gunadarma",
  },
  sameAs: [
    "https://www.linkedin.com/in/fayza-kamila-27106b26b/",
    "https://github.com/byeonipai/",
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Awards />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
