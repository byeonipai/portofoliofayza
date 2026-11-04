import { StarsBackground } from "@/components/stars-background"

export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      {/* One continuous starfield behind every section, not inside the hero image. */}
      <StarsBackground
        className="absolute inset-0 z-0 opacity-75"
        speed={48}
        factor={0.018}
        starColor="#e7ddff"
      />

      <div className="absolute inset-0 z-[1] bg-grid opacity-30" />
      <div className="absolute inset-0 z-[2] [background:radial-gradient(ellipse_at_50%_8%,transparent_0%,var(--background)_88%)]" />

      <div className="ambient-drift absolute -top-48 left-[18%] z-[3] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
      <div
        className="ambient-drift absolute right-[-10rem] top-[38%] z-[3] h-[24rem] w-[24rem] rounded-full bg-accent/7 blur-[130px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="ambient-drift absolute bottom-[-12rem] left-[8%] z-[3] h-[22rem] w-[22rem] rounded-full bg-primary/7 blur-[130px]"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  )
}
