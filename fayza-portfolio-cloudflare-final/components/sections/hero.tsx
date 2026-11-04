"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { ProfileVisual } from "@/components/profile-visual"
import { hero, profile } from "@/lib/content"

const rotatingWords = ["Frontend", "Testing", "Figma", "REST API"]

function Typewriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = rotatingWords[wordIndex]
    const complete = text === word
    const empty = text.length === 0
    const delay = complete ? 1450 : deleting ? 48 : 92

    const timer = window.setTimeout(() => {
      if (complete) {
        setDeleting(true)
      } else if (deleting && empty) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % rotatingWords.length)
      } else {
        setText((value) => deleting ? value.slice(0, -1) : word.slice(0, value.length + 1))
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [wordIndex, text, deleting])

  return <>{text}<span className="hero-type-caret" aria-hidden /></>
}

function MagneticLink({ href, children, variant, external }: {
  href: string
  children: React.ReactNode
  variant: "primary" | "secondary"
  external?: boolean
}) {
  const move = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    const dx = event.clientX - rect.left - rect.width / 2
    const dy = event.clientY - rect.top - rect.height / 2
    event.currentTarget.style.transform = "translate(" + dx * .16 + "px," + dy * .2 + "px)"
  }

  const reset = (event: React.PointerEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.transform = ""
  }

  return (
    <CtaButton
      href={href}
      variant={variant}
      size="lg"
      onPointerMove={move}
      onPointerLeave={reset}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="hero-magnetic"
    >
      {children}
    </CtaButton>
  )
}

export function Hero() {
  return (
    <section id="home" className="hero-reference relative scroll-mt-16 overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div className="hero-ambient hero-ambient-one" aria-hidden />
      <div className="hero-ambient hero-ambient-two" aria-hidden />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-8">
        <div className="relative z-10 flex min-w-0 flex-col items-start">
          <div className="hero-role-badge">
            <i />
            {profile.role}
          </div>

          <h1 className="hero-reference-title" aria-label="System Analyst, UI/UX and Frontend">
            <span className="hero-title-mask">
              {"System Analyst".split("").map((char, index) => (
                <span key={index} style={{ animationDelay: (150 + index * 45) + "ms" }}>
                  {char === " " ? "\u00a0" : char}
                </span>
              ))}
            </span>
            <span className="hero-title-second">
              <span className="hero-gradient-shine">UI/UX &amp; <Typewriter /></span>
            </span>
          </h1>

          <p className="hero-reference-lead">
            {hero.subheadline}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground/85 sm:text-base">
            {hero.intro}
          </p>

          <div className="hero-reference-ctas">
            <MagneticLink href="#projects" variant="primary">
              <ArrowRight className="size-4" />View Projects
            </MagneticLink>
            <MagneticLink href="/fayza-kamila-cv.pdf" variant="secondary" external>
              <Download className="size-4" />Download CV
            </MagneticLink>
            <MagneticLink href="#contact" variant="secondary">
              <Sparkles className="size-4" />Contact Me
            </MagneticLink>
          </div>

          <div className="hero-reference-tags">
            {hero.tags.map((tag, index) => (
              <span key={tag} style={{ animationDelay: (1.2 + index * .08) + "s" }}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[460px] lg:max-w-none">
          <ProfileVisual />
        </div>
      </div>
    </section>
  )
}
