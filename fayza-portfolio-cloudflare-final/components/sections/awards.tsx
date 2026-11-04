import { Award } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { awards } from "@/lib/content"

export function Awards() {
  return <section id="awards" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <Reveal><SectionHeading eyebrow="Recognition" title="Awards & Recognition" description="Selected recognition from academic, product, and professional experiences." /></Reveal>
    <div className="mt-10 grid gap-5 sm:grid-cols-2">{awards.map((award,index)=><Reveal key={award.title+"-"+award.year} delay={index*55}><article className="h-full rounded-3xl border border-border/80 bg-card/35 p-6"><div className="flex items-start gap-4"><div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary"><Award className="size-5" /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-start justify-between gap-2"><h3 className="font-display text-lg font-semibold text-foreground">{award.title}</h3><span className="text-xs text-muted-foreground">{award.year}</span></div><p className="mt-1 text-sm font-medium text-primary">{award.issuer}</p>{award.description?<p className="mt-3 text-sm leading-relaxed text-muted-foreground">{award.description}</p>:null}</div></div></article></Reveal>)}</div>
  </div></section>
}
