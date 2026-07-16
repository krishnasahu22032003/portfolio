"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const animeQuotes = [
  {
    quote: "Hard work is worthless for those that don't believe in themselves.",
    author: "Naruto Uzumaki",
    anime: "Naruto",
  },
  {
    quote: "The moment people come to know love, they run the risk of carrying hate.",
    author: "Obito Uchiha",
    anime: "Naruto Shippuden",
  },
  {
    quote: "Those who forgive themselves, and are able to accept their true nature... they are the strong ones.",
    author: "Itachi Uchiha",
    anime: "Naruto Shippuden",
  },
  {
    quote: "Power isn't determined by your size, but by the size of your heart and dreams.",
    author: "Monkey D. Luffy",
    anime: "One Piece",
  },
  {
    quote: "When do you think people die? When they are forgotten.",
    author: "Dr. Hiluluk",
    anime: "One Piece",
  },
  {
    quote: "A man's dream will never die.",
    author: "Marshall D. Teach",
    anime: "One Piece",
  },
  {
    quote: "Fear is not evil. It tells you what your weakness is.",
    author: "Gildarts Clive",
    anime: "Fairy Tail",
  },
  {
    quote: "Move forward. If you stop, you'll never reach the place you want to be.",
    author: "Edward Elric",
    anime: "Fullmetal Alchemist: Brotherhood",
  },
  {
    quote: "The world isn't perfect. But it's there for us, doing the best it can.",
    author: "Roy Mustang",
    anime: "Fullmetal Alchemist: Brotherhood",
  },
  {
    quote: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.",
    author: "Kenshin Himura",
    anime: "Rurouni Kenshin",
  },
  {
    quote: "The only ones who should kill are those prepared to be killed.",
    author: "Lelouch Lamperouge",
    anime: "Code Geass",
  },
  {
    quote: "A lesson without pain is meaningless.",
    author: "Edward Elric",
    anime: "Fullmetal Alchemist: Brotherhood",
  },
  {
    quote: "No matter how deep the night, it always turns to day.",
    author: "Brook",
    anime: "One Piece",
  },
  {
    quote: "If you don't like your destiny, don't accept it. Have the courage to change it.",
    author: "Naruto Uzumaki",
    anime: "Naruto Shippuden",
  },
  {
    quote: "The future belongs to those who never stop believing.",
    author: "Monkey D. Luffy",
    anime: "One Piece",
  },
]

const DURATION = 5800

const Quotes = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % animeQuotes.length)
    }, DURATION)
    return () => clearInterval(interval)
  }, [])

  const current = animeQuotes[index]

  return (
    <section className="container mx-auto max-w-2xl px-8 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border bg-card  py-8  sm:py-10"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, var(--muted-foreground) 0%, transparent 60%)",
            opacity: 0.05,
          }}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 -right-6 select-none font-serif text-[11rem] italic leading-none text-muted-foreground/[0.05] sm:text-[14rem]"
        >
          &rdquo;
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 -left-6 select-none font-serif text-[11rem] italic leading-none text-muted-foreground/[0.05] sm:text-[14rem]"
        >
          &rdquo;
        </span>

        <div className="relative flex h-36 flex-col items-center justify-center text-center sm:h-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-2 sm:px-10"
            >
              <p className="font-serif text-[16px] italic leading-relaxed tracking-tight text-foreground line-clamp-3 sm:text-lg">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                <span className="font-medium text-foreground/80">
                  {current.author}
                </span>
                <span className="text-muted-foreground/40">&middot;</span>
                <span className="italic">{current.anime}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative mt-5 px-4 flex items-center justify-center gap-1.5">
          {animeQuotes.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show quote ${i + 1}`}
              onClick={() => setIndex(i)}
              className="relative h-1 w-6 overflow-hidden rounded-full bg-muted-foreground/15"
            >
              {i === index && (
                <motion.span
                  key={index}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                  className="absolute inset-0 origin-left rounded-full bg-foreground/50"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Quotes