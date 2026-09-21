"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ExternalLink, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Modal } from "@/components/modal"
import {
  certificateCategories,
  certificates,
  type Certificate,
} from "@/lib/content"

export function Certificates() {
  const [active, setActive] = useState<string>("All")
  const [preview, setPreview] = useState<Certificate | null>(null)

  const filters = useMemo(
    () => ["All", ...certificateCategories],
    [],
  )

  const filtered = certificates.filter(
    (certificate) =>
      active === "All" || certificate.category === active,
  )

  return (
    <section
      id="certificates"
      className="scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Certificates"
            description="Selected certifications and training across system analysis, development, cloud computing, and academic work."
          />
        </Reveal>

        {/* Filters */}
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

        {/* Certificate cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, index) => (
            <Reveal key={cert.id} delay={(index % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                {/* Certificate thumbnail */}
                <button
                  type="button"
                  onClick={() => setPreview(cert)}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-label={`Preview ${cert.title} certificate`}
                >
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground">
                      <Eye className="size-4" />
                      View Certificate
                    </span>
                  </div>

                  {/* Category badge */}
                  <span className="absolute right-3 top-3 rounded-full border border-primary/30 bg-background/80 px-2.5 py-0.5 text-[11px] font-medium text-primary backdrop-blur">
                    {cert.category}
                  </span>
                </button>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-bold leading-tight text-balance">
                      {cert.title}
                    </h3>

                    <span className="shrink-0 text-xs text-muted-foreground">
                      {cert.year}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-primary">
                    {cert.issuer}
                  </p>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cert.note}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setPreview(cert)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      <Eye className="size-4" />
                      View Certificate
                    </button>

                    {cert.href ? (
                      <a
                        href={cert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <ExternalLink className="size-4" />
                        View PDF
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-size certificate preview */}
      <Modal
        open={Boolean(preview)}
        onClose={() => setPreview(null)}
        label={
          preview
            ? `${preview.title} full preview`
            : "Certificate preview"
        }
        className="max-w-4xl"
      >
        {preview ? (
          <div className="p-4 sm:p-6">
            {/* Large certificate image */}
            <div className="relative h-[55vh] w-full overflow-hidden rounded-2xl border border-border bg-white/[0.03] sm:h-[65vh]">
              <Image
                src={preview.image || "/placeholder.svg"}
                alt={`${preview.title} certificate`}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain p-3 sm:p-4"
                priority
              />
            </div>

            {/* Certificate information */}
            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-2xl">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {preview.category}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {preview.year}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground">
                  {preview.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-primary">
                  {preview.issuer}
                </p>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {preview.note}
                </p>
              </div>

              {/* PDF button */}
              {preview.href ? (
                <a
                  href={preview.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/15"
                >
                  <ExternalLink className="size-4" />
                  View PDF
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
