"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/content"

type ProjectCardProps = { project: Project; onOpen: (project: Project) => void; variant?: "featured" | "compact" }

export function ProjectCard({ project, onOpen, variant = "featured" }: ProjectCardProps) {
  const featured = variant === "featured"
  return (
    <button type="button" onClick={() => onOpen(project)} aria-label={"View details for " + project.title}
      className={cn("interactive-card group relative flex w-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card/45 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background")}>
      <div className={cn("relative w-full overflow-hidden bg-secondary/20", featured ? "aspect-[16/10]" : "aspect-[16/9]")}>
        <Image src={project.thumbnail} alt={project.title + " preview"} fill sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"} className="project-card-image object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/10 to-transparent" aria-hidden />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {project.categories.slice(0, featured ? 3 : 2).map(category => <span key={category} className="rounded-full border border-border/80 bg-background/75 px-2.5 py-0.5 text-[11px] font-medium text-foreground/85 backdrop-blur-md">{category}</span>)}
        </div>
        <span className="absolute right-3 top-3 flex size-9 translate-y-1 items-center justify-center rounded-full border border-border/80 bg-background/80 text-foreground opacity-0 backdrop-blur-md transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"><ArrowUpRight className="size-4" /></span>
      </div>
      <div className={cn("flex flex-1 flex-col gap-3 p-5", featured && "sm:p-6")}>
        <div><p className="text-xs font-medium text-primary">{project.role}</p><h3 className={cn("mt-1 font-display font-bold leading-tight text-balance", featured ? "text-xl sm:text-2xl" : "text-lg")}>{project.title}</h3></div>
        <p className={cn("text-sm leading-relaxed text-muted-foreground", featured ? "line-clamp-3" : "line-clamp-2")}>{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">{project.tools.slice(0, featured ? 5 : 3).map(tool => <span key={tool} className="rounded-md border border-border/80 bg-secondary/35 px-2 py-0.5 text-[11px] text-muted-foreground">{tool}</span>)}</div>
      </div>
    </button>
  )
}
