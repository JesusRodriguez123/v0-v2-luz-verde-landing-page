import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Web3Provider } from "@/components/web3-provider"

export const metadata: Metadata = {
  title: "Luz Verde - Transparencia que transforma vidas",
  description: "Conectamos adopción y donaciones con transparencia blockchain",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Web3Provider>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </Web3Provider>
        <Analytics />
      </body>
    </html>
  )
}
