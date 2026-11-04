import { Mail, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { contact, type ContactLink } from "@/lib/content"

type IconComponent = React.ComponentType<{ className?: string }>
const icons: Record<ContactLink["icon"], IconComponent> = { mail: Mail, phone: Phone, linkedin: LinkedinIcon, github: GithubIcon }

export function Contact() {
  return <section id="contact" className="scroll-mt-20 py-20 sm:py-28"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><Reveal variant="scale">
    <div className="interactive-card relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/45 p-8 sm:p-12"><div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/12 blur-[110px]" aria-hidden /><div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-accent/8 blur-[110px]" aria-hidden />
      <div className="relative"><SectionHeading eyebrow="Contact" title={contact.heading} /><p className="mx-auto mt-4 max-w-xl text-center text-pretty text-base leading-relaxed text-muted-foreground">{contact.message}</p>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">{contact.links.map(link=>{const Icon=icons[link.icon];const external=link.href.startsWith("http");return <li key={link.label}><a href={link.href} {...(external?{target:"_blank",rel:"noopener noreferrer"}:{})} className="interactive-card group flex items-center gap-4 rounded-2xl border border-border/80 bg-background/30 p-4"><span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.08] text-primary transition-colors duration-150 group-hover:bg-primary/[0.14]"><Icon className="size-5" /></span><span className="min-w-0"><span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">{link.label}</span><span className="block truncate text-sm font-medium text-foreground">{link.value}</span></span></a></li>})}</ul>
      </div>
    </div>
  </Reveal></div></section>
}
