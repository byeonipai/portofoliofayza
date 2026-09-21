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

  const matches = (p: Project) => active === "All" || p.categories.includes(active)
  const filteredFeatured = featuredProjects.filter(matches)
  const filteredOther = otherProjects.filter(matches)
  const hasResults = filteredFeatured.length > 0 || filteredOther.length > 0

  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Projects"
            description="Case studies and builds across system analysis, UI/UX design, and frontend development. Select any project to open a full case study."
          />
        </Reveal>

        {/* Category filter */}
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  active === filter
                    ? "border-primary/50 bg-primary/15 text-primary shadow-[0_0_20px_-8px_oklch(0.68_0.17_300/0.8)]"
                    : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Featured grid */}
        {filteredFeatured.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {filteredFeatured.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 100}>
                <ProjectCard project={project} onOpen={setSelected} variant="featured" />
              </Reveal>
            ))}
          </div>
        ) : null}

        {/* Other projects */}
        {filteredOther.length > 0 ? (
          <div className="mt-14">
            <Reveal>
              <h3 className="font-display text-xl font-bold sm:text-2xl">Other Projects</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Smaller builds, training work, and additional case studies.
              </p>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredOther.map((project, i) => (
                <Reveal key={project.slug} delay={(i % 3) * 80}>
                  <ProjectCard project={project} onOpen={setSelected} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        {!hasResults ? (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        ) : null}
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
