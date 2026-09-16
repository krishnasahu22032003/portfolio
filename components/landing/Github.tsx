"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa6"

const GITHUB_USERNAME = "krishnasahu22032003"

type Contribution = {
  date: string
  count: number
  weekday: number
}

type GithubResponse = {
  success: boolean
  total?: {
    lastYear: number
  }
  contributions?: Contribution[]
  error?: string
}

const calendarColors = {
  light: [
    "#ebedf0",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
  ],
  dark: [
    "#161b22",
    "#0e4429",
    "#006d32",
    "#26a641",
    "#39d353",
  ],
}

const sectionContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const useColorScheme = () => {
  const [scheme, setScheme] =
    useState<"light" | "dark">("light")

  useEffect(() => {
    const root = document.documentElement

    const update = () => {
      setScheme(
        root.classList.contains("dark")
          ? "dark"
          : "light"
      )
    }

    update()

    const observer = new MutationObserver(update)

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return scheme
}

const getLevel = (count: number) => {
  if (count === 0) return 0
  if (count <= 3) return 1
  if (count <= 6) return 2
  if (count <= 10) return 3
  return 4
}

const GithubActivity = () => {
  const colorScheme = useColorScheme()

  const [contributions, setContributions] =
    useState<Contribution[]>([])

  const [total, setTotal] = useState(0)

  const [loading, setLoading] = useState(true)

  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadContributions = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          "/api/github/contributions"
        )

        const data: GithubResponse =
          await response.json()

        if (!response.ok || !data.success) {
          throw new Error(
            data.error ||
              "Failed to load GitHub contributions"
          )
        }

        setContributions(
          data.contributions ?? []
        )

        setTotal(
          data.total?.lastYear ?? 0
        )
      } catch (error) {
        console.error(
          "GitHub contributions error:",
          error
        )

        setError(
          "Couldn't load GitHub activity right now."
        )
      } finally {
        setLoading(false)
      }
    }

    loadContributions()
  }, [])

  const colors =
    colorScheme === "dark"
      ? calendarColors.dark
      : calendarColors.light

  const weeks: Contribution[][] = []

  let currentWeek: Contribution[] = []

  contributions.forEach((day, index) => {
    const isSunday =
      day.weekday === 0

    if (
      index > 0 &&
      isSunday &&
      currentWeek.length > 0
    ) {
      weeks.push(currentWeek)
      currentWeek = []
    }

    currentWeek.push(day)
  })

  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  return (
    <section className="container mx-auto max-w-2xl py-8">
      <motion.h2
        initial={{
          opacity: 0,
          y: 14,
          filter: "blur(6px)",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Proof of Work
      </motion.h2>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          margin: "-80px",
        }}
        className="mt-8 border-t border-border"
      >
        <motion.div
          variants={fadeUp}
          className="border-b border-border py-6"
        >
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

          {/* Calendar */}
          <div className="mt-5 w-full">
            {loading && (
              <div className="flex justify-center">
                <div className="flex gap-[3px]">
                  {Array.from({
                    length: 53,
                  }).map((_, weekIndex) => (
                    <div
                      key={weekIndex}
                      className="flex flex-col gap-[3px]"
                    >
                      {Array.from({
                        length: 7,
                      }).map((_, dayIndex) => (
                        <div
                          key={dayIndex}
                          className="h-[2.5] w-[2.5] animate-pulse rounded-[2px] bg-muted"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!loading && error && (
              <div className="py-8 text-center text-sm text-muted-foreground">
                {error}
              </div>
            )}

            {!loading &&
              !error &&
              contributions.length > 0 && (
                <>
                  <div className="flex justify-center">
                    <div className="flex gap-[3px]">
                      {weeks.map(
                        (week, weekIndex) => (
                          <div
                            key={weekIndex}
                            className="flex flex-col gap-[3px]"
                          >
                            {week.map((day) => {
                              const level =
                                getLevel(
                                  day.count
                                )

                              return (
                                <div
                                  key={day.date}
                                  title={`${day.count} contributions on ${day.date}`}
                                  className="h-[9px] w-[9px] rounded-[2px] transition-transform duration-150 hover:scale-125"
                                  style={{
                                    backgroundColor:
                                      colors[level],
                                  }}
                                />
                              )
                            })}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">
                      {total.toLocaleString()}{" "}
                      contributions in the last year
                    </span>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground">
                        Less
                      </span>

                      {colors.map(
                        (color, index) => (
                          <span
                            key={index}
                            className="h-[9px] w-[9px] rounded-[2px]"
                            style={{
                              backgroundColor:
                                color,
                            }}
                          />
                        )
                      )}

                      <span className="text-[10px] text-muted-foreground">
                        More
                      </span>
                    </div>
                  </div>
                </>
              )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GithubActivity
