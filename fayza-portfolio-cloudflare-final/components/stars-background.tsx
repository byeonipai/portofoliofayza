"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

type Star = {
  left: string
  top: string
  delay: string
  opacity: number
}

type StarLayer = {
  size: number
  duration: number
  color: string
  glow: string
  stars: Star[]
}

type StarsBackgroundProps = {
  className?: string
  speed?: number
  factor?: number
}

/**
 * Full-page purple starfield.
 * Three duplicated 2,000px star planes loop seamlessly at different speeds.
 * Pointer input is observed on window, while the visual layer never intercepts UI.
 */
export function StarsBackground({
  className = "",
  speed = 50,
  factor = 0.05,
}: StarsBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const reducedMotionRef = useRef(false)
  const [active, setActive] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)

  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 50, damping: 20 })
  const springY = useSpring(pointerY, { stiffness: 50, damping: 20 })

  const layers = useMemo<StarLayer[]>(() => {
    const makeStars = (count: number, seed: number): Star[] =>
      Array.from({ length: count }, (_, index) => {
        const a = Math.sin((index + 1) * (12.9898 + seed)) * 43758.5453
        const b = Math.sin((index + 1) * (78.233 + seed)) * 24634.6345
        const c = Math.sin((index + 1) * (39.425 + seed)) * 12515.8731
        const fract = (value: number) => value - Math.floor(value)

        return {
          left: (fract(a) * 100).toFixed(2) + "%",
          top: (fract(b) * 2000).toFixed(1) + "px",
          delay: (-fract(c) * 4.8).toFixed(2) + "s",
          opacity: 0.62 + fract(a + b) * 0.38,
        }
      })

    return [
      { size: 1, duration: speed, color: "#C084FC", glow: "#A855F7", stars: makeStars(100, 1) },
      { size: 2, duration: speed * 2, color: "#A855F7", glow: "#9333EA", stars: makeStars(58, 2) },
      { size: 3, duration: speed * 3, color: "#9333EA", glow: "#7E22CE", stars: makeStars(30, 3) },
    ]
  }, [speed])

  useEffect(() => {
    const node = rootRef.current
    if (!node) return

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => {
      reducedMotionRef.current = motionPreference.matches
      setReducedMotion(motionPreference.matches)
      if (motionPreference.matches) {
        pointerX.set(0)
        pointerY.set(0)
      }
    }

    const updateVisibility = () => setActive(!document.hidden)
    updateMotionPreference()
    updateVisibility()

    motionPreference.addEventListener?.("change", updateMotionPreference)
    document.addEventListener("visibilitychange", updateVisibility)

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting && !document.hidden),
      { threshold: 0 },
    )
    observer.observe(node)

    // Move the sky away from the pointer, measured from the viewport center.
    const moveParallax = (event: PointerEvent) => {
      if (reducedMotionRef.current || event.pointerType !== "mouse") return
      pointerX.set((window.innerWidth / 2 - event.clientX) * factor)
      pointerY.set((window.innerHeight / 2 - event.clientY) * factor)
    }

    // A touch briefly shifts the sky; it springs back after the tap ends.
    const tapParallax = (event: PointerEvent) => {
      if (reducedMotionRef.current || event.pointerType !== "touch") return
      pointerX.set((window.innerWidth / 2 - event.clientX) * factor * 1.5)
      pointerY.set((window.innerHeight / 2 - event.clientY) * factor * 1.5)
    }

    const resetParallax = () => {
      pointerX.set(0)
      pointerY.set(0)
    }

    const resetWhenPointerLeavesWindow = (event: MouseEvent) => {
      if (!event.relatedTarget) resetParallax()
    }

    window.addEventListener("pointermove", moveParallax, { passive: true })
    window.addEventListener("pointerdown", tapParallax, { passive: true })
    window.addEventListener("pointerup", resetParallax, { passive: true })
    window.addEventListener("mouseout", resetWhenPointerLeavesWindow)
    window.addEventListener("blur", resetParallax)

    return () => {
      observer.disconnect()
      motionPreference.removeEventListener?.("change", updateMotionPreference)
      document.removeEventListener("visibilitychange", updateVisibility)
      window.removeEventListener("pointermove", moveParallax)
      window.removeEventListener("pointerdown", tapParallax)
      window.removeEventListener("pointerup", resetParallax)
      window.removeEventListener("mouseout", resetWhenPointerLeavesWindow)
      window.removeEventListener("blur", resetParallax)
    }
  }, [factor, pointerX, pointerY])

  const renderPlane = (layer: StarLayer, planeIndex: number) => (
    <div className="stars-plane" key={planeIndex}>
      {layer.stars.map((star, index) => (
        <i
          key={index}
          className="star-dot"
          style={{
            left: star.left,
            top: star.top,
            width: layer.size + "px",
            height: layer.size + "px",
            "--star-opacity": star.opacity,
            animationDelay: star.delay,
          } as CSSProperties}
        />
      ))}
    </div>
  )

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={"stars-background " + className}
    >
      <motion.div className="stars-parallax" style={{ x: springX, y: springY }}>
        {layers.map((layer, index) => (
          <div
            key={layer.size}
            className={"stars-layer stars-layer-" + (index + 1)}
            style={{
              animationDuration: layer.duration + "s",
              animationPlayState: active && !reducedMotion ? "running" : "paused",
              "--star-color": layer.color,
              "--star-glow": layer.glow,
            } as CSSProperties}
          >
            {renderPlane(layer, 0)}
            {renderPlane(layer, 1)}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
