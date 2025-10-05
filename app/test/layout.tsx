import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Test - Luz Verde Blockchain",
  description: "Interact with Luz Verde smart contract on Paseo testnet",
  robots: "noindex",
}

export default function TestLayout({ children }: { children: React.ReactNode }) {
  return children
}
