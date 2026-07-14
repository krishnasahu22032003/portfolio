"use client"

import { motion } from "framer-motion"
import { movies } from "@/lib/Movies"

const sectionContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const MoviesPage = () => {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-6">
      <motion.h1
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Movies
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-3 text-[14px] leading-relaxed text-muted-foreground"
      >
        A running list of films, shows, and anime I keep coming back to.
      </motion.p>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        animate="show"
        className="mt-12 flex flex-col"
      >
        {movies.map((movie, index) => (
          <motion.div
            key={movie.title}
            variants={fadeUp}
            className={`pl-5 py-7 ${
              index !== movies.length - 1 ? "border-b border-border" : ""
            } ${index === 0 ? "border-t border-border" : ""}`}
          >
            <div className="flex flex-col items-start gap-1.5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-medium tracking-wide text-muted-foreground">
                  {movie.genre}
                </span>
                <span className="text-[12px] text-muted-foreground/60">
                  {movie.year}
                </span>
              </div>

              <h2 className="font-serif text-[19px] font-semibold italic tracking-tight text-foreground">
                {movie.title}
              </h2>

              <p className="max-w-md text-[13.5px] leading-relaxed text-muted-foreground">
                {movie.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default MoviesPage