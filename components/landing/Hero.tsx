"use client"

import { TextReveal } from "@/components/ui/text-reveal"
import HeroLinks from "./HeroLinks"

const quote = "Building the future."
const name = "Krishna Sahu"
const keywords = [
  "Build",
  "Scale",
  "Optimize",
]

const Hero = () => {
  return (
    <section className="relative container mx-auto max-w-2xl h-[250px] px-4">

      <div className="absolute mt-8 left-0 flex items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full ring-1 ring-border bg-muted sm:h-36 sm:w-36">
            <img
              src="/avatar.png"
              alt={name}
              className="h-full w-full object-cover"
            />
          </div>

          <HeroLinks />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif text-xl font-semibold leading-none tracking-tight text-foreground sm:text-2xl">
            <TextReveal text={name} delay={550} />
          </h3>

          <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {keywords.map((word, i) => (
              <li key={word} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                )}
                <span className="text-[13px] font-medium tracking-wide text-muted-foreground">
                  <TextReveal text={word} delay={950 + i * 120} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero