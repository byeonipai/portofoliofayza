"use client"

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"

type Star = {
  left: string
  top: string
  delay: string
  duration: string
  opacity: number
}

type StarsBackgroundProps = {
  className?: string
  speed?: number
  factor?: number
  starColor?: string
}

/** Three lightweight CSS star layers with spring-based pointer/touch parallax. */
export function StarsBackground({
  className = "",
  speed = 50,
  factor = 0.035,
  starColor = "#eee8ff",
}: StarsBackgroundProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
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
          duration: (speed * (1 + seed * 0.12)).toFixed(2) + "s",
          opacity: 0.28 + fract(a + b) * 0.62,
        }
      })
    return [
      { size: 1, duration: speed, stars: makeStars(54, 1) },
      { size: 2, duration: speed * 2, stars: makeStars(30, 2) },
      { size: 3, duration: speed * 3, stars: makeStars(16, 3) },
    ]
  }, [speed])

  useEffect(() => {
    const node = rootRef.current
    if (!node) return
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotion = () => setReducedMotion(media.matches)
    updateMotion()
    media.addEventListener?.("change", updateMotion)

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(node)

    const onVisibility = () => setActive(!document.hidden && node.isConnected && node.getBoundingClientRect().bottom > 0 && node.getBoundingClientRect().top < window.innerHeight)
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      observer.disconnect()
      media.removeEventListener?.("change", updateMotion)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const dx = event.clientX - (bounds.left + bounds.width / 2)
    const dy = event.clientY - (bounds.top + bounds.height / 2)
    pointerX.set(dx * factor)
    pointerY.set(dy * factor)
  }

  const handlePointerLeave = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" || reducedMotion) return
    handlePointerMove(event)
  }

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={"stars-background " + className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
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
            }}
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
      <div className="stars-vignette" />
    </div>
  )
}
