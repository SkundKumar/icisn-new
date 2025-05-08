import type { Metadata } from "next"
import HistoryPageClient from "./HistoryPageClient"

export const metadata: Metadata = {
  title: "History - ICISN 2025",
  description: "History of the International Conference on Intelligent Systems and Networks",
}

export default function HistoryPage() {
  return <HistoryPageClient />
}
