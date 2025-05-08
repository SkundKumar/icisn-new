"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export const Timeline = ({
  data,
  className,
}: {
  data: {
    title: string
    content: React.ReactNode
  }[]
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div className="absolute left-[50%] top-0 h-full w-[1px] bg-neutral-200 dark:bg-neutral-800 md:block hidden" />
      <div className="absolute left-[15px] top-0 h-full w-[1px] bg-neutral-200 dark:bg-neutral-800 md:hidden" />
      <div className="space-y-24 py-24">
        {data.map((item, idx) => (
          <TimelineItem
            key={idx}
            scrollYProgress={scrollYProgress}
            idx={idx}
            title={item.title}
            content={item.content}
            isEven={idx % 2 === 0}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  )
}

export const TimelineItem = ({
  scrollYProgress,
  idx,
  title,
  content,
  isEven,
  isMobile,
}: {
  scrollYProgress: any
  idx: number
  title: string
  content: React.ReactNode
  isEven: boolean
  isMobile: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const progress = useTransform(scrollYProgress, [0, 1], [0, (idx + 1) / 4])

  // Calculate the entry point for animation based on index
  const entryPoint = Math.max(0.1, idx * 0.1)

  // Create animation variants for the content box
  const contentVariants = {
    hidden: {
      opacity: 0,
      x: isEven && !isMobile ? 50 : -50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  }

  return (
    <div ref={ref} className="relative">
      <motion.div
        style={{ left: isMobile ? "15px" : "50%", translateX: "-50%" }}
        className={cn(
          "absolute z-10 h-[30px] w-[30px] rounded-full bg-white shadow-md shadow-neutral-300 dark:bg-black dark:shadow-neutral-800 flex items-center justify-center",
        )}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: idx * 0.1 }}
      >
        <motion.div
          style={{ scale: progress }}
          className="h-[15px] w-[15px] rounded-full bg-neutral-100 dark:bg-neutral-300"
        />
      </motion.div>

      <motion.div
        className={cn("md:w-1/2 md:pr-10", isEven ? "md:ml-auto md:pl-10 md:pr-0" : "", isMobile ? "ml-10" : "")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={contentVariants}
      >
        <div className="rounded-lg bg-white p-6 shadow-md dark:bg-black">
          <motion.h3
            className="mb-4 text-2xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="text-neutral-700 dark:text-neutral-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {content}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
