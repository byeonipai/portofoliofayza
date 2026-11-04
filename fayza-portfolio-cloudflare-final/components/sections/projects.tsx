"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { ProjectDetailModal } from "@/components/project-detail-modal"
import { featuredProjects, otherProjects, projectCategories, type Project } from "@/lib/content"

export function Projects() {
  const [active, setActive] = useState<string>("All")
  const [selected, setSelected] = useState<Project | null>(null)
  const filters = useMemo(() => ["All", ...projectCategories], [])
  const matches = (project: Project) => active === "All" || project.categories.includes(active)
  const filteredFeatured = featuredProjects.filter(matches)
  const filteredOther = otherProjects.filter(matches)
  const hasResults = filteredFeatured.length > 0 || filteredOther.length > 0

  return (
    <section id="projects" className="scroll-mt-20 py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="Featured Projects" description="Case studies and builds across system analysis, UI/UX design, and frontend development. Select any project to open a full case study." />
        </Reveal>

        <Reveal delay={60}>
          <div className="-mx-4 mt-7 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mt-8 sm:overflow-visible sm:px-0 sm:pb-0">
            <div className="flex w-max gap-2 sm:mx-auto sm:w-auto sm:flex-wrap sm:justify-center">
              {filters.map((filter) => <button key={filter} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter} className={cn("interactive-control shrink-0 rounded-full border px-4 py-2 text-sm font-medium", active === filter ? "border-primary/45 bg-primary/[0.12] text-primary" : "border-border bg-secondary/25 text-muted-foreground hover:border-primary/35 hover:text-foreground")}>{filter}</button>)}
            </div>
          </div>
        </Reveal>

        {filteredFeatured.length > 0 ? <div className="mt-7 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">{filteredFeatured.map((project,index)=><Reveal key={project.slug} delay={(index%2)*65}><ProjectCard project={project} onOpen={setSelected} variant="featured" /></Reveal>)}</div> : null}

        {filteredOther.length > 0 ? <div className="mt-12 sm:mt-14"><Reveal><h3 className="font-display text-xl font-bold sm:text-2xl">Other Projects</h3><p className="mt-1 text-sm text-muted-foreground">Smaller builds, training work, and additional case studies.</p></Reveal><div className="mt-5 grid gap-5 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">{filteredOther.map((project,index)=><Reveal key={project.slug} delay={(index%3)*55}><ProjectCard project={project} onOpen={setSelected} variant="compact" /></Reveal>)}</div></div> : null}

        {!hasResults ? <p className="mt-12 text-center text-sm text-muted-foreground">No projects in this category yet.</p> : null}
      </div>
      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
