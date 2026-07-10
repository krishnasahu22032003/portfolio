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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
            : "bg-background/40 backdrop-blur-md"
        }
      `}
    >
      <nav className="container max-w-2xl mx-auto h-16 px-4 flex items-center justify-between">
        <ul className="hidden sm:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    flex items-center py-1.5 rounded-full text-[13px] font-medium tracking-wide
                    transition-all duration-300 ease-out 
                    ${
                      active
                        ? "text-foreground "
                        : "text-muted-foreground"
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
            text-foreground transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:opacity-60 active:scale-90 dark:hover:opacity-70 dark:active:scale-95
          "
        >
          <Menu
            strokeWidth={1.25}
            className={`
              absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${open ? "rotate-45 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
            `}
          />
          <X
            strokeWidth={1.25}
            className={`
              absolute h-4 w-4 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-45 scale-0 opacity-0"}
            `}
          />
        </button>

        <div className="flex items-center gap-1">
          <div className="transition-opacity duration-300 hover:opacity-60 dark:hover:opacity-70">
            <MusicToggle />
          </div>
          <div className="transition-opacity duration-300 hover:opacity-60 dark:hover:opacity-70">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div
        className={`
          sm:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="container max-w-2xl mx-auto px-4 pb-4 pt-1 flex flex-col gap-0.5">
          {links.map((link, i) => {
            const active = pathname === link.href
            return (
              <li
                key={link.href}
                className={`
                  transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}
                `}
                style={{ transitionDelay: open ? `${i * 10}ms` : "0ms" }}
              >
                <Link
                  href={link.href}
                  className={`
                    flex items-center gap-2.5 rounded-lg px-2.5 py-2.5 text-sm font-medium tracking-wide
                    transition-colors duration-300
                    ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  <span
                    className={`
                      h-1 w-1 rounded-full bg-foreground transition-opacity duration-300
                      ${active ? "opacity-100" : "opacity-0"}
                    `}
                  />
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