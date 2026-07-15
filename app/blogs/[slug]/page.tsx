import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { blogs } from "@/lib/Blog"

const BLOGS_DIRECTORY = path.join(process.cwd(), "content/blogs")

type Props = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = () => {
  return blogs.map((blog) => ({ slug: blog.slug }))
}

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

const getBlogContent = (slug: string): string | null => {
  const fullPath = path.join(BLOGS_DIRECTORY, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  return fs.readFileSync(fullPath, "utf8")
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params
  const blog = blogs.find((b) => b.slug === slug)
  const content = getBlogContent(slug)

  if (!blog || !content) {
    notFound()
  }

  return (
    <section className="container mx-auto max-w-2xl py-6">
      <h1 className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-tight tracking-tight text-foreground">
        {blog.title}
      </h1>

      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
        {blog.description}
      </p>

      <article className="prose prose-neutral dark:prose-invert mt-6 max-w-none prose-headings:font-serif prose-headings:italic prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:border-border prose-blockquote:text-muted-foreground prose-hr:border-border">
        <MDXRemote source={content} />
      </article>
    </section>
  )
}

export default BlogPostPage