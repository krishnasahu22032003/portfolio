"use client"

import Link from "next/link"
import { Heart, Mail } from "lucide-react"
import { FaGithub , FaLinkedin } from "react-icons/fa6"

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.9 2h3.4l-7.5 8.6L23.5 22h-6.9l-5.4-7-6.2 7H1.6l8-9.2L1 2h7l4.9 6.4L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" />
  </svg>
)

const MediumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.5 12c0 5-3.6 9-8 9s-8-4-8-9 3.6-9 8-9 8 4 8 9Zm9.5 0c0 4.7-1.8 8.5-4 8.5s-4-3.8-4-8.5 1.8-8.5 4-8.5 4 3.8 4 8.5Zm3 0c0 4.2-.6 7.6-1.5 7.6S22 16.2 22 12s.6-7.6 1.5-7.6S25 7.8 25 12Z" transform="translate(-1.5)" />
  </svg>
)

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Resume", href: "/resume" },
  { label: "Blogs", href: "/blogs" },
  { label: "Projects", href: "/projects" },
  { label: "Movies", href: "/movies" },
  { label: "Books", href: "/books" },
  { label: "Gears", href: "/gears" },
]

const socialLinks = [
   { label: "Twitter", href: "https://x.com/krishnasahu2203", icon: XIcon },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/krishnasahu22/", icon: FaLinkedin },
    { label: "GitHub", href: "https://github.com/krishnasahu22032003", icon: FaGithub },
    { label: "Medium", href: "https://medium.com/@krishnasahu22", icon: MediumIcon },
    { label: "Gmail",  href:"mailto:krishna.sahu.work@gmail.com", icon: Mail },
]

const Footer = () => {
  return (
    <footer className="border-t border-border px-4">
      <div className="container mx-auto max-w-2xl py-8 sm:py-10">
        <div className="flex flex-col items-center gap-8 text-center sm:gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
              Explore
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-medium tracking-wide text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground/60">
              Reach Out
            </span>
            <div className="flex items-center gap-5 sm:gap-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <div key={label} className="group relative flex flex-col items-center">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center justify-center p-1 text-muted-foreground/70 transition-colors duration-200 group-hover:text-foreground"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                  <span className="pointer-events-none absolute top-full mt-1.5 whitespace-nowrap text-[10px] font-medium tracking-wide text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
<div className="flex flex-col items-center gap-1.5">
  <span className="flex items-center gap-1.5 font-serif text-base font-semibold tracking-tight text-foreground">
    Made with
    <Heart className="h-3.5 w-3.5 fill-destructive text-destructive" />
    by Krishna Sahu
  </span>
  <span className="text-[12px] tracking-wide text-muted-foreground">
    All rights reserved &copy; {new Date().getFullYear()}
  </span>
</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer