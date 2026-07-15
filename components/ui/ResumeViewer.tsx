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
    <section className="container mx-auto max-w-3xl py-8">
      <div>
        <h1 className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground">
          Resume
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          Scroll through the resume, zoom for detail, or download a copy.
        </p>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {/* Scrollable viewer */}
        <div className="relative h-[80vh] overflow-y-auto bg-muted/20">
          <div className="flex flex-col items-center px-4 pt-4 pb-24">
            <Document
              file="/resume.pdf"
              onLoadSuccess={onLoadSuccess}
              loading={
                <div className="flex h-[600px] w-full items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Loading resume...
                  </span>
                </div>
              }
              error={
                <div className="flex h-[400px] w-full items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    Couldn't load the resume.
                  </span>
                </div>
              }
            >
              {Array.from({ length: numPages }, (_, index) => (
                <div key={index} className="mb-5 last:mb-0">
                  <Page pageNumber={index + 1} scale={scale} />
                </div>
              ))}
            </Document>
          </div>

          {/* Sticky toolbar */}
          <div className="sticky bottom-0 z-20 flex justify-center border-t border-border bg-card/90 px-4 py-3 backdrop-blur-md">
            <div className="flex items-center gap-1 rounded-full border border-border bg-background px-2 py-1.5 shadow-lg">
              <button
                type="button"
                onClick={zoomOut}
                disabled={scale <= MIN_SCALE}
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted disabled:opacity-30"
              >
                <Minus className="h-4 w-4" />
              </button>

              <span className="w-12 text-center text-xs font-medium tabular-nums">
                {Math.round(scale * 100)}%
              </span>

              <button
                type="button"
                onClick={zoomIn}
                disabled={scale >= MAX_SCALE}
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted disabled:opacity-30"
              >
                <Plus className="h-4 w-4" />
              </button>

              <div className="mx-1 h-4 w-px bg-border" />

              <a
                href="/resume.pdf"
                download
                className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-muted"
                aria-label="Download Resume"
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
