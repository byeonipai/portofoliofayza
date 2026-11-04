"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeftRight, MapPin, Sparkles } from "lucide-react"
import { profile, hero } from "@/lib/content"

export function ProfileFlipCard() {
  const [flipped, setFlipped] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType !== "mouse") return
    const node = buttonRef.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    node.style.setProperty("--rx", ((0.5 - y) * 18).toFixed(2) + "deg")
    node.style.setProperty("--ry", ((x - 0.5) * 18).toFixed(2) + "deg")
    node.style.setProperty("--gx", (x * 100).toFixed(1) + "%")
    node.style.setProperty("--gy", (y * 100).toFixed(1) + "%")
  }

  const resetTilt = () => {
    const node = buttonRef.current
    if (!node) return
    node.style.setProperty("--rx", "0deg")
    node.style.setProperty("--ry", "0deg")
    node.style.setProperty("--gx", "50%")
    node.style.setProperty("--gy", "0%")
  }

  const toggleFlip = () => {
    resetTilt()
    setFlipped((value) => !value)
  }

  return (
    <div className="profile-flip-wrap">
      <div className="profile-ring" aria-hidden />
      <button
        ref={buttonRef}
        type="button"
        className="profile-flip-button"
        data-flipped={flipped ? "true" : "false"}
        aria-pressed={flipped}
        aria-label={flipped ? "Show portrait of Fayza Kamila" : "Flip to read more about Fayza Kamila"}
        onClick={toggleFlip}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
      >
        <span className="profile-flip-inner">
          <span className="profile-flip-face profile-flip-front" aria-hidden={flipped}>
            <span className="profile-photo-backdrop" />
            <span className="profile-photo-glow" />
            <span className="profile-photo-orbit profile-photo-orbit-one" />
            <span className="profile-photo-orbit profile-photo-orbit-two" />
            <span className="profile-photo-spark profile-photo-spark-one">✦</span>
            <span className="profile-photo-spark profile-photo-spark-two">✧</span>

            <Image
              src={profile.photo || "/placeholder.svg"}
              alt={profile.photoAlt}
              fill
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 40vw"
              className="profile-cutout"
            />

            <span className="profile-glare" />
            <span className="profile-name-tag">
              <span className="profile-name-tag-copy">
                <strong>{profile.name}</strong>
                <small>Information Systems Graduate</small>
              </span>
              <span className="profile-name-tag-hint">
                <ArrowLeftRight className="size-4" />
                Flip
              </span>
            </span>
          </span>

          <span className="profile-flip-face profile-flip-back" aria-hidden={!flipped}>
            <span className="profile-back-orb profile-back-orb-one" />
            <span className="profile-back-orb profile-back-orb-two" />
            <span className="profile-back-content">
              <span className="profile-back-eyebrow">
                <Sparkles className="size-4" />
                A LITTLE ABOUT ME
              </span>
              <span className="profile-back-name">{profile.name}</span>
              <span className="profile-back-role">{profile.role}</span>
              <span className="profile-back-location">
                <MapPin className="size-4 shrink-0" />
                {profile.location}
              </span>
              <span className="profile-back-divider" />
              <span className="profile-back-label">AREAS I WORK WITH</span>
              <span className="profile-back-skills">
                {hero.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="profile-back-skill">{tag}</span>
                ))}
              </span>
              <span className="profile-back-footer">
                <ArrowLeftRight className="size-4" />
                Tap to see my portrait
              </span>
            </span>
          </span>
        </span>
      </button>

      <span className="profile-chip profile-chip-figma"><i />Figma</span>
      <span className="profile-chip profile-chip-api"><i />REST API</span>
      <span className="profile-chip profile-chip-testing"><i />Testing</span>
      <span className="profile-chip profile-chip-frontend"><i />Frontend</span>
    </div>
  )
}
