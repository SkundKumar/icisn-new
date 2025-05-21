import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - ICISN 2026",
  description: "Contact information for the Sixth International Conference on Intelligent Systems and Networks",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 