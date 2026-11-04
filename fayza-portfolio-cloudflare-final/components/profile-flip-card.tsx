"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeftRight, MapPin, Sparkles } from "lucide-react"
import { profile, hero } from "@/lib/content"

export function ProfileFlipCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="profile-flip-wrap">
      <button
        type="button"
        className="profile-flip-button"
        data-flipped={flipped ? "true" : "false"}
        aria-pressed={flipped}
        aria-label={flipped ? "Show portrait of Fayza Kamila" : "Flip to read more about Fayza Kamila"}
        onClick={() => setFlipped((value) => !value)}
      >
        <span className="profile-flip-inner">
          <span className="profile-flip-face profile-flip-front" aria-hidden={flipped}>
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

            <span className="profile-front-caption">
              <span className="profile-front-caption-copy">
                <span className="profile-front-kicker">SYSTEM ANALYST · CREATIVE THINKER</span>
                <span className="profile-front-name">{profile.name}</span>
              </span>
              <span className="profile-flip-hint">
                <ArrowLeftRight className="size-4" />
                <span>Flip card</span>
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
    </div>
  )
}
