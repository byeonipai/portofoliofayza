/**
 * Fixed, decorative page background: subtle grid + soft purple glows.
 * Kept purely CSS-driven for good performance.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-70" />
      {/* radial vignette so the grid fades toward edges */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_35%,var(--background)_95%)]" />
      {/* soft violet glows */}
      <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute top-1/3 right-0 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-[120px]" />
    </div>
  )
}
