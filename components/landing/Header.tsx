"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "../ui/theme-toggle"
import { MusicToggle } from "../ui/MusicToggle"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
]

const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <nav className="container max-w-2xl mx-auto h-14 px-4 flex items-center justify-between">
        <ul className="hidden sm:flex items-center gap-1">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    relative flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide
                    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${
                      active
                        ? "text-foreground bg-secondary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="
            relative flex h-9 w-9 items-center justify-center rounded-full sm:hidden
            text-foreground
            transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:bg-secondary/60
            active:scale-90
          "
        >
          <Menu
            strokeWidth={1.5}
            className={`
              absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${open ? "rotate-45 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
            `}
          />
          <X
            strokeWidth={1.5}
            className={`
              absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-45 scale-0 opacity-0"}
            `}
          />
        </button>

        <div className="flex items-center gap-2">
          <MusicToggle />
          <ThemeToggle />
        </div>
      </nav>

      <div
        className={`
          sm:hidden overflow-hidden border-b border-border/60
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="container max-w-2xl mx-auto px-4 py-2 flex flex-col">
          {links.map((link, i) => {
            const active = pathname === link.href
            return (
              <li
                key={link.href}
                className={`
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                `}
                style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className={`
                    flex items-center rounded-lg px-3 py-2.5 text-sm font-medium tracking-wide
                    transition-colors duration-300
                    ${active ? "text-foreground bg-secondary" : "text-muted-foreground"}
                    hover:text-foreground hover:bg-secondary/60
                  `}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}

export default Header