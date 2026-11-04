import { StarsBackground } from "@/components/stars-background"

export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 isolate overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      {/* A continuous purple starfield behind every page section. */}
      <StarsBackground
        className="absolute inset-0 z-0 opacity-100"
        speed={50}
        factor={0.05}
      />

      {/* Keep atmospheric lighting subtle so the purple stars remain visible. */}
      <div className="absolute inset-0 z-[1] bg-grid opacity-20" />
      <div className="ambient-drift absolute -top-48 left-[18%] z-[2] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[140px]" />
      <div
        className="ambient-drift absolute right-[-10rem] top-[38%] z-[2] h-[24rem] w-[24rem] rounded-full bg-accent/6 blur-[130px]"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="ambient-drift absolute bottom-[-12rem] left-[8%] z-[2] h-[22rem] w-[22rem] rounded-full bg-primary/6 blur-[130px]"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  )
}
