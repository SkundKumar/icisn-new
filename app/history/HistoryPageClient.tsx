"use client"

import Image from "next/image"
import Link from "next/link"
import { Timeline } from "@/components/ui/timeline"
import { motion } from "framer-motion"

export default function HistoryPageClient() {
  const conferenceData = [
    {
      title: "ICISN 2025",
      content: (
        <div className="space-y-4">
          <div className="text-center p-6 rounded-lg bg-neutral-100 ">
            <p className="text-xl font-medium">Coming Soon...</p>
            <p className="text-sm mt-2">Stay tuned for more information about ICISN 2025.</p>
          </div>
        </div>
      ),
    },
    {
      title: "ICISN 2024",
      content: (
        <div className="flex flex-col items-center">
          <div className="relative h-[300px] w-full max-w-[250px] mb-4">
            <Image
              src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-97-5504-2?as=webp"
              alt="ICISN 2024 Proceedings"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm font-medium">
            <strong>Proceedings:</strong>{" "}
            <Link
              href="https://link.springer.com/book/9789819755035"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Springer Link
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "ICISN 2023",
      content: (
        <div className="flex flex-col items-center">
          <div className="relative h-[300px] w-full max-w-[250px] mb-4">
            <Image
              src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-99-4725-6?as=webp"
              alt="ICISN 2023 Proceedings"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm font-medium">
            <strong>Proceedings:</strong>{" "}
            <Link
              href="https://link.springer.com/book/10.1007/978-981-99-4725-6"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Springer Link
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "ICISN 2022",
      content: (
        <div className="flex flex-col items-center">
          <div className="relative h-[300px] w-full max-w-[250px] mb-4">
            <Image
              src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-19-3394-3?as=webp"
              alt="ICISN 2022 Proceedings"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm font-medium">
            <strong>Proceedings:</strong>{" "}
            <Link
              href="https://link.springer.com/book/10.1007/978-981-19-3394-3"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Springer Link
            </Link>
          </p>
        </div>
      ),
    },
    {
      title: "ICISN 2021",
      content: (
        <div className="flex flex-col items-center">
          <div className="relative h-[300px] w-full max-w-[250px] mb-4">
            <Image
              src="https://media.springernature.com/full/springer-static/cover-hires/book/978-981-16-2094-2?as=webp"
              alt="ICISN 2021 Proceedings"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm font-medium">
            <strong>Proceedings:</strong>{" "}
            <Link
              href="https://link.springer.com/book/10.1007/978-981-16-2094-2"
              target="_blank"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
            >
              Springer Link
            </Link>
          </p>
        </div>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24 md:px-6 mt-20">
      <motion.h1
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Conference History
      </motion.h1>

      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-lg mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The International Conference on Intelligent Systems and Networks (ICISN) has a strong tradition of bringing
          together researchers, academics, and industry professionals to explore advancements in intelligent systems and
          networks.
        </motion.p>

        <div className="relative w-full overflow-clip">
          <Timeline data={conferenceData} />
        </div>
      </div>
    </div>
  )
}
