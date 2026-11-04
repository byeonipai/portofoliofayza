"use client"

import { useRef } from "react"
import Image from "next/image"
import { profile, hero } from "@/lib/content"

export function ProfileVisual() {
  const stageRef = useRef<HTMLDivElement>(null)
  const artRef = useRef<HTMLDivElement>(null)

  const updateTilt = (clientX: number, clientY: number, strength = 12) => {
    const art = artRef.current
    if (!art) return

    const bounds = art.getBoundingClientRect()
    const x = (clientX - bounds.left) / bounds.width
    const y = (clientY - bounds.top) / bounds.height

    art.style.setProperty("--rx", ((0.5 - y) * strength).toFixed(2) + "deg")
    art.style.setProperty("--ry", ((x - 0.5) * strength).toFixed(2) + "deg")
    art.style.setProperty("--gx", (x * 100).toFixed(1) + "%")
    art.style.setProperty("--gy", (y * 100).toFixed(1) + "%")
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return
    updateTilt(event.clientX, event.clientY)
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return
    updateTilt(event.clientX, event.clientY, 4)
  }

  const resetTilt = () => {
    const art = artRef.current
    if (!art) return
    art.style.setProperty("--rx", "0deg")
    art.style.setProperty("--ry", "0deg")
    art.style.setProperty("--gx", "50%")
    art.style.setProperty("--gy", "20%")
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
      <div className="profile-visual-art" ref={artRef}>
        <div className="profile-visual-orbit" aria-hidden />
        <div className="profile-visual-blob" aria-hidden />
        <div className="profile-visual-glow" aria-hidden />

        <Image
          src={profile.photo || "/placeholder.svg"}
          alt={profile.photoAlt}
          width={1200}
          height={1500}
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 42vw"
          className="profile-visual-person"
        />

        <div className="profile-visual-glare" aria-hidden />

        <div className="profile-visual-chip profile-visual-chip-figma"><i />Figma</div>
        <div className="profile-visual-chip profile-visual-chip-api"><i />REST API</div>
        <div className="profile-visual-chip profile-visual-chip-testing"><i />Testing</div>
        <div className="profile-visual-chip profile-visual-chip-frontend"><i />Frontend</div>
      </div>

      <div className="profile-visual-caption">
        <span className="profile-visual-caption-mark" aria-hidden />
        <span className="profile-visual-caption-copy">
          <strong>{profile.name}</strong>
          <small>Information Systems Graduate</small>
        </span>
      </div>

      <span className="sr-only">
        {profile.name}, {profile.role}. Skills: {hero.tags.join(", ")}.
      </span>
    </div>
  )
}
