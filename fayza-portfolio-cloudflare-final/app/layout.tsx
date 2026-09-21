import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { profile } from "@/lib/content"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${profile.name} | System Analyst, UI/UX & Frontend`,
  description:
    "Portfolio of Fayza Kamila, an Information Systems graduate focused on system analysis, UI/UX design, frontend development, requirements, testing, and digital product projects.",
  keywords: [
    "Fayza Kamila",
    "System Analyst",
    "System Analysis",
    "UI/UX",
    "Frontend Developer",
    "Information Systems",
    "Requirement Analysis",
    "Portfolio",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.role,
    type: "website",
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#231a2e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
