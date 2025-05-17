"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-start pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual mobile image path
            alt="Conference background"
            fill
            priority
            className="object-cover object-center w-full h-full" // Ensure the image covers the entire section
          />
        </div>
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual desktop image path
            alt="Conference background"
            fill
            priority
            className=""
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950  to-transparent pointer-events-none" />
      </div>

      {/* Text Section - Kept Left-Aligned but Increased Vertical Scaling */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 flex mt-96 md:ml-20">
        <div
          ref={containerRef}
          className="max-w-screen-lg"
        >
          <motion.h1
            className="text-white font-semibold ml-4 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sixth International
          </motion.h1>
          <motion.h1
            className="text-white font-semibold ml-4 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conference on
          </motion.h1>
          <motion.h2
            className="mt-2 text-white font-semibold ml-4 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Intelligent Systems and Networks
          </motion.h2>
         
          <motion.div
            className="mt-6 inline-block rounded-full border border-white/30 bg-black/40 px-6 py-3 md:px-6 md:py-3 backdrop-blur-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            East Asia University of Technology (EAUT)
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
            21-22 March, 2026
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
