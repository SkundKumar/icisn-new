"use client"

import { useEffect, useRef } from "react"
import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contactsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (contactsRef.current) observer.observe(contactsRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 md:py-20 bg-background text-background-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="opacity-0 text-2xl font-bold tracking-tighter text-center sm:text-3xl md:text-4xl"
        >
          Contact Us
        </h2>

        <div ref={contactsRef} className="opacity-0 mt-8 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>0084 906165579</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>nguyenlinh79.haui@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}

