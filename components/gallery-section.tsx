"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function GallerySection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else {
              entry.target.classList.add("animate-fade-in")

              // Add staggered animation to gallery items
              const items = entry.target.querySelectorAll(".gallery-item")
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add("animate-fade-in")
                }, 100 * index)
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (galleryRef.current) observer.observe(galleryRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="opacity-0 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12"
        >
          ICISN Gallery
        </h2>

        <div ref={galleryRef} className="bento-grid">
          {/* Large featured image */}
          <div className="opacity-0 gallery-item bento-span-8 relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://icisn.com/wp-content/uploads/cache/2024/04/DTC03932_11zon-scaled/1053132353.jpg"
              alt="Conference hall"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Smaller images */}
          <div className="opacity-0 gallery-item bento-span-4 relative h-[400px] overflow-hidden rounded-lg">
            <Image
              src="https://icisn.com/wp-content/uploads/cache/2024/04/DTC03791_11zon-scaled/1504208897.jpg"
              alt="Keynote speaker"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-4 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://icisn.com/wp-content/uploads/cache/2024/04/DTC03799_11zon-scaled/3304622359.jpg"
              alt="Conference attendees"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-4 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://icisn.com/wp-content/uploads/cache/2024/04/DTC03517_11zon-scaled/2324697502.jpg"
              alt="Panel discussion"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-4 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://icisn.com/wp-content/uploads/cache/2024/04/DTC03576_11zon-scaled/2357118544.jpg"
              alt="Networking event"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="opacity-0 gallery-item bento-span-12 relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://goticisn.goodsonmove.com/wp-content/uploads/2024/04/img6-1-1.jpg"
              alt="Conference panorama"
              fill
              className=" object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

