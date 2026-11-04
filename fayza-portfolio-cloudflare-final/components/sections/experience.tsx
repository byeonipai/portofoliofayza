import { Briefcase } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience, experienceHeading } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Career" title={experienceHeading} description="A concise look at the roles where I've applied analysis, design, and coordination skills." /></Reveal>
        <ol className="relative mx-auto mt-12 max-w-3xl border-l border-border/70 pl-6 sm:pl-8"><span className="timeline-track" aria-hidden />
          {experience.map((item, index) => <Reveal as="li" key={item.role} delay={index * 140} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[calc(1.5rem+1px)] top-1 flex size-6 items-center justify-center rounded-full border border-primary/35 bg-background text-primary sm:-left-[calc(2rem+1px)]" aria-hidden><Briefcase className="size-3" /></span>
            <article className="rounded-2xl border border-border/80 bg-card/35 p-5 sm:p-6"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-display text-base font-semibold sm:text-lg">{item.role}</h3>{item.period ? <span className="text-xs text-muted-foreground">{item.period}</span> : null}</div>{item.organization ? <p className="mt-0.5 text-sm text-primary">{item.organization}</p> : null}<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p></article>
          </Reveal>)}
        </ol>
      </div>
    </section>
  )
}
