"use client"

import { useEffect, type ReactNode } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

type ModalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
  label: string
  className?: string
}

/** Lightweight accessible modal: portal + backdrop, ESC to close, scroll lock. */
export function Modal({ open, onClose, children, label, className }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open || typeof document === "undefined") return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto overscroll-contain p-4 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="fixed inset-0 cursor-default bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
      />
      <div
        className={cn(
          "relative z-10 my-auto w-full max-w-3xl rounded-3xl border border-border bg-card shadow-2xl animate-in fade-in zoom-in-95 duration-200",
          className,
        )}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex size-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
        >
          <X className="size-4" />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  )
}
