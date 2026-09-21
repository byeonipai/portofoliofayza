import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type CtaVariant = "primary" | "secondary"
type CtaSize = "md" | "lg"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"

const variants: Record<CtaVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.68_0.17_300/0.6)] hover:shadow-[0_10px_40px_-6px_oklch(0.68_0.17_300/0.75)] hover:-translate-y-0.5",
  secondary:
    "border border-border bg-secondary/40 text-foreground backdrop-blur hover:border-primary/50 hover:bg-secondary/70 hover:-translate-y-0.5",
}

const sizes: Record<CtaSize, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-sm sm:text-base",
}

type CtaButtonProps = ComponentProps<"a"> & {
  variant?: CtaVariant
  size?: CtaSize
}

export function CtaButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: CtaButtonProps) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  )
}
