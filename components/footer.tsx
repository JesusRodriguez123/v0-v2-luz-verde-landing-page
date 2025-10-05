import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <span>Luz Verde</span>
              <span className="w-2 h-2 rounded-full bg-[#3ECF8E]" />
            </div>
            <p className="text-white/70 text-sm">Transparencia que transforma.</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegación</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#inicio" className="text-white/70 hover:text-[#3ECF8E] transition-colors text-sm">
                Inicio
              </Link>
              <Link href="#como-funciona" className="text-white/70 hover:text-[#3ECF8E] transition-colors text-sm">
                Cómo funciona
              </Link>
              <Link href="#transparencia" className="text-white/70 hover:text-[#3ECF8E] transition-colors text-sm">
                Transparencia
              </Link>
              <Link href="#adoptar" className="text-white/70 hover:text-[#3ECF8E] transition-colors text-sm">
                Adoptar
              </Link>
              <Link href="#donar" className="text-white/70 hover:text-[#3ECF8E] transition-colors text-sm">
                Donar
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3ECF8E] flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3ECF8E] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#3ECF8E] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          © 2025 Luz Verde. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
