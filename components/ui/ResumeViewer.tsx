"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Download, Minus, Plus } from "lucide-react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const MIN_SCALE = 0.6;
const MAX_SCALE = 2;
const SCALE_STEP = 0.2;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1);

  function onLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function zoomIn() {
    setScale((prev) =>
      Math.min(Number((prev + SCALE_STEP).toFixed(2)), MAX_SCALE)
    );
  }

  function zoomOut() {
    setScale((prev) =>
      Math.max(Number((prev - SCALE_STEP).toFixed(2)), MIN_SCALE)
    );
  }

  return (
    <section className="container mx-auto max-w-2xl px-4 py-6">
      <h1 className="font-serif text-[clamp(2rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground">
        Resume
      </h1>
      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
        Scroll through the resume, zoom for detail, or download a copy.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="scrollbar-hide h-[70vh] sm:h-[80vh] overflow-y-auto bg-black/[0.045] dark:bg-white/[0.03]">
          <div className="flex flex-col items-center gap-4 sm:gap-5 px-2 sm:px-4 py-4 sm:py-6">
            <Document
              file="/resume.pdf"
              onLoadSuccess={onLoadSuccess}
              loading={
                <div className="flex h-[400px] sm:h-[600px] w-full items-center justify-center">
                  <span className="text-[13px] text-muted-foreground">
                    Loading resume...
                  </span>
                </div>
              }
              error={
                <div className="flex h-[300px] sm:h-[400px] w-full items-center justify-center">
                  <span className="text-[13px] text-muted-foreground">
                    Couldn't load the resume.
                  </span>
                </div>
              }
              className="flex flex-col items-center gap-4 sm:gap-5"
            >
              {Array.from({ length: numPages }, (_, index) => (
                <Page
                  key={index}
                  pageNumber={index + 1}
                  scale={scale}
                  className="max-w-full shadow-md ring-1 ring-black/5 dark:ring-white/10"
                />
              ))}
            </Document>
          </div>
        </div>

        <div className="flex justify-center border-t border-border/60 bg-card px-4 py-3">
          <div className="flex items-center gap-1 rounded-full border border-border/70 bg-background px-2 py-1.5">
            <button
              type="button"
              onClick={zoomOut}
              disabled={scale <= MIN_SCALE}
              className="flex cursor-pointer h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted disabled:opacity-30"
              aria-label="Zoom out"
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="w-12 text-center text-[12px] font-medium tabular-nums text-foreground">
              {Math.round(scale * 100)}%
            </span>

            <button
              type="button"
              onClick={zoomIn}
              disabled={scale >= MAX_SCALE}
              className="flex cursor-pointer h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted disabled:opacity-30"
              aria-label="Zoom in"
            >
              <Plus className="h-4 w-4" />
            </button>

            <div className="mx-1 h-4 w-px bg-border/70" />

            <a
              href="/resume.pdf"
              download
              className="btn-inner-shadow cursor-pointer flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted"
              aria-label="Download resume"
            >
              <Download className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}