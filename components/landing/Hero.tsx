"use client"

import { TextReveal } from "@/components/ui/text-reveal"

const quote = "Building the future."
const name = "Krishna Sahu"
const keywords = ["Full Stack", "Web3", "DevOps"]

const Hero = () => {
  return (
    <section className="relative container mx-auto max-w-2xl h-[250px] px-4">
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h1 className="max-w-lg text-center font-serif text-[clamp(2rem,6vw,3.5rem)] font-medium italic leading-[1.15] tracking-tight text-foreground/[0.08]">
          &ldquo;{quote}&rdquo;
        </h1>
      </div>

      <div className="absolute -bottom-20 left-0 flex items-center gap-4 sm:gap-5">
        <div className="h-30 w-30 shrink-0 overflow-hidden rounded-full ring-1 ring-border bg-muted sm:h-36 sm:w-36">
          <img
            src="/avatar.png"
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif text-xl font-semibold leading-none tracking-tight text-foreground sm:text-2xl">
            <TextReveal text={name} delay={150} />
          </h3>

          <ul className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
            {keywords.map((word, i) => (
              <li key={word} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="h-0.5 w-0.5 shrink-0 rounded-full bg-muted-foreground/40" />
                )}
                <span className="text-[13px] font-medium tracking-wide text-muted-foreground">
                  <TextReveal text={word} delay={550 + i * 120} />
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