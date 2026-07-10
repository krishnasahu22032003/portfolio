"use client"

import { ProjectCard } from "./ProjectCard"

const projects = [
  {
    title: "Devflow",
    description:
      "A real-time collaborative platform for engineering teams to plan sprints, track issues, and ship faster with less overhead.",
     image: "/nimbus.avif",
    github: "https://github.com/krishnasahu/devflow",
    live: "https://devflow.app",
    stack: ["Next.js", "TypeScript", "Postgres", "Redis"],
  },
  {
    title: "Nimbus AI",
    description:
      "An AI-powered workflow automation tool built on LangGraph and RAG, letting teams query internal docs conversationally.",
    image: "/nimbus.avif",
    github: "https://github.com/krishnasahu/nimbus-ai",
    live: "https://nimbus-ai.dev",
    stack: ["LangChain", "OpenAI", "Vector DB", "Node.js"],
  },
]

const ProjectsGrid = () => {
  return (
    <section className="container mx-auto max-w-2xl px-4 py-20 sm:py-28">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid