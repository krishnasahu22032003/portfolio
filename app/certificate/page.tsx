import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { certificates } from "@/lib/Certificate"

const CertificatesPage = () => {
  return (
    <section className="container mx-auto max-w-2xl py-6">
      <h1 className="font-serif text-[clamp(2.25rem,7vw,2.2rem)] font-semibold italic leading-none tracking-tight text-foreground">
        Certificates
      </h1>
      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
        Certifications and courses I have completed along the way.
      </p>

      <div className="mt-8 border-t border-border">
        {certificates.map((certificate) => (
          <div
            key={certificate.slug}
            className="flex flex-col gap-4 border-b border-border py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex flex-col gap-1.5">
              <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-foreground">
                {certificate.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {certificate.description}
              </p>
            </div>

            <Link
              href={`/certificates/${certificate.slug}`}
              className="btn-inner-shadow inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-1.5 text-[12px] font-medium tracking-wide text-foreground transition-opacity duration-200 hover:opacity-80"
            >
              View certificate
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificatesPage