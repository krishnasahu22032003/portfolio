"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Document, Page, pdfjs } from "react-pdf"
import { Download, Minus, Plus } from "lucide-react"
import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const MIN_SCALE = 0.6
const MAX_SCALE = 2
const SCALE_STEP = 0.2

const ResumePage = () => {
  const [numPages, setNumPages] = useState(0)
  const [scale, setScale] = useState(1)

  const onLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + SCALE_STEP, MAX_SCALE))
  }

  const zoomOut = () => {
    setScale((prev) => Math.max(prev - SCALE_STEP, MIN_SCALE))
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center bg-background py-16">
      <motion.div
        initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm"
      >
        <Document
          file="/resume.pdf"
          onLoadSuccess={onLoadSuccess}
          loading={
            <div className="flex h-[600px] w-[420px] items-center justify-center">
              <span className="text-[13px] text-muted-foreground">
                Loading resume...
              </span>
            </div>
          }
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              scale={scale}
              className="mb-4 last:mb-0"
            />
          ))}
        </Document>
      </motion.div>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <div className="btn-inner-shadow flex items-center gap-1 rounded-full border border-border bg-card px-2 py-1.5 shadow-sm">
          <button
            type="button"
            onClick={zoomOut}
            disabled={scale <= MIN_SCALE}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-opacity duration-200 hover:opacity-70 disabled:opacity-30"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>

          <span className="w-10 text-center text-[12px] font-medium tabular-nums text-foreground">
            {Math.round(scale * 100)}%
          </span>

          <button
            type="button"
            onClick={zoomIn}
            disabled={scale >= MAX_SCALE}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-opacity duration-200 hover:opacity-70 disabled:opacity-30"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>

          <div className="mx-1 h-4 w-px bg-border" />

          <a
            href="/resume.pdf"
            download
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-opacity duration-200 hover:opacity-70"
          >
            <Download className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ResumePage