export interface ExperienceEntry {
  company: string
  subtitle: string
  duration: string
  location: string
  remote: boolean
  role: string
  points: string[][]
  tags: string[]
}

export const workExperience: ExperienceEntry[] = [
  {
    company: "InlighnX Global",
    subtitle: "Inlighn Tech",
    duration: "May 2025 – Jun 2026",
    location: "Remote",
    remote: true,
    role: "Full Stack Developer",
    points: [
      ["Reduced API latency by ", "45%", " through database optimization, Redis caching, and asynchronous processing, significantly improving application responsiveness."],
      ["Designed and implemented scalable backend architectures capable of handling ", "100K+", " daily requests with high availability and fault tolerance."],
      ["Increased system throughput by ", "60%", " by introducing event-driven workflows, Kafka messaging, and BullMQ-based background job processing."],
      ["Automated cloud infrastructure and CI/CD pipelines using AWS, Docker, Kubernetes, Terraform, ArgoCD, and GitHub Actions, reducing deployment time by ", "70%", "."],
      ["Improved production reliability to ", "99.9%", " uptime by implementing monitoring, distributed logging, health checks, and alerting with Prometheus, Grafana, and New Relic."],
      ["Built secure, production-ready authentication and authorization systems using JWT, OAuth, RBAC, rate limiting, and API validation with Zod."],
      ["Developed AI-powered features using OpenAI, LangChain, LangGraph, RAG, and vector databases to automate workflows and enhance user experiences."],
      ["Led end-to-end feature development, from architecture and system design to deployment, monitoring, and continuous optimization, following engineering best practices."],
    ],
    tags: [
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Kafka",
      "Redis",
      "LangChain",
      "System Design",
    ],
  },
]