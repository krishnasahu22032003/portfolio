"use client"

import dynamic from "next/dynamic"

const ResumeViewer = dynamic(() => import("@/components/ui/ResumeViewer"), {
  ssr: false,
  loading: () => (
    <section className="flex min-h-screen items-center justify-center bg-background px-4">
      <span className="text-[13px] text-muted-foreground">Loading resume...</span>
    </section>
  ),
})

const ResumePage = () => {
  return <ResumeViewer />
}

export default ResumePage