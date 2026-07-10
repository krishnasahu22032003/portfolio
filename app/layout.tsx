import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/landing/Header";
import Quotes from "@/components/ui/QuotesSection";
import Footer from "@/components/ui/Footer";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://yourdomain.com";
const siteName = "Krishna Sahu";
const siteDescription =
  "Portfolio of Krishna Sahu — a software engineer building thoughtful, well-crafted products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Software Engineer`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: ["Your Name", "Software Engineer", "Portfolio", "Web Developer", "Frontend Engineer"],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  applicationName: siteName,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} — Software Engineer`,
    description: siteDescription,
    siteName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Software Engineer`,
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <ThemeProvider>
         <Header/>
          <main className="flex-1 px-4">{children}</main>
          <Quotes/>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}