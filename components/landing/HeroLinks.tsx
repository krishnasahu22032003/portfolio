"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
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

const links = [
  { label: "Twitter", href: "https://x.com/krishnasahu2203", icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/krishnasahu22/", icon: FaLinkedin },
  { label: "GitHub", href: "https://github.com/krishnasahu22032003", icon: FaGithub },
  { label: "Medium", href: "https://medium.com/@krishnasahu22", icon: MediumIcon },
  { label: "Gmail",  href:"mailto:krishna.sahu.work@gmail.com", icon: Mail },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  }, 
}

const HeroLinks = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex items-center justify-center gap-2 sm:gap-2"
    >
      {links.map(({ label, href, icon: Icon }) => (
        <motion.div key={label} variants={item} className="group relative flex flex-col items-center">
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
        </motion.div>
      ))}
    </motion.div>
  )
}

export default HeroLinks