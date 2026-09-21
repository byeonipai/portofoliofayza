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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              {profile.role}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {hero.headlineLines.map((line, i) => (
                <span key={line} className="block">
                  {i === hero.headlineLines.length - 1 ? (
                    <span className="gradient-text text-glow">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground/80">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={280} className="w-full">
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

          <Reveal delay={340} className="w-full">
            <ul className="flex flex-wrap gap-2 pt-2">
              {hero.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Profile image */}
        <Reveal delay={200} className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border glass p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={profile.photo || "/placeholder.svg"}
                  alt={profile.photoAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                  aria-hidden
                />
              </div>
            </div>
            {/* floating stat chip */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-border glass px-4 py-3 sm:block">
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
