"use client"

import { useEffect, useRef, useState } from "react"

export function Solution() {
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
    <section id="solucion" ref={sectionRef} className="py-16 md:py-24 px-4 bg-[#F4F4F4]">
      <div className="container mx-auto max-w-[800px]">
        <h2
          className={`text-3xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nuestra Solución: Transparencia que genera confianza
        </h2>

        <div className="space-y-6 text-[#1A1A1A] leading-relaxed text-lg">
          <p
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <strong>Luz Verde</strong> es una plataforma que conecta a quienes quieren adoptar con quienes quieren
            donar,
            <br />
            usando <strong>tecnología blockchain</strong> para garantizar que cada acción sea{" "}
            <strong>transparente, trazable y verificable</strong>.
          </p>

          <p
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Cada donación se registra en la blockchain de <strong>Polkadot</strong>.
            <br />
            Cada familia que inicia un proceso de adopción queda vinculada a un hogar específico.
            <br />
            Cada movimiento de fondos es <strong>público y auditable</strong>.
          </p>

          <p
            className={`text-xl font-semibold text-[#3ECF8E] my-8 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ¿Cómo funciona?
          </p>

          <div
            className={`space-y-4 pl-6 border-l-4 border-[#3ECF8E] transition-all duration-700 delay-[400ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p>
              <strong>1. Donás o aplicás para adoptar</strong>
              <br />
              <span className="text-[#1A1A1A]/70">
                Iniciás tu camino con nosotros, ya sea aportando recursos o comenzando el proceso de adopción.
              </span>
            </p>

            <p>
              <strong>2. La transacción se registra on-chain</strong>
              <br />
              <span className="text-[#1A1A1A]/70">
                Todo queda registrado en blockchain de forma inmutable y transparente.
              </span>
            </p>

            <p>
              <strong>3. Podés ver el impacto en tiempo real</strong>
              <br />
              <span className="text-[#1A1A1A]/70">
                Seguí cada peso donado, cada familia en proceso, cada niño que encuentra un hogar.
              </span>
            </p>
          </div>

          <p
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            No es solo tecnología.
            <br />
            Es <strong>confianza construida con código</strong>.
            <br />
            Es <strong>transparencia que invita a la acción</strong>.
          </p>

          <p
            className={`text-xl font-semibold text-center mt-10 transition-all duration-700 delay-[600ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Porque cuando podés <strong>ver</strong> el impacto,
            <br />
            es más fácil <strong>creer</strong> en él.
          </p>
        </div>
      </div>
    </section>
  )
}
