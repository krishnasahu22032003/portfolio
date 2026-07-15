"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
import { FaGithub } from "react-icons/fa6"

const GITHUB_USERNAME = "krishnasahu22032003"

const sectionContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const calendarTheme = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
}

const useColorScheme = () => {
  const [scheme, setScheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement

    const update = () => {
      setScheme(root.classList.contains("dark") ? "dark" : "light")
    }

    update()

    const observer = new MutationObserver(update)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })

    return () => observer.disconnect()
  }, [])

  return scheme
}

const GithubActivity = () => {
  const colorScheme = useColorScheme()

  return (
    <section className="container mx-auto max-w-2xl py-6">
      <motion.h2
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Proof of Work
      </motion.h2>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-8 border-t border-border"
      >
        <motion.div variants={fadeUp} className="border-b border-border py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                GitHub Contributions
              </span>
              <span className="text-[12px] text-muted-foreground">
                @{GITHUB_USERNAME}
              </span>
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-medium tracking-wide text-muted-foreground transition-opacity duration-200 hover:opacity-70"
            >
              <FaGithub className="h-3.5 w-3.5" />
              Profile
            </a>
          </div>

          <div className="mt-5 -mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="min-w-[640px]">
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme={colorScheme}
                theme={calendarTheme}
                blockSize={11}
                blockMargin={4}
                blockRadius={3}
                fontSize={12}
                showWeekdayLabels
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
                errorMessage="Couldn't load GitHub activity right now."
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GithubActivity