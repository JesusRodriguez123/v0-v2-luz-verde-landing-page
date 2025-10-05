"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function Impact() {
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
    <section id="transparencia" ref={sectionRef} className="py-24 px-4 bg-[#1A1A1A]">
      <div className="container mx-auto max-w-6xl">
        <h2
          className={`text-3xl md:text-5xl font-bold text-center text-white mb-4 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Transparencia en cada aporte
        </h2>

        <p
          className={`text-lg text-center text-white/70 mb-16 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Visualizá cómo se distribuyen las donaciones.
        </p>

        <Card
          className={`bg-[#1A1A1A] border-2 border-[#3ECF8E]/30 p-8 md:p-12 space-y-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Total donated */}
          <div className="text-center space-y-2">
            <p className="text-[#3ECF8E] text-sm uppercase tracking-wider">Total Donado</p>
            <p className="text-5xl md:text-6xl font-bold text-white">$2,350</p>
          </div>

          {/* Last transaction */}
          <div className="border-t border-[#3ECF8E]/20 pt-8 space-y-4">
            <p className="text-white/70 text-sm uppercase tracking-wider">Última Transacción</p>
            <div className="bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 rounded-lg p-4 space-y-2">
              <p className="text-white font-semibold">Hogar Mateo — Educación</p>
              <p className="text-[#3ECF8E] text-sm font-mono">Hash #0x9abf...</p>
            </div>
          </div>

          {/* Distribution */}
          <div className="border-t border-[#3ECF8E]/20 pt-8 space-y-6">
            <p className="text-white/70 text-sm uppercase tracking-wider">Distribución</p>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Educación</span>
                  <span className="text-[#3ECF8E]">60%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3ECF8E] w-[60%] rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Salud</span>
                  <span className="text-[#3ECF8E]">25%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3ECF8E] w-[25%] rounded-full" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">Infraestructura</span>
                  <span className="text-[#3ECF8E]">15%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3ECF8E] w-[15%] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
