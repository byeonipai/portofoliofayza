import { Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { about, profile } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={about.heading}
            align="left"
          />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80} className="flex flex-col gap-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="text-pretty text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="mt-2 grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card/50 p-4 text-center"
                >
                  <p className="font-display text-2xl font-bold text-primary sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-tight text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-border glass p-6 sm:p-7">
              <div
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
                aria-hidden
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                Core Strengths
              </p>
              <h3 className="mt-2 font-display text-xl font-bold">
                {profile.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>

              <ul className="mt-5 flex flex-col gap-3">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3" />
                    </span>
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
