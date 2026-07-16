import { Calendar, ArrowUpRight } from "lucide-react"

const LetsConnect = () => {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-serif text-[clamp(2rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground">
        Let&apos;s Connect
      </h1>
      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
        I&apos;m available for a quick call — pick a slot that works for you.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-border/70 bg-card px-6 py-10 text-center sm:px-10 sm:py-10">
        <div className="skill-inner-shadow flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-background">
          <Calendar className="h-5 w-5 text-foreground" />
        </div>

        <h2 className="font-serif text-[19px] font-semibold italic tracking-tight text-foreground sm:text-[21px]">
          Book a Call
        </h2>

        <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
          Have an opportunity, project, or question? Schedule a 30-minute call
          at a time that works for you.
        </p>

        <a
          href="https://cal.com/krishnasahu/intro-call"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-inner-shadow mt-2 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-5 py-2 text-[13px] font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80"
        >
          Schedule a Call
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  )
}

export default LetsConnect