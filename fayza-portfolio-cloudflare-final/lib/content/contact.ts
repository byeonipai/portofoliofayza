import type { ContactContent, FooterContent } from "./types"

export const contact: ContactContent = {
  heading: "Get In Touch",
  message:
    "I'm open to System Analyst, UI/UX, and Frontend opportunities. Feel free to reach out for roles, projects, or collaboration.",
  links: [
    {
      label: "Email",
      value: "fayzakamila17@gmail.com",
      href: "mailto:fayzakamila17@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      value: "+62 812 3130 6613",
      href: "tel:+6281231306613",
      icon: "phone",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fayzakamila",
      href: "https://www.linkedin.com/in/fayzakamila/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/byeonipai",
      href: "https://github.com/byeonipai/",
      icon: "github",
    },
  ],
}

export const footer: FooterContent = {
  tagline: "System Analyst · UI/UX · Frontend Development",
  copyright: `© ${new Date().getFullYear()} Fayza Kamila. All rights reserved.`,
}
