import { CtaButton } from "@/components/cta-button"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          The page you opened does not exist. Return to the portfolio homepage to continue browsing.
        </p>
        <div className="mt-7 flex justify-center">
          <CtaButton href="/" size="lg">Back to Home</CtaButton>
        </div>
      </div>
    </main>
  )
}
