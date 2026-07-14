"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ProjectCard } from "../ui/ProjectCard"
import { fullstackProjects } from "@/lib/FullstackProjects"
import { frontendProjects } from "@/lib/FrontendProjects"

const tabs = [
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const Projects = () => {
  const [active, setActive] = useState("fullstack")

  const filtered =
    active === "fullstack"
      ? fullstackProjects.slice(0, 4)
      : frontendProjects.slice(0, 4)

  return (
    <section className="container mx-auto max-w-2xl px-4 py-6">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <motion.h2
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
        >
          Projects
        </motion.h2>

        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              type="button"
              onClick={() => setActive(tab.value)}
              className="relative cursor-pointer rounded-full px-4 py-1.5 text-[12.5px] font-medium tracking-wide transition-colors duration-300"
            >
              {active === tab.value && (
                <motion.span
                  layoutId="projectTabHighlight"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 rounded-full bg-foreground"
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  active === tab.value
                    ? "text-background"
                    : "text-muted-foreground"
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="btn-inner-shadow inline-flex items-center rounded-full border border-border bg-card px-5 py-2 text-[13px] font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80"
        >
          View more
        </Link>
      </div>
    </section>
  )
}

export default Projects