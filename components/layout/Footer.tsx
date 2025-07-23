"use client"

import type React from "react"
import { useToast } from "@/hooks/use-toast"

const Footer = () => {
  const { toast } = useToast()

  const handleFeatureClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toast({
      title: "🚧 Esta función aún no está implementada",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo prompt! 🚀",
      duration: 3000,
    })
  }

  return (
    <footer className="py-12 px-4 bg-purple-900/50 border-t border-purple-300/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <span className="text-2xl font-bold text-white">Wiora</span>
            </div>
            <p className="text-purple-200 mb-4 max-w-md">
              La inteligencia artificial que transforma la educación, creando planes de estudio personalizados para cada
              estudiante.
            </p>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Producto</span>
            <ul className="space-y-2">
              <li>
                <button onClick={handleFeatureClick} className="text-purple-200 hover:text-white transition-colors">
                  Características
                </button>
              </li>
              <li>
                <button onClick={handleFeatureClick} className="text-purple-200 hover:text-white transition-colors">
                  Precios
                </button>
              </li>
              <li>
                <button onClick={handleFeatureClick} className="text-purple-200 hover:text-white transition-colors">
                  Demo
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Soporte</span>
            <ul className="space-y-2">
              <li>
                <button onClick={handleFeatureClick} className="text-purple-200 hover:text-white transition-colors">
                  Ayuda
                </button>
              </li>
              <li>
                <button onClick={handleFeatureClick} className="text-purple-200 hover:text-white transition-colors">
                  Contacto
                </button>
              </li>
              <li>
                <button onClick={handleFeatureClick} className="text-purple-200 hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-300/20 mt-8 pt-8 text-center">
          <p className="text-purple-200">© 2025 Wiora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
