import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wiora - IA para Planes de Estudio Personalizados",
  description:
    "Descubre Wiora, la inteligencia artificial que crea planes de estudio personalizados para ayudarte a estudiar de forma eficiente y práctica. ¡Aprende mejor con nuestra mascota coala!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
