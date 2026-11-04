"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

type Star = {
  left: string
  top: string
  delay: string
  opacity: number
}

type StarsBackgroundProps = {
  className?: string
  speed?: number
  factor?: number
  starColor?: string
}

/**
 * Global decorative starfield.
 * Pointer tracking is attached to window so the background never blocks links,
 * buttons, scrolling, or other page interactions.
 */
export function StarsBackground({
  className = "",
  speed = 48,
  factor = 0.018,
  starColor = "#e7ddff",
}: StarsBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)
  const [reducedMotion, setReducedMotion] = useState(false)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 50, damping: 20 })
  const springY = useSpring(pointerY, { stiffness: 50, damping: 20 })

  const layers = useMemo(() => {
    const makeStars = (count: number, seed: number): Star[] =>
      Array.from({ length: count }, (_, index) => {
        const a = Math.sin((index + 1) * (12.9898 + seed)) * 43758.5453
        const b = Math.sin((index + 1) * (78.233 + seed)) * 24634.6345
        const c = Math.sin((index + 1) * (39.425 + seed)) * 12515.8731
        const fract = (value: number) => value - Math.floor(value)
        return {
          left: (fract(a) * 100).toFixed(2) + "%",
          top: (fract(b) * 100).toFixed(2) + "%",
          delay: (-fract(c) * speed).toFixed(2) + "s",
          opacity: 0.35 + fract(a + b) * 0.55,
        }
      })

    return [
      { size: 1, duration: speed, stars: makeStars(64, 1) },
      { size: 2, duration: speed * 2, stars: makeStars(36, 2) },
      { size: 3, duration: speed * 3, stars: makeStars(20, 3) },
    ]
  }, [speed])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotion = () => setReducedMotion(media.matches)
    const updateVisibility = () => setActive(!document.hidden)

    updateMotion()
    updateVisibility()
    media.addEventListener?.("change", updateMotion)
    document.addEventListener("visibilitychange", updateVisibility)

    const moveParallax = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType !== "mouse") return
      const dx = event.clientX - window.innerWidth / 2
      const dy = event.clientY - window.innerHeight / 2
      pointerX.set(dx * factor)
      pointerY.set(dy * factor)
    }

    const tapParallax = (event: PointerEvent) => {
      if (reducedMotion || event.pointerType !== "touch") return
      const dx = event.clientX - window.innerWidth / 2
      const dy = event.clientY - window.innerHeight / 2
      pointerX.set(dx * factor * 1.5)
      pointerY.set(dy * factor * 1.5)
    }

    const resetParallax = () => {
      pointerX.set(0)
      pointerY.set(0)
    }

    window.addEventListener("pointermove", moveParallax, { passive: true })
    window.addEventListener("pointerdown", tapParallax, { passive: true })
    window.addEventListener("blur", resetParallax)

    return () => {
      media.removeEventListener?.("change", updateMotion)
      document.removeEventListener("visibilitychange", updateVisibility)
      window.removeEventListener("pointermove", moveParallax)
      window.removeEventListener("pointerdown", tapParallax)
      window.removeEventListener("blur", resetParallax)
    }
  }, [factor, pointerX, pointerY, reducedMotion])

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={"stars-background " + className}
      style={{ "--star-color": starColor } as CSSProperties}
    >
      <motion.div className="stars-parallax" style={{ x: springX, y: springY }}>
        {layers.map((layer, layerIndex) => (
          <div
            key={layer.size}
            className={"stars-layer stars-layer-" + (layerIndex + 1)}
            style={{
              animationDuration: layer.duration + "s",
              animationPlayState: active && !reducedMotion ? "running" : "paused",
              "--star-play-state": active && !reducedMotion ? "running" : "paused",
            } as CSSProperties}
          >
            {layer.stars.map((star, index) => (
              <i
                key={index}
                className="star-dot"
                style={{
                  left: star.left,
                  top: star.top,
                  width: layer.size + "px",
                  height: layer.size + "px",
                  opacity: star.opacity,
                  animationDelay: star.delay,
                }}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
