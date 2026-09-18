"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Link } from "next-view-transitions"
import { workExperience } from "@/lib/WorkExperience"

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

const listContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
}

const pointVariant = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const tagVariant = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const Experience = () => {
  const [open, setOpen] = useState(true)
  const current = workExperience?.[0]
  const preview = workExperience?.[1]

  if (!current) return null

  return (
    <section className="container mx-auto max-w-2xl px-4 py-8 sm:px-0">
      <motion.h2
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Experience
      </motion.h2>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-8 border-t border-border"
      >
        <motion.div variants={fadeUp} className="border-b border-border py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                {current.company}
              </span>
              <span className="text-[12px] text-muted-foreground">
                {current.subtitle}
              </span>
            </div>

            <div className="flex flex-col gap-1 sm:items-end sm:text-right">
              <span className="text-[12px] text-muted-foreground">
                {current.duration}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                {current.location}
                {current.current && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                )}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-4 flex w-full items-center justify-between gap-4 text-left"
          >
            <span className="text-[13px] font-medium tracking-wide text-foreground">
              {current.role}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <motion.ul
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                  className="mt-4 flex flex-col gap-2.5"
                >
                  {current.points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={pointVariant}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                      <span>
                        {point.map((part, j) =>
                          j === 1 ? (
                            <span key={j} className="font-semibold text-foreground">
                              {part}
                            </span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                <motion.div
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {current.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariant}
                      className="tag-inner-shadow rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-medium tracking-wide text-muted-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {preview && (
          <motion.div variants={fadeUp}>
            <Link
              href="/work"
              className="group relative block overflow-hidden border-b border-border py-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold tracking-tight text-foreground/70">
                    {preview.company}
                  </span>
                  <span className="text-[12px] text-muted-foreground">
                    {preview.subtitle}
                  </span>
                </div>

                <div className="flex flex-col gap-1 sm:items-end sm:text-right">
                  <span className="text-[12px] text-muted-foreground">
                    {preview.duration}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                    {preview.location}
                    {preview.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    )}
                  </span>
                </div>
              </div>

              <div className="relative mt-4 max-h-[92px] overflow-hidden">
                <span className="block text-[13px] font-medium tracking-wide text-foreground/70">
                  {preview.role}
                </span>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {preview.points.slice(0, 2).map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                      <span>
                        {point.map((part, j) =>
                          j === 1 ? (
                            <span key={j} className="font-semibold text-foreground/70">
                              {part}
                            </span>
                          ) : (
                            <span key={j}>{part}</span>
                          )
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/90 to-transparent" />
              </div>
            </Link>
          </motion.div>
        )}

        <motion.div variants={fadeUp} className="flex justify-center py-8">
          <Link
            href="/work"
            className="btn-inner-shadow inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2 text-[13px] font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80"
          >
            View more
            <ChevronDown className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience