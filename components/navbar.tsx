"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold">
          <span className={`transition-colors duration-500 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}>
            Luz Verde
          </span>
          <span className="w-2 h-2 rounded-full bg-[#3ECF8E] animate-pulse" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className={`text-sm transition-colors duration-500 hover:text-[#3ECF8E] ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("como-funciona")}
            className={`text-sm transition-colors duration-500 hover:text-[#3ECF8E] ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            Cómo funciona
          </button>
          <button
            onClick={() => scrollToSection("transparencia")}
            className={`text-sm transition-colors duration-500 hover:text-[#3ECF8E] ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            Transparencia
          </button>
          <button
            onClick={() => scrollToSection("adoptar")}
            className={`text-sm transition-colors duration-500 hover:text-[#3ECF8E] ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            Adoptar
          </button>
          <Button
            onClick={() => scrollToSection("donar")}
            className="bg-[#3ECF8E] hover:bg-[#35b77d] text-white rounded-xl shadow-lg hover:shadow-[#3ECF8E]/50 transition-all duration-300"
          >
            Donar
          </Button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden transition-colors duration-500 ${scrolled ? "text-[#1A1A1A]" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm text-[#1A1A1A] hover:text-[#3ECF8E] transition-colors text-left py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm text-[#1A1A1A] hover:text-[#3ECF8E] transition-colors text-left py-2"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection("transparencia")}
              className="text-sm text-[#1A1A1A] hover:text-[#3ECF8E] transition-colors text-left py-2"
            >
              Transparencia
            </button>
            <button
              onClick={() => scrollToSection("adoptar")}
              className="text-sm text-[#1A1A1A] hover:text-[#3ECF8E] transition-colors text-left py-2"
            >
              Adoptar
            </button>
            <Button
              onClick={() => scrollToSection("donar")}
              className="bg-[#3ECF8E] hover:bg-[#35b77d] text-white rounded-xl shadow-lg w-full"
            >
              Donar
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
