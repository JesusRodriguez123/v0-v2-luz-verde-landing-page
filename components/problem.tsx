"use client"

import { useEffect, useRef, useState } from "react"

export function Problem() {
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
    <section id="problema" ref={sectionRef} className="relative py-16 md:py-24 px-4 bg-white">
      <div className="absolute inset-0 bg-[#3ECF8E]/5 pointer-events-none" />

      <div className="container mx-auto max-w-[800px] relative z-10">
        <h2
          className={`text-3xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Una crisis invisible que crece en silencio
        </h2>

        <div className="space-y-6 text-[#1A1A1A] leading-relaxed text-lg">
          <p
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            En Argentina, más de <strong>1.600 niños mayores de seis años</strong> siguen esperando una familia.
            <br />Y la mayoría <strong>nunca será adoptada</strong>.
          </p>

          <p
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Las cifras son tan duras como el silencio que las rodea:
            <br />
            la probabilidad de adopción <strong>se reduce a la mitad después de los seis años</strong>,
            <br />y se vuelve <strong>casi nula después de los diez</strong>.
          </p>

          <p
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Mientras tanto, los hogares de niños enfrentan una realidad igual de invisible:
            <br />
            <strong>falta de recursos, falta de visibilidad, falta de confianza</strong>.
          </p>

          <p
            className={`transition-all duration-700 delay-[400ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Las donaciones existen, pero <strong>no siempre llegan</strong>.
            <br />Y cuando llegan, <strong>no siempre se sabe cómo se usan</strong>.
          </p>

          <p
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            El resultado es un círculo vicioso:
            <br />
            <strong>menos confianza, menos apoyo, menos oportunidades</strong>.
          </p>

          <p
            className={`text-xl font-semibold text-[#3ECF8E] mt-8 transition-all duration-700 delay-[600ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Pero hay una forma de cambiar esto.
          </p>
        </div>
      </div>
    </section>
  )
}
