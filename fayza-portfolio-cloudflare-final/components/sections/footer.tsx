import { Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { contact, footer, navItems, profile, type ContactLink } from "@/lib/content"

type IconComponent = React.ComponentType<{ className?: string }>

const icons: Record<ContactLink["icon"], IconComponent> = {
  mail: Mail,
  phone: Phone,
  linkedin: LinkedinIcon,
  github: GithubIcon,
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="font-display text-xl font-bold">
              {profile.logo}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ul className="flex gap-3">
            {contact.links.map((link) => {
              const Icon = icons[link.icon]
              const isExternal = link.href.startsWith("http")
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={link.label}
                    className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-center">
          <p className="text-xs text-muted-foreground">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
