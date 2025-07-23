import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wiora AI",
  description:
    "Descubre Wiora, la inteligencia artificial que crea planes de estudio personalizados para ayudarte a estudiar de forma eficiente y práctica. ¡Aprende mejor con nuestra mascota coala!",
      icons: {
    icon: "/favicon.ico",
  },
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
