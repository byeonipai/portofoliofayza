"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems, profile } from "@/lib/content"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((item) => item.href.replace("#", ""))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive("#" + entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = () => setOpen(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ease-out",
        scrolled ? "border-b border-border/70 glass" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight text-foreground transition-colors duration-150 hover:text-primary"
          onClick={handleNavClick}
        >
          {profile.logo}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "location" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150",
                  active === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === item.href ? (
                  <span
                    className="absolute inset-0 rounded-full bg-primary/10 ring-1 ring-primary/20 transition-[background-color,box-shadow] duration-200"
                    aria-hidden
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="interactive-control hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-10px_oklch(0.72_0.12_295/0.55)] md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          className="interactive-control inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        data-open={open ? "true" : "false"}
        aria-hidden={!open}
        className="mobile-menu md:hidden"
      >
        <ul className="flex flex-col gap-1 px-4 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleNavClick}
                aria-current={active === item.href ? "location" : undefined}
                className={cn(
                  "block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150",
                  active === item.href
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="interactive-control mt-1 block rounded-lg bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
