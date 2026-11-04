/**
 * Fixed, decorative page background.
 * The grid and ambient color are intentionally restrained so content stays dominant.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-45" />
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_50%_8%,transparent_0%,var(--background)_82%)]" />
      <div className="absolute -top-48 left-[18%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />
      <div className="absolute right-[-10rem] top-[38%] h-[24rem] w-[24rem] rounded-full bg-accent/8 blur-[130px]" />
      <div className="absolute bottom-[-12rem] left-[8%] h-[22rem] w-[22rem] rounded-full bg-primary/8 blur-[130px]" />
    </div>
  )
}
