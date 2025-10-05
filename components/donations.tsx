"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const donationOptions = [
  {
    amount: 10,
    description: "Apoyá materiales educativos",
  },
  {
    amount: 25,
    description: "Colaborá con alimentación saludable",
  },
  {
    amount: 50,
    description: "Sumate al mantenimiento de hogares",
  },
]

export function Donations() {
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
    <section id="donar" ref={sectionRef} className="py-24 px-4 bg-gradient-to-br from-[#3ECF8E] to-[#2AB876]">
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-3xl md:text-5xl font-bold text-center text-white mb-4 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tu ayuda, registrada para siempre
        </h2>

        <p
          className={`text-lg text-center text-white/90 mb-16 leading-relaxed transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Cada donación se almacena en blockchain, mostrando a qué hogar llega y en qué se utiliza.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {donationOptions.map((option, index) => (
            <Card
              key={index}
              className={`p-8 text-center space-y-4 bg-white/95 backdrop-blur-sm border-2 border-white hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl font-bold text-[#3ECF8E]">${option.amount}</div>
              <p className="text-[#1A1A1A] leading-relaxed">{option.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/test">
            <Button
              size="lg"
              className={`bg-white text-[#3ECF8E] hover:bg-white/90 rounded-xl px-12 py-6 text-lg font-semibold shadow-xl hover:scale-105 transition-all duration-700 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Donar ahora →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
