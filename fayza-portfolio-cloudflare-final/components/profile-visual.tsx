"use client"

import { useRef } from "react"
import Image from "next/image"
import { profile, hero } from "@/lib/content"

export function ProfileVisual() {
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const updateTilt = (clientX: number, clientY: number, strength = 16) => {
    const stage = stageRef.current
    const card = cardRef.current
    if (!stage || !card) return

    const bounds = stage.getBoundingClientRect()
    const x = (clientX - bounds.left) / bounds.width
    const y = (clientY - bounds.top) / bounds.height

    card.style.setProperty("--rx", ((0.5 - y) * strength).toFixed(2) + "deg")
    card.style.setProperty("--ry", ((x - 0.5) * strength).toFixed(2) + "deg")
    card.style.setProperty("--gx", (x * 100).toFixed(1) + "%")
    card.style.setProperty("--gy", (y * 100).toFixed(1) + "%")
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return
    updateTilt(event.clientX, event.clientY)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return
    updateTilt(event.clientX, event.clientY, 5)
  }

  const resetTilt = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty("--rx", "0deg")
    card.style.setProperty("--ry", "0deg")
    card.style.setProperty("--gx", "50%")
    card.style.setProperty("--gy", "20%")
  }

  return (
    <div
      ref={stageRef}
      className="profile-visual-stage"
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerLeave={resetTilt}
      onPointerUp={resetTilt}
    >
      <div className="profile-visual-card" ref={cardRef}>
        <div className="profile-visual-orbit" aria-hidden />
        <div className="profile-visual-blob" aria-hidden />
        <div className="profile-visual-glow" aria-hidden />

        <Image
          src={profile.photo || "/placeholder.svg"}
          alt={profile.photoAlt}
          fill
          priority
          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 420px, 42vw"
          className="profile-visual-person"
        />

        <div className="profile-visual-glare" aria-hidden />

        <div className="profile-visual-name">
          <strong>{profile.name}</strong>
          <small>Information Systems Graduate</small>
        </div>

        <div className="profile-visual-chip profile-visual-chip-figma"><i />Figma</div>
        <div className="profile-visual-chip profile-visual-chip-api"><i />REST API</div>
        <div className="profile-visual-chip profile-visual-chip-testing"><i />Testing</div>
        <div className="profile-visual-chip profile-visual-chip-frontend"><i />Frontend</div>
      </div>

      <span className="sr-only">
        {profile.name}, {profile.role}. Skills: {hero.tags.join(", ")}.
      </span>
    </div>
  )
}
