"use client"

import { useEffect, useRef } from "react"

export default function WelcomeSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add("animate-fade-in")
            } else {
              entry.target.classList.add("animate-slide-up")
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (titleRef.current) observer.observe(titleRef.current)
    if (textRef.current) observer.observe(textRef.current)

    return () => observer.disconnect()
  }, []
) 

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2
          ref={titleRef}
          className="opacity-0 text-5xl font-bold tracking-tighter text-center sm:text-4xl md:text-6xl"
        >
          WELCOME TO ICISN 2026
        </h2>
        
        <div ref={textRef} className="  opacity-0 mt-8 max-w-3xl mx-auto space-y-4 text-muted-foreground">
          <p className="text-justify" >
          East Asia University of Technology is organizing the two-day Sixth International Conference on Intelligent Systems & Networks (ICISN 2026) on 22-23 March 2026. The conference will focus on Intelligent Systems and Networks, with emphasis on security considerations and the latest technologies.
          </p>
          <p className="text-justify">
          The growing demand for networks, multi-generational mobility, security benchmarks, and providing intelligent secure systems to customers is essential in today's technological landscape. Networks are in greater demand than ever, making it crucial to have comprehensive discussions in this domain. In recent years, we have witnessed remarkable developments from 2G to 5G, enhanced security measures, and advancements from wired to wireless technologies.
          </p>
          <p className="text-justify"> 
          We would like to invite you to contribute your unpublished research work and participate in ICISN 2026. This two-day international technical forum will allow you to interact with numerous national and international delegates. ICISN 2026 offers a rich program, including keynote speeches, regular presentations, workshops, academic visits, and tours.
          </p>
          <p className="text-justify">
          We invite your contribution and participation to make this a successful event. The conference brings together experts from industry, governments, and academia who are experienced in engineering, design, and research. The forum will allow authors to present their excellent research results and address new challenges in the field of intelligent systems and networks in computer science and information technology. The conference will cover topics including Intelligent Systems, Network Applications, and many more areas related to the conference theme.
          </p>
        </div>
      </div>
    </section>
  )
}

