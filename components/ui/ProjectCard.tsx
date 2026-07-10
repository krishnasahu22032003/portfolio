"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  github?: string
  live?: string
  stack: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  stack,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
            {title}
          </h3>

          <div className="flex shrink-0 items-center gap-3 pt-0.5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} on GitHub`}
                className="text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                <FaGithub className="h-[18px] w-[18px]" />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live site`}
                className="text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
              >
                <ExternalLink className="h-[18px] w-[18px]" />
              </a>
            )}
          </div>
        </div>

        <p className="text-[13.5px] leading-relaxed text-muted-foreground sm:text-sm">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {stack.map((tech) => (
            <span
              key={tech}
              className="tag-inner-shadow rounded-full border border-border bg-background px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}