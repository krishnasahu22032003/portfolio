"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { blogs } from "@/lib/Blog"

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

const BlogsPage = () => {
  return (
    <section className="container mx-auto max-w-2xl py-6 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Blogs
      </motion.h1>
      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
        Thoughts on backend engineering, AI, and building things end to end.
      </p>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="show"
        className="mt-8 border-t border-border"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.slug}
            variants={fadeUp}
            className="flex flex-col gap-4 border-b border-border py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                {blog.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {blog.description}
              </p>
            </div>

            <Link
              href={`/blogs/${blog.slug}`}
              className="btn-inner-shadow inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-[12px] font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80"
            >
              Read post
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default BlogsPage