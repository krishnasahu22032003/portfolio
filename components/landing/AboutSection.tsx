"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const stats = [
  { value: "12+", label: "Production Products" },
  { value: "10+", label: "Frontend Projects" },
  { value: "2+", label: "Years Experience" },
]

const paragraphs = [
  [
    "I'm a full stack developer and software engineer with ",
    { highlight: "2+ years" },
    " of experience designing and shipping software end to end.",
  ],
  [
    "I've built ",
    { highlight: "12+ production-grade products" },
    " and ",
    { highlight: "10+ frontend projects" },
    ", working across the stack from interface to infrastructure.",
  ],
  [
    "My focus lies in distributed systems and system design, building architectures that stay fast and reliable under real-world scale.",
  ],
  [
    "Along the way I've picked up a wide range of modern tools, always favoring the ones that let me move deliberately, not just quickly.",
  ],
]

const getGreeting = (hour: number) => {
  if (hour < 12) return "Good morning"
  if (hour < 17) return "Good afternoon"
  return "Good evening"
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
}

const letterVariant = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const},
  },
}

const paraContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.7 },
  },
}

const lineVariant = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const  },
  },
}

const statsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 1.6 },
  },
}

const statVariant = {
  hidden: { opacity: 0, y: 16, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const About = () => {
  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    setGreeting(getGreeting(new Date().getHours()))
  }, [])

  const letters = greeting.split("")

  return (
    <section className="container mx-auto max-w-2xl ">
      <motion.h1
        variants={container}
        initial="hidden"
        animate={greeting ? "show" : "hidden"}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-[1.05] tracking-tight text-foreground"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        variants={paraContainer}
        initial="hidden"
        animate="show"
        className="mt-6 flex max-w-xl flex-col gap-3"
      >
        {paragraphs.map((line, i) => (
          <motion.p
            key={i}
            variants={lineVariant}
            className="text-[15px] leading-relaxed text-muted-foreground sm:text-base"
          >
            {line.map((part, j) =>
              typeof part === "string" ? (
                <span key={j}>{part}</span>
              ) : (
                <span
                  key={j}
                  className="font-semibold text-foreground"
                >
                  {part.highlight}
                </span>
              )
            )}
          </motion.p>
        ))}
      </motion.div>
    </section>
  )
}

export default About