import { ArrowRight, Download, Sparkles } from "lucide-react"
import { CtaButton } from "@/components/cta-button"
import { Reveal } from "@/components/reveal"
import { hero, profile } from "@/lib/content"
import { ProfileFlipCard } from "@/components/profile-flip-card"

const ctaIcon = (label: string) => {
  if (label.toLowerCase().includes("download")) return <Download className="size-4 shrink-0" />
  if (label.toLowerCase().includes("project")) return <ArrowRight className="size-4 shrink-0" />
  return null
}

export function Hero() {
  const primaryActions = hero.ctas.slice(0, 2)
  const contactAction = hero.ctas.find((cta) => cta.href === "#contact")

  return (
    <section id="home" className="relative scroll-mt-16 pb-14 pt-24 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-9 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start gap-4 sm:gap-6">
          <Reveal variant="blur">
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-3 py-1.5 text-xs font-medium text-primary sm:px-4">
              <Sparkles className="size-3.5 shrink-0" />
              <span className="sm:hidden">System Analysis · UI/UX · Testing</span>
              <span className="hidden sm:inline">{profile.role}</span>
            </span>
          </Reveal>

          <Reveal delay={90} variant="left">
            <h1 className="font-display font-bold leading-[1.05] tracking-[-0.045em] text-balance">
              <span className="block text-[clamp(2.4rem,8.3vw,4rem)] sm:text-6xl lg:text-[4.5rem]">
                {hero.headlineLines[0]}
              </span>
              <span className="gradient-text mt-2 block text-[clamp(1.8rem,6.25vw,3rem)] leading-tight sm:mt-3 sm:text-[2.8rem] lg:text-[3.4rem]">
                {hero.headlineLines[1]}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={220} variant="up">
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-lg">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={320} variant="up" className="hidden sm:block">
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground/85">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={420} variant="up" className="w-full">
            <div className="grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
              {primaryActions.map((cta) => (
                <CtaButton
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  size="lg"
                  className="min-w-0 gap-1.5 px-2 text-[13px] sm:gap-2 sm:px-7 sm:text-base"
                  {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {ctaIcon(cta.label)}
                  <span className="whitespace-nowrap">{cta.label}</span>
                </CtaButton>
              ))}
              {contactAction ? (
                <CtaButton
                  href={contactAction.href}
                  variant={contactAction.variant}
                  size="lg"
                  className="hidden sm:inline-flex"
                >
                  {contactAction.label}
                </CtaButton>
              ) : null}
            </div>
            {contactAction ? (
              <a
                href={contactAction.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 transition-colors duration-150 hover:text-foreground focus-visible:underline sm:hidden"
              >
                {contactAction.label}
                <ArrowRight className="size-4" />
              </a>
            ) : null}
          </Reveal>

          <Reveal delay={220} className="hidden w-full sm:block">
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

        <Reveal delay={240} variant="scale" className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
          <ProfileFlipCard />
        </Reveal>
      </div>
    </section>
  )
}
