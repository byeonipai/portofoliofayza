import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

type CtaVariant = "primary" | "secondary"
type CtaSize = "md" | "lg"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium outline-none transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50"

const variants: Record<CtaVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_8px_24px_-12px_oklch(0.72_0.12_295/0.5)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_oklch(0.72_0.12_295/0.6)]",
  secondary:
    "border border-border bg-secondary/40 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/70",
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
