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
          <motion.div
  ref={imageRef}
  style={{ y: yTransform }} // Parallax Effect
  className=" relative h-[400px] overflow-hidden rounded-lg"
>
<Image
  src="https://en.REV.org.vn/sites/default/files/styles/img_659_545/public/superadmin/anh_bai_viet/upcoming-training-program-workshop-for-vietnams-semiconductor-industry-1712938522.jpg?itok=KtrNUFB5"
  alt="EAUT"
  fill
  className="absolute inset-0 object-cover"
/>
</motion.div>
          </div>

          <div ref={textRef} className="opacity-0 space-y-4 text-muted-foreground">
            <p>
            The Radio and Electronics Association of Vietnam (EAUT) is an official grouping of professors, researchers, engineers, technologists, technicians, and administrators working in Vietnam in domains such as electronics, control systems, measurements, signal and image processing, telecommunications, and networks. These activities started in 1965, and the name EAUT was officially and legally recognized by the Vietnamese Government in 1988. 
            </p>

            <h3 className="text-xl font-semibold mt-6">Core values of EAUT:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
              <strong></strong>	EAUT covers a large spectrum of activities including organizing seminars and conferences, publishing popular EAUTiews, presenting national research programs, and participating in building the national strategy of development for the future of Information Technology in Vietnam. 
              </li>
              <li>
              <strong> </strong>	EAUT presents the Scientific and Technological Electronics and Telecommunications Product Award (EAUT Award) to honor Vietnamese scientists and research groups whose products have high practical significance, creativity, and innovation. 
              </li>
           
            </ul>

            <p className="mt-4">
              <strong>Initiatives:</strong>  In collaboration with Hanoi University of Science and Technology (HUST), EAUT is organizing a Workshop titled "Training Program for the Semiconductor IC Industry until 2030 - Challenges and Solutions" to support the Government's interest in advancing the semiconductor chip industry in Vietnam.
            </p>
            <p>
              <strong>Core Values and Mission:</strong> EAUT is committed to promoting international cooperation to integrate Vietnam with the outside world. The association aims to help Vietnamese researchers in Electronics and Communications get in touch with their international colleagues and to enhance the quality of the Vietnamese research community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

