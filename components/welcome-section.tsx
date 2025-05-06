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
        
        <div ref={textRef} className="opacity-0 mt-8 max-w-3xl mx-auto space-y-4 text-muted-foreground">
          <p>
            Hanoi University of Industry is organizing two days The fifth International Conference on Intelligent
            Systems & Networks (ICISN 2026) on 22-23 March 2026. The conference will focus on the Intelligent Systems
            and Networks along with then-current dependency in line with security and the latest technologies.
          </p>
          <p>
            The growing demand for networks, various generation mobility, security benchmarks, and providing the
            Intelligent secure System to customers is the demand of time. The network is indeed greater in demand and
            thus it's the hour of need to make a broad discussion on this domain. In the past couple of years, amazing
            developments can be seen from 2G to 5G, Security, and wire to wireless developments.
          </p>
          <p>
            We would like to invite you to contribute your unpublished research work and participate in ICISN 2026. The
            two days international technical forum will allow you to interact with numbers of National and International
            delegates. The ICISN 2026 offers a rich program, including keynote speeches, regular presentations,
            workshops, academic visiting, or tour. We invite your contribution and participation to make it a successful
            event. It brings together experts from industry, governments, and academia, experienced in engineering,
            design, and research.
          </p>
          <p>
            The forum will allow authors to present their excellent research results and new challenges facing in the
            field of intelligent systems and networks in computer science and information technology. The conference
            will be covering topics from Intelligent System, Networks Application, and many more related to the
            conference theme.
          </p>
        </div>
      </div>
    </section>
  )
}

