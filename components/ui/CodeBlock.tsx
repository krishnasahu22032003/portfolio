"use client"

import { useState, isValidElement, ReactNode } from "react"
import { Check, Copy } from "lucide-react"

type PreProps = {
  children?: ReactNode
}

const extractText = (node: ReactNode): string => {
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode }
    return extractText(props.children)
  }
  return ""
}

const getLanguage = (node: ReactNode): string => {
  if (isValidElement(node)) {
    const props = node.props as { className?: string }
    const match = props.className?.match(/language-(\w+)/)
    return match ? match[1] : ""
  }
  return ""
}

const CodeBlock = ({ children }: PreProps) => {
  const [copied, setCopied] = useState(false)
  const codeText = extractText(children).replace(/\n$/, "")
  const language = getLanguage(children)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
          {language || "text"}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-muted-foreground transition-opacity duration-200 hover:opacity-70"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-relaxed">
        <code className="text-foreground">{codeText}</code>
      </pre>
    </div>
  )
}

export default CodeBlock