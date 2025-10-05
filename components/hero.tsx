"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center px-4">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/emotional-black-and-white-portrait-of-child-lookin.jpg"
          alt="Child looking at light"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
          Cambiá un destino con transparencia real.
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
          Miles de niños esperan un hogar. Miles de personas quieren ayudar. Luz Verde conecta ambos mundos con
          blockchain para que cada acción tenga un impacto visible.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            onClick={() => scrollToSection("adoptar")}
            size="lg"
            className="bg-[#3ECF8E] hover:bg-[#3ECF8E]/90 text-white rounded-xl px-8 py-6 text-lg shadow-xl hover:shadow-[#3ECF8E]/50 transition-all"
          >
            💚 Quiero Adoptar
          </Button>
          <Button
            onClick={() => scrollToSection("donar")}
            size="lg"
            className="bg-[#1F7A54] hover:bg-[#1A6847] text-white border-2 border-[#1F7A54] hover:border-[#1A6847] rounded-xl px-8 py-6 text-lg shadow-xl transition-all"
          >
            🤝 Quiero Donar
          </Button>
        </div>
      </div>
    </section>
  )
}
