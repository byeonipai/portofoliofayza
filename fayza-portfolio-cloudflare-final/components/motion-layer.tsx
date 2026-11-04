"use client"

import { useEffect, useRef } from "react"

/** Global motion accents: scroll progress and a desktop-only cursor spotlight. */
export function MotionLayer() {
  const progressRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let scrollFrame = 0
    let pointerFrame = 0

    const updateProgress = () => {
      if (scrollFrame) cancelAnimationFrame(scrollFrame)
      scrollFrame = requestAnimationFrame(() => {
        const root = document.documentElement
        const distance = root.scrollHeight - window.innerHeight
        const progress = distance > 0 ? Math.min(window.scrollY / distance, 1) : 0
        if (progressRef.current) {
          progressRef.current.style.transform = "scaleX(" + progress + ")"
        }
      })
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const moveSpotlight = (event: PointerEvent) => {
      if (!spotlightRef.current || event.pointerType !== "mouse") return
      if (pointerFrame) cancelAnimationFrame(pointerFrame)
      const x = event.clientX
      const y = event.clientY
      pointerFrame = requestAnimationFrame(() => {
        const node = spotlightRef.current
        if (!node) return
        node.style.transform = "translate3d(" + x + "px," + y + "px,0) translate(-50%,-50%)"
        node.style.opacity = "1"
      })
    }

    const hideSpotlight = () => {
      if (spotlightRef.current) spotlightRef.current.style.opacity = "0"
    }

    if (finePointer && !reducedMotion) {
      window.addEventListener("pointermove", moveSpotlight, { passive: true })
      window.addEventListener("blur", hideSpotlight)
    }

    return () => {
      if (scrollFrame) cancelAnimationFrame(scrollFrame)
      if (pointerFrame) cancelAnimationFrame(pointerFrame)
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
      window.removeEventListener("pointermove", moveSpotlight)
      window.removeEventListener("blur", hideSpotlight)
    }
  }, [])

  return (
    <>
      <div className="scroll-progress" aria-hidden>
        <div ref={progressRef} className="scroll-progress-bar" />
      </div>
      <div ref={spotlightRef} className="cursor-spotlight" aria-hidden />
    </>
  )
}
