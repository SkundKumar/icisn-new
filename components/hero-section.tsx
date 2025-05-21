"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaLinkedin, FaTwitter, FaFacebook, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const addToCalendar = () => {
    const startDate = new Date('2026-03-21T09:00:00')
    const endDate = new Date('2026-03-22T17:00:00')
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=ICISN Conference 2026&dates=${startDate.toISOString().replace(/-|:|\.\d+/g, '')}/${endDate.toISOString().replace(/-|:|\.\d+/g, '')}&details=Join us for the Sixth International Conference on Intelligent Systems and Networks at East Asia University of Technology&location=East Asia University of Technology`
    
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Conference background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Conference background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-950 to-transparent pointer-events-none" />
      </div>

      {/* Text Section */}
      <div className="relative z-10 w-full px-4 md:px-8 lg:px-12 flex flex-col items-start md:ml-20 py-20">
        <div
          ref={containerRef}
          className="max-w-screen-lg"
        >
          <motion.h1
            className="text-white font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sixth International
          </motion.h1>
          <motion.h1
            className="text-white font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Conference on
          </motion.h1>
          <motion.h2
            className="mt-2 text-white font-semibold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Intelligent Systems and Networks
          </motion.h2>
         
          <motion.div
            className="mt-6 inline-block rounded-full border border-white/30 bg-black/40 px-4 py-2 md:px-6 md:py-3 backdrop-blur-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              East Asia University of Technology (EAUT)
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
              21-22 March, 2026
            </p>
          </motion.div>

          {/* Social Media and Calendar Integration */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Social Media Icons */}
            <div className="flex items-center gap-3 md:gap-4">
              <a
                href="https://linkedin.com/company/your-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white/90 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Follow on LinkedIn
                </span>
              </a>
              <a
                href="https://twitter.com/your-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white/90 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Follow on Twitter
                </span>
              </a>
              <a
                href="https://www.facebook.com/ICISN9"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white/90 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Follow on Facebook
                </span>
              </a>
            </div>

            {/* Calendar and Map Buttons */}
            <div className="flex items-center gap-3 md:gap-4">
              <button
                onClick={addToCalendar}
                className="group relative flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                aria-label="Add to Calendar"
              >
                <FaCalendarAlt className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-sm md:text-base hidden sm:inline">Add to Calendar</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:hidden">
                  Add to Calendar
                </span>
              </button>
              <a
                href="https://maps.google.com/?q=East+Asia+University+of+Technology"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 p-2 hover:bg-white/10 rounded-full hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                aria-label="View Venue"
              >
                <FaMapMarkerAlt className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-sm md:text-base hidden sm:inline">View Venue</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap sm:hidden">
                  View Venue
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
