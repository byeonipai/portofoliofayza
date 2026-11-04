"use client"

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "clip"

type RevealProps = {
  children: ReactNode
  className?: string
  /** Delay in ms before the reveal transition starts. */
  delay?: number
  as?: ElementType
  variant?: RevealVariant
}

/**
 * Viewport-triggered motion with progressive enhancement.
 * Content stays visible if JavaScript or IntersectionObserver is unavailable.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    document.documentElement.dataset.motionReady = "true"

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    if (!("IntersectionObserver" in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -64px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      data-reveal={variant}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: delay + "ms" } : undefined}
    >
      {children}
    </Tag>
  )
}
