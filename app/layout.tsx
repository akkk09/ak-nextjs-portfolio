import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

// Current timestamp to force cache refresh
const timestamp = new Date().getTime()

export const metadata: Metadata = {
  title: " Anantha  | Designer & Developer",
  description: "Portfolio of  Anantha , a designer and developer creating digital experiences.",
  metadataBase: new URL("https://Ananthaoo.xyz"),
  openGraph: {
    title: " Anantha  | Designer & Developer",
    description: "Portfolio of  Anantha , a designer and developer creating digital experiences.",
    url: "https:// Ananthaoo.xyz",
    siteName: " Anantha  |  Ananthaoo.xyz",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: " Anantha ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: " Anantha  | Designer & Developer",
    description: "Portfolio of  Anantha , a designer and developer creating digital experiences.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@ Anantha_oo",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force refresh of social media cache with timestamp */}
        <meta property="og:image" content={`https:// Ananthaoo.xyz/images/og-image.png?v=${timestamp}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content=" Anantha " />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content={`https:// Ananthaoo.xyz/images/og-image.png?v=${timestamp}`} />
        <meta name="twitter:image:alt" content=" Anantha " />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content={`https:// Ananthaoo.xyz/images/og-image.png?v=${timestamp}`} />

        {/* Additional social media tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:// Ananthaoo.xyz" />
        <meta property="og:title" content=" Anantha  | Designer & Developer" />
        <meta
          property="og:description"
          content="Portfolio of  Anantha , a designer and developer creating digital experiences."
        />
        <meta property="og:site_name" content=" Anantha  |  Ananthaoo.xyz" />

        {/* Cache control for better refreshing */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
