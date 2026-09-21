"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/content"

type ProjectCardProps = {
  project: Project
  onOpen: (project: Project) => void
  variant?: "featured" | "compact"
}

export function ProjectCard({ project, onOpen, variant = "featured" }: ProjectCardProps) {
  const featured = variant === "featured"

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-3xl border border-border bg-card/50 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_60px_-24px_oklch(0.68_0.17_300/0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
      )}
      aria-label={`View details for ${project.title}`}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden",
          featured ? "aspect-[16/10]" : "aspect-[16/9]",
        )}
      >
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
          aria-hidden
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {project.categories.slice(0, featured ? 3 : 2).map((c) => (
            <span
              key={c}
              className="rounded-full border border-primary/30 bg-background/70 px-2.5 py-0.5 text-[11px] font-medium text-primary backdrop-blur"
            >
              {c}
            </span>
          ))}
        </div>
        <span className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col gap-3 p-5", featured && "sm:p-6")}>
        <div>
          <p className="text-xs font-medium text-primary">{project.role}</p>
          <h3
            className={cn(
              "mt-1 font-display font-bold leading-tight text-balance",
              featured ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {project.title}
          </h3>
        </div>
        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground",
            featured ? "line-clamp-3" : "line-clamp-2",
          )}
        >
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tools.slice(0, featured ? 5 : 3).map((tool) => (
            <span
              key={tool}
              className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}
