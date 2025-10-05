"use client"

import { useEffect, useRef, useState } from "react"

export function Testimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-4">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/emotional-black-and-white-portrait-of-children-pla.jpg" alt="Children together" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Quote content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <blockquote
          className={`text-2xl md:text-4xl font-semibold text-white text-balance leading-relaxed transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          "Si cada niño tuviera una oportunidad, el mundo sería diferente. Luz Verde busca encender esa oportunidad."
        </blockquote>
      </div>
    </section>
  )
}
