"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

export default function UniversitySection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("animate-slide-in-right")
            } else {
              entry.target.classList.add("animate-slide-up")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (imageRef.current) observer.observe(imageRef.current)
    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, [])
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"], // Triggers when image enters and exits viewport
  })
  
  const yTransform = useTransform(scrollYProgress, [0, 1], ["-40%", "50%"])
  

  return (
    <section className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="opacity-0 text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-6xl"
        >
          East Asia University of Technology (EAUT)
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div ref={imageRef} className="opacity-0 relative h-[400px] overflow-hidden rounded-lg">
           <div className="mt-12 grid gap-8 md:grid-cols-2 items-center">
  <motion.div
    ref={imageRef}
    style={{ y: yTransform }}
    className="relative h-[400px] overflow-hidden rounded-lg"
  >
    <Image
      src="/WhatsApp Image 2025-05-10 at 20.50.44_76dffb17.jpg"
      alt="EAUT 1"
      fill
      className="absolute inset-0 object-cover"
    />
  </motion.div>

  <motion.div
    ref={imageRef}
    style={{ y: yTransform }}
    className="relative h-[400px] overflow-hidden rounded-lg"
  >
    <Image
      src="/WhatsApp Image 2025-05-10 at 20.51.03_4985f1a3.jpg"
      alt="EAUT 2"
      fill
      className="absolute inset-0 object-cover"
    />
  </motion.div>

  <motion.div
    ref={imageRef}
    style={{ y: yTransform }}
    className="relative h-[400px] overflow-hidden rounded-lg"
  >
    <Image
      src="/your-new-image.jpg" // Replace with your actual image path
      alt="EAUT 3"
      fill
      className="absolute inset-0 object-cover"
    />
  </motion.div>
</div>
          </div>

          <div ref={textRef} className=" text-justify  opacity-0 space-y-4 text-muted-foreground">
            <p>
            East Asia University of Technology (EAUT) was officially established on December 9, 2008, under Decision No. 1777/QĐ-TTg issued by the Prime Minister. East Asia University of Technology is a multidisciplinary institution within the national education system, focusing on areas such as business management, information technology, electrical-electronics engineering technology, construction engineering, and so on. EAUT offers training programs at the College, Undergraduate, and Postgraduate levels, through various study modes including full-time, part-time, and transfer or pathway programs.
            </p>

            <h3 className="text-xl font-semibold mt-6">Core values of EAUT:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
              <strong></strong>	EAUT aims to become one of the leading universities in Vietnam and in the region, gathering a team of reputable lecturers including Professors, Associate Professors, and Doctors who have taught at large domestic and international universities. 
              </li>
              <li>
              <strong> </strong>	EAUT is committed to providing high-quality education and research opportunities that have practical significance, creativity, and innovation within Vietnam's developing technological landscape. 
              </li>
           
            </ul>

            <p className="mt-4">
              <strong>Initiatives:</strong>  EAUT is applying modern teaching methods with advanced textbooks currently used in Vietnam and other developed industrial countries, with the aim to train highly qualified specialists to meet real industry needs. 
            </p>
            <p>
              <strong>Core Values and Mission:</strong> EAUT is committed to promoting international cooperation to integrate Vietnam with the outside world. The university aims to help Vietnamese students and researchers connect with international colleagues and to enhance the quality of Vietnamese education and research communities.
            </p>
            <p className="mt-4">
              <strong>Facilities and Campus:</strong> 
              <ul className="mt-4">
                <li>
                •	The university has built facilities on an 8-hectare campus at Vo Cuong Ward, Bac Ninh City, Bac Ninh Province, including a 3-floor building with an area of 6,000m². 

                </li>
                <li className="mt-2">
                •	EAUT provides dormitory facilities to serve students from other regions.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

