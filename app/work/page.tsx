"use client"

import { motion } from "framer-motion"
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

const WorkPage = () => {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-6">
      <motion.h1
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Work Experience
      </motion.h1>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="show"
        className="mt-8 border-t border-border"
      >
        {workExperience.map((exp) => (
          <motion.div
            key={exp.company}
            variants={fadeUp}
            className="border-b border-border py-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold tracking-tight text-foreground">
                  {exp.company}
                </span>
                <span className="text-[12px] text-muted-foreground">
                  {exp.subtitle}
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:items-end sm:text-right">
                <span className="text-[12px] text-muted-foreground">
                  {exp.duration}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                  {exp.location}
                  {exp.current && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  )}
                </span>
              </div>
            </div>

            <span className="mt-4 block text-[13px] font-medium tracking-wide text-foreground">
              {exp.role}
            </span>

            <motion.ul
              variants={listContainer}
              initial="hidden"
              animate="show"
              className="mt-4 flex flex-col gap-2.5"
            >
              {exp.points.map((point, i) => (
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
              {exp.tags.map((tag) => (
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
        ))}
      </motion.div>
    </section>
  )
}

export default WorkPage