import Image from "next/image"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { hero, profile } from "@/lib/content"

const ctaIcon = (label: string) => {
  if (label.toLowerCase().includes("download")) return <Download className="size-4" />
  if (label.toLowerCase().includes("project")) return <ArrowRight className="size-4" />
  return null
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-16 pb-16 pt-28 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              {profile.role}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {hero.headlineLines.map((line, index) => (
                <span key={line} className="block">
                  {index === hero.headlineLines.length - 1 ? (
                    <span className="gradient-text">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={170}>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground/85">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={220} className="w-full">
            <div className="flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <CtaButton
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  size="lg"
                  {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {ctaIcon(cta.label)}
                  {cta.label}
                </CtaButton>
              ))}
            </div>
          </Reveal>

          <Reveal delay={270} className="w-full">
            <ul className="flex flex-wrap gap-2 pt-2">
              {hero.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border/80 bg-secondary/30 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/18 via-accent/10 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.7rem] border border-border/80 bg-card/35 p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={profile.photo || "/placeholder.svg"}
                  alt={profile.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="hero-photo object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border/80 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
              <p className="font-display text-2xl font-bold text-foreground">
                {profile.name.split(" ")[0]}
              </p>
              <p className="text-xs text-muted-foreground">Information Systems Graduate</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
