"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const points = [
  ["Reduced API latency by ", "45%", " through database optimization, Redis caching, and asynchronous processing, significantly improving application responsiveness."],
  ["Designed and implemented scalable backend architectures capable of handling ", "100K+", " daily requests with high availability and fault tolerance."],
  ["Increased system throughput by ", "60%", " by introducing event-driven workflows, Kafka messaging, and BullMQ-based background job processing."],
  ["Automated cloud infrastructure and CI/CD pipelines using AWS, Docker, Kubernetes, Terraform, ArgoCD, and GitHub Actions, reducing deployment time by ", "70%", "."],
  ["Improved production reliability to ", "99.9%", " uptime by implementing monitoring, distributed logging, health checks, and alerting with Prometheus, Grafana, and New Relic."],
  ["Built secure, production-ready authentication and authorization systems using JWT, OAuth, RBAC, rate limiting, and API validation with Zod."],
  ["Developed AI-powered features using OpenAI, LangChain, LangGraph, RAG, and vector databases to automate workflows and enhance user experiences."],
  ["Led end-to-end feature development, from architecture and system design to deployment, monitoring, and continuous optimization, following engineering best practices."],
]

const tags = [
  "Node.js",
  "TypeScript",
  "AWS",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Kafka",
  "Redis",
  "LangChain",
  "System Design",
]

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

const pointVariant = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const Experience = () => {
  const [open, setOpen] = useState(true)

  return (
    <section className="container mx-auto max-w-2xl py-8">
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
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                InlighnX Global
              </span>
              <span className="text-[12px] text-muted-foreground">
                Inlighn Tech
              </span>
            </div>

            <div className="flex flex-col items-end gap-1 text-right">
              <span className="text-[12px] text-muted-foreground">
                May 2025 &ndash; Jun 2026
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                Remote
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-4 flex w-full items-center justify-between gap-4 text-left"
          >
            <span className="text-[13px] font-medium tracking-wide text-foreground">
              Full Stack Developer
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
                <ul className="mt-4 flex flex-col gap-2.5">
                  {points.map((point, i) => (
                    <motion.li
                      key={i}
                      variants={pointVariant}
                      initial="hidden"
                      animate="show"
                      transition={{ delay: i * 0.05 }}
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
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-inner-shadow rounded-full border border-border bg-card px-3 py-1.5 text-[12px] font-medium tracking-wide text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-center py-8">
          <Link
            href="/work"
            className="btn-inner-shadow inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2 text-[13px] font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80"
          >
            Show more
            <ChevronDown className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Experience