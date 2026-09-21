import { Boxes, Code2, Database, LayoutGrid, Workflow, Wrench } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/lib/content"

const categoryIcon: Record<string, React.ReactNode> = {
  "System Analysis": <Workflow className="size-5" />,
  "UI/UX": <LayoutGrid className="size-5" />,
  "Frontend Development": <Code2 className="size-5" />,
  "Data & Development": <Database className="size-5" />,
  "Tools & Platforms": <Wrench className="size-5" />,
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Tech Stack & Skills"
            description="A focused toolkit spanning system analysis, interface design, development, testing, and supporting platforms."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 80}>
              <div className="group h-full rounded-3xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    {categoryIcon[group.category] ?? <Boxes className="size-5" />}
                  </span>
                  <h3 className="font-display text-lg font-bold">{group.category}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
