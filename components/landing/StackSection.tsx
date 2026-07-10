"use client"

import { motion } from "framer-motion"

const stack = [
  {
    index: "01",
    label: "Language",
    items: [
      { name: "TypeScript", href: "https://www.typescriptlang.org" },
      { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Python", href: "https://www.python.org" },
      { name: "SQL", href: "https://en.wikipedia.org/wiki/SQL" },
    ],
  },

  {
    index: "02",
    label: "Frontend",
    items: [
      { name: "React", href: "https://react.dev" },
      { name: "Next.js", href: "https://nextjs.org" },
      { name: "Tailwind CSS", href: "https://tailwindcss.com" },
      { name: "shadcn/ui", href: "https://ui.shadcn.com" },
      { name: "Redux Toolkit", href: "https://redux-toolkit.js.org" },
      { name: "TanStack Query", href: "https://tanstack.com/query" },
      { name: "Zustand", href: "https://zustand-demo.pmnd.rs" },
      { name: "Framer Motion", href: "https://motion.dev" },
      { name: "GSAP", href: "https://gsap.com" },
    ],
  },

  {
    index: "03",
    label: "Backend",
    items: [
      { name: "Node.js", href: "https://nodejs.org" },
      { name: "Express", href: "https://expressjs.com" },
      { name: "REST APIs", href: "https://restfulapi.net" },
      { name: "GraphQL", href: "https://graphql.org" },
      { name: "WebSockets", href: "https://socket.io" },
      { name: "WebRTC", href: "https://webrtc.org" },
      { name: "Kafka", href: "https://kafka.apache.org" },
      { name: "BullMQ", href: "https://bullmq.io" },
      { name: "Microservices", href: "https://microservices.io" },
      { name: "Authentication", href: "https://oauth.net/2/" },
      { name: "Zod", href: "https://zod.dev" },
      { name: "System Design", href: "https://martinfowler.com" },
    ],
  },

  {
    index: "04",
    label: "Database",
    items: [
      { name: "PostgreSQL", href: "https://www.postgresql.org" },
      { name: "MongoDB", href: "https://www.mongodb.com" },
      { name: "Redis", href: "https://redis.io" },
      { name: "Prisma", href: "https://www.prisma.io" },
      { name: "Mongoose", href: "https://mongoosejs.com" },
      { name: "MySQL", href: "https://www.mysql.com" },
    ],
  },

  {
    index: "05",
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", href: "https://aws.amazon.com" },
      { name: "Docker", href: "https://www.docker.com" },
      { name: "Kubernetes", href: "https://kubernetes.io" },
      { name: "Terraform", href: "https://www.terraform.io" },
      { name: "ArgoCD", href: "https://argo-cd.readthedocs.io" },
      { name: "GitOps", href: "https://opengitops.dev" },
      { name: "GitHub Actions", href: "https://github.com/features/actions" },
      { name: "CI/CD", href: "https://en.wikipedia.org/wiki/CI/CD" },
      { name: "NGINX", href: "https://nginx.org" },
      { name: "Linux", href: "https://kernel.org" },
      { name: "PM2", href: "https://pm2.keymetrics.io" },
      { name: "Prometheus", href: "https://prometheus.io" },
      { name: "Grafana", href: "https://grafana.com" },
      { name: "New Relic", href: "https://newrelic.com" },
      { name: "Git", href: "https://git-scm.com" },
      { name: "GitHub", href: "https://github.com" },
    ],
  },

  {
    index: "06",
    label: "AI Engineering",
    items: [
      { name: "OpenAI", href: "https://platform.openai.com" },
      { name: "LangChain", href: "https://www.langchain.com" },
      { name: "LangGraph", href: "https://langchain-ai.github.io/langgraph/" },
      { name: "RAG", href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation" },
      { name: "Vector Databases", href: "https://www.pinecone.io" },
      { name: "AI Agents", href: "https://langchain-ai.github.io/langgraph/" },
      { name: "MCP", href: "https://modelcontextprotocol.io" },
      { name: "Prompt Engineering", href: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { name: "AI Workflows", href: "https://www.langchain.com" },
    ],
  },

  {
    index: "07",
    label: "Design",
    items: [
      { name: "Figma", href: "https://www.figma.com" },
    ],
  },
];


const sectionContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
}

const rowVariant = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const itemsContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const Stack = () => {
  return (
    <section className="container mx-auto max-w-2xl py-10">
      <motion.h2
        initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground"
      >
        Stack
      </motion.h2>

      <motion.div
        variants={sectionContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-8 flex flex-col divide-y divide-border border-t border-border"
      >
        {stack.map((group) => (
          <motion.div
            key={group.label}
            variants={rowVariant}
            className="flex flex-col gap-3 py-6 sm:flex-row sm:gap-6"
          >
            <div className="flex shrink-0 items-baseline gap-2 sm:w-40">
              <span className="text-[11px] font-medium tracking-wide text-muted-foreground/50">
                {group.index}
              </span>
              <span className="text-[13px] font-medium tracking-wide text-foreground">
                {group.label}
              </span>
            </div>

            <motion.div
              variants={itemsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {group.items.map((tech) => (
                <motion.div key={tech.name} variants={itemVariant} className="group relative">
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag-inner-shadow inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-[12.5px] font-medium tracking-wide text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                  >
                    {tech.name}
                  </a>

                  <span className="pointer-events-none absolute left-1/2 top-full z-20 mt-1.5 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium tracking-wide text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    Visit {new URL(tech.href).hostname.replace("www.", "")}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Stack